import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = fs.readFileSync(path.resolve(here, '../../js/diagnosticSteps.js'), 'utf8');
const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(source, context);
const data = context.window.DIAGNOSTIC_DATA;
const validateCatalog = context.window.validateDiagnosticCatalog;

test('diagnostic data has a version', () => {
  assert.match(data.version, /^\d+\.\d+\.\d+$/);
});

test('diagnostic catalog is fully reachable from each configured start', () => {
  assert.equal(JSON.stringify(validateCatalog(data)), '[]');
});

for (const [name, steps] of Object.entries(data).filter(([, value]) => Array.isArray(value))) {
  test(`${name} has unique keys`, () => {
    const keys = steps.map(step => step.key);
    assert.equal(new Set(keys).size, keys.length);
  });

  test(`${name} has valid branch targets`, () => {
    const keys = new Set(steps.map(step => step.key));
    const sharedKeys = name === 'vecvSteps' ? new Set(data.originalSteps.map(step => step.key)) : new Set();
    for (const step of steps) {
      for (const branch of [step.onYes, step.onNo]) {
        assert.ok(branch, `${step.key} is missing a branch`);
        const target = branch.jumpTo || branch.next;
        if (!branch.stop) assert.ok(keys.has(target) || sharedKeys.has(target), `${step.key} points to missing ${target}`);
      }
    }
  });
}

test('APS stages 1 to 4 evaluate consecutively without premature abort', () => {
  const steps = data.originalSteps;
  const s1 = steps.find(s => s.key === 'aps_stage1');
  const s2 = steps.find(s => s.key === 'aps_stage2');
  const s3 = steps.find(s => s.key === 'aps_stage3');
  const s4 = steps.find(s => s.key === 'aps_stage4');

  assert.equal(s1.onNo.next, 'aps_stage2', 'aps_stage1 onNo should advance to aps_stage2');
  assert.equal(s1.onNo.stop, undefined, 'aps_stage1 onNo should not prematurely abort');

  assert.equal(s2.onNo.next, 'aps_stage3', 'aps_stage2 onNo should advance to aps_stage3');
  assert.equal(s2.onNo.stop, undefined, 'aps_stage2 onNo should not prematurely abort');

  assert.equal(s3.onNo.next, 'aps_stage4', 'aps_stage3 onNo should advance to aps_stage4');
  assert.equal(s3.onNo.stop, undefined, 'aps_stage3 onNo should not prematurely abort');

  assert.equal(s4.onYes.next, 'rb_precheck_seated', 'aps_stage4 onYes should advance to Relay Box');
  assert.equal(s4.onNo.stop, true, 'aps_stage4 onNo terminates APS evaluation');
});
