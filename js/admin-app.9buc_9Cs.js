import{r as Yc,a as $c,g as Kc,c as Zc,b as ue,R as ii,P as Gi,d as Hi,C as Vi,T as si,B as Mo,e as yo,X as Eo,Y as wo,f as To,h as Ul}from"./admin-vendor-charts.B0MFY3Dy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var mr={exports:{}},Wi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao;function Jc(){if(Ao)return Wi;Ao=1;var i=Yc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function a(l,c,d){var h,g={},u=null,f=null;d!==void 0&&(u=""+d),c.key!==void 0&&(u=""+c.key),c.ref!==void 0&&(f=c.ref);for(h in c)n.call(c,h)&&!r.hasOwnProperty(h)&&(g[h]=c[h]);if(l&&l.defaultProps)for(h in c=l.defaultProps,c)g[h]===void 0&&(g[h]=c[h]);return{$$typeof:e,type:l,key:u,ref:f,props:g,_owner:s.current}}return Wi.Fragment=t,Wi.jsx=a,Wi.jsxs=a,Wi}var Ro;function Qc(){return Ro||(Ro=1,mr.exports=Jc()),mr.exports}var o=Qc(),vs={},Co;function ed(){if(Co)return vs;Co=1;var i=$c();return vs.createRoot=i.createRoot,vs.hydrateRoot=i.hydrateRoot,vs}var td=ed();const nd=Kc(td);let cn=[{id:"c101-ashok-aps",case_number:"RIQ-2026-001",created_at:new Date(Date.now()-1e3*60*45).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-001","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"12M BS-VI (Retarder)","Vehicle Registration No.":"TN 09 BK 4521","Chassis No.":"MB1B2C3D4E5F67890","Emission Standard":"BS-VI","Odometer Km":"64,200 km","Kms & Date of Sale":"64,200 km · 12-Feb-2024","FSE Name":"R. Karthik","Technician Phone":"+91 98401 23456","Dealer / Location":"TVS Mobility - Guindy Workshop",City:"Chennai",State:"Tamil Nadu",Region:"South","GPS Latitude":13.0102,"GPS Longitude":80.2158,"GPS Address":"Guindy Industrial Estate, Chennai, Tamil Nadu","Complaint Type":"Retarder not engaging on stage 2 & 3","Diagnostic Duration":"18 mins","Suspected Product":"Air Pressure Switch Assembly (APS)","Recommended Part No.":"BW-APS-9021-A","Replacement Status":"REQUIRED","Lifecycle Status":"ESCALATED_REPLACEMENT","Verification Status":"PENDING_BRANCH_APPROVAL","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"English","Customer Voice / Field Complaints reported":"Driver reported low retardation torque while descending grade. APS continuity check open circuit.","Diagnostic Fault Details":[{title:"Air Pressure Switch Assembly Open-Circuit Fault",action:`Root Cause: Internal diaphragm ruptured causing premature contact opening under hydraulic load.
Corrective Action: Replace APS switch assembly with OEM part and verify pneumatic seal.`,partNo:"BW-APS-9021-A",brand:"Brakes India"}],"Diagnostic Step History":[{question:"Is supply voltage to Retarder ECU between 24V and 28V DC?",response:"Yes"},{question:"Does instrument cluster retarder indicator illuminate upon key-ON?",response:"Yes"},{question:"Measure resistance across APS Pin 1 & Pin 2 (spec: < 1.5 Ω). Is resistance within spec?",response:"No"},{question:"Verify pneumatic delivery pressure at APS test port (nominal: 6.5 bar). Is pressure adequate?",response:"Yes"}],"Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c102-tml-working",case_number:"RIQ-2026-002",created_at:new Date(Date.now()-1e3*60*180).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-002","Diagnostic Status":"WORKING SATISFACTORY","Vehicle Manufacturer":"TATA MOTORS",Model:"TML - 1822","Vehicle Registration No.":"KA 01 MJ 8820","Chassis No.":"MAT612044P9G12345","Emission Standard":"BS-VI","Odometer Km":"42,100 km","Kms & Date of Sale":"42,100 km · 20-Jul-2024","FSE Name":"M. Suresh","Technician Phone":"+91 97410 88990","Dealer / Location":"Kalyani Motors Central Hub",City:"Bengaluru",State:"Karnataka",Region:"South","Complaint Type":"Warning lamp illuminated intermittently","Diagnostic Duration":"12 mins","Suspected Product":"No fault found - Harness seated properly","Recommended Part No.":"None","Replacement Status":"NOT_REQUIRED","Lifecycle Status":"CLOSED","Verification Status":"VERIFIED_SATISFACTORY","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Kannada","Customer Voice / Field Complaints reported":"Harness connector cleaned and re-torqued. Resistance measured within 1.2 ohms specification.","Diagnostic Step History":[{question:"Inspect main wiring harness for physical wear, chafing, or pin corrosion. Is harness sound?",response:"Yes"},{question:"Measure voltage at ECU connector pin 4 with ignition key ON (spec: 24V). Is voltage normal?",response:"Yes"},{question:"Perform stage 1, 2, and 3 manual retarder hand lever test. Do all stages engage correctly?",response:"Yes"},{question:"Verify stator coil temperature sensor resistance (ambient reading ~1.1 kΩ). Is it in spec?",response:"Yes"}],"Diagnostic Feedback":{clarity:"4",rating:4}}},{id:"c103-vecv-ecu",case_number:"RIQ-2026-003",created_at:new Date(Date.now()-1e3*60*360).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-003","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"VECV",Model:"VECV - 6016","Vehicle Registration No.":"MH 12 QX 9012","Chassis No.":"MC2B12344E9K99812","Emission Standard":"BS-VI","Odometer Km":"118,500 km","Kms & Date of Sale":"118,500 km · 15-Jan-2023","FSE Name":"P. Anand","Technician Phone":"+91 98220 54321","Dealer / Location":"Navnit Motors Commercial Division",City:"Pune",State:"Maharashtra",Region:"West","Complaint Type":"ECU speed signal drop during braking","Diagnostic Duration":"24 mins","Suspected Product":"ECU Speed Box","Recommended Part No.":"BW-ECU-8840-C","Replacement Status":"REQUIRED","Lifecycle Status":"ORDER_PLACED","Verification Status":"CONFIRMED_FAULT","Vehicle under warranty period?":"No","Repeat complaint? Yes / No":"Yes","Diagnostic Language Name":"Hindi","Customer Voice / Field Complaints reported":"Hall sensor pulses intermittent above 40 km/h. Voltage regulator inside ECU box degraded.","Diagnostic Fault Details":[{title:"ECU Speed Box Signal Drop Fault",action:`Root Cause: Internal speed sensor pulse conditioning capacitor failed at high temperatures.
Corrective Action: Replace ECU Speed Box assembly. Recalibrate pulse counter.`,partNo:"BW-ECU-8840-C",brand:"Brakes India"}],"Diagnostic Step History":[{question:"Check wheel speed hall sensor air gap clearance (spec: 0.8 mm ± 0.2 mm). Is gap correct?",response:"Yes"},{question:"Probe ECU speed box terminal Pin 7 with oscilloscope while driving above 20 km/h. Are pulses square and clean?",response:"No"},{question:"Inspect ECU ground connection to vehicle chassis frame (< 0.2 Ω). Is ground path good?",response:"Yes"},{question:"Measure internal 5V reference supply on test pad TP3. Is 5V rail steady under ripple load?",response:"No"}],"Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c104-ashok-relay",case_number:"RIQ-2026-004",created_at:new Date(Date.now()-1e3*60*520).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-004","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"Viking BS-VI (Retarder)","Vehicle Registration No.":"KL 07 CD 3341","Chassis No.":"MB1V12093F8A77123","Emission Standard":"BS-VI","Odometer Km":"88,900 km","Kms & Date of Sale":"88,900 km · 04-Nov-2023","FSE Name":"A. Vignesh","Technician Phone":"+91 94470 11223","Dealer / Location":"Popular Mega Motors Edappally",City:"Kochi",State:"Kerala",Region:"South","Complaint Type":"Relay clicking noise and delay in stage 1","Diagnostic Duration":"15 mins","Suspected Product":"Relay Box Assembly","Recommended Part No.":"BW-RLY-4100-B","Replacement Status":"REQUIRED","Lifecycle Status":"ESCALATED","Verification Status":"PENDING_APPROVAL","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Malayalam","Customer Voice / Field Complaints reported":"Stage 1 coil resistance reads 48 ohms (spec: 18-24 ohms). Contact tips pitted.","Diagnostic Feedback":{clarity:"4",rating:4}}},{id:"c105-tml-incomplete",case_number:"RIQ-2026-005",created_at:new Date(Date.now()-1e3*60*750).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-005","Diagnostic Status":"INCOMPLETE","Session State":"PAUSED","Session Last Seen":new Date().toISOString(),"Vehicle Manufacturer":"TATA MOTORS",Model:"TML - 1622","Vehicle Registration No.":"DL 1P AA 9081","Chassis No.":"MAT551029L3M44190","Emission Standard":"BS-VI","Odometer Km":"31,000 km","Kms & Date of Sale":"31,000 km · 18-Aug-2024","FSE Name":"R. Rajesh","Technician Phone":"+91 98110 33445","Dealer / Location":"Pasco Motors North Hub",City:"Delhi NCR",State:"Delhi",Region:"North","Complaint Type":"Diagnostic session paused during pressure check","Diagnostic Duration":"8 mins","Suspected Product":"Inspection in progress","Recommended Part No.":"TBD","Replacement Status":"PENDING","Lifecycle Status":"IN_PROGRESS","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"English","Customer Voice / Field Complaints reported":"Awaiting pneumatic manifold pressure gauge verification."}},{id:"c106-ashok-satisfactory",case_number:"RIQ-2026-006",created_at:new Date(Date.now()-1e3*60*1200).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-006","Diagnostic Status":"WORKING SATISFACTORY","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"13.5M BS-VI (Retarder)","Vehicle Registration No.":"TN 22 EZ 7765","Chassis No.":"MB1B14002G1C88219","Emission Standard":"BS-VI","Odometer Km":"51,400 km","Kms & Date of Sale":"51,400 km · 10-Mar-2024","FSE Name":"R. Karthik","Technician Phone":"+91 98401 23456","Dealer / Location":"TVS Mobility - Tambaram Branch",City:"Chennai",State:"Tamil Nadu",Region:"South","GPS Latitude":13.0102,"GPS Longitude":80.2158,"GPS Address":"Guindy Industrial Estate, Chennai, Tamil Nadu","Complaint Type":"Routine 50,000 km audit","Diagnostic Duration":"14 mins","Suspected Product":"None","Recommended Part No.":"None","Replacement Status":"NOT_REQUIRED","Lifecycle Status":"CLOSED","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Tamil","Customer Voice / Field Complaints reported":"All coil resistances and pneumatic cut-in/cut-out pressures within factory specs.","Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c107-vecv-switch",case_number:"RIQ-2026-007",created_at:new Date(Date.now()-1e3*60*1800).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-007","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"VECV",Model:"VECV - 6019","Vehicle Registration No.":"WB 02 AJ 4099","Chassis No.":"MC2B60199J4M11284","Emission Standard":"BS-VI","Odometer Km":"104,200 km","Kms & Date of Sale":"104,200 km · 28-May-2023","FSE Name":"Debashis Roy","Technician Phone":"+91 98300 77889","Dealer / Location":"Eastern Commercial Fleet Center",City:"Kolkata",State:"West Bengal",Region:"East","Complaint Type":"Stalk switch handle loose / no detent","Diagnostic Duration":"10 mins","Suspected Product":"Retarder Switch","Recommended Part No.":"BW-SW-2200-S","Replacement Status":"REQUIRED","Lifecycle Status":"APPROVED","Vehicle under warranty period?":"No","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"English","Customer Voice / Field Complaints reported":"Internal detent ball worn. Switch fails to hold position on stage 2.","Diagnostic Feedback":{clarity:"4",rating:4}}}],Ln=[{id:"u1",email:"admin@example.com",role:"admin",technician_name:"Lead Operations Administrator",dealer_name:"Brakes India Central Technical Ops",city:"Chennai",state:"Tamil Nadu",gps_latitude:13.0102,gps_longitude:80.2158,gps_address:"Guindy Industrial Estate, Chennai",active:!0,created_at:"2024-01-01T00:00:00Z",diagnostic_count:142},{id:"u2",email:"karthik.r@tvsmobility.com",role:"technician",technician_name:"R. Karthik",phone:"+91 98401 23456",dealer_name:"TVS Mobility - Guindy Workshop",technician_type:"Authorized Dealer",vehicle_manufacturer:"ASHOK LEYLAND",vehicle_model:"12M BS-VI (Retarder)",city:"Chennai",state:"Tamil Nadu",gps_latitude:13.0102,gps_longitude:80.2158,gps_address:"Guindy Industrial Estate, Chennai",active:!0,created_at:"2024-02-15T10:30:00Z",last_login_at:new Date(Date.now()-1e3*60*30).toISOString(),diagnostic_count:38},{id:"u3",email:"suresh.m@kalyanimotors.com",role:"technician",technician_name:"M. Suresh",phone:"+91 97410 88990",dealer_name:"Kalyani Motors Central Hub",technician_type:"Authorized Dealer",vehicle_manufacturer:"TATA MOTORS",vehicle_model:"TML - 1822",city:"Bengaluru",state:"Karnataka",active:!0,created_at:"2024-03-01T09:15:00Z",last_login_at:new Date(Date.now()-1e3*60*120).toISOString(),diagnostic_count:24},{id:"u4",email:"anand.p@navnitmotors.com",role:"technician",technician_name:"P. Anand",phone:"+91 98220 54321",dealer_name:"Navnit Motors Commercial Division",technician_type:"Fleet Workshop",vehicle_manufacturer:"VECV",vehicle_model:"VECV - 6016",city:"Pune",state:"Maharashtra",active:!0,created_at:"2024-04-10T14:20:00Z",last_login_at:new Date(Date.now()-1e3*60*240).toISOString(),diagnostic_count:19},{id:"u5",email:"vignesh.a@popularmega.com",role:"technician",technician_name:"A. Vignesh",phone:"+91 94470 11223",dealer_name:"Popular Mega Motors Edappally",technician_type:"Authorized Dealer",vehicle_manufacturer:"ASHOK LEYLAND",vehicle_model:"Viking BS-VI (Retarder)",city:"Kochi",state:"Kerala",active:!0,created_at:"2024-05-18T11:45:00Z",last_login_at:new Date(Date.now()-1e3*60*500).toISOString(),diagnostic_count:15}];function id(){const i=cn.filter(n=>{var s;return((s=n.payload)==null?void 0:s["Diagnostic Status"])==="FAULT FOUND"}).length,e=cn.filter(n=>{var s;return((s=n.payload)==null?void 0:s["Diagnostic Status"])==="WORKING SATISFACTORY"}).length,t=cn.filter(n=>{var s;return((s=n.payload)==null?void 0:s["Diagnostic Status"])==="INCOMPLETE"}).length;return{total:cn.length,faults:i,working:e,incomplete:t,open:2,inProgress:1,completed:e,escalations:i,techniciansTotal:Ln.length,techniciansActive:Ln.filter(n=>n.active).length,manufacturers:["ASHOK LEYLAND","TATA MOTORS","VECV"]}}const Yr="riq_admin_token",$r="riq_api_base_url",Kr="riq_mock_mode";function Lt(){return localStorage.getItem(Kr)==="true"}function Fl(i){i?localStorage.setItem(Kr,"true"):localStorage.removeItem(Kr)}function ns(){const i=localStorage.getItem($r);if(i)return i.replace(/\/$/,"");const e=window.RIQ_API_BASE_URL;return e?String(e).replace(/\/$/,""):""}function sd(i){const e=i.trim().replace(/\/$/,"");e?(localStorage.setItem($r,e),window.RIQ_API_BASE_URL=e):(localStorage.removeItem($r),window.RIQ_API_BASE_URL="")}function Js(){return sessionStorage.getItem(Yr)}function Ti(i){i?sessionStorage.setItem(Yr,i):sessionStorage.removeItem(Yr)}async function qt(i,e={}){const t=Js(),n=ns(),s=`${n}${i.startsWith("/")?i:"/"+i}`,r={"Content-Type":"application/json",...e.headers||{}};t&&(r.Authorization=`Bearer ${t}`);let a;try{a=await fetch(s,{cache:"no-store",...e,headers:r})}catch{throw new Error(`Unable to connect to API server at ${n||window.location.origin}. Please ensure the backend is running.`)}const l=a.headers.get("content-type")||"";let c={};if(l.includes("application/json"))c=await a.json().catch(()=>({}));else throw a.status===404?new Error(`API endpoint ${i} returned 404 Not Found. Start the Express backend in 'server/' or click 'Demo Mode' below.`):new Error(`Server returned ${a.status} (${l||"non-JSON"}). Please verify backend connection.`);if(!a.ok)throw a.status===401&&(Ti(null),window.location.reload()),new Error(c.error||c.message||`Request failed with status ${a.status}`);return c}const Vt={async login(i,e,t=!1){var c;if(t){Fl(!0);const d="mock-admin-token-"+Date.now();return Ti(d),{token:d,user:{role:"admin",email:i||"admin@example.com"}}}if(Lt()){const d="mock-admin-token-"+Date.now();return Ti(d),{token:d,user:{role:"admin",email:i}}}const s=`${ns()}/api/auth/login`;let r;try{r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:e})})}catch{throw new Error(`Unable to connect to backend server at ${s}. You can enable 'Demo Mock Mode' below to preview the dashboard.`)}const a=r.headers.get("content-type")||"";let l={};if(a.includes("application/json"))l=await r.json().catch(()=>({}));else throw r.status===404?new Error(`API endpoint /api/auth/login returned 404. Your web server (${window.location.origin}) is running as a static file server. Click 'Explore Demo Mode' below to test the dashboard immediately.`):new Error(`Server returned ${r.status} HTML. Verify API backend is running.`);if(!r.ok)throw new Error(l.error||"Login failed");if(((c=l.user)==null?void 0:c.role)!=="admin")throw new Error("Administrator account required.");return Ti(l.token),l},async logout(){if(Lt()){Ti(null);return}const i=Js(),e=ns();if(i)try{await fetch(`${e}/api/auth/logout`,{method:"POST",headers:{Authorization:`Bearer ${i}`},credentials:"include"})}catch(t){console.error("Logout error:",t)}Ti(null)},async getSummary(i="day",e="",t=""){if(Lt())return{summary:id()};const n=new URLSearchParams({granularity:i});return e&&n.set("dateFrom",e),t&&n.set("dateTo",t),qt(`/api/diagnostics/summary?${n.toString()}`)},async getCases(i){if(Lt()){const t=Number(i.page||1),n=Number(i.pageSize||10),s=String(i.search||"").toLowerCase(),r=String(i.status||""),a=String(i.region||"").toLowerCase(),l=String(i.manufacturer||"").toLowerCase();let c=[...cn];s&&(c=c.filter(f=>(JSON.stringify(f.payload).toLowerCase()+" "+f.case_number.toLowerCase()).includes(s))),r&&(c=c.filter(f=>{var _;return((_=f.payload)==null?void 0:_["Diagnostic Status"])===r})),a&&(c=c.filter(f=>{var _;return String(((_=f.payload)==null?void 0:_.Region)||"").toLowerCase()===a})),l&&(c=c.filter(f=>{var _;return String(((_=f.payload)==null?void 0:_["Vehicle Manufacturer"])||"").toLowerCase()===l}));const d=c.length,h=Math.ceil(d/n)||1,g=(t-1)*n;return{cases:c.slice(g,g+n),page:t,pageSize:n,total:d,totalPages:h}}const e=new URLSearchParams;return Object.entries(i).forEach(([t,n])=>{n!=null&&n!==""&&e.set(t,String(n))}),qt(`/api/diagnostics?${e.toString()}`)},async getAllCasesForAnalytics(){if(Lt())return[...cn];const i=await qt("/api/diagnostics?page=1&pageSize=1000");let e=[...i.cases||[]];const t=i.totalPages||1;return t>1&&(await Promise.all(Array.from({length:t-1},(s,r)=>qt(`/api/diagnostics?page=${r+2}&pageSize=1000`)))).forEach(s=>{s.cases&&e.push(...s.cases)}),e},async getCaseDetail(i){if(Lt()){const e=cn.find(t=>t.id===i);if(!e)throw new Error("Case not found");return e}return qt(`/api/admin/diagnostics/${encodeURIComponent(i)}`)},async updateCaseRegion(i,e){if(Lt()){const t=cn.find(n=>n.id===i);return t&&t.payload&&(t.payload.Region=e),{success:!0}}return qt(`/api/admin/diagnostics/${encodeURIComponent(i)}`,{method:"PATCH",body:JSON.stringify({region:e})})},async deleteCases(i){if(Lt()){const e=new Set(i);for(let t=cn.length-1;t>=0;t--)e.has(cn[t].id)&&cn.splice(t,1);return{deleted:i.length}}return qt("/api/diagnostics",{method:"DELETE",body:JSON.stringify({ids:i})})},async getUsers(){return Lt()?{users:[...Ln]}:qt("/api/users")},async getUserDetail(i){if(Lt()){const e=Ln.find(t=>t.id===i);if(!e)throw new Error("User not found");return{user:e,activity:[{action:"Submitted diagnostic RIQ-2026-001",created_at:new Date(Date.now()-36e5).toISOString()},{action:"Completed vehicle inspection",created_at:new Date(Date.now()-72e5).toISOString()}]}}return qt(`/api/users/${encodeURIComponent(i)}`)},async createUser(i){if(Lt()){const e={id:"u-"+Date.now(),email:i.email,role:i.role||"technician",technician_name:i.technicianName,phone:i.technicianPhone,dealer_name:i.dealerName,technician_type:i.technicianType,vehicle_manufacturer:i.vehicleManufacturer,vehicle_model:i.vehicleModel,city:i.city,state:i.state,active:!0,created_at:new Date().toISOString(),diagnostic_count:0};return Ln.unshift(e),{user:e}}return qt("/api/users",{method:"POST",body:JSON.stringify(i)})},async toggleUserActive(i,e){if(Lt()){const t=Ln.find(n=>n.id===i);return t&&(t.active=e),{success:!0}}return qt(`/api/users/${encodeURIComponent(i)}/active`,{method:"PATCH",body:JSON.stringify({active:e})})},async updateUserAssignment(i,e,t){if(Lt()){const n=Ln.find(s=>s.id===i);return n&&(n.vehicle_manufacturer=e,n.vehicle_model=t),{success:!0}}return qt(`/api/users/${encodeURIComponent(i)}/assignment`,{method:"PATCH",body:JSON.stringify({vehicleManufacturer:e,vehicleModel:t})})},async deleteUser(i){if(Lt()){const e=Ln.findIndex(t=>t.id===i);return e!==-1&&Ln.splice(e,1),{success:!0}}return qt(`/api/users/${encodeURIComponent(i)}`,{method:"DELETE"})},connectEvents(i){if(Lt()){const a=setInterval(()=>{i({type:"keepalive",timestamp:Date.now()})},15e3);return()=>clearInterval(a)}const e=Js();if(!e)return()=>{};const t=new AbortController;let n=!0;const s=ns();async function r(){try{const a=await fetch(`${s}/api/admin/events`,{headers:{Authorization:`Bearer ${e}`},signal:t.signal});if(!a.ok||!a.body)return;const l=a.body.getReader(),c=new TextDecoder;let d="";for(;n;){const{done:h,value:g}=await l.read();if(h)break;d+=c.decode(g,{stream:!0});const u=d.split(`

