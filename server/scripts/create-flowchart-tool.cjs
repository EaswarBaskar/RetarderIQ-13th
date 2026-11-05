const fs = require('fs');
const path = require('path');

const diagData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/diagnosticSteps.v1.0.2.json'), 'utf8'));
const tmlData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/tmlDiagnostic.v1.0.0.json'), 'utf8'));
const enData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/languages/en.json'), 'utf8'));

// Pre-process TML steps with English translations
const processedTmlSteps = Object.entries(tmlData.steps).map(([key, s]) => {
  let q = s.question || '';
  let title = s.title || '';
  let action = s.action || '';
  if (s.questionKeyDynamic) {
    q = (enData[s.questionKeyDynamic] || s.questionKeyDynamic).replace(/\{N\}/g, s.N || '');
  } else if (s.questionKey) {
    q = enData[s.questionKey] || s.questionKey;
  } else if (s.hint) {
    q = s.hint;
  }
  
  if (s.titleKeyDynamic) {
    title = (enData[s.titleKeyDynamic] || s.titleKeyDynamic).replace(/\{N\}/g, s.N || '');
  } else if (s.titleKey) {
    title = enData[s.titleKey] || s.titleKey;
  }
  
  if (s.actionKeyDynamic) {
    action = (enData[s.actionKeyDynamic] || s.actionKeyDynamic).replace(/\{N\}/g, s.N || '');
  } else if (s.actionKey) {
    action = enData[s.actionKey] || s.actionKey;
  }
  
  return {
    key,
    phase: s.phase,
    q: q || title || key,
    title: title || key,
    action: action,
    hint: s.hint,
    pins: s.pins,
    onYes: s.yes ? { next: s.yes, badge: 'step-pass' } : { stop: true, badge: s.pass ? 'step-pass' : 'step-fail', reason: action },
    onNo: s.no ? { next: s.no, badge: 'step-fail' } : { stop: true, badge: 'step-fail', reason: action }
  };
});

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RetarderIQ — Electrical Diagnostic Tree & Flowchart Visualizer</title>
  <style>
    :root {
      --primary: #0b5daa;
      --primary-hover: #094b8a;
      --primary-light: #e0f2fe;
      --bg: #f8fafc;
      --surface: #ffffff;
      --surface-subtle: #f1f5f9;
      --border: #e2e8f0;
      --border-hover: #94a3b8;
      --text: #0f172a;
      --text-muted: #64748b;
      --text-light: #94a3b8;
      --success: #16a34a;
      --success-bg: #dcfce7;
      --success-border: #86efac;
      --danger: #dc2626;
      --danger-bg: #fee2e2;
      --danger-border: #fca5a5;
      --warning: #d97706;
      --warning-bg: #fef3c7;
      --warning-border: #fde68a;
      --purple: #7c3aed;
      --purple-bg: #f3e8ff;
      --purple-border: #d8b4fe;
      --card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08);
      --card-shadow-hover: 0 10px 15px -3px rgba(11, 93, 170, 0.12), 0 4px 6px -4px rgba(11, 93, 170, 0.08);
    }

    [data-theme="dark"] {
      --bg: #090d16;
      --surface: #131c2e;
      --surface-subtle: #1e293b;
      --border: #24344d;
      --border-hover: #3b82f6;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --text-light: #64748b;
      --primary-light: rgba(11, 93, 170, 0.25);
      --success-bg: rgba(22, 163, 74, 0.15);
      --success-border: rgba(34, 197, 94, 0.35);
      --danger-bg: rgba(220, 38, 38, 0.15);
      --danger-border: rgba(239, 68, 68, 0.35);
      --warning-bg: rgba(217, 119, 6, 0.15);
      --warning-border: rgba(245, 158, 11, 0.35);
      --purple-bg: rgba(124, 58, 237, 0.15);
      --purple-border: rgba(168, 85, 247, 0.35);
      --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
      --card-shadow-hover: 0 12px 20px -3px rgba(0, 0, 0, 0.5);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.5;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--border-hover); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--primary); }

    .header-bar {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 16px 24px;
      position: sticky;
      top: 0;
      z-index: 40;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      font-size: 13px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.15s ease;
      white-space: nowrap;
    }
    .btn-primary { background: var(--primary); color: #fff; }
    .btn-primary:hover { background: var(--primary-hover); }
    .btn-secondary { background: var(--surface-subtle); color: var(--text); border-color: var(--border); }
    .btn-secondary:hover { background: var(--border); }
    .btn-success { background: var(--success); color: #fff; }
    .btn-danger { background: var(--danger); color: #fff; }

    .model-tab {
      padding: 6px 14px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 20px;
      border: 1px solid var(--border);
      background: var(--surface-subtle);
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .model-tab:hover { color: var(--text); border-color: var(--primary); }
    .model-tab.active {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
      box-shadow: 0 2px 6px rgba(11, 93, 170, 0.25);
    }

    .sub-toggle {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 12px;
      font-size: 11px;
      font-weight: 600;
      border-radius: 6px;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.15s;
    }
    .sub-toggle.active {
      background: var(--primary-light);
      border-color: var(--primary);
      color: var(--primary);
    }

    .stage-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      font-size: 11px;
      font-weight: 600;
      border-radius: 16px;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.15s;
    }
    .stage-pill:hover { border-color: var(--primary); color: var(--text); }

    .node-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 12px 14px;
      cursor: pointer;
      position: relative;
      box-shadow: var(--card-shadow);
      transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    }
    .node-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--card-shadow-hover);
      border-color: var(--primary);
    }
    .node-card.selected {
      border-color: var(--primary) !important;
      box-shadow: 0 0 0 3px rgba(11, 93, 170, 0.25) !important;
      background: var(--primary-light);
    }
    .node-card.highlight-target-yes {
      border-color: var(--success) !important;
      box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.3) !important;
    }
    .node-card.highlight-target-no {
      border-color: var(--danger) !important;
      box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.3) !important;
    }
    .node-card.highlight-source {
      border-color: var(--purple) !important;
      box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.3) !important;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 600;
      border-radius: 6px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    .badge-pass { background: var(--success-bg); color: var(--success); border: 1px solid var(--success-border); }
    .badge-fail { background: var(--danger-bg); color: var(--danger); border: 1px solid var(--danger-border); }
    .badge-warn { background: var(--warning-bg); color: var(--warning); border: 1px solid var(--warning-border); }
    .badge-action { background: var(--purple-bg); color: var(--purple); border: 1px solid var(--purple-border); }

    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .columns-wrapper {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      padding-bottom: 24px;
      align-items: flex-start;
      min-height: calc(100vh - 200px);
    }
    .stage-col {
      width: 320px;
      flex-shrink: 0;
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .stage-col-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }

    #svgOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 20;
    }
    .conn-path {
      fill: none;
      stroke-width: 2.5;
      stroke-dasharray: 6 3;
      animation: dash 1s linear infinite;
    }
    @keyframes dash {
      to { stroke-dashoffset: -9; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="header-bar">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      
      <!-- Title -->
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #0b5daa, #2563eb); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: bold; box-shadow: 0 4px 10px rgba(11, 93, 170, 0.3);">
          ⚡
        </div>
        <div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <h1 style="font-size: 18px; font-weight: 700; color: var(--text);">RetarderIQ Diagnostic Tree & Flowchart</h1>
            <span class="badge badge-pass" style="font-size: 10px;">v1.0.2</span>
          </div>
          <p style="font-size: 12px; color: var(--text-muted);">
            Full decision tree, next steps, failure isolation logic, and multimeter readings in one place.
          </p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div style="display: flex; align-items: center; gap: 10px;">
        <button id="btnViewFlow" class="btn btn-secondary active" onclick="switchView('flow')">
          <span>🗺️</span> Flowchart
        </button>
        <button id="btnViewSim" class="btn btn-secondary" onclick="switchView('sim')">
          <span>🧪</span> Live Simulator
        </button>
        <button id="btnViewBuilder" class="btn btn-secondary" onclick="switchView('builder')">
          <span>➕</span> Add / Edit Step
        </button>
        <button onclick="toggleTheme()" class="btn btn-secondary" title="Toggle Light/Dark Theme">
          <span id="themeIcon">🌓</span>
        </button>
      </div>
    </div>

    <!-- MODEL TABS & SEARCH -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 8px; overflow-x: auto; padding-bottom: 2px;" id="modelTabs">
        <button onclick="selectModel('ashok')" id="tab-ashok" class="model-tab active">
          Ashok Leyland BS-VI (53 steps)
        </button>
        <button onclick="selectModel('ashok_bs4')" id="tab-ashok_bs4" class="model-tab">
          Ashok Leyland BS-IV (53 steps)
        </button>
        <button onclick="selectModel('vecv')" id="tab-vecv" class="model-tab">
          VECV 6016/6019 (15 steps)
        </button>
        <button onclick="selectModel('tml')" id="tab-tml" class="model-tab">
          Tata Motors CAN (111 steps)
        </button>
        <button onclick="selectModel('triage')" id="tab-triage" class="model-tab">
          ⚡ Quick Triage (3 steps)
        </button>
        <button onclick="selectModel('intermittent')" id="tab-intermittent" class="model-tab">
          🔁 Intermittent (5 steps)
        </button>
      </div>

      <!-- Search Box -->
      <div style="position: relative; width: 260px;">
        <input type="text" id="searchInput" oninput="handleSearch(this.value)" placeholder="Search key, wire, pin, part no..." 
               style="width: 100%; padding: 7px 12px 7px 30px; font-size: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-subtle); color: var(--text); outline: none;">
        <span style="position: absolute; left: 9px; top: 7px; font-size: 12px; color: var(--text-light);">🔍</span>
      </div>
    </div>
  </header>

  <!-- MAIN VIEWPORT -->
  <main style="padding: 20px 24px; position: relative;">
    
    <!-- SUB-BAR: TML Specific View Switcher & Stage Pills -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
      
      <!-- Stage Pills -->
      <div style="display: flex; align-items: center; gap: 8px; overflow-x: auto; padding-bottom: 4px;" id="stagePills"></div>

      <!-- TML View Toggle (Hardware 5-Phases vs Blink Codes) -->
      <div id="tmlSubToggleBar" style="display: none; align-items: center; gap: 6px;">
        <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">TML Mode:</span>
        <button id="btnTmlHw" onclick="setTmlViewMode('hw')" class="sub-toggle active">
          <span>🔧</span> 5-Phase Hardware Flow (Recommended)
        </button>
        <button id="btnTmlBlink" onclick="setTmlViewMode('blink')" class="sub-toggle">
          <span>💡</span> Blink Code Diagnostics (Codes 1–20)
        </button>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 340px; gap: 20px; align-items: flex-start;">
      
      <!-- FLOWCHART HORIZONTAL STAGES -->
      <div id="flowViewContainer" style="overflow-x: auto; position: relative;">
        <svg id="svgOverlay"></svg>
        <div id="stagesGrid" class="columns-wrapper"></div>
      </div>

      <!-- SIMULATOR VIEW (Hidden by default) -->
      <div id="simViewContainer" style="display: none; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; box-shadow: var(--card-shadow);">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 16px; margin-bottom: 20px;">
          <div>
            <h3 style="font-size: 16px; font-weight: 700; color: var(--text); display: flex; align-items: center; gap: 8px;">
              <span>🧪</span> Interactive Diagnostic Simulator
            </h3>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
              Walk through the test questions using YES / NO to verify branch outcomes and see where the technician is guided.
            </p>
          </div>
          <button onclick="resetSimulator()" class="btn btn-secondary" style="font-size: 11px;">
            ↺ Reset
          </button>
        </div>

        <div id="simActiveCard" style="background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 20px;"></div>

        <div style="border-top: 1px solid var(--border); padding-top: 14px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Navigation Trail:</span>
          <div id="simBreadcrumbs" style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;"></div>
        </div>
      </div>

      <!-- STEP BUILDER VIEW (Hidden by default) -->
      <div id="builderViewContainer" style="display: none; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; box-shadow: var(--card-shadow);">
        <div style="border-bottom: 1px solid var(--border); padding-bottom: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: 700; color: var(--text); display: flex; align-items: center; gap: 8px;">
            <span>➕</span> Step Code Generator & Validator
          </h3>
          <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
            Safely build a new electrical check or branch. Outputs clean, validated JSON/JS code ready for diagnosticSteps.js.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; font-size: 12px;">
          <div>
            <label style="font-weight: 600; color: var(--text); display: block; margin-bottom: 4px;">Step Key (Unique ID):</label>
            <input type="text" id="buildKey" placeholder="e.g. rb_coil_resistance" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-subtle); color: var(--text);">
          </div>
          <div>
            <label style="font-weight: 600; color: var(--text); display: block; margin-bottom: 4px;">Insert After Step:</label>
            <select id="buildParent" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-subtle); color: var(--text);"></select>
          </div>
          <div style="grid-column: span 2;">
            <label style="font-weight: 600; color: var(--text); display: block; margin-bottom: 4px;">Question Text (q):</label>
            <textarea id="buildQ" rows="2" placeholder="e.g. Is relay coil resistance within 28Ω – 32Ω?" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-subtle); color: var(--text);"></textarea>
          </div>
          <div>
            <label style="font-weight: 600; color: var(--success); display: block; margin-bottom: 4px;">On YES $\\rightarrow$ Next Step:</label>
            <input type="text" id="buildYesNext" placeholder="e.g. rb_output_stage1" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-subtle); color: var(--text);">
          </div>
          <div>
            <label style="font-weight: 600; color: var(--danger); display: block; margin-bottom: 4px;">On NO $\\rightarrow$ Target (or Stop):</label>
            <div style="display: flex; gap: 8px;">
              <input type="text" id="buildNoTarget" placeholder="e.g. STOP or next_key" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-subtle); color: var(--text);">
              <label style="display: flex; align-items: center; gap: 4px; white-space: nowrap; font-size: 11px;">
                <input type="checkbox" id="buildNoStop" checked> Terminal Fault
              </label>
            </div>
          </div>
          <div style="grid-column: span 2;">
            <label style="font-weight: 600; color: var(--text); display: block; margin-bottom: 4px;">Failure Reason & Part Number:</label>
            <input type="text" id="buildNoReason" placeholder="e.g. Relay coil failure. Replace Relay Box Part No: 96503095" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-subtle); color: var(--text);">
          </div>
        </div>

        <div style="margin-top: 16px;">
          <button onclick="generateStepCode()" class="btn btn-primary">Generate Code Snippet</button>
        </div>

        <div id="buildOutput" style="display: none; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">
            <span>Code Snippet (Ready for diagnosticSteps.js):</span>
            <button onclick="copySnippet()" style="color: var(--primary); background: none; border: none; font-weight: bold; cursor: pointer;">Copy</button>
          </div>
          <pre id="buildSnippet" style="background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 8px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto; color: var(--primary);"></pre>
        </div>
      </div>

      <!-- RIGHT SIDEBAR: STEP INSPECTOR -->
      <aside style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 18px; position: sticky; top: 120px; box-shadow: var(--card-shadow); max-height: calc(100vh - 140px); overflow-y: auto;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 14px;">
          <h3 style="font-size: 13px; font-weight: 700; color: var(--text); display: flex; align-items: center; gap: 6px;">
            <span>🔍</span> Step Inspector
          </h3>
          <span id="inspectStagePill" class="badge" style="background: var(--primary-light); color: var(--primary); border: 1px solid var(--border);">Select a step</span>
        </div>

        <div id="inspectorContent">
          <div style="text-align: center; padding: 40px 10px; color: var(--text-light); font-size: 12px;">
            <div style="font-size: 28px; margin-bottom: 8px;">👈</div>
            Click on any step card in the flowchart to inspect full wire colors, pins, expected voltage, jump targets, and isolation logic.
          </div>
        </div>
      </aside>

    </div>
  </main>

  <script>
    const DIAG_DATA = ${JSON.stringify(diagData)};
    const TML_PROCESSED_STEPS = ${JSON.stringify(processedTmlSteps)};

    // Stage Mappings for Ashok Leyland
    const ASHOK_STAGE_MAP = {
      stage_1: { title: "1. Customer Mating Conn", color: "#0b5daa", keys: ["green", "green_fuse", "green_abs3", "green_vehicle_conn", "black", "yellow"] },
      stage_2: { title: "2. ECU Speed Box", color: "#7c3aed", keys: ["sb_green", "sb_green_continuity", "sb_black", "sb_black_continuity", "sb_grey_pulses", "sb_bypass_check", "sb_yellow_path", "sb_violet_output"] },
      stage_3: { title: "3. Retarder Switch", color: "#db2777", keys: ["sw_violet_input", "sw_violet_continuity", "sw_pink_output"] },
      stage_4: { title: "4. Air Pressure Switch", color: "#0891b2", keys: ["aps_pin1_input", "aps_pin1_continuity", "aps_pin1_recheck", "aps_internal_supply", "aps_output_check", "aps_hose_check", "aps_stage1", "aps_stage2", "aps_stage3", "aps_stage4"] },
      stage_5: { title: "5. Relay Box", color: "#d97706", keys: ["rb_precheck_seated", "rb_precheck_pins", "rb_cutoff_pos", "rb_cutoff_output", "rb_cutoff_input", "rb_battery_check", "rb_verify_ground", "rb_ground_contact", "rb_negative_cable_condition", "rb_aps_signal_check", "rb_energization", "rb_fuse_check", "rb_output_stage1", "rb_output_stage2", "rb_output_stage3", "rb_output_stage4", "rb_output_check", "rb_final_confirmation"] },
      stage_6: { title: "6. Retarder Unit & Dash", color: "#16a34a", keys: ["ret_mb_check", "ret_power_check", "ret_coil_ground_check", "ret_power_voltage_check", "dash_backlight_check", "dash_indicator_check", "dash_taillamp_check", "dash_final_check"] }
    };

    // Stage Mappings for VECV
    const VECV_STAGE_MAP = {
      vecv_1: { title: "1. Supply & Mating Conn", color: "#0b5daa", keys: ["vecv_q1", "vecv_q1_fuse", "vecv_q1_relay", "vecv_q1_wiring", "vecv_q1_recheck", "vecv_q2", "vecv_q3"] },
      vecv_2: { title: "2. ECU Speed Box", color: "#7c3aed", keys: ["vecv_q4", "vecv_q5", "vecv_q6", "vecv_q7"] },
      vecv_3: { title: "3. Retarder Switch", color: "#db2777", keys: ["vecv_q8", "vecv_q9", "vecv_q10"] },
      vecv_4: { title: "4. APS Continuity", color: "#0891b2", keys: ["vecv_aps_continuity"] }
    };

    // Stage Mappings for TML: 5-Phase Hardware Flow (Matches Ashok Leyland Clean Columns!)
    const TML_HARDWARE_STAGE_MAP = {
      tml_hw_1: {
        title: "1. Cluster & Warning Lamps",
        color: "#0b5daa",
        keys: ["cluster_check", "stop_abs_fault", "stop_hsa_fault", "stop_slip_fault"]
      },
      tml_hw_2: {
        title: "2. ECS Box Assembly",
        color: "#7c3aed",
        keys: ["ecs_step_3_1", "end_ecs_3_1", "ecs_step_3_2", "end_ecs_3_2", "ecs_step_3_3", "end_ecs_3_3", "ecs_step_3_4", "end_ecs_3_4", "ecs_step_3_5", "end_ecs_3_5"]
      },
      tml_hw_3: {
        title: "3. 8-Pin Vehicle Connector",
        color: "#db2777",
        keys: ["veh_pin1", "end_pin1", "veh_pin2", "end_pin2", "veh_pin3", "end_pin3", "veh_pin4", "veh_pin4_secondary", "end_pin4_switch_ok", "end_pin4_switch_fault", "veh_pin5", "end_pin5", "veh_pin8", "end_pin8"]
      },
      tml_hw_4: {
        title: "4. Pneumatic Pressure Switches",
        color: "#0891b2",
        keys: ["pressure_switch_1", "end_ps_1", "pressure_switch_2", "end_ps_2", "pressure_switch_3", "end_ps_3", "pressure_switch_4", "end_ps_4", "pressure_switch_5"]
      },
      tml_hw_5: {
        title: "5. Retarder Trial & Engagement",
        color: "#16a34a",
        keys: ["retarder_trial_1", "retarder_not_engaging", "retarder_trial_2", "end_success", "end_retarder_malfunction"]
      }
    };

    // Stage Mappings for TML: Blink Code Isolation Flow
    const TML_BLINK_STAGE_MAP = {
      tml_bk_1: {
        title: "1. Coil Open (Codes 1–4)",
        color: "#dc2626",
        keys: ["blink_1_investigation", "blink_1_fault", "blink_1_analysis_req", "blink_2_investigation", "blink_2_fault", "blink_2_analysis_req", "blink_3_investigation", "blink_3_fault", "blink_3_analysis_req", "blink_4_investigation", "blink_4_fault", "blink_4_analysis_req"]
      },
      tml_bk_2: {
        title: "2. Coil Short (Codes 5–8)",
        color: "#d97706",
        keys: ["blink_5_investigation", "blink_5_fault", "blink_5_analysis_req", "blink_6_investigation", "blink_6_fault", "blink_6_analysis_req", "blink_7_investigation", "blink_7_fault", "blink_7_analysis_req", "blink_8_investigation", "blink_8_fault", "blink_8_analysis_req"]
      },
      tml_bk_3: {
        title: "3. Vehicle CAN (Codes 9–15)",
        color: "#0b5daa",
        keys: ["blink_9_investigation", "blink_9_fault", "blink_9_analysis_req", "blink_10_investigation", "blink_10_fault", "blink_10_analysis_req", "blink_11_investigation", "blink_11_fault", "blink_11_analysis_req", "blink_12_investigation", "blink_12_fault", "blink_12_analysis_req", "blink_13_investigation", "blink_13_fault", "blink_13_analysis_req", "blink_14_investigation", "blink_14_fault", "blink_14_analysis_req", "blink_15_investigation", "blink_15_fault", "blink_15_analysis_req"]
      },
      tml_bk_4: {
        title: "4. Diodes (Codes 17–20)",
        color: "#7c3aed",
        keys: ["blink_17_investigation", "blink_17_fault", "blink_17_ecs_wiring", "blink_17_ecs_fault", "blink_17_analysis_req", "blink_18_investigation", "blink_18_fault", "blink_18_ecs_wiring", "blink_18_ecs_fault", "blink_18_analysis_req", "blink_19_investigation", "blink_19_fault", "blink_19_ecs_wiring", "blink_19_ecs_fault", "blink_19_analysis_req", "blink_20_investigation", "blink_20_fault", "blink_20_ecs_wiring", "blink_20_ecs_fault", "blink_20_analysis_req"]
      }
    };

    // Pin probe guide metadata
    const STEP_PROBE_SPECS = {
      // Ashok Leyland
      green: { pin: "Pin 1", wire: "Green (+24V)", test: "DC Voltage", expected: "22V – 28V DC", icon: "🟢" },
      green_fuse: { pin: "Fuse Box", wire: "10A Fuse", test: "Fuse Resistance", expected: "0 Ω (Continuity)", icon: "🛡️" },
      green_abs3: { pin: "ABS Relay", wire: "Relay 3rd Braking", test: "Relay Operation", expected: "Audible click & 24V", icon: "⚡" },
      black: { pin: "Pin 2", wire: "Black (Ground)", test: "Resistance to Chassis", expected: "< 0.5 Ω", icon: "⚫" },
      yellow: { pin: "Pin 3", wire: "Yellow/White (Speed)", test: "Frequency Meter", expected: "> 15 Hz while rotating", icon: "🟡" },
      sb_green: { pin: "Speed Box Pin 1", wire: "Green (+24V)", test: "DC Voltage", expected: "24V with Ignition ON", icon: "🟢" },
      sb_black: { pin: "Speed Box Pin 4", wire: "Black (Ground)", test: "Continuity", expected: "< 0.5 Ω", icon: "⚫" },
      sb_grey_pulses: { pin: "Speed Box Pin 2", wire: "Yellow/White (Speed)", test: "Frequency Meter", expected: "> 15 Hz at speed > 5 km/h", icon: "🟡" },
      sb_violet_output: { pin: "Speed Box Pin 3", wire: "Violet (Output)", test: "DC Voltage", expected: "24V when speed > 5 km/h", icon: "🟣" },
      sw_violet_input: { pin: "Switch Pin 1", wire: "Violet (Supply)", test: "DC Voltage", expected: "24V when vehicle moving", icon: "🟣" },
      sw_pink_output: { pin: "Switch Pin 2", wire: "Pink (Output)", test: "DC Voltage", expected: "24V when Switch ON", icon: "🌸" },
      aps_pin1_input: { pin: "APS Pin 1", wire: "Pink (Input)", test: "DC Voltage", expected: "24V with Switch ON", icon: "🌸" },
      aps_stage1: { pin: "APS Stage 1", wire: "Pin C1", test: "Brake 0.20 bar", expected: "24V output", icon: "🔵" },
      aps_stage2: { pin: "APS Stage 2", wire: "Pin C2", test: "Brake 0.34 bar", expected: "24V output", icon: "🔵" },
      aps_stage3: { pin: "APS Stage 3", wire: "Pin C3", test: "Brake 0.47 bar", expected: "24V output", icon: "🔵" },
      aps_stage4: { pin: "APS Stage 4", wire: "Pin C4", test: "Brake 0.68 bar", expected: "24V output", icon: "🔵" },
      rb_cutoff_pos: { pin: "Cut-off Switch", wire: "Battery Feed", test: "DC Voltage", expected: "24V at Output terminal", icon: "🔘" },
      rb_output_stage1: { pin: "Relay F1", wire: "Relay 1 Out", test: "DC Voltage", expected: "24V to Retarder Coil 1", icon: "⚡" },
      rb_output_stage2: { pin: "Relay F2", wire: "Relay 2 Out", test: "DC Voltage", expected: "24V to Retarder Coil 2", icon: "⚡" },
      rb_output_stage3: { pin: "Relay F3", wire: "Relay 3 Out", test: "DC Voltage", expected: "24V to Retarder Coil 3", icon: "⚡" },
      rb_output_stage4: { pin: "Relay F4", wire: "Relay 4 Out", test: "DC Voltage", expected: "24V to Retarder Coil 4", icon: "⚡" },
      dash_final_check: { pin: "Dashboard", wire: "MB Indicator & Tell-tale", test: "Visual / Voltage", expected: "Lamp Illuminated", icon: "💡" },

      // Tata Motors (TML) Probe Specs
      cluster_check: { pin: "Instrument Cluster", wire: "Dashboard Tell-tale", test: "Visual Check", expected: "Retarder Lamp ON", icon: "🖥️" },
      ecs_step_3_1: { pin: "ECS Power Terminal", wire: "Battery +24V Supply", test: "DC Voltage", expected: "22V – 28V DC", icon: "🔋" },
      ecs_step_3_2: { pin: "ECS Ground Terminal", wire: "Chassis Ground", test: "Continuity", expected: "< 0.5 Ω to chassis", icon: "⚫" },
      ecs_step_3_3: { pin: "Cut-off Terminal", wire: "Switched Positive", test: "DC Voltage", expected: "24V with Cut-off ON", icon: "🔘" },
      ecs_step_3_4: { pin: "CAN Terminals", wire: "CAN High & Low", test: "CAN Resistance", expected: "60 Ω between CAN-H/L", icon: "🌐" },
      ecs_step_3_5: { pin: "ECS Relays", wire: "Internal Relay Coil", test: "Audible Test", expected: "Relay click sound", icon: "⚡" },
      veh_pin1: { pin: "Pin 1 (Yellow)", wire: "CAN-High Signal", test: "DC Voltage", expected: "> 2.5V (with Ign ON)", icon: "🟡" },
      veh_pin2: { pin: "Pin 2 (Green)", wire: "CAN-Low Signal", test: "DC Voltage", expected: "< 2.5V (with Ign ON)", icon: "🟢" },
      veh_pin3: { pin: "Pin 3 (White/Yellow)", wire: "APS Supply", test: "DC Voltage", expected: "24V with Ign ON", icon: "⚡" },
      veh_pin4: { pin: "Pin 4 (Pink/Black)", wire: "Retarder Switch", test: "Continuity / 24V", expected: "24V when Switch ON", icon: "🌸" },
      veh_pin5: { pin: "Pin 5 (Grey/Red)", wire: "MB Indicator", test: "Resistance / Light", expected: "Lamp illuminated", icon: "💡" },
      veh_pin8: { pin: "Pin 8 (Blue)", wire: "Speed Pulse", test: "Frequency Meter", expected: "> 15 Hz while moving", icon: "🔵" },
      pressure_switch_1: { pin: "Pressure Switch 1", wire: "Stage 1 (0.20 bar)", test: "Pneumatic / Ohms", expected: "Closes at 0.2 bar", icon: "💨" },
      pressure_switch_2: { pin: "Pressure Switch 2", wire: "Stage 2 (0.40 bar)", test: "Pneumatic / Ohms", expected: "Closes at 0.4 bar", icon: "💨" },
      pressure_switch_3: { pin: "Pressure Switch 3", wire: "Stage 3 (0.60 bar)", test: "Pneumatic / Ohms", expected: "Closes at 0.6 bar", icon: "💨" },
      pressure_switch_4: { pin: "Pressure Switch 4", wire: "Stage 4 (0.80 bar)", test: "Pneumatic / Ohms", expected: "Closes at 0.8 bar", icon: "💨" },
      pressure_switch_5: { pin: "Pressure Switch 5", wire: "Stage 5 (1.00 bar)", test: "Pneumatic / Ohms", expected: "Closes at 1.0 bar", icon: "💨" },
      retarder_trial_1: { pin: "Road Test", wire: "Torque Engagement", test: "Speed > 5 km/h", expected: "Braking torque felt", icon: "🛣️" },
      retarder_not_engaging: { pin: "Engagement Check", wire: "Retarder Action", test: "Functional Test", expected: "Vehicle slows down", icon: "🛣️" }
    };

    let currentModel = 'ashok';
    let currentSteps = DIAG_DATA.originalSteps;
    let selectedStepKey = null;
    let simHistory = [];
    let currentSimStepKey = 'green';
    let tmlViewMode = 'hw'; // 'hw' (5-Phase Hardware) or 'blink' (Blink Codes)

    function init() {
      selectModel('ashok');
      window.addEventListener('resize', drawConnections);
    }

    function toggleTheme() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      document.getElementById('themeIcon').textContent = isDark ? '🌓' : '☀️';
      drawConnections();
    }

    function setTmlViewMode(mode) {
      tmlViewMode = mode;
      document.getElementById('btnTmlHw').classList.toggle('active', mode === 'hw');
      document.getElementById('btnTmlBlink').classList.toggle('active', mode === 'blink');
      renderFlowchart();
      renderStagePills();
    }

    function selectModel(modelName) {
      currentModel = modelName;
      document.querySelectorAll('.model-tab').forEach(b => b.classList.remove('active'));
      document.getElementById('tab-' + modelName)?.classList.add('active');

      const tmlToggle = document.getElementById('tmlSubToggleBar');
      if (tmlToggle) tmlToggle.style.display = modelName === 'tml' ? 'flex' : 'none';

      if (modelName === 'ashok') {
        currentSteps = DIAG_DATA.originalSteps;
        currentSimStepKey = 'green';
      } else if (modelName === 'ashok_bs4') {
        const bs4Overrides = {
          yellow: 'Is Yellow (Vehicle Speed digital signal) present? (Check frequency: should be > 15 Hz while wheels rotate)',
          sb_grey_pulses: 'With wheels rotating (>5 km/h), are Yellow/Grey speed pulses present at the ECU Speed Box input? (Check frequency: should be > 15 Hz)',
          sb_bypass_check: 'Is Yellow/White (vehicle speed) reaching the Speed Booster bypass and continuing as Yellow/White to the ECU Speed Box?',
          sb_yellow_path: 'Check continuity between Customer Mating Connector (Yellow wire) and Speed Box Booster connector (Yellow wire). Is it OK?'
        };
        currentSteps = DIAG_DATA.originalSteps.map(s => ({
          ...s,
          q: bs4Overrides[s.key] || s.q
        }));
        currentSimStepKey = 'green';
      } else if (modelName === 'vecv') {
        currentSteps = DIAG_DATA.vecvSteps;
        currentSimStepKey = 'vecv_q1';
      } else if (modelName === 'triage') {
        currentSteps = DIAG_DATA.triageSteps;
        currentSimStepKey = 'triage_q1';
      } else if (modelName === 'intermittent') {
        currentSteps = DIAG_DATA.intermittentSteps;
        currentSimStepKey = 'int_q1';
      } else if (modelName === 'tml') {
        currentSteps = TML_PROCESSED_STEPS;
        currentSimStepKey = 'cluster_check';
      }

      renderFlowchart();
      renderStagePills();
      populateBuilderParents();
      resetSimulator();
      if (currentSteps.length > 0) inspectStep(currentSteps[0].key);
    }

    function renderStagePills() {
      const container = document.getElementById('stagePills');
      container.innerHTML = '';

      let stages = {};
      if (currentModel === 'ashok' || currentModel === 'ashok_bs4') stages = ASHOK_STAGE_MAP;
      else if (currentModel === 'vecv') stages = VECV_STAGE_MAP;
      else if (currentModel === 'tml') {
        stages = tmlViewMode === 'hw' ? TML_HARDWARE_STAGE_MAP : TML_BLINK_STAGE_MAP;
      }

      if (!Object.keys(stages).length) return;

      for (const [id, stage] of Object.entries(stages)) {
        const btn = document.createElement('button');
        btn.className = 'stage-pill';
        btn.innerHTML = \`<span style="width:8px; height:8px; border-radius:50%; background:\${stage.color};"></span> \${stage.title}\`;
        btn.onclick = () => {
          const col = document.getElementById('col-' + id);
          if (col) col.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        };
        container.appendChild(btn);
      }
    }

    function getStepStage(key) {
      if (currentModel === 'ashok' || currentModel === 'ashok_bs4') {
        for (const [id, s] of Object.entries(ASHOK_STAGE_MAP)) {
          if (s.keys.includes(key)) return { id, ...s };
        }
      } else if (currentModel === 'vecv') {
        for (const [id, s] of Object.entries(VECV_STAGE_MAP)) {
          if (s.keys.includes(key)) return { id, ...s };
        }
      } else if (currentModel === 'tml') {
        const map = tmlViewMode === 'hw' ? TML_HARDWARE_STAGE_MAP : TML_BLINK_STAGE_MAP;
        for (const [id, s] of Object.entries(map)) {
          if (s.keys.includes(key)) return { id, ...s };
        }
      }
      return { id: 'default', title: 'Diagnostic Step', color: 'var(--primary)' };
    }

    function renderFlowchart() {
      const container = document.getElementById('stagesGrid');
      container.innerHTML = '';

      let stageGroups = {};
      if (currentModel === 'ashok' || currentModel === 'ashok_bs4') {
        for (const [id, s] of Object.entries(ASHOK_STAGE_MAP)) stageGroups[id] = { ...s, steps: [] };
      } else if (currentModel === 'vecv') {
        for (const [id, s] of Object.entries(VECV_STAGE_MAP)) stageGroups[id] = { ...s, steps: [] };
      } else if (currentModel === 'tml') {
        const map = tmlViewMode === 'hw' ? TML_HARDWARE_STAGE_MAP : TML_BLINK_STAGE_MAP;
        for (const [id, s] of Object.entries(map)) stageGroups[id] = { ...s, steps: [] };
      } else {
        stageGroups['all'] = { title: 'Diagnostic Sequence', color: 'var(--primary)', steps: [] };
      }

      currentSteps.forEach(step => {
        let placed = false;
        for (const [id, group] of Object.entries(stageGroups)) {
          if (group.keys && group.keys.includes(step.key)) {
            group.steps.push(step);
            placed = true;
            break;
          }
        }
        // In TML mode, we don't dump unselected mode steps into a giant 'other' column
        if (!placed && currentModel !== 'tml') {
          if (!stageGroups['other']) stageGroups['other'] = { title: 'Additional Steps', color: '#64748b', steps: [] };
          stageGroups['other'].steps.push(step);
        }
      });

      for (const [stageId, stage] of Object.entries(stageGroups)) {
        if (!stage.steps.length) continue;

        const col = document.createElement('div');
        col.id = 'col-' + stageId;
        col.className = 'stage-col';

        col.innerHTML = \`
          <div class="stage-col-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:10px; height:10px; border-radius:50%; background:\${stage.color};"></span>
              <h4 style="font-size:12px; font-weight:700; color:var(--text); text-transform:uppercase; letter-spacing:0.5px;">\${stage.title}</h4>
            </div>
            <span class="badge" style="background:var(--surface); border:1px solid var(--border); color:var(--text-muted);">\${stage.steps.length} checks</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px; overflow-y:auto; max-height:calc(100vh - 280px); padding-right:2px;" id="cards-\${stageId}"></div>
        \`;

        container.appendChild(col);
        const cardsContainer = col.querySelector(\`#cards-\${stageId}\`);

        stage.steps.forEach(step => {
          const card = createNodeCard(step, stage.color);
          cardsContainer.appendChild(card);
        });
      }

      setTimeout(drawConnections, 100);
    }

    function createNodeCard(step, accentColor) {
      const card = document.createElement('div');
      card.id = 'card-' + step.key;
      card.className = 'node-card';
      card.onclick = () => inspectStep(step.key);

      const yesTarget = step.onYes?.jumpTo || step.onYes?.next || (step.onYes?.stop ? '🛑 COMPLETE' : '—');
      const noTarget = step.onNo?.jumpTo || step.onNo?.next || (step.onNo?.stop ? '🛑 FAULT STOP' : '—');
      const isLoop = !!step.onNo?.jumpTo;
      const spec = STEP_PROBE_SPECS[step.key];

      const cleanQ = String(step.q || '').replace(/<[^>]*>/g, ' ').replace(/\\s+/g, ' ').trim();

      card.innerHTML = \`
        <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:6px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="font-size:12px;">\${spec?.icon || '📌'}</span>
            <span style="font-family:ui-monospace, monospace; font-size:12px; font-weight:700; color:var(--primary);">\${step.key}</span>
          </div>
          \${isLoop ? '<span class="badge badge-warn">🔁 loop</span>' : ''}
          \${spec?.expected ? \`<span class="badge" style="background:var(--primary-light); color:var(--primary); font-size:10px;">\${spec.expected}</span>\` : ''}
        </div>
        
        <p class="line-clamp" style="font-size:12px; color:var(--text); margin-bottom:8px; line-height:1.4;">\${cleanQ}</p>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; padding-top:6px; border-top:1px solid var(--border); font-size:11px; font-family:ui-monospace, monospace;">
          <div style="background:var(--success-bg); color:var(--success); border:1px solid var(--success-border); padding:3px 6px; border-radius:6px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="YES: \${yesTarget}">
            <strong>✓</strong> \${yesTarget}
          </div>
          <div style="background:var(--danger-bg); color:var(--danger); border:1px solid var(--danger-border); padding:3px 6px; border-radius:6px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="NO: \${noTarget}">
            <strong>✗</strong> \${noTarget}
          </div>
        </div>
      \`;

      return card;
    }

    function inspectStep(key) {
      selectedStepKey = key;
      const step = currentSteps.find(s => s.key === key);
      if (!step) return;

      document.querySelectorAll('.node-card').forEach(c => {
        c.classList.remove('selected', 'highlight-target-yes', 'highlight-target-no', 'highlight-source');
      });

      const activeCard = document.getElementById('card-' + key);
      if (activeCard) {
        activeCard.classList.add('selected');
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }

      const yesTarget = step.onYes?.jumpTo || step.onYes?.next;
      const noTarget = step.onNo?.jumpTo || step.onNo?.next;
      if (yesTarget) document.getElementById('card-' + yesTarget)?.classList.add('highlight-target-yes');
      if (noTarget) document.getElementById('card-' + noTarget)?.classList.add('highlight-target-no');

      currentSteps.forEach(other => {
        const otherYes = other.onYes?.jumpTo || other.onYes?.next;
        const otherNo = other.onNo?.jumpTo || other.onNo?.next;
        if (otherYes === key || otherNo === key) {
          document.getElementById('card-' + other.key)?.classList.add('highlight-source');
        }
      });

      const stage = getStepStage(key);
      const stagePill = document.getElementById('inspectStagePill');
      stagePill.textContent = stage.title;
      stagePill.style.borderColor = stage.color;

      const spec = STEP_PROBE_SPECS[key];
      const isBs4 = currentModel === 'ashok_bs4';
      const isTml = currentModel === 'tml';

      const inspector = document.getElementById('inspectorContent');
      inspector.innerHTML = \`
        <div style="display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div>
            <span style="font-size:10px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Check ID</span>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-top:2px;">
              <span style="font-family:ui-monospace, monospace; font-size:14px; font-weight:700; color:var(--text);">\${step.key}</span>
              <button onclick="jumpToSimStep('\${step.key}')" class="btn btn-secondary" style="font-size:10px; padding:3px 8px;">Run in Sim 🧪</button>
            </div>
          </div>

          \${spec ? \`
            <div style="background:var(--surface-subtle); border:1px solid var(--border); border-radius:8px; padding:10px;">
              <span style="font-size:10px; font-weight:700; color:var(--text-muted); text-transform:uppercase; display:block; margin-bottom:4px;">Multimeter Probe Guide</span>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:11px;">
                <div><strong>Pin / Target:</strong> <br>\${spec.pin}</div>
                <div><strong>Signal / Wire:</strong> <br>\${isBs4 && key === 'yellow' ? 'Yellow (solid)' : spec.wire}</div>
                <div><strong>Setting:</strong> <br>\${spec.test}</div>
                <div><strong>Expected Spec:</strong> <br><span class="badge badge-pass">\${spec.expected}</span></div>
              </div>
            </div>
          \` : ''}

          \${step.hint ? \`
            <div style="background:var(--primary-light); border:1px solid var(--border); border-radius:8px; padding:8px 10px; font-size:11px; color:var(--primary);">
              <strong>💡 Tech Tip:</strong> \${step.hint}
            </div>
          \` : ''}

          <div style="background:var(--surface-subtle); border:1px solid var(--border); border-radius:8px; padding:10px;">
            <span style="font-size:10px; font-weight:700; color:var(--text-muted); text-transform:uppercase; display:block; margin-bottom:4px;">Question Text</span>
            <div style="color:var(--text); line-height:1.4;">\${step.q}</div>
          </div>

          <div style="background:var(--success-bg); border:1px solid var(--success-border); border-radius:8px; padding:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <strong style="color:var(--success);">✅ If YES (Condition Met)</strong>
              <span class="badge badge-pass">\${step.onYes?.badge || 'step-pass'}</span>
            </div>
            <div style="font-family:ui-monospace, monospace; font-size:11px;">
              Next Step: <strong style="cursor:pointer; text-decoration:underline;" onclick="inspectStep('\${step.onYes?.next || step.onYes?.jumpTo}')">\${step.onYes?.next || step.onYes?.jumpTo || (step.onYes?.stop ? '🛑 COMPLETE' : '—')}</strong>
            </div>
            \${step.onYes?.reason ? \`<p style="margin-top:4px; font-size:11px; color:var(--text-muted); font-style:italic;">\${step.onYes.reason}</p>\` : ''}
          </div>

          <div style="background:var(--danger-bg); border:1px solid var(--danger-border); border-radius:8px; padding:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <strong style="color:var(--danger);">❌ If NO (Condition Failed)</strong>
              <span class="badge badge-fail">\${step.onNo?.badge || 'step-fail'}</span>
            </div>
            <div style="font-family:ui-monospace, monospace; font-size:11px;">
              Next Step: <strong style="cursor:pointer; text-decoration:underline;" onclick="inspectStep('\${step.onNo?.next || step.onNo?.jumpTo}')">\${step.onNo?.next || step.onNo?.jumpTo || (step.onNo?.stop ? '🛑 TERMINAL FAULT' : '—')}</strong>
              \${step.onNo?.jumpTo ? '<span style="color:var(--warning); margin-left:4px;">(re-test loop)</span>' : ''}
            </div>
            \${step.onNo?.reason || step.action ? \`
              <div style="margin-top:6px; padding:6px 8px; background:rgba(220,38,38,0.1); border-radius:6px; font-size:11px; color:var(--danger); line-height:1.4;">
                <strong>Remedy & Action:</strong> \${step.onNo?.reason || step.action}
              </div>
            \` : ''}
          </div>

          <div>
            <span style="font-size:10px; font-weight:700; color:var(--text-muted); text-transform:uppercase; display:block; margin-bottom:4px;">Incoming Steps (Jumped from)</span>
            <div style="display:flex; flex-wrap:wrap; gap:4px;">
              \${getIncomingPills(step.key)}
            </div>
          </div>
        </div>
      \`;

      drawConnections();
    }

    function getIncomingPills(key) {
      const incoming = [];
      currentSteps.forEach(other => {
        const yesTarget = other.onYes?.jumpTo || other.onYes?.next;
        const noTarget = other.onNo?.jumpTo || other.onNo?.next;
        if (yesTarget === key) incoming.push({ key: other.key, branch: 'YES' });
        if (noTarget === key) incoming.push({ key: other.key, branch: 'NO' });
      });

      if (!incoming.length) return '<span style="color:var(--text-light); font-size:11px; font-style:italic;">Start of diagnostic sequence</span>';
      return incoming.map(inc => \`
        <button onclick="inspectStep('\${inc.key}')" class="badge" style="background:var(--surface-subtle); border:1px solid var(--border); color:var(--text); cursor:pointer;">
          \${inc.key} (\${inc.branch})
        </button>
      \`).join('');
    }

    function drawConnections() {
      const svg = document.getElementById('svgOverlay');
      const container = document.getElementById('flowViewContainer');
      if (!svg || !container || !selectedStepKey) {
        if (svg) svg.innerHTML = '';
        return;
      }

      svg.setAttribute('width', container.scrollWidth);
      svg.setAttribute('height', container.scrollHeight);
      svg.innerHTML = '';

      const activeCard = document.getElementById('card-' + selectedStepKey);
      if (!activeCard) return;

      const step = currentSteps.find(s => s.key === selectedStepKey);
      if (!step) return;

      const containerRect = container.getBoundingClientRect();
      const fromRect = activeCard.getBoundingClientRect();
      const x1 = fromRect.right - containerRect.left + container.scrollLeft;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top + container.scrollTop;

      const targets = [
        { key: step.onYes?.jumpTo || step.onYes?.next, color: 'var(--success)' },
        { key: step.onNo?.jumpTo || step.onNo?.next, color: step.onNo?.jumpTo ? 'var(--warning)' : 'var(--danger)' }
      ];

      targets.forEach(t => {
        if (!t.key) return;
        const targetCard = document.getElementById('card-' + t.key);
        if (!targetCard) return;

        const toRect = targetCard.getBoundingClientRect();
        const x2 = toRect.left - containerRect.left + container.scrollLeft;
        const y2 = toRect.top + toRect.height / 2 - containerRect.top + container.scrollTop;

        const dx = Math.abs(x2 - x1) * 0.5;
        const d = \`M \${x1} \${y1} C \${x1 + dx} \${y1}, \${x2 - dx} \${y2}, \${x2} \${y2}\`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', 'conn-path');
        path.setAttribute('stroke', t.color);
        svg.appendChild(path);
      });
    }

    function handleSearch(term) {
      if (!term.trim()) {
        document.querySelectorAll('.node-card').forEach(c => c.style.display = '');
        return;
      }
      const lower = term.toLowerCase();
      document.querySelectorAll('.node-card').forEach(c => {
        const key = c.id.replace('card-', '');
        const step = currentSteps.find(s => s.key === key);
        if (!step) return;

        const match = key.toLowerCase().includes(lower) ||
                      String(step.q || '').toLowerCase().includes(lower) ||
                      String(step.onYes?.reason || '').toLowerCase().includes(lower) ||
                      String(step.onNo?.reason || '').toLowerCase().includes(lower);

        c.style.display = match ? '' : 'none';
      });
    }

    function switchView(view) {
      document.getElementById('flowViewContainer').style.display = view === 'flow' ? 'block' : 'none';
      document.getElementById('simViewContainer').style.display = view === 'sim' ? 'block' : 'none';
      document.getElementById('builderViewContainer').style.display = view === 'builder' ? 'block' : 'none';

      document.getElementById('btnViewFlow').className = 'btn btn-secondary' + (view === 'flow' ? ' active' : '');
      document.getElementById('btnViewSim').className = 'btn btn-secondary' + (view === 'sim' ? ' active' : '');
      document.getElementById('btnViewBuilder').className = 'btn btn-secondary' + (view === 'builder' ? ' active' : '');

      if (view === 'sim') renderSimStep(currentSimStepKey);
      if (view === 'flow') setTimeout(drawConnections, 50);
    }

    function jumpToSimStep(key) {
      currentSimStepKey = key;
      simHistory = [];
      switchView('sim');
    }

    function resetSimulator() {
      simHistory = [];
      currentSimStepKey = currentSteps[0]?.key || 'green';
      renderSimStep(currentSimStepKey);
    }

    function renderSimStep(key) {
      currentSimStepKey = key;
      const step = currentSteps.find(s => s.key === key);
      const card = document.getElementById('simActiveCard');
      if (!step) return;

      const spec = STEP_PROBE_SPECS[key];

      card.innerHTML = \`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span class="badge" style="background:var(--primary-light); color:var(--primary); font-size:12px; font-weight:700;">\${step.key}</span>
          <span style="font-size:12px; color:var(--text-muted);">Step \${simHistory.length + 1}</span>
        </div>

        <div style="font-size:15px; font-weight:600; color:var(--text); line-height:1.5; margin-bottom:16px;">
          \${step.q}
        </div>

        \${spec ? \`
          <div style="background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:10px 14px; margin-bottom:18px; font-size:12px; display:flex; gap:16px;">
            <div><strong>Pin:</strong> \${spec.pin}</div>
            <div><strong>Wire:</strong> \${spec.wire}</div>
            <div><strong>Expected:</strong> <span class="badge badge-pass">\${spec.expected}</span></div>
          </div>
        \` : ''}

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <button onclick="simAnswer(true)" class="btn btn-success" style="padding:12px; font-size:13px; justify-content:center;">
            ✅ YES — Working / In Spec
          </button>
          <button onclick="simAnswer(false)" class="btn btn-danger" style="padding:12px; font-size:13px; justify-content:center;">
            ❌ NO — Fault / Out of Spec
          </button>
        </div>
      \`;

      const crumbs = document.getElementById('simBreadcrumbs');
      crumbs.innerHTML = simHistory.map(h => \`
        <span class="badge" style="background:var(--surface-subtle); border:1px solid var(--border); color:var(--text-muted);">
          \${h.key} (\${h.answer ? 'YES' : 'NO'})
        </span>
      \`).join(' → ');
    }

    function simAnswer(answerYes) {
      const step = currentSteps.find(s => s.key === currentSimStepKey);
      if (!step) return;

      simHistory.push({ key: currentSimStepKey, answer: answerYes });
      const branch = answerYes ? step.onYes : step.onNo;

      if (branch.stop || (!branch.next && !branch.jumpTo)) {
        const card = document.getElementById('simActiveCard');
        const isPass = branch.badge === 'step-pass';
        card.innerHTML = \`
          <div style="text-align:center; padding:24px 10px; background:\${isPass ? 'var(--success-bg)' : 'var(--danger-bg)'}; border:1px solid \${isPass ? 'var(--success-border)' : 'var(--danger-border)'}; border-radius:12px;">
            <div style="font-size:36px; margin-bottom:8px;">\${isPass ? '🎉' : '🛑'}</div>
            <h3 style="font-size:16px; font-weight:700; color:\${isPass ? 'var(--success)' : 'var(--danger)'}; margin-bottom:8px;">
              \${isPass ? 'TEST PASSED: WORKING SATISFACTORY' : 'FAULT ISOLATED: ' + (branch.badge || 'FAIL')}
            </h3>
            <p style="font-size:13px; color:var(--text); max-width:480px; margin:0 auto 16px; line-height:1.5;">
              \${branch.reason || 'Diagnostic workflow completed.'}
            </p>
            <button onclick="resetSimulator()" class="btn btn-primary">Restart Simulator</button>
          </div>
        \`;
        return;
      }

      renderSimStep(branch.jumpTo || branch.next);
    }

    function populateBuilderParents() {
      const sel = document.getElementById('buildParent');
      sel.innerHTML = currentSteps.map(s => \`<option value="\${s.key}">\${s.key} — \${String(s.q || '').slice(0, 40)}...</option>\`).join('');
    }

    function generateStepCode() {
      const key = document.getElementById('buildKey').value.trim();
      const q = document.getElementById('buildQ').value.trim();
      const yesNext = document.getElementById('buildYesNext').value.trim();
      const noTarget = document.getElementById('buildNoTarget').value.trim();
      const isStop = document.getElementById('buildNoStop').checked;
      const noReason = document.getElementById('buildNoReason').value.trim();

      if (!key || !q) {
        alert('Please provide at least a Step Key and Question text.');
        return;
      }

      const stepObj = {
        key: key,
        q: q,
        onYes: {
          badge: "step-pass",
          next: yesNext || "next_step_key"
        },
        onNo: isStop ? {
          badge: "step-fail",
          stop: true,
          reason: noReason || "Fault detected. Check catalogue for replacement."
        } : {
          badge: "step-fail",
          next: noTarget || "isolation_step_key",
          reason: noReason
        }
      };

      document.getElementById('buildSnippet').textContent = JSON.stringify(stepObj, null, 2);
      document.getElementById('buildOutput').style.display = 'block';
    }

    function copySnippet() {
      navigator.clipboard.writeText(document.getElementById('buildSnippet').textContent).then(() => alert('Copied code to clipboard!'));
    }

    window.addEventListener('DOMContentLoaded', init);
  </script>
</body>
</html>
`;

// Write to workspace
const workspacePath = path.resolve(__dirname, '../../diagnostic-flowchart.html');
fs.writeFileSync(workspacePath, htmlContent, 'utf8');
console.log('Wrote upgraded flowchart visualizer with clean TML structure to:', workspacePath);

// Write to artifact directory if available
const artifactDir = 'C:\\Users\\46420.BRAKESINDIA\\.gemini\\antigravity\\brain\\8f514e38-e9e7-4d1f-bf0f-ac376e10a4c0';
if (fs.existsSync(artifactDir)) {
  const artifactPath = path.join(artifactDir, 'diagnostic-flowchart.html');
  fs.writeFileSync(artifactPath, htmlContent, 'utf8');
  console.log('Wrote artifact to:', artifactPath);
}