`);d=u.pop()||"";for(const f of u)if(f.startsWith("data:"))try{const _=JSON.parse(f.replace(/^data:\s*/,""));i(_)}catch{}}}catch(a){a.name!=="AbortError"&&n&&setTimeout(r,5e3)}}return r(),()=>{n=!1,t.abort()}}},Wa="-",rd=i=>{const e=od(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=i;return{getClassGroupId:a=>{const l=a.split(Wa);return l[0]===""&&l.length!==1&&l.shift(),Ol(l,e)||ad(a)},getConflictingClassGroupIds:(a,l)=>{const c=t[a]||[];return l&&n[a]?[...c,...n[a]]:c}}},Ol=(i,e)=>{var a;if(i.length===0)return e.classGroupId;const t=i[0],n=e.nextPart.get(t),s=n?Ol(i.slice(1),n):void 0;if(s)return s;if(e.validators.length===0)return;const r=i.join(Wa);return(a=e.validators.find(({validator:l})=>l(r)))==null?void 0:a.classGroupId},No=/^\[(.+)\]$/,ad=i=>{if(No.test(i)){const e=No.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},od=i=>{const{theme:e,prefix:t}=i,n={nextPart:new Map,validators:[]};return cd(Object.entries(i.classGroups),t).forEach(([r,a])=>{Zr(a,n,r,e)}),n},Zr=(i,e,t,n)=>{i.forEach(s=>{if(typeof s=="string"){const r=s===""?e:Po(e,s);r.classGroupId=t;return}if(typeof s=="function"){if(ld(s)){Zr(s(n),e,t,n);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([r,a])=>{Zr(a,Po(e,r),t,n)})})},Po=(i,e)=>{let t=i;return e.split(Wa).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},ld=i=>i.isThemeGetter,cd=(i,e)=>e?i.map(([t,n])=>{const s=n.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([a,l])=>[e+a,l])):r);return[t,s]}):i,dd=i=>{if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const s=(r,a)=>{t.set(r,a),e++,e>i&&(e=0,n=t,t=new Map)};return{get(r){let a=t.get(r);if(a!==void 0)return a;if((a=n.get(r))!==void 0)return s(r,a),a},set(r,a){t.has(r)?t.set(r,a):s(r,a)}}},Bl="!",ud=i=>{const{separator:e,experimentalParseClassName:t}=i,n=e.length===1,s=e[0],r=e.length,a=l=>{const c=[];let d=0,h=0,g;for(let m=0;m<l.length;m++){let p=l[m];if(d===0){if(p===s&&(n||l.slice(m,m+r)===e)){c.push(l.slice(h,m)),h=m+r;continue}if(p==="/"){g=m;continue}}p==="["?d++:p==="]"&&d--}const u=c.length===0?l:l.substring(h),f=u.startsWith(Bl),_=f?u.substring(1):u,M=g&&g>h?g-h:void 0;return{modifiers:c,hasImportantModifier:f,baseClassName:_,maybePostfixModifierPosition:M}};return t?l=>t({className:l,parseClassName:a}):a},hd=i=>{if(i.length<=1)return i;const e=[];let t=[];return i.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e},fd=i=>({cache:dd(i.cacheSize),parseClassName:ud(i),...rd(i)}),pd=/\s+/,md=(i,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:s}=e,r=[],a=i.trim().split(pd);let l="";for(let c=a.length-1;c>=0;c-=1){const d=a[c],{modifiers:h,hasImportantModifier:g,baseClassName:u,maybePostfixModifierPosition:f}=t(d);let _=!!f,M=n(_?u.substring(0,f):u);if(!M){if(!_){l=d+(l.length>0?" "+l:l);continue}if(M=n(u),!M){l=d+(l.length>0?" "+l:l);continue}_=!1}const m=hd(h).join(":"),p=g?m+Bl:m,b=p+M;if(r.includes(b))continue;r.push(b);const R=s(M,_);for(let y=0;y<R.length;++y){const E=R[y];r.push(p+E)}l=d+(l.length>0?" "+l:l)}return l};function gd(){let i=0,e,t,n="";for(;i<arguments.length;)(e=arguments[i++])&&(t=kl(e))&&(n&&(n+=" "),n+=t);return n}const kl=i=>{if(typeof i=="string")return i;let e,t="";for(let n=0;n<i.length;n++)i[n]&&(e=kl(i[n]))&&(t&&(t+=" "),t+=e);return t};function xd(i,...e){let t,n,s,r=a;function a(c){const d=e.reduce((h,g)=>g(h),i());return t=fd(d),n=t.cache.get,s=t.cache.set,r=l,l(c)}function l(c){const d=n(c);if(d)return d;const h=md(c,t);return s(c,h),h}return function(){return r(gd.apply(null,arguments))}}const lt=i=>{const e=t=>t[i]||[];return e.isThemeGetter=!0,e},zl=/^\[(?:([a-z-]+):)?(.+)\]$/i,_d=/^\d+\/\d+$/,vd=new Set(["px","full","screen"]),Sd=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,bd=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Md=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,yd=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ed=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,An=i=>Ci(i)||vd.has(i)||_d.test(i),kn=i=>Fi(i,"length",Dd),Ci=i=>!!i&&!Number.isNaN(Number(i)),gr=i=>Fi(i,"number",Ci),ji=i=>!!i&&Number.isInteger(Number(i)),wd=i=>i.endsWith("%")&&Ci(i.slice(0,-1)),Be=i=>zl.test(i),zn=i=>Sd.test(i),Td=new Set(["length","size","percentage"]),Ad=i=>Fi(i,Td,Gl),Rd=i=>Fi(i,"position",Gl),Cd=new Set(["image","url"]),Nd=i=>Fi(i,Cd,Id),Pd=i=>Fi(i,"",Ld),Xi=()=>!0,Fi=(i,e,t)=>{const n=zl.exec(i);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1},Dd=i=>bd.test(i)&&!Md.test(i),Gl=()=>!1,Ld=i=>yd.test(i),Id=i=>Ed.test(i),Ud=()=>{const i=lt("colors"),e=lt("spacing"),t=lt("blur"),n=lt("brightness"),s=lt("borderColor"),r=lt("borderRadius"),a=lt("borderSpacing"),l=lt("borderWidth"),c=lt("contrast"),d=lt("grayscale"),h=lt("hueRotate"),g=lt("invert"),u=lt("gap"),f=lt("gradientColorStops"),_=lt("gradientColorStopPositions"),M=lt("inset"),m=lt("margin"),p=lt("opacity"),b=lt("padding"),R=lt("saturate"),y=lt("scale"),E=lt("sepia"),T=lt("skew"),x=lt("space"),w=lt("translate"),I=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",Be,e],F=()=>[Be,e],q=()=>["",An,kn],P=()=>["auto",Ci,Be],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Y=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",Be],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ee=()=>[Ci,Be];return{cacheSize:500,separator:":",theme:{colors:[Xi],spacing:[An,kn],blur:["none","",zn,Be],brightness:ee(),borderColor:[i],borderRadius:["none","","full",zn,Be],borderSpacing:F(),borderWidth:q(),contrast:ee(),grayscale:V(),hueRotate:ee(),invert:V(),gap:F(),gradientColorStops:[i],gradientColorStopPositions:[wd,kn],inset:L(),margin:L(),opacity:ee(),padding:F(),saturate:ee(),scale:ee(),sepia:V(),skew:ee(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",Be]}],container:["container"],columns:[{columns:[zn]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),Be]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[M]}],"inset-x":[{"inset-x":[M]}],"inset-y":[{"inset-y":[M]}],start:[{start:[M]}],end:[{end:[M]}],top:[{top:[M]}],right:[{right:[M]}],bottom:[{bottom:[M]}],left:[{left:[M]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ji,Be]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Be]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",ji,Be]}],"grid-cols":[{"grid-cols":[Xi]}],"col-start-end":[{col:["auto",{span:["full",ji,Be]},Be]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[Xi]}],"row-start-end":[{row:["auto",{span:[ji,Be]},Be]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Be]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...te()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...te(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...te(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[b]}],px:[{px:[b]}],py:[{py:[b]}],ps:[{ps:[b]}],pe:[{pe:[b]}],pt:[{pt:[b]}],pr:[{pr:[b]}],pb:[{pb:[b]}],pl:[{pl:[b]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[x]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[x]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Be,e]}],"min-w":[{"min-w":[Be,e,"min","max","fit"]}],"max-w":[{"max-w":[Be,e,"none","full","min","max","fit","prose",{screen:[zn]},zn]}],h:[{h:[Be,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Be,e,"auto","min","max","fit"]}],"font-size":[{text:["base",zn,kn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",gr]}],"font-family":[{font:[Xi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Be]}],"line-clamp":[{"line-clamp":["none",Ci,gr]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",An,Be]}],"list-image":[{"list-image":["none",Be]}],"list-style-type":[{list:["none","disc","decimal",Be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Y(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",An,kn]}],"underline-offset":[{"underline-offset":["auto",An,Be]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),Rd]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ad]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Nd]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...Y(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:Y()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Y()]}],"outline-offset":[{"outline-offset":[An,Be]}],"outline-w":[{outline:[An,kn]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[An,kn]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",zn,Pd]}],"shadow-color":[{shadow:[Xi]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",zn,Be]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[g]}],saturate:[{saturate:[R]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[R]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Be]}],duration:[{duration:ee()}],ease:[{ease:["linear","in","out","in-out",Be]}],delay:[{delay:ee()}],animate:[{animate:["none","spin","ping","pulse","bounce",Be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[ji,Be]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Be]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Be]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Be]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[An,kn,gr]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Fd=xd(Ud);function fn(...i){return Fd(Zc(i))}const Ut=ue.forwardRef(({className:i,...e},t)=>o.jsx("div",{ref:t,className:fn("rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all hover:shadow",i),...e}));Ut.displayName="Card";const en=ue.forwardRef(({className:i,...e},t)=>o.jsx("div",{ref:t,className:fn("flex flex-col space-y-1.5 p-5 pb-3",i),...e}));en.displayName="CardHeader";const tn=ue.forwardRef(({className:i,...e},t)=>o.jsx("h3",{ref:t,className:fn("font-semibold leading-none tracking-tight text-slate-800",i),...e}));tn.displayName="CardTitle";const nn=ue.forwardRef(({className:i,...e},t)=>o.jsx("p",{ref:t,className:fn("text-xs text-slate-500",i),...e}));nn.displayName="CardDescription";const sn=ue.forwardRef(({className:i,...e},t)=>o.jsx("div",{ref:t,className:fn("p-5 pt-0",i),...e}));sn.displayName="CardContent";const pt=ue.forwardRef(({className:i,variant:e="primary",size:t="md",disabled:n,...s},r)=>{const a="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none",l={primary:"bg-[#0b5daa] text-white hover:bg-[#094c8b] shadow-sm active:bg-[#073c6f]",secondary:"bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60 active:bg-slate-300",outline:"border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700",danger:"bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 shadow-sm",ghost:"text-slate-600 hover:bg-slate-100 hover:text-slate-900"},c={sm:"h-8 px-3 text-xs gap-1.5",md:"h-9 px-4 text-sm gap-2",lg:"h-11 px-6 text-base gap-2.5",icon:"h-8 w-8 p-0"};return o.jsx("button",{ref:r,disabled:n,className:fn(a,l[e],c[t],i),...s})});pt.displayName="Button";const jt=ue.forwardRef(({className:i,type:e,...t},n)=>o.jsx("input",{type:e,className:fn("flex h-9 w-full rounded-md border border-slate-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b5daa]/40 focus-visible:border-[#0b5daa] disabled:cursor-not-allowed disabled:opacity-50",i),ref:n,...t}));jt.displayName="Input";const gn=ue.forwardRef(({className:i,children:e,...t},n)=>o.jsx("select",{className:fn("flex h-9 w-full rounded-md border border-slate-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b5daa]/40 focus-visible:border-[#0b5daa] disabled:cursor-not-allowed disabled:opacity-50",i),ref:n,...t,children:e}));gn.displayName="Select";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hl=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=ue.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:s="",children:r,iconNode:a,...l},c)=>ue.createElement("svg",{ref:c,...Bd,width:e,height:e,stroke:i,strokeWidth:n?Number(t)*24/Number(e):t,className:Hl("lucide",s),...l},[...a.map(([d,h])=>ue.createElement(d,h)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(i,e)=>{const t=ue.forwardRef(({className:n,...s},r)=>ue.createElement(kd,{ref:r,iconNode:e,className:Hl(`lucide-${Od(i)}`,n),...s}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=Ge("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=Ge("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Ge("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=Ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Ge("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=Ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=Ge("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=Ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=Ge("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=Ge("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Ge("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Ge("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=Ge("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=Ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=Ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=Ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=Ge("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=Ge("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=Ge("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=Ge("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=Ge("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=Ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=Ge("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=Ge("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=Ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=Ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=Ge("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=Ge("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=Ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Ge("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=Ge("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=Ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=Ge("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=Ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),gu=({onLoginSuccess:i})=>{const[e,t]=ue.useState("admin@example.com"),[n,s]=ue.useState("password123"),[r,a]=ue.useState(!1),[l,c]=ue.useState(null),[d,h]=ue.useState(!1),[g,u]=ue.useState(ns()||window.location.origin),[f,_]=ue.useState(!1),M=async b=>{b.preventDefault(),c(null),a(!0);try{await Vt.login(e,n),i()}catch(R){c(R.message||"Failed to authenticate")}finally{a(!1)}},m=async()=>{a(!0);try{await Vt.login("admin@example.com","demo",!0),i()}finally{a(!1)}},p=b=>{b.preventDefault(),sd(g),Fl(!1),_(!0),setTimeout(()=>_(!1),2e3)};return o.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100/80 p-4",children:o.jsxs(Ut,{className:"w-full max-w-md shadow-xl border-slate-200",children:[o.jsxs(en,{className:"text-center pt-8 pb-4",children:[o.jsx("div",{className:"mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b5daa]/10 text-[#0b5daa]",children:o.jsx(pu,{className:"h-7 w-7"})}),o.jsx(tn,{className:"text-2xl font-bold tracking-tight text-slate-900",children:"Retarder IQ Admin"}),o.jsx(nn,{className:"text-sm text-slate-500 mt-1",children:"Sign in to manage diagnostic reports and technician accounts."})]}),o.jsxs(sn,{className:"pb-8 space-y-4",children:[l&&o.jsx("div",{className:"rounded-lg bg-rose-50 border border-rose-200 p-3.5 text-xs text-rose-700 leading-relaxed",children:o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx(uu,{className:"h-4 w-4 shrink-0 text-rose-600 mt-0.5"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("span",{children:l}),o.jsx("div",{children:o.jsxs("button",{type:"button",onClick:m,className:"inline-flex items-center gap-1 font-bold text-rose-800 underline hover:text-rose-900",children:[o.jsx(Qr,{className:"h-3 w-3"}),"Switch to Local Demo Data →"]})})]})]})}),o.jsxs("form",{onSubmit:M,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Email"}),o.jsxs("div",{className:"relative",children:[o.jsx(nu,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),o.jsx(jt,{type:"email",value:e,onChange:b=>t(b.target.value),placeholder:"admin@example.com",required:!0,autoComplete:"username",className:"pl-9"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Password"}),o.jsxs("div",{className:"relative",children:[o.jsx(eu,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),o.jsx(jt,{type:"password",value:n,onChange:b=>s(b.target.value),placeholder:"••••••••••",required:!0,autoComplete:"current-password",className:"pl-9"})]})]}),o.jsx(pt,{type:"submit",disabled:r,className:"w-full font-semibold",children:r?"Authenticating...":"Sign In"})]}),o.jsxs("div",{className:"relative flex py-1 items-center",children:[o.jsx("div",{className:"flex-grow border-t border-slate-200"}),o.jsx("span",{className:"flex-shrink mx-3 text-[11px] text-slate-400 font-semibold uppercase",children:"Or"}),o.jsx("div",{className:"flex-grow border-t border-slate-200"})]}),o.jsxs(pt,{type:"button",variant:"outline",onClick:m,disabled:r,className:"w-full text-xs font-bold border-blue-200 bg-blue-50/50 text-[#0b5daa] hover:bg-blue-100/70",children:[o.jsx(Qr,{className:"h-3.5 w-3.5 mr-1.5 text-[#0b5daa]"}),"Explore with Demo Data (No DB Required)"]}),o.jsxs("div",{className:"pt-2 border-t border-slate-100",children:[o.jsxs("button",{type:"button",onClick:()=>h(!d),className:"w-full flex items-center justify-between text-xs text-slate-500 hover:text-slate-800 transition-colors",children:[o.jsxs("span",{className:"flex items-center gap-1.5 font-medium",children:[o.jsx(du,{className:"h-3.5 w-3.5 text-slate-400"}),"Backend API Connection"]}),o.jsx("span",{className:"text-[11px] text-[#0b5daa] font-semibold",children:d?"Hide":"Configure"})]}),d&&o.jsxs("form",{onSubmit:p,className:"mt-3 space-y-2 text-xs animate-in fade-in duration-150",children:[o.jsx("p",{className:"text-[11px] text-slate-500",children:"Target API server URL (leave empty if served on same domain):"}),o.jsxs("div",{className:"flex gap-1.5",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(Jr,{className:"absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400"}),o.jsx(jt,{type:"url",value:g,onChange:b=>u(b.target.value),placeholder:"http://localhost:3000",className:"pl-8 h-8 text-xs font-mono"})]}),o.jsx(pt,{type:"submit",size:"sm",variant:"secondary",className:"h-8 text-xs font-semibold px-3",children:f?o.jsx(Vd,{className:"h-3.5 w-3.5 text-emerald-600"}):"Save"})]})]})]})]})]})})},xu=({onRefresh:i,onExportCsv:e,onLogout:t,refreshing:n,sseConnected:s,dateFrom:r,setDateFrom:a,dateTo:l,setDateTo:c,granularity:d,setGranularity:h,onApplyDateFilter:g})=>o.jsxs("header",{className:"mb-6 space-y-4",children:[o.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center flex-wrap gap-2",children:[o.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#0b5daa]",children:"Retarder IQ · Operations"}),o.jsxs("div",{className:"flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 border border-slate-200",children:[o.jsx("span",{className:`h-2 w-2 rounded-full ${s?"bg-emerald-500 animate-pulse":"bg-amber-400"}`}),o.jsx("span",{children:s?"Live sync":"Sync standby"})]}),Lt()&&o.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-blue-100 text-[#0b5daa] border border-blue-200 px-2 py-0.5 text-[11px] font-bold",children:[o.jsx(Qr,{className:"h-3 w-3 text-[#0b5daa]"}),"Demo Mode"]})]}),o.jsx("h1",{className:"text-2xl font-bold tracking-tight text-slate-900 mt-1",children:"Diagnostic Dashboard"}),o.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Track field cases, technician activity, and recurring vehicle failures."})]}),o.jsxs("div",{className:"flex items-center flex-wrap gap-2.5",children:[o.jsxs(pt,{variant:"secondary",size:"sm",onClick:e,className:"text-xs shadow-xs",children:[o.jsx(Zd,{className:"h-3.5 w-3.5 text-slate-500 mr-1.5"}),"Export CSV"]}),o.jsxs(pt,{variant:"secondary",size:"sm",onClick:i,disabled:n,className:"text-xs shadow-xs",children:[o.jsx(cu,{className:`h-3.5 w-3.5 text-slate-500 mr-1.5 ${n?"animate-spin":""}`}),n?"Refreshing...":"Refresh"]}),o.jsxs(pt,{variant:"danger",size:"sm",onClick:t,className:"text-xs shadow-xs",children:[o.jsx(tu,{className:"h-3.5 w-3.5 mr-1.5"}),"Sign Out"]})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Hd,{className:"h-4 w-4 text-[#0b5daa]"}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-bold text-slate-800",children:"Operations Filter"}),o.jsx("span",{className:"text-[11px] text-slate-400",children:"Filter reports & analytics by date span"})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"text-slate-500 font-medium",children:"From:"}),o.jsx("input",{type:"date",value:r,onChange:u=>a(u.target.value),className:"h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]"})]}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"text-slate-500 font-medium",children:"To:"}),o.jsx("input",{type:"date",value:l,onChange:u=>c(u.target.value),className:"h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]"})]}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"text-slate-500 font-medium",children:"View:"}),o.jsxs("select",{value:d,onChange:u=>h(u.target.value),className:"h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]",children:[o.jsx("option",{value:"day",children:"Daily"}),o.jsx("option",{value:"week",children:"Weekly"}),o.jsx("option",{value:"month",children:"Monthly"})]})]}),o.jsx(pt,{size:"sm",variant:"secondary",onClick:g,className:"h-8 text-xs font-semibold",children:"Apply Filter"})]})]})]}),_u=({summary:i,onFilterIncomplete:e})=>{const t=(i==null?void 0:i.total)??0,n=(i==null?void 0:i.faults)??0,s=(i==null?void 0:i.working)??0,r=(i==null?void 0:i.incomplete)??0,a=(i==null?void 0:i.techniciansTotal)??0,l=(i==null?void 0:i.techniciansActive)??0;return o.jsxs("div",{className:"space-y-4 mb-6",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs(Ut,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Total Cases"}),o.jsx("div",{className:"rounded-lg bg-blue-50 p-2 text-[#0b5daa]",children:o.jsx(zd,{className:"h-4 w-4"})})]}),o.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[o.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-slate-900",children:t.toLocaleString()}),o.jsx("span",{className:"text-[11px] font-medium text-slate-500",children:"submitted"})]}),o.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"All submitted diagnostic records"})]}),o.jsxs(Ut,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-rose-500",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-semibold text-rose-700 uppercase tracking-wider",children:"Fault Found"}),o.jsx("div",{className:"rounded-lg bg-rose-50 p-2 text-rose-600",children:o.jsx(ql,{className:"h-4 w-4"})})]}),o.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[o.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-rose-600",children:n.toLocaleString()}),o.jsx("span",{className:"text-[11px] font-medium text-rose-500",children:t>0?`${Math.round(n/t*100)}%`:"0%"})]}),o.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"Requires repair or replacement"})]}),o.jsxs(Ut,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-emerald-500",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-semibold text-emerald-700 uppercase tracking-wider",children:"Working Satisfactory"}),o.jsx("div",{className:"rounded-lg bg-emerald-50 p-2 text-emerald-600",children:o.jsx(Yd,{className:"h-4 w-4"})})]}),o.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[o.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-emerald-600",children:s.toLocaleString()}),o.jsx("span",{className:"text-[11px] font-medium text-emerald-600",children:t>0?`${Math.round(s/t*100)}%`:"0%"})]}),o.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"No vehicle defect detected"})]}),o.jsxs(Ut,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-amber-500 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1",children:"Incomplete Cases"}),o.jsx("div",{className:"rounded-lg bg-amber-50 p-2 text-amber-600",children:o.jsx(Kd,{className:"h-4 w-4"})})]}),o.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[o.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-amber-600",children:r.toLocaleString()}),o.jsx("span",{className:"text-[11px] font-medium text-amber-600",children:"in-progress"})]}),o.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"Technician follow-up required"})]}),o.jsxs("button",{onClick:e,className:"mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors group",children:[o.jsx("span",{children:"View incomplete cases"}),o.jsx(Gd,{className:"h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-100/60 p-3 rounded-xl border border-slate-200/60 text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-slate-600",children:o.jsx(fu,{className:"h-4 w-4"})}),o.jsxs("div",{children:[o.jsx("div",{className:"font-bold text-slate-800",children:a}),o.jsx("div",{className:"text-[11px] text-slate-500",children:"Registered Technicians"})]})]}),o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-emerald-600",children:o.jsx("span",{className:"flex h-4 w-4 items-center justify-center font-bold",children:"✓"})}),o.jsxs("div",{children:[o.jsx("div",{className:"font-bold text-slate-800",children:l}),o.jsx("div",{className:"text-[11px] text-slate-500",children:"Active Accounts"})]})]}),o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-blue-600",children:o.jsx("span",{className:"flex h-4 w-4 items-center justify-center font-bold",children:"●"})}),o.jsxs("div",{children:[o.jsx("div",{className:"font-bold text-slate-800",children:(i==null?void 0:i.open)??0}),o.jsx("div",{className:"text-[11px] text-slate-500",children:"Open Escalations"})]})]}),o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-slate-600",children:o.jsx("span",{className:"flex h-4 w-4 items-center justify-center font-bold",children:"★"})}),o.jsxs("div",{children:[o.jsx("div",{className:"font-bold text-slate-800",children:(i==null?void 0:i.completed)??0}),o.jsx("div",{className:"text-[11px] text-slate-500",children:"Closed Reports"})]})]})]})]})},vu={"Tamil Nadu":"South",Kerala:"South",Karnataka:"South","Andhra Pradesh":"South",Telangana:"South",Puducherry:"South",Maharashtra:"West",Gujarat:"West",Goa:"West",Rajasthan:"West","Delhi NCR":"North",Delhi:"North",Haryana:"North",Punjab:"North","Uttar Pradesh":"North",Uttarakhand:"North","Himachal Pradesh":"North","Jammu and Kashmir":"North","West Bengal":"East",Bihar:"East",Jharkhand:"East",Odisha:"East",Assam:"East","Madhya Pradesh":"Central",Chhattisgarh:"Central"};function rs(i){const e=String((i==null?void 0:i.Region)||"").trim();if(e)return e;const t=String((i==null?void 0:i.State)||"").trim();return vu[t]||"Other"}function as(i){const e=(i==null?void 0:i["Diagnostic Status"])||"INCOMPLETE";if(["FAULT FOUND","WORKING SATISFACTORY"].includes(e))return e;const t=String((i==null?void 0:i["Session State"])||"").toUpperCase(),n=Date.parse((i==null?void 0:i["Session Last Seen"])||"");return t==="PAUSED"?"PAUSED":t==="RESUMED"||t==="ACTIVE"?n&&Date.now()-n>9e4?"FORCE CLOSED / STALE":"IN PROGRESS":e}function ja(i){const e=String((i==null?void 0:i["Vehicle Manufacturer"])||(i==null?void 0:i.Customer)||"").trim(),t=String((i==null?void 0:i.Model)||"").toUpperCase();return e&&!["-","UNKNOWN","N/A"].includes(e.toUpperCase())?e:t.includes("TML")?"TATA MOTORS":t.includes("ASHOK")?"ASHOK LEYLAND":t.includes("VECV")?"VECV":"Not provided"}const Gn=["#0b5daa","#10b981","#ef4444","#f59e0b","#8b5cf6","#06b6d4","#ec4899","#64748b"],Su={"FAULT FOUND":"#ef4444","WORKING SATISFACTORY":"#10b981",INCOMPLETE:"#f59e0b","IN PROGRESS":"#3b82f6",PAUSED:"#8b5cf6","FORCE CLOSED / STALE":"#64748b"},bu={"No feedback submitted":"#2563eb","5/5":"#06b6d4","4/5":"#10b981","3/5":"#f59e0b","2/5":"#8b5cf6","1/5":"#ef4444"},Mu={English:"#2563eb",Tamil:"#06b6d4",Malayalam:"#10b981",Hindi:"#f59e0b",Telugu:"#8b5cf6",Kannada:"#ec4899"},yu=({cases:i})=>{const e=ue.useMemo(()=>{const c={};return i.forEach(d=>{const h=as(d.payload||{});c[h]=(c[h]||0)+1}),Object.entries(c).map(([d,h])=>({name:d,value:h,color:Su[d]||"#64748b"}))},[i]),t=ue.useMemo(()=>{const c={};return i.forEach(d=>{const h=d.payload||{},g=as(h);let u="Not identified";g==="FAULT FOUND"?u=String(h["Suspected Product"]||h["Recommended Part No."]||"Other component").trim():h["Suspected Product"]&&(u=String(h["Suspected Product"]).trim()),c[u]=(c[u]||0)+1}),Object.entries(c).sort((d,h)=>h[1]-d[1]).slice(0,7).map(([d,h],g)=>({name:d.length>22?d.substring(0,20)+"…":d,fullName:d,value:h,color:Gn[g%Gn.length]}))},[i]),n=ue.useMemo(()=>{const c={"No feedback submitted":0,"5/5":0,"4/5":0,"3/5":0,"2/5":0,"1/5":0};return i.forEach(d=>{const g=(d.payload||{})["Diagnostic Feedback"];let u=null;if(typeof g=="object"&&g!==null?u=g.rating??g.score:g!=null&&String(g).trim()!==""&&(u=g),u!=null&&String(u).trim()!==""){const f=`${String(u).replace("/5","")}/5`;c[f]!==void 0?c[f]+=1:c["No feedback submitted"]+=1}else c["No feedback submitted"]+=1}),Object.entries(c).filter(([,d])=>d>0).map(([d,h])=>({name:d,value:h,color:bu[d]||"#64748b"}))},[i]),s=ue.useMemo(()=>{const c={};return i.forEach(d=>{const h=d.payload||{},g=String(h["Diagnostic Language Name"]||h["Diagnostic Language"]||"English").trim();c[g]=(c[g]||0)+1}),Object.entries(c).sort((d,h)=>h[1]-d[1]).map(([d,h],g)=>({name:d,value:h,color:Mu[d]||Gn[g%Gn.length]}))},[i]),r=ue.useMemo(()=>{const c={};i.forEach(h=>{const g=rs(h.payload||{});c[g]=(c[g]||0)+1});const d={North:1,East:2,West:3,South:4};return Object.entries(c).sort((h,g)=>{const u=d[h[0]]||99,f=d[g[0]]||99;return u-f}).map(([h,g],u)=>({name:h,value:g,color:Gn[u%Gn.length]}))},[i]),a=ue.useMemo(()=>{const c={};return i.forEach(d=>{const h=ja(d.payload||{});c[h]=(c[h]||0)+1}),Object.entries(c).sort((d,h)=>h[1]-d[1]).slice(0,5).map(([d,h],g)=>({name:d,value:h,color:Gn[g%Gn.length]}))},[i]),l=ue.useMemo(()=>{const c={Warranty:0,"Post warranty":0,"Not specified":0};return i.forEach(d=>{const h=d.payload||{},g=h["Odometer Km"]??h["Kms & Date of Sale"]??h.Odometer??"",u=String(g).replace(/,/g,"").match(/\d+(?:\.\d+)?/);if(!u){c["Not specified"]+=1;return}parseFloat(u[0])<2e5?c.Warranty+=1:c["Post warranty"]+=1}),[{name:"Warranty (<200k km)",value:c.Warranty,color:"#10b981"},{name:"Post warranty (≥200k km)",value:c["Post warranty"],color:"#f59e0b"}].filter(d=>d.value>0)},[i]);return o.jsxs("div",{className:"space-y-4 mb-6",children:[o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[o.jsxs(Ut,{children:[o.jsxs(en,{children:[o.jsx(tn,{children:"Case Status Breakdown"}),o.jsx(nn,{children:"Overall outcome of submitted diagnostic cases"})]}),o.jsx(sn,{children:e.length===0?o.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No case data available"}):o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 h-64",children:[o.jsxs("div",{className:"w-full sm:w-1/2 h-full flex items-center justify-center relative",children:[o.jsx(ii,{width:"100%",height:"100%",children:o.jsxs(Gi,{children:[o.jsx(Hi,{data:e,innerRadius:55,outerRadius:80,paddingAngle:3,dataKey:"value",children:e.map((c,d)=>o.jsx(Vi,{fill:c.color},`status-cell-${d}`))}),o.jsx(si,{formatter:(c,d)=>[`${c} cases`,d],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}})]})}),o.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[o.jsx("span",{className:"text-2xl font-bold text-slate-800",children:i.length}),o.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]})]}),o.jsx("div",{className:"w-full sm:w-1/2 flex flex-col gap-2",children:e.map(c=>o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 truncate",children:[o.jsx("span",{className:"h-2.5 w-2.5 rounded-full shrink-0",style:{backgroundColor:c.color}}),o.jsx("span",{className:"truncate text-slate-600 font-medium",children:c.name})]}),o.jsxs("span",{className:"font-bold text-slate-900 ml-2",children:[c.value," ",o.jsxs("span",{className:"text-slate-400 font-normal",children:["(",i.length?Math.round(c.value/i.length*100):0,"%)"]})]})]},c.name))})]})})]}),o.jsxs(Ut,{children:[o.jsxs(en,{children:[o.jsx(tn,{children:"Suspected Failure Distribution"}),o.jsx(nn,{children:"Highest reported fault categories from field diagnostics"})]}),o.jsx(sn,{children:t.length===0?o.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No defect reports found in the current selection"}):o.jsx("div",{className:"h-64",children:o.jsx(ii,{width:"100%",height:"100%",children:o.jsxs(Mo,{data:t,layout:"vertical",margin:{top:5,right:30,left:10,bottom:5},children:[o.jsx(yo,{strokeDasharray:"3 3",horizontal:!1,stroke:"#e2e8f0"}),o.jsx(Eo,{type:"number",tick:{fontSize:11}}),o.jsx(wo,{dataKey:"name",type:"category",width:120,tick:{fontSize:11,fill:"#475569"}}),o.jsx(si,{formatter:(c,d,h)=>[`${c} reports`,h.payload.fullName],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}}),o.jsx(To,{dataKey:"value",fill:"#0b5daa",radius:[0,4,4,0]})]})})})})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[o.jsxs(Ut,{children:[o.jsxs(en,{children:[o.jsx(tn,{children:"Diagnostic Feedback"}),o.jsx(nn,{children:"Technician survey ratings & diagnostic clarity feedback"})]}),o.jsx(sn,{children:n.length===0?o.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No feedback data available"}):o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 h-64",children:[o.jsxs("div",{className:"w-full sm:w-1/2 h-full flex items-center justify-center relative",children:[o.jsx(ii,{width:"100%",height:"100%",children:o.jsxs(Gi,{children:[o.jsx(Hi,{data:n,innerRadius:55,outerRadius:80,paddingAngle:2,dataKey:"value",children:n.map((c,d)=>o.jsx(Vi,{fill:c.color},`fb-cell-${d}`))}),o.jsx(si,{formatter:(c,d)=>[`${c} cases`,d],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}})]})}),o.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[o.jsx("span",{className:"text-2xl font-bold text-slate-800",children:i.length}),o.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]})]}),o.jsx("div",{className:"w-full sm:w-1/2 flex flex-col gap-2",children:n.map(c=>o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 truncate",children:[o.jsx("span",{className:"h-2.5 w-2.5 rounded-full shrink-0",style:{backgroundColor:c.color}}),o.jsx("span",{className:"truncate text-slate-600 font-medium",children:c.name})]}),o.jsxs("span",{className:"font-bold text-slate-900 ml-2",children:[c.value," ",o.jsxs("span",{className:"text-slate-400 font-normal",children:["(",i.length?Math.round(c.value/i.length*100):0,"%)"]})]})]},c.name))})]})})]}),o.jsxs(Ut,{children:[o.jsxs(en,{children:[o.jsx(tn,{children:"Diagnostic Language Used"}),o.jsx(nn,{children:"Session interface language selected in field"})]}),o.jsx(sn,{children:s.length===0?o.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No language data available"}):o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 h-64",children:[o.jsxs("div",{className:"w-full sm:w-1/2 h-full flex items-center justify-center relative",children:[o.jsx(ii,{width:"100%",height:"100%",children:o.jsxs(Gi,{children:[o.jsx(Hi,{data:s,innerRadius:55,outerRadius:80,paddingAngle:2,dataKey:"value",children:s.map((c,d)=>o.jsx(Vi,{fill:c.color},`lang-cell-${d}`))}),o.jsx(si,{formatter:(c,d)=>[`${c} cases`,d],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}})]})}),o.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[o.jsx("span",{className:"text-2xl font-bold text-slate-800",children:i.length}),o.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]})]}),o.jsx("div",{className:"w-full sm:w-1/2 flex flex-col gap-2",children:s.map(c=>o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 truncate",children:[o.jsx("span",{className:"h-2.5 w-2.5 rounded-full shrink-0",style:{backgroundColor:c.color}}),o.jsx("span",{className:"truncate text-slate-600 font-medium",children:c.name})]}),o.jsxs("span",{className:"font-bold text-slate-900 ml-2",children:[c.value," ",o.jsxs("span",{className:"text-slate-400 font-normal",children:["(",i.length?Math.round(c.value/i.length*100):0,"%)"]})]})]},c.name))})]})})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[o.jsxs(Ut,{children:[o.jsxs(en,{className:"pb-2",children:[o.jsx(tn,{className:"text-sm",children:"Complaints by Region"}),o.jsx(nn,{children:"Zone distribution"})]}),o.jsx(sn,{children:o.jsx("div",{className:"h-44",children:o.jsx(ii,{width:"100%",height:"100%",children:o.jsxs(Mo,{data:r,margin:{top:10,right:10,left:-25,bottom:0},children:[o.jsx(yo,{strokeDasharray:"2 2",vertical:!1,stroke:"#f1f5f9"}),o.jsx(Eo,{dataKey:"name",tick:{fontSize:10}}),o.jsx(wo,{tick:{fontSize:10}}),o.jsx(si,{contentStyle:{backgroundColor:"#1e293b",borderRadius:"6px",color:"#fff",fontSize:"11px"}}),o.jsx(To,{dataKey:"value",fill:"#2563eb",radius:[4,4,0,0]})]})})})})]}),o.jsxs(Ut,{children:[o.jsxs(en,{className:"pb-2",children:[o.jsx(tn,{className:"text-sm",children:"Vehicle Manufacturer"}),o.jsx(nn,{children:"OEM distribution"})]}),o.jsx(sn,{children:o.jsx("div",{className:"h-44",children:o.jsx(ii,{width:"100%",height:"100%",children:o.jsxs(Gi,{children:[o.jsx(Hi,{data:a,innerRadius:30,outerRadius:55,paddingAngle:2,dataKey:"value",children:a.map((c,d)=>o.jsx(Vi,{fill:c.color},`m-${d}`))}),o.jsx(si,{contentStyle:{backgroundColor:"#1e293b",borderRadius:"6px",color:"#fff",fontSize:"11px"}})]})})})})]}),o.jsxs(Ut,{children:[o.jsxs(en,{className:"pb-2",children:[o.jsx(tn,{className:"text-sm",children:"Warranty Status"}),o.jsx(nn,{children:"Based on 200,000 km policy"})]}),o.jsx(sn,{children:o.jsx("div",{className:"h-44",children:o.jsx(ii,{width:"100%",height:"100%",children:o.jsxs(Gi,{children:[o.jsx(Hi,{data:l,innerRadius:30,outerRadius:55,paddingAngle:2,dataKey:"value",children:l.map((c,d)=>o.jsx(Vi,{fill:c.color},`w-${d}`))}),o.jsx(si,{contentStyle:{backgroundColor:"#1e293b",borderRadius:"6px",color:"#fff",fontSize:"11px"}})]})})})})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="187",Eu=0,Do=1,wu=2,js=1,Tu=2,Qi=3,di=0,Wt=1,In=2,Ni=0,is=1,ea=2,Lo=3,Io=4,Au=5,Ai=100,Ru=101,Cu=102,Nu=103,Pu=104,Du=200,Lu=201,Iu=202,Uu=203,Yl=204,$l=205,Fu=206,Ou=207,Bu=208,ku=209,zu=210,Gu=211,Hu=212,Vu=213,Wu=214,ta=0,na=1,ia=2,os=3,sa=4,ra=5,aa=6,oa=7,Kl=0,ju=1,Xu=2,Un=0,Zl=1,Jl=2,Ql=3,qa=4,ec=5,tc=6,nc=7,ic=300,Di=301,ls=302,xr=303,_r=304,er=1e3,_n=1001,la=1002,Tt=1003,qu=1004,Ss=1005,Xt=1006,vr=1007,$n=1008,Zt=1009,sc=1010,rc=1011,cs=1012,Ya=1013,yn=1014,vn=1015,En=1016,$a=1017,Ka=1018,Li=1020,ac=35902,oc=35899,lc=1021,cc=1022,Sn=1023,Zn=1026,Kn=1027,dc=1028,Za=1029,ui=1030,Ja=1031,Qa=1033,Xs=33776,qs=33777,Ys=33778,$s=33779,ca=35840,da=35841,ua=35842,ha=35843,fa=36196,pa=37492,ma=37496,ga=37488,xa=37489,tr=37490,_a=37491,va=37808,Sa=37809,ba=37810,Ma=37811,ya=37812,Ea=37813,wa=37814,Ta=37815,Aa=37816,Ra=37817,Ca=37818,Na=37819,Pa=37820,Da=37821,La=36492,Ia=36494,Ua=36495,Fa=36283,Oa=36284,nr=36285,Ba=36286,Yu=3200,ka=0,$u=1,Yn="",Kt="srgb",ir="srgb-linear",sr="linear",tt="srgb",Sr=7680,Ku=519,Zu=512,Ju=513,Qu=514,uc=515,eh=516,th=517,hc=518,fc=519,nh=35044,Uo="300 es",hn=2e3,ds=2001;function ih(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sh(){const i=us("canvas");return i.style.display="block",i}const Fo={};function Oo(...i){const e="THREE."+i.shift();console.log(e,...i)}function pc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=pc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=pc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ks(...i){const e=i.join(" ");e in Fo||(Fo[e]=!0,Le(...i))}function rh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ah={[ta]:ta,[ia]:aa,[sa]:sa,[os]:ra,[na]:na,[aa]:ia,[oa]:oa,[ra]:os};class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,za=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function oh(i,e){return(i%e+e)%e}function Mr(i,e,t){return(1-t)*i+t*e}function lh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function eo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ch(i,e){if(e.constructor===Float32Array)return i;const t=eo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function dh(i,e){if(e.constructor===Float32Array)return i;const t=eo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const ao=class ao{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ao.prototype.isVector2=!0;let $e=ao;class Oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let c=n[s+0],d=n[s+1],h=n[s+2],g=n[s+3],u=r[a+0],f=r[a+1],_=r[a+2],M=r[a+3];if(g!==M||c!==u||d!==f||h!==_){let m=c*u+d*f+h*_+g*M;m<0&&(u=-u,f=-f,_=-_,M=-M,m=-m);let p=1-l;if(m<.9995){const b=Math.acos(m),R=Math.sin(b);p=Math.sin(p*b)/R,l=Math.sin(l*b)/R,c=c*p+u*l,d=d*p+f*l,h=h*p+_*l,g=g*p+M*l}else{c=c*p+u*l,d=d*p+f*l,h=h*p+_*l,g=g*p+M*l;const b=1/Math.sqrt(c*c+d*d+h*h+g*g);c*=b,d*=b,h*=b,g*=b}}e[t]=c,e[t+1]=d,e[t+2]=h,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,a){const l=n[s],c=n[s+1],d=n[s+2],h=n[s+3],g=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=l*_+h*g+c*f-d*u,e[t+1]=c*_+h*u+d*g-l*f,e[t+2]=d*_+h*f+l*u-c*g,e[t+3]=h*_-l*g-c*u-d*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,d=l(n/2),h=l(s/2),g=l(r/2),u=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*g+d*f*_,this._y=d*f*g-u*h*_,this._z=d*h*_+u*f*g,this._w=d*h*g-u*f*_;break;case"YXZ":this._x=u*h*g+d*f*_,this._y=d*f*g-u*h*_,this._z=d*h*_-u*f*g,this._w=d*h*g+u*f*_;break;case"ZXY":this._x=u*h*g-d*f*_,this._y=d*f*g+u*h*_,this._z=d*h*_+u*f*g,this._w=d*h*g-u*f*_;break;case"ZYX":this._x=u*h*g-d*f*_,this._y=d*f*g+u*h*_,this._z=d*h*_-u*f*g,this._w=d*h*g+u*f*_;break;case"YZX":this._x=u*h*g+d*f*_,this._y=d*f*g+u*h*_,this._z=d*h*_-u*f*g,this._w=d*h*g-u*f*_;break;case"XZY":this._x=u*h*g-d*f*_,this._y=d*f*g-u*h*_,this._z=d*h*_+u*f*g,this._w=d*h*g+u*f*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],d=t[2],h=t[6],g=t[10],u=n+l+g;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-d)*f,this._z=(a-s)*f}else if(n>l&&n>g){const f=2*Math.sqrt(1+n-l-g);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+d)/f}else if(l>g){const f=2*Math.sqrt(1+l-n-g);this._w=(r-d)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+g-n-l);this._w=(a-s)/f,this._x=(r+d)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,d=t._z,h=t._w;return this._x=n*h+a*l+s*d-r*c,this._y=s*h+a*c+r*l-n*d,this._z=r*h+a*d+n*c-s*l,this._w=a*h-n*l-s*c-r*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){const d=Math.acos(l),h=Math.sin(d);c=Math.sin(c*d)/h,t=Math.sin(t*d)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const oo=class oo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,d=2*(a*s-l*n),h=2*(l*t-r*s),g=2*(r*n-a*t);return this.x=t+c*d+a*g-l*h,this.y=n+c*h+l*d-r*g,this.z=s+c*g+r*h-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yr.copy(this).projectOnVector(e),this.sub(yr)}reflect(e){return this.sub(yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oo.prototype.isVector3=!0;let j=oo;const yr=new j,Bo=new Oi,lo=class lo{constructor(e,t,n,s,r,a,l,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,d)}set(e,t,n,s,r,a,l,c,d){const h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],c=n[6],d=n[1],h=n[4],g=n[7],u=n[2],f=n[5],_=n[8],M=s[0],m=s[3],p=s[6],b=s[1],R=s[4],y=s[7],E=s[2],T=s[5],x=s[8];return r[0]=a*M+l*b+c*E,r[3]=a*m+l*R+c*T,r[6]=a*p+l*y+c*x,r[1]=d*M+h*b+g*E,r[4]=d*m+h*R+g*T,r[7]=d*p+h*y+g*x,r[2]=u*M+f*b+_*E,r[5]=u*m+f*R+_*T,r[8]=u*p+f*y+_*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8];return t*a*h-t*l*d-n*r*h+n*l*c+s*r*d-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8],g=h*a-l*d,u=l*c-h*r,f=d*r-a*c,_=t*g+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=g*M,e[1]=(s*d-h*n)*M,e[2]=(l*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*c)*M,e[5]=(s*r-l*t)*M,e[6]=f*M,e[7]=(n*c-d*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*a+d*l)+a+e,-s*d,s*c,-s*(-d*a+c*l)+l+t,0,0,1),this}scale(e,t){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Er.makeScale(e,t)),this}rotate(e){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lo.prototype.isMatrix3=!0;let Ie=lo;const Er=new Ie,ko=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zo=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uh(){const i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:e,whitePoint:n,transfer:sr,toXYZ:ko,fromXYZ:zo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:ko,fromXYZ:zo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const qe=uh();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class hh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=us("canvas")),fi.width=e.width,fi.height=e.height;const s=fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fh=0;class to{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let ph=0;const Tr=new j;class At extends hi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=_n,s=_n,r=Xt,a=$n,l=Sn,c=Zt,d=At.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=fs(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Tr).x}get height(){return this.source.getSize(Tr).y}get depth(){return this.source.getSize(Tr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=ic;At.DEFAULT_ANISOTROPY=1;const co=class co{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,d=c[0],h=c[4],g=c[8],u=c[1],f=c[5],_=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(g-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(g+M)<.1&&Math.abs(_+m)<.1&&Math.abs(d+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,y=(f+1)/2,E=(p+1)/2,T=(h+u)/4,x=(g+M)/4,w=(_+m)/4;return R>y&&R>E?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=x/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=w/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=w/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(g-M)*(g-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(g-M)/b,this.z=(u-h)/b,this.w=Math.acos((d+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};co.prototype.isVector4=!0;let ht=co;class mh extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new At({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new to(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mc extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const lr=class lr{constructor(e,t,n,s,r,a,l,c,d,h,g,u,f,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,c,d,h,g,u,f,_,M,m)}set(e,t,n,s,r,a,l,c,d,h,g,u,f,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=d,p[6]=h,p[10]=g,p[14]=u,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/pi.setFromMatrixColumn(e,0).length(),r=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),d=Math.sin(s),h=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*g,_=l*h,M=l*g;t[0]=c*h,t[4]=-c*g,t[8]=d,t[1]=f+_*d,t[5]=u-M*d,t[9]=-l*c,t[2]=M-u*d,t[6]=_+f*d,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*g,_=d*h,M=d*g;t[0]=u+M*l,t[4]=_*l-f,t[8]=a*d,t[1]=a*g,t[5]=a*h,t[9]=-l,t[2]=f*l-_,t[6]=M+u*l,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*g,_=d*h,M=d*g;t[0]=u-M*l,t[4]=-a*g,t[8]=_+f*l,t[1]=f+_*l,t[5]=a*h,t[9]=M-u*l,t[2]=-a*d,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*g,_=l*h,M=l*g;t[0]=c*h,t[4]=_*d-f,t[8]=u*d+M,t[1]=c*g,t[5]=M*d+u,t[9]=f*d-_,t[2]=-d,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*d,_=l*c,M=l*d;t[0]=c*h,t[4]=M-u*g,t[8]=_*g+f,t[1]=g,t[5]=a*h,t[9]=-l*h,t[2]=-d*h,t[6]=f*g+_,t[10]=u-M*g}else if(e.order==="XZY"){const u=a*c,f=a*d,_=l*c,M=l*d;t[0]=c*h,t[4]=-g,t[8]=d*h,t[1]=u*g+M,t[5]=a*h,t[9]=f*g-_,t[2]=_*g-f,t[6]=l*h,t[10]=M*g+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xh,e,_h)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Hn.crossVectors(n,Yt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Hn.crossVectors(n,Yt)),Hn.normalize(),bs.crossVectors(Yt,Hn),s[0]=Hn.x,s[4]=bs.x,s[8]=Yt.x,s[1]=Hn.y,s[5]=bs.y,s[9]=Yt.y,s[2]=Hn.z,s[6]=bs.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],c=n[8],d=n[12],h=n[1],g=n[5],u=n[9],f=n[13],_=n[2],M=n[6],m=n[10],p=n[14],b=n[3],R=n[7],y=n[11],E=n[15],T=s[0],x=s[4],w=s[8],I=s[12],C=s[1],L=s[5],F=s[9],q=s[13],P=s[2],B=s[6],Y=s[10],H=s[14],te=s[3],V=s[7],Q=s[11],ee=s[15];return r[0]=a*T+l*C+c*P+d*te,r[4]=a*x+l*L+c*B+d*V,r[8]=a*w+l*F+c*Y+d*Q,r[12]=a*I+l*q+c*H+d*ee,r[1]=h*T+g*C+u*P+f*te,r[5]=h*x+g*L+u*B+f*V,r[9]=h*w+g*F+u*Y+f*Q,r[13]=h*I+g*q+u*H+f*ee,r[2]=_*T+M*C+m*P+p*te,r[6]=_*x+M*L+m*B+p*V,r[10]=_*w+M*F+m*Y+p*Q,r[14]=_*I+M*q+m*H+p*ee,r[3]=b*T+R*C+y*P+E*te,r[7]=b*x+R*L+y*B+E*V,r[11]=b*w+R*F+y*Y+E*Q,r[15]=b*I+R*q+y*H+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],d=e[13],h=e[2],g=e[6],u=e[10],f=e[14],_=e[3],M=e[7],m=e[11],p=e[15],b=c*f-d*u,R=l*f-d*g,y=l*u-c*g,E=a*f-d*h,T=a*u-c*h,x=a*g-l*h;return t*(M*b-m*R+p*y)-n*(_*b-m*E+p*T)+s*(_*R-M*E+p*x)-r*(_*y-M*T+m*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10];return t*(a*h-l*d)-n*(r*h-l*c)+s*(r*d-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8],g=e[9],u=e[10],f=e[11],_=e[12],M=e[13],m=e[14],p=e[15],b=t*l-n*a,R=t*c-s*a,y=t*d-r*a,E=n*c-s*l,T=n*d-r*l,x=s*d-r*c,w=h*M-g*_,I=h*m-u*_,C=h*p-f*_,L=g*m-u*M,F=g*p-f*M,q=u*p-f*m,P=b*q-R*F+y*L+E*C-T*I+x*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return e[0]=(l*q-c*F+d*L)*B,e[1]=(s*F-n*q-r*L)*B,e[2]=(M*x-m*T+p*E)*B,e[3]=(u*T-g*x-f*E)*B,e[4]=(c*C-a*q-d*I)*B,e[5]=(t*q-s*C+r*I)*B,e[6]=(m*y-_*x-p*R)*B,e[7]=(h*x-u*y+f*R)*B,e[8]=(a*F-l*C+d*w)*B,e[9]=(n*C-t*F-r*w)*B,e[10]=(_*T-M*y+p*b)*B,e[11]=(g*y-h*T-f*b)*B,e[12]=(l*I-a*L-c*w)*B,e[13]=(t*L-n*I+s*w)*B,e[14]=(M*R-_*E-m*b)*B,e[15]=(h*E-g*R+u*b)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,c=e.z,d=r*a,h=r*l;return this.set(d*a+n,d*l-s*c,d*c+s*l,0,d*l+s*c,h*l+n,h*c-s*a,0,d*c-s*l,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,d=r+r,h=a+a,g=l+l,u=r*d,f=r*h,_=r*g,M=a*h,m=a*g,p=l*g,b=c*d,R=c*h,y=c*g,E=n.x,T=n.y,x=n.z;return s[0]=(1-(M+p))*E,s[1]=(f+y)*E,s[2]=(_-R)*E,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(_+R)*x,s[9]=(m-b)*x,s[10]=(1-(u+M))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=pi.set(s[0],s[1],s[2]).length();const l=pi.set(s[4],s[5],s[6]).length(),c=pi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);const d=1/a,h=1/l,g=1/c;return an.elements[0]*=d,an.elements[1]*=d,an.elements[2]*=d,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=g,an.elements[9]*=g,an.elements[10]*=g,t.setFromRotationMatrix(an),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,a,l=hn,c=!1){const d=this.elements,h=2*r/(t-e),g=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let _,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(l===hn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(l===ds)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=u,d[12]=0,d[1]=0,d[5]=g,d[9]=f,d[13]=0,d[2]=0,d[6]=0,d[10]=_,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=hn,c=!1){const d=this.elements,h=2/(t-e),g=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let _,M;if(c)_=1/(a-r),M=a/(a-r);else if(l===hn)_=-2/(a-r),M=-(a+r)/(a-r);else if(l===ds)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=0,d[12]=u,d[1]=0,d[5]=g,d[9]=0,d[13]=f,d[2]=0,d[6]=0,d[10]=_,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lr.prototype.isMatrix4=!0;let dt=lr;const pi=new j,an=new dt,xh=new j(0,0,0),_h=new j(1,1,1),Hn=new j,bs=new j,Yt=new j,Go=new dt,Ho=new Oi;class Jn{constructor(e=0,t=0,n=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],d=s[5],h=s[9],g=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-g,f),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vh=0;const Vo=new j,mi=new Oi,Rn=new dt,Ms=new j,qi=new j,Sh=new j,bh=new Oi,Wo=new j(1,0,0),jo=new j(0,1,0),Xo=new j(0,0,1),qo={type:"added"},Mh={type:"removed"},gi={type:"childadded",child:null},Ar={type:"childremoved",child:null};class Rt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new j,t=new Jn,n=new Oi,s=new j(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ie}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Wo,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(Xo,e)}translateOnAxis(e,t){return Vo.copy(e).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wo,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(Xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(qi,Ms,this.up):Rn.lookAt(Ms,qi,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(Rn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qo),gi.child=e,this.dispatchEvent(gi),gi.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mh),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qo),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const g=c[d];r(e.shapes,g)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),d=a(e.textures),h=a(e.images),g=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new j(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ri extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yh={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(d,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],u=h.position.distanceTo(g.position),f=.02,_=.005;d.inputState.pinching&&u>f+_?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=f-_&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(yh)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Cr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=oh(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cr(a,r,e+1/3),this.g=Cr(a,r,e),this.b=Cr(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return qe.workingToColorSpace(Dt.copy(this),e),Math.round(Ye(Dt.r*255,0,255))*65536+Math.round(Ye(Dt.g*255,0,255))*256+Math.round(Ye(Dt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),l=Math.min(n,s,r);let c,d;const h=(l+a)/2;if(l===a)c=0,d=0;else{const g=a-l;switch(d=h<=.5?g/(a+l):g/(2-a-l),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Kt){qe.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(ys);const n=Mr(Vn.h,ys.h,t),s=Mr(Vn.s,ys.s,t),r=Mr(Vn.l,ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new je;je.NAMES=xc;class Eh extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new j,Cn=new j,Nr=new j,Nn=new j,xi=new j,_i=new j,Yo=new j,Pr=new j,Dr=new j,Lr=new j,Ir=new ht,Ur=new ht,Fr=new ht;class un{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Cn.subVectors(n,t),Nr.subVectors(e,t);const a=on.dot(on),l=on.dot(Cn),c=on.dot(Nr),d=Cn.dot(Cn),h=Cn.dot(Nr),g=a*d-l*l;if(g===0)return r.set(0,0,0),null;const u=1/g,f=(d*c-l*h)*u,_=(a*h-l*c)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,s,r,a,l,c){return this.getBarycoord(e,t,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(l,Nn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ir.setScalar(0),Ur.setScalar(0),Fr.setScalar(0),Ir.fromBufferAttribute(e,t),Ur.fromBufferAttribute(e,n),Fr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ir,r.x),a.addScaledVector(Ur,r.y),a.addScaledVector(Fr,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Cn.subVectors(e,t),on.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,l;xi.subVectors(s,n),_i.subVectors(r,n),Pr.subVectors(e,n);const c=xi.dot(Pr),d=_i.dot(Pr);if(c<=0&&d<=0)return t.copy(n);Dr.subVectors(e,s);const h=xi.dot(Dr),g=_i.dot(Dr);if(h>=0&&g<=h)return t.copy(s);const u=c*g-h*d;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(xi,a);Lr.subVectors(e,r);const f=xi.dot(Lr),_=_i.dot(Lr);if(_>=0&&f<=_)return t.copy(r);const M=f*d-c*_;if(M<=0&&d>=0&&_<=0)return l=d/(d-_),t.copy(n).addScaledVector(_i,l);const m=h*_-f*g;if(m<=0&&g-h>=0&&f-_>=0)return Yo.subVectors(r,s),l=(g-h)/(g-h+(f-_)),t.copy(s).addScaledVector(Yo,l);const p=1/(m+M+u);return a=M*p,l=u*p,t.copy(n).addScaledVector(xi,a).addScaledVector(_i,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ps{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),ws.subVectors(this.max,Yi),vi.subVectors(e.a,Yi),Si.subVectors(e.b,Yi),bi.subVectors(e.c,Yi),Wn.subVectors(Si,vi),jn.subVectors(bi,Si),ri.subVectors(vi,bi);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-ri.z,ri.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,ri.z,0,-ri.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-ri.y,ri.x,0];return!Or(t,vi,Si,bi,ws)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,vi,Si,bi,ws))?!1:(Ts.crossVectors(Wn,jn),t=[Ts.x,Ts.y,Ts.z],Or(t,vi,Si,bi,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new j,new j,new j,new j,new j,new j,new j,new j],ln=new j,Es=new ps,vi=new j,Si=new j,bi=new j,Wn=new j,jn=new j,ri=new j,Yi=new j,ws=new j,Ts=new j,ai=new j;function Or(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);const l=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),c=e.dot(ai),d=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>l)return!1}return!0}const vt=new j,As=new $e;let wh=0;class ci extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=e!==void 0?eo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ch(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):dh(e,this.array)}}class _c extends ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends ci{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Th=new ps,$i=new j,Br=new j;class cr{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Br)),this.expandByPoint($i.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ah=0;const Qt=new dt,kr=new Rt,Mi=new j,$t=new ps,Ki=new ps,Et=new j;class wn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?vc:_c)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Ki.setFromBufferAttribute(l),this.morphTargetsRelative?(Et.addVectors($t.min,Ki.min),$t.expandByPoint(Et),Et.addVectors($t.max,Ki.max),$t.expandByPoint(Et)):($t.expandByPoint(Ki.min),$t.expandByPoint(Ki.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],c=this.morphTargetsRelative;for(let d=0,h=l.count;d<h;d++)Et.fromBufferAttribute(l,d),c&&(Mi.fromBufferAttribute(e,d),Et.add(Mi)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ci(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],c=[],d=new Uint8Array(n.count);for(let I=0;I<n.count;I++)l[I]=new j,c[I]=new j;const h=new j,g=new j,u=new j,f=new $e,_=new $e,M=new $e,m=new j,p=new j;function b(I,C,L){d[I]=d[C]=d[L]=1,h.fromBufferAttribute(n,I),g.fromBufferAttribute(n,C),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,I),_.fromBufferAttribute(r,C),M.fromBufferAttribute(r,L),g.sub(h),u.sub(h),_.sub(f),M.sub(f);const F=1/(_.x*M.y-M.x*_.y);isFinite(F)&&(m.copy(g).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(F),p.copy(u).multiplyScalar(_.x).addScaledVector(g,-M.x).multiplyScalar(F),l[I].add(m),l[C].add(m),l[L].add(m),c[I].add(p),c[C].add(p),c[L].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let I=0,C=R.length;I<C;++I){const L=R[I],F=L.start,q=L.count;for(let P=F,B=F+q;P<B;P+=3)b(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new j,E=new j,T=new j,x=new j;function w(I){T.fromBufferAttribute(s,I),x.copy(T);const C=l[I];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(x,C);const F=E.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,F)}for(let I=0,C=n.count;I<C;++I)d[I]&&w(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new j,r=new j,a=new j,l=new j,c=new j,d=new j,h=new j,g=new j;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,m),l.add(h),c.add(h),d.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(l,c){const d=l.array,h=l.itemSize,g=l.normalized,u=new d.constructor(c.length*h);let f=0,_=0;for(let M=0,m=c.length;M<m;M++){l.isInterleavedBufferAttribute?f=c[M]*l.data.stride+l.offset:f=c[M]*h;for(let p=0;p<h;p++)u[_++]=d[f++]}return new ci(u,h,g)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],d=e(c,n);t.setAttribute(l,d)}const r=this.morphAttributes;for(const l in r){const c=[],d=r[l];for(let h=0,g=d.length;h<g;h++){const u=d[h],f=e(u,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let g=0,u=d.length;g<u;g++){const f=d[g];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const h=s[d];this.setAttribute(d,h.clone(t))}const r=e.morphAttributes;for(const d in r){const h=[],g=r[d];for(let u=0,f=g.length;u<f;u++)h.push(g[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,h=a.length;d<h;d++){const g=a[d];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zr=new j,Rh=new j,Ch=new Ie;class qn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=zr.subVectors(n,t).cross(Rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(zr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ch.getNormalMatrix(e),s=this.coplanarPoint(zr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Nh=0;class Bi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=is,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=$l,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const l in r){const c=r[l];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dn=new j,Gr=new j,Rs=new j,Cs=new j;class Sc{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gr.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(Gr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Rs),l=Cs.dot(this.direction),c=-Cs.dot(Rs),d=Cs.lengthSq(),h=Math.abs(1-a*a);let g,u,f,_;if(h>0)if(g=a*c-l,u=a*l-c,_=r*h,g>=0)if(u>=-_)if(u<=_){const M=1/h;g*=M,u*=M,f=g*(g+a*u+2*l)+u*(a*g+u+2*c)+d}else u=r,g=Math.max(0,-(a*u+l)),f=-g*g+u*(u+2*c)+d;else u=-r,g=Math.max(0,-(a*u+l)),f=-g*g+u*(u+2*c)+d;else u<=-_?(g=Math.max(0,-(-a*r+l)),u=g>0?-r:Math.min(Math.max(-r,-c),r),f=-g*g+u*(u+2*c)+d):u<=_?(g=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+d):(g=Math.max(0,-(a*r+l)),u=g>0?r:Math.min(Math.max(-r,-c),r),f=-g*g+u*(u+2*c)+d);else u=a>0?-r:r,g=Math.max(0,-(a*u+l)),f=-g*g+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Gr).addScaledVector(Rs,u),f}intersectSphere(e,t){if(e.radius<0)return null;Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,c;const d=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,u=this.origin;return d>=0?(n=(e.min.x-u.x)*d,s=(e.max.x-u.x)*d):(n=(e.max.x-u.x)*d,s=(e.min.x-u.x)*d),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(l=(e.min.z-u.z)*g,c=(e.max.z-u.z)*g):(l=(e.max.z-u.z)*g,c=(e.min.z-u.z)*g),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,l=this.direction,c=l.x,d=l.y,h=l.z,g=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,b=n.y-a.y,R=n.z-a.z,y=Math.abs(c),E=Math.abs(d),T=Math.abs(h);let x,w,I,C,L,F,q,P,B,Y,H,te;if(y>=E&&y>=T?(I=c,F=g,B=_,te=p,c>=0?(x=d,w=h,C=u,L=f,q=M,P=m,Y=b,H=R):(x=h,w=d,C=f,L=u,q=m,P=M,Y=R,H=b)):E>=T?(I=d,F=u,B=M,te=b,d>=0?(x=h,w=c,C=f,L=g,q=m,P=_,Y=R,H=p):(x=c,w=h,C=g,L=f,q=_,P=m,Y=p,H=R)):(I=h,F=f,B=m,te=R,h>=0?(x=c,w=d,C=g,L=u,q=_,P=M,Y=p,H=b):(x=d,w=c,C=u,L=g,q=M,P=_,Y=b,H=p)),I===0)return null;const V=x/I,Q=w/I,ee=1/I,be=C-V*F,ie=L-Q*F,O=q-V*B,oe=P-Q*B,xe=Y-V*te,Ae=H-Q*te,pe=xe*oe-Ae*O,Ce=be*Ae-ie*xe,Ze=O*ie-oe*be;if(s){if(pe<0||Ce<0||Ze<0)return null}else if((pe<0||Ce<0||Ze<0)&&(pe>0||Ce>0||Ze>0))return null;const Re=pe+Ce+Ze;if(Re===0)return null;const He=ee*(pe*F+Ce*B+Ze*te);return(Re>0?He<0:He>0)?null:this.at(He/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bc extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $o=new dt,oi=new Sc,Ns=new cr,Ko=new j,Ps=new j,Ds=new j,Ls=new j,Hr=new j,Is=new j,Zo=new j,Us=new j;class Mn extends Rt{constructor(e=new wn,t=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){Is.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=l[c],g=r[c];h!==0&&(Hr.fromBufferAttribute(g,e),a?Is.addScaledVector(Hr,h):Is.addScaledVector(Hr.sub(t),h))}t.add(Is)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(Ns.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Ns,Ko)===null||oi.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&($o.copy(r).invert(),oi.copy(e.ray).applyMatrix4($o),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,g=r.attributes.normal,u=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,E=R;y<E;y+=3){const T=l.getX(y),x=l.getX(y+1),w=l.getX(y+2);s=Fs(this,p,e,n,d,h,g,T,x,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const b=l.getX(m),R=l.getX(m+1),y=l.getX(m+2);s=Fs(this,a,e,n,d,h,g,b,R,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,E=R;y<E;y+=3){const T=y,x=y+1,w=y+2;s=Fs(this,p,e,n,d,h,g,T,x,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const b=m,R=m+1,y=m+2;s=Fs(this,a,e,n,d,h,g,b,R,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ph(i,e,t,n,s,r,a,l){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,e.side===di,l),c===null)return null;Us.copy(l),Us.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Us);return d<t.near||d>t.far?null:{distance:d,point:Us.clone(),object:i}}function Fs(i,e,t,n,s,r,a,l,c,d){i.getVertexPosition(l,Ps),i.getVertexPosition(c,Ds),i.getVertexPosition(d,Ls);const h=Ph(i,e,t,n,Ps,Ds,Ls,Zo);if(h){const g=new j;un.getBarycoord(Zo,Ps,Ds,Ls,g),s&&(h.uv=un.getInterpolatedAttribute(s,l,c,d,g,new $e)),r&&(h.uv1=un.getInterpolatedAttribute(r,l,c,d,g,new $e)),a&&(h.normal=un.getInterpolatedAttribute(a,l,c,d,g,new j),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:c,c:d,normal:new j,materialIndex:0};un.getNormal(Ps,Ds,Ls,u.normal),h.face=u,h.barycoord=g}return h}class Dh extends At{constructor(e=null,t=1,n=1,s,r,a,l,c,d=Tt,h=Tt,g,u){super(null,a,l,c,d,h,s,r,g,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const li=new cr,Lh=new $e(.5,.5),Os=new j;class hs{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],d=r[3],h=r[4],g=r[5],u=r[6],f=r[7],_=r[8],M=r[9],m=r[10],p=r[11],b=r[12],R=r[13],y=r[14],E=r[15];if(s[0].setComponents(d-a,f-h,p-_,E-b).normalize(),s[1].setComponents(d+a,f+h,p+_,E+b).normalize(),s[2].setComponents(d+l,f+g,p+M,E+R).normalize(),s[3].setComponents(d-l,f-g,p-M,E-R).normalize(),n)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(d-c,f-u,p-m,E-y).normalize();else if(s[4].setComponents(d-c,f-u,p-m,E-y).normalize(),t===hn)s[5].setComponents(d+c,f+u,p+m,E+y).normalize();else if(t===ds)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=Lh.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Os.x=s.normal.x>0?e.max.x:e.min.x,Os.y=s.normal.y>0?e.max.y:e.min.y,Os.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Jo=new dt;class no{constructor(){this.coordinateSystem=hn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Jo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hs),n[s].setFromProjectionMatrix(Jo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new hs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new no().copy(this)}}class Mc extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rr=new j,ar=new j,Qo=new dt,Zi=new Sc,Bs=new cr,Vr=new j,el=new j;class Ih extends Rt{constructor(e=new wn,t=new Mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)rr.fromBufferAttribute(t,s-1),ar.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=rr.distanceTo(ar);e.setAttribute("lineDistance",new Jt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=r,e.ray.intersectsSphere(Bs)===!1)return;Qo.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(Qo);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=f,m=_-1;M<m;M+=d){const p=h.getX(M),b=h.getX(M+1),R=ks(this,e,Zi,c,p,b,M);R&&t.push(R)}if(this.isLineLoop){const M=h.getX(_-1),m=h.getX(f),p=ks(this,e,Zi,c,M,m,_-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=f,m=_-1;M<m;M+=d){const p=ks(this,e,Zi,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=ks(this,e,Zi,c,_-1,f,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function ks(i,e,t,n,s,r,a){const l=i.geometry.attributes.position;if(rr.fromBufferAttribute(l,s),ar.fromBufferAttribute(l,r),t.distanceSqToSegment(rr,ar,Vr,el)>n)return;Vr.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Vr);if(!(d<e.near||d>e.far))return{distance:d,point:el.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class yc extends At{constructor(e=[],t=Di,n,s,r,a,l,c,d,h){super(e,t,n,s,r,a,l,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uh extends At{constructor(e,t,n,s,r,a,l,c,d){super(e,t,n,s,r,a,l,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ii extends At{constructor(e,t,n=yn,s,r,a,l=Tt,c=Tt,d,h=Zn,g=1){if(h!==Zn&&h!==Kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:g};super(u,s,r,a,l,c,h,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ec extends Ii{constructor(e,t=yn,n=Di,s,r,a=Tt,l=Tt,c,d=Zn){const h={width:e,height:e,depth:1},g=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,l,c,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wc extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ms extends wn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],g=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(g,2));function _(M,m,p,b,R,y,E,T,x,w,I){const C=y/x,L=E/w,F=y/2,q=E/2,P=T/2,B=x+1,Y=w+1;let H=0,te=0;const V=new j;for(let Q=0;Q<Y;Q++){const ee=Q*L-q;for(let be=0;be<B;be++){const ie=be*C-F;V[M]=ie*b,V[m]=ee*R,V[p]=P,d.push(V.x,V.y,V.z),V[M]=0,V[m]=0,V[p]=T>0?1:-1,h.push(V.x,V.y,V.z),g.push(be/x),g.push(1-Q/w),H+=1}}for(let Q=0;Q<w;Q++)for(let ee=0;ee<x;ee++){const be=u+ee+B*Q,ie=u+ee+B*(Q+1),O=u+(ee+1)+B*(Q+1),oe=u+(ee+1)+B*Q;c.push(be,ie,oe),c.push(ie,O,oe),te+=6}l.addGroup(f,te,I),f+=te,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dr extends wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),d=l+1,h=c+1,g=e/l,u=t/c,f=[],_=[],M=[],m=[];for(let p=0;p<h;p++){const b=p*u-a;for(let R=0;R<d;R++){const y=R*g-r;_.push(y,-b,0),M.push(0,0,1),m.push(R/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<l;b++){const R=b+d*p,y=b+d*(p+1),E=b+1+d*(p+1),T=b+1+d*p;f.push(R,y,T),f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(M,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ss extends wn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let d=0;const h=[],g=new j,u=new j,f=[],_=[],M=[],m=[];for(let p=0;p<=n;p++){const b=[],R=p/n,y=a+R*l,E=e*Math.cos(y),T=Math.sqrt(e*e-E*E);let x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const I=w/t,C=s+I*r;g.x=-T*Math.cos(C),g.y=E,g.z=T*Math.sin(C),_.push(g.x,g.y,g.z),u.copy(g).normalize(),M.push(u.x,u.y,u.z),m.push(I+x,1-R),b.push(d++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const R=h[p][b+1],y=h[p][b],E=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(R,y,T),(p!==n-1||c<Math.PI)&&f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(M,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(tl(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(tl(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const s in n)e[s]=n[s]}return e}function tl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Oh={clone:Ui,merge:Ht};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zh extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gh extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hh extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vh extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(nl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!nl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Wh{constructor(e,t,n){const s=this;let r=!1,a=0,l=0,c;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,g){return d.push(h,g),this},this.removeHandler=function(h){const g=d.indexOf(h);return g!==-1&&d.splice(g,2),this},this.getHandler=function(h){for(let g=0,u=d.length;g<u;g+=2){const f=d[g],_=d[g+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jh=new Wh;class io{constructor(e){this.manager=e!==void 0?e:jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi=new WeakMap;class Xh extends io{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let g=yi.get(a);g===void 0&&(g=[],yi.set(a,g)),g.push({onLoad:t,onError:s})}return a}const l=us("img");function c(){h(),t&&t(this);const g=yi.get(this)||[];for(let u=0;u<g.length;u++){const f=g[u];f.onLoad&&f.onLoad(this)}yi.delete(this),r.manager.itemEnd(e)}function d(g){h(),s&&s(g),Wr.remove(`image:${e}`);const u=yi.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onError&&_.onError(g)}yi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Wr.add(`image:${e}`,l),r.manager.itemStart(e),l.fetchPriority=this.priority,l.src=e,l}}class qh extends io{constructor(e){super(e)}load(e,t,n,s){const r=new At,a=new Xh(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ac extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const jr=new dt,il=new j,sl=new j;class Yh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;il.setFromMatrixPosition(e.matrixWorld),t.position.copy(il),sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,d=s?s.y/r.y:0;e.coordinateSystem===ds||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),t.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zs=new j,Gs=new Oi,pn=new j;class Rc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zs,Gs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Gs,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zs,Gs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Gs,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new j,rl=new $e,al=new $e;class dn extends Rc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,rl,al),t.subVectors(al,rl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/d,s*=a.width/c,n*=a.height/d}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Cc extends Rc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $h extends Yh{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ol extends Ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new $h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Kh extends Ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ei=-90,wi=1;class Ga extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ei,wi,e,t);s.layers=this.layers,this.add(s);const r=new dn(Ei,wi,e,t);r.layers=this.layers,this.add(r);const a=new dn(Ei,wi,e,t);a.layers=this.layers,this.add(a);const l=new dn(Ei,wi,e,t);l.layers=this.layers,this.add(l);const c=new dn(Ei,wi,e,t);c.layers=this.layers,this.add(c);const d=new dn(Ei,wi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,c]=t;for(const d of t)this.remove(d);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,c,d,h]=this.children,g=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(g,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zh extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function ll(i,e,t,n){const s=Jh(n);switch(t){case lc:return i*e;case dc:return i*e/s.components*s.byteLength;case Za:return i*e/s.components*s.byteLength;case ui:return i*e*2/s.components*s.byteLength;case Ja:return i*e*2/s.components*s.byteLength;case cc:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case Qa:return i*e*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:case ha:return Math.max(i,16)*Math.max(e,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(e,8)/2;case fa:case pa:case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case tr:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case Ia:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nr:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jh(i){switch(i){case Zt:case sc:return{byteLength:1,components:1};case cs:case rc:case En:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case yn:case Ya:case vn:return{byteLength:4,components:1};case ac:case oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qh(i){const e=new WeakMap;function t(l,c){const d=l.array,h=l.usage,g=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),l.onUploadCallback();let f;if(d instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)f=i.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=i.SHORT;else if(d instanceof Uint32Array)f=i.UNSIGNED_INT;else if(d instanceof Int32Array)f=i.INT;else if(d instanceof Int8Array)f=i.BYTE;else if(d instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,c,d){const h=c.array,g=c.updateRanges;if(i.bindBuffer(d,l),g.length===0)i.bufferSubData(d,0,h);else{g.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<g.length;f++){const _=g[u],M=g[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,g[u]=M)}g.length=u+1;for(let f=0,_=g.length;f<_;f++){const M=g[f];i.bufferSubData(d,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,c),d.version=l.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:df,begin_vertex:uf,beginnormal_vertex:hf,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:vf,color_fragment:Sf,color_pars_fragment:bf,color_pars_vertex:Mf,color_vertex:yf,common:Ef,defaultnormal_vertex:wf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Nf,colorspace_pars_fragment:Pf,envmap_fragment:Df,envmap_common_pars_fragment:Lf,envmap_pars_fragment:If,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Ff,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:kf,fog_pars_fragment:zf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:jf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:$f,lights_phong_pars_fragment:Kf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Qf,lights_fragment_maps:ep,lights_fragment_end:tp,lightprobes_pars_fragment:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:dp,metalnessmap_fragment:up,metalnessmap_pars_fragment:hp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:xp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:Sp,normal_pars_vertex:bp,normal_vertex:Mp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Np,project_vertex:Pp,dithering_fragment:Dp,dithering_pars_fragment:Lp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:kp,skinbase_vertex:zp,skinning_pars_vertex:Gp,skinning_vertex:Hp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:jp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:Yp,transmission_pars_fragment:$p,uv_pars_fragment:Kp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distance_vert:lm,distance_frag:cm,equirect_vert:dm,equirect_frag:um,linedashed_vert:hm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:xm,meshmatcap_vert:_m,meshmatcap_frag:vm,meshnormal_vert:Sm,meshnormal_frag:bm,meshphong_vert:Mm,meshphong_frag:ym,meshphysical_vert:Em,meshphysical_frag:wm,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Rm,points_frag:Cm,shadow_vert:Nm,shadow_frag:Pm,sprite_vert:Dm,sprite_frag:Lm},ve={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},xn={basic:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ht([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ht([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ht([ve.points,ve.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ht([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ht([ve.common,ve.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ht([ve.sprite,ve.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Ht([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Ht([ve.lights,ve.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};xn.physical={uniforms:Ht([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Hs={r:0,b:0,g:0},Im=new dt,Pc=new Ie;Pc.set(-1,0,0,0,1,0,0,0,1);function Um(i,e,t,n,s,r){const a=new je(0);let l=s===!0?0:1,c,d,h=null,g=0,u=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const y=b.backgroundBlurriness>0;R=e.get(R,y)}return R}function _(b){let R=!1;const y=f(b);y===null?m(a,l):y&&y.isColor&&(m(y,1),R=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,R){const y=f(R);y&&y.isCubeTexture?(d===void 0&&(d=new Mn(new ms(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ui(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Pc),d.material.toneMapped=qe.getTransfer(y.colorSpace)!==tt,(h!==y||g!==y.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,h=y,g=y.version,u=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Mn(new dr(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ui(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=qe.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||g!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,g=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,R){b.getRGB(Hs,Tc(i)),t.buffers.color.setClear(Hs.r,Hs.g,Hs.b,R,r)}function p(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),l=R,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:_,addToRenderList:M,dispose:p}}function Fm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function l(L,F,q,P,B){let Y=!1;const H=g(L,P,q,F);r!==H&&(r=H,d(r.object)),Y=f(L,P,q,B),Y&&_(L,P,q,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(L,F,q,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function d(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function g(L,F,q,P){const B=P.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const H=L.isInstancedMesh===!0?L.id:0;let te=Y[H];te===void 0&&(te={},Y[H]=te);let V=te[q.id];V===void 0&&(V={},te[q.id]=V);let Q=V[B];return Q===void 0&&(Q=u(c()),V[B]=Q),Q}function u(L){const F=[],q=[],P=[];for(let B=0;B<t;B++)F[B]=0,q[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,F,q,P){const B=r.attributes,Y=F.attributes;let H=0;const te=q.getAttributes();for(const V in te)if(te[V].location>=0){const ee=B[V];let be=Y[V];if(be===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function _(L,F,q,P){const B={},Y=F.attributes;let H=0;const te=q.getAttributes();for(const V in te)if(te[V].location>=0){let ee=Y[V];ee===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),B[V]=be,H++}r.attributes=B,r.attributesNum=H,r.index=P}function M(){const L=r.newAttributes;for(let F=0,q=L.length;F<q;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){const q=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;q[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),B[L]!==F&&(i.vertexAttribDivisor(L,F),B[L]=F)}function b(){const L=r.newAttributes,F=r.enabledAttributes;for(let q=0,P=F.length;q<P;q++)F[q]!==L[q]&&(i.disableVertexAttribArray(q),F[q]=0)}function R(L,F,q,P,B,Y,H){H===!0?i.vertexAttribIPointer(L,F,q,B,Y):i.vertexAttribPointer(L,F,q,P,B,Y)}function y(L,F,q,P){M();const B=P.attributes,Y=q.getAttributes(),H=F.defaultAttributeValues;for(const te in Y){const V=Y[te];if(V.location>=0){let Q=B[te];if(Q===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const ee=Q.normalized,be=Q.itemSize,ie=e.get(Q);if(ie===void 0)continue;const O=ie.buffer,oe=ie.type,xe=ie.bytesPerElement,Ae=oe===i.INT||oe===i.UNSIGNED_INT||Q.gpuType===Ya;if(Q.isInterleavedBufferAttribute){const pe=Q.data,Ce=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,Ze=Q.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Re=0;Re<V.locationSize;Re++)p(V.location+Re,pe.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Re=0;Re<V.locationSize;Re++)m(V.location+Re);i.bindBuffer(i.ARRAY_BUFFER,O);for(let Re=0;Re<V.locationSize;Re++)R(V.location+Re,be/V.locationSize,oe,ee,Ce*xe,(Ze+be/V.locationSize*Re)*xe,Ae)}else{if(Q.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)p(V.location+pe,Q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pe=0;pe<V.locationSize;pe++)m(V.location+pe);i.bindBuffer(i.ARRAY_BUFFER,O);for(let pe=0;pe<V.locationSize;pe++)R(V.location+pe,be/V.locationSize,oe,ee,be*xe,be/V.locationSize*pe*xe,Ae)}}else if(H!==void 0){const ee=H[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}b()}function E(){I();for(const L in n){const F=n[L];for(const q in F){const P=F[q];for(const B in P){const Y=P[B];for(const H in Y)h(Y[H].object),delete Y[H];delete P[B]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const q in F){const P=F[q];for(const B in P){const Y=P[B];for(const H in Y)h(Y[H].object),delete Y[H];delete P[B]}}delete n[L.id]}function x(L){for(const F in n){const q=n[F];for(const P in q){const B=q[P];if(B[L.id]===void 0)continue;const Y=B[L.id];for(const H in Y)h(Y[H].object),delete Y[H];delete B[L.id]}}}function w(L){for(const F in n){const q=n[F],P=L.isInstancedMesh===!0?L.id:0,B=q[P];if(B!==void 0){for(const Y in B){const H=B[Y];for(const te in H)h(H[te].object),delete H[te];delete B[Y]}delete q[P],Object.keys(q).length===0&&delete n[F]}}}function I(){C(),a=!0,r!==s&&(r=s,d(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:I,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function Om(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function l(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let u=0;for(let f=0;f<h;f++)u+=d[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Bm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Sn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){const w=x===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Zt&&x!==vn&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=c(d);h!==d&&(Le("WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:u,reversedDepthBuffer:g,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:y,maxSamples:E,samples:T}}function km(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new qn,l=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,u){const f=g.length!==0||u||n!==0||s;return s=u,n=g.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,u){t=h(g,u,0)},this.setState=function(g,u,f){const _=g.clippingPlanes,M=g.clipIntersection,m=g.clipShadows,p=i.get(g);if(!s||_===null||_.length===0||r&&!m)r?h(null):d();else{const b=r?0:n,R=b*4;let y=p.clippingState||null;c.value=y,y=h(_,u,R,f);for(let E=0;E!==R;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(g,u,f,_){const M=g!==null?g.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const p=f+M*4,b=u.matrixWorldInverse;l.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,y=f;R!==M;++R,y+=4)a.copy(g[R]).applyMatrix4(b,l),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class so extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ms(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Ni});r.uniforms.tEquirect.value=t;const a=new Mn(s,r),l=t.minFilter;return t.minFilter===$n&&(t.minFilter=Xt),new Ga(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const cl=256,zm=3,Gm=20,Dc=256,Lc=16,Hm=3,Vm=new j,Wm=new je;class or{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ga(1,10,null),this._boxMesh=new Mn(new ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:l=Vm}=r,c=this._renderer;this._setSize(a);const d=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const g=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(Wm));const m=new Ga(n,s,h);return m.position.copy(l),m.update(c,e),c.autoClear=g,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=_,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(d,t)),this._applyPMREM(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cl,lh(e))}_fromTexture(e,t){e.mapping===Di||e.mapping===ls?this._setSize(e.image.length===0?cl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=dl(e,!1,!1),n=Math.log2(e)-zm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Di||e.mapping===ls?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ul()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jm(),this._integrationMaterial=Xm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Lc);for(let a=0;a<=n;a++){const l=or.lodToRoughness(a,n);if(a>n-Hm)r.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const c=l>0?Math.log2(t)+.5*Math.log2(6/(Dc*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=qm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function dl(i,e,t){return new so(i,{minFilter:$n,generateMipmaps:e,type:En,colorSpace:ir,depthBuffer:t})}function gs(i,e,t){return new Qn({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Wt,blending:Ni,depthTest:!1,depthWrite:!1})}function jm(){return gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Dc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xm(){return gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qm(){return gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ul(){return gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function hl(){return gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ym(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===xr||f===_r)if(e.has(u)){const _=e.get(u).texture;return l(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new so(_.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",d),l(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,_=f===xr||f===_r,M=f===Di||f===ls;if(_||M){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new or(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return _&&b&&b.height>0||M&&b&&c(b)?(n===null&&(n=new or(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,f){return f===xr?u.mapping=Di:f===_r&&(u.mapping=ls),u}function c(u){let f=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&f++;return f===_}function d(u){const f=u.target;f.removeEventListener("dispose",d);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function $m(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ks("WebGLRenderer: "+n+" extension not supported."),s}}}function Km(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function l(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",l),delete s[_.id],a.unregister(_);const M=r.get(_);M&&(e.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",l),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(_){const M=_.attributes;for(const m in M)e.update(M[m],i.ARRAY_BUFFER)}function g(_){const M=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const b=M!==null?M.array.length:m.array.length/3-1,R=m.count>=65535?vc:_c,y=new R(Math.ceil(b/3)*6,1),E=y.array;if(M!==null){const x=M.array;p=M.version;for(let w=0,I=0;w<b;w+=3){const C=x[w+0],L=x[w+1],F=x[w+2];E[I++]=C,E[I++]=L,E[I++]=L,E[I++]=F,E[I++]=F,E[I++]=C}}else{p=m.version;for(let x=0,w=0;x<b;x+=3){const I=x+0,C=x+1,L=x+2;E[w++]=I,E[w++]=C,E[w++]=C,E[w++]=L,E[w++]=L,E[w++]=I}}y.version=p;const T=r.get(_);T&&e.remove(T),r.set(_,y)}function u(_){const M=r.get(_);if(M){const m=_.index;m!==null&&M.version<m.version&&g(_)}else g(_);return r.get(_)}function f(){for(const _ in s){const M=s[_].deref();M!==void 0&&c(M)}}return{get:d,update:h,getWireframeAttribute:u,dispose:f}}function Zm(i,e,t){let n;function s(g){n=g}let r,a;function l(g){r=g.type,a=g.bytesPerElement}function c(g,u){i.drawElements(n,u,r,g*a),t.update(u,n,1)}function d(g,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,g*a,f),t.update(u,n,f))}function h(g,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,g,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function Jm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,e,t){const n=new WeakMap,s=new ht;function r(a,l,c){const d=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=h!==void 0?h.length:0;let u=n.get(l);if(u===void 0||u.count!==g){let I=function(){x.dispose(),n.delete(l),l.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();const f=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let R=0;f===!0&&(R=1),_===!0&&(R=2),M===!0&&(R=3);let y=l.attributes.position.count*R,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*E*4*g),x=new mc(T,y,E,g);x.type=vn,x.needsUpdate=!0;const w=R*4;for(let C=0;C<g;C++){const L=m[C],F=p[C],q=b[C],P=y*E*4*C;for(let B=0;B<L.count;B++){const Y=B*w;f===!0&&(s.fromBufferAttribute(L,B),T[P+Y+0]=s.x,T[P+Y+1]=s.y,T[P+Y+2]=s.z,T[P+Y+3]=0),_===!0&&(s.fromBufferAttribute(F,B),T[P+Y+4]=s.x,T[P+Y+5]=s.y,T[P+Y+6]=s.z,T[P+Y+7]=0),M===!0&&(s.fromBufferAttribute(q,B),T[P+Y+8]=s.x,T[P+Y+9]=s.y,T[P+Y+10]=s.z,T[P+Y+11]=q.itemSize===4?s.w:1)}}u={count:g,texture:x,size:new $e(y,E)},n.set(l,u),l.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<d.length;M++)f+=d[M];const _=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function eg(i,e,t,n,s){let r=new WeakMap;function a(d){const h=s.render.frame,g=d.geometry,u=e.get(d,g);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const f=d.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function l(){r=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const tg={[Zl]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[qa]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function ng(i,e,t,n,s,r){const a=new bn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,d=null;const h=new wn;h.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const g=new zh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Mn(h,g),f=new Cc(-1,1,1,-1,0,1);let _=null,M=null,m=!1,p,b=null,R=[],y=!1;this.setSize=function(E,T){a.setSize(E,T),l!==null&&l.setSize(E,T),c!==null&&c.setSize(E,T);for(let x=0;x<R.length;x++){const w=R[x];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){R=E,y=R.length>0&&R[0].isRenderPass===!0;const T=a.width,x=a.height;R.length>0&&l===null&&(l=new bn(T,x,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new bn(T,x,{type:En,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&R.some(I=>I.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&d===null&&(d=new Ii(T,x),r===!0&&(d.format=Kn,d.type=Li)),a.dispose(),a.depthTexture=w?d:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let I=0;I<R.length;I++){const C=R[I];C.setSize&&C.setSize(T,x),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(d)}},this.begin=function(E,T){if(m||E.toneMapping===Un&&R.length===0)return!1;if(b=T,T!==null){const x=T.width,w=T.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return y===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Un,!0},this.hasRenderPass=function(){return y},this.end=function(E,T){E.toneMapping=p,m=!0;let x=a,w=l;for(let I=0;I<R.length;I++){const C=R[I];C.enabled!==!1&&(C.render(E,w,x,T),C.needsSwap!==!1&&(x=w,w=w===l?c:l))}if(_!==E.outputColorSpace||M!==E.toneMapping){_=E.outputColorSpace,M=E.toneMapping,g.defines={},qe.getTransfer(_)===tt&&(g.defines.SRGB_TRANSFER="");const I=tg[M];I&&(g.defines[I]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(b),E.render(u,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),g.dispose()}}const Ic=new At,Uc=new Ii(1,1),Fc=new Ec(1),Oc=new mc,Bc=new gh,kc=new yc,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),xl=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fl[s];if(r===void 0&&(r=new Float32Array(s),fl[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ur(i,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function og(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;xl.set(n),i.uniformMatrix2fv(this.addr,!1,xl),bt(t,n)}}function lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),bt(t,n)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),bt(t,n)}}function dg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function hr(i){return i.version===0&&(i.compareFunction=fc,i.needsUpdate=!0),i}function _g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=hr(Uc):r=Ic,t.setTexture2D(e||r,s)}function vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bc,s)}function Sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=hr(Fc):r=kc,t.setTextureCube(e||r,s)}function bg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Oc,s)}function Mg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return dg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return bg}}function yg(i,e){i.uniform1fv(this.addr,e)}function Eg(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function wg(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function Tg(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function Ag(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rg(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cg(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ng(i,e){i.uniform1iv(this.addr,e)}function Pg(i,e){i.uniform2iv(this.addr,e)}function Dg(i,e){i.uniform3iv(this.addr,e)}function Lg(i,e){i.uniform4iv(this.addr,e)}function Ig(i,e){i.uniform1uiv(this.addr,e)}function Ug(i,e){i.uniform2uiv(this.addr,e)}function Fg(i,e){i.uniform3uiv(this.addr,e)}function Og(i,e){i.uniform4uiv(this.addr,e)}function Bg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=hr(Uc):a=Ic;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function kg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bc,r[a])}function zg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=hr(Fc):a=kc;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||a,r[l])}function Gg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Oc,r[a])}function Hg(i){switch(i){case 5126:return yg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Ng;case 35667:case 35671:return Pg;case 35668:case 35672:return Dg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Ug;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(e,t[l.id],n)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function _l(i,e){i.seq.push(e),i.map[e.id]=e}function Xg(i,e,t){const n=i.name,s=n.length;for(Xr.lastIndex=0;;){const r=Xr.exec(n),a=Xr.lastIndex;let l=r[1];const c=r[2]==="]",d=r[3];if(c&&(l=l|0),d===void 0||d==="["&&a+2===s){_l(t,d===void 0?new Vg(l,i,e):new Wg(l,i,e));break}else{let g=t.map[l];g===void 0&&(g=new jg(l),_l(t,g)),t=g}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Xg(l,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function vl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qg=37297;let Yg=0;function $g(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const Sl=new Ie;function Kg(i){qe._getMatrix(Sl,qe.workingColorSpace,i);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case sr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(e),l)}else return r}function Zg(i,e){const t=Kg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Jg={[Zl]:"Linear",[Jl]:"Reinhard",[Ql]:"Cineon",[qa]:"ACESFilmic",[tc]:"AgX",[nc]:"Neutral",[ec]:"Custom"};function Qg(i,e){const t=Jg[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new j;function e0(){qe.getLuminanceCoefficients(Vs);const i=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function n0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function es(i){return i!==""}function Ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(s0,r0)}function r0(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ha(t)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(a0,o0)}function o0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const l0={[js]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function c0(i){return l0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const d0={[ls]:"ENVMAP_MODE_REFRACTION"};function u0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":d0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h0={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};function f0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":h0[i.combine]||"ENVMAP_BLENDING_NONE"}function p0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=c0(t),d=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=u0(t),g=f0(t),u=t0(t),f=n0(r),_=s.createProgram();let M,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(es).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(es).join(`
`),m.length>0&&(m+=`
`)):(M=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),m=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?ke.tonemapping_pars_fragment:"",t.toneMapping!==Un?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Zg("linearToOutputTexel",t.outputColorSpace),e0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=Ha(a),a=Ml(a,t),a=yl(a,t),l=Ha(l),l=Ml(l,t),l=yl(l,t),a=El(a),l=El(l),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=p+M+a,R=p+m+l,y=vl(s,s.VERTEX_SHADER,b),E=vl(s,s.FRAGMENT_SHADER,R);s.attachShader(_,y),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(y)||"",q=s.getShaderInfoLog(E)||"",P=L.trim(),B=F.trim(),Y=q.trim();let H=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,E);else{const V=bl(s,y,"vertex"),Q=bl(s,E,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+V+`
`+Q)}else P!==""?Le("WebGLProgram: Program Info Log:",P):(B===""||Y==="")&&(te=!1);te&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:B,prefix:M},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(y),s.deleteShader(E),x=new Zs(s,_),w=i0(s,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,qg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=E,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x0(e),t.set(e,n)),n}}class x0{constructor(e){this.id=m0++,this.code=e,this.usedTimes=0}}function _0(i){return i===ui||i===tr||i===nr}function v0(i,e,t,n,s,r){const a=new gc,l=new g0,c=new Set,d=[],h=new Map,g=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,w,I,C,L,F){const q=C.fog,P=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||B,Y),te=u[x.type];let V=n.precision;x.precision!==null&&(V=n.getMaxPrecision(x.precision),V!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0;let be=0;P.morphAttributes.position!==void 0&&(be=1),P.morphAttributes.normal!==void 0&&(be=2),P.morphAttributes.color!==void 0&&(be=3);let ie,O,oe,xe;if(te){const _e=xn[te];ie=_e.vertexShader,O=_e.fragmentShader}else{ie=x.vertexShader,O=x.fragmentShader;const _e=l.getVertexShaderStage(x),et=l.getFragmentShaderStage(x);l.update(x,_e,et),oe=_e.id,xe=et.id}const Ae=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,Ze=L.isBatchedMesh===!0,Re=!!x.map,He=!!x.matcap,Xe=!!H,ze=Xe&&H.isPMREMTexture===!0,ct=!!x.aoMap,gt=!!x.lightMap,xt=!!x.bumpMap&&x.wireframe===!1,st=!!x.normalMap,Ft=!!x.displacementMap,nt=!!x.emissiveMap,Ot=!!x.metalnessMap,Bt=!!x.roughnessMap,kt=x.anisotropy>0,U=x.clearcoat>0,zt=x.diffuseRoughness>0,rt=x.dispersion>0,it=x.retroreflectivity>0,me=x.iridescence>0,ft=x.sheen>0,Ne=x.transmission>0,De=kt&&!!x.anisotropyMap,A=U&&!!x.clearcoatMap,v=U&&!!x.clearcoatNormalMap,k=U&&!!x.clearcoatRoughnessMap,se=zt&&!!x.diffuseRoughnessMap,W=me&&!!x.iridescenceMap,ne=me&&!!x.iridescenceThicknessMap,ce=ft&&!!x.sheenColorMap,K=ft&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ae=!!x.specularColorMap,N=!!x.specularIntensityMap,J=Ne&&!!x.transmissionMap,$=Ne&&!!x.thicknessMap,de=!!x.gradientMap,le=!!x.alphaMap,he=x.alphaTest>0,Te=!!x.alphaHash,Fe=!!x.extensions;let re=Un;x.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(re=i.toneMapping);const Pe=ze?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Oe={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:O,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:Ze,batchingColor:Ze&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:He,envMap:Xe,envMapMode:Xe&&H.mapping,envMapPMREM:ze,envMapMaxLod:ze?Pe.length-1:null,envMapSize:ze?Pe[0].width:null,aoMap:ct,lightMap:gt,bumpMap:xt,normalMap:st,displacementMap:Ft,emissiveMap:nt,normalMapObjectSpace:st&&x.normalMapType===$u,normalMapTangentSpace:st&&x.normalMapType===ka,packedNormalMap:st&&x.normalMapType===ka&&_0(x.normalMap.format),metalnessMap:Ot,roughnessMap:Bt,anisotropy:kt,anisotropyMap:De,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:zt,diffuseRoughnessMap:se,dispersion:rt,retroreflection:it,iridescence:me,iridescenceMap:W,iridescenceThicknessMap:ne,sheen:ft,sheenColorMap:ce,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ae,specularIntensityMap:N,transmission:Ne,transmissionMap:J,thicknessMap:$,gradientMap:de,opaque:x.transparent===!1&&x.blending===is&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:Te,combine:x.combine,mapUv:Re&&f(x.map.channel),aoMapUv:ct&&f(x.aoMap.channel),lightMapUv:gt&&f(x.lightMap.channel),bumpMapUv:xt&&f(x.bumpMap.channel),normalMapUv:st&&f(x.normalMap.channel),displacementMapUv:Ft&&f(x.displacementMap.channel),emissiveMapUv:nt&&f(x.emissiveMap.channel),metalnessMapUv:Ot&&f(x.metalnessMap.channel),roughnessMapUv:Bt&&f(x.roughnessMap.channel),anisotropyMapUv:De&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:W&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:ae&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:$&&f(x.thicknessMap.channel),alphaMapUv:le&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(st||kt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Re||le),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&st===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:nt&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&x.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function M(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)w.push(I),w.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(w,x),p(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function p(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){const w=u[x.type];let I;if(w){const C=xn[w];I=Oh.clone(C.uniforms)}else I=x.uniforms;return I}function R(x,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new p0(i,w,x,s),d.push(I),h.set(w,I)),I}function y(x){if(--x.usedTimes===0){const w=d.indexOf(x);d[w]=d[d.length-1],d.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function T(){l.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:b,acquireProgram:R,releaseProgram:y,releaseShaderCache:E,programs:d,dispose:T}}function S0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function b0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Al(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function l(u,f,_,M,m,p){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=_,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=m,b.group=p),e++,b}function c(u,f,_,M,m,p,b){b.reversedDepth===!0&&(m=-m);const R=l(u,f,_,M,m,p);_.transmission>0?n.push(R):_.transparent===!0?s.push(R):t.push(R)}function d(u,f,_,M,m,p){const b=l(u,f,_,M,m,p);_.transmission>0?n.unshift(b):_.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||b0),n.length>1&&n.sort(f||Tl),s.length>1&&s.sort(f||Tl)}function g(){for(let u=e,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:d,finish:g,sort:h}}function M0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Al,i.set(n,[a])):s>=r.length?(a=new Al,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function y0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new j,color:new je};break;case"SpotLight":t={position:new j,direction:new j,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function E0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let w0=0;function T0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function A0(i){const e=new y0,t=E0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);const s=new j,r=new dt,a=new dt;function l(d){let h=0,g=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,b=0,R=0,y=0,E=0,T=0,x=0,w=0,I=0,C=0;d.sort(T0);for(let F=0,q=d.length;F<q;F++){const P=d[F],B=P.color,Y=P.intensity,H=P.distance;let te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ui?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*Y,g+=B.g*Y,u+=B.b*Y;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],Y);C++}else if(P.isSunLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=te;const be=Q.getViewportCount();for(let ie=0;ie<be;ie++)n.sunShadowMatrix[M+ie]=Q.getMatrix(ie),n.sunShadowCascade[M+ie]=Q._cascadeData[ie];M+=be,_++}n.sun[f]=V,f++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=V,m++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(Y),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[b]=V;const Q=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,Q.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[b]=Q.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[b]=ee,n.spotShadowMap[b]=te,x++}b++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(B).multiplyScalar(Y),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[R]=V,R++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=P.shadow.matrix,T++}n.point[p]=V,p++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(Y),V.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[y]=V,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==R||L.hemiLength!==y||L.numSunShadows!==_||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==w||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-I,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=b,L.rectAreaLength=R,L.hemiLength=y,L.numSunShadows=_,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=w,L.numLightProbes=C,n.version=w0++)}function c(d,h){let g=0,u=0,f=0,_=0,M=0,m=0;const p=h.matrixWorldInverse;for(let b=0,R=d.length;b<R;b++){const y=d[b];if(y.isSunLight){const E=n.sun[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),g++}else if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function Rl(i){const e=new A0(i),t=[],n=[],s=[];function r(g){h.camera=g,t.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):t.push(g)}function l(g){n.push(g)}function c(){e.setup(t),s.sort((g,u)=>g.priority-u.priority||g.id-u.id)}function d(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:l}}function R0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Rl(i),e.set(s,[l])):r>=a.length?(l=new Rl(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P0=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],D0=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Cl=new dt,Ji=new j,qr=new j;function L0(i,e,t){let n=new hs;const s=new $e,r=new $e,a=new ht,l=new Hh,c=new Vh,d={},h=t.maxTextureSize,g={[di]:Wt,[Wt]:di,[In]:In},u=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:C0,fragmentShader:N0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new wn;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Mn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let p=this.type;this.render=function(T,x,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Tu&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);const I=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ni),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=p!==this.type;q&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=T.length;P<B;P++){const Y=T[P],H=Y.shadow;if(H===void 0){Le("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const te=H.getFrameExtents();s.multiply(te),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,H.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qi){if(Y.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new bn(s.x,s.y,{format:ui,type:En,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new Ii(s.x,s.y,vn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=Zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tt,H.map.depthTexture.magFilter=Tt}else Y.isPointLight?(H.map=new so(s.x),H.map.depthTexture=new Ec(s.x,yn)):(H.map=new bn(s.x,s.y),H.map.depthTexture=new Ii(s.x,s.y,yn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=Zn,this.type===js?(H.map.depthTexture.compareFunction=V?hc:uc,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tt,H.map.depthTexture.magFilter=Tt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,w);const ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:w.layers;for(let be=0;be<Q;be++){const ie=H.getCamera(be);if(Y.isPointLight){const O=H.camera,oe=H.matrix,xe=Y.distance||O.far;xe!==O.far&&(O.far=xe,O.updateProjectionMatrix()),Ji.setFromMatrixPosition(Y.matrixWorld),O.position.copy(Ji),qr.copy(O.position),qr.add(P0[be]),O.up.copy(D0[be]),O.lookAt(qr),O.updateMatrixWorld(),oe.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Cl.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Cl,O.coordinateSystem,O.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,be),i.clear();else{be===0&&(i.setRenderTarget(H.map),i.clear());const O=H.getViewport(be);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),F.viewport(a)}n=H.getFrustum(be),y(x,w,ie,Y,ee,this.type)}H.isPointLightShadow!==!0&&this.type===Qi&&b(H,w),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,C,L)};function b(T,x){const w=e.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new bn(s.x,s.y,{format:ui,type:En}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,w,u,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,w,f,M,null)}function R(T,x,w,I){let C=null;const L=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=w.isPointLight===!0?c:l,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const F=C.uuid,q=x.uuid;let P=d[F];P===void 0&&(P={},d[F]=P);let B=P[q];B===void 0&&(B=C.clone(),P[q]=B,x.addEventListener("dispose",E)),C=B}if(C.visible=x.visible,C.wireframe=x.wireframe,I===Qi?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:g[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=w}return C}function y(T,x,w,I,C,L){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Qi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const P=e.update(T),B=T.material;if(Array.isArray(B)){const Y=P.groups;for(let H=0,te=Y.length;H<te;H++){const V=Y[H],Q=B[V.materialIndex];if(Q&&Q.visible){const ee=R(T,Q,I,L);T.onBeforeShadow(i,T,x,w,P,ee,V),i.renderBufferDirect(w,null,P,ee,T,V),T.onAfterShadow(i,T,x,w,P,ee,V)}}}else if(B.visible){const Y=R(T,B,I,L);T.onBeforeShadow(i,T,x,w,P,Y,null),i.renderBufferDirect(w,null,P,Y,T,null),T.onAfterShadow(i,T,x,w,P,Y,null)}}const q=T.children;for(let P=0,B=q.length;P<B;P++)y(q[P],x,w,I,C,L)}function E(T){T.target.removeEventListener("dispose",E);for(const w in d){const I=d[w],C=T.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function I0(i,e){function t(){let N=!1;const J=new ht;let $=null;const de=new ht(0,0,0,0);return{setMask:function(le){$!==le&&!N&&(i.colorMask(le,le,le,le),$=le)},setLocked:function(le){N=le},setClear:function(le,he,Te,Fe,re){re===!0&&(le*=Fe,he*=Fe,Te*=Fe),J.set(le,he,Te,Fe),de.equals(J)===!1&&(i.clearColor(le,he,Te,Fe),de.copy(J))},reset:function(){N=!1,$=null,de.set(-1,0,0,0)}}}function n(){let N=!1,J=!1,$=null,de=null,le=null;return{setReversed:function(he){if(J!==he){const Te=e.get("EXT_clip_control");he?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),J=he;const Fe=le;le=null,this.setClear(Fe)}},getReversed:function(){return J},setTest:function(he){he?pe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(he){$!==he&&!N&&(i.depthMask(he),$=he)},setFunc:function(he){if(J&&(he=ah[he]),de!==he){switch(he){case ta:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=he}},setLocked:function(he){N=he},setClear:function(he){le!==he&&(le=he,J&&(he=1-he),i.clearDepth(he))},reset:function(){N=!1,$=null,de=null,le=null,J=!1}}}function s(){let N=!1,J=null,$=null,de=null,le=null,he=null,Te=null,Fe=null,re=null;return{setTest:function(Pe){N||(Pe?pe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Pe){J!==Pe&&!N&&(i.stencilMask(Pe),J=Pe)},setFunc:function(Pe,Oe,_e){($!==Pe||de!==Oe||le!==_e)&&(i.stencilFunc(Pe,Oe,_e),$=Pe,de=Oe,le=_e)},setOp:function(Pe,Oe,_e){(he!==Pe||Te!==Oe||Fe!==_e)&&(i.stencilOp(Pe,Oe,_e),he=Pe,Te=Oe,Fe=_e)},setLocked:function(Pe){N=Pe},setClear:function(Pe){re!==Pe&&(i.clearStencil(Pe),re=Pe)},reset:function(){N=!1,J=null,$=null,de=null,le=null,he=null,Te=null,Fe=null,re=null}}}const r=new t,a=new n,l=new s;let c={};const d=new WeakMap;let h={},g={},u={},f=new WeakMap,_=[],M=null,m=!1,p=null,b=null,R=null,y=null,E=null,T=null,x=null,w=new je(0,0,0),I=0,C=!1,L=null,F=null,q=null,P=null,B=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=te>=2);let Q=null,ee={};const be=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),O=new ht().fromArray(be),oe=new ht().fromArray(ie);function xe(N,J,$,de){const le=new Uint8Array(4),he=i.createTexture();i.bindTexture(N,he),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<$;Te++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(J+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return he}const Ae={};Ae[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),pe(i.DEPTH_TEST),a.setFunc(os),xt(!1),st(Do),pe(i.CULL_FACE),ct(Ni);function pe(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ce(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ze(N,J){return u[N]!==J?(i.bindFramebuffer(N,J),u[N]=J,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Re(N,J){let $=_,de=!1;if(N){$=f.get(J),$===void 0&&($=[],f.set(J,$));const le=N.textures;if($.length!==le.length||$[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Te=le.length;he<Te;he++)$[he]=i.COLOR_ATTACHMENT0+he;$.length=le.length,de=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,de=!0);de&&i.drawBuffers($)}function He(N){return M!==N?(i.useProgram(N),M=N,!0):!1}const Xe={[Ai]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};Xe[Nu]=i.MIN,Xe[Pu]=i.MAX;const ze={[Du]:i.ZERO,[Lu]:i.ONE,[Iu]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Uu]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[ku]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Hu]:i.ONE_MINUS_CONSTANT_COLOR,[Vu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(N,J,$,de,le,he,Te,Fe,re,Pe){if(N===Ni){m===!0&&(Ce(i.BLEND),m=!1);return}if(m===!1&&(pe(i.BLEND),m=!0),N!==Au){if(N!==p||Pe!==C){if((b!==Ai||E!==Ai)&&(i.blendEquation(i.FUNC_ADD),b=Ai,E=Ai),Pe)switch(N){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ea:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lo:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Io:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}R=null,y=null,T=null,x=null,w.set(0,0,0),I=0,p=N,C=Pe}return}le=le||J,he=he||$,Te=Te||de,(J!==b||le!==E)&&(i.blendEquationSeparate(Xe[J],Xe[le]),b=J,E=le),($!==R||de!==y||he!==T||Te!==x)&&(i.blendFuncSeparate(ze[$],ze[de],ze[he],ze[Te]),R=$,y=de,T=he,x=Te),(Fe.equals(w)===!1||re!==I)&&(i.blendColor(Fe.r,Fe.g,Fe.b,re),w.copy(Fe),I=re),p=N,C=!1}function gt(N,J){N.side===In?Ce(i.CULL_FACE):pe(i.CULL_FACE);let $=N.side===Wt;J&&($=!$),xt($),N.blending===is&&N.transparent===!1?ct(Ni):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const de=N.stencilWrite;l.setTest(de),de&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function st(N){N!==Eu?(pe(i.CULL_FACE),N!==F&&(N===Do?i.cullFace(i.BACK):N===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),F=N}function Ft(N){N!==q&&(H&&i.lineWidth(N),q=N)}function nt(N,J,$){N?(pe(i.POLYGON_OFFSET_FILL),(P!==J||B!==$)&&(P=J,B=$,a.getReversed()&&(J=-J,$=-$),i.polygonOffset(J,$))):Ce(i.POLYGON_OFFSET_FILL)}function Ot(N){N?pe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function Bt(N){N===void 0&&(N=i.TEXTURE0+Y-1),Q!==N&&(i.activeTexture(N),Q=N)}function kt(N,J,$){$===void 0&&(Q===null?$=i.TEXTURE0+Y-1:$=Q);let de=ee[$];de===void 0&&(de={type:void 0,texture:void 0},ee[$]=de),(de.type!==N||de.texture!==J)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(N,J||Ae[N]),de.type=N,de.texture=J)}function U(){const N=ee[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function zt(){try{i.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function rt(){try{i.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function it(){try{i.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function me(){try{i.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function ft(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function De(){try{i.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function A(){try{i.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function v(){try{i.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function k(){try{i.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function se(N){return g[N]!==void 0?g[N]:i.getParameter(N)}function W(N,J){g[N]!==J&&(i.pixelStorei(N,J),g[N]=J)}function ne(N){O.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),O.copy(N))}function ce(N){oe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),oe.copy(N))}function K(N,J){let $=d.get(J);$===void 0&&($=new WeakMap,d.set(J,$));let de=$.get(N);de===void 0&&(de=i.getUniformBlockIndex(J,N.name),i.uniformBlockBinding(J,de,de),$.set(N,de))}function Z(N,J,$){const le=d.get(J).get(N);c[le]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,le,$),c[le]=$)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},g={},Q=null,ee={},u={},c={},f=new WeakMap,_=[],M=null,m=!1,p=null,b=null,R=null,y=null,E=null,T=null,x=null,w=new je(0,0,0),I=0,C=!1,L=null,F=null,q=null,P=null,B=null,O.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:pe,disable:Ce,bindFramebuffer:Ze,drawBuffers:Re,useProgram:He,setBlending:ct,setMaterial:gt,setFlipSided:xt,setCullFace:st,setLineWidth:Ft,setPolygonOffset:nt,setScissorTest:Ot,activeTexture:Bt,bindTexture:kt,unbindTexture:U,compressedTexImage2D:zt,compressedTexImage3D:rt,texImage2D:v,texImage3D:k,pixelStorei:W,getParameter:se,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:De,texStorage3D:A,texSubImage2D:it,texSubImage3D:me,compressedTexSubImage2D:ft,compressedTexSubImage3D:Ne,scissor:ne,viewport:ce,reset:ae}}function U0(i,e,t,n,s,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $e,h=new WeakMap,g=new Set;let u;const f=new WeakMap,_=new Set,M=new FinalizationRegistry(A=>_.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return m?new OffscreenCanvas(A,v):us("canvas")}function b(A,v,k){let se=1;const W=De(A);if((W.width>k||W.height>k)&&(se=k/Math.max(W.width,W.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(se*W.width),ce=Math.floor(se*W.height);u===void 0&&(u=p(ne,ce));const K=v?p(ne,ce):u;return K.width=ne,K.height=ce,K.getContext("2d").drawImage(A,0,0,ne,ce),Le("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ne+"x"+ce+")."),K}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),A;return A}function R(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,v,k,se,W,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;se&&(ce=e.get("EXT_texture_norm16"),ce||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8),k===i.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),k===i.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),v===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8),k===i.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),k===i.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),k===i.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){const Z=ne?sr:qe.getTransfer(W);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Z===tt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),k===i.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(A,v){let k;return A?v===null||v===yn||v===Li?k=i.DEPTH24_STENCIL8:v===vn?k=i.DEPTH32F_STENCIL8:v===cs&&(k=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yn||v===Li?k=i.DEPTH_COMPONENT24:v===vn?k=i.DEPTH_COMPONENT32F:v===cs&&(k=i.DEPTH_COMPONENT16),k}function w(A,v){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==Tt&&A.minFilter!==Xt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function I(A){const v=new WeakRef(A);n.get(A).__ref=v,_.add(v),M.register(A,v,v)}function C(A){const v=n.get(A).__ref;v!==void 0&&(_.delete(v),M.unregister(v))}function L(A){q(A.target)}function F(A){P(A.target)}function q(A){A.removeEventListener("dispose",L),C(A),Y(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&g.delete(A)}function P(A){A.removeEventListener("dispose",F),C(A),te(A)}function B(){for(const A of _){const v=A.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):q(v))}_.clear(),g.clear()}function Y(A){const v=n.get(A);if(v.__webglInit===void 0)return;const k=A.source,se=f.get(k);if(se){const W=se[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&H(A),Object.keys(se).length===0&&f.delete(k)}n.remove(A)}function H(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const k=A.source,se=f.get(k);delete se[v.__cacheKey],a.memory.textures--}function te(A){const v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();const k=A.depthTexture;if(k&&k.renderTarget===A&&q(k),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let ne=0;ne<v.__webglFramebuffer[W].length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[W][ne]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const se=A.textures;for(let W=0,ne=se.length;W<ne;W++){const ce=n.get(se[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(se[W])}n.remove(A)}let V=0;function Q(){V=0}function ee(){return V}function be(A){V=A}function ie(){const A=V;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function O(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function oe(A,v){const k=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const se=A.image;if(se===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(k,A,v);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function xe(A,v){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){gt(k,A,v);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function Ae(A,v){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){gt(k,A,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function pe(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){xt(k,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const Ce={[er]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},Ze={[Tt]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[vr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},Re={[Zu]:i.NEVER,[fc]:i.ALWAYS,[Ju]:i.LESS,[uc]:i.LEQUAL,[Qu]:i.EQUAL,[hc]:i.GEQUAL,[eh]:i.GREATER,[th]:i.NOTEQUAL};function He(A,v){if(v.type===vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Xt||v.magFilter===vr||v.magFilter===Ss||v.magFilter===$n||v.minFilter===Xt||v.minFilter===vr||v.minFilter===Ss||v.minFilter===$n)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ce[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ce[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ce[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ze[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ze[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tt||v.minFilter!==Ss&&v.minFilter!==$n||v.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Xe(A,v){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",L),I(v));const se=v.source;let W=f.get(se);W===void 0&&(W={},f.set(se,W));const ne=O(v);if(ne!==A.__cacheKey){W[ne]===void 0&&(W[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),W[ne].usedTimes++;const ce=W[A.__cacheKey];ce!==void 0&&(W[A.__cacheKey].usedTimes--,ce.usedTimes===0&&H(v)),A.__cacheKey=ne,A.__webglTexture=W[ne].texture}return k}function ze(A,v,k){return Math.floor(Math.floor(A/k)/v)}function ct(A,v,k,se){const ne=A.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,se,v.data);else{ne.sort((N,J)=>N.start-J.start);let ce=0;for(let N=1;N<ne.length;N++){const J=ne[ce],$=ne[N],de=J.start+J.count,le=ze($.start,v.width,4),he=ze(J.start,v.width,4);$.start<=de+1&&le===he&&ze($.start+$.count-1,v.width,4)===le?J.count=Math.max(J.count,$.start+$.count-J.start):(++ce,ne[ce]=$)}ne.length=ce+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let N=0,J=ne.length;N<J;N++){const $=ne[N],de=Math.floor($.start/4),le=Math.ceil($.count/4),he=de%v.width,Te=Math.floor(de/v.width),Fe=le,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(i.TEXTURE_2D,0,he,Te,Fe,re,k,se,v.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function gt(A,v,k){let se=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=i.TEXTURE_3D);const W=Xe(A,v),ne=v.source;t.bindTexture(se,A.__webglTexture,i.TEXTURE0+k);const ce=n.get(ne);if(ne.version!==ce.__version||W===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const re=qe.getPrimaries(qe.workingColorSpace),Pe=v.colorSpace===Yn?null:qe.getPrimaries(v.colorSpace),Oe=v.colorSpace===Yn||re===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=b(v.image,!1,s.maxTextureSize);Z=Ne(v,Z);const ae=r.convert(v.format,v.colorSpace),N=r.convert(v.type);let J=T(v.internalFormat,ae,N,v.normalized,v.colorSpace,v.isVideoTexture);He(se,v);let $;const de=v.mipmaps,le=v.isVideoTexture!==!0,he=ce.__version===void 0||W===!0,Te=ne.dataReady,Fe=w(v,Z);if(v.isDepthTexture)J=x(v.format===Kn,v.type),he&&(le?t.texStorage2D(i.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,ae,N,null));else if(v.isDataTexture)if(de.length>0){le&&he&&t.texStorage2D(i.TEXTURE_2D,Fe,J,de[0].width,de[0].height);for(let re=0,Pe=de.length;re<Pe;re++)$=de[re],le?Te&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,$.width,$.height,ae,N,$.data):t.texImage2D(i.TEXTURE_2D,re,J,$.width,$.height,0,ae,N,$.data);v.generateMipmaps=!1}else le?(he&&t.texStorage2D(i.TEXTURE_2D,Fe,J,Z.width,Z.height),Te&&ct(v,Z,ae,N)):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,ae,N,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){le&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,J,de[0].width,de[0].height,Z.depth);for(let re=0,Pe=de.length;re<Pe;re++)if($=de[re],v.format!==Sn)if(ae!==null)if(le){if(Te)if(v.layerUpdates.size>0){const Oe=ll($.width,$.height,v.format,v.type);for(const _e of v.layerUpdates){const et=$.data.subarray(_e*Oe/$.data.BYTES_PER_ELEMENT,(_e+1)*Oe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,_e,$.width,$.height,1,ae,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,Z.depth,ae,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,J,$.width,$.height,Z.depth,0,$.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,Z.depth,ae,N,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,J,$.width,$.height,Z.depth,0,ae,N,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{le&&he&&t.texStorage2D(i.TEXTURE_2D,Fe,J,de[0].width,de[0].height);for(let re=0,Pe=de.length;re<Pe;re++)$=de[re],v.format!==Sn?ae!==null?le?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,$.width,$.height,ae,$.data):t.compressedTexImage2D(i.TEXTURE_2D,re,J,$.width,$.height,0,$.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Te&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,$.width,$.height,ae,N,$.data):t.texImage2D(i.TEXTURE_2D,re,J,$.width,$.height,0,ae,N,$.data)}else if(v.isDataArrayTexture)if(le){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,J,Z.width,Z.height,Z.depth),Te)if(v.layerUpdates.size>0){const re=ll(Z.width,Z.height,v.format,v.type);for(const Pe of v.layerUpdates){const Oe=Z.data.subarray(Pe*re/Z.data.BYTES_PER_ELEMENT,(Pe+1)*re/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,Z.width,Z.height,1,ae,N,Oe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,N,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,ae,N,Z.data);else if(v.isData3DTexture)le?(he&&t.texStorage3D(i.TEXTURE_3D,Fe,J,Z.width,Z.height,Z.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,N,Z.data)):t.texImage3D(i.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,ae,N,Z.data);else if(v.isFramebufferTexture){if(he)if(le)t.texStorage2D(i.TEXTURE_2D,Fe,J,Z.width,Z.height);else{let re=Z.width,Pe=Z.height;for(let Oe=0;Oe<Fe;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,J,re,Pe,0,ae,N,null),re>>=1,Pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),g.add(v),re.onpaint=Pe=>{const Oe=Pe.changedElements;for(const _e of g)Oe.includes(_e.image)&&(_e.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const Oe=i.RGBA,_e=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,_e,et,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&he){const re=De(de[0]);t.texStorage2D(i.TEXTURE_2D,Fe,J,re.width,re.height)}for(let re=0,Pe=de.length;re<Pe;re++)$=de[re],le?Te&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ae,N,$):t.texImage2D(i.TEXTURE_2D,re,J,ae,N,$);v.generateMipmaps=!1}else if(le){if(he){const re=De(Z);t.texStorage2D(i.TEXTURE_2D,Fe,J,re.width,re.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,N,Z)}else t.texImage2D(i.TEXTURE_2D,0,J,ae,N,Z);R(v)&&v.mipmapsAutoUpdate===!0&&y(se),ce.__version=ne.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function xt(A,v,k){if(v.image.length!==6)return;const se=Xe(A,v),W=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const ne=n.get(W);if(W.version!==ne.__version||se===!0){t.activeTexture(i.TEXTURE0+k);const ce=qe.getPrimaries(qe.workingColorSpace),K=v.colorSpace===Yn?null:qe.getPrimaries(v.colorSpace),Z=v.colorSpace===Yn||ce===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,J=[];for(let _e=0;_e<6;_e++)!ae&&!N?J[_e]=b(v.image[_e],!0,s.maxCubemapSize):J[_e]=N?v.image[_e].image:v.image[_e],J[_e]=Ne(v,J[_e]);const $=J[0],de=r.convert(v.format,v.colorSpace),le=r.convert(v.type);let he=T(v.internalFormat,de,le,v.normalized,v.colorSpace);const Te=v.isVideoTexture!==!0,Fe=ne.__version===void 0||se===!0,re=W.dataReady;let Pe=w(v,$);He(i.TEXTURE_CUBE_MAP,v);let Oe;if(v.isDepthTexture){if(he=x(v.format===Kn,v.type),Fe)if(Te)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,$.width,$.height);else for(let _e=0;_e<6;_e++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,$.width,$.height,0,de,le,null)}else if(ae){Te&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,he,$.width,$.height);for(let _e=0;_e<6;_e++){Oe=J[_e].mipmaps;for(let et=0;et<Oe.length;et++){const Mt=Oe[et];v.format!==Sn?de!==null?Te?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,Mt.width,Mt.height,de,Mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,he,Mt.width,Mt.height,0,Mt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,Mt.width,Mt.height,de,le,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,he,Mt.width,Mt.height,0,de,le,Mt.data)}}}else{if(Oe=v.mipmaps,Te&&Fe){Oe.length>0&&Pe++;const _e=De(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,he,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(N){Te?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,J[_e].width,J[_e].height,de,le,J[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,J[_e].width,J[_e].height,0,de,le,J[_e].data);for(let et=0;et<Oe.length;et++){const On=Oe[et].image[_e].image;Te?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,On.width,On.height,de,le,On.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,he,On.width,On.height,0,de,le,On.data)}}else{Te?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de,le,J[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,de,le,J[_e]);for(let et=0;et<Oe.length;et++){const Mt=Oe[et];Te?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,de,le,Mt.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,he,de,le,Mt.image[_e])}}}R(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ne.__version=W.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function st(A,v,k,se,W,ne){const ce=r.convert(k.format,k.colorSpace),K=r.convert(k.type),Z=T(k.internalFormat,ce,K,k.normalized,k.colorSpace),ae=n.get(v),N=n.get(k);if(N.__renderTarget=v,!ae.__hasExternalTextures){const J=Math.max(1,v.width>>ne),$=Math.max(1,v.height>>ne);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ne,Z,J,$,v.depth,0,ce,K,null):t.texImage2D(W,ne,Z,J,$,0,ce,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),me(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,W,N.__webglTexture,0,it(v)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,W,N.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(A,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const se=v.depthTexture,W=se&&se.isDepthTexture?se.type:null,ne=x(v.stencilBuffer,W),ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),ne,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),ne,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,A)}else{const se=v.textures;for(let W=0;W<se.length;W++){const ne=se[W],ce=r.convert(ne.format,ne.colorSpace),K=r.convert(ne.type),Z=T(ne.internalFormat,ce,K,ne.normalized,ne.colorSpace);me(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),Z,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(A,v,k){const se=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(v.depthTexture);W.__renderTarget=v;const ne=se?v.depthTexture.image[0]:v.depthTexture.image;(!W.__webglTexture||ne.width!==v.width||ne.height!==v.height)&&(ne.width=v.width,ne.height=v.height,v.depthTexture.needsUpdate=!0),se?pe(v.depthTexture,0):oe(v.depthTexture,0);const ce=W.__webglTexture,K=it(v),Z=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ae=v.depthTexture.format===Kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zn)me(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else if(v.depthTexture.format===Kn)me(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(A){const v=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const se=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),se){const W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,se.removeEventListener("dispose",W)};se.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=se}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let se=0;se<6;se++)nt(v.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?nt(v.__webglFramebuffer[0],A,0):nt(v.__webglFramebuffer,A,0);else if(k){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]===void 0)v.__webglDepthbuffer[se]=i.createRenderbuffer(),Ft(v.__webglDepthbuffer[se],A,!1);else{const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ne)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ft(v.__webglDepthbuffer,A,!1);else{const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(A,v,k){const se=n.get(A);v!==void 0&&st(se.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ot(A)}function kt(A){const v=A.texture,k=n.get(A),se=n.get(v);A.addEventListener("dispose",F),I(A);const W=A.textures,ne=A.isWebGLCubeRenderTarget===!0,ce=W.length>1;if(ce||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=v.version,a.memory.textures++),ne){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[K][Z]=i.createFramebuffer()}else k.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)k.__webglFramebuffer[K]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ce)for(let K=0,Z=W.length;K<Z;K++){const ae=n.get(W[K]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<W.length;K++){const Z=W[K];k.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const ae=r.convert(Z.format,Z.colorSpace),N=r.convert(Z.type),J=T(Z.internalFormat,ae,N,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),$=it(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,k.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),He(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)st(k.__webglFramebuffer[K][Z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else st(k.__webglFramebuffer[K],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);R(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let K=0,Z=W.length;K<Z;K++){const ae=W[K],N=n.get(ae);let J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,N.__webglTexture),He(J,ae),st(k.__webglFramebuffer,A,ae,i.COLOR_ATTACHMENT0+K,J,0),R(ae)&&y(J)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,se.__webglTexture),He(K,v),v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)st(k.__webglFramebuffer[Z],A,v,i.COLOR_ATTACHMENT0,K,Z);else st(k.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,K,0);R(v)?y(K):v.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Ot(A)}function U(A){const v=A.textures;for(let k=0,se=v.length;k<se;k++){const W=v[k];if(R(W)&&W.mipmapsAutoUpdate===!0){const ne=E(A),ce=n.get(W).__webglTexture;t.bindTexture(ne,ce),y(ne),t.unbindTexture()}}}const zt=[];function rt(A){if(A.samples>0){if(me(A)===!1){const v=A.textures,k=A.width,se=A.height;let W=i.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(A),K=v.length>1;if(K)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const N=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,k,se,0,0,k,se,W,i.NEAREST),c===!0&&(zt.length=0,zt.push(i.COLOR_ATTACHMENT0+ae),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&zt.push(ne),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const N=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(A){return Math.min(s.maxSamples,A.samples)}function me(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Ne(A,v){const k=A.colorSpace,se=A.format,W=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==ir&&k!==Yn&&(qe.getTransfer(k)===tt?(se!==Sn||W!==Zt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",k)),v}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(d.width=A.naturalWidth||A.width,d.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(d.width=A.displayWidth,d.height=A.displayHeight):(d.width=A.width,d.height=A.height),d}this.allocateTextureUnit=ie,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=be,this.setTexture2D=oe,this.setTexture2DArray=xe,this.setTexture3D=Ae,this.setTextureCube=pe,this.rebindTextures=Bt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=st,this.useMultisampledRTT=me,this.dispose=B}function F0(i,e){function t(n,s=Yn){let r;const a=qe.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===lc)return i.ALPHA;if(n===cc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Kn)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===$s)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===da||n===ua||n===ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma||n===ga||n===xa||n===tr||n===_a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ga)return r.COMPRESSED_R11_EAC;if(n===xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===_a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===va||n===Sa||n===ba||n===Ma||n===ya||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Na||n===Pa||n===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Ia||n===Ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fa||n===Oa||n===nr||n===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:O0,fragmentShader:B0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z0 extends hi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,l="local-floor",c=1,d=null,h=null,g=null,u=null,f=null,_=null;const M=typeof XRWebGLBinding<"u",m=new k0,p={},b=t.getContextAttributes();let R=null,y=null;const E=[],T=[],x=new $e;let w=null,I=null;const C=new dn;C.viewport=new ht;const L=new dn;L.viewport=new ht;const F=[C,L],q=new Zh;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let oe=E[O];return oe===void 0&&(oe=new Rr,E[O]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(O){let oe=E[O];return oe===void 0&&(oe=new Rr,E[O]=oe),oe.getGripSpace()},this.getHand=function(O){let oe=E[O];return oe===void 0&&(oe=new Rr,E[O]=oe),oe.getHandSpace()};function Y(O){const oe=T.indexOf(O.inputSource);if(oe===-1)return;const xe=E[oe];xe!==void 0&&(xe.update(O.inputSource,O.frame,d||a),xe.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let O=0;O<E.length;O++){const oe=T[O];oe!==null&&(T[O]=null,E[O].disconnect(oe))}P=null,B=null,m.reset();for(const O in p)delete p[O];if(e.setRenderTarget(R),f=null,u=null,g=null,s=null,y=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),I!==null){const O=I.camera;O.fov=I.fov,O.zoom=I.zoom,O.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){l=O,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(O){d=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ae=null,pe=null;b.depth&&(pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?Kn:Zn,Ae=b.stencil?Li:yn);const Ce={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};g=this.getBinding(),u=g.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new bn(u.textureWidth,u.textureHeight,{format:Sn,type:Zt,depthTexture:new Ii(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await s.requestReferenceSpace(l),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(O){for(let oe=0;oe<O.removed.length;oe++){const xe=O.removed[oe],Ae=T.indexOf(xe);Ae>=0&&(T[Ae]=null,E[Ae].disconnect(xe))}for(let oe=0;oe<O.added.length;oe++){const xe=O.added[oe];let Ae=T.indexOf(xe);if(Ae===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=T.length){T.push(xe),Ae=Ce;break}else if(T[Ce]===null){T[Ce]=xe,Ae=Ce;break}if(Ae===-1)break}const pe=E[Ae];pe&&pe.connect(xe)}}function V(O,oe){oe===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(oe.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let oe=O.near,xe=O.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),q.near=L.near=C.near=oe,q.far=L.far=C.far=xe,(P!==q.near||B!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,B=q.far),q.layers.mask=O.layers.mask|6,C.layers.mask=q.layers.mask&-5,L.layers.mask=q.layers.mask&-3;const Ae=O.parent,pe=q.cameras;V(q,Ae);for(let Ce=0;Ce<pe.length;Ce++)V(pe[Ce],Ae);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&O.isPerspectiveCamera&&(I={camera:O,fov:O.fov,zoom:O.zoom}),Q(O,q,Ae)};function Q(O,oe,xe){xe===null?O.matrix.copy(oe.matrixWorld):(O.matrix.copy(xe.matrixWorld),O.matrix.invert(),O.matrix.multiply(oe.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(oe.projectionMatrix),O.projectionMatrixInverse.copy(oe.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=za*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(O){c=O,u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(O){return p[O]};let ee=null;function be(O,oe){if(h=oe.getViewerPose(d||a),_=oe,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ae=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,Ae=!0);for(let Re=0;Re<xe.length;Re++){const He=xe[Re];let Xe=null;if(f!==null)Xe=f.getViewport(He);else{const ct=g.getViewSubImage(u,He);Xe=ct.viewport,Re===0&&(e.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(y))}let ze=F[Re];ze===void 0&&(ze=new dn,ze.layers.enable(Re),ze.viewport=new ht,F[Re]=ze),ze.matrix.fromArray(He.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(He.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Re===0&&(q.matrix.copy(ze.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ae===!0&&q.cameras.push(ze)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=n.getBinding();const Re=g.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&m.init(Re,s.renderState)}if(pe&&pe.includes("camera-access")&&M){e.state.unbindTexture(),g=n.getBinding();for(let Re=0;Re<xe.length;Re++){const He=xe[Re].camera;if(He){let Xe=p[He];Xe||(Xe=new wc,p[He]=Xe);const ze=g.getCameraImage(He);Xe.sourceTexture=ze}}}}for(let xe=0;xe<E.length;xe++){const Ae=T[xe],pe=E[xe];Ae!==null&&pe!==void 0&&pe.update(Ae,oe,d||a)}ee&&ee(O,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const ie=new Nc;ie.setAnimationLoop(be),this.setAnimationLoop=function(O){ee=O},this.dispose=function(){}}}const G0=new dt,zc=new Ie;zc.set(-1,0,0,0,1,0,0,0,1);function H0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),g(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,b,R):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),R=b.envMap,y=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function g(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V0(i,e,t,n){let s={},r={};function a(b,R){const y=R.program;n.uniformBlockBinding(b,y,s[b.id])}function l(b,R){let y=s[b.id];y===void 0&&(_(b),y=c(b),s[b.id]=y,b.addEventListener("dispose",m));const E=R.program;n.updateUBOMapping(b,E);const T=e.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function c(b){const R=i.createBuffer(),y=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function d(b){const R=s[b.id],y=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let T=0,x=y.length;T<x;T++){const w=y[T];if(Array.isArray(w))for(let I=0,C=w.length;I<C;I++)h(w[I],T,I,E);else h(w,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,R,y,E){if(u(b,R,y,E)===!0){const T=b.__offset,x=b.value;if(Array.isArray(x)){let w=0;for(let I=0;I<x.length;I++){const C=x[I],L=M(C,!0);g(C,b.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else g(x,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,b.__data)}}function g(b,R,y){typeof b=="number"||typeof b=="boolean"?R[y]=b:b.isMatrix3?(R[y]=b.elements[0],R[y+1]=b.elements[1],R[y+2]=b.elements[2],R[y+3]=0,R[y+4]=b.elements[3],R[y+5]=b.elements[4],R[y+6]=b.elements[5],R[y+7]=0,R[y+8]=b.elements[6],R[y+9]=b.elements[7],R[y+10]=b.elements[8],R[y+11]=0):ArrayBuffer.isView(b)?R.set(b.subarray(0,R.length-y),y):b.toArray(R,y)}function u(b,R,y,E){const T=b.value,x=R+"_"+y;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);const w=E[x];let I=!1;for(let C=0;C<T.length;C++)f(T[C],w,C)===!0&&(I=!0);return I}return f(T,E,x)}function f(b,R,y){if(R[y]===void 0)return typeof b=="number"||typeof b=="boolean"?R[y]=b:ArrayBuffer.isView(b)?R[y]=b.slice():R[y]=b.clone(),!0;{const E=R[y];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return R[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function _(b){const R=b.uniforms;let y=0;const E=16;for(let x=0,w=R.length;x<w;x++){const I=Array.isArray(R[x])?R[x]:[R[x]];for(let C=0,L=I.length;C<L;C++){const F=I[C],q=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(R[x])||Array.isArray(F.value);let B=y;for(let H=0,te=q.length;H<te;H++){const V=q[H],Q=M(V,P),ee=y%E,be=ee%Q.boundary,ie=ee+be;y+=be,ie!==0&&E-ie<Q.storage&&(y+=E-ie),H===0&&(B=y),y+=Q.storage}const Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((y-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}const T=y%E;return T>0&&(y+=E-T),b.__size=y,b.__cache={},this}function M(b,R){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",b),R===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(b){const R=b.target;R.removeEventListener("dispose",m),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:l,dispose:p}}const W0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function j0(){return mn===null&&(mn=new Dh(W0,16,16,ui,En),mn.name="DFG_LUT",mn.minFilter=Xt,mn.magFilter=Xt,mn.wrapS=_n,mn.wrapT=_n,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class X0{constructor(e={}){const{canvas:t=sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=f,m=new Set([Qa,Ja,Za]),p=new Set([Zt,yn,cs,Li,$a,Ka]),b=new Uint32Array(4),R=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let E=null,T=null;const x=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,F=null,q=null,P=null,B=null;this._outputColorSpace=Kt;let Y=0,H=0,te=null,V=-1,Q=null;const ee=new ht,be=new ht;let ie=null;const O=new je(0);let oe=0,xe=t.width,Ae=t.height,pe=1,Ce=null,Ze=null;const Re=new ht(0,0,xe,Ae),He=new ht(0,0,xe,Ae);let Xe=!1;const ze=new hs,ct=new no;let gt=!1,xt=!1;const st=new dt,Ft=new j,nt=new ht,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function kt(){return te===null?pe:1}let U=n;function zt(S,D){return t.getContext(S,D)}let rt,it,me,ft,Ne,De,A,v,k,se,W,ne,ce,K,Z,ae,N,J,$,de,le,he,Te;try{const S={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xa}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),U===null){const D="webgl2";if(U=zt(D,S),U===null)throw zt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(S){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Qe("WebGLRenderer: "+S.message),S}function Fe(){rt=new $m(U),rt.init(),le=new F0(U,rt),it=new Bm(U,rt,e,le),me=new I0(U,rt),it.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),q=U.createFramebuffer(),P=U.createFramebuffer(),B=U.createFramebuffer(),ft=new Jm(U),Ne=new S0,De=new U0(U,rt,me,Ne,it,le,ft),A=new Ym(C),v=new Qh(U),he=new Fm(U,v),k=new Km(U,v,ft,he),se=new eg(U,k,v,he,ft),J=new Qm(U,it,De),Z=new km(Ne),W=new v0(C,A,rt,it,he,Z),ne=new H0(C,Ne),ce=new M0,K=new R0(rt),N=new Um(C,A,me,se,_,c),ae=new L0(C,se,it),Te=new V0(U,ft,it,me),$=new Om(U,rt,ft),de=new Zm(U,rt,ft),ft.programs=W.programs,C.capabilities=it,C.extensions=rt,C.properties=Ne,C.renderLists=ce,C.shadowMap=ae,C.state=me,C.info=ft}M!==Zt&&(I=new ng(M,t.width,t.height,l,s,r));const re=new z0(C,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(S){S!==void 0&&(pe=S,this.setSize(xe,Ae,!1))},this.getSize=function(S){return S.set(xe,Ae)},this.setSize=function(S,D,X=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=S,Ae=D,t.width=Math.floor(S*pe),t.height=Math.floor(D*pe),X===!0&&(t.style.width=S+"px",t.style.height=D+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(xe*pe,Ae*pe).floor()},this.setDrawingBufferSize=function(S,D,X){xe=S,Ae=D,pe=X,t.width=Math.floor(S*X),t.height=Math.floor(D*X),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(M===Zt){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ee)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,D,X,z){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,D,X,z),me.viewport(ee.copy(Re).multiplyScalar(kt()).round())},this.getScissor=function(S){return S.copy(He)},this.setScissor=function(S,D,X,z){S.isVector4?He.set(S.x,S.y,S.z,S.w):He.set(S,D,X,z),me.scissor(be.copy(He).multiplyScalar(kt()).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(S){me.setScissorTest(Xe=S)},this.setOpaqueSort=function(S){Ce=S},this.setTransparentSort=function(S){Ze=S},this.getClearColor=function(S){return S.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,X=!0){let z=0;if(S){let G=!1;if(te!==null){const ge=te.texture.format;G=m.has(ge)}if(G){const ge=te.texture.type,Me=p.has(ge),fe=N.getClearColor(),Se=N.getClearAlpha(),we=fe.r,Ue=fe.g,Ve=fe.b;Me?(b[0]=we,b[1]=Ue,b[2]=Ve,b[3]=Se,U.clearBufferuiv(U.COLOR,0,b)):(R[0]=we,R[1]=Ue,R[2]=Ve,R[3]=Se,U.clearBufferiv(U.COLOR,0,R))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),N.dispose(),ce.dispose(),K.dispose(),De.dispose(),Ne.dispose(),A.dispose(),se.dispose(),k.dispose(),he.dispose(),Te.dispose(),W.dispose(),re.dispose(),re.removeEventListener("sessionstart",ho),re.removeEventListener("sessionend",fo),ei.stop()};function Pe(S){S.preventDefault(),Oo("WebGLRenderer: Context Lost."),L=!0}function Oe(){Oo("WebGLRenderer: Context Restored."),L=!1;const S=ft.autoReset,D=ae.enabled,X=ae.autoUpdate,z=ae.needsUpdate,G=ae.type;Fe(),ft.autoReset=S,ae.enabled=D,ae.autoUpdate=X,ae.needsUpdate=z,ae.type=G}function _e(S){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function et(S){const D=S.target;D.removeEventListener("dispose",et),Mt(D)}function Mt(S){On(S),Ne.remove(S)}function On(S){const D=Ne.get(S).programs;D!==void 0&&(D.forEach(function(X){W.releaseProgram(X)}),S.isShaderMaterial&&W.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,X,z,G,ge){D===null&&(D=Ot);const Me=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=jc(S,D,X,z,G);me.setMaterial(z,Me);let Se=X.index,we=1;if(z.wireframe===!0){if(Se=k.getWireframeAttribute(X),Se===void 0)return;we=2}const Ue=X.drawRange,Ve=X.attributes.position;let ye=Ue.start*we,We=(Ue.start+Ue.count)*we;ge!==null&&(ye=Math.max(ye,ge.start*we),We=Math.min(We,(ge.start+ge.count)*we)),Se!==null?(ye=Math.max(ye,0),We=Math.min(We,Se.count)):Ve!=null&&(ye=Math.max(ye,0),We=Math.min(We,Ve.count));const _t=We-ye;if(_t<0||_t===1/0)return;he.setup(G,z,fe,X,Se);let ot,at=$;if(Se!==null&&(ot=v.get(Se),at=de,at.setIndex(ot)),G.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*kt()),at.setMode(U.LINES)):at.setMode(U.TRIANGLES);else if(G.isLine){let Ct=z.linewidth;Ct===void 0&&(Ct=1),me.setLineWidth(Ct*kt()),G.isLineSegments?at.setMode(U.LINES):G.isLineLoop?at.setMode(U.LINE_LOOP):at.setMode(U.LINE_STRIP)}else G.isPoints?at.setMode(U.POINTS):G.isSprite&&at.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ct=G._multiDrawStarts,Ee=G._multiDrawCounts,Gt=G._multiDrawCount,Je=Se?v.get(Se).bytesPerElement:1,ti=Ne.get(z).currentProgram.getUniforms();for(let Nt=0;Nt<Gt;Nt++)ti.setValue(U,"_gl_DrawID",Nt),at.render(Ct[Nt]/Je,Ee[Nt])}else if(G.isInstancedMesh)at.renderInstances(ye,_t,G.count);else if(X.isInstancedBufferGeometry){const Ct=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Ct);at.renderInstances(ye,_t,Ee)}else at.render(ye,_t)};function uo(S,D,X,z){F!==null&&S.isNodeMaterial&&F.setObject(z,S),gt===!0&&Z.setState(S,X,!1),S.transparent===!0&&S.side===In&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,zi(S,D,z),S.side=di,S.needsUpdate=!0,zi(S,D,z),S.side=In):zi(S,D,z)}this.compile=function(S,D,X=null){X===null&&(X=S),F!==null&&F.renderStart(S,D,X),T=K.get(X),T.init(D),w.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),xt=this.localClippingEnabled,gt=Z.init(this.clippingPlanes,xt),gt===!0&&Z.setGlobalState(this.clippingPlanes,D),F!==null&&ae.render(T.state.shadowsArray,X,D);const z=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const fe=ge[Me];uo(fe,X,D,G),z.add(fe)}else uo(ge,X,D,G),z.add(ge)}),T=w.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(S,D,X=null){const z=this.compile(S,D,X);return new Promise(G=>{function ge(){if(z.forEach(function(Me){const Se=Ne.get(Me).currentProgram;(Se===void 0||Se.isReady())&&z.delete(Me)}),z.size===0){G(S);return}setTimeout(ge,10)}rt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let fr=null;function Vc(S){fr&&fr(S)}function ho(){ei.stop()}function fo(){ei.start()}const ei=new Nc;ei.setAnimationLoop(Vc),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(S){fr=S,re.setAnimationLoop(S),S===null?ei.stop():ei.start()},re.addEventListener("sessionstart",ho),re.addEventListener("sessionend",fo),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(S,D);const X=re.enabled===!0&&re.isPresenting===!0,z=I!==null&&(te===null||X)&&I.begin(C,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(D),D=re.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,te),T=K.get(S,w.length),T.init(D),T.state.textureUnits=De.getTextureUnits(),w.push(T),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ct.setFromArrayCamera(D):ze.setFromProjectionMatrix(st,hn,D.reversedDepth),xt=this.localClippingEnabled,gt=Z.init(this.clippingPlanes,xt),E=ce.get(S,x.length),E.init(),x.push(E),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&pr(Me,D,-1/0,C.sortObjects)}pr(S,D,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(Ce,Ze),Bt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Bt&&N.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),gt===!0&&Z.beginShadows();const G=T.state.shadowsArray;if(ae.render(G,S,D),gt===!0&&Z.endShadows(),(z&&I.hasRenderPass())===!1){const Me=E.opaque,fe=E.transmissive;if(T.setupLights(),D.isArrayCamera){const Se=D.cameras;if(fe.length>0)for(let we=0,Ue=Se.length;we<Ue;we++){const Ve=Se[we];mo(Me,fe,S,Ve)}Bt&&N.render(S);for(let we=0,Ue=Se.length;we<Ue;we++){const Ve=Se[we];po(E,S,Ve,Ve.viewport)}}else fe.length>0&&mo(Me,fe,S,D),Bt&&N.render(S),po(E,S,D)}te!==null&&H===0&&(De.updateMultisampleRenderTarget(te),De.updateRenderTargetMipmap(te)),z&&I.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),he.resetDefaultState(),V=-1,Q=null,w.pop(),w.length>0?(T=w[w.length-1],De.setTextureUnits(T.state.textureUnits),gt===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,F!==null&&F.renderEnd()};function pr(S,D,X,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){const Me=D.isArrayCamera?ct:ze;if(!S.frustumCulled||S.intersectsFrustum(Me)){z&&nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);const fe=se.update(S),Se=S.material;Se.visible&&E.push(S,fe,Se,X,nt.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){const Me=D.isArrayCamera?ct:ze;if(!S.frustumCulled||S.intersectsFrustum(Me)){const fe=se.update(S),Se=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),nt.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),nt.copy(fe.boundingSphere.center)),nt.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(Se)){const we=fe.groups;for(let Ue=0,Ve=we.length;Ue<Ve;Ue++){const ye=we[Ue],We=Se[ye.materialIndex];We&&We.visible&&E.push(S,fe,We,X,nt.z,ye,D)}}else Se.visible&&E.push(S,fe,Se,X,nt.z,null,D)}}}const ge=S.children;for(let Me=0,fe=ge.length;Me<fe;Me++)pr(ge[Me],D,X,z)}function po(S,D,X,z){const{opaque:G,transmissive:ge,transparent:Me}=S;T.setupLightsView(X),gt===!0&&Z.setGlobalState(C.clippingPlanes,X),z&&me.viewport(ee.copy(z)),G.length>0&&xs(G,D,X),ge.length>0&&xs(ge,D,X),Me.length>0&&xs(Me,D,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function mo(S,D,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const ye=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new bn(1,1,{generateMipmaps:!0,type:ye?En:Zt,minFilter:$n,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ge=T.state.transmissionRenderTarget[z.id],Me=z.viewport||ee;ge.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Se=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(O),oe=C.getClearAlpha(),oe<1&&C.setClearColor(16777215,.5),C.clear(),Bt&&N.render(X);const Ue=C.toneMapping;C.toneMapping=Un;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),gt===!0&&Z.setGlobalState(C.clippingPlanes,z),xs(S,X,z),De.updateMultisampleRenderTarget(ge),De.updateRenderTargetMipmap(ge),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let We=0,_t=D.length;We<_t;We++){const ot=D[We],{object:at,geometry:Ct,material:Ee,group:Gt}=ot;if(Ee.side===In&&at.layers.test(z.layers)){const Je=Ee.side;Ee.side=Wt,Ee.needsUpdate=!0,go(at,X,z,Ct,Ee,Gt),Ee.side=Je,Ee.needsUpdate=!0,ye=!0}}ye===!0&&(De.updateMultisampleRenderTarget(ge),De.updateRenderTargetMipmap(ge))}C.setRenderTarget(fe,Se,we),C.setClearColor(O,oe),Ve!==void 0&&(z.viewport=Ve),C.toneMapping=Ue}function xs(S,D,X){const z=D.isScene===!0?D.overrideMaterial:null;for(let G=0,ge=S.length;G<ge;G++){const Me=S[G],{object:fe,geometry:Se,group:we}=Me;let Ue=Me.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),fe.layers.test(X.layers)&&go(fe,D,X,Se,Ue,we)}}function go(S,D,X,z,G,ge){F!==null&&G.isNodeMaterial&&F.setObject(S,G),S.onBeforeRender(C,D,X,z,G,ge),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,D,X,z,S,ge),G.transparent===!0&&G.side===In&&G.forceSinglePass===!1?(G.side=Wt,G.needsUpdate=!0,C.renderBufferDirect(X,D,z,G,S,ge),G.side=di,G.needsUpdate=!0,C.renderBufferDirect(X,D,z,G,S,ge),G.side=In):C.renderBufferDirect(X,D,z,G,S,ge),S.onAfterRender(C,D,X,z,G,ge)}function xo(S){let D=0;for(const X of S)X.texture!==null&&D++;return D}function zi(S,D,X){D.isScene!==!0&&(D=Ot);const z=Ne.get(S),G=T.state.lights,ge=T.state.shadowsArray,Me=G.state.version,fe=W.getParameters(S,G.state,ge,D,X,T.state.lightProbeGridArray),Se=W.getProgramCacheKey(fe);let we=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Ue=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=A.get(S.envMap||z.environment,Ue),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",et),we=new Map,z.programs=we,z.programVariants=new Map);let Ve=we.get(Se);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===Me)return vo(S,fe),Ve}else fe.uniforms=W.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,X,fe),S.onBeforeCompile(fe,C),Ve=W.acquireProgram(fe,Se),we.set(Se,Ve),z.uniforms=fe.uniforms;const ye=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ye.clippingPlanes=Z.uniform),vo(S,fe),z.needsLights=qc(S),z.lightsStateVersion=Me,z.needsLights&&(ye.ambientLightColor.value=G.state.ambient,ye.lightProbe.value=G.state.probe,ye.sunLights.value=G.state.sun,ye.sunLightShadows.value=G.state.sunShadow,ye.directionalLights.value=G.state.directional,ye.directionalLightShadows.value=G.state.directionalShadow,ye.spotLights.value=G.state.spot,ye.spotLightShadows.value=G.state.spotShadow,ye.rectAreaLights.value=G.state.rectArea,ye.ltc_1.value=G.state.rectAreaLTC1,ye.ltc_2.value=G.state.rectAreaLTC2,ye.pointLights.value=G.state.point,ye.pointLightShadows.value=G.state.pointShadow,ye.hemisphereLights.value=G.state.hemi,ye.sunShadowMatrix.value=G.state.sunShadowMatrix,ye.sunShadowCascade.value=G.state.sunShadowCascade,ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ye.spotLightMatrix.value=G.state.spotLightMatrix,ye.spotLightMap.value=G.state.spotLightMap,ye.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=xo(T.state.lightProbeGridArray),z.currentProgram=Ve,z.uniformsList=null,Ve}function Wc(S,D,X,z,G){const ge=Ne.get(S),Me=ge.currentProgram.id+","+z+","+G;let fe=ge.programVariants.get(Me);return fe===void 0?(fe=zi(S,D,X),ge.programVariants.set(Me,fe)):(ge.currentProgram=fe,ge.uniformsList=null,ge.outputColorSpace=z,ge.toneMapping=G),fe}function _o(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Zs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function vo(S,D){const X=Ne.get(S);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function jc(S,D,X,z,G){D.isScene!==!0&&(D=Ot),De.resetTextureUnits();const ge=D.fog,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,fe=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=A.get(z.envMap||Me,Se),Ue=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!X.morphAttributes.position,We=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color;let ot=Un;z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ot=C.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ct=at!==void 0?at.length:0,Ee=Ne.get(z),Gt=T.state.lights;if(gt===!0&&(xt===!0||S!==Q)){const ut=S===Q&&z.id===V;Z.setState(z,S,ut)}let Je=!1,ti=!1;z.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Gt.state.version||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==we||z.fog===!0&&Ee.fog!==ge||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Z.numPlanes||Ee.numIntersection!==Z.numIntersection)||Ee.vertexAlphas!==Ue||Ee.vertexTangents!==Ve||Ee.morphTargets!==ye||Ee.morphNormals!==We||Ee.morphColors!==_t||Ee.morphTargetsCount!==Ct||Ee.numLightProbeGrids!==xo(T.state.lightProbeGridArray)?Je=!0:(Ee.outputColorSpace!==fe||Ee.toneMapping!==ot)&&(ti=!0):(Je=!0,Ee.__version=z.version);let Nt=Ee.currentProgram;(Je===!0||ti===!0)&&(Nt=ti===!0?Wc(z,D,G,fe,ot):zi(z,D,G),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Nt,Ee));let _s=!1,Bn=!1,ni=!1;const Ke=Nt.getUniforms(),wt=Ee.uniforms;if(me.useProgram(Nt.program)&&(_s=!0,Bn=!0,ni=!0),z.id!==V&&(V=z.id,Bn=!0),_s||Q!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ke.setValue(U,"projectionMatrix",S.projectionMatrix),Ke.setValue(U,"viewMatrix",S.matrixWorldInverse);const yt=Ke.map.cameraPosition;yt!==void 0&&yt.setValue(U,Ft.setFromMatrixPosition(S.matrixWorld)),it.logarithmicDepthBuffer&&Ke.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ke.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,Bn=!0,ni=!0)}if(Ee.needsLights&&(Gt.state.sunShadowMap.length>0&&Ke.setValue(U,"sunShadowMap",Gt.state.sunShadowMap,De),Gt.state.directionalShadowMap.length>0&&Ke.setValue(U,"directionalShadowMap",Gt.state.directionalShadowMap,De),Gt.state.spotShadowMap.length>0&&Ke.setValue(U,"spotShadowMap",Gt.state.spotShadowMap,De),Gt.state.pointShadowMap.length>0&&Ke.setValue(U,"pointShadowMap",Gt.state.pointShadowMap,De)),G.isSkinnedMesh){Ke.setOptional(U,G,"bindMatrix"),Ke.setOptional(U,G,"bindMatrixInverse");const ut=G.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),Ke.setValue(U,"boneTexture",ut.boneTexture,De))}G.isBatchedMesh&&(Ke.setOptional(U,G,"batchingTexture"),Ke.setValue(U,"batchingTexture",G._matricesTexture,De),Ke.setOptional(U,G,"batchingIdTexture"),Ke.setValue(U,"batchingIdTexture",G._indirectTexture,De),Ke.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Ke.setValue(U,"batchingColorTexture",G._colorsTexture,De));const rn=X.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&J.update(G,X,Nt),(Bn||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,Ke.setValue(U,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(wt.envMapIntensity.value=D.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=j0()),Bn){if(Ke.setValue(U,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&Xc(wt,ni),ge&&z.fog===!0&&ne.refreshFogUniforms(wt,ge),ne.refreshMaterialUniforms(wt,z,pe,Ae,T.state.transmissionRenderTarget[S.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const ut=y;let yt=0;for(const Tn of T.state.lightProbeGridArray)Tn.texture!==null&&(ut.textures[yt]=Tn.texture,ut.min[yt]=Tn.boundingBox.min,ut.max[yt]=Tn.boundingBox.max,ut.resolution[yt]=Tn.resolution,yt++);for(const Tn in ut)ut[Tn].length=yt;wt.probesSH.value=ut.textures,wt.probesMin.value=ut.min,wt.probesMax.value=ut.max,wt.probesResolution.value=ut.resolution}Zs.upload(U,_o(Ee),wt,De)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zs.upload(U,_o(Ee),wt,De),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ke.setValue(U,"center",G.center),Ke.setValue(U,"modelViewMatrix",G.modelViewMatrix),Ke.setValue(U,"normalMatrix",G.normalMatrix),Ke.setValue(U,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const ut=z.uniformsGroups;for(let yt=0,Tn=ut.length;yt<Tn;yt++){const bo=ut[yt];Te.update(bo,Nt),Te.bind(bo,Nt)}}return Nt}function Xc(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function qc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,D,X){const z=Ne.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ne.get(S.texture).__webglTexture=D,Ne.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const X=Ne.get(S);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,X=0){te=S,Y=D,H=X;let z=null,G=!1,ge=!1;if(S){const fe=Ne.get(S);if(fe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(U.FRAMEBUFFER,fe.__webglFramebuffer),ee.copy(S.viewport),be.copy(S.scissor),ie=S.scissorTest,me.viewport(ee),me.scissor(be),me.setScissorTest(ie),V=-1;return}else if(fe.__webglFramebuffer===void 0)De.setupRenderTarget(S);else if(fe.__hasExternalTextures)De.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(fe.__boundDepthTexture!==Ue){if(Ue!==null&&Ne.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);const we=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[D])?z=we[D][X]:z=we[D],G=!0):S.samples>0&&De.useMultisampledRTT(S)===!1?z=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[X]:z=we,ee.copy(S.viewport),be.copy(S.scissor),ie=S.scissorTest}else ee.copy(Re).multiplyScalar(pe).floor(),be.copy(He).multiplyScalar(pe).floor(),ie=Xe;if(X!==0&&(z=q),me.bindFramebuffer(U.FRAMEBUFFER,z)&&me.drawBuffers(S,z),me.viewport(ee),me.scissor(be),me.setScissorTest(ie),G){const fe=Ne.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,X)}else if(ge){const fe=D;for(let Se=0;Se<S.textures.length;Se++){const we=Ne.get(S.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,we.__webglTexture,X,fe)}}else if(S!==null&&X!==0){const fe=Ne.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fe.__webglTexture,X)}V=-1};function So(S){const D=Ne.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=it.textureFormatReadable(S.format),D.__typeReadable=it.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,X,z,G,ge,Me,fe=0){if(!(S&&S.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se){me.bindFramebuffer(U.FRAMEBUFFER,Se);try{const we=S.textures[fe],Ue=we.format,Ve=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);const ye=So(we);if(ye.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&X>=0&&X<=S.height-G&&U.readPixels(D,X,z,G,le.convert(Ue),le.convert(Ve),ge)}finally{const we=te!==null?Ne.get(te).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,D,X,z,G,ge,Me,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se)if(D>=0&&D<=S.width-z&&X>=0&&X<=S.height-G){me.bindFramebuffer(U.FRAMEBUFFER,Se);const we=S.textures[fe],Ue=we.format,Ve=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);const ye=So(we);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(D,X,z,G,le.convert(Ue),le.convert(Ve),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const _t=te!==null?Ne.get(te).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,_t);const ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rh(U,ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(We),U.deleteSync(ot),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,X=0){const z=Math.pow(2,-X),G=Math.floor(S.image.width*z),ge=Math.floor(S.image.height*z),Me=D!==null?D.x:0,fe=D!==null?D.y:0;De.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Me,fe,G,ge),me.unbindTexture()},this.copyTextureToTexture=function(S,D,X=null,z=null,G=0,ge=0){let Me,fe,Se,we,Ue,Ve,ye,We,_t;const ot=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(X!==null)Me=X.max.x-X.min.x,fe=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Ue=X.min.y,Ve=X.isBox3?X.min.z:0;else{const Ke=Math.pow(2,-G);Me=Math.floor(ot.width*Ke),fe=Math.floor(ot.height*Ke),S.isDataArrayTexture?Se=ot.depth:S.isData3DTexture?Se=Math.floor(ot.depth*Ke):Se=1,we=0,Ue=0,Ve=0}z!==null?(ye=z.x,We=z.y,_t=z.z):(ye=0,We=0,_t=0);const at=le.convert(D.format),Ct=le.convert(D.type);let Ee;D.isData3DTexture?(De.setTexture3D(D,0),Ee=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(De.setTexture2DArray(D,0),Ee=U.TEXTURE_2D_ARRAY):(De.setTexture2D(D,0),Ee=U.TEXTURE_2D),me.activeTexture(U.TEXTURE0),me.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),me.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),me.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Gt=me.getParameter(U.UNPACK_ROW_LENGTH),Je=me.getParameter(U.UNPACK_IMAGE_HEIGHT),ti=me.getParameter(U.UNPACK_SKIP_PIXELS),Nt=me.getParameter(U.UNPACK_SKIP_ROWS),_s=me.getParameter(U.UNPACK_SKIP_IMAGES);me.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),me.pixelStorei(U.UNPACK_SKIP_PIXELS,we),me.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),me.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const Bn=S.isDataArrayTexture||S.isData3DTexture,ni=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const Ke=Ne.get(S),wt=Ne.get(D),rn=Ne.get(Ke.__renderTarget),ut=Ne.get(wt.__renderTarget);me.bindFramebuffer(U.READ_FRAMEBUFFER,rn.__webglFramebuffer),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let yt=0;yt<Se;yt++)Bn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.get(S).__webglTexture,G,Ve+yt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.get(D).__webglTexture,ge,_t+yt)),U.blitFramebuffer(we,Ue,we+Me,Ue+fe,ye,We,ye+Me,We+fe,U.DEPTH_BUFFER_BIT,U.NEAREST);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Ne.has(S)){const Ke=Ne.get(S),wt=Ne.get(D);me.bindFramebuffer(U.READ_FRAMEBUFFER,P),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let rn=0;rn<Se;rn++)Bn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ke.__webglTexture,G,Ve+rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ke.__webglTexture,G),ni?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,ge,_t+rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,ge),G!==0?U.blitFramebuffer(we,Ue,we+Me,Ue+fe,ye,We,ye+Me,We+fe,U.COLOR_BUFFER_BIT,U.NEAREST):ni?U.copyTexSubImage3D(Ee,ge,ye,We,_t+rn,we,Ue,Me,fe):U.copyTexSubImage2D(Ee,ge,ye,We,we,Ue,Me,fe);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ni?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Ee,ge,ye,We,_t,Me,fe,Se,at,Ct,ot.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,ge,ye,We,_t,Me,fe,Se,at,ot.data):U.texSubImage3D(Ee,ge,ye,We,_t,Me,fe,Se,at,Ct,ot):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,ye,We,Me,fe,at,Ct,ot.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,ye,We,ot.width,ot.height,at,ot.data):U.texSubImage2D(U.TEXTURE_2D,ge,ye,We,Me,fe,at,Ct,ot);me.pixelStorei(U.UNPACK_ROW_LENGTH,Gt),me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),me.pixelStorei(U.UNPACK_SKIP_PIXELS,ti),me.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),me.pixelStorei(U.UNPACK_SKIP_IMAGES,_s),ge===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(Ee),me.unbindTexture()},this.initRenderTarget=function(S){Ne.get(S).__webglFramebuffer===void 0&&De.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?De.setTextureCube(S,0):S.isData3DTexture?De.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?De.setTexture2DArray(S,0):De.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){Y=0,H=0,te=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}function Ws(i,e,t){const n=(90-i)*(Math.PI/180),s=(e+180)*(Math.PI/180),r=-(t*Math.sin(n)*Math.cos(s)),a=t*Math.sin(n)*Math.sin(s),l=t*Math.cos(n);return new j(r,l,a)}function q0(){const i=document.createElement("canvas");i.width=2048,i.height=1024;const e=i.getContext("2d");if(e){const n=e.createLinearGradient(0,0,0,i.height);n.addColorStop(0,"#0d1b2a"),n.addColorStop(.5,"#1b263b"),n.addColorStop(1,"#0d1b2a"),e.fillStyle=n,e.fillRect(0,0,i.width,i.height),e.fillStyle="#2d5a3c",e.beginPath(),e.ellipse(1100,320,380,180,-.1,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(1320,380),e.lineTo(1390,380),e.lineTo(1355,480),e.closePath(),e.fill(),e.beginPath(),e.ellipse(1080,520,200,240,.2,0,Math.PI*2),e.fill(),e.fillStyle="#285235",e.beginPath(),e.ellipse(450,280,220,150,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(550,620,140,220,.2,0,Math.PI*2),e.fill(),e.fillStyle="#594a2b",e.beginPath(),e.ellipse(1650,680,120,90,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.12)";for(let s=0;s<40;s++)e.beginPath(),e.ellipse(Math.random()*i.width,Math.random()*i.height,150+Math.random()*200,30+Math.random()*50,Math.random()*Math.PI,0,Math.PI*2),e.fill()}const t=new Uh(i);return t.wrapS=er,t.wrapT=_n,t}const Y0=({markers:i=[],config:e={},onMarkerClick:t,onMarkerHover:n,className:s,focusLocation:r})=>{const a=ue.useRef(null),[l,c]=ue.useState([]),[d,h]=ue.useState(!0),g=ue.useRef(!0);g.current=d;const[u,f]=ue.useState(0),_=ue.useRef(()=>{}),M=ue.useRef(()=>{}),m=ue.useRef(()=>{}),p=ue.useRef(()=>{}),b=ue.useRef(e);b.current=e;const R=ue.useRef(i);return R.current=i,ue.useEffect(()=>{if(!r)return;const{lat:y,lng:E}=r,x=-(E*Math.PI/180)-Math.PI/2,w=y*Math.PI/180*.45;p.current(w,x)},[r]),ue.useEffect(()=>{const y=a.current;if(!y)return;let E=y.clientWidth||600,T=y.clientHeight||500;const x=320,w=160,I=480;let C=x,L=x;const F=new Eh,q=new dn(40,E/T,.1,1e3);q.position.set(0,0,x);const P=new X0({antialias:!0,alpha:!0});P.setSize(E,T),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.toneMapping=qa,P.toneMappingExposure=1.2,y.appendChild(P.domElement);const B=new Ri;F.add(B);const Y=.28,H=4.2;B.rotation.x=Y,B.rotation.y=H;let te=null,V=null;p.current=(W,ne)=>{te=W,V=ne,h(!1)};const Q=100,ee=new ss(Q,64,64),be=q0(),ie=new Gh({map:be,roughness:.65,metalness:.1,bumpScale:e.bumpScale??.05}),O=new qh;O.crossOrigin="anonymous";const oe=["https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg","https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"],xe=(W=0)=>{W>=oe.length||O.load(oe[W],ne=>{ne.colorSpace=Kt,ie.map=ne,ie.needsUpdate=!0},void 0,()=>xe(W+1))};xe(0);const Ae=new Mn(ee,ie);B.add(Ae);const pe=e.atmosphereColor||"#4da6ff",Ce=new ss(Q*1.15,64,64),Ze=new Qn({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        uniform vec3 color;
        uniform float intensity;
        void main() {
          float rim = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(color, 1.0) * rim * (intensity / 10.0);
        }
      `,uniforms:{color:{value:new je(pe)},intensity:{value:e.atmosphereIntensity??16}},blending:ea,side:Wt,transparent:!0}),Re=new Mn(Ce,Ze);B.add(Re);const He=new Kh(16777215,1.4);F.add(He);const Xe=new ol(16777215,2.2);Xe.position.set(300,150,250),F.add(Xe);const ze=new ol(new je(pe),1);ze.position.set(-300,-100,-250),F.add(ze);const ct=new Ri;B.add(ct),(()=>{for(;ct.children.length>0;)ct.remove(ct.children[0]);R.current.forEach(ne=>{const K=Ws(ne.lat,ne.lng,Q),Z=Ws(ne.lat,ne.lng,Q+18),ae=new ss(1.2,12,12),N=new bc({color:16724804}),J=new Mn(ae,N);J.position.copy(K),ct.add(J);const $=new wn().setFromPoints([K,Z]),de=new Mc({color:16777215,transparent:!0,opacity:.6}),le=new Ih($,de);ct.add(le)})})();let xt=!1,st=!1,Ft={x:0,y:0},nt={x:0,y:0};const Ot=W=>{W.target.closest(".globe-ctrl-btn")||(xt=!0,te=null,V=null,Ft={x:W.clientX,y:W.clientY},nt={x:0,y:0})},Bt=W=>{if(!xt)return;const ne=W.clientX-Ft.x,ce=W.clientY-Ft.y;nt={x:ne*.005,y:ce*.005},B.rotation.y+=nt.x,B.rotation.x+=nt.y,B.rotation.x=Math.max(-1.1,Math.min(1.1,B.rotation.x)),Ft={x:W.clientX,y:W.clientY}},kt=()=>{xt=!1},U=()=>{st=!0},zt=()=>{st=!1},rt=W=>{W.preventDefault();const ne=W.deltaY*.28;L=Math.max(w,Math.min(I,L+ne))};let it=0;const me=W=>{if(W.touches.length===2){const ne=W.touches[0].clientX-W.touches[1].clientX,ce=W.touches[0].clientY-W.touches[1].clientY;it=Math.hypot(ne,ce)}},ft=W=>{if(W.touches.length===2){W.preventDefault();const ne=W.touches[0].clientX-W.touches[1].clientX,ce=W.touches[0].clientY-W.touches[1].clientY,K=Math.hypot(ne,ce),Z=(it-K)*.8;L=Math.max(w,Math.min(I,L+Z)),it=K}};_.current=()=>{L=Math.max(w,L-45)},M.current=()=>{L=Math.min(I,L+45)},m.current=()=>{L=x,te=Y,V=H,nt={x:0,y:0}};const Ne=P.domElement;Ne.addEventListener("pointerdown",Ot),y.addEventListener("mouseenter",U),y.addEventListener("mouseleave",zt),window.addEventListener("pointermove",Bt),window.addEventListener("pointerup",kt),y.addEventListener("wheel",rt,{passive:!1}),y.addEventListener("touchstart",me,{passive:!1}),y.addEventListener("touchmove",ft,{passive:!1});let De;const A=new j,v=new j,k=()=>{if(De=requestAnimationFrame(k),C+=(L-C)*.12,q.position.z=C,te!==null&&V!==null)B.rotation.x+=(te-B.rotation.x)*.08,B.rotation.y+=(V-B.rotation.y)*.08,Math.abs(te-B.rotation.x)<.001&&Math.abs(V-B.rotation.y)<.001&&(te=null,V=null);else{const ae=(b.current.autoRotateSpeed??.15)*.003;g.current&&!st&&!xt&&(B.rotation.y+=ae),xt||(nt.x*=.94,nt.y*=.94,B.rotation.y+=nt.x,B.rotation.x+=nt.y)}const W=-B.rotation.y*180/Math.PI%360;f(W),P.render(F,q);const ne=R.current,ce=y.clientWidth,K=y.clientHeight,Z=ne.map(ae=>{const J=Ws(ae.lat,ae.lng,Q+18),$=Ws(ae.lat,ae.lng,Q);A.copy(J),B.localToWorld(A);const de=$.clone();B.localToWorld(de),v.copy(q.position).sub(de).normalize();const Te=de.clone().normalize().dot(v)>.08;A.project(q);const Fe=(A.x+1)*ce/2,re=(-A.y+1)*K/2;return{marker:ae,x:Fe,y:re,visible:Te&&A.z<1,depth:A.z}});c(Z)};k();const se=()=>{y&&(E=y.clientWidth,T=y.clientHeight,q.aspect=E/T,q.updateProjectionMatrix(),P.setSize(E,T))};return window.addEventListener("resize",se),()=>{cancelAnimationFrame(De),window.removeEventListener("resize",se),Ne.removeEventListener("pointerdown",Ot),y.removeEventListener("mouseenter",U),y.removeEventListener("mouseleave",zt),window.removeEventListener("pointermove",Bt),window.removeEventListener("pointerup",kt),y.removeEventListener("wheel",rt),y.removeEventListener("touchstart",me),y.removeEventListener("touchmove",ft),y.contains(P.domElement)&&y.removeChild(P.domElement),P.dispose(),ee.dispose(),ie.dispose(),Ce.dispose(),Ze.dispose()}},[]),o.jsxs("div",{ref:a,className:fn("relative w-full h-[520px] bg-[#030712] overflow-hidden select-none cursor-grab active:cursor-grabbing rounded-xl",s),children:[o.jsxs("div",{className:"absolute bottom-4 left-4 z-30 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 shadow-xl pointer-events-auto",children:[o.jsxs("div",{className:"relative h-9 w-9 flex items-center justify-center rounded-full bg-slate-950 border border-slate-700 shadow-inner",title:"Compass heading — points toward North",children:[o.jsxs("div",{className:"absolute inset-0 flex items-center justify-center transition-transform duration-75",style:{transform:`rotate(${u}deg)`},children:[o.jsx("div",{className:"absolute top-1.5 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[9px] border-b-rose-500"}),o.jsx("div",{className:"absolute bottom-1.5 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[9px] border-t-slate-400"}),o.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-white shadow-xs z-10"})]}),o.jsx("span",{className:"absolute top-0 text-[8px] font-extrabold text-rose-400",children:"N"}),o.jsx("span",{className:"absolute bottom-0 text-[8px] font-bold text-slate-400",children:"S"}),o.jsx("span",{className:"absolute right-0.5 text-[8px] font-bold text-slate-400",children:"E"}),o.jsx("span",{className:"absolute left-0.5 text-[8px] font-bold text-slate-400",children:"W"})]}),o.jsxs("div",{className:"text-[11px] leading-tight",children:[o.jsx("div",{className:"font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1",children:o.jsx("span",{children:"Cardinal Direction"})}),o.jsxs("div",{className:"text-[10px] text-slate-400 font-mono mt-0.5",children:["Heading: ",Math.round((u+360)%360),"°"]})]})]}),o.jsxs("div",{className:"absolute top-4 right-4 z-30 flex flex-col gap-1.5 bg-slate-900/85 backdrop-blur-md p-1.5 rounded-lg border border-slate-800 shadow-xl",children:[o.jsx("button",{type:"button",onClick:()=>h(!d),title:d?"Pause Rotation":"Resume Rotation",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:d?o.jsx(ru,{className:"h-4 w-4 text-cyan-400"}):o.jsx(au,{className:"h-4 w-4 text-emerald-400"})}),o.jsx("div",{className:"h-px bg-slate-800 my-0.5"}),o.jsx("button",{type:"button",onClick:()=>_.current(),title:"Zoom In (or use scroll wheel)",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:o.jsx(ou,{className:"h-4 w-4"})}),o.jsx("button",{type:"button",onClick:()=>M.current(),title:"Zoom Out (or use scroll wheel)",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:o.jsx(iu,{className:"h-4 w-4"})}),o.jsx("div",{className:"h-px bg-slate-800 my-0.5"}),o.jsx("button",{type:"button",onClick:()=>m.current(),title:"Reset View",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:o.jsx(Wl,{className:"h-3.5 w-3.5"})})]}),l.map(({marker:y,x:E,y:T,visible:x},w)=>{if(!x)return null;const I=y.src||`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(y.label||"tech")}`;return o.jsxs("div",{style:{position:"absolute",left:`${E}px`,top:`${T}px`,transform:"translate(-50%, -50%)",pointerEvents:"auto"},onClick:C=>{C.stopPropagation(),t==null||t(y)},onMouseEnter:()=>n==null?void 0:n(y),onMouseLeave:()=>n==null?void 0:n(null),className:"group cursor-pointer transition-transform duration-150 hover:scale-125 z-20",children:[o.jsx("div",{className:"relative flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-slate-800 border-2 border-cyan-400 shadow-[0_0_12px_rgba(77,166,255,0.7)] overflow-hidden",children:o.jsx("img",{src:I,alt:y.label||"marker",className:"h-full w-full object-cover",onError:C=>{C.target.src="https://assets.aceternity.com/avatars/1.webp"}})}),o.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none whitespace-nowrap z-30 animate-in fade-in zoom-in-95 duration-100",children:[o.jsxs("div",{className:"bg-slate-900/95 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-md shadow-xl border border-slate-700 flex flex-col items-center gap-0.5",children:[o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),o.jsx("span",{children:y.label}),y.count!==void 0&&o.jsxs("span",{className:"text-[10px] text-cyan-300",children:["(",y.count,")"]})]}),y.region&&o.jsxs("span",{className:"text-[9px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-800/60 mt-0.5",children:[y.region," Zone"]})]}),o.jsx("div",{className:"w-1.5 h-1.5 bg-slate-900 border-r border-b border-slate-700 rotate-45 -mt-1"})]})]},w)})]})},It=["https://assets.aceternity.com/avatars/1.webp","https://assets.aceternity.com/avatars/2.webp","https://assets.aceternity.com/avatars/3.webp","https://assets.aceternity.com/avatars/4.webp","https://assets.aceternity.com/avatars/5.webp","https://assets.aceternity.com/avatars/6.webp","https://assets.aceternity.com/avatars/7.webp","https://assets.aceternity.com/avatars/8.webp","https://assets.aceternity.com/avatars/9.webp","https://assets.aceternity.com/avatars/10.webp","https://assets.aceternity.com/avatars/11.webp","https://assets.aceternity.com/avatars/12.webp","https://assets.aceternity.com/avatars/13.webp"],Nl=[{lat:28.6139,lng:77.209,label:"New Delhi Depot",region:"North",city:"Delhi",src:It[4],count:12},{lat:51.5074,lng:-.1278,label:"London Tech Hub",region:"North",city:"London",src:It[1],count:2},{lat:22.5726,lng:88.3639,label:"Kolkata Fleet Center",region:"East",city:"Kolkata",src:It[5],count:10},{lat:1.3521,lng:103.8198,label:"Singapore Logistics",region:"East",city:"Singapore",src:It[11],count:3},{lat:18.5204,lng:73.8567,label:"Pune Commercial Hub",region:"West",city:"Pune",src:It[3],count:19},{lat:19.076,lng:72.8777,label:"Mumbai Terminal",region:"West",city:"Mumbai",src:It[6],count:8},{lat:25.2048,lng:55.2708,label:"Dubai Export Depot",region:"West",city:"Dubai",src:It[9],count:4},{lat:13.0827,lng:80.2707,label:"Chennai Hub",region:"South",city:"Chennai",src:It[0],count:38},{lat:12.9716,lng:77.5946,label:"Bengaluru Central",region:"South",city:"Bengaluru",src:It[1],count:24},{lat:9.9312,lng:76.2673,label:"Kochi Workshop",region:"South",city:"Kochi",src:It[2],count:15}],Pl={North:{lat:28.6139,lng:77.209},East:{lat:22.5726,lng:88.3639},West:{lat:19.5,lng:73},South:{lat:11.5,lng:78.5}},Dl={north:1,east:2,west:3,south:4},$0=({cases:i,users:e,onSelectPlace:t})=>{const[n,s]=ue.useState(null),[r,a]=ue.useState("All"),[l,c]=ue.useState(null),d=ue.useMemo(()=>{const f=[],_=new Set;let M=0;return i.forEach(m=>{const p=m.payload||{};let b=Number(p["GPS Latitude"]),R=Number(p["GPS Longitude"]),y=String(p["Dealer / Location"]||p.City||"Field Inspection").trim();const E=rs(p);if(!b||!R||isNaN(b)||isNaN(R)){const T=String(p.City||"").toLowerCase(),x=Nl.find(w=>w.label.toLowerCase().includes(T));x&&(b=x.lat,R=x.lng)}if(b&&R&&!isNaN(b)&&!isNaN(R)){const T=`${b.toFixed(2)},${R.toFixed(2)}`;_.has(T)||(_.add(T),f.push({lat:b,lng:R,label:y,region:E,src:It[M%It.length],count:1,status:p["Diagnostic Status"],city:p.City,state:p.State}),M++)}}),e.forEach(m=>{let p=Number(m.gps_latitude||m.gpsLatitude),b=Number(m.gps_longitude||m.gpsLongitude),R=m.dealer_name||m.technician_name||m.city||"Workshop";const y=rs({State:m.state});if(p&&b&&!isNaN(p)&&!isNaN(b)){const E=`${p.toFixed(2)},${b.toFixed(2)}`;_.has(E)||(_.add(E),f.push({lat:p,lng:b,label:R,region:y,src:It[M%It.length],count:m.diagnostic_count||1,city:m.city,state:m.state}),M++)}}),Nl.forEach(m=>{const p=`${m.lat.toFixed(2)},${m.lng.toFixed(2)}`;_.has(p)||(_.add(p),f.push(m))}),f},[i,e]),h=ue.useMemo(()=>[...r==="All"?d:d.filter(_=>{var M;return((M=_.region)==null?void 0:M.toLowerCase())===r.toLowerCase()})].sort((_,M)=>{var b,R;const m=Dl[((b=_.region)==null?void 0:b.toLowerCase())||""]||99,p=Dl[((R=M.region)==null?void 0:R.toLowerCase())||""]||99;return m!==p?m-p:(M.count||0)-(_.count||0)}),[d,r]),g=f=>{a(f),f!=="All"&&Pl[f]?c(Pl[f]):c({lat:20.5937,lng:78.9629})},u=f=>{switch(f==null?void 0:f.toLowerCase()){case"north":return o.jsx("span",{className:"bg-blue-950/80 text-blue-300 border border-blue-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"North (N)"});case"east":return o.jsx("span",{className:"bg-amber-950/80 text-amber-300 border border-amber-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"East (E)"});case"west":return o.jsx("span",{className:"bg-purple-950/80 text-purple-300 border border-purple-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"West (W)"});case"south":return o.jsx("span",{className:"bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"South (S)"});default:return o.jsx("span",{className:"bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-bold",children:f||"Central"})}};return o.jsxs(Ut,{className:"mb-6 overflow-hidden border-slate-800 bg-[#070b14] text-white shadow-2xl",children:[o.jsxs(en,{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800/80 bg-[#0a0f1d] px-6 py-4",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Jr,{className:"h-5 w-5 text-cyan-400"}),o.jsx(tn,{className:"text-base text-white font-bold tracking-tight",children:"Field Diagnostic Operations · 3D Earth Globe"})]}),o.jsx(nn,{className:"text-xs text-slate-400 mt-1",children:"Real-time 3D visualization of recorded GPS inspections ordered by North, East, West, and South (N-E-W-S)."})]}),o.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800",children:[o.jsxs("span",{className:"text-[10px] text-slate-400 font-bold uppercase px-2 flex items-center gap-1",children:[o.jsx(su,{className:"h-3 w-3 text-cyan-400"}),"Zones (NEWS):"]}),["All","North","East","West","South"].map(f=>o.jsx("button",{type:"button",onClick:()=>g(f),className:`px-2.5 py-1 rounded text-xs font-bold transition-all ${r===f?"bg-cyan-500 text-slate-950 shadow-xs":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:f==="All"?"All":`${f} (${f[0]})`},f))]})]}),o.jsx(sn,{className:"p-0",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 items-center",children:[o.jsxs("div",{className:"lg:col-span-8 p-4 flex flex-col items-center justify-center bg-[#030712] relative min-h-[480px]",children:[o.jsx(Y0,{markers:d,focusLocation:l,config:{atmosphereColor:"#4da6ff",atmosphereIntensity:20,bumpScale:5,autoRotateSpeed:.15},onMarkerClick:f=>{s(f),t&&(f.city||f.label)&&t(f.city||f.label)},className:"h-[480px] w-full"}),o.jsx("div",{className:"absolute bottom-3 text-center text-[11px] text-slate-500 pointer-events-none select-none",children:"Scroll wheel or pinch to zoom · Drag to spin · Click North, East, West, South (NEWS) buttons above to focus"})]}),o.jsxs("div",{className:"lg:col-span-4 p-5 border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-[#0a0f1d] flex flex-col justify-between h-full space-y-4",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsxs("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[o.jsx(Qs,{className:"h-3.5 w-3.5 text-cyan-400"}),r==="All"?"All Active Hubs":`${r} Zone Hubs`," (",h.length,")"]}),r!=="All"&&o.jsx("button",{onClick:()=>g("All"),className:"text-[10px] text-cyan-400 hover:underline",children:"View All"})]}),o.jsx("div",{className:"space-y-2 max-h-[320px] overflow-y-auto pr-1",children:h.slice(0,8).map((f,_)=>o.jsxs("div",{onClick:()=>{s(f),c({lat:f.lat,lng:f.lng}),t&&(f.city||f.label)&&t(f.city||f.label)},className:`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${(n==null?void 0:n.label)===f.label?"border-cyan-500 bg-cyan-950/40 text-cyan-200":"border-slate-800/80 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 pr-2",children:[o.jsx("div",{className:"h-7 w-7 rounded-full overflow-hidden border border-cyan-400/80 shrink-0",children:o.jsx("img",{src:f.src||It[_%It.length],alt:f.label,className:"h-full w-full object-cover"})}),o.jsxs("div",{className:"truncate",children:[o.jsx("div",{className:"font-bold text-slate-200 truncate",children:f.label}),o.jsxs("div",{className:"text-[10px] text-slate-500 font-mono",children:[f.lat.toFixed(4),", ",f.lng.toFixed(4)]})]})]}),o.jsxs("div",{className:"text-right shrink-0 flex flex-col items-end gap-1",children:[u(f.region),o.jsxs("span",{className:"font-bold text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 text-[10px]",children:[f.count," ",f.count===1?"case":"cases"]})]})]},_))})]}),n?o.jsxs("div",{className:"rounded-lg bg-cyan-950/40 p-3 border border-cyan-800/70 text-xs",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2 font-bold text-cyan-300",children:[o.jsx(Qs,{className:"h-3.5 w-3.5 text-cyan-400 shrink-0"}),o.jsx("span",{children:n.label})]}),o.jsxs("a",{href:`https://www.google.com/maps?q=${n.lat},${n.lng}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:underline",children:["Google Maps",o.jsx(Vl,{className:"h-3 w-3"})]})]}),o.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 mt-1",children:[o.jsxs("span",{className:"font-mono",children:["GPS: ",n.lat.toFixed(4),", ",n.lng.toFixed(4)]}),n.region&&o.jsxs("span",{className:"text-cyan-300 font-semibold",children:[n.region," Zone"]})]})]}):o.jsxs("div",{className:"rounded-lg bg-slate-900/60 p-2.5 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[o.jsx("span",{children:"Click any hub or zone to rotate the Earth"}),o.jsx(Jr,{className:"h-3.5 w-3.5 text-slate-500"})]})]})]})})]})};function ts({className:i,variant:e="default",...t}){const n={default:"bg-blue-100 text-blue-800 border-blue-200",success:"bg-emerald-100 text-emerald-800 border-emerald-200",destructive:"bg-rose-100 text-rose-800 border-rose-200",warning:"bg-amber-100 text-amber-900 border-amber-200",secondary:"bg-slate-100 text-slate-800 border-slate-200",outline:"text-slate-800 border-slate-300"};return o.jsx("div",{className:fn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors whitespace-nowrap",n[e],i),...t})}const K0=({cases:i,pagination:e,loading:t,onPageChange:n,onFilterChange:s,onViewCase:r,onDeleteCases:a,statusFilterValue:l=""})=>{const[c,d]=ue.useState(!1),[h,g]=ue.useState(new Set),[u,f]=ue.useState(!1),[_,M]=ue.useState(""),[m,p]=ue.useState(l),[b,R]=ue.useState(""),[y,E]=ue.useState(""),[T,x]=ue.useState(""),[w,I]=ue.useState(""),[C,L]=ue.useState(""),[F,q]=ue.useState(""),[P,B]=ue.useState("");Ul.useEffect(()=>{p(l)},[l]);const Y=(ie={})=>{const O={search:_,status:m,region:b,manufacturer:y,language:T,feedback:w,kmRange:C,dateFrom:F,dateTo:P,...ie};s(O)},H=ie=>{ie.preventDefault(),Y()},te=()=>{M(""),p(""),R(""),E(""),x(""),I(""),L(""),q(""),B(""),s({search:"",status:"",region:"",manufacturer:"",language:"",feedback:"",kmRange:"",dateFrom:"",dateTo:""})},V=ie=>{g(ie?new Set(i.map(O=>O.id)):new Set)},Q=ie=>{const O=new Set(h);O.has(ie)?O.delete(ie):O.add(ie),g(O)},ee=async()=>{if(h.size!==0&&window.confirm(`Are you sure you want to delete ${h.size} diagnostic report${h.size===1?"":"s"}? This cannot be undone.`)){f(!0);try{await a(Array.from(h)),g(new Set)}finally{f(!1)}}},be=ie=>{const O=as(ie);return O==="FAULT FOUND"?o.jsx(ts,{variant:"destructive",children:"Fault Found"}):O==="WORKING SATISFACTORY"?o.jsx(ts,{variant:"success",children:"Satisfactory"}):O==="INCOMPLETE"?o.jsx(ts,{variant:"warning",children:"Incomplete"}):o.jsx(ts,{variant:"secondary",children:O})};return o.jsxs(Ut,{className:"mb-6",children:[o.jsxs(en,{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100",children:[o.jsxs("div",{children:[o.jsx(tn,{children:"Case Explorer"}),o.jsx(nn,{children:"Search and manage vehicle diagnostic reports submitted by field technicians."})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[h.size>0&&o.jsxs(pt,{variant:"danger",size:"sm",disabled:u,onClick:ee,className:"text-xs",children:[o.jsx(Xl,{className:"h-3.5 w-3.5 mr-1"}),"Delete Selected (",h.size,")"]}),o.jsxs(pt,{variant:"outline",size:"sm",onClick:()=>d(!c),className:"text-xs",children:[o.jsx(Qd,{className:"h-3.5 w-3.5 mr-1.5 text-slate-500"}),"Filters",o.jsx(Wd,{className:`h-3.5 w-3.5 ml-1 transition-transform ${c?"rotate-180":""}`})]})]})]}),o.jsxs(sn,{className:"pt-4",children:[o.jsxs("form",{onSubmit:H,className:"flex gap-2 mb-3",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(jl,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),o.jsx(jt,{value:_,onChange:ie=>M(ie.target.value),placeholder:"Search by Case ID, Chassis No, Registration, Dealer, or Technician...",className:"pl-9 h-9 text-xs"})]}),o.jsx(pt,{type:"submit",size:"sm",className:"h-9 px-4 text-xs font-semibold",children:"Search"}),(_||m||b||y||T||w||C||F||P)&&o.jsxs(pt,{type:"button",variant:"ghost",size:"sm",onClick:te,className:"h-9 text-xs text-slate-500 hover:text-slate-800",children:[o.jsx(Wl,{className:"h-3.5 w-3.5 mr-1"}),"Reset"]})]}),c&&o.jsxs("div",{className:"mb-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs animate-in fade-in duration-150",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Status"}),o.jsxs(gn,{value:m,onChange:ie=>{p(ie.target.value),Y({status:ie.target.value})},className:"h-8 text-xs bg-white",children:[o.jsx("option",{value:"",children:"All statuses"}),o.jsx("option",{value:"FAULT FOUND",children:"FAULT FOUND"}),o.jsx("option",{value:"WORKING SATISFACTORY",children:"WORKING SATISFACTORY"}),o.jsx("option",{value:"INCOMPLETE",children:"INCOMPLETE"}),o.jsx("option",{value:"REFERRED_FOR_REPLACEMENT",children:"REFERRED FOR REPLACEMENT"}),o.jsx("option",{value:"VERIFICATION_PENDING",children:"VERIFICATION PENDING"}),o.jsx("option",{value:"CLOSED",children:"CLOSED"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Region"}),o.jsxs(gn,{value:b,onChange:ie=>{R(ie.target.value),Y({region:ie.target.value})},className:"h-8 text-xs bg-white",children:[o.jsx("option",{value:"",children:"All regions"}),o.jsx("option",{value:"North",children:"North (N)"}),o.jsx("option",{value:"East",children:"East (E)"}),o.jsx("option",{value:"West",children:"West (W)"}),o.jsx("option",{value:"South",children:"South (S)"}),o.jsx("option",{value:"Central",children:"Central"}),o.jsx("option",{value:"Other",children:"Other"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Vehicle OEM"}),o.jsxs(gn,{value:y,onChange:ie=>{E(ie.target.value),Y({manufacturer:ie.target.value})},className:"h-8 text-xs bg-white",children:[o.jsx("option",{value:"",children:"All manufacturers"}),o.jsx("option",{value:"ASHOK LEYLAND",children:"ASHOK LEYLAND"}),o.jsx("option",{value:"TATA MOTORS",children:"TATA MOTORS"}),o.jsx("option",{value:"VECV",children:"VECV"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Diagnostic Language"}),o.jsxs(gn,{value:T,onChange:ie=>{x(ie.target.value),Y({language:ie.target.value})},className:"h-8 text-xs bg-white",children:[o.jsx("option",{value:"",children:"All languages"}),o.jsx("option",{value:"English",children:"English"}),o.jsx("option",{value:"Tamil",children:"Tamil"}),o.jsx("option",{value:"Malayalam",children:"Malayalam"}),o.jsx("option",{value:"Hindi",children:"Hindi"}),o.jsx("option",{value:"Telugu",children:"Telugu"}),o.jsx("option",{value:"Kannada",children:"Kannada"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Feedback Rating"}),o.jsxs(gn,{value:w,onChange:ie=>{I(ie.target.value),Y({feedback:ie.target.value})},className:"h-8 text-xs bg-white",children:[o.jsx("option",{value:"",children:"All feedback"}),o.jsx("option",{value:"5",children:"5 / 5 ★"}),o.jsx("option",{value:"4",children:"4 / 5 ★"}),o.jsx("option",{value:"3",children:"3 / 5 ★"}),o.jsx("option",{value:"2",children:"2 / 5 ★"}),o.jsx("option",{value:"1",children:"1 / 5 ★"}),o.jsx("option",{value:"none",children:"Not provided"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Odometer / KM"}),o.jsxs(gn,{value:C,onChange:ie=>{L(ie.target.value),Y({kmRange:ie.target.value})},className:"h-8 text-xs bg-white",children:[o.jsx("option",{value:"",children:"All KM ranges"}),o.jsx("option",{value:"0-50000",children:"0 – 50,000 km"}),o.jsx("option",{value:"50001-100000",children:"50,001 – 100,000 km"}),o.jsx("option",{value:"100001-plus",children:"100,001+ km"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"From Date"}),o.jsx("input",{type:"date",value:F,onChange:ie=>{q(ie.target.value),Y({dateFrom:ie.target.value})},className:"h-8 w-full rounded-md border border-slate-300 bg-white px-2 text-xs"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"To Date"}),o.jsx("input",{type:"date",value:P,onChange:ie=>{B(ie.target.value),Y({dateTo:ie.target.value})},className:"h-8 w-full rounded-md border border-slate-300 bg-white px-2 text-xs"})]})]}),o.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:o.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[o.jsx("thead",{className:"bg-slate-50/80 text-slate-700 font-semibold border-b border-slate-200",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3 w-10",children:o.jsx("input",{type:"checkbox",checked:i.length>0&&h.size===i.length,onChange:ie=>V(ie.target.checked),className:"h-4 w-4 rounded border-slate-300 text-[#0b5daa] focus:ring-[#0b5daa]"})}),o.jsx("th",{className:"p-3",children:"Case ID"}),o.jsx("th",{className:"p-3",children:"Date"}),o.jsx("th",{className:"p-3",children:"Status"}),o.jsx("th",{className:"p-3",children:"Technician"}),o.jsx("th",{className:"p-3",children:"Vehicle"}),o.jsx("th",{className:"p-3",children:"Language"}),o.jsx("th",{className:"p-3",children:"Dealer"}),o.jsx("th",{className:"p-3",children:"Part Recommendation"}),o.jsx("th",{className:"p-3 text-right",children:"Actions"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100 bg-white",children:t?o.jsx("tr",{children:o.jsx("td",{colSpan:10,className:"p-8 text-center text-slate-400",children:"Loading diagnostic records..."})}):i.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:10,className:"p-8 text-center text-slate-400",children:"No matching diagnostic reports found."})}):i.map(ie=>{const O=ie.payload||{},oe=h.has(ie.id),xe=ie.case_number||O["Diagnostic Case ID"]||ie.id.substring(0,8),Ae=O["FSE Name"]||"-",pe=O["Vehicle Registration No."]||O["Chassis No."]||"-",Ce=O["Diagnostic Language Name"]||O["Diagnostic Language"]||"English",Ze=O["Dealer / Location"]||"-",Re=O["Recommended Part No."]||O["Suspected Product"]||"-",He=O["Replacement Status"]||"NOT_REQUIRED";return o.jsxs("tr",{className:`hover:bg-slate-50/70 transition-colors ${oe?"bg-blue-50/40":""}`,children:[o.jsx("td",{className:"p-3",children:o.jsx("input",{type:"checkbox",checked:oe,onChange:()=>Q(ie.id),className:"h-4 w-4 rounded border-slate-300 text-[#0b5daa] focus:ring-[#0b5daa]"})}),o.jsx("td",{className:"p-3 font-semibold text-slate-900",children:xe}),o.jsx("td",{className:"p-3 text-slate-500 whitespace-nowrap",children:new Date(ie.created_at).toLocaleDateString()}),o.jsx("td",{className:"p-3",children:be(O)}),o.jsx("td",{className:"p-3 text-slate-700 font-medium",children:Ae}),o.jsxs("td",{className:"p-3 text-slate-700",children:[o.jsx("div",{className:"font-mono font-semibold text-slate-900 text-[11px]",children:pe}),O["Travels Name"]&&o.jsx("div",{className:"text-[10px] font-semibold text-[#0b5daa] mt-0.5 truncate max-w-[140px]",title:O["Travels Name"],children:O["Travels Name"]})]}),o.jsx("td",{className:"p-3 text-slate-500",children:Ce}),o.jsx("td",{className:"p-3 text-slate-600 max-w-[140px] truncate",title:Ze,children:Ze}),o.jsxs("td",{className:"p-3 text-slate-700",children:[o.jsx("div",{className:"font-medium truncate max-w-[160px]",title:Re,children:Re}),o.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider",children:He})]}),o.jsx("td",{className:"p-3 text-right",children:o.jsxs(pt,{variant:"secondary",size:"sm",onClick:()=>r(ie.id),className:"h-7 px-2.5 text-[11px] font-semibold",children:[o.jsx(Vl,{className:"h-3 w-3 mr-1 text-[#0b5daa]"}),"View"]})})]},ie.id)})})]})}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 text-xs text-slate-500",children:[o.jsxs("div",{children:["Showing Page ",o.jsx("span",{className:"font-semibold text-slate-800",children:e.page})," of"," ",o.jsx("span",{className:"font-semibold text-slate-800",children:e.totalPages||1})," (",o.jsx("span",{className:"font-semibold text-slate-800",children:e.total})," total reports)"]}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsxs(pt,{variant:"outline",size:"sm",disabled:e.page<=1||t,onClick:()=>n(e.page-1),className:"h-8 px-2.5 text-xs",children:[o.jsx(jd,{className:"h-3.5 w-3.5 mr-1"}),"Previous"]}),o.jsxs(pt,{variant:"outline",size:"sm",disabled:e.page>=(e.totalPages||1)||t,onClick:()=>n(e.page+1),className:"h-8 px-2.5 text-xs",children:["Next",o.jsx(Xd,{className:"h-3.5 w-3.5 ml-1"})]})]})]})]})]})};function Va({isOpen:i,onClose:e,title:t,description:n,children:s,maxWidth:r="2xl"}){if(ue.useEffect(()=>{function l(c){c.key==="Escape"&&e()}return i?(document.body.style.overflow="hidden",window.addEventListener("keydown",l)):document.body.style.overflow="",()=>{document.body.style.overflow="",window.removeEventListener("keydown",l)}},[i,e]),!i)return null;const a={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl","5xl":"max-w-5xl"}[r];return o.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[o.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity",onClick:e}),o.jsxs("div",{className:fn("relative z-50 max-h-[90vh] w-full overflow-hidden rounded-xl bg-white shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150",a),children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 px-6 py-4",children:[o.jsxs("div",{children:[t&&o.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:t}),n&&o.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:n})]}),o.jsx("button",{onClick:e,className:"rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors",children:o.jsx(mu,{className:"h-5 w-5"})})]}),o.jsx("div",{className:"overflow-y-auto p-6",children:s})]})]})}function mt(i){return String(i??"").replace(/[&<>'"]/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case"'":return"&#39;";case'"':return"&quot;";default:return e}})}function ro(i){return String(i||"-").replace(/<br\s*\/?>/gi," ").replace(/<[^>]*>/g,"").trim()}function Gc(i){if(Array.isArray(i==null?void 0:i["Diagnostic Fault Details"])&&i["Diagnostic Fault Details"].length)return i["Diagnostic Fault Details"];if((i==null?void 0:i["Diagnostic Status"])==="WORKING SATISFACTORY")return[{action:"Retarder is working satisfactorily."}];const e=ro(i==null?void 0:i["Customer Voice / Field Complaints reported"]);return e&&e!=="-"?e.split(/(?=Root Cause:)/i).map(t=>({action:t.trim()})).filter(t=>t.action&&t.action!=="-"):[]}function Hc(i){return Array.isArray(i)?i.map((e,t)=>({key:e.key||`step_${t+1}`,question:ro(e.question||e.key||e.title||`Diagnostic Step ${t+1}`),response:e.response||e.result||"-",evidence:e.evidence})):[]}function Z0(i){const e=i.payload||{},t=i.case_number||e["Diagnostic Case ID"]||"Diagnostic Case",n=as(e),s=n==="WORKING SATISFACTORY"?"status-ok":n==="FAULT FOUND"?"status-fault":"status-incomplete",r=i.created_at?new Date(i.created_at).toLocaleString():new Date().toLocaleString(),a=e.Region||rs(e),l=ja(e),c=Gc(e),d=Hc(e["Diagnostic Step History"]),h=e["Step Evidence"]||{},g=Array.isArray(i.part_orders)?i.part_orders:[],u=(b,R)=>`
    <div class="detail-item">
      <small>${mt(b)}</small>
      <strong>${mt(R||"—")}</strong>
    </div>
  `;let f="";c.length?f=c.map(b=>{const R=b.title?`<strong>${mt(b.title)}</strong><br>`:"",y=mt(ro(b.action||b.title||"-")).replace(/(Root Cause:)/gi,'<strong style="color:#b91c1c;">$1</strong>').replace(/(Corrective Action:)/gi,'<strong style="color:#1e3a8a;">$1</strong>'),E=b.partNo||e["Recommended Part No."],T=E&&E!=="-"&&E!=="None"?`<p class="recommendation"><strong>Recommended Part:</strong> ${mt(b.brand?`${b.brand} ${E}`:E)}</p>`:"";return`
          <div class="fault-entry">
            <div class="fault-text">${R}${y}</div>
            ${T}
          </div>
        `}).join(""):f='<div class="fault-text">No fault details recorded.</div>';let _="";const M=Object.entries(h);M.length>0&&(_=`
      <div class="detail-section">
        <h3>Failed-Step Evidence</h3>
        <div class="evidence-grid">
          ${M.map(([b,R])=>`
              <figure class="evidence-card">
                <img src="${mt(R.dataUrl||"")}" alt="Evidence for ${mt(b)}" />
                <figcaption>${mt(b)}</figcaption>
              </figure>
            `).join("")}
        </div>
      </div>
    `);let m="";d.length>0&&(m=d.map((b,R)=>{const y=String(b.response||"-"),E=y.toLowerCase()==="yes",T=y.toLowerCase()==="no",x=E?"resp-yes":T?"resp-no":"";return`
          <tr>
            <td style="text-align:center; font-weight:bold; color:#64748b;">${String(R+1).padStart(2,"0")}</td>
            <td>${mt(b.question)}</td>
            <td class="${x}">${mt(y)}</td>
          </tr>
        `}).join(""));let p="";return g.length>0&&(p=`
      <div class="detail-section">
        <h3>Part Order Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Part Number</th>
              <th>Portal</th>
              <th>Technician</th>
              <th>Phone</th>
              <th>Notification</th>
            </tr>
          </thead>
          <tbody>
            ${g.map(b=>{const R=b.payload||{};return`
                  <tr>
                    <td>${mt(new Date(b.createdAt).toLocaleString())}</td>
                    <td><strong>${mt(b.partNo||R.partNo||"-")}</strong></td>
                    <td>${mt(b.portal||"-")}</td>
                    <td>${mt(R.technicianName||"-")}</td>
                    <td>${mt(R.phoneNumber||"-")}</td>
                    <td>${mt(b.whatsappStatus||"Recorded")}</td>
                  </tr>
                `}).join("")}
          </tbody>
        </table>
      </div>
    `),`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${mt(t)} - Retarder IQ Diagnostic Report</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 14mm;
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #172033;
      background: #ffffff;
      margin: 0;
      padding: 0;
      line-height: 1.45;
      font-size: 13px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .report-container {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    }
    /* Header */
    .report-header {
      position: relative;
      padding: 0 0 16px;
      border-bottom: 3px solid #0b5daa;
      margin-bottom: 20px;
    }
    .report-header h2 {
      margin: 0;
      color: #0b5daa;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.3px;
    }
    .report-header p {
      margin: 6px 0 0;
      color: #64748b;
      font-size: 12px;
    }
    .report-case {
      position: absolute;
      right: 0;
      top: 4px;
      color: #0b5daa;
      font-size: 13px;
      font-weight: 800;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 3px 10px;
      border-radius: 6px;
    }
    /* Info Card */
    .report-info-card {
      padding: 20px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      background: #f8fafc;
      margin-bottom: 18px;
      page-break-inside: avoid;
    }
    .report-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .report-columns h3, .report-summary h3 {
      margin: 0 0 12px;
      padding-bottom: 6px;
      border-bottom: 1px solid #dbeafe;
      color: #0b5daa;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .report-summary {
      margin-top: 18px;
      padding: 16px;
      border: 1px solid #dbeafe;
      border-radius: 10px;
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      page-break-inside: avoid;
    }
    .outcome-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 800;
      font-size: 12px;
      text-transform: uppercase;
    }
    .status-ok {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #86efac;
    }
    .status-fault {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #fca5a5;
    }
    .status-incomplete {
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fcd34d;
    }
    .fault-entry {
      margin-bottom: 10px;
    }
    .fault-text {
      border-left: 4px solid #ef4444;
      padding-left: 12px;
      color: #991b1b;
      font-size: 12px;
      line-height: 1.5;
    }
    .recommendation {
      color: #7c2d12;
      font-size: 12px;
      margin: 8px 0 0;
      background: #fff7ed;
      padding: 6px 10px;
      border-radius: 6px;
      border: 1px solid #ffedd5;
    }
    /* Section & Grids */
    .detail-section {
      margin-top: 18px;
      page-break-inside: avoid;
    }
    .detail-section h3 {
      font-size: 12px;
      text-transform: uppercase;
      color: #475569;
      margin: 0 0 10px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .detail-item {
      padding: 10px 12px;
      border: 1px solid #dbe4ef;
      border-radius: 8px;
      background: #ffffff;
    }
    .detail-item small {
      display: block;
      color: #64748b;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .detail-item strong {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: #1e293b;
      overflow-wrap: anywhere;
    }
    .detail-callout {
      padding: 12px 14px;
      background: #fff7ed;
      border: 1px solid #fed7aa;
      border-radius: 8px;
      font-size: 12px;
      line-height: 1.5;
      color: #7c2d12;
    }
    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      margin-top: 8px;
      page-break-inside: auto;
    }
    tr {
      page-break-inside: avoid;
    }
    th, td {
      padding: 8px 12px;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
    }
    th {
      background: #f1f5f9;
      color: #475569;
      font-weight: 700;
      font-size: 11px;
      text-transform: uppercase;
    }
    .resp-yes {
      color: #166534;
      font-weight: 700;
    }
    .resp-no {
      color: #dc2626;
      font-weight: 700;
    }
    /* Evidence */
    .evidence-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .evidence-card {
      margin: 0;
      border: 1px solid #dbe4ef;
      border-radius: 8px;
      overflow: hidden;
      background: #ffffff;
    }
    .evidence-card img {
      width: 100%;
      aspect-ratio: 4/3;
      object-fit: cover;
      display: block;
    }
    .evidence-card figcaption {
      padding: 6px 10px;
      font-size: 11px;
      font-weight: 700;
      color: #334155;
    }
    .report-footer {
      margin-top: 30px;
      padding-top: 14px;
      border-top: 1px dashed #cbd5e1;
      text-align: center;
      color: #94a3b8;
      font-size: 11px;
    }
  </style>
</head>
<body>
  <div class="report-container">
    <!-- Header -->
    <div class="report-header">
      <h2>RETARDER IQ – Diagnostic Report</h2>
      <p>Generated on: ${mt(r)}</p>
      <span class="report-case">${mt(t)}</span>
    </div>

    <!-- Technician & Vehicle Information -->
    <div class="report-info-card">
      <div class="report-columns">
        <div>
          <h3>TECHNICIAN DETAILS</h3>
          ${u("Name",e["FSE Name"])}
          ${u("Phone",e["Technician Phone"])}
          ${u("Workshop / Dealer",e["Dealer / Location"])}
          ${u("Location",[e.City,e.State].filter(Boolean).join(", "))}
          ${u("Region",a)}
        </div>
        <div>
          <h3>VEHICLE DETAILS</h3>
          ${u("Registration No.",e["Vehicle Registration No."])}
          ${u("Vehicle Manufacturer",l)}
          ${u("Model",e.Model)}
          ${u("Odometer / Sale Date",e["Odometer Km"]||e["Kms & Date of Sale"])}
          ${u("Chassis No.",e["Chassis No."])}
          ${u("Emission Standard",e["Emission Standard"])}
        </div>
      </div>

      <!-- Diagnostic Summary & Fault Details -->
      <div class="report-summary">
        <div>
          <h3>DIAGNOSTIC SUMMARY</h3>
          <p style="margin: 0 0 10px;">
            <strong style="margin-right: 6px;">Outcome:</strong>
            <span class="outcome-pill ${s}">${mt(n)}</span>
          </p>
          ${u("Session State",e["Session State"])}
          ${u("Current Step",e["Diagnostic Current Step Label"]||e["Diagnostic Current Step"])}
          ${u("Duration",e["Diagnostic Duration"])}
          ${u("Date Attended",e["Complaint Attended on"]||r)}
          ${u("Language Used",e["Diagnostic Language Name"])}
        </div>
        <div>
          <h3>FAULT DETAILS</h3>
          ${f}
        </div>
      </div>
    </div>

    <!-- Additional Diagnostic Details -->
    <div class="detail-section">
      <h3>Additional Diagnostic Details</h3>
      <div class="detail-grid">
        ${u("Complaint Type",e["Complaint Type"])}
        ${u("Suspected Product",e["Suspected Product"])}
        ${u("Emission Standard",e["Emission Standard"])}
        ${u("Under Warranty?",e["Vehicle under warranty period?"])}
        ${u("Repeat Complaint?",e["Repeat complaint? Yes / No"])}
        ${u("Region",a)}
      </div>
    </div>

    <!-- Customer Voice / Field Complaint -->
    ${e["Customer Voice / Field Complaints reported"]?`
      <div class="detail-section">
        <h3>Technician Finding</h3>
        <div class="detail-callout">
          <strong>Customer voice / field complaint:</strong> ${mt(e["Customer Voice / Field Complaints reported"])}
        </div>
      </div>
    `:""}

    <!-- Failed-step Evidence Photos -->
    ${_}

    <!-- Step History Table -->
    <div class="detail-section">
      <h3>Step History</h3>
      ${d.length>0?`
        <table>
          <thead>
            <tr>
              <th style="width: 45px; text-align: center;">#</th>
              <th>Diagnostic Question</th>
              <th style="width: 90px;">Response</th>
            </tr>
          </thead>
          <tbody>
            ${m}
          </tbody>
        </table>
      `:'<p style="color: #94a3b8; font-style: italic; margin-top: 6px;">No step-by-step history was recorded for this session.</p>'}
    </div>

    <!-- Part Orders -->
    ${p}

    <!-- Footer -->
    <div class="report-footer">
      Generated by Retarder IQ Field Diagnostic System · Brakes India Private Limited
    </div>
  </div>
</body>
</html>`}function J0(i){var s;const e=Z0(i);let t=document.getElementById("riq-report-print-frame");t||(t=document.createElement("iframe"),t.id="riq-report-print-frame",t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",t.style.opacity="0",t.style.pointerEvents="none",document.body.appendChild(t));const n=(s=t.contentWindow)==null?void 0:s.document;if(!n){const r=window.open("","_blank");r&&(r.document.write(e),r.document.close(),r.focus(),setTimeout(()=>{r.print(),r.close()},350));return}n.open(),n.write(e),n.close(),setTimeout(()=>{var r,a;try{(r=t==null?void 0:t.contentWindow)==null||r.focus(),(a=t==null?void 0:t.contentWindow)==null||a.print()}catch(l){console.error("Failed to trigger iframe print, opening window fallback:",l);const c=window.open("","_blank");c&&(c.document.write(e),c.document.close(),c.focus(),c.print())}},250)}const Q0=({caseItem:i,isOpen:e,onClose:t,onCaseUpdated:n})=>{const[s,r]=ue.useState(!1),[a,l]=ue.useState(""),[c,d]=ue.useState(""),[h,g]=ue.useState(null);if(!i)return null;const u=i.payload||{},f=as(u),_=a||u.Region||rs(u),M=i.case_number||u["Diagnostic Case ID"]||"Diagnostic Case",m=ja(u),p=i.created_at?new Date(i.created_at).toLocaleString():new Date().toLocaleString(),b=Gc(u),R=Hc(u["Diagnostic Step History"]),y=u["Step Evidence"]||{},E=Array.isArray(i.part_orders)?i.part_orders:[],T=async()=>{if(_){r(!0),d("Saving…");try{await Vt.updateCaseRegion(i.id,_),i.payload.Region=_,d("Saved!"),n(),setTimeout(()=>d(""),2500)}catch(C){console.error("Failed to update region:",C),d(C.message||"Error saving")}finally{r(!1)}}},x=()=>{J0(i)},w=()=>f==="WORKING SATISFACTORY"?o.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300",children:[o.jsx(qd,{className:"h-3.5 w-3.5 text-emerald-600"}),f]}):f==="FAULT FOUND"?o.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300",children:[o.jsx(ql,{className:"h-3.5 w-3.5 text-rose-600"}),f]}):o.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300",children:[o.jsx($d,{className:"h-3.5 w-3.5 text-amber-600"}),f]}),I=(C,L)=>o.jsxs("div",{className:"bg-white p-2.5 rounded-lg border border-slate-200",children:[o.jsx("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider",children:C}),o.jsx("div",{className:"text-xs font-semibold text-slate-800 mt-0.5 break-words",children:L||"—"})]});return o.jsxs(o.Fragment,{children:[o.jsx(Va,{isOpen:e,onClose:t,maxWidth:"4xl",children:o.jsxs("div",{className:"space-y-5 text-slate-800",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("label",{className:"text-xs font-bold text-slate-700 whitespace-nowrap",children:"Admin Region:"}),o.jsxs("select",{value:_,onChange:C=>l(C.target.value),className:"h-8 text-xs bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 px-2 focus:ring-1 focus:ring-[#0b5daa] focus:outline-none",children:[o.jsx("option",{value:"North",children:"North (N)"}),o.jsx("option",{value:"East",children:"East (E)"}),o.jsx("option",{value:"West",children:"West (W)"}),o.jsx("option",{value:"South",children:"South (S)"}),o.jsx("option",{value:"Central",children:"Central"}),o.jsx("option",{value:"Other",children:"Other"})]}),o.jsx(pt,{variant:"outline",size:"sm",onClick:T,disabled:s,className:"h-8 text-xs px-2.5 font-semibold text-slate-700 bg-white",children:"Save"}),c&&o.jsx("span",{className:"text-xs font-semibold text-[#0b5daa] ml-1",children:c})]}),o.jsxs(pt,{variant:"default",size:"sm",onClick:x,className:"h-8 text-xs font-bold bg-[#0b5daa] hover:bg-[#084885] text-white shadow-xs",children:[o.jsx(lu,{className:"h-3.5 w-3.5 mr-1.5"}),"Print / Export PDF"]})]}),o.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-5",children:[o.jsxs("div",{className:"relative pb-4 border-b-2 border-[#0b5daa] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl font-extrabold text-[#0b5daa] tracking-tight",children:"RETARDER IQ – Diagnostic Report"}),o.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:["Generated on: ",o.jsx("span",{className:"font-semibold text-slate-700",children:p})]})]}),o.jsx("div",{className:"self-start sm:self-auto bg-blue-50 text-[#0b5daa] border border-blue-200 px-3 py-1 rounded-lg text-xs font-extrabold tracking-wide",children:M})]}),o.jsxs("div",{className:"rounded-xl border-2 border-slate-200 bg-slate-50/70 p-4 space-y-4",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"TECHNICIAN DETAILS"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I("Name",u["FSE Name"]),I("Phone",u["Technician Phone"]),I("Workshop / Dealer",u["Dealer / Location"]),I("Location",[u.City,u.State].filter(Boolean).join(", ")),I("Region",_)]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"VEHICLE DETAILS"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I("Registration No.",u["Vehicle Registration No."]),I("Travels / Fleet Name",u["Travels Name"]),I("Vehicle Manufacturer",m),I("Model",u.Model),I("Odometer / Sale Date",u["Odometer Km"]||u["Kms & Date of Sale"]),I("Chassis No.",u["Chassis No."]),I("Emission Standard",u["Emission Standard"])]})]})]}),o.jsxs("div",{className:"rounded-xl border border-blue-100 bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"DIAGNOSTIC SUMMARY"}),o.jsxs("div",{className:"mb-2",children:[o.jsx("span",{className:"text-xs font-bold text-slate-600 mr-2",children:"Outcome:"}),w()]}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I("Session State",u["Session State"]),I("Current Step",u["Diagnostic Current Step Label"]||u["Diagnostic Current Step"]),I("Duration",u["Diagnostic Duration"]),I("Date Attended",u["Complaint Attended on"]||p),I("Language Used",u["Diagnostic Language Name"])]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"FAULT DETAILS"}),b.length?b.map((C,L)=>o.jsxs("div",{className:"p-3 rounded-lg border-l-4 border-l-rose-500 bg-rose-50/50 border border-rose-200/60 text-xs space-y-1.5",children:[C.title&&o.jsx("div",{className:"font-bold text-slate-900",children:C.title}),o.jsx("div",{className:"text-rose-950 whitespace-pre-line leading-relaxed font-medium",children:C.action}),(C.partNo||u["Recommended Part No."])&&o.jsxs("div",{className:"mt-2 text-xs font-semibold text-amber-900 bg-amber-100/70 p-2 rounded border border-amber-200",children:[o.jsx("strong",{children:"Recommended Part:"})," ",C.brand?`${C.brand} `:"",C.partNo||u["Recommended Part No."]]})]},L)):o.jsx("div",{className:"p-3 text-xs text-slate-500 italic bg-slate-50 rounded-lg",children:"No fault details recorded."})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Additional Diagnostic Details"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[I("Complaint Type",u["Complaint Type"]),I("Suspected Product",u["Suspected Product"]),I("Emission Standard",u["Emission Standard"]),I("Under Warranty?",u["Vehicle under warranty period?"]),I("Repeat Complaint?",u["Repeat complaint? Yes / No"]),I("Region",_)]})]}),u["Customer Voice / Field Complaints reported"]&&o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Technician Finding"}),o.jsxs("div",{className:"p-3.5 rounded-lg border border-amber-200 bg-amber-50 text-xs text-amber-950 leading-relaxed",children:[o.jsx("strong",{className:"block text-amber-900 mb-1",children:"Customer voice / field complaint:"}),u["Customer Voice / Field Complaints reported"]]})]}),Object.keys(y).length>0&&o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Failed-Step Evidence"}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:Object.entries(y).map(([C,L])=>o.jsxs("div",{onClick:()=>g({src:L.dataUrl,alt:C}),className:"group cursor-pointer rounded-lg border border-slate-200 overflow-hidden bg-slate-50 hover:shadow-md transition-all",children:[o.jsx("img",{src:L.dataUrl,alt:`Evidence for ${C}`,className:"w-full h-32 object-cover group-hover:scale-105 transition-transform"}),o.jsx("div",{className:"p-2 text-[11px] font-bold text-slate-700 bg-white truncate",children:C})]},C))})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Step History"}),R.length>0?o.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:o.jsxs("table",{className:"w-full text-xs text-left",children:[o.jsx("thead",{className:"bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200",children:o.jsxs("tr",{children:[o.jsx("th",{className:"px-3 py-2 text-center w-12",children:"#"}),o.jsx("th",{className:"px-3 py-2",children:"Diagnostic Question"}),o.jsx("th",{className:"px-3 py-2 w-24",children:"Response"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100",children:R.map((C,L)=>{const F=String(C.response||"").toLowerCase()==="yes",q=String(C.response||"").toLowerCase()==="no";return o.jsxs("tr",{className:"hover:bg-slate-50/80",children:[o.jsx("td",{className:"px-3 py-2 text-center text-slate-400 font-mono",children:String(L+1).padStart(2,"0")}),o.jsx("td",{className:"px-3 py-2 text-slate-800 font-medium",children:C.question}),o.jsx("td",{className:`px-3 py-2 font-bold ${F?"text-emerald-700":q?"text-rose-700":"text-slate-600"}`,children:C.response})]},L)})})]})}):o.jsx("div",{className:"p-3 text-xs text-slate-400 italic bg-slate-50 rounded-lg",children:"No step-by-step history was recorded for this session."})]}),E.length>0&&o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Part Order Requests"}),o.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:o.jsxs("table",{className:"w-full text-xs text-left",children:[o.jsx("thead",{className:"bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200",children:o.jsxs("tr",{children:[o.jsx("th",{className:"px-3 py-2",children:"Date"}),o.jsx("th",{className:"px-3 py-2",children:"Part Number"}),o.jsx("th",{className:"px-3 py-2",children:"Portal"}),o.jsx("th",{className:"px-3 py-2",children:"Technician"}),o.jsx("th",{className:"px-3 py-2",children:"Phone"}),o.jsx("th",{className:"px-3 py-2",children:"Notification"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100",children:E.map((C,L)=>{const F=C.payload||{};return o.jsxs("tr",{className:"hover:bg-slate-50/80",children:[o.jsx("td",{className:"px-3 py-2 text-slate-500",children:new Date(C.createdAt).toLocaleString()}),o.jsx("td",{className:"px-3 py-2 font-bold text-slate-900",children:C.partNo||F.partNo||"—"}),o.jsx("td",{className:"px-3 py-2 text-slate-600",children:C.portal||"—"}),o.jsx("td",{className:"px-3 py-2 text-slate-800",children:F.technicianName||"—"}),o.jsx("td",{className:"px-3 py-2 text-slate-600",children:F.phoneNumber||"—"}),o.jsx("td",{className:"px-3 py-2 font-semibold text-emerald-700",children:C.whatsappStatus||"Recorded"})]},L)})})]})})]}),o.jsxs("details",{className:"text-xs text-slate-500 rounded-lg border border-slate-200 bg-slate-50 p-2.5",children:[o.jsx("summary",{className:"cursor-pointer font-bold hover:text-slate-800",children:"View Raw Diagnostic Payload JSON"}),o.jsx("pre",{className:"mt-2 max-h-48 overflow-y-auto rounded bg-slate-900 p-3 text-[11px] text-emerald-400 font-mono",children:JSON.stringify(u,null,2)})]})]})]})}),h&&o.jsx("div",{onClick:()=>g(null),className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs cursor-zoom-out",children:o.jsxs("div",{className:"relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden p-2 shadow-2xl",children:[o.jsx("img",{src:h.src,alt:h.alt,className:"max-h-[80vh] w-auto object-contain rounded-lg"}),o.jsx("div",{className:"p-2 text-center text-xs font-bold text-slate-700",children:h.alt})]})})]})},Ll={"ASHOK LEYLAND":["12M BS-IV (Retarder)","Viking BS-IV (Retarder)","Other BS-IV Retarder Bus","12M BS-VI (Retarder)","Viking BS-VI (Retarder)","Other BS-VI Retarder Bus","13.5M BS-VI (Retarder)"],"TATA MOTORS":["TML - 1822","TML - 1622"],VECV:["VECV - 6016","VECV - 6019"]},ex=({users:i,onReloadUsers:e})=>{const[t,n]=ue.useState(""),[s,r]=ue.useState(!1),[a,l]=ue.useState(!1),[c,d]=ue.useState(null),[h,g]=ue.useState({email:"",password:"",role:"technician",technicianName:"",technicianPhone:"",dealerName:"",technicianType:"",vehicleManufacturer:"",vehicleModel:"",city:"",state:""}),[u,f]=ue.useState(null),_=ue.useMemo(()=>{const E=i.length,T=i.filter(w=>w.active).length,x=i.filter(w=>w.role==="technician").length;return{total:E,active:T,techs:x}},[i]),M=ue.useMemo(()=>{const E=t.toLowerCase().trim();return E?i.filter(T=>[T.email,T.technician_name,T.dealer_name,T.city,T.state,T.vehicle_manufacturer].filter(Boolean).join(" ").toLowerCase().includes(E)):i},[i,t]),m=E=>{const{name:T,value:x}=E.target;g(w=>{const I={...w,[T]:x};return T==="vehicleManufacturer"&&(I.vehicleModel=""),I})},p=async E=>{E.preventDefault(),d(null),l(!0);try{await Vt.createUser(h),r(!1),g({email:"",password:"",role:"technician",technicianName:"",technicianPhone:"",dealerName:"",technicianType:"",vehicleManufacturer:"",vehicleModel:"",city:"",state:""}),await e()}catch(T){d(T.message||"Failed to create user")}finally{l(!1)}},b=async E=>{try{await Vt.toggleUserActive(E.id,!E.active),await e()}catch(T){alert(T.message||"Failed to update user status")}},R=async E=>{if(window.confirm(`Permanently delete ${E.email}? Linked diagnostic reports will be preserved without account ownership.`))try{await Vt.deleteUser(E.id),await e()}catch(T){alert(T.message||"Failed to delete user")}},y=async E=>{try{const T=await Vt.getUserDetail(E.id);f(T)}catch(T){alert(T.message||"Failed to fetch user details")}};return o.jsxs(Ut,{className:"mb-8",children:[o.jsxs(en,{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(tn,{children:"Technician Administration"}),o.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500 font-medium",children:[o.jsxs("span",{className:"bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-700",children:[_.total," total"]}),o.jsxs("span",{className:"bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold",children:[_.active," active"]}),o.jsxs("span",{className:"bg-blue-50 text-[#0b5daa] px-2 py-0.5 rounded-full font-bold",children:[_.techs," technicians"]})]})]}),o.jsx(nn,{className:"mt-1",children:"Manage named access, profiles, and authorized technician accounts."})]}),o.jsxs(pt,{variant:"primary",size:"sm",onClick:()=>r(!0),className:"text-xs font-semibold",children:[o.jsx(hu,{className:"h-3.5 w-3.5 mr-1.5"}),"Create Account"]})]}),o.jsxs(sn,{className:"pt-4",children:[o.jsxs("div",{className:"relative mb-4",children:[o.jsx(jl,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),o.jsx(jt,{value:t,onChange:E=>n(E.target.value),placeholder:"Search accounts by email, technician name, dealer, city, or manufacturer...",className:"pl-9 h-9 text-xs"})]}),o.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:o.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[o.jsx("thead",{className:"bg-slate-50/80 text-slate-700 font-semibold border-b border-slate-200",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Email"}),o.jsx("th",{className:"p-3",children:"Technician / Dealer"}),o.jsx("th",{className:"p-3",children:"OEM & Model"}),o.jsx("th",{className:"p-3",children:"Location"}),o.jsx("th",{className:"p-3",children:"Role"}),o.jsx("th",{className:"p-3",children:"Status"}),o.jsx("th",{className:"p-3",children:"Created"}),o.jsx("th",{className:"p-3 text-right",children:"Actions"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-100 bg-white",children:M.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:8,className:"p-6 text-center text-slate-400",children:"No accounts found matching your search."})}):M.map(E=>o.jsxs("tr",{className:"hover:bg-slate-50/60 transition-colors",children:[o.jsx("td",{className:"p-3 font-semibold text-slate-900",children:E.email}),o.jsxs("td",{className:"p-3",children:[o.jsx("div",{className:"font-medium text-slate-800",children:E.technician_name||"—"}),o.jsx("div",{className:"text-[11px] text-slate-500",children:E.dealer_name||"—"})]}),o.jsxs("td",{className:"p-3",children:[o.jsx("div",{className:"font-semibold text-slate-700",children:E.vehicle_manufacturer||"—"}),o.jsx("div",{className:"text-[11px] text-slate-500",children:E.vehicle_model||"—"})]}),o.jsxs("td",{className:"p-3 text-slate-600",children:[o.jsx("div",{children:[E.city,E.state].filter(Boolean).join(", ")||"—"}),(E.gps_latitude||E.gpsLatitude)&&(E.gps_longitude||E.gpsLongitude)&&o.jsxs("a",{href:`https://www.google.com/maps?q=${E.gps_latitude||E.gpsLatitude},${E.gps_longitude||E.gpsLongitude}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[10px] text-[#0b5daa] hover:underline font-mono mt-0.5",title:"View GPS on Google Maps",children:[o.jsx(Qs,{className:"h-2.5 w-2.5 shrink-0"}),o.jsxs("span",{children:[Number(E.gps_latitude||E.gpsLatitude).toFixed(4),","," ",Number(E.gps_longitude||E.gpsLongitude).toFixed(4)]})]})]}),o.jsx("td",{className:"p-3",children:o.jsx(ts,{variant:E.role==="admin"?"default":"secondary",children:E.role})}),o.jsx("td",{className:"p-3",children:o.jsxs("button",{onClick:()=>b(E),className:`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold transition-colors ${E.active?"bg-emerald-100 text-emerald-800 hover:bg-emerald-200":"bg-rose-100 text-rose-800 hover:bg-rose-200"}`,title:"Click to toggle account status",children:[o.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${E.active?"bg-emerald-600":"bg-rose-600"}`}),E.active?"Active":"Disabled"]})}),o.jsx("td",{className:"p-3 text-slate-500 whitespace-nowrap",children:new Date(E.created_at).toLocaleDateString()}),o.jsx("td",{className:"p-3 text-right",children:o.jsxs("div",{className:"inline-flex items-center gap-1",children:[o.jsx(pt,{variant:"ghost",size:"icon",onClick:()=>y(E),title:"View Technician Activity",className:"h-7 w-7 text-slate-500 hover:text-[#0b5daa]",children:o.jsx(Jd,{className:"h-3.5 w-3.5"})}),o.jsx(pt,{variant:"ghost",size:"icon",onClick:()=>R(E),title:"Delete Account",className:"h-7 w-7 text-slate-500 hover:text-rose-600",children:o.jsx(Xl,{className:"h-3.5 w-3.5"})})]})})]},E.id))})]})}),o.jsxs(Va,{isOpen:s,onClose:()=>r(!1),title:"Create Technician Account",description:"Provision a named account for a field technician or dealer workshop.",maxWidth:"lg",children:[c&&o.jsx("div",{className:"mb-4 rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700",children:c}),o.jsxs("form",{onSubmit:p,className:"space-y-3.5 text-xs",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsxs("label",{className:"block font-semibold text-slate-700 mb-1",children:["Email ",o.jsx("span",{className:"text-rose-500",children:"*"})]}),o.jsx(jt,{name:"email",type:"email",required:!0,value:h.email,onChange:m,placeholder:"tech@dealer.com",className:"h-8 text-xs"})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block font-semibold text-slate-700 mb-1",children:["Temporary Password ",o.jsx("span",{className:"text-rose-500",children:"*"})]}),o.jsx(jt,{name:"password",type:"password",required:!0,minLength:10,value:h.password,onChange:m,placeholder:"Min 10 characters",className:"h-8 text-xs"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Technician Name"}),o.jsx(jt,{name:"technicianName",value:h.technicianName,onChange:m,placeholder:"Full Name",className:"h-8 text-xs"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Mobile Number"}),o.jsx(jt,{name:"technicianPhone",value:h.technicianPhone,onChange:m,placeholder:"+91 98765 43210",className:"h-8 text-xs"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Dealer / Workshop"}),o.jsx(jt,{name:"dealerName",value:h.dealerName,onChange:m,placeholder:"Authorized Service Center",className:"h-8 text-xs"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Technician Type"}),o.jsxs(gn,{name:"technicianType",value:h.technicianType,onChange:m,className:"h-8 text-xs",children:[o.jsx("option",{value:"",children:"Select type"}),o.jsx("option",{value:"Authorized Dealer",children:"Authorized Dealer"}),o.jsx("option",{value:"Fleet Workshop",children:"Fleet Workshop"}),o.jsx("option",{value:"Roadside Assistance",children:"Roadside Assistance"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Vehicle OEM"}),o.jsxs(gn,{name:"vehicleManufacturer",value:h.vehicleManufacturer,onChange:m,className:"h-8 text-xs",children:[o.jsx("option",{value:"",children:"Select manufacturer"}),o.jsx("option",{value:"ASHOK LEYLAND",children:"ASHOK LEYLAND"}),o.jsx("option",{value:"TATA MOTORS",children:"TATA MOTORS"}),o.jsx("option",{value:"VECV",children:"VECV"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Assigned Model"}),h.vehicleManufacturer&&Ll[h.vehicleManufacturer]?o.jsxs(gn,{name:"vehicleModel",value:h.vehicleModel,onChange:m,className:"h-8 text-xs",children:[o.jsx("option",{value:"",children:"Select model"}),Ll[h.vehicleManufacturer].map(E=>o.jsx("option",{value:E,children:E},E))]}):o.jsx(jt,{name:"vehicleModel",value:h.vehicleModel,onChange:m,placeholder:"Exact model",className:"h-8 text-xs"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"City"}),o.jsx(jt,{name:"city",value:h.city,onChange:m,placeholder:"Chennai, Pune, etc.",className:"h-8 text-xs"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"State"}),o.jsx(jt,{name:"state",value:h.state,onChange:m,placeholder:"Tamil Nadu, Maharashtra...",className:"h-8 text-xs"})]})]}),o.jsxs("div",{className:"flex justify-end gap-2 pt-4 border-t border-slate-100",children:[o.jsx(pt,{type:"button",variant:"outline",size:"sm",onClick:()=>r(!1),children:"Cancel"}),o.jsx(pt,{type:"submit",size:"sm",disabled:a,children:a?"Creating...":"Create Account"})]})]})]}),u&&o.jsx(Va,{isOpen:!0,onClose:()=>f(null),title:`Technician Profile: ${u.user.technician_name||u.user.email}`,description:u.user.email,maxWidth:"md",children:o.jsxs("div",{className:"space-y-4 text-xs",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Role"}),o.jsx("div",{className:"font-semibold",children:u.user.role})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Dealer"}),o.jsx("div",{className:"font-semibold",children:u.user.dealer_name||"—"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"OEM Assignment"}),o.jsx("div",{className:"font-semibold",children:u.user.vehicle_manufacturer||"—"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Assigned Model"}),o.jsx("div",{className:"font-semibold",children:u.user.vehicle_model||"—"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Phone"}),o.jsx("div",{className:"font-semibold",children:u.user.phone||"—"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Registered"}),o.jsx("div",{className:"font-semibold",children:new Date(u.user.created_at).toLocaleDateString()})]}),(u.user.gps_latitude||u.user.gpsLatitude)&&o.jsxs("div",{className:"col-span-2 pt-1 border-t border-slate-200",children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Recorded GPS Location"}),o.jsxs("div",{className:"flex items-center justify-between mt-0.5",children:[o.jsxs("span",{className:"font-mono text-slate-700",children:[Number(u.user.gps_latitude||u.user.gpsLatitude).toFixed(4),","," ",Number(u.user.gps_longitude||u.user.gpsLongitude).toFixed(4)]}),o.jsxs("a",{href:`https://www.google.com/maps?q=${u.user.gps_latitude||u.user.gpsLatitude},${u.user.gps_longitude||u.user.gpsLongitude}`,target:"_blank",rel:"noopener noreferrer",className:"text-[#0b5daa] hover:underline font-semibold flex items-center gap-1",children:[o.jsx(Qs,{className:"h-3 w-3"}),"Open Google Maps →"]})]})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-slate-800 mb-2",children:"Recent Account Activity"}),o.jsx("div",{className:"space-y-1.5 max-h-48 overflow-y-auto",children:u.activity&&u.activity.length>0?u.activity.slice(0,10).map((E,T)=>o.jsxs("div",{className:"flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 text-[11px]",children:[o.jsx("span",{className:"font-medium text-slate-700",children:E.action}),o.jsx("span",{className:"text-slate-400",children:new Date(E.created_at).toLocaleString()})]},T)):o.jsx("p",{className:"text-slate-400 italic",children:"No recent activity recorded."})})]})]})})]})]})},tx=()=>{const[i,e]=ue.useState(!!Js()),[t,n]=ue.useState(!1),[s,r]=ue.useState(!1),[a,l]=ue.useState(!1),[c,d]=ue.useState(null),[h,g]=ue.useState([]),[u,f]=ue.useState([]),[_,M]=ue.useState([]),[m,p]=ue.useState({page:1,pageSize:10,total:0,totalPages:1}),[b,R]=ue.useState({}),[y,E]=ue.useState(""),[T,x]=ue.useState(""),[w,I]=ue.useState("day"),[C,L]=ue.useState(null),[F,q]=ue.useState(!1),P=ue.useCallback(async(O=1,oe=b)=>{n(!0);try{const xe=await Vt.getCases({page:O,pageSize:m.pageSize,...oe});g(xe.cases||[]),p({page:xe.page,pageSize:xe.pageSize,total:xe.total,totalPages:xe.totalPages})}catch(xe){console.error("Failed to load cases:",xe)}finally{n(!1)}},[b,m.pageSize]),B=ue.useCallback(async()=>{try{const[O,oe]=await Promise.all([Vt.getSummary(w,y,T),Vt.getAllCasesForAnalytics()]);d(O.summary),f(oe)}catch(O){console.error("Failed to load analytics:",O)}},[w,y,T]),Y=ue.useCallback(async()=>{try{const O=await Vt.getUsers();M(O.users||[])}catch(O){console.error("Failed to load users:",O)}},[]),H=async()=>{r(!0),await Promise.all([P(m.page),B(),Y()]),r(!1)};ue.useEffect(()=>{if(!i)return;H();const O=Vt.connectEvents(()=>{l(!0),P(m.page),B()});return l(!0),()=>{O(),l(!1)}},[i]);const te=async()=>{await Vt.logout(),e(!1)},V=O=>{R(O),P(1,O)},Q=O=>{P(O)},ee=async O=>{try{const oe=await Vt.getCaseDetail(O);L(oe),q(!0)}catch(oe){console.error("Failed to view case:",oe)}},be=async O=>{await Vt.deleteCases(O),await H()},ie=()=>{if(u.length===0){alert("No records available to export.");return}const O=["Diagnostic Case ID","Diagnostic Status","Diagnostic Language Name","Admin Report Language","FSE Name","Technician Phone","Vehicle Manufacturer","Model","Vehicle Registration No.","Chassis No.","Odometer Km","Kms & Date of Sale","Dealer / Location","City","State","Region","Suspected Product","Recommended Part No.","Complaint Attended on","Diagnostic Feedback"],oe=Ze=>`"${String(Ze??"").replace(/"/g,'""')}"`,xe=[O.join(","),...u.map(Ze=>{const Re=Ze.payload||{};return O.map(He=>{const Xe=Re[He]??(He==="Diagnostic Case ID"?Ze.case_number||Ze.id:"");return oe(He==="Diagnostic Feedback"&&typeof Xe=="object"&&Xe!==null?Xe.clarity||"":Xe)}).join(",")})],Ae=new Blob([xe.join(`\r
`)],{type:"text/csv;charset=utf-8;"}),pe=URL.createObjectURL(Ae),Ce=document.createElement("a");Ce.href=pe,Ce.setAttribute("download",`RetarderIQ_Diagnostics_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(Ce),Ce.click(),document.body.removeChild(Ce),URL.revokeObjectURL(pe)};return i?o.jsx("div",{className:"min-h-screen bg-slate-50 text-slate-900 pb-12",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:[o.jsx(xu,{onRefresh:H,onExportCsv:ie,onLogout:te,refreshing:s,sseConnected:a,dateFrom:y,setDateFrom:E,dateTo:T,setDateTo:x,granularity:w,setGranularity:I,onApplyDateFilter:B}),o.jsx(_u,{summary:c,onFilterIncomplete:()=>{V({...b,status:"INCOMPLETE"})}}),o.jsx(yu,{cases:u}),o.jsx($0,{cases:u,users:_,onSelectPlace:O=>{V({...b,search:O})}}),o.jsx(K0,{cases:h,pagination:m,loading:t,onPageChange:Q,onFilterChange:V,onViewCase:ee,onDeleteCases:be,statusFilterValue:b.status||""}),o.jsx(ex,{users:_,onReloadUsers:Y}),o.jsx(Q0,{caseItem:C,isOpen:F,onClose:()=>q(!1),onCaseUpdated:H})]})}):o.jsx(gu,{onLoginSuccess:()=>e(!0)})},Il=document.getElementById("root");Il&&nd.createRoot(Il).render(o.jsx(Ul.StrictMode,{children:o.jsx(tx,{})}));
