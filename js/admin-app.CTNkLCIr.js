import{r as rd,a as ad,g as od,c as ld,b as oe,R as Rn,P as mi,d as gi,C as xi,T as Cn,B as _r,e as vr,X as Sr,Y as br,f as Mr,h as Gl}from"./admin-vendor-charts.B0MFY3Dy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var yr={exports:{}},qi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do;function cd(){if(Do)return qi;Do=1;var n=rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(l,c,d){var u,m={},h=null,p=null;d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),c.ref!==void 0&&(p=c.ref);for(u in c)i.call(c,u)&&!r.hasOwnProperty(u)&&(m[u]=c[u]);if(l&&l.defaultProps)for(u in c=l.defaultProps,c)m[u]===void 0&&(m[u]=c[u]);return{$$typeof:e,type:l,key:h,ref:p,props:m,_owner:s.current}}return qi.Fragment=t,qi.jsx=o,qi.jsxs=o,qi}var Po;function dd(){return Po||(Po=1,yr.exports=cd()),yr.exports}var a=dd(),bs={},Lo;function ud(){if(Lo)return bs;Lo=1;var n=ad();return bs.createRoot=n.createRoot,bs.hydrateRoot=n.hydrateRoot,bs}var hd=ud();const fd=od(hd);let tn=[{id:"c101-ashok-aps",case_number:"RIQ-2026-001",created_at:new Date(Date.now()-1e3*60*45).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-001","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"12M BS-VI (Retarder)","Vehicle Registration No.":"TN 09 BK 4521","Chassis No.":"MB1B2C3D4E5F67890","Emission Standard":"BS-VI","Odometer Km":"64,200 km","Kms & Date of Sale":"64,200 km · 12-Feb-2024","FSE Name":"R. Karthik","Technician Phone":"+91 98401 23456","Dealer / Location":"TVS Mobility - Guindy Workshop",City:"Chennai",State:"Tamil Nadu",Region:"South","GPS Latitude":13.0102,"GPS Longitude":80.2158,"GPS Address":"Guindy Industrial Estate, Chennai, Tamil Nadu","Complaint Type":"Retarder not engaging on stage 2 & 3","Diagnostic Duration":"18 mins","Suspected Product":"Air Pressure Switch Assembly (APS)","Recommended Part No.":"BW-APS-9021-A","Replacement Status":"REQUIRED","Lifecycle Status":"ESCALATED_REPLACEMENT","Verification Status":"PENDING_BRANCH_APPROVAL","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"English","Customer Voice / Field Complaints reported":"Driver reported low retardation torque while descending grade. APS continuity check open circuit.","Diagnostic Fault Details":[{title:"Air Pressure Switch Assembly Open-Circuit Fault",action:`Root Cause: Internal diaphragm ruptured causing premature contact opening under hydraulic load.
Corrective Action: Replace APS switch assembly with OEM part and verify pneumatic seal.`,partNo:"BW-APS-9021-A",brand:"Brakes India"}],"Diagnostic Step History":[{question:"Is supply voltage to Retarder ECU between 24V and 28V DC?",response:"Yes"},{question:"Does instrument cluster retarder indicator illuminate upon key-ON?",response:"Yes"},{question:"Measure resistance across APS Pin 1 & Pin 2 (spec: < 1.5 Ω). Is resistance within spec?",response:"No"},{question:"Verify pneumatic delivery pressure at APS test port (nominal: 6.5 bar). Is pressure adequate?",response:"Yes"}],"Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c102-tml-working",case_number:"RIQ-2026-002",created_at:new Date(Date.now()-1e3*60*180).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-002","Diagnostic Status":"WORKING SATISFACTORY","Vehicle Manufacturer":"TATA MOTORS",Model:"TML - 1822","Vehicle Registration No.":"KA 01 MJ 8820","Chassis No.":"MAT612044P9G12345","Emission Standard":"BS-VI","Odometer Km":"42,100 km","Kms & Date of Sale":"42,100 km · 20-Jul-2024","FSE Name":"M. Suresh","Technician Phone":"+91 97410 88990","Dealer / Location":"Kalyani Motors Central Hub",City:"Bengaluru",State:"Karnataka",Region:"South","Complaint Type":"Warning lamp illuminated intermittently","Diagnostic Duration":"12 mins","Suspected Product":"No fault found - Harness seated properly","Recommended Part No.":"None","Replacement Status":"NOT_REQUIRED","Lifecycle Status":"CLOSED","Verification Status":"VERIFIED_SATISFACTORY","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Kannada","Customer Voice / Field Complaints reported":"Harness connector cleaned and re-torqued. Resistance measured within 1.2 ohms specification.","Diagnostic Step History":[{question:"Inspect main wiring harness for physical wear, chafing, or pin corrosion. Is harness sound?",response:"Yes"},{question:"Measure voltage at ECU connector pin 4 with ignition key ON (spec: 24V). Is voltage normal?",response:"Yes"},{question:"Perform stage 1, 2, and 3 manual retarder hand lever test. Do all stages engage correctly?",response:"Yes"},{question:"Verify stator coil temperature sensor resistance (ambient reading ~1.1 kΩ). Is it in spec?",response:"Yes"}],"Diagnostic Feedback":{clarity:"4",rating:4}}},{id:"c103-vecv-ecu",case_number:"RIQ-2026-003",created_at:new Date(Date.now()-1e3*60*360).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-003","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"VECV",Model:"VECV - 6016","Vehicle Registration No.":"MH 12 QX 9012","Chassis No.":"MC2B12344E9K99812","Emission Standard":"BS-VI","Odometer Km":"118,500 km","Kms & Date of Sale":"118,500 km · 15-Jan-2023","FSE Name":"P. Anand","Technician Phone":"+91 98220 54321","Dealer / Location":"Navnit Motors Commercial Division",City:"Pune",State:"Maharashtra",Region:"West","Complaint Type":"ECU speed signal drop during braking","Diagnostic Duration":"24 mins","Suspected Product":"ECU Speed Box","Recommended Part No.":"BW-ECU-8840-C","Replacement Status":"REQUIRED","Lifecycle Status":"ORDER_PLACED","Verification Status":"CONFIRMED_FAULT","Vehicle under warranty period?":"No","Repeat complaint? Yes / No":"Yes","Diagnostic Language Name":"Hindi","Customer Voice / Field Complaints reported":"Hall sensor pulses intermittent above 40 km/h. Voltage regulator inside ECU box degraded.","Diagnostic Fault Details":[{title:"ECU Speed Box Signal Drop Fault",action:`Root Cause: Internal speed sensor pulse conditioning capacitor failed at high temperatures.
Corrective Action: Replace ECU Speed Box assembly. Recalibrate pulse counter.`,partNo:"BW-ECU-8840-C",brand:"Brakes India"}],"Diagnostic Step History":[{question:"Check wheel speed hall sensor air gap clearance (spec: 0.8 mm ± 0.2 mm). Is gap correct?",response:"Yes"},{question:"Probe ECU speed box terminal Pin 7 with oscilloscope while driving above 20 km/h. Are pulses square and clean?",response:"No"},{question:"Inspect ECU ground connection to vehicle chassis frame (< 0.2 Ω). Is ground path good?",response:"Yes"},{question:"Measure internal 5V reference supply on test pad TP3. Is 5V rail steady under ripple load?",response:"No"}],"Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c104-ashok-relay",case_number:"RIQ-2026-004",created_at:new Date(Date.now()-1e3*60*520).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-004","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"Viking BS-VI (Retarder)","Vehicle Registration No.":"KL 07 CD 3341","Chassis No.":"MB1V12093F8A77123","Emission Standard":"BS-VI","Odometer Km":"88,900 km","Kms & Date of Sale":"88,900 km · 04-Nov-2023","FSE Name":"A. Vignesh","Technician Phone":"+91 94470 11223","Dealer / Location":"Popular Mega Motors Edappally",City:"Kochi",State:"Kerala",Region:"South","Complaint Type":"Relay clicking noise and delay in stage 1","Diagnostic Duration":"15 mins","Suspected Product":"Relay Box Assembly","Recommended Part No.":"BW-RLY-4100-B","Replacement Status":"REQUIRED","Lifecycle Status":"ESCALATED","Verification Status":"PENDING_APPROVAL","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Malayalam","Customer Voice / Field Complaints reported":"Stage 1 coil resistance reads 48 ohms (spec: 18-24 ohms). Contact tips pitted.","Diagnostic Feedback":{clarity:"4",rating:4}}},{id:"c105-tml-incomplete",case_number:"RIQ-2026-005",created_at:new Date(Date.now()-1e3*60*750).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-005","Diagnostic Status":"INCOMPLETE","Session State":"PAUSED","Session Last Seen":new Date().toISOString(),"Vehicle Manufacturer":"TATA MOTORS",Model:"TML - 1622","Vehicle Registration No.":"DL 1P AA 9081","Chassis No.":"MAT551029L3M44190","Emission Standard":"BS-VI","Odometer Km":"31,000 km","Kms & Date of Sale":"31,000 km · 18-Aug-2024","FSE Name":"R. Rajesh","Technician Phone":"+91 98110 33445","Dealer / Location":"Pasco Motors North Hub",City:"Delhi NCR",State:"Delhi",Region:"North","Complaint Type":"Diagnostic session paused during pressure check","Diagnostic Duration":"8 mins","Suspected Product":"Inspection in progress","Recommended Part No.":"TBD","Replacement Status":"PENDING","Lifecycle Status":"IN_PROGRESS","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"English","Customer Voice / Field Complaints reported":"Awaiting pneumatic manifold pressure gauge verification."}},{id:"c107-closed-by-admin",case_number:"RIQ-2026-007",created_at:new Date(Date.now()-1e3*60*360).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-007","Diagnostic Status":"CLOSED_BY_ADMIN","Lifecycle Status":"CLOSED","Session State":"CLOSED_BY_ADMIN","Vehicle Manufacturer":"TATA MOTORS",Model:"TML - 1622","Vehicle Registration No.":"KA 01 MJ 5521","Chassis No.":"MAT551029L3M99812","Emission Standard":"BS-VI","Odometer Km":"42,800 km","Kms & Date of Sale":"42,800 km · 14-Jan-2024","FSE Name":"M. Suresh","Technician Phone":"+91 98451 77665","Dealer / Location":"Prerana Motors - Peenya Hub",City:"Bengaluru",State:"Karnataka",Region:"South","Complaint Type":"Retarder stage 1 not operating","Diagnostic Duration":"12 mins","Suspected Product":"10A Control Fuse & Ground Wiring","Recommended Part No.":"FUSE-10A-BLADE","Replacement Status":"REPLACED","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Kannada","Customer Voice / Field Complaints reported":"Driver reported retarder indicator flickered. Found loose grounding bolt at chassis earthing lug.","Admin Resolution":{outcome:"Fault Found & Rectified",suspectedPart:"10A Control Fuse & Chassis Ground Connection",remarks:"Verified telephonically with Electrician Suresh. 10A fuse replaced and chassis ground lug re-torqued. Vehicle road-tested OK on Peenya flyover.",closedAt:new Date(Date.now()-1e3*60*180).toISOString(),closedBy:"Admin (admin@retarderiq.com)"},"Diagnostic Fault Details":[{title:"Retarder ECU Power & Ground Circuit Intermittent",action:"Root Cause: Corroded ground lug caused high impedance drop. Corrective Action: Clean ground surface, replace 10A fuse and apply dielectric grease.",partNo:"FUSE-10A-BLADE",brand:"Brakes India"}],"Diagnostic Step History":[{question:"Is supply voltage to Retarder ECU between 24V and 28V DC?",response:"No"},{question:"Check 10A fuse in central electrical box. Is fuse intact?",response:"No"}]}},{id:"c106-ashok-satisfactory",case_number:"RIQ-2026-006",created_at:new Date(Date.now()-1e3*60*1200).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-006","Diagnostic Status":"WORKING SATISFACTORY","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"13.5M BS-VI (Retarder)","Vehicle Registration No.":"TN 22 EZ 7765","Chassis No.":"MB1B14002G1C88219","Emission Standard":"BS-VI","Odometer Km":"51,400 km","Kms & Date of Sale":"51,400 km · 10-Mar-2024","FSE Name":"R. Karthik","Technician Phone":"+91 98401 23456","Dealer / Location":"TVS Mobility - Tambaram Branch",City:"Chennai",State:"Tamil Nadu",Region:"South","GPS Latitude":13.0102,"GPS Longitude":80.2158,"GPS Address":"Guindy Industrial Estate, Chennai, Tamil Nadu","Complaint Type":"Routine 50,000 km audit","Diagnostic Duration":"14 mins","Suspected Product":"None","Recommended Part No.":"None","Replacement Status":"NOT_REQUIRED","Lifecycle Status":"CLOSED","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Tamil","Customer Voice / Field Complaints reported":"All coil resistances and pneumatic cut-in/cut-out pressures within factory specs.","Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c107-vecv-switch",case_number:"RIQ-2026-007",created_at:new Date(Date.now()-1e3*60*1800).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-007","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"VECV",Model:"VECV - 6019","Vehicle Registration No.":"WB 02 AJ 4099","Chassis No.":"MC2B60199J4M11284","Emission Standard":"BS-VI","Odometer Km":"104,200 km","Kms & Date of Sale":"104,200 km · 28-May-2023","FSE Name":"Debashis Roy","Technician Phone":"+91 98300 77889","Dealer / Location":"Eastern Commercial Fleet Center",City:"Kolkata",State:"West Bengal",Region:"East","Complaint Type":"Stalk switch handle loose / no detent","Diagnostic Duration":"10 mins","Suspected Product":"Retarder Switch","Recommended Part No.":"BW-SW-2200-S","Replacement Status":"REQUIRED","Lifecycle Status":"APPROVED","Vehicle under warranty period?":"No","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"English","Customer Voice / Field Complaints reported":"Internal detent ball worn. Switch fails to hold position on stage 2.","Diagnostic Feedback":{clarity:"4",rating:4}}},{id:"c108-vecv-ecu-initial",case_number:"RIQ-2026-008",created_at:new Date(Date.now()-1e3*60*60*24*14).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-008","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"VECV",Model:"VECV - 6016","Vehicle Registration No.":"MH 12 QX 9012","Chassis No.":"MC2B12344E9K99812","Emission Standard":"BS-VI","Odometer Km":"114,200 km","Kms & Date of Sale":"114,200 km · 15-Jan-2023","FSE Name":"P. Anand","Technician Phone":"+91 98220 54321","Dealer / Location":"Navnit Motors Commercial Division",City:"Pune",State:"Maharashtra",Region:"West","Complaint Type":"ECU speed signal drop during braking","Diagnostic Duration":"20 mins","Suspected Product":"ECU Speed Box","Recommended Part No.":"BW-ECU-8840-C","Replacement Status":"REQUIRED","Lifecycle Status":"CLOSED","Vehicle under warranty period?":"No","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Hindi","Customer Voice / Field Complaints reported":"Initial speed pulse fluctuation inspected. Connector reseated and cleared.","Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c109-ashok-repeat",case_number:"RIQ-2026-009",created_at:new Date(Date.now()-1e3*60*60*24*18).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-009","Diagnostic Status":"FAULT FOUND","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"12M BS-VI (Retarder)","Vehicle Registration No.":"TN 09 BK 4521","Chassis No.":"MB1B2C3D4E5F67890","Emission Standard":"BS-VI","Odometer Km":"67,100 km","Kms & Date of Sale":"67,100 km · 12-Feb-2024","FSE Name":"R. Karthik","Technician Phone":"+91 98401 23456","Dealer / Location":"TVS Mobility - Guindy Workshop",City:"Chennai",State:"Tamil Nadu",Region:"South","Complaint Type":"Retarder stage 2 engaging intermittently","Diagnostic Duration":"16 mins","Suspected Product":"Air Pressure Switch Assembly (APS)","Recommended Part No.":"BW-APS-9021-A","Replacement Status":"REQUIRED","Lifecycle Status":"CLOSED","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"Yes","Diagnostic Language Name":"English","Customer Voice / Field Complaints reported":"Follow-up visit within 18 days for stage 2 delay. Replaced pneumatic seal.","Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c110-tml-suresh",case_number:"RIQ-2026-010",created_at:new Date(Date.now()-1e3*60*60*48).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-010","Diagnostic Status":"WORKING SATISFACTORY","Vehicle Manufacturer":"TATA MOTORS",Model:"TML - 1822","Vehicle Registration No.":"KA 05 AB 1234","Chassis No.":"MAT612044P9G99881","Emission Standard":"BS-VI","Odometer Km":"38,500 km","FSE Name":"M. Suresh","Technician Phone":"+91 97410 88990","Dealer / Location":"Kalyani Motors Central Hub",City:"Bengaluru",State:"Karnataka",Region:"South","Complaint Type":"Pre-monsoon retarder audit","Diagnostic Duration":"15 mins","Suspected Product":"None","Recommended Part No.":"None","Replacement Status":"NOT_REQUIRED","Lifecycle Status":"CLOSED","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Kannada","Customer Voice / Field Complaints reported":"Routine inspection passed all four stator stages.","Diagnostic Feedback":{clarity:"5",rating:5}}},{id:"c111-ashok-vignesh",case_number:"RIQ-2026-011",created_at:new Date(Date.now()-1e3*60*60*72).toISOString(),payload:{"Diagnostic Case ID":"RIQ-2026-011","Diagnostic Status":"WORKING SATISFACTORY","Vehicle Manufacturer":"ASHOK LEYLAND",Model:"Viking BS-VI (Retarder)","Vehicle Registration No.":"KL 08 EF 5566","Chassis No.":"MB1V12093F8A33441","Emission Standard":"BS-VI","Odometer Km":"72,400 km","FSE Name":"A. Vignesh","Technician Phone":"+91 94470 11223","Dealer / Location":"Popular Mega Motors Edappally",City:"Kochi",State:"Kerala",Region:"South","Complaint Type":"Hand lever detent check","Diagnostic Duration":"11 mins","Suspected Product":"None","Recommended Part No.":"None","Replacement Status":"NOT_REQUIRED","Lifecycle Status":"CLOSED","Vehicle under warranty period?":"Yes","Repeat complaint? Yes / No":"No","Diagnostic Language Name":"Malayalam","Customer Voice / Field Complaints reported":"Detent position normal. Lever tension within specification.","Diagnostic Feedback":{clarity:"4",rating:4}}}],Fn=[{id:"u1",email:"admin@example.com",role:"admin",technician_name:"Lead Operations Administrator",dealer_name:"Brakes India Central Technical Ops",city:"Chennai",state:"Tamil Nadu",gps_latitude:13.0102,gps_longitude:80.2158,gps_address:"Guindy Industrial Estate, Chennai",active:!0,created_at:"2024-01-01T00:00:00Z",diagnostic_count:142},{id:"u2",email:"karthik.r@tvsmobility.com",role:"technician",technician_name:"R. Karthik",phone:"+91 98401 23456",dealer_name:"TVS Mobility - Guindy Workshop",technician_type:"Authorized Dealer",vehicle_manufacturer:"ASHOK LEYLAND",vehicle_model:"12M BS-VI (Retarder)",city:"Chennai",state:"Tamil Nadu",gps_latitude:13.0102,gps_longitude:80.2158,gps_address:"Guindy Industrial Estate, Chennai",active:!0,created_at:"2024-02-15T10:30:00Z",last_login_at:new Date(Date.now()-1e3*60*30).toISOString(),diagnostic_count:38},{id:"u3",email:"suresh.m@kalyanimotors.com",role:"technician",technician_name:"M. Suresh",phone:"+91 97410 88990",dealer_name:"Kalyani Motors Central Hub",technician_type:"Authorized Dealer",vehicle_manufacturer:"TATA MOTORS",vehicle_model:"TML - 1822",city:"Bengaluru",state:"Karnataka",active:!0,created_at:"2024-03-01T09:15:00Z",last_login_at:new Date(Date.now()-1e3*60*120).toISOString(),diagnostic_count:24},{id:"u4",email:"anand.p@navnitmotors.com",role:"technician",technician_name:"P. Anand",phone:"+91 98220 54321",dealer_name:"Navnit Motors Commercial Division",technician_type:"Fleet Workshop",vehicle_manufacturer:"VECV",vehicle_model:"VECV - 6016",city:"Pune",state:"Maharashtra",active:!0,created_at:"2024-04-10T14:20:00Z",last_login_at:new Date(Date.now()-1e3*60*240).toISOString(),diagnostic_count:19},{id:"u5",email:"vignesh.a@popularmega.com",role:"technician",technician_name:"A. Vignesh",phone:"+91 94470 11223",dealer_name:"Popular Mega Motors Edappally",technician_type:"Authorized Dealer",vehicle_manufacturer:"ASHOK LEYLAND",vehicle_model:"Viking BS-VI (Retarder)",city:"Kochi",state:"Kerala",active:!0,created_at:"2024-05-18T11:45:00Z",last_login_at:new Date(Date.now()-1e3*60*500).toISOString(),diagnostic_count:15}];function pd(){const n=tn.filter(i=>{var s;return((s=i.payload)==null?void 0:s["Diagnostic Status"])==="FAULT FOUND"}).length,e=tn.filter(i=>{var s;return((s=i.payload)==null?void 0:s["Diagnostic Status"])==="WORKING SATISFACTORY"}).length,t=tn.filter(i=>{var s;return((s=i.payload)==null?void 0:s["Diagnostic Status"])==="INCOMPLETE"}).length;return{total:tn.length,faults:n,working:e,incomplete:t,totalHours:48.5,averageCompletionHours:.35,open:2,inProgress:1,completed:e,escalations:n,techniciansTotal:Fn.length,techniciansActive:Fn.filter(i=>i.active).length,manufacturers:["ASHOK LEYLAND","TATA MOTORS","VECV"]}}const na="riq_admin_token",ia="riq_api_base_url",sa="riq_mock_mode";function At(){return localStorage.getItem(sa)==="true"}function Vl(n){n?localStorage.setItem(sa,"true"):localStorage.removeItem(sa)}function rs(){const n=localStorage.getItem(ia);if(n)return n.replace(/\/$/,"");const e=window.RIQ_API_BASE_URL;return e?String(e).replace(/\/$/,""):""}function md(n){const e=n.trim().replace(/\/$/,"");e?(localStorage.setItem(ia,e),window.RIQ_API_BASE_URL=e):(localStorage.removeItem(ia),window.RIQ_API_BASE_URL="")}function er(){return sessionStorage.getItem(na)}function Di(n){n?sessionStorage.setItem(na,n):sessionStorage.removeItem(na)}async function jt(n,e={}){const t=er(),i=rs(),s=`${i}${n.startsWith("/")?n:"/"+n}`,r={"Content-Type":"application/json",...e.headers||{}};t&&(r.Authorization=`Bearer ${t}`);let o;try{o=await fetch(s,{cache:"no-store",...e,headers:r})}catch{throw new Error(`Unable to connect to API server at ${i||window.location.origin}. Please ensure the backend is running.`)}const l=o.headers.get("content-type")||"";let c={};if(l.includes("application/json"))c=await o.json().catch(()=>({}));else throw o.status===404?new Error(`API endpoint ${n} returned 404 Not Found. Start the Express backend in 'server/' or click 'Demo Mode' below.`):new Error(`Server returned ${o.status} (${l||"non-JSON"}). Please verify backend connection.`);if(!o.ok)throw o.status===401&&(Di(null),window.location.reload()),new Error(c.error||c.message||`Request failed with status ${o.status}`);return c}const Ot={async login(n,e,t=!1){var c;if(t){Vl(!0);const d="mock-admin-token-"+Date.now();return Di(d),{token:d,user:{role:"admin",email:n||"admin@example.com"}}}if(At()){const d="mock-admin-token-"+Date.now();return Di(d),{token:d,user:{role:"admin",email:n}}}const s=`${rs()}/api/auth/login`;let r;try{r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:e})})}catch{throw new Error(`Unable to connect to backend server at ${s}. You can enable 'Demo Mock Mode' below to preview the dashboard.`)}const o=r.headers.get("content-type")||"";let l={};if(o.includes("application/json"))l=await r.json().catch(()=>({}));else throw r.status===404?new Error(`API endpoint /api/auth/login returned 404. Your web server (${window.location.origin}) is running as a static file server. Click 'Explore Demo Mode' below to test the dashboard immediately.`):new Error(`Server returned ${r.status} HTML. Verify API backend is running.`);if(!r.ok)throw new Error(l.error||"Login failed");if(((c=l.user)==null?void 0:c.role)!=="admin")throw new Error("Administrator account required.");return Di(l.token),l},async logout(){if(At()){Di(null);return}const n=er(),e=rs();if(n)try{await fetch(`${e}/api/auth/logout`,{method:"POST",headers:{Authorization:`Bearer ${n}`},credentials:"include"})}catch(t){console.error("Logout error:",t)}Di(null)},async getSummary(n="day",e="",t=""){if(At())return{summary:pd()};const i=new URLSearchParams({granularity:n});return e&&i.set("dateFrom",e),t&&i.set("dateTo",t),jt(`/api/diagnostics/summary?${i.toString()}`)},async getCases(n){if(At()){const t=Number(n.page||1),i=Number(n.pageSize||10),s=String(n.search||"").toLowerCase(),r=String(n.status||""),o=String(n.region||"").toLowerCase(),l=String(n.manufacturer||"").toLowerCase();let c=[...tn];s&&(c=c.filter(p=>(JSON.stringify(p.payload).toLowerCase()+" "+p.case_number.toLowerCase()).includes(s))),r&&(c=c.filter(p=>{var _;return((_=p.payload)==null?void 0:_["Diagnostic Status"])===r})),o&&(c=c.filter(p=>{var _;return String(((_=p.payload)==null?void 0:_.Region)||"").toLowerCase()===o})),l&&(c=c.filter(p=>{var _;return String(((_=p.payload)==null?void 0:_["Vehicle Manufacturer"])||"").toLowerCase()===l}));const d=c.length,u=Math.ceil(d/i)||1,m=(t-1)*i;return{cases:c.slice(m,m+i),page:t,pageSize:i,total:d,totalPages:u}}const e=new URLSearchParams;return Object.entries(n).forEach(([t,i])=>{i!=null&&i!==""&&e.set(t,String(i))}),jt(`/api/diagnostics?${e.toString()}`)},async getAllCasesForAnalytics(){if(At())return[...tn];const n=await jt("/api/diagnostics?page=1&pageSize=1000");let e=[...n.cases||[]];const t=n.totalPages||1;return t>1&&(await Promise.all(Array.from({length:t-1},(s,r)=>jt(`/api/diagnostics?page=${r+2}&pageSize=1000`)))).forEach(s=>{s.cases&&e.push(...s.cases)}),e},async getCaseDetail(n){if(At()){const e=tn.find(t=>t.id===n);if(!e)throw new Error("Case not found");return e}return jt(`/api/admin/diagnostics/${encodeURIComponent(n)}`)},async updateCaseRegion(n,e){if(At()){const t=tn.find(i=>i.id===n);return t&&t.payload&&(t.payload.Region=e),{success:!0}}return jt(`/api/admin/diagnostics/${encodeURIComponent(n)}`,{method:"PATCH",body:JSON.stringify({region:e})})},async closeCaseByAdmin(n,e){if(At()){const t=tn.find(i=>i.id===n);return t&&t.payload&&(t.payload["Diagnostic Status"]="CLOSED_BY_ADMIN",t.payload["Lifecycle Status"]="CLOSED",t.payload["Session State"]="CLOSED_BY_ADMIN",t.payload["Admin Resolution"]={...e,closedAt:new Date().toISOString(),closedBy:e.closedBy||"Admin"}),{success:!0}}return jt(`/api/admin/diagnostics/${encodeURIComponent(n)}`,{method:"PATCH",body:JSON.stringify({admin_resolution:e})})},async quickConfirmCase(n){if(At()){const e=tn.find(t=>t.id===n);return e&&e.payload&&(e.payload["Diagnostic Status"]="WORKING SATISFACTORY",e.payload["Lifecycle Status"]="CLOSED",e.payload["Session State"]="COMPLETED",e.payload["Technician Confirmation"]={outcome:"REPAIRED_AND_TESTED_OK",confirmedAt:new Date().toISOString(),channel:"WhatsApp 1-Tap"}),{success:!0}}return jt(`/api/public/case/${encodeURIComponent(n)}/confirm`,{method:"POST",body:JSON.stringify({outcome:"REPAIRED_AND_TESTED_OK"})})},async deleteCases(n){if(At()){const e=new Set(n);for(let t=tn.length-1;t>=0;t--)e.has(tn[t].id)&&tn.splice(t,1);return{deleted:n.length}}return jt("/api/diagnostics",{method:"DELETE",body:JSON.stringify({ids:n})})},async getUsers(){return At()?{users:[...Fn]}:jt("/api/users")},async getUserDetail(n){if(At()){const e=Fn.find(t=>t.id===n);if(!e)throw new Error("User not found");return{user:e,activity:[{action:"Submitted diagnostic RIQ-2026-001",created_at:new Date(Date.now()-36e5).toISOString()},{action:"Completed vehicle inspection",created_at:new Date(Date.now()-72e5).toISOString()}]}}return jt(`/api/users/${encodeURIComponent(n)}`)},async createUser(n){if(At()){const e={id:"u-"+Date.now(),email:n.email,role:n.role||"technician",technician_name:n.technicianName,phone:n.technicianPhone,dealer_name:n.dealerName,technician_type:n.technicianType,vehicle_manufacturer:n.vehicleManufacturer,vehicle_model:n.vehicleModel,city:n.city,state:n.state,active:!0,created_at:new Date().toISOString(),diagnostic_count:0};return Fn.unshift(e),{user:e}}return jt("/api/users",{method:"POST",body:JSON.stringify(n)})},async toggleUserActive(n,e){if(At()){const t=Fn.find(i=>i.id===n);return t&&(t.active=e),{success:!0}}return jt(`/api/users/${encodeURIComponent(n)}/active`,{method:"PATCH",body:JSON.stringify({active:e})})},async updateUserAssignment(n,e,t){if(At()){const i=Fn.find(s=>s.id===n);return i&&(i.vehicle_manufacturer=e,i.vehicle_model=t),{success:!0}}return jt(`/api/users/${encodeURIComponent(n)}/assignment`,{method:"PATCH",body:JSON.stringify({vehicleManufacturer:e,vehicleModel:t})})},async deleteUser(n){if(At()){const e=Fn.findIndex(t=>t.id===n);return e!==-1&&Fn.splice(e,1),{success:!0}}return jt(`/api/users/${encodeURIComponent(n)}`,{method:"DELETE"})},connectEvents(n){if(At()){const o=setInterval(()=>{n({type:"keepalive",timestamp:Date.now()})},15e3);return()=>clearInterval(o)}const e=er();if(!e)return()=>{};const t=new AbortController;let i=!0;const s=rs();async function r(){try{const o=await fetch(`${s}/api/admin/events`,{headers:{Authorization:`Bearer ${e}`},signal:t.signal});if(!o.ok||!o.body)return;const l=o.body.getReader(),c=new TextDecoder;let d="";for(;i;){const{done:u,value:m}=await l.read();if(u)break;d+=c.decode(m,{stream:!0});const h=d.split(`

`);d=h.pop()||"";for(const p of h)if(p.startsWith("data:"))try{const _=JSON.parse(p.replace(/^data:\s*/,""));n(_)}catch{}}}catch(o){o.name!=="AbortError"&&i&&setTimeout(r,5e3)}}return r(),()=>{i=!1,t.abort()}}},Za="-",gd=n=>{const e=_d(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:o=>{const l=o.split(Za);return l[0]===""&&l.length!==1&&l.shift(),Hl(l,e)||xd(o)},getConflictingClassGroupIds:(o,l)=>{const c=t[o]||[];return l&&i[o]?[...c,...i[o]]:c}}},Hl=(n,e)=>{var o;if(n.length===0)return e.classGroupId;const t=n[0],i=e.nextPart.get(t),s=i?Hl(n.slice(1),i):void 0;if(s)return s;if(e.validators.length===0)return;const r=n.join(Za);return(o=e.validators.find(({validator:l})=>l(r)))==null?void 0:o.classGroupId},Io=/^\[(.+)\]$/,xd=n=>{if(Io.test(n)){const e=Io.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},_d=n=>{const{theme:e,prefix:t}=n,i={nextPart:new Map,validators:[]};return Sd(Object.entries(n.classGroups),t).forEach(([r,o])=>{ra(o,i,r,e)}),i},ra=(n,e,t,i)=>{n.forEach(s=>{if(typeof s=="string"){const r=s===""?e:Uo(e,s);r.classGroupId=t;return}if(typeof s=="function"){if(vd(s)){ra(s(i),e,t,i);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([r,o])=>{ra(o,Uo(e,r),t,i)})})},Uo=(n,e)=>{let t=n;return e.split(Za).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},vd=n=>n.isThemeGetter,Sd=(n,e)=>e?n.map(([t,i])=>{const s=i.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,l])=>[e+o,l])):r);return[t,s]}):n,bd=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;const s=(r,o)=>{t.set(r,o),e++,e>n&&(e=0,i=t,t=new Map)};return{get(r){let o=t.get(r);if(o!==void 0)return o;if((o=i.get(r))!==void 0)return s(r,o),o},set(r,o){t.has(r)?t.set(r,o):s(r,o)}}},jl="!",Md=n=>{const{separator:e,experimentalParseClassName:t}=n,i=e.length===1,s=e[0],r=e.length,o=l=>{const c=[];let d=0,u=0,m;for(let g=0;g<l.length;g++){let f=l[g];if(d===0){if(f===s&&(i||l.slice(g,g+r)===e)){c.push(l.slice(u,g)),u=g+r;continue}if(f==="/"){m=g;continue}}f==="["?d++:f==="]"&&d--}const h=c.length===0?l:l.substring(u),p=h.startsWith(jl),_=p?h.substring(1):h,y=m&&m>u?m-u:void 0;return{modifiers:c,hasImportantModifier:p,baseClassName:_,maybePostfixModifierPosition:y}};return t?l=>t({className:l,parseClassName:o}):o},yd=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(i=>{i[0]==="["?(e.push(...t.sort(),i),t=[]):t.push(i)}),e.push(...t.sort()),e},Ed=n=>({cache:bd(n.cacheSize),parseClassName:Md(n),...gd(n)}),wd=/\s+/,Td=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:s}=e,r=[],o=n.trim().split(wd);let l="";for(let c=o.length-1;c>=0;c-=1){const d=o[c],{modifiers:u,hasImportantModifier:m,baseClassName:h,maybePostfixModifierPosition:p}=t(d);let _=!!p,y=i(_?h.substring(0,p):h);if(!y){if(!_){l=d+(l.length>0?" "+l:l);continue}if(y=i(h),!y){l=d+(l.length>0?" "+l:l);continue}_=!1}const g=yd(u).join(":"),f=m?g+jl:g,S=f+y;if(r.includes(S))continue;r.push(S);const C=s(y,_);for(let M=0;M<C.length;++M){const E=C[M];r.push(f+E)}l=d+(l.length>0?" "+l:l)}return l};function Ad(){let n=0,e,t,i="";for(;n<arguments.length;)(e=arguments[n++])&&(t=Wl(e))&&(i&&(i+=" "),i+=t);return i}const Wl=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=Wl(n[i]))&&(t&&(t+=" "),t+=e);return t};function Rd(n,...e){let t,i,s,r=o;function o(c){const d=e.reduce((u,m)=>m(u),n());return t=Ed(d),i=t.cache.get,s=t.cache.set,r=l,l(c)}function l(c){const d=i(c);if(d)return d;const u=Td(c,t);return s(c,u),u}return function(){return r(Ad.apply(null,arguments))}}const dt=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},Xl=/^\[(?:([a-z-]+):)?(.+)\]$/i,Cd=/^\d+\/\d+$/,Nd=new Set(["px","full","screen"]),Dd=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Pd=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ld=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Id=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ud=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Nn=n=>Ii(n)||Nd.has(n)||Cd.test(n),Vn=n=>Vi(n,"length",Hd),Ii=n=>!!n&&!Number.isNaN(Number(n)),Er=n=>Vi(n,"number",Ii),Yi=n=>!!n&&Number.isInteger(Number(n)),Fd=n=>n.endsWith("%")&&Ii(n.slice(0,-1)),He=n=>Xl.test(n),Hn=n=>Dd.test(n),Od=new Set(["length","size","percentage"]),Bd=n=>Vi(n,Od,ql),kd=n=>Vi(n,"position",ql),zd=new Set(["image","url"]),Gd=n=>Vi(n,zd,Wd),Vd=n=>Vi(n,"",jd),$i=()=>!0,Vi=(n,e,t)=>{const i=Xl.exec(n);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):t(i[2]):!1},Hd=n=>Pd.test(n)&&!Ld.test(n),ql=()=>!1,jd=n=>Id.test(n),Wd=n=>Ud.test(n),Xd=()=>{const n=dt("colors"),e=dt("spacing"),t=dt("blur"),i=dt("brightness"),s=dt("borderColor"),r=dt("borderRadius"),o=dt("borderSpacing"),l=dt("borderWidth"),c=dt("contrast"),d=dt("grayscale"),u=dt("hueRotate"),m=dt("invert"),h=dt("gap"),p=dt("gradientColorStops"),_=dt("gradientColorStopPositions"),y=dt("inset"),g=dt("margin"),f=dt("opacity"),S=dt("padding"),C=dt("saturate"),M=dt("scale"),E=dt("sepia"),T=dt("skew"),x=dt("space"),w=dt("translate"),F=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",He,e],U=()=>[He,e],V=()=>["",Nn,Vn],N=()=>["auto",Ii,He],O=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Z=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],se=()=>["start","end","center","between","around","evenly","stretch"],k=()=>["","0",He],ne=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[Ii,He];return{cacheSize:500,separator:":",theme:{colors:[$i],spacing:[Nn,Vn],blur:["none","",Hn,He],brightness:ie(),borderColor:[n],borderRadius:["none","","full",Hn,He],borderSpacing:U(),borderWidth:V(),contrast:ie(),grayscale:k(),hueRotate:ie(),invert:k(),gap:U(),gradientColorStops:[n],gradientColorStopPositions:[Fd,Vn],inset:L(),margin:L(),opacity:ie(),padding:U(),saturate:ie(),scale:ie(),sepia:k(),skew:ie(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",He]}],container:["container"],columns:[{columns:[Hn]}],"break-after":[{"break-after":ne()}],"break-before":[{"break-before":ne()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...O(),He]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Yi,He]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",He]}],grow:[{grow:k()}],shrink:[{shrink:k()}],order:[{order:["first","last","none",Yi,He]}],"grid-cols":[{"grid-cols":[$i]}],"col-start-end":[{col:["auto",{span:["full",Yi,He]},He]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[$i]}],"row-start-end":[{row:["auto",{span:[Yi,He]},He]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",He]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",He]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...se()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...se(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...se(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[x]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[x]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",He,e]}],"min-w":[{"min-w":[He,e,"min","max","fit"]}],"max-w":[{"max-w":[He,e,"none","full","min","max","fit","prose",{screen:[Hn]},Hn]}],h:[{h:[He,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[He,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[He,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[He,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Hn,Vn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Er]}],"font-family":[{font:[$i]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",He]}],"line-clamp":[{"line-clamp":["none",Ii,Er]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Nn,He]}],"list-image":[{"list-image":["none",He]}],"list-style-type":[{list:["none","disc","decimal",He]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Nn,Vn]}],"underline-offset":[{"underline-offset":["auto",Nn,He]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",He]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",He]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...O(),kd]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Bd]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Gd]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...Z(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:Z()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Z()]}],"outline-offset":[{"outline-offset":[Nn,He]}],"outline-w":[{outline:[Nn,Vn]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Nn,Vn]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Hn,Vd]}],"shadow-color":[{shadow:[$i]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Hn,He]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[m]}],saturate:[{saturate:[C]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",He]}],duration:[{duration:ie()}],ease:[{ease:["linear","in","out","in-out",He]}],delay:[{delay:ie()}],animate:[{animate:["none","spin","ping","pulse","bounce",He]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[Yi,He]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",He]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",He]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",He]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Nn,Vn,Er]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},qd=Rd(Xd);function pn(...n){return qd(ld(n))}const bt=oe.forwardRef(({className:n,...e},t)=>a.jsx("div",{ref:t,className:pn("rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all hover:shadow",n),...e}));bt.displayName="Card";const qt=oe.forwardRef(({className:n,...e},t)=>a.jsx("div",{ref:t,className:pn("flex flex-col space-y-1.5 p-5 pb-3",n),...e}));qt.displayName="CardHeader";const Yt=oe.forwardRef(({className:n,...e},t)=>a.jsx("h3",{ref:t,className:pn("font-semibold leading-none tracking-tight text-slate-800",n),...e}));Yt.displayName="CardTitle";const $t=oe.forwardRef(({className:n,...e},t)=>a.jsx("p",{ref:t,className:pn("text-xs text-slate-500",n),...e}));$t.displayName="CardDescription";const Kt=oe.forwardRef(({className:n,...e},t)=>a.jsx("div",{ref:t,className:pn("p-5 pt-0",n),...e}));Kt.displayName="CardContent";const ht=oe.forwardRef(({className:n,variant:e="primary",size:t="md",disabled:i,...s},r)=>{const o="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none",l={primary:"bg-[#0b5daa] text-white hover:bg-[#094c8b] shadow-sm active:bg-[#073c6f]",secondary:"bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60 active:bg-slate-300",outline:"border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700",danger:"bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 shadow-sm",ghost:"text-slate-600 hover:bg-slate-100 hover:text-slate-900"},c={sm:"h-8 px-3 text-xs gap-1.5",md:"h-9 px-4 text-sm gap-2",lg:"h-11 px-6 text-base gap-2.5",icon:"h-8 w-8 p-0"};return a.jsx("button",{ref:r,disabled:i,className:pn(o,l[e],c[t],n),...s})});ht.displayName="Button";const Zt=oe.forwardRef(({className:n,type:e,...t},i)=>a.jsx("input",{type:e,className:pn("flex h-9 w-full rounded-md border border-slate-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b5daa]/40 focus-visible:border-[#0b5daa] disabled:cursor-not-allowed disabled:opacity-50",n),ref:i,...t}));Zt.displayName="Input";const xn=oe.forwardRef(({className:n,children:e,...t},i)=>a.jsx("select",{className:pn("flex h-9 w-full rounded-md border border-slate-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b5daa]/40 focus-visible:border-[#0b5daa] disabled:cursor-not-allowed disabled:opacity-50",n),ref:i,...t,children:e}));xn.displayName="Select";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yl=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=oe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:r,iconNode:o,...l},c)=>oe.createElement("svg",{ref:c,...$d,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Yl("lucide",s),...l},[...o.map(([d,u])=>oe.createElement(d,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(n,e)=>{const t=oe.forwardRef(({className:i,...s},r)=>oe.createElement(Kd,{ref:r,iconNode:e,className:Yl(`lucide-${Yd(n)}`,i),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=Ge("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Ge("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Ge("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=Ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=Ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=Ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=Ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=Ge("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=Ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=Ge("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=Ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=Ge("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=Ge("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=Ge("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=Ge("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=Ge("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=Ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=Ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=Ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=Ge("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=Ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=Ge("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=Ge("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=Ge("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=Ge("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=Ge("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=Ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=Ge("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=Ge("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=Ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=Ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Ge("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Ge("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=Ge("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=Ge("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=Ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=Ge("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=Ge("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=Ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=Ge("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=Ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),yu=({onLoginSuccess:n})=>{const[e,t]=oe.useState("admin@example.com"),[i,s]=oe.useState("password123"),[r,o]=oe.useState(!1),[l,c]=oe.useState(null),[d,u]=oe.useState(!1),[m,h]=oe.useState(rs()||window.location.origin),[p,_]=oe.useState(!1),y=async S=>{S.preventDefault(),c(null),o(!0);try{await Ot.login(e,i),n()}catch(C){c(C.message||"Failed to authenticate")}finally{o(!1)}},g=async()=>{o(!0);try{await Ot.login("admin@example.com","demo",!0),n()}finally{o(!1)}},f=S=>{S.preventDefault(),md(m),Vl(!1),_(!0),setTimeout(()=>_(!1),2e3)};return a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100/80 p-4",children:a.jsxs(bt,{className:"w-full max-w-md shadow-xl border-slate-200",children:[a.jsxs(qt,{className:"text-center pt-8 pb-4",children:[a.jsx("div",{className:"mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b5daa]/10 text-[#0b5daa]",children:a.jsx(ic,{className:"h-7 w-7"})}),a.jsx(Yt,{className:"text-2xl font-bold tracking-tight text-slate-900",children:"Retarder IQ Admin"}),a.jsx($t,{className:"text-sm text-slate-500 mt-1",children:"Sign in to manage diagnostic reports and technician accounts."})]}),a.jsxs(Kt,{className:"pb-8 space-y-4",children:[l&&a.jsx("div",{className:"rounded-lg bg-rose-50 border border-rose-200 p-3.5 text-xs text-rose-700 leading-relaxed",children:a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(vu,{className:"h-4 w-4 shrink-0 text-rose-600 mt-0.5"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("span",{children:l}),a.jsx("div",{children:a.jsxs("button",{type:"button",onClick:g,className:"inline-flex items-center gap-1 font-bold text-rose-800 underline hover:text-rose-900",children:[a.jsx(oa,{className:"h-3 w-3"}),"Switch to Local Demo Data →"]})})]})]})}),a.jsxs("form",{onSubmit:y,className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Email"}),a.jsxs("div",{className:"relative",children:[a.jsx(du,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),a.jsx(Zt,{type:"email",value:e,onChange:S=>t(S.target.value),placeholder:"admin@example.com",required:!0,autoComplete:"username",className:"pl-9"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Password"}),a.jsxs("div",{className:"relative",children:[a.jsx(lu,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),a.jsx(Zt,{type:"password",value:i,onChange:S=>s(S.target.value),placeholder:"••••••••••",required:!0,autoComplete:"current-password",className:"pl-9"})]})]}),a.jsx(ht,{type:"submit",disabled:r,className:"w-full font-semibold",children:r?"Authenticating...":"Sign In"})]}),a.jsxs("div",{className:"relative flex py-1 items-center",children:[a.jsx("div",{className:"flex-grow border-t border-slate-200"}),a.jsx("span",{className:"flex-shrink mx-3 text-[11px] text-slate-400 font-semibold uppercase",children:"Or"}),a.jsx("div",{className:"flex-grow border-t border-slate-200"})]}),a.jsxs(ht,{type:"button",variant:"outline",onClick:g,disabled:r,className:"w-full text-xs font-bold border-blue-200 bg-blue-50/50 text-[#0b5daa] hover:bg-blue-100/70",children:[a.jsx(oa,{className:"h-3.5 w-3.5 mr-1.5 text-[#0b5daa]"}),"Explore with Demo Data (No DB Required)"]}),a.jsxs("div",{className:"pt-2 border-t border-slate-100",children:[a.jsxs("button",{type:"button",onClick:()=>u(!d),className:"w-full flex items-center justify-between text-xs text-slate-500 hover:text-slate-800 transition-colors",children:[a.jsxs("span",{className:"flex items-center gap-1.5 font-medium",children:[a.jsx(_u,{className:"h-3.5 w-3.5 text-slate-400"}),"Backend API Connection"]}),a.jsx("span",{className:"text-[11px] text-[#0b5daa] font-semibold",children:d?"Hide":"Configure"})]}),d&&a.jsxs("form",{onSubmit:f,className:"mt-3 space-y-2 text-xs animate-in fade-in duration-150",children:[a.jsx("p",{className:"text-[11px] text-slate-500",children:"Target API server URL (leave empty if served on same domain):"}),a.jsxs("div",{className:"flex gap-1.5",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx(aa,{className:"absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400"}),a.jsx(Zt,{type:"url",value:m,onChange:S=>h(S.target.value),placeholder:"http://localhost:3000",className:"pl-8 h-8 text-xs font-mono"})]}),a.jsx(ht,{type:"submit",size:"sm",variant:"secondary",className:"h-8 text-xs font-semibold px-3",children:p?a.jsx(Ja,{className:"h-3.5 w-3.5 text-emerald-600"}):"Save"})]})]})]})]})]})})},Eu=({onRefresh:n,onExportCsv:e,onLogout:t,refreshing:i,sseConnected:s,dateFrom:r,setDateFrom:o,dateTo:l,setDateTo:c,granularity:d,setGranularity:u,onApplyDateFilter:m})=>a.jsxs("header",{className:"mb-6 space-y-4",children:[a.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center flex-wrap gap-2",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#0b5daa]",children:"Retarder IQ · Operations"}),a.jsxs("div",{className:"flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 border border-slate-200",children:[a.jsx("span",{className:`h-2 w-2 rounded-full ${s?"bg-emerald-500 animate-pulse":"bg-amber-400"}`}),a.jsx("span",{children:s?"Live sync":"Sync standby"})]}),At()&&a.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-blue-100 text-[#0b5daa] border border-blue-200 px-2 py-0.5 text-[11px] font-bold",children:[a.jsx(oa,{className:"h-3 w-3 text-[#0b5daa]"}),"Demo Mode"]})]}),a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-slate-900 mt-1",children:"Diagnostic Dashboard"}),a.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Track field cases, technician activity, and recurring vehicle failures."})]}),a.jsxs("div",{className:"flex items-center flex-wrap gap-2.5",children:[a.jsxs(ht,{variant:"secondary",size:"sm",onClick:e,className:"text-xs shadow-xs",children:[a.jsx(ru,{className:"h-3.5 w-3.5 text-slate-500 mr-1.5"}),"Export CSV"]}),a.jsxs(ht,{variant:"secondary",size:"sm",onClick:n,disabled:i,className:"text-xs shadow-xs",children:[a.jsx(xu,{className:`h-3.5 w-3.5 text-slate-500 mr-1.5 ${i?"animate-spin":""}`}),i?"Refreshing...":"Refresh"]}),a.jsxs(ht,{variant:"danger",size:"sm",onClick:t,className:"text-xs shadow-xs",children:[a.jsx(cu,{className:"h-3.5 w-3.5 mr-1.5"}),"Sign Out"]})]})]}),a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Qd,{className:"h-4 w-4 text-[#0b5daa]"}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-bold text-slate-800",children:"Operations Filter"}),a.jsx("span",{className:"text-[11px] text-slate-400",children:"Filter reports & analytics by date span"})]})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"text-slate-500 font-medium",children:"From:"}),a.jsx("input",{type:"date",value:r,onChange:h=>o(h.target.value),className:"h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]"})]}),a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"text-slate-500 font-medium",children:"To:"}),a.jsx("input",{type:"date",value:l,onChange:h=>c(h.target.value),className:"h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]"})]}),a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"text-slate-500 font-medium",children:"View:"}),a.jsxs("select",{value:d,onChange:h=>u(h.target.value),className:"h-8 rounded-md border border-slate-200 bg-slate-50 px-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0b5daa]",children:[a.jsx("option",{value:"day",children:"Daily"}),a.jsx("option",{value:"week",children:"Weekly"}),a.jsx("option",{value:"month",children:"Monthly"})]})]}),a.jsx(ht,{size:"sm",variant:"secondary",onClick:m,className:"h-8 text-xs font-semibold",children:"Apply Filter"})]})]})]}),wu={"Tamil Nadu":"South",Kerala:"South",Karnataka:"South","Andhra Pradesh":"South",Telangana:"South",Puducherry:"South",Maharashtra:"West",Gujarat:"West",Goa:"West",Rajasthan:"West","Delhi NCR":"North",Delhi:"North",Haryana:"North",Punjab:"North","Uttar Pradesh":"North",Uttarakhand:"North","Himachal Pradesh":"North","Jammu and Kashmir":"North","West Bengal":"East",Bihar:"East",Jharkhand:"East",Odisha:"East",Assam:"East","Madhya Pradesh":"Central",Chhattisgarh:"Central"};function ls(n){const e=String((n==null?void 0:n.Region)||"").trim();if(e)return e;const t=String((n==null?void 0:n.State)||"").trim();return wu[t]||"Other"}function Oi(n){const e=(n==null?void 0:n["Diagnostic Status"])||"INCOMPLETE";if(["FAULT FOUND","WORKING SATISFACTORY","CLOSED_BY_ADMIN","CLOSED BY ADMIN"].includes(e))return e;if(n!=null&&n["Admin Resolution"]||(n==null?void 0:n["Closed By"])==="ADMIN")return"CLOSED_BY_ADMIN";const t=String((n==null?void 0:n["Session State"])||"").toUpperCase(),i=Date.parse((n==null?void 0:n["Session Last Seen"])||"");return t==="PAUSED"?"PAUSED":t==="RESUMED"||t==="ACTIVE"?i&&Date.now()-i>9e4?"FORCE CLOSED / STALE":"IN PROGRESS":e}function Tu(n){var r;if(!n)return"Wiring Harness / Fuse / Retarder Coil";const e=n["Diagnostic Fault Details"];if(Array.isArray(e)&&e.length>0&&((r=e[0])!=null&&r.title))return e[0].title;if(n["Recommended Part No."])return`Recommended Part: ${n["Recommended Part No."]}`;const t=String(n["Suspected Product"]||"").trim();if(t&&!["INSPECTION IN PROGRESS","TBD","NOT IDENTIFIED","-"].includes(t.toUpperCase()))return t;const i=String(n["Diagnostic Current Step Label"]||n["Diagnostic Current Step"]||"").trim();if(i&&i!=="-")return i;const s=n["Diagnostic Step History"];if(Array.isArray(s)&&s.length>0){const o=s[s.length-1];if(o!=null&&o.question)return o.question}return"Wiring Harness / Fuse / Retarder Coil"}function Qa(n){const e=String((n==null?void 0:n["Vehicle Manufacturer"])||(n==null?void 0:n.Customer)||"").trim(),t=String((n==null?void 0:n.Model)||"").toUpperCase();return e&&!["-","UNKNOWN","N/A"].includes(e.toUpperCase())?e:t.includes("TML")?"TATA MOTORS":t.includes("ASHOK")?"ASHOK LEYLAND":t.includes("VECV")?"VECV":"Not provided"}function Oo(n){if(!n)return"";const e=String(n).toUpperCase().replace(/[^A-Z0-9]/g,"");return["NA","UNKNOWN","NONE","TEST","DEMO","0000","1234",""].includes(e)?"":e.length>=4?e:""}function eo(n){if(!n||n.length===0)return{totalCases:0,repeatCasesCount:0,firstTimeCount:0,ftrRate:100,repeatRate:0,uniqueVehiclesCount:0,chartData:[{name:"First-Time Right (FTR)",value:0,color:"#10b981"}],dealerRepeats:[],techRepeats:[],repeatCasesList:[]};const e={},t={},i={},s=new Set,r=[];[...n].sort((g,f)=>{var M,E;const S=new Date(g.created_at||((M=g.payload)==null?void 0:M["Complaint Attended on"])||0).getTime(),C=new Date(f.created_at||((E=f.payload)==null?void 0:E["Complaint Attended on"])||0).getTime();return S-C}).forEach(g=>{const f=g.payload||{},S=Oo(f["Vehicle Registration No."]||f["Vehicle Registration"]),C=Oo(f["Chassis No."]||f.Chassis),M=S||C,E=String(f["Dealer / Location"]||f.Dealer||"Unspecified Dealer").trim(),T=String(f["FSE Name"]||f["Technician Name"]||f["Technician Phone"]||"Unassigned FSE").trim();if(t[E]||(t[E]={repeat:0,total:0}),t[E].total+=1,i[T]||(i[T]={repeat:0,total:0}),i[T].total+=1,!M){if(String(f["Repeat complaint? Yes / No"]||"").toLowerCase()==="yes"){const x=g.id||g.case_number;s.add(x),t[E].repeat+=1,i[T].repeat+=1,r.push({caseNumber:g.case_number||g.id||"N/A",vehicleReg:f["Vehicle Registration No."]||"N/A",chassisNo:f["Chassis No."]||"N/A",technician:T,dealer:E,daysBetween:0,date:g.created_at||f["Complaint Attended on"]||"",fault:f["Suspected Product"]||f["Complaint Type"]||"General complaint"})}return}e[M]||(e[M]=[]),e[M].push(g)}),Object.entries(e).forEach(([g,f])=>{var S,C,M;for(let E=1;E<f.length;E++){const T=f[E-1],x=f[E],w=new Date(T.created_at||((S=T.payload)==null?void 0:S["Complaint Attended on"])||0).getTime(),F=new Date(x.created_at||((C=x.payload)==null?void 0:C["Complaint Attended on"])||0).getTime(),A=Math.max(0,Math.round((F-w)/(1e3*60*60*24))),L=String(((M=x.payload)==null?void 0:M["Repeat complaint? Yes / No"])||"").toLowerCase()==="yes";if(A<=30||L){const U=x.id||x.case_number;if(!s.has(U)){s.add(U);const V=x.payload||{},N=String(V["Dealer / Location"]||V.Dealer||"Unspecified Dealer").trim(),O=String(V["FSE Name"]||V["Technician Name"]||V["Technician Phone"]||"Unassigned FSE").trim();t[N].repeat=(t[N].repeat||0)+1,i[O].repeat=(i[O].repeat||0)+1,r.push({caseNumber:x.case_number||x.id||"N/A",vehicleReg:V["Vehicle Registration No."]||"N/A",chassisNo:V["Chassis No."]||"N/A",technician:O,dealer:N,daysBetween:A,date:x.created_at||V["Complaint Attended on"]||"",fault:V["Suspected Product"]||V["Complaint Type"]||"Repeat complaint"})}}}});const l=n.length,c=s.size,d=Math.max(0,l-c),u=l>0?Math.round(d/l*1e3)/10:100,m=Math.round((100-u)*10)/10,h=Object.keys(e).length,p=[{name:"First-Time Right (FTR)",value:d,color:"#10b981"},{name:"Repeat Visits (≤30 Days)",value:c,color:"#ef4444"}].filter(g=>g.value>0),_=Object.entries(t).filter(([,g])=>g.total>0).map(([g,f])=>({name:g,repeatCount:f.repeat,totalCount:f.total,ftrRate:Math.round((f.total-f.repeat)/f.total*100)})).sort((g,f)=>f.repeatCount-g.repeatCount||f.totalCount-g.totalCount),y=Object.entries(i).filter(([,g])=>g.total>0).map(([g,f])=>({name:g,repeatCount:f.repeat,totalCount:f.total,ftrRate:Math.round((f.total-f.repeat)/f.total*100)})).sort((g,f)=>f.repeatCount-g.repeatCount||f.totalCount-g.totalCount);return{totalCases:l,repeatCasesCount:c,firstTimeCount:d,ftrRate:u,repeatRate:m,uniqueVehiclesCount:h,chartData:p,dealerRepeats:_,techRepeats:y,repeatCasesList:r}}function Au(n,e=5){if(!n||n.length===0)return[];const t=eo(n),i=new Set(t.repeatCasesList.map(r=>r.caseNumber)),s={};return n.forEach(r=>{const o=r.payload||{},l=String(o["FSE Name"]||o["Technician Name"]||"Unassigned FSE").trim();if(!l||l.toUpperCase()==="N/A"||l==="-")return;s[l]||(s[l]={fullName:l,phone:String(o["Technician Phone"]||"").trim(),dealer:String(o["Dealer / Location"]||o.Dealer||"").trim(),city:String(o.City||"").trim(),total:0,working:0,faults:0,repeats:0});const c=s[l];c.total+=1;const d=String(o["Diagnostic Status"]||"");d==="WORKING SATISFACTORY"?c.working+=1:d==="FAULT FOUND"&&(c.faults+=1);const u=r.case_number||r.id;(i.has(u)||String(o["Repeat complaint? Yes / No"]||"").toLowerCase()==="yes")&&(c.repeats+=1)}),Object.values(s).sort((r,o)=>o.total-r.total).slice(0,e).map((r,o)=>({rank:o+1,name:r.fullName.length>18?r.fullName.slice(0,16)+"…":r.fullName,fullName:r.fullName,phone:r.phone,dealer:r.dealer,city:r.city,totalComplaints:r.total,workingCount:r.working,faultCount:r.faults,repeatCount:r.repeats,ftrRate:r.total>0?Math.round((r.total-r.repeats)/r.total*100):100}))}const Ru=({summary:n,cases:e,onFilterIncomplete:t})=>{const i=(n==null?void 0:n.total)??0,s=(n==null?void 0:n.faults)??0,r=(n==null?void 0:n.working)??0,o=(n==null?void 0:n.incomplete)??0,l=(n==null?void 0:n.techniciansTotal)??0,c=(n==null?void 0:n.techniciansActive)??0,{totalHoursText:d,avgMinutesText:u}=oe.useMemo(()=>{let h=0,p=0;e&&e.length>0&&e.forEach(g=>{const f=g.payload||{},S=String(f["Diagnostic Duration"]||"").trim().toLowerCase();if(S&&S!=="-"){const C=S.match(/([\d.]+)\s*(h|hr|hour)/),M=S.match(/([\d.]+)\s*(m|min)/),E=S.match(/([\d.]+)\s*(s|sec)/);let T=0;C&&(T+=parseFloat(C[1])*60),M&&(T+=parseFloat(M[1])),E&&(T+=parseFloat(E[1])/60),T>0&&(h+=T,p++)}else if(g.created_at&&g.updated_at){const M=Math.max(0,new Date(g.updated_at).getTime()-new Date(g.created_at).getTime())/6e4;M>0&&M<720&&(h+=M,p++)}});let _=h/60;_===0&&(typeof(n==null?void 0:n.totalHours)=="number"&&n.totalHours>0?_=n.totalHours:typeof(n==null?void 0:n.total_hours)=="number"&&n.total_hours>0?_=n.total_hours:n!=null&&n.averageCompletionHours&&(n!=null&&n.total)?_=Number(n.averageCompletionHours)*n.total:n!=null&&n.total&&(_=n.total*18/60));const y=p>0?Math.round(h/p):n!=null&&n.averageCompletionHours?Math.round(Number(n.averageCompletionHours)*60):18;return{totalHoursText:_>=100?`${Math.round(_)} hrs`:`${_.toFixed(1)} hrs`,avgMinutesText:`~${y}m avg`}},[e,n]),m=oe.useMemo(()=>eo(e||[]),[e]);return a.jsxs("div",{className:"space-y-4 mb-6",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4",children:[a.jsxs(bt,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-[#0b5daa]",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Total Cases"}),a.jsx("div",{className:"rounded-lg bg-blue-50 p-2 text-[#0b5daa]",children:a.jsx(Zd,{className:"h-4 w-4"})})]}),a.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[a.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-slate-900",children:i.toLocaleString()}),a.jsx("span",{className:"text-[11px] font-medium text-slate-500",children:"submitted"})]}),a.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"All submitted diagnostic records"})]}),a.jsxs(bt,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-teal-600",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-semibold text-teal-800 uppercase tracking-wider",children:"First Time Right (FTR)"}),a.jsx("div",{className:"rounded-lg bg-teal-50 p-2 text-teal-700",children:a.jsx(ec,{className:"h-4 w-4"})})]}),a.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[a.jsxs("span",{className:"text-3xl font-extrabold tracking-tight text-teal-700",children:[m.ftrRate,"%"]}),a.jsx("span",{className:"text-[11px] font-semibold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded",children:m.repeatCasesCount===0?"Zero repeat":`${m.repeatCasesCount} repeat`})]}),a.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"Vehicles returning ≤30 days flagged"})]}),a.jsxs(bt,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-indigo-500",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-semibold text-indigo-700 uppercase tracking-wider",children:"Total Hours"}),a.jsx("div",{className:"rounded-lg bg-indigo-50 p-2 text-indigo-600",children:a.jsx(Su,{className:"h-4 w-4"})})]}),a.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[a.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-indigo-950",children:d}),a.jsx("span",{className:"text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:u})]}),a.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"Total diagnostic inspection time"})]}),a.jsxs(bt,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-rose-500",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-semibold text-rose-700 uppercase tracking-wider",children:"Fault Found"}),a.jsx("div",{className:"rounded-lg bg-rose-50 p-2 text-rose-600",children:a.jsx(nc,{className:"h-4 w-4"})})]}),a.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[a.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-rose-600",children:s.toLocaleString()}),a.jsx("span",{className:"text-[11px] font-medium text-rose-500",children:i>0?`${Math.round(s/i*100)}%`:"0%"})]}),a.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"Requires repair or replacement"})]}),a.jsxs(bt,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-emerald-500",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-semibold text-emerald-700 uppercase tracking-wider",children:"Working Satisfactory"}),a.jsx("div",{className:"rounded-lg bg-emerald-50 p-2 text-emerald-600",children:a.jsx($l,{className:"h-4 w-4"})})]}),a.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[a.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-emerald-600",children:r.toLocaleString()}),a.jsx("span",{className:"text-[11px] font-medium text-emerald-600",children:i>0?`${Math.round(r/i*100)}%`:"0%"})]}),a.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"No vehicle defect detected"})]}),a.jsxs(bt,{className:"p-4 border-slate-200/90 shadow-xs relative overflow-hidden border-t-4 border-t-amber-500 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1",children:"Incomplete Cases"}),a.jsx("div",{className:"rounded-lg bg-amber-50 p-2 text-amber-600",children:a.jsx(su,{className:"h-4 w-4"})})]}),a.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[a.jsx("span",{className:"text-3xl font-extrabold tracking-tight text-amber-600",children:o.toLocaleString()}),a.jsx("span",{className:"text-[11px] font-medium text-amber-600",children:"in-progress"})]}),a.jsx("p",{className:"mt-1 text-[11px] text-slate-400",children:"Technician follow-up required"})]}),a.jsxs("button",{onClick:t,className:"mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors group cursor-pointer",children:[a.jsx("span",{children:"View incomplete cases"}),a.jsx(Jd,{className:"h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"})]})]})]}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-100/60 p-3 rounded-xl border border-slate-200/60 text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-slate-600",children:a.jsx(Mu,{className:"h-4 w-4"})}),a.jsxs("div",{children:[a.jsx("div",{className:"font-bold text-slate-800",children:l}),a.jsx("div",{className:"text-[11px] text-slate-500",children:"Registered Technicians"})]})]}),a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-emerald-600",children:a.jsx("span",{className:"flex h-4 w-4 items-center justify-center font-bold",children:"✓"})}),a.jsxs("div",{children:[a.jsx("div",{className:"font-bold text-slate-800",children:c}),a.jsx("div",{className:"text-[11px] text-slate-500",children:"Active Accounts"})]})]}),a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-blue-600",children:a.jsx("span",{className:"flex h-4 w-4 items-center justify-center font-bold",children:"●"})}),a.jsxs("div",{children:[a.jsx("div",{className:"font-bold text-slate-800",children:(n==null?void 0:n.open)??0}),a.jsx("div",{className:"text-[11px] text-slate-500",children:"Open Escalations"})]})]}),a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("div",{className:"rounded-md bg-white p-1.5 shadow-2xs border border-slate-200 text-slate-600",children:a.jsx("span",{className:"flex h-4 w-4 items-center justify-center font-bold",children:"★"})}),a.jsxs("div",{children:[a.jsx("div",{className:"font-bold text-slate-800",children:(n==null?void 0:n.completed)??0}),a.jsx("div",{className:"text-[11px] text-slate-500",children:"Closed Reports"})]})]})]})]})},jn=["#0b5daa","#10b981","#ef4444","#f59e0b","#8b5cf6","#06b6d4","#ec4899","#64748b"],Cu={"FAULT FOUND":"#ef4444","WORKING SATISFACTORY":"#10b981",CLOSED_BY_ADMIN:"#8b5cf6","CLOSED BY ADMIN":"#8b5cf6",INCOMPLETE:"#f59e0b","IN PROGRESS":"#3b82f6",PAUSED:"#a855f7","FORCE CLOSED / STALE":"#64748b"},Nu={"No feedback submitted":"#2563eb","5/5":"#06b6d4","4/5":"#10b981","3/5":"#f59e0b","2/5":"#8b5cf6","1/5":"#ef4444"},Du={English:"#2563eb",Tamil:"#06b6d4",Malayalam:"#10b981",Hindi:"#f59e0b",Telugu:"#8b5cf6",Kannada:"#ec4899"},Pu=({cases:n})=>{const e=oe.useMemo(()=>{const u={};return n.forEach(m=>{const h=Oi(m.payload||{});u[h]=(u[h]||0)+1}),Object.entries(u).map(([m,h])=>({name:m,value:h,color:Cu[m]||"#64748b"}))},[n]),t=oe.useMemo(()=>{const u={};return n.forEach(m=>{const h=m.payload||{},p=Oi(h);let _="Not identified";p==="FAULT FOUND"?_=String(h["Suspected Product"]||h["Recommended Part No."]||"Other component").trim():h["Suspected Product"]&&(_=String(h["Suspected Product"]).trim()),u[_]=(u[_]||0)+1}),Object.entries(u).sort((m,h)=>h[1]-m[1]).slice(0,7).map(([m,h],p)=>({name:m.length>22?m.substring(0,20)+"…":m,fullName:m,value:h,color:jn[p%jn.length]}))},[n]),i=oe.useMemo(()=>{const u={"No feedback submitted":0,"5/5":0,"4/5":0,"3/5":0,"2/5":0,"1/5":0};return n.forEach(m=>{const p=(m.payload||{})["Diagnostic Feedback"];let _=null;if(typeof p=="object"&&p!==null?_=p.clarity??p.rating??p.score:p!=null&&String(p).trim()!==""&&(_=p),_!=null&&String(_).trim()!==""){const y=`${String(_).replace("/5","")}/5`;u[y]!==void 0?u[y]+=1:u["No feedback submitted"]+=1}else u["No feedback submitted"]+=1}),Object.entries(u).filter(([,m])=>m>0).map(([m,h])=>({name:m,value:h,color:Nu[m]||"#64748b"}))},[n]),s=oe.useMemo(()=>{const u={};return n.forEach(m=>{const h=m.payload||{},p=String(h["Diagnostic Language Name"]||h["Diagnostic Language"]||"English").trim();u[p]=(u[p]||0)+1}),Object.entries(u).sort((m,h)=>h[1]-m[1]).map(([m,h],p)=>({name:m,value:h,color:Du[m]||jn[p%jn.length]}))},[n]),r=oe.useMemo(()=>{const u={};n.forEach(h=>{const p=ls(h.payload||{});u[p]=(u[p]||0)+1});const m={North:1,East:2,West:3,South:4};return Object.entries(u).sort((h,p)=>{const _=m[h[0]]||99,y=m[p[0]]||99;return _-y}).map(([h,p],_)=>({name:h,value:p,color:jn[_%jn.length]}))},[n]),o=oe.useMemo(()=>{const u={};return n.forEach(m=>{const h=Qa(m.payload||{});u[h]=(u[h]||0)+1}),Object.entries(u).sort((m,h)=>h[1]-m[1]).slice(0,5).map(([m,h],p)=>({name:m,value:h,color:jn[p%jn.length]}))},[n]),l=oe.useMemo(()=>{const u={Warranty:0,"Post warranty":0,"Not specified":0};return n.forEach(m=>{const h=m.payload||{},p=h["Odometer Km"]??h["Kms & Date of Sale"]??h.Odometer??"",_=String(p).replace(/,/g,"").match(/\d+(?:\.\d+)?/);if(!_){u["Not specified"]+=1;return}parseFloat(_[0])<2e5?u.Warranty+=1:u["Post warranty"]+=1}),[{name:"Warranty (<200k km)",value:u.Warranty,color:"#10b981"},{name:"Post warranty (≥200k km)",value:u["Post warranty"],color:"#f59e0b"}].filter(m=>m.value>0)},[n]),c=oe.useMemo(()=>eo(n),[n]),d=oe.useMemo(()=>Au(n,5),[n]);return a.jsxs("div",{className:"space-y-4 mb-6",children:[a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[a.jsxs(bt,{children:[a.jsxs(qt,{children:[a.jsx(Yt,{children:"Case Status Breakdown"}),a.jsx($t,{children:"Overall outcome of submitted diagnostic cases"})]}),a.jsx(Kt,{children:e.length===0?a.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No case data available"}):a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 h-64",children:[a.jsxs("div",{className:"w-full sm:w-1/2 h-full flex items-center justify-center relative",children:[a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(mi,{children:[a.jsx(gi,{data:e,innerRadius:55,outerRadius:80,paddingAngle:3,dataKey:"value",children:e.map((u,m)=>a.jsx(xi,{fill:u.color},`status-cell-${m}`))}),a.jsx(Cn,{formatter:(u,m)=>[`${u} cases`,m],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}})]})}),a.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[a.jsx("span",{className:"text-2xl font-bold text-slate-800",children:n.length}),a.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]})]}),a.jsx("div",{className:"w-full sm:w-1/2 flex flex-col gap-2",children:e.map(u=>a.jsxs("div",{className:"flex items-center justify-between text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2 truncate",children:[a.jsx("span",{className:"h-2.5 w-2.5 rounded-full shrink-0",style:{backgroundColor:u.color}}),a.jsx("span",{className:"truncate text-slate-600 font-medium",children:u.name})]}),a.jsxs("span",{className:"font-bold text-slate-900 ml-2",children:[u.value," ",a.jsxs("span",{className:"text-slate-400 font-normal",children:["(",n.length?Math.round(u.value/n.length*100):0,"%)"]})]})]},u.name))})]})})]}),a.jsxs(bt,{children:[a.jsxs(qt,{children:[a.jsx(Yt,{children:"Suspected Failure Distribution"}),a.jsx($t,{children:"Highest reported fault categories from field diagnostics"})]}),a.jsx(Kt,{children:t.length===0?a.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No defect reports found in the current selection"}):a.jsx("div",{className:"h-64",children:a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(_r,{data:t,layout:"vertical",margin:{top:5,right:30,left:10,bottom:5},children:[a.jsx(vr,{strokeDasharray:"3 3",horizontal:!1,stroke:"#e2e8f0"}),a.jsx(Sr,{type:"number",tick:{fontSize:11}}),a.jsx(br,{dataKey:"name",type:"category",width:120,tick:{fontSize:11,fill:"#475569"}}),a.jsx(Cn,{formatter:(u,m,h)=>[`${u} reports`,h.payload.fullName],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}}),a.jsx(Mr,{dataKey:"value",fill:"#0b5daa",radius:[0,4,4,0]})]})})})})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[a.jsxs(bt,{children:[a.jsxs(qt,{className:"flex flex-row items-start justify-between pb-2",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Yt,{children:"First Time Right (FTR) & Repeat Complaints"}),a.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200",children:[a.jsx(ec,{className:"h-3 w-3"}),"30-Day Window"]})]}),a.jsx($t,{children:"Vehicles returning for diagnosis within 30 days are tracked as Repeat Complaints"})]}),a.jsxs("div",{className:"text-right shrink-0",children:[a.jsxs("span",{className:"text-2xl font-black text-teal-600 tracking-tight",children:[c.ftrRate,"%"]}),a.jsx("span",{className:"block text-[10px] uppercase font-bold text-slate-400",children:"FTR Rate"})]})]}),a.jsx(Kt,{children:c.totalCases===0?a.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No diagnostic cases available"}):a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 h-56",children:[a.jsxs("div",{className:"w-full sm:w-1/2 h-full flex items-center justify-center relative",children:[a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(mi,{children:[a.jsx(gi,{data:c.chartData,innerRadius:50,outerRadius:75,paddingAngle:3,dataKey:"value",children:c.chartData.map((u,m)=>a.jsx(xi,{fill:u.color},`ftr-cell-${m}`))}),a.jsx(Cn,{formatter:(u,m)=>[`${u} visits`,m],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}})]})}),a.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[a.jsxs("span",{className:"text-xl font-black text-slate-800",children:[c.ftrRate,"%"]}),a.jsx("span",{className:"text-[9px] uppercase font-bold text-slate-400",children:"FTR"})]})]}),a.jsxs("div",{className:"w-full sm:w-1/2 flex flex-col gap-2.5",children:[a.jsxs("div",{className:"p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0"}),a.jsx("span",{className:"font-semibold text-emerald-950",children:"First-Time Right"})]}),a.jsxs("span",{className:"font-extrabold text-emerald-700",children:[c.firstTimeCount," ",a.jsxs("span",{className:"font-normal text-emerald-600 text-[11px]",children:["(",c.ftrRate,"%)"]})]})]}),a.jsxs("div",{className:"p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 flex items-center justify-between text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0"}),a.jsx("span",{className:"font-semibold text-rose-950",children:"Repeat (≤30 Days)"})]}),a.jsxs("span",{className:"font-extrabold text-rose-700",children:[c.repeatCasesCount," ",a.jsxs("span",{className:"font-normal text-rose-600 text-[11px]",children:["(",c.repeatRate,"%)"]})]})]}),a.jsxs("div",{className:"p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600",children:[a.jsx("span",{children:"Unique Vehicles Tracked"}),a.jsx("span",{className:"font-bold text-slate-900",children:c.uniqueVehiclesCount})]})]})]}),a.jsxs("div",{className:"pt-2 border-t border-slate-100",children:[a.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:[a.jsx("span",{children:"Repeat Visits by Dealer & Technician"}),a.jsxs("span",{children:[c.repeatCasesList.length," Flagged"]})]}),c.repeatCasesList.length===0?a.jsxs("div",{className:"p-2.5 bg-emerald-50/40 rounded-lg border border-emerald-100 text-xs text-emerald-700 flex items-center gap-2",children:[a.jsx($l,{className:"h-4 w-4 shrink-0 text-emerald-600"}),a.jsx("span",{children:"Zero repeat complaints within 30 days across all field workshops!"})]}):a.jsx("div",{className:"space-y-1.5 max-h-36 overflow-y-auto pr-1",children:c.repeatCasesList.map((u,m)=>a.jsxs("div",{className:"flex items-center justify-between p-2 rounded-md bg-slate-50 hover:bg-slate-100/80 transition-colors text-xs border border-slate-100",children:[a.jsxs("div",{className:"flex items-center gap-2 truncate",children:[a.jsx("span",{className:"px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-rose-100 text-rose-700 shrink-0",children:"REPEAT"}),a.jsx("span",{className:"font-bold text-slate-800",children:u.vehicleReg}),a.jsx("span",{className:"text-slate-400",children:"·"}),a.jsx("span",{className:"text-slate-600 truncate",children:u.technician}),a.jsxs("span",{className:"text-slate-400 hidden sm:inline",children:["(",u.dealer,")"]})]}),a.jsx("span",{className:"text-[11px] font-semibold text-rose-600 shrink-0 ml-2",children:u.daysBetween===0?"Repeat marked":`Returned in ${u.daysBetween}d`})]},`rep-${m}`))})]})]})})]}),a.jsxs(bt,{children:[a.jsx(qt,{className:"flex flex-row items-start justify-between pb-2",children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Yt,{children:"Top 5 Technicians by Complaints"}),a.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200",children:[a.jsx(ic,{className:"h-3 w-3"}),"Top Attended"]})]}),a.jsx($t,{children:"Technicians with highest diagnostic volume and First Time Right (FTR) effectiveness"})]})}),a.jsx(Kt,{children:d.length===0?a.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No technician diagnostic data available"}):a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"h-56",children:a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(_r,{data:d,layout:"vertical",margin:{top:5,right:30,left:10,bottom:5},children:[a.jsx(vr,{strokeDasharray:"3 3",horizontal:!1,stroke:"#e2e8f0"}),a.jsx(Sr,{type:"number",tick:{fontSize:11}}),a.jsx(br,{dataKey:"name",type:"category",width:100,tick:{fontSize:11,fill:"#334155",fontWeight:600}}),a.jsx(Cn,{content:({active:u,payload:m})=>{if(u&&m&&m.length){const h=m[0].payload;return a.jsxs("div",{className:"rounded-lg bg-slate-900 p-2.5 text-white shadow-xl text-xs border border-slate-700 space-y-1",children:[a.jsx("div",{className:"font-bold text-sm text-blue-300",children:h.fullName}),h.dealer&&a.jsx("div",{className:"text-[11px] text-slate-300",children:h.dealer}),a.jsxs("div",{className:"pt-1 border-t border-slate-700/80 flex items-center justify-between gap-4",children:[a.jsx("span",{className:"text-slate-400",children:"Total Cases:"}),a.jsx("span",{className:"font-bold",children:h.totalComplaints})]}),a.jsxs("div",{className:"flex items-center justify-between gap-4",children:[a.jsx("span",{className:"text-emerald-400",children:"First-Time Right:"}),a.jsx("span",{className:"font-bold text-emerald-400",children:h.totalComplaints-h.repeatCount})]}),a.jsxs("div",{className:"flex items-center justify-between gap-4",children:[a.jsx("span",{className:"text-rose-400",children:"Repeat Visits (≤30d):"}),a.jsx("span",{className:"font-bold text-rose-400",children:h.repeatCount})]}),a.jsxs("div",{className:"flex items-center justify-between gap-4 font-bold",children:[a.jsx("span",{className:"text-teal-300",children:"FTR Rate:"}),a.jsxs("span",{className:"text-teal-300",children:[h.ftrRate,"%"]})]})]})}return null}}),a.jsx(Mr,{dataKey:"totalComplaints",fill:"#0b5daa",radius:[0,4,4,0],name:"Complaints"})]})})}),a.jsxs("div",{className:"pt-2 border-t border-slate-100",children:[a.jsx("div",{className:"text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Top 5 FSE Performance Ranking"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-2",children:d.map(u=>a.jsxs("div",{className:"p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between text-xs hover:border-blue-200 transition-colors",children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsxs("span",{className:"h-5 w-5 rounded-full bg-blue-100 text-[#0b5daa] font-black text-[10px] flex items-center justify-center shrink-0",children:["#",u.rank]}),a.jsxs("span",{className:`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${u.ftrRate>=90?"bg-emerald-100 text-emerald-700":u.ftrRate>=75?"bg-amber-100 text-amber-700":"bg-rose-100 text-rose-700"}`,children:[u.ftrRate,"% FTR"]})]}),a.jsx("div",{className:"font-bold text-slate-900 truncate",title:u.fullName,children:u.fullName}),a.jsx("div",{className:"text-[10px] text-slate-500 truncate",title:u.dealer,children:u.dealer||u.city||"Field FSE"}),a.jsxs("div",{className:"mt-1.5 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px]",children:[a.jsx("span",{className:"text-slate-400",children:"Cases"}),a.jsx("span",{className:"font-extrabold text-slate-800",children:u.totalComplaints})]})]},u.rank))})]})]})})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[a.jsxs(bt,{children:[a.jsxs(qt,{children:[a.jsx(Yt,{children:"Diagnostic Feedback"}),a.jsx($t,{children:"Technician survey ratings & diagnostic clarity feedback"})]}),a.jsx(Kt,{children:i.length===0?a.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No feedback data available"}):a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 h-64",children:[a.jsxs("div",{className:"w-full sm:w-1/2 h-full flex items-center justify-center relative",children:[a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(mi,{children:[a.jsx(gi,{data:i,innerRadius:55,outerRadius:80,paddingAngle:2,dataKey:"value",children:i.map((u,m)=>a.jsx(xi,{fill:u.color},`fb-cell-${m}`))}),a.jsx(Cn,{formatter:(u,m)=>[`${u} cases`,m],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}})]})}),a.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[a.jsx("span",{className:"text-2xl font-bold text-slate-800",children:n.length}),a.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]})]}),a.jsx("div",{className:"w-full sm:w-1/2 flex flex-col gap-2",children:i.map(u=>a.jsxs("div",{className:"flex items-center justify-between text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2 truncate",children:[a.jsx("span",{className:"h-2.5 w-2.5 rounded-full shrink-0",style:{backgroundColor:u.color}}),a.jsx("span",{className:"truncate text-slate-600 font-medium",children:u.name})]}),a.jsxs("span",{className:"font-bold text-slate-900 ml-2",children:[u.value," ",a.jsxs("span",{className:"text-slate-400 font-normal",children:["(",n.length?Math.round(u.value/n.length*100):0,"%)"]})]})]},u.name))})]})})]}),a.jsxs(bt,{children:[a.jsxs(qt,{children:[a.jsx(Yt,{children:"Diagnostic Language Used"}),a.jsx($t,{children:"Session interface language selected in field"})]}),a.jsx(Kt,{children:s.length===0?a.jsx("div",{className:"flex h-56 items-center justify-center text-xs text-slate-400",children:"No language data available"}):a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 h-64",children:[a.jsxs("div",{className:"w-full sm:w-1/2 h-full flex items-center justify-center relative",children:[a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(mi,{children:[a.jsx(gi,{data:s,innerRadius:55,outerRadius:80,paddingAngle:2,dataKey:"value",children:s.map((u,m)=>a.jsx(xi,{fill:u.color},`lang-cell-${m}`))}),a.jsx(Cn,{formatter:(u,m)=>[`${u} cases`,m],contentStyle:{backgroundColor:"#1e293b",borderColor:"#334155",borderRadius:"8px",color:"#fff",fontSize:"12px"}})]})}),a.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[a.jsx("span",{className:"text-2xl font-bold text-slate-800",children:n.length}),a.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"Total"})]})]}),a.jsx("div",{className:"w-full sm:w-1/2 flex flex-col gap-2",children:s.map(u=>a.jsxs("div",{className:"flex items-center justify-between text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2 truncate",children:[a.jsx("span",{className:"h-2.5 w-2.5 rounded-full shrink-0",style:{backgroundColor:u.color}}),a.jsx("span",{className:"truncate text-slate-600 font-medium",children:u.name})]}),a.jsxs("span",{className:"font-bold text-slate-900 ml-2",children:[u.value," ",a.jsxs("span",{className:"text-slate-400 font-normal",children:["(",n.length?Math.round(u.value/n.length*100):0,"%)"]})]})]},u.name))})]})})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[a.jsxs(bt,{children:[a.jsxs(qt,{className:"pb-2",children:[a.jsx(Yt,{className:"text-sm",children:"Complaints by Region"}),a.jsx($t,{children:"Zone distribution"})]}),a.jsx(Kt,{children:a.jsx("div",{className:"h-44",children:a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(_r,{data:r,margin:{top:10,right:10,left:-25,bottom:0},children:[a.jsx(vr,{strokeDasharray:"2 2",vertical:!1,stroke:"#f1f5f9"}),a.jsx(Sr,{dataKey:"name",tick:{fontSize:10}}),a.jsx(br,{tick:{fontSize:10}}),a.jsx(Cn,{contentStyle:{backgroundColor:"#1e293b",borderRadius:"6px",color:"#fff",fontSize:"11px"}}),a.jsx(Mr,{dataKey:"value",fill:"#2563eb",radius:[4,4,0,0]})]})})})})]}),a.jsxs(bt,{children:[a.jsxs(qt,{className:"pb-2",children:[a.jsx(Yt,{className:"text-sm",children:"Vehicle Manufacturer"}),a.jsx($t,{children:"OEM distribution"})]}),a.jsx(Kt,{children:a.jsx("div",{className:"h-44",children:a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(mi,{children:[a.jsx(gi,{data:o,innerRadius:30,outerRadius:55,paddingAngle:2,dataKey:"value",children:o.map((u,m)=>a.jsx(xi,{fill:u.color},`m-${m}`))}),a.jsx(Cn,{contentStyle:{backgroundColor:"#1e293b",borderRadius:"6px",color:"#fff",fontSize:"11px"}})]})})})})]}),a.jsxs(bt,{children:[a.jsxs(qt,{className:"pb-2",children:[a.jsx(Yt,{className:"text-sm",children:"Warranty Status"}),a.jsx($t,{children:"Based on 200,000 km policy"})]}),a.jsx(Kt,{children:a.jsx("div",{className:"h-44",children:a.jsx(Rn,{width:"100%",height:"100%",children:a.jsxs(mi,{children:[a.jsx(gi,{data:l,innerRadius:30,outerRadius:55,paddingAngle:2,dataKey:"value",children:l.map((u,m)=>a.jsx(xi,{fill:u.color},`w-${m}`))}),a.jsx(Cn,{contentStyle:{backgroundColor:"#1e293b",borderRadius:"6px",color:"#fff",fontSize:"11px"}})]})})})})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="187",Lu=0,Bo=1,Iu=2,qs=1,Uu=2,ns=3,hi=0,Xt=1,On=2,Ui=0,as=1,la=2,ko=3,zo=4,Fu=5,Pi=100,Ou=101,Bu=102,ku=103,zu=104,Gu=200,Vu=201,Hu=202,ju=203,rc=204,ac=205,Wu=206,Xu=207,qu=208,Yu=209,$u=210,Ku=211,Zu=212,Ju=213,Qu=214,ca=0,da=1,ua=2,cs=3,ha=4,fa=5,pa=6,ma=7,oc=0,eh=1,th=2,Bn=0,lc=1,cc=2,dc=3,no=4,uc=5,hc=6,fc=7,pc=300,Bi=301,ds=302,wr=303,Tr=304,nr=1e3,vn=1001,ga=1002,Ct=1003,nh=1004,Ms=1005,Jt=1006,Ar=1007,Jn=1008,sn=1009,mc=1010,gc=1011,us=1012,io=1013,En=1014,Sn=1015,wn=1016,so=1017,ro=1018,ki=1020,xc=35902,_c=35899,vc=1021,Sc=1022,bn=1023,ei=1026,Qn=1027,bc=1028,ao=1029,fi=1030,oo=1031,lo=1033,Ys=33776,$s=33777,Ks=33778,Zs=33779,xa=35840,_a=35841,va=35842,Sa=35843,ba=36196,Ma=37492,ya=37496,Ea=37488,wa=37489,ir=37490,Ta=37491,Aa=37808,Ra=37809,Ca=37810,Na=37811,Da=37812,Pa=37813,La=37814,Ia=37815,Ua=37816,Fa=37817,Oa=37818,Ba=37819,ka=37820,za=37821,Ga=36492,Va=36494,Ha=36495,ja=36283,Wa=36284,sr=36285,Xa=36286,ih=3200,qa=0,sh=1,Zn="",nn="srgb",rr="srgb-linear",ar="linear",nt="srgb",Rr=7680,rh=519,ah=512,oh=513,lh=514,Mc=515,ch=516,dh=517,yc=518,Ec=519,uh=35044,Go="300 es",fn=2e3,hs=2001;function hh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fh(){const n=fs("canvas");return n.style.display="block",n}const Vo={};function Ho(...n){const e="THREE."+n.shift();console.log(e,...n)}function wc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ue(...n){n=wc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=wc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Js(...n){const e=n.join(" ");e in Vo||(Vo[e]=!0,Ue(...n))}function ph(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const mh={[ca]:ca,[ua]:pa,[ha]:ha,[cs]:fa,[da]:da,[pa]:ua,[ma]:ma,[fa]:cs};class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,Ya=180/Math.PI;function ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function gh(n,e){return(n%e+e)%e}function Nr(n,e,t){return(1-t)*n+t*e}function xh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function co(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _h(n,e){if(e.constructor===Float32Array)return n;const t=co(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function vh(n,e){if(e.constructor===Float32Array)return n;const t=co(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const go=class go{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};go.prototype.isVector2=!0;let Ze=go;class Hi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,l){let c=i[s+0],d=i[s+1],u=i[s+2],m=i[s+3],h=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3];if(m!==y||c!==h||d!==p||u!==_){let g=c*h+d*p+u*_+m*y;g<0&&(h=-h,p=-p,_=-_,y=-y,g=-g);let f=1-l;if(g<.9995){const S=Math.acos(g),C=Math.sin(S);f=Math.sin(f*S)/C,l=Math.sin(l*S)/C,c=c*f+h*l,d=d*f+p*l,u=u*f+_*l,m=m*f+y*l}else{c=c*f+h*l,d=d*f+p*l,u=u*f+_*l,m=m*f+y*l;const S=1/Math.sqrt(c*c+d*d+u*u+m*m);c*=S,d*=S,u*=S,m*=S}}e[t]=c,e[t+1]=d,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,r,o){const l=i[s],c=i[s+1],d=i[s+2],u=i[s+3],m=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return e[t]=l*_+u*m+c*p-d*h,e[t+1]=c*_+u*h+d*m-l*p,e[t+2]=d*_+u*p+l*h-c*m,e[t+3]=u*_-l*m-c*h-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,d=l(i/2),u=l(s/2),m=l(r/2),h=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*m+d*p*_,this._y=d*p*m-h*u*_,this._z=d*u*_+h*p*m,this._w=d*u*m-h*p*_;break;case"YXZ":this._x=h*u*m+d*p*_,this._y=d*p*m-h*u*_,this._z=d*u*_-h*p*m,this._w=d*u*m+h*p*_;break;case"ZXY":this._x=h*u*m-d*p*_,this._y=d*p*m+h*u*_,this._z=d*u*_+h*p*m,this._w=d*u*m-h*p*_;break;case"ZYX":this._x=h*u*m-d*p*_,this._y=d*p*m+h*u*_,this._z=d*u*_-h*p*m,this._w=d*u*m+h*p*_;break;case"YZX":this._x=h*u*m+d*p*_,this._y=d*p*m+h*u*_,this._z=d*u*_-h*p*m,this._w=d*u*m-h*p*_;break;case"XZY":this._x=h*u*m-d*p*_,this._y=d*p*m-h*u*_,this._z=d*u*_+h*p*m,this._w=d*u*m+h*p*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],d=t[2],u=t[6],m=t[10],h=i+l+m;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-d)*p,this._z=(o-s)*p}else if(i>l&&i>m){const p=2*Math.sqrt(1+i-l-m);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+d)/p}else if(l>m){const p=2*Math.sqrt(1+l-i-m);this._w=(r-d)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+m-i-l);this._w=(o-s)/p,this._x=(r+d)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,d=t._z,u=t._w;return this._x=i*u+o*l+s*d-r*c,this._y=s*u+o*c+r*l-i*d,this._z=r*u+o*d+i*c-s*l,this._w=o*u-i*l-s*c-r*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){const d=Math.acos(l),u=Math.sin(d);c=Math.sin(c*d)/u,t=Math.sin(t*d)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xo=class xo{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,d=2*(o*s-l*i),u=2*(l*t-r*s),m=2*(r*i-o*t);return this.x=t+c*d+o*m-l*u,this.y=i+c*u+l*d-r*m,this.z=s+c*m+r*u-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-i*c,this.z=i*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xo.prototype.isVector3=!0;let Y=xo;const Dr=new Y,jo=new Hi,_o=class _o{constructor(e,t,i,s,r,o,l,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,l,c,d)}set(e,t,i,s,r,o,l,c,d){const u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],l=i[3],c=i[6],d=i[1],u=i[4],m=i[7],h=i[2],p=i[5],_=i[8],y=s[0],g=s[3],f=s[6],S=s[1],C=s[4],M=s[7],E=s[2],T=s[5],x=s[8];return r[0]=o*y+l*S+c*E,r[3]=o*g+l*C+c*T,r[6]=o*f+l*M+c*x,r[1]=d*y+u*S+m*E,r[4]=d*g+u*C+m*T,r[7]=d*f+u*M+m*x,r[2]=h*y+p*S+_*E,r[5]=h*g+p*C+_*T,r[8]=h*f+p*M+_*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8];return t*o*u-t*l*d-i*r*u+i*l*c+s*r*d-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8],m=u*o-l*d,h=l*c-u*r,p=d*r-o*c,_=t*m+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=m*y,e[1]=(s*d-u*i)*y,e[2]=(l*i-s*o)*y,e[3]=h*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-l*t)*y,e[6]=p*y,e[7]=(i*c-d*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,l){const c=Math.cos(r),d=Math.sin(r);return this.set(i*c,i*d,-i*(c*o+d*l)+o+e,-s*d,s*c,-s*(-d*o+c*l)+l+t,0,0,1),this}scale(e,t){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_o.prototype.isMatrix3=!0;let Oe=_o;const Pr=new Oe,Wo=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sh(){const n={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rr]:{primaries:e,whitePoint:i,transfer:ar,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const $e=Sh();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class bh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_i===void 0&&(_i=fs("canvas")),_i.width=e.width,_i.height=e.height;const s=_i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mh=0;class uo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Lr(s[o].image)):r.push(Lr(s[o]))}else r=Lr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Lr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let yh=0;const Ir=new Y;class Nt extends pi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=vn,s=vn,r=Jt,o=Jn,l=bn,c=sn,d=Nt.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=ms(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ir).x}get height(){return this.source.getSize(Ir).y}get depth(){return this.source.getSize(Ir).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=pc;Nt.DEFAULT_ANISOTROPY=1;const vo=class vo{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,d=c[0],u=c[4],m=c[8],h=c[1],p=c[5],_=c[9],y=c[2],g=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(m-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+y)<.1&&Math.abs(_+g)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,M=(p+1)/2,E=(f+1)/2,T=(u+h)/4,x=(m+y)/4,w=(_+g)/4;return C>M&&C>E?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=T/i,r=x/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=w/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-_)*(g-_)+(m-y)*(m-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-_)/S,this.y=(m-y)/S,this.z=(h-u)/S,this.w=Math.acos((d+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vo.prototype.isVector4=!0;let mt=vo;class Eh extends pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Nt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new uo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Eh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tc extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wh extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ur=class ur{constructor(e,t,i,s,r,o,l,c,d,u,m,h,p,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,l,c,d,u,m,h,p,_,y,g)}set(e,t,i,s,r,o,l,c,d,u,m,h,p,_,y,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=c,f[2]=d,f[6]=u,f[10]=m,f[14]=h,f[3]=p,f[7]=_,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ur().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),o=1/vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),d=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*m,_=l*u,y=l*m;t[0]=c*u,t[4]=-c*m,t[8]=d,t[1]=p+_*d,t[5]=h-y*d,t[9]=-l*c,t[2]=y-h*d,t[6]=_+p*d,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*m,_=d*u,y=d*m;t[0]=h+y*l,t[4]=_*l-p,t[8]=o*d,t[1]=o*m,t[5]=o*u,t[9]=-l,t[2]=p*l-_,t[6]=y+h*l,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*m,_=d*u,y=d*m;t[0]=h-y*l,t[4]=-o*m,t[8]=_+p*l,t[1]=p+_*l,t[5]=o*u,t[9]=y-h*l,t[2]=-o*d,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*m,_=l*u,y=l*m;t[0]=c*u,t[4]=_*d-p,t[8]=h*d+y,t[1]=c*m,t[5]=y*d+h,t[9]=p*d-_,t[2]=-d,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*d,_=l*c,y=l*d;t[0]=c*u,t[4]=y-h*m,t[8]=_*m+p,t[1]=m,t[5]=o*u,t[9]=-l*u,t[2]=-d*u,t[6]=p*m+_,t[10]=h-y*m}else if(e.order==="XZY"){const h=o*c,p=o*d,_=l*c,y=l*d;t[0]=c*u,t[4]=-m,t[8]=d*u,t[1]=h*m+y,t[5]=o*u,t[9]=p*m-_,t[2]=_*m-p,t[6]=l*u,t[10]=y*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Th,e,Ah)}lookAt(e,t,i){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Wn.crossVectors(i,Qt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Wn.crossVectors(i,Qt)),Wn.normalize(),ys.crossVectors(Qt,Wn),s[0]=Wn.x,s[4]=ys.x,s[8]=Qt.x,s[1]=Wn.y,s[5]=ys.y,s[9]=Qt.y,s[2]=Wn.z,s[6]=ys.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],l=i[4],c=i[8],d=i[12],u=i[1],m=i[5],h=i[9],p=i[13],_=i[2],y=i[6],g=i[10],f=i[14],S=i[3],C=i[7],M=i[11],E=i[15],T=s[0],x=s[4],w=s[8],F=s[12],A=s[1],L=s[5],U=s[9],V=s[13],N=s[2],O=s[6],Z=s[10],H=s[14],se=s[3],k=s[7],ne=s[11],ie=s[15];return r[0]=o*T+l*A+c*N+d*se,r[4]=o*x+l*L+c*O+d*k,r[8]=o*w+l*U+c*Z+d*ne,r[12]=o*F+l*V+c*H+d*ie,r[1]=u*T+m*A+h*N+p*se,r[5]=u*x+m*L+h*O+p*k,r[9]=u*w+m*U+h*Z+p*ne,r[13]=u*F+m*V+h*H+p*ie,r[2]=_*T+y*A+g*N+f*se,r[6]=_*x+y*L+g*O+f*k,r[10]=_*w+y*U+g*Z+f*ne,r[14]=_*F+y*V+g*H+f*ie,r[3]=S*T+C*A+M*N+E*se,r[7]=S*x+C*L+M*O+E*k,r[11]=S*w+C*U+M*Z+E*ne,r[15]=S*F+C*V+M*H+E*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],d=e[13],u=e[2],m=e[6],h=e[10],p=e[14],_=e[3],y=e[7],g=e[11],f=e[15],S=c*p-d*h,C=l*p-d*m,M=l*h-c*m,E=o*p-d*u,T=o*h-c*u,x=o*m-l*u;return t*(y*S-g*C+f*M)-i*(_*S-g*E+f*T)+s*(_*C-y*E+f*x)-r*(_*M-y*T+g*x)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10];return t*(o*u-l*d)-i*(r*u-l*c)+s*(r*d-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8],m=e[9],h=e[10],p=e[11],_=e[12],y=e[13],g=e[14],f=e[15],S=t*l-i*o,C=t*c-s*o,M=t*d-r*o,E=i*c-s*l,T=i*d-r*l,x=s*d-r*c,w=u*y-m*_,F=u*g-h*_,A=u*f-p*_,L=m*g-h*y,U=m*f-p*y,V=h*f-p*g,N=S*V-C*U+M*L+E*A-T*F+x*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return e[0]=(l*V-c*U+d*L)*O,e[1]=(s*U-i*V-r*L)*O,e[2]=(y*x-g*T+f*E)*O,e[3]=(h*T-m*x-p*E)*O,e[4]=(c*A-o*V-d*F)*O,e[5]=(t*V-s*A+r*F)*O,e[6]=(g*M-_*x-f*C)*O,e[7]=(u*x-h*M+p*C)*O,e[8]=(o*U-l*A+d*w)*O,e[9]=(i*A-t*U-r*w)*O,e[10]=(_*T-y*M+f*S)*O,e[11]=(m*M-u*T-p*S)*O,e[12]=(l*F-o*L-c*w)*O,e[13]=(t*L-i*F+s*w)*O,e[14]=(y*C-_*E-g*S)*O,e[15]=(u*E-m*C+h*S)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,l=e.y,c=e.z,d=r*o,u=r*l;return this.set(d*o+i,d*l-s*c,d*c+s*l,0,d*l+s*c,u*l+i,u*c-s*o,0,d*c-s*l,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,d=r+r,u=o+o,m=l+l,h=r*d,p=r*u,_=r*m,y=o*u,g=o*m,f=l*m,S=c*d,C=c*u,M=c*m,E=i.x,T=i.y,x=i.z;return s[0]=(1-(y+f))*E,s[1]=(p+M)*E,s[2]=(_-C)*E,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(h+f))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(_+C)*x,s[9]=(g-S)*x,s[10]=(1-(h+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=vi.set(s[0],s[1],s[2]).length();const l=vi.set(s[4],s[5],s[6]).length(),c=vi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ln.copy(this);const d=1/o,u=1/l,m=1/c;return ln.elements[0]*=d,ln.elements[1]*=d,ln.elements[2]*=d,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=m,ln.elements[9]*=m,ln.elements[10]*=m,t.setFromRotationMatrix(ln),i.x=o,i.y=l,i.z=c,this}makePerspective(e,t,i,s,r,o,l=fn,c=!1){const d=this.elements,u=2*r/(t-e),m=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let _,y;if(c)_=r/(o-r),y=o*r/(o-r);else if(l===fn)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(l===hs)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=u,d[4]=0,d[8]=h,d[12]=0,d[1]=0,d[5]=m,d[9]=p,d[13]=0,d[2]=0,d[6]=0,d[10]=_,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,r,o,l=fn,c=!1){const d=this.elements,u=2/(t-e),m=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,y;if(c)_=1/(o-r),y=o/(o-r);else if(l===fn)_=-2/(o-r),y=-(o+r)/(o-r);else if(l===hs)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=u,d[4]=0,d[8]=0,d[12]=h,d[1]=0,d[5]=m,d[9]=0,d[13]=p,d[2]=0,d[6]=0,d[10]=_,d[14]=y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ur.prototype.isMatrix4=!0;let ft=ur;const vi=new Y,ln=new ft,Th=new Y(0,0,0),Ah=new Y(1,1,1),Wn=new Y,ys=new Y,Qt=new Y,qo=new ft,Yo=new Hi;class ti{constructor(e=0,t=0,i=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],d=s[5],u=s[9],m=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rh=0;const $o=new Y,Si=new Hi,Dn=new ft,Es=new Y,Ki=new Y,Ch=new Y,Nh=new Hi,Ko=new Y(1,0,0),Zo=new Y(0,1,0),Jo=new Y(0,0,1),Qo={type:"added"},Dh={type:"removed"},bi={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Dt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new Y,t=new ti,i=new Hi,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Oe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Ko,e)}rotateY(e){return this.rotateOnAxis(Zo,e)}rotateZ(e){return this.rotateOnAxis(Jo,e)}translateOnAxis(e,t){return $o.copy(e).applyQuaternion(this.quaternion),this.position.add($o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ko,e)}translateY(e){return this.translateOnAxis(Zo,e)}translateZ(e){return this.translateOnAxis(Jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Es.copy(e):Es.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ki,Es,this.up):Dn.lookAt(Es,Ki,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Dn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qo),bi.child=e,this.dispatchEvent(bi),bi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dh),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qo),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const m=c[d];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),d=o(e.textures),u=o(e.images),m=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),u.length>0&&(i.images=u),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(l){const c=[];for(const d in l){const u=l[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new Y(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Li extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ph={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),f=this._getHandJoint(d,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],h=u.position.distanceTo(m.position),p=.02,_=.005;d.inputState.pinching&&h>p+_?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=p-_&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ph)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Or(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=gh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Or(o,r,e+1/3),this.g=Or(o,r,e),this.b=Or(o,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Rc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return $e.workingToColorSpace(Ut.copy(this),e),Math.round(Ke(Ut.r*255,0,255))*65536+Math.round(Ke(Ut.g*255,0,255))*256+Math.round(Ke(Ut.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ut.copy(this),t);const i=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(i,s,r),l=Math.min(i,s,r);let c,d;const u=(l+o)/2;if(l===o)c=0,d=0;else{const m=o-l;switch(d=u<=.5?m/(o+l):m/(2-o-l),o){case i:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-i)/m+2;break;case r:c=(i-s)/m+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=nn){$e.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,s=Ut.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(ws);const i=Nr(Xn.h,ws.h,t),s=Nr(Xn.s,ws.s,t),r=Nr(Xn.l,ws.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ye;Ye.NAMES=Rc;class Lh extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new Y,Pn=new Y,Br=new Y,Ln=new Y,Mi=new Y,yi=new Y,el=new Y,kr=new Y,zr=new Y,Gr=new Y,Vr=new mt,Hr=new mt,jr=new mt;class hn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){cn.subVectors(s,t),Pn.subVectors(i,t),Br.subVectors(e,t);const o=cn.dot(cn),l=cn.dot(Pn),c=cn.dot(Br),d=Pn.dot(Pn),u=Pn.dot(Br),m=o*d-l*l;if(m===0)return r.set(0,0,0),null;const h=1/m,p=(d*c-l*u)*h,_=(o*u-l*c)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,s,r,o,l,c){return this.getBarycoord(e,t,i,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(l,Ln.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vr.setScalar(0),Hr.setScalar(0),jr.setScalar(0),Vr.fromBufferAttribute(e,t),Hr.fromBufferAttribute(e,i),jr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vr,r.x),o.addScaledVector(Hr,r.y),o.addScaledVector(jr,r.z),o}static isFrontFacing(e,t,i,s){return cn.subVectors(i,t),Pn.subVectors(e,t),cn.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,l;Mi.subVectors(s,i),yi.subVectors(r,i),kr.subVectors(e,i);const c=Mi.dot(kr),d=yi.dot(kr);if(c<=0&&d<=0)return t.copy(i);zr.subVectors(e,s);const u=Mi.dot(zr),m=yi.dot(zr);if(u>=0&&m<=u)return t.copy(s);const h=c*m-u*d;if(h<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(i).addScaledVector(Mi,o);Gr.subVectors(e,r);const p=Mi.dot(Gr),_=yi.dot(Gr);if(_>=0&&p<=_)return t.copy(r);const y=p*d-c*_;if(y<=0&&d>=0&&_<=0)return l=d/(d-_),t.copy(i).addScaledVector(yi,l);const g=u*_-p*m;if(g<=0&&m-u>=0&&p-_>=0)return el.subVectors(r,s),l=(m-u)/(m-u+(p-_)),t.copy(s).addScaledVector(el,l);const f=1/(g+y+h);return o=y*f,l=h*f,t.copy(i).addScaledVector(Mi,o).addScaledVector(yi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gs{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),As.subVectors(this.max,Zi),Ei.subVectors(e.a,Zi),wi.subVectors(e.b,Zi),Ti.subVectors(e.c,Zi),qn.subVectors(wi,Ei),Yn.subVectors(Ti,wi),ai.subVectors(Ei,Ti);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!Wr(t,Ei,wi,Ti,As)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,Ei,wi,Ti,As))?!1:(Rs.crossVectors(qn,Yn),t=[Rs.x,Rs.y,Rs.z],Wr(t,Ei,wi,Ti,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],dn=new Y,Ts=new gs,Ei=new Y,wi=new Y,Ti=new Y,qn=new Y,Yn=new Y,ai=new Y,Zi=new Y,As=new Y,Rs=new Y,oi=new Y;function Wr(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){oi.fromArray(n,r);const l=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=e.dot(oi),d=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>l)return!1}return!0}const St=new Y,Cs=new Ze;let Ih=0;class ui extends pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ih++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=e!==void 0?co(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_h(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):vh(e,this.array)}}class Cc extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nc extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Uh=new gs,Ji=new Y,Xr=new Y;class hr{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ji,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Xr)),this.expandByPoint(Ji.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fh=0;const an=new ft,qr=new Dt,Ai=new Y,en=new gs,Qi=new gs,Tt=new Y;class Tn extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hh(e)?Nc:Cc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return qr.lookAt(e),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Qi.setFromBufferAttribute(l),this.morphTargetsRelative?(Tt.addVectors(en.min,Qi.min),en.expandByPoint(Tt),Tt.addVectors(en.max,Qi.max),en.expandByPoint(Tt)):(en.expandByPoint(Qi.min),en.expandByPoint(Qi.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],c=this.morphTargetsRelative;for(let d=0,u=l.count;d<u;d++)Tt.fromBufferAttribute(l,d),c&&(Ai.fromBufferAttribute(e,d),Tt.add(Ai)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const l=[],c=[],d=new Uint8Array(i.count);for(let F=0;F<i.count;F++)l[F]=new Y,c[F]=new Y;const u=new Y,m=new Y,h=new Y,p=new Ze,_=new Ze,y=new Ze,g=new Y,f=new Y;function S(F,A,L){d[F]=d[A]=d[L]=1,u.fromBufferAttribute(i,F),m.fromBufferAttribute(i,A),h.fromBufferAttribute(i,L),p.fromBufferAttribute(r,F),_.fromBufferAttribute(r,A),y.fromBufferAttribute(r,L),m.sub(u),h.sub(u),_.sub(p),y.sub(p);const U=1/(_.x*y.y-y.x*_.y);isFinite(U)&&(g.copy(m).multiplyScalar(y.y).addScaledVector(h,-_.y).multiplyScalar(U),f.copy(h).multiplyScalar(_.x).addScaledVector(m,-y.x).multiplyScalar(U),l[F].add(g),l[A].add(g),l[L].add(g),c[F].add(f),c[A].add(f),c[L].add(f))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,A=C.length;F<A;++F){const L=C[F],U=L.start,V=L.count;for(let N=U,O=U+V;N<O;N+=3)S(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new Y,E=new Y,T=new Y,x=new Y;function w(F){T.fromBufferAttribute(s,F),x.copy(T);const A=l[F];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),E.crossVectors(x,A);const U=E.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,U)}for(let F=0,A=i.count;F<A;++F)d[F]&&w(F);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new Y,r=new Y,o=new Y,l=new Y,c=new Y,d=new Y,u=new Y,m=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,r),m.subVectors(s,r),u.cross(m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,g),l.add(u),c.add(u),d.add(u),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),m.subVectors(s,r),u.cross(m),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(l,c){const d=l.array,u=l.itemSize,m=l.normalized,h=new d.constructor(c.length*u);let p=0,_=0;for(let y=0,g=c.length;y<g;y++){l.isInterleavedBufferAttribute?p=c[y]*l.data.stride+l.offset:p=c[y]*u;for(let f=0;f<u;f++)h[_++]=d[p++]}return new ui(h,u,m)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,i=this.index.array,s=this.attributes;for(const l in s){const c=s[l],d=e(c,i);t.setAttribute(l,d)}const r=this.morphAttributes;for(const l in r){const c=[],d=r[l];for(let u=0,m=d.length;u<m;u++){const h=d[u],p=e(h,i);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let m=0,h=d.length;m<h;m++){const p=d[m];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const u=s[d];this.setAttribute(d,u.clone(t))}const r=e.morphAttributes;for(const d in r){const u=[],m=r[d];for(let h=0,p=m.length;h<p;h++)u.push(m[h].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,u=o.length;d<u;d++){const m=o[d];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yr=new Y,Oh=new Y,Bh=new Oe;class Kn{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Yr.subVectors(i,t).cross(Oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Yr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bh.getNormalMatrix(e),s=this.coplanarPoint(Yr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let kh=0;class ji extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=as,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=ac,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const l in r){const c=r[l];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Kn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Un=new Y,$r=new Y,Ns=new Y,Ds=new Y;class Dc{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$r.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Ds.copy(this.origin).sub($r);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ns),l=Ds.dot(this.direction),c=-Ds.dot(Ns),d=Ds.lengthSq(),u=Math.abs(1-o*o);let m,h,p,_;if(u>0)if(m=o*c-l,h=o*l-c,_=r*u,m>=0)if(h>=-_)if(h<=_){const y=1/u;m*=y,h*=y,p=m*(m+o*h+2*l)+h*(o*m+h+2*c)+d}else h=r,m=Math.max(0,-(o*h+l)),p=-m*m+h*(h+2*c)+d;else h=-r,m=Math.max(0,-(o*h+l)),p=-m*m+h*(h+2*c)+d;else h<=-_?(m=Math.max(0,-(-o*r+l)),h=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+d):h<=_?(m=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+d):(m=Math.max(0,-(o*r+l)),h=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+d);else h=o>0?-r:r,m=Math.max(0,-(o*h+l)),p=-m*m+h*(h+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy($r).addScaledVector(Ns,h),p}intersectSphere(e,t){if(e.radius<0)return null;Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,l,c;const d=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return d>=0?(i=(e.min.x-h.x)*d,s=(e.max.x-h.x)*d):(i=(e.max.x-h.x)*d,s=(e.min.x-h.x)*d),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),m>=0?(l=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(l=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,l=this.direction,c=l.x,d=l.y,u=l.z,m=e.x-o.x,h=e.y-o.y,p=e.z-o.z,_=t.x-o.x,y=t.y-o.y,g=t.z-o.z,f=i.x-o.x,S=i.y-o.y,C=i.z-o.z,M=Math.abs(c),E=Math.abs(d),T=Math.abs(u);let x,w,F,A,L,U,V,N,O,Z,H,se;if(M>=E&&M>=T?(F=c,U=m,O=_,se=f,c>=0?(x=d,w=u,A=h,L=p,V=y,N=g,Z=S,H=C):(x=u,w=d,A=p,L=h,V=g,N=y,Z=C,H=S)):E>=T?(F=d,U=h,O=y,se=S,d>=0?(x=u,w=c,A=p,L=m,V=g,N=_,Z=C,H=f):(x=c,w=u,A=m,L=p,V=_,N=g,Z=f,H=C)):(F=u,U=p,O=g,se=C,u>=0?(x=c,w=d,A=m,L=h,V=_,N=y,Z=f,H=S):(x=d,w=c,A=h,L=m,V=y,N=_,Z=S,H=f)),F===0)return null;const k=x/F,ne=w/F,ie=1/F,Me=A-k*U,Ne=L-ne*U,j=V-k*O,ue=N-ne*O,W=Z-k*se,K=H-ne*se,ae=W*ue-K*j,ye=Me*K-Ne*W,We=j*Ne-ue*Me;if(s){if(ae<0||ye<0||We<0)return null}else if((ae<0||ye<0||We<0)&&(ae>0||ye>0||We>0))return null;const Ae=ae+ye+We;if(Ae===0)return null;const Be=ie*(ae*U+ye*O+We*se);return(Ae>0?Be<0:Be>0)?null:this.at(Be/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pc extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tl=new ft,li=new Dc,Ps=new hr,nl=new Y,Ls=new Y,Is=new Y,Us=new Y,Kr=new Y,Fs=new Y,il=new Y,Os=new Y;class yn extends Dt{constructor(e=new Tn,t=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){Fs.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const u=l[c],m=r[c];u!==0&&(Kr.fromBufferAttribute(m,e),o?Fs.addScaledVector(Kr,u):Fs.addScaledVector(Kr.sub(t),u))}t.add(Fs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(Ps.containsPoint(li.origin)===!1&&(li.intersectSphere(Ps,nl)===null||li.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(r).invert(),li.copy(e.ray).applyMatrix4(tl),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,d=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,h=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],f=o[g.materialIndex],S=Math.max(g.start,p.start),C=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=S,E=C;M<E;M+=3){const T=l.getX(M),x=l.getX(M+1),w=l.getX(M+2);s=Bs(this,f,e,i,d,u,m,T,x,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,f=y;g<f;g+=3){const S=l.getX(g),C=l.getX(g+1),M=l.getX(g+2);s=Bs(this,o,e,i,d,u,m,S,C,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],f=o[g.materialIndex],S=Math.max(g.start,p.start),C=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let M=S,E=C;M<E;M+=3){const T=M,x=M+1,w=M+2;s=Bs(this,f,e,i,d,u,m,T,x,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=_,f=y;g<f;g+=3){const S=g,C=g+1,M=g+2;s=Bs(this,o,e,i,d,u,m,S,C,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function zh(n,e,t,i,s,r,o,l){let c;if(e.side===Xt?c=i.intersectTriangle(o,r,s,!0,l):c=i.intersectTriangle(s,r,o,e.side===hi,l),c===null)return null;Os.copy(l),Os.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Os);return d<t.near||d>t.far?null:{distance:d,point:Os.clone(),object:n}}function Bs(n,e,t,i,s,r,o,l,c,d){n.getVertexPosition(l,Ls),n.getVertexPosition(c,Is),n.getVertexPosition(d,Us);const u=zh(n,e,t,i,Ls,Is,Us,il);if(u){const m=new Y;hn.getBarycoord(il,Ls,Is,Us,m),s&&(u.uv=hn.getInterpolatedAttribute(s,l,c,d,m,new Ze)),r&&(u.uv1=hn.getInterpolatedAttribute(r,l,c,d,m,new Ze)),o&&(u.normal=hn.getInterpolatedAttribute(o,l,c,d,m,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:l,b:c,c:d,normal:new Y,materialIndex:0};hn.getNormal(Ls,Is,Us,h.normal),u.face=h,u.barycoord=m}return u}class Gh extends Nt{constructor(e=null,t=1,i=1,s,r,o,l,c,d=Ct,u=Ct,m,h){super(null,o,l,c,d,u,s,r,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ci=new hr,Vh=new Ze(.5,.5),ks=new Y;class ps{constructor(e=new Kn,t=new Kn,i=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn,i=!1){const s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],d=r[3],u=r[4],m=r[5],h=r[6],p=r[7],_=r[8],y=r[9],g=r[10],f=r[11],S=r[12],C=r[13],M=r[14],E=r[15];if(s[0].setComponents(d-o,p-u,f-_,E-S).normalize(),s[1].setComponents(d+o,p+u,f+_,E+S).normalize(),s[2].setComponents(d+l,p+m,f+y,E+C).normalize(),s[3].setComponents(d-l,p-m,f-y,E-C).normalize(),i)s[4].setComponents(c,h,g,M).normalize(),s[5].setComponents(d-c,p-h,f-g,E-M).normalize();else if(s[4].setComponents(d-c,p-h,f-g,E-M).normalize(),t===fn)s[5].setComponents(d+c,p+h,f+g,E+M).normalize();else if(t===hs)s[5].setComponents(c,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=Vh.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ks.x=s.normal.x>0?e.max.x:e.min.x,ks.y=s.normal.y>0?e.max.y:e.min.y,ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const sl=new ft;class ho{constructor(){this.coordinateSystem=fn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];sl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ps),i[s].setFromProjectionMatrix(sl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ps),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new ho().copy(this)}}class Lc extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const or=new Y,lr=new Y,rl=new ft,es=new Dc,zs=new hr,Zr=new Y,al=new Y;class Hh extends Dt{constructor(e=new Tn,t=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)or.fromBufferAttribute(t,s-1),lr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=or.distanceTo(lr);e.setAttribute("lineDistance",new rn(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,e.ray.intersectsSphere(zs)===!1)return;rl.copy(s).invert(),es.copy(e.ray).applyMatrix4(rl);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=d){const f=u.getX(y),S=u.getX(y+1),C=Gs(this,e,es,c,f,S,y);C&&t.push(C)}if(this.isLineLoop){const y=u.getX(_-1),g=u.getX(p),f=Gs(this,e,es,c,y,g,_-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=p,g=_-1;y<g;y+=d){const f=Gs(this,e,es,c,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){const y=Gs(this,e,es,c,_-1,p,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Gs(n,e,t,i,s,r,o){const l=n.geometry.attributes.position;if(or.fromBufferAttribute(l,s),lr.fromBufferAttribute(l,r),t.distanceSqToSegment(or,lr,Zr,al)>i)return;Zr.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(Zr);if(!(d<e.near||d>e.far))return{distance:d,point:al.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Ic extends Nt{constructor(e=[],t=Bi,i,s,r,o,l,c,d,u){super(e,t,i,s,r,o,l,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jh extends Nt{constructor(e,t,i,s,r,o,l,c,d){super(e,t,i,s,r,o,l,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zi extends Nt{constructor(e,t,i=En,s,r,o,l=Ct,c=Ct,d,u=ei,m=1){if(u!==ei&&u!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:m};super(h,s,r,o,l,c,u,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Uc extends zi{constructor(e,t=En,i=Bi,s,r,o=Ct,l=Ct,c,d=ei){const u={width:e,height:e,depth:1},m=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,l,c,d),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fc extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xs extends Tn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],d=[],u=[],m=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new rn(d,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(m,2));function _(y,g,f,S,C,M,E,T,x,w,F){const A=M/x,L=E/w,U=M/2,V=E/2,N=T/2,O=x+1,Z=w+1;let H=0,se=0;const k=new Y;for(let ne=0;ne<Z;ne++){const ie=ne*L-V;for(let Me=0;Me<O;Me++){const Ne=Me*A-U;k[y]=Ne*S,k[g]=ie*C,k[f]=N,d.push(k.x,k.y,k.z),k[y]=0,k[g]=0,k[f]=T>0?1:-1,u.push(k.x,k.y,k.z),m.push(Me/x),m.push(1-ne/w),H+=1}}for(let ne=0;ne<w;ne++)for(let ie=0;ie<x;ie++){const Me=h+ie+O*ne,Ne=h+ie+O*(ne+1),j=h+(ie+1)+O*(ne+1),ue=h+(ie+1)+O*ne;c.push(Me,Ne,ue),c.push(Ne,j,ue),se+=6}l.addGroup(p,se,F),p+=se,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fr extends Tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,l=Math.floor(i),c=Math.floor(s),d=l+1,u=c+1,m=e/l,h=t/c,p=[],_=[],y=[],g=[];for(let f=0;f<u;f++){const S=f*h-o;for(let C=0;C<d;C++){const M=C*m-r;_.push(M,-S,0),y.push(0,0,1),g.push(C/l),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<l;S++){const C=S+d*f,M=S+d*(f+1),E=S+1+d*(f+1),T=S+1+d*f;p.push(C,M,T),p.push(M,E,T)}this.setIndex(p),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(y,3)),this.setAttribute("uv",new rn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class os extends Tn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let d=0;const u=[],m=new Y,h=new Y,p=[],_=[],y=[],g=[];for(let f=0;f<=i;f++){const S=[],C=f/i,M=o+C*l,E=e*Math.cos(M),T=Math.sqrt(e*e-E*E);let x=0;f===0&&o===0?x=.5/t:f===i&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const F=w/t,A=s+F*r;m.x=-T*Math.cos(A),m.y=E,m.z=T*Math.sin(A),_.push(m.x,m.y,m.z),h.copy(m).normalize(),y.push(h.x,h.y,h.z),g.push(F+x,1-C),S.push(d++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){const C=u[f][S+1],M=u[f][S],E=u[f+1][S],T=u[f+1][S+1];(f!==0||o>0)&&p.push(C,M,T),(f!==i-1||c<Math.PI)&&p.push(M,E,T)}this.setIndex(p),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(y,3)),this.setAttribute("uv",new rn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Gi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(ol(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ol(s[0])){const r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Gi(n[t]);for(const s in i)e[s]=i[s]}return e}function ol(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Oc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Xh={clone:Gi,merge:Wt};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $h extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kh extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zh extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jh extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(ll(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!ll(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function ll(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Qh{constructor(e,t,i){const s=this;let r=!1,o=0,l=0,c;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,l),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,m){return d.push(u,m),this},this.removeHandler=function(u){const m=d.indexOf(u);return m!==-1&&d.splice(m,2),this},this.getHandler=function(u){for(let m=0,h=d.length;m<h;m+=2){const p=d[m],_=d[m+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ef=new Qh;class fo{constructor(e){this.manager=e!==void 0?e:ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri=new WeakMap;class tf extends fo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let m=Ri.get(o);m===void 0&&(m=[],Ri.set(o,m)),m.push({onLoad:t,onError:s})}return o}const l=fs("img");function c(){u(),t&&t(this);const m=Ri.get(this)||[];for(let h=0;h<m.length;h++){const p=m[h];p.onLoad&&p.onLoad(this)}Ri.delete(this),r.manager.itemEnd(e)}function d(m){u(),s&&s(m),Jr.remove(`image:${e}`);const h=Ri.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(m)}Ri.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Jr.add(`image:${e}`,l),r.manager.itemStart(e),l.fetchPriority=this.priority,l.src=e,l}}class nf extends fo{constructor(e){super(e)}load(e,t,i,s){const r=new Nt,o=new tf(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Bc extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Qr=new ft,cl=new Y,dl=new Y;class sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Qr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,d=s?s.y/r.y:0;e.coordinateSystem===hs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),t.multiply(Qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vs=new Y,Hs=new Hi,mn=new Y;class kc extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vs,Hs,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vs,Hs,mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Vs,Hs,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vs,Hs,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new Y,ul=new Ze,hl=new Ze;class un extends kc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,ul,hl),t.subVectors(hl,ul)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/d,s*=o.width/c,i*=o.height/d}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zc extends kc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rf extends sf{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new rf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class af extends Bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ci=-90,Ni=1;class $a extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Ci,Ni,e,t);s.layers=this.layers,this.add(s);const r=new un(Ci,Ni,e,t);r.layers=this.layers,this.add(r);const o=new un(Ci,Ni,e,t);o.layers=this.layers,this.add(o);const l=new un(Ci,Ni,e,t);l.layers=this.layers,this.add(l);const c=new un(Ci,Ni,e,t);c.layers=this.layers,this.add(c);const d=new un(Ci,Ni,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,l,c]=t;for(const d of t)this.remove(d);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,c,d,u]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(m,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class of extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function pl(n,e,t,i){const s=lf(i);switch(t){case vc:return n*e;case bc:return n*e/s.components*s.byteLength;case ao:return n*e/s.components*s.byteLength;case fi:return n*e*2/s.components*s.byteLength;case oo:return n*e*2/s.components*s.byteLength;case Sc:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case lo:return n*e*4/s.components*s.byteLength;case Ys:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _a:case Sa:return Math.max(n,16)*Math.max(e,8)/4;case xa:case va:return Math.max(n,8)*Math.max(e,8)/2;case ba:case Ma:case Ea:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:case ir:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ga:case Va:case Ha:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ja:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sr:case Xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lf(n){switch(n){case sn:case mc:return{byteLength:1,components:1};case us:case gc:case wn:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case En:case io:case Sn:return{byteLength:4,components:1};case xc:case _c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gc(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cf(n){const e=new WeakMap;function t(l,c){const d=l.array,u=l.usage,m=d.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,d,u),l.onUploadCallback();let p;if(d instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)p=n.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=n.SHORT;else if(d instanceof Uint32Array)p=n.UNSIGNED_INT;else if(d instanceof Int32Array)p=n.INT;else if(d instanceof Int8Array)p=n.BYTE;else if(d instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,c,d){const u=c.array,m=c.updateRanges;if(n.bindBuffer(d,l),m.length===0)n.bufferSubData(d,0,u);else{m.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<m.length;p++){const _=m[h],y=m[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,m[h]=y)}m.length=h+1;for(let p=0,_=m.length;p<_;p++){const y=m[p];n.bufferSubData(d,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:s,remove:r,update:o}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
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
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
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
#endif`,op=`uniform sampler2D dfgLUT;
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
}`,lp=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yp=`float getShadowMask() {
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
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform float backgroundBlurriness;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,_m=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Om=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,Gm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:df,alphahash_pars_fragment:uf,alphamap_fragment:hf,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:xf,batching_pars_vertex:_f,batching_vertex:vf,begin_vertex:Sf,beginnormal_vertex:bf,bsdfs:Mf,iridescence_fragment:yf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:Nf,color_pars_vertex:Df,color_vertex:Pf,common:Lf,defaultnormal_vertex:If,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:kf,colorspace_pars_fragment:zf,envmap_fragment:Gf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Hf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:tp,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:Yf,fog_pars_fragment:$f,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Qf,lights_pars_begin:ep,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:ap,lights_physical_pars_fragment:op,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:dp,lightprobes_pars_fragment:up,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:xp,map_particle_fragment:_p,map_particle_pars_fragment:vp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Mp,morphcolor_vertex:yp,morphnormal_vertex:Ep,morphtarget_pars_vertex:wp,morphtarget_vertex:Tp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Np,normal_vertex:Dp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:kp,project_vertex:zp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:$p,skinning_pars_vertex:Kp,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:dm,backgroundCube_vert:um,backgroundCube_frag:hm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:xm,distance_frag:_m,equirect_vert:vm,equirect_frag:Sm,linedashed_vert:bm,linedashed_frag:Mm,meshbasic_vert:ym,meshbasic_frag:Em,meshlambert_vert:wm,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Nm,meshphong_vert:Dm,meshphong_frag:Pm,meshphysical_vert:Lm,meshphysical_frag:Im,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:km,shadow_frag:zm,sprite_vert:Gm,sprite_frag:Vm},Se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},_n={basic:{uniforms:Wt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Wt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Wt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Wt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Wt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Wt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Wt([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Wt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Wt([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Wt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Wt([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Wt([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Wt([Se.lights,Se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};_n.physical={uniforms:Wt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const js={r:0,b:0,g:0},Hm=new ft,Vc=new Oe;Vc.set(-1,0,0,0,1,0,0,0,1);function jm(n,e,t,i,s,r){const o=new Ye(0);let l=s===!0?0:1,c,d,u=null,m=0,h=null;function p(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){const M=S.backgroundBlurriness>0;C=e.get(C,M)}return C}function _(S){let C=!1;const M=p(S);M===null?g(o,l):M&&M.isColor&&(g(M,1),C=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,C){const M=p(C);M&&M.isCubeTexture?(d===void 0&&(d=new yn(new xs(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Gi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Vc),d.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,(u!==M||m!==M.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,u=M,m=M.version,h=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new yn(new fr(2,2),new ni({name:"BackgroundMaterial",uniforms:Gi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||m!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,m=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,C){S.getRGB(js,Oc(n)),t.buffers.color.setClear(js.r,js.g,js.b,C,r)}function f(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,C=1){o.set(S),l=C,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(o,l)},render:_,addToRenderList:y,dispose:f}}function Wm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function l(L,U,V,N,O){let Z=!1;const H=m(L,N,V,U);r!==H&&(r=H,d(r.object)),Z=p(L,N,V,O),Z&&_(L,N,V,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(L,U,V,N),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function d(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function m(L,U,V,N){const O=N.wireframe===!0;let Z=i[U.id];Z===void 0&&(Z={},i[U.id]=Z);const H=L.isInstancedMesh===!0?L.id:0;let se=Z[H];se===void 0&&(se={},Z[H]=se);let k=se[V.id];k===void 0&&(k={},se[V.id]=k);let ne=k[O];return ne===void 0&&(ne=h(c()),k[O]=ne),ne}function h(L){const U=[],V=[],N=[];for(let O=0;O<t;O++)U[O]=0,V[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,U,V,N){const O=r.attributes,Z=U.attributes;let H=0;const se=V.getAttributes();for(const k in se)if(se[k].location>=0){const ie=O[k];let Me=Z[k];if(Me===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(Me=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(Me=L.instanceColor)),ie===void 0||ie.attribute!==Me||Me&&ie.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function _(L,U,V,N){const O={},Z=U.attributes;let H=0;const se=V.getAttributes();for(const k in se)if(se[k].location>=0){let ie=Z[k];ie===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const Me={};Me.attribute=ie,ie&&ie.data&&(Me.data=ie.data),O[k]=Me,H++}r.attributes=O,r.attributesNum=H,r.index=N}function y(){const L=r.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function g(L){f(L,0)}function f(L,U){const V=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;V[L]=1,N[L]===0&&(n.enableVertexAttribArray(L),N[L]=1),O[L]!==U&&(n.vertexAttribDivisor(L,U),O[L]=U)}function S(){const L=r.newAttributes,U=r.enabledAttributes;for(let V=0,N=U.length;V<N;V++)U[V]!==L[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function C(L,U,V,N,O,Z,H){H===!0?n.vertexAttribIPointer(L,U,V,O,Z):n.vertexAttribPointer(L,U,V,N,O,Z)}function M(L,U,V,N){y();const O=N.attributes,Z=V.getAttributes(),H=U.defaultAttributeValues;for(const se in Z){const k=Z[se];if(k.location>=0){let ne=O[se];if(ne===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const ie=ne.normalized,Me=ne.itemSize,Ne=e.get(ne);if(Ne===void 0)continue;const j=Ne.buffer,ue=Ne.type,W=Ne.bytesPerElement,K=ue===n.INT||ue===n.UNSIGNED_INT||ne.gpuType===io;if(ne.isInterleavedBufferAttribute){const ae=ne.data,ye=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,We=ne.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let Ae=0;Ae<k.locationSize;Ae++)f(k.location+Ae,ae.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)g(k.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Ae=0;Ae<k.locationSize;Ae++)C(k.location+Ae,Me/k.locationSize,ue,ie,ye*W,(We+Me/k.locationSize*Ae)*W,K)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)f(k.location+ae,ne.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<k.locationSize;ae++)g(k.location+ae);n.bindBuffer(n.ARRAY_BUFFER,j);for(let ae=0;ae<k.locationSize;ae++)C(k.location+ae,Me/k.locationSize,ue,ie,Me*W,Me/k.locationSize*ae*W,K)}}else if(H!==void 0){const ie=H[se];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(k.location,ie);break;case 3:n.vertexAttrib3fv(k.location,ie);break;case 4:n.vertexAttrib4fv(k.location,ie);break;default:n.vertexAttrib1fv(k.location,ie)}}}}S()}function E(){F();for(const L in i){const U=i[L];for(const V in U){const N=U[V];for(const O in N){const Z=N[O];for(const H in Z)u(Z[H].object),delete Z[H];delete N[O]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const U=i[L.id];for(const V in U){const N=U[V];for(const O in N){const Z=N[O];for(const H in Z)u(Z[H].object),delete Z[H];delete N[O]}}delete i[L.id]}function x(L){for(const U in i){const V=i[U];for(const N in V){const O=V[N];if(O[L.id]===void 0)continue;const Z=O[L.id];for(const H in Z)u(Z[H].object),delete Z[H];delete O[L.id]}}}function w(L){for(const U in i){const V=i[U],N=L.isInstancedMesh===!0?L.id:0,O=V[N];if(O!==void 0){for(const Z in O){const H=O[Z];for(const se in H)u(H[se].object),delete H[se];delete O[Z]}delete V[N],Object.keys(V).length===0&&delete i[U]}}}function F(){A(),o=!0,r!==s&&(r=s,d(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:S}}function Xm(n,e,t){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function l(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let h=0;for(let p=0;p<u;p++)h+=d[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function qm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==bn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){const w=x===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==sn&&x!==Sn&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const u=c(d);u!==d&&(Ue("WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:M,maxSamples:E,samples:T}}function Ym(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Kn,l=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const p=m.length!==0||h||i!==0||s;return s=h,i=m.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){t=u(m,h,0)},this.setState=function(m,h,p){const _=m.clippingPlanes,y=m.clipIntersection,g=m.clipShadows,f=n.get(m);if(!s||_===null||_.length===0||r&&!g)r?u(null):d();else{const S=r?0:i,C=S*4;let M=f.clippingState||null;c.value=M,M=u(_,h,C,p);for(let E=0;E!==C;++E)M[E]=t[E];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(m,h,p,_){const y=m!==null?m.length:0;let g=null;if(y!==0){if(g=c.value,_!==!0||g===null){const f=p+y*4,S=h.matrixWorldInverse;l.getNormalMatrix(S),(g===null||g.length<f)&&(g=new Float32Array(f));for(let C=0,M=p;C!==y;++C,M+=4)o.copy(m[C]).applyMatrix4(S,l),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}class po extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ic(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xs(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Ui});r.uniforms.tEquirect.value=t;const o=new yn(s,r),l=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Jt),new $a(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ml=256,$m=3,Km=20,Hc=256,jc=16,Zm=3,Jm=new Y,Qm=new Ye;class cr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $a(1,10,null),this._boxMesh=new yn(new xs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:l=Jm}=r,c=this._renderer;this._setSize(o);const d=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,h=c.autoClearColor,p=c.autoClearDepth,_=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(Qm));const g=new $a(i,s,u);return g.position.copy(l),g.update(c,e),c.autoClear=m,c.autoClearColor=h,c.autoClearDepth=p,c.autoClearStencil=_,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(d,t)),this._applyPMREM(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ml,xh(e))}_fromTexture(e,t){e.mapping===Bi||e.mapping===ds?this._setSize(e.image.length===0?ml:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=gl(e,!1,!1),i=Math.log2(e)-$m;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=gl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bi||e.mapping===ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=eg(),this._integrationMaterial=tg());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/jc);for(let o=0;o<=i;o++){const l=cr.lodToRoughness(o,i);if(o>i-Zm)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const c=l>0?Math.log2(t)+.5*Math.log2(6/(Hc*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ng());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function gl(n,e,t){return new po(n,{minFilter:Jn,generateMipmaps:e,type:wn,colorSpace:rr,depthBuffer:t})}function _s(n,e,t){return new ni({name:n,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:Xt,blending:Ui,depthTest:!1,depthWrite:!1})}function eg(){return _s("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hc}u

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
	`)}function tg(){return _s("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jc}},`

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
	`)}function ng(){return _s("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Km}
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
	`)}function xl(){return _s("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _l(){return _s("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ig(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===wr||p===Tr)if(e.has(h)){const _=e.get(h).texture;return l(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new po(_.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",d),l(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const p=h.mapping,_=p===wr||p===Tr,y=p===Bi||p===ds;if(_||y){let g=t.get(h);const f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new cr(n)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return _&&S&&S.height>0||y&&S&&c(S)?(i===null&&(i=new cr(n)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h,p){return p===wr?h.mapping=Bi:p===Tr&&(h.mapping=ds),h}function c(h){let p=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&p++;return p===_}function d(h){const p=h.target;p.removeEventListener("dispose",d);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Js("WebGLRenderer: "+i+" extension not supported."),s}}}function rg(n,e,t,i){const s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function l(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",l),delete s[_.id],o.unregister(_);const y=r.get(_);y&&(e.remove(y),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",l),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function u(_){const y=_.attributes;for(const g in y)e.update(y[g],n.ARRAY_BUFFER)}function m(_){const y=_.index,g=_.attributes.position;let f=0;if(g===void 0)return;const S=y!==null?y.array.length:g.array.length/3-1,C=g.count>=65535?Nc:Cc,M=new C(Math.ceil(S/3)*6,1),E=M.array;if(y!==null){const x=y.array;f=y.version;for(let w=0,F=0;w<S;w+=3){const A=x[w+0],L=x[w+1],U=x[w+2];E[F++]=A,E[F++]=L,E[F++]=L,E[F++]=U,E[F++]=U,E[F++]=A}}else{f=g.version;for(let x=0,w=0;x<S;x+=3){const F=x+0,A=x+1,L=x+2;E[w++]=F,E[w++]=A,E[w++]=A,E[w++]=L,E[w++]=L,E[w++]=F}}M.version=f;const T=r.get(_);T&&e.remove(T),r.set(_,M)}function h(_){const y=r.get(_);if(y){const g=_.index;g!==null&&y.version<g.version&&m(_)}else m(_);return r.get(_)}function p(){for(const _ in s){const y=s[_].deref();y!==void 0&&c(y)}}return{get:d,update:u,getWireframeAttribute:h,dispose:p}}function ag(n,e,t){let i;function s(m){i=m}let r,o;function l(m){r=m.type,o=m.bytesPerElement}function c(m,h){n.drawElements(i,h,r,m*o),t.update(h,i,1)}function d(m,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,m*o,p),t.update(h,i,p))}function u(m,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,m,0,p);let y=0;for(let g=0;g<p;g++)y+=h[g];t.update(y,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=u}function og(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lg(n,e,t){const i=new WeakMap,s=new mt;function r(o,l,c){const d=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=u!==void 0?u.length:0;let h=i.get(l);if(h===void 0||h.count!==m){let F=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();const p=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let C=0;p===!0&&(C=1),_===!0&&(C=2),y===!0&&(C=3);let M=l.attributes.position.count*C,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*E*4*m),x=new Tc(T,M,E,m);x.type=Sn,x.needsUpdate=!0;const w=C*4;for(let A=0;A<m;A++){const L=g[A],U=f[A],V=S[A],N=M*E*4*A;for(let O=0;O<L.count;O++){const Z=O*w;p===!0&&(s.fromBufferAttribute(L,O),T[N+Z+0]=s.x,T[N+Z+1]=s.y,T[N+Z+2]=s.z,T[N+Z+3]=0),_===!0&&(s.fromBufferAttribute(U,O),T[N+Z+4]=s.x,T[N+Z+5]=s.y,T[N+Z+6]=s.z,T[N+Z+7]=0),y===!0&&(s.fromBufferAttribute(V,O),T[N+Z+8]=s.x,T[N+Z+9]=s.y,T[N+Z+10]=s.z,T[N+Z+11]=V.itemSize===4?s.w:1)}}h={count:m,texture:x,size:new Ze(M,E)},i.set(l,h),l.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<d.length;y++)p+=d[y];const _=l.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",d)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function cg(n,e,t,i,s){let r=new WeakMap;function o(d){const u=s.render.frame,m=d.geometry,h=e.get(d,m);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==u&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),r.set(d,u))),d.isSkinnedMesh){const p=d.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function l(){r=new WeakMap}function c(d){const u=d.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:l}}const dg={[lc]:"LINEAR_TONE_MAPPING",[cc]:"REINHARD_TONE_MAPPING",[dc]:"CINEON_TONE_MAPPING",[no]:"ACES_FILMIC_TONE_MAPPING",[hc]:"AGX_TONE_MAPPING",[fc]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};function ug(n,e,t,i,s,r){const o=new Mn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,d=null;const u=new Tn;u.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new rn([0,2,0,0,2,0],2));const m=new $h({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new yn(u,m),p=new zc(-1,1,1,-1,0,1);let _=null,y=null,g=!1,f,S=null,C=[],M=!1;this.setSize=function(E,T){o.setSize(E,T),l!==null&&l.setSize(E,T),c!==null&&c.setSize(E,T);for(let x=0;x<C.length;x++){const w=C[x];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){C=E,M=C.length>0&&C[0].isRenderPass===!0;const T=o.width,x=o.height;C.length>0&&l===null&&(l=new Mn(T,x,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(T,x,{type:wn,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&C.some(F=>F.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&d===null&&(d=new zi(T,x),r===!0&&(d.format=Qn,d.type=ki)),o.dispose(),o.depthTexture=w?d:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let F=0;F<C.length;F++){const A=C[F];A.setSize&&A.setSize(T,x),w&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(d)}},this.begin=function(E,T){if(g||E.toneMapping===Bn&&C.length===0)return!1;if(S=T,T!==null){const x=T.width,w=T.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return M===!1&&E.setRenderTarget(o),f=E.toneMapping,E.toneMapping=Bn,!0},this.hasRenderPass=function(){return M},this.end=function(E,T){E.toneMapping=f,g=!0;let x=o,w=l;for(let F=0;F<C.length;F++){const A=C[F];A.enabled!==!1&&(A.render(E,w,x,T),A.needsSwap!==!1&&(x=w,w=w===l?c:l))}if(_!==E.outputColorSpace||y!==E.toneMapping){_=E.outputColorSpace,y=E.toneMapping,m.defines={},$e.getTransfer(_)===nt&&(m.defines.SRGB_TRANSFER="");const F=dg[y];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(S),E.render(h,p),S=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),m.dispose()}}const Wc=new Nt,Xc=new zi(1,1),qc=new Uc(1),Yc=new Tc,$c=new wh,Kc=new Ic,vl=[],Sl=[],bl=new Float32Array(16),Ml=new Float32Array(9),yl=new Float32Array(4);function Wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=vl[s];if(r===void 0&&(r=new Float32Array(s),vl[s]=r),e!==0){i.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(r,l)}return r}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pr(n,e){let t=Sl[e];t===void 0&&(t=new Int32Array(e),Sl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;yl.set(i),n.uniformMatrix2fv(this.addr,!1,yl),yt(t,i)}}function xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;Ml.set(i),n.uniformMatrix3fv(this.addr,!1,Ml),yt(t,i)}}function _g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;bl.set(i),n.uniformMatrix4fv(this.addr,!1,bl),yt(t,i)}}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function mr(n){return n.version===0&&(n.compareFunction=Ec,n.needsUpdate=!0),n}function Ag(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=mr(Xc):r=Wc,t.setTexture2D(e||r,s)}function Rg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$c,s)}function Cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=mr(qc):r=Kc,t.setTextureCube(e||r,s)}function Ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Yc,s)}function Dg(n){switch(n){case 5126:return hg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return Sg;case 35668:case 35672:return bg;case 35669:case 35673:return Mg;case 5125:return yg;case 36294:return Eg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Ng}}function Pg(n,e){n.uniform1fv(this.addr,e)}function Lg(n,e){const t=Wi(e,this.size,2);n.uniform2fv(this.addr,t)}function Ig(n,e){const t=Wi(e,this.size,3);n.uniform3fv(this.addr,t)}function Ug(n,e){const t=Wi(e,this.size,4);n.uniform4fv(this.addr,t)}function Fg(n,e){const t=Wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Og(n,e){const t=Wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bg(n,e){const t=Wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kg(n,e){n.uniform1iv(this.addr,e)}function zg(n,e){n.uniform2iv(this.addr,e)}function Gg(n,e){n.uniform3iv(this.addr,e)}function Vg(n,e){n.uniform4iv(this.addr,e)}function Hg(n,e){n.uniform1uiv(this.addr,e)}function jg(n,e){n.uniform2uiv(this.addr,e)}function Wg(n,e){n.uniform3uiv(this.addr,e)}function Xg(n,e){n.uniform4uiv(this.addr,e)}function qg(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=mr(Xc):o=Wc;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function Yg(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$c,r[o])}function $g(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=mr(qc):o=Kc;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||o,r[l])}function Kg(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Yc,r[o])}function Zg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return zg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Hg;case 36294:return jg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Kg}}class Jg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class Qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zg(t.type)}}class e0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(e,t[l.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function El(n,e){n.seq.push(e),n.map[e.id]=e}function t0(n,e,t){const i=n.name,s=i.length;for(ea.lastIndex=0;;){const r=ea.exec(i),o=ea.lastIndex;let l=r[1];const c=r[2]==="]",d=r[3];if(c&&(l=l|0),d===void 0||d==="["&&o+2===s){El(t,d===void 0?new Jg(l,n,e):new Qg(l,n,e));break}else{let m=t.map[l];m===void 0&&(m=new e0(l),El(t,m)),t=m}}}class Qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);t0(l,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const l=t[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function wl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const n0=37297;let i0=0;function s0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const Tl=new Oe;function r0(n){$e._getMatrix(Tl,$e.workingColorSpace,n);const e=`mat3( ${Tl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case ar:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Al(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+s0(n.getShaderSource(e),l)}else return r}function a0(n,e){const t=r0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const o0={[lc]:"Linear",[cc]:"Reinhard",[dc]:"Cineon",[no]:"ACESFilmic",[hc]:"AgX",[fc]:"Neutral",[uc]:"Custom"};function l0(n,e){const t=o0[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new Y;function c0(){$e.getLuminanceCoefficients(Ws);const n=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function u0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function is(n){return n!==""}function Rl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(n){return n.replace(f0,p0)}function p0(n,e){const t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ka(t)}const m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(n){return n.replace(m0,g0)}function g0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const x0={[qs]:"SHADOWMAP_TYPE_PCF",[ns]:"SHADOWMAP_TYPE_VSM"};function _0(n){return x0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const v0={[ds]:"ENVMAP_MODE_REFRACTION"};function S0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":v0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b0={[oc]:"ENVMAP_BLENDING_MULTIPLY",[eh]:"ENVMAP_BLENDING_MIX",[th]:"ENVMAP_BLENDING_ADD"};function M0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":b0[n.combine]||"ENVMAP_BLENDING_NONE"}function y0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=_0(t),d=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=S0(t),m=M0(t),h=d0(t),p=u0(r),_=s.createProgram();let y,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(is).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(is).join(`
`),g.length>0&&(g+=`
`)):(y=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),g=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?je.tonemapping_pars_fragment:"",t.toneMapping!==Bn?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),c0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),o=Ka(o),o=Rl(o,t),o=Cl(o,t),l=Ka(l),l=Rl(l,t),l=Cl(l,t),o=Nl(o),l=Nl(l),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=f+y+o,C=f+g+l,M=wl(s,s.VERTEX_SHADER,S),E=wl(s,s.FRAGMENT_SHADER,C);s.attachShader(_,M),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(E)||"",N=L.trim(),O=U.trim(),Z=V.trim();let H=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,M,E);else{const k=Al(s,M,"vertex"),ne=Al(s,E,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+k+`
`+ne)}else N!==""?Ue("WebGLProgram: Program Info Log:",N):(O===""||Z==="")&&(se=!1);se&&(A.diagnostics={runnable:H,programLog:N,vertexShader:{log:O,prefix:y},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(M),s.deleteShader(E),x=new Qs(s,_),w=h0(s,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(_,n0)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let E0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new T0(e),t.set(e,i)),i}}class T0{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}}function A0(n){return n===fi||n===ir||n===sr}function R0(n,e,t,i,s,r){const o=new Ac,l=new w0,c=new Set,d=[],u=new Map,m=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,w,F,A,L,U){const V=A.fog,N=L.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||O,Z),se=h[x.type];let k=i.precision;x.precision!==null&&(k=i.getMaxPrecision(x.precision),k!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));const ne=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=ne!==void 0?ne.length:0;let Me=0;N.morphAttributes.position!==void 0&&(Me=1),N.morphAttributes.normal!==void 0&&(Me=2),N.morphAttributes.color!==void 0&&(Me=3);let Ne,j,ue,W;if(se){const ve=_n[se];Ne=ve.vertexShader,j=ve.fragmentShader}else{Ne=x.vertexShader,j=x.fragmentShader;const ve=l.getVertexShaderStage(x),tt=l.getFragmentShaderStage(x);l.update(x,ve,tt),ue=ve.id,W=tt.id}const K=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),ye=L.isInstancedMesh===!0,We=L.isBatchedMesh===!0,Ae=!!x.map,Be=!!x.matcap,Fe=!!H,Ie=Fe&&H.isPMREMTexture===!0,it=!!x.aoMap,ut=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,at=!!x.normalMap,Bt=!!x.displacementMap,st=!!x.emissiveMap,kt=!!x.metalnessMap,zt=!!x.roughnessMap,Gt=x.anisotropy>0,I=x.clearcoat>0,Vt=x.diffuseRoughness>0,ot=x.dispersion>0,rt=x.retroreflectivity>0,xe=x.iridescence>0,gt=x.sheen>0,De=x.transmission>0,Le=Gt&&!!x.anisotropyMap,R=I&&!!x.clearcoatMap,v=I&&!!x.clearcoatNormalMap,B=I&&!!x.clearcoatRoughnessMap,le=Vt&&!!x.diffuseRoughnessMap,q=xe&&!!x.iridescenceMap,re=xe&&!!x.iridescenceThicknessMap,fe=gt&&!!x.sheenColorMap,Q=gt&&!!x.sheenRoughnessMap,ee=!!x.specularMap,de=!!x.specularColorMap,D=!!x.specularIntensityMap,te=De&&!!x.transmissionMap,J=De&&!!x.thicknessMap,pe=!!x.gradientMap,he=!!x.alphaMap,me=x.alphaTest>0,Ce=!!x.alphaHash,ze=!!x.extensions;let ce=Bn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ce=n.toneMapping);const Pe=Ie?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ve={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:j,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:We,batchingColor:We&&L._colorsTexture!==null,instancing:ye,instancingColor:ye&&L.instanceColor!==null,instancingMorph:ye&&L.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:Be,envMap:Fe,envMapMode:Fe&&H.mapping,envMapPMREM:Ie,envMapMaxLod:Ie?Pe.length-1:null,envMapSize:Ie?Pe[0].width:null,aoMap:it,lightMap:ut,bumpMap:_t,normalMap:at,displacementMap:Bt,emissiveMap:st,normalMapObjectSpace:at&&x.normalMapType===sh,normalMapTangentSpace:at&&x.normalMapType===qa,packedNormalMap:at&&x.normalMapType===qa&&A0(x.normalMap.format),metalnessMap:kt,roughnessMap:zt,anisotropy:Gt,anisotropyMap:Le,clearcoat:I,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:Vt,diffuseRoughnessMap:le,dispersion:ot,retroreflection:rt,iridescence:xe,iridescenceMap:q,iridescenceThicknessMap:re,sheen:gt,sheenColorMap:fe,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:de,specularIntensityMap:D,transmission:De,transmissionMap:te,thicknessMap:J,gradientMap:pe,opaque:x.transparent===!1&&x.blending===as&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:me,alphaHash:Ce,combine:x.combine,mapUv:Ae&&p(x.map.channel),aoMapUv:it&&p(x.aoMap.channel),lightMapUv:ut&&p(x.lightMap.channel),bumpMapUv:_t&&p(x.bumpMap.channel),normalMapUv:at&&p(x.normalMap.channel),displacementMapUv:Bt&&p(x.displacementMap.channel),emissiveMapUv:st&&p(x.emissiveMap.channel),metalnessMapUv:kt&&p(x.metalnessMap.channel),roughnessMapUv:zt&&p(x.roughnessMap.channel),anisotropyMapUv:Le&&p(x.anisotropyMap.channel),clearcoatMapUv:R&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:q&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(x.sheenRoughnessMap.channel),specularMapUv:ee&&p(x.specularMap.channel),specularColorMapUv:de&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:te&&p(x.transmissionMap.channel),thicknessMapUv:J&&p(x.thicknessMap.channel),alphaMapUv:he&&p(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(at||Gt),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Ae||he),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&at===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ae,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:st&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ze&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&x.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function y(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(w,x),f(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function f(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){const w=h[x.type];let F;if(w){const A=_n[w];F=Xh.clone(A.uniforms)}else F=x.uniforms;return F}function C(x,w){let F=u.get(w);return F!==void 0?++F.usedTimes:(F=new y0(n,w,x,s),d.push(F),u.set(w,F)),F}function M(x){if(--x.usedTimes===0){const w=d.indexOf(x);d[w]=d[d.length-1],d.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function T(){l.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:S,acquireProgram:C,releaseProgram:M,releaseShaderCache:E,programs:d,dispose:T}}function C0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function s(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function N0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Pl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ll(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function l(h,p,_,y,g,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=_,S.materialVariant=o(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=g,S.group=f),e++,S}function c(h,p,_,y,g,f,S){S.reversedDepth===!0&&(g=-g);const C=l(h,p,_,y,g,f);_.transmission>0?i.push(C):_.transparent===!0?s.push(C):t.push(C)}function d(h,p,_,y,g,f){const S=l(h,p,_,y,g,f);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,p){t.length>1&&t.sort(h||N0),i.length>1&&i.sort(p||Pl),s.length>1&&s.sort(p||Pl)}function m(){for(let h=e,p=n.length;h<p;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:d,finish:m,sort:u}}function D0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ll,n.set(i,[o])):s>=r.length?(o=new Ll,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function P0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new Ye};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function L0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I0=0;function U0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function F0(n){const e=new P0,t=L0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Y);const s=new Y,r=new ft,o=new ft;function l(d){let u=0,m=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,_=0,y=0,g=0,f=0,S=0,C=0,M=0,E=0,T=0,x=0,w=0,F=0,A=0;d.sort(U0);for(let U=0,V=d.length;U<V;U++){const N=d[U],O=N.color,Z=N.intensity,H=N.distance;let se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===fi?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=O.r*Z,m+=O.g*Z,h+=O.b*Z;else if(N.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],Z);A++}else if(N.isSunLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[_]=ie,i.sunShadowMap[_]=se;const Me=ne.getViewportCount();for(let Ne=0;Ne<Me;Ne++)i.sunShadowMatrix[y+Ne]=ne.getMatrix(Ne),i.sunShadowCascade[y+Ne]=ne._cascadeData[Ne];y+=Me,_++}i.sun[p]=k,p++}else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.directionalShadow[g]=ie,i.directionalShadowMap[g]=se,i.directionalShadowMatrix[g]=N.shadow.matrix,E++}i.directional[g]=k,g++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(O).multiplyScalar(Z),k.distance=H,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[S]=k;const ne=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,ne.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[S]=ne.matrix,N.castShadow){const ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.spotShadow[S]=ie,i.spotShadowMap[S]=se,x++}S++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(O).multiplyScalar(Z),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[C]=k,C++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),k.distance=N.distance,k.decay=N.decay,N.castShadow){const ne=N.shadow,ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=se,i.pointShadowMatrix[f]=N.shadow.matrix,T++}i.point[f]=k,f++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(Z),k.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[M]=k,M++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=h;const L=i.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==f||L.spotLength!==S||L.rectAreaLength!==C||L.hemiLength!==M||L.numSunShadows!==_||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==w||L.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=g,i.spot.length=S,i.rectArea.length=C,i.point.length=f,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-F,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=A,L.sunLength=p,L.directionalLength=g,L.pointLength=f,L.spotLength=S,L.rectAreaLength=C,L.hemiLength=M,L.numSunShadows=_,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=w,L.numLightProbes=A,i.version=I0++)}function c(d,u){let m=0,h=0,p=0,_=0,y=0,g=0;const f=u.matrixWorldInverse;for(let S=0,C=d.length;S<C;S++){const M=d[S];if(M.isSunLight){const E=i.sun[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),m++}else if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(M.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:i}}function Il(n){const e=new F0(n),t=[],i=[],s=[];function r(m){u.camera=m,t.length=0,i.length=0,s.length=0}function o(m){m.isLightProbeGrid?s.push(m):t.push(m)}function l(m){i.push(m)}function c(){e.setup(t),s.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function d(m){e.setupView(t,m)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:l}}function O0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new Il(n),e.set(s,[l])):r>=o.length?(l=new Il(n),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`,z0=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],G0=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ul=new ft,ts=new Y,ta=new Y;function V0(n,e,t){let i=new ps;const s=new Ze,r=new Ze,o=new mt,l=new Zh,c=new Jh,d={},u=t.maxTextureSize,m={[hi]:Xt,[Xt]:hi,[On]:On},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:B0,fragmentShader:k0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new yn(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let f=this.type;this.render=function(T,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Uu&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);const F=n.getRenderTarget(),A=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ui),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=f!==this.type;V&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=T.length;N<O;N++){const Z=T[N],H=Z.shadow;if(H===void 0){Ue("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const se=H.getFrameExtents();s.multiply(se),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,H.mapSize.y=r.y));const k=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=k,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ns){if(Z.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Mn(s.x,s.y,{format:fi,type:wn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new zi(s.x,s.y,Sn),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=ei,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ct,H.map.depthTexture.magFilter=Ct}else Z.isPointLight?(H.map=new po(s.x),H.map.depthTexture=new Uc(s.x,En)):(H.map=new Mn(s.x,s.y),H.map.depthTexture=new zi(s.x,s.y,En)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=ei,this.type===qs?(H.map.depthTexture.compareFunction=k?yc:Mc,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ct,H.map.depthTexture.magFilter=Ct);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const ne=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,w);const ie=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:w.layers;for(let Me=0;Me<ne;Me++){const Ne=H.getCamera(Me);if(Z.isPointLight){const j=H.camera,ue=H.matrix,W=Z.distance||j.far;W!==j.far&&(j.far=W,j.updateProjectionMatrix()),ts.setFromMatrixPosition(Z.matrixWorld),j.position.copy(ts),ta.copy(j.position),ta.add(z0[Me]),j.up.copy(G0[Me]),j.lookAt(ta),j.updateMatrixWorld(),ue.makeTranslation(-ts.x,-ts.y,-ts.z),Ul.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ul,j.coordinateSystem,j.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Me),n.clear();else{Me===0&&(n.setRenderTarget(H.map),n.clear());const j=H.getViewport(Me);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(o)}i=H.getFrustum(Me),M(x,w,Ne,Z,ie,this.type)}H.isPointLightShadow!==!0&&this.type===ns&&S(H,w),H.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(F,A,L)};function S(T,x){const w=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Mn(s.x,s.y,{format:fi,type:wn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,w,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,w,p,y,null)}function C(T,x,w,F){let A=null;const L=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)A=L;else if(A=w.isPointLight===!0?c:l,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const U=A.uuid,V=x.uuid;let N=d[U];N===void 0&&(N={},d[U]=N);let O=N[V];O===void 0&&(O=A.clone(),N[V]=O,x.addEventListener("dispose",E)),A=O}if(A.visible=x.visible,A.wireframe=x.wireframe,F===ns?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:m[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,w.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=n.properties.get(A);U.light=w}return A}function M(T,x,w,F,A,L){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ns)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const N=e.update(T),O=T.material;if(Array.isArray(O)){const Z=N.groups;for(let H=0,se=Z.length;H<se;H++){const k=Z[H],ne=O[k.materialIndex];if(ne&&ne.visible){const ie=C(T,ne,F,L);T.onBeforeShadow(n,T,x,w,N,ie,k),n.renderBufferDirect(w,null,N,ie,T,k),T.onAfterShadow(n,T,x,w,N,ie,k)}}}else if(O.visible){const Z=C(T,O,F,L);T.onBeforeShadow(n,T,x,w,N,Z,null),n.renderBufferDirect(w,null,N,Z,T,null),T.onAfterShadow(n,T,x,w,N,Z,null)}}const V=T.children;for(let N=0,O=V.length;N<O;N++)M(V[N],x,w,F,A,L)}function E(T){T.target.removeEventListener("dispose",E);for(const w in d){const F=d[w],A=T.target.uuid;A in F&&(F[A].dispose(),delete F[A])}}}function H0(n,e){function t(){let D=!1;const te=new mt;let J=null;const pe=new mt(0,0,0,0);return{setMask:function(he){J!==he&&!D&&(n.colorMask(he,he,he,he),J=he)},setLocked:function(he){D=he},setClear:function(he,me,Ce,ze,ce){ce===!0&&(he*=ze,me*=ze,Ce*=ze),te.set(he,me,Ce,ze),pe.equals(te)===!1&&(n.clearColor(he,me,Ce,ze),pe.copy(te))},reset:function(){D=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,te=!1,J=null,pe=null,he=null;return{setReversed:function(me){if(te!==me){const Ce=e.get("EXT_clip_control");me?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),te=me;const ze=he;he=null,this.setClear(ze)}},getReversed:function(){return te},setTest:function(me){me?ae(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(me){J!==me&&!D&&(n.depthMask(me),J=me)},setFunc:function(me){if(te&&(me=mh[me]),pe!==me){switch(me){case ca:n.depthFunc(n.NEVER);break;case da:n.depthFunc(n.ALWAYS);break;case ua:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case ha:n.depthFunc(n.EQUAL);break;case fa:n.depthFunc(n.GEQUAL);break;case pa:n.depthFunc(n.GREATER);break;case ma:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=me}},setLocked:function(me){D=me},setClear:function(me){he!==me&&(he=me,te&&(me=1-me),n.clearDepth(me))},reset:function(){D=!1,J=null,pe=null,he=null,te=!1}}}function s(){let D=!1,te=null,J=null,pe=null,he=null,me=null,Ce=null,ze=null,ce=null;return{setTest:function(Pe){D||(Pe?ae(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(Pe){te!==Pe&&!D&&(n.stencilMask(Pe),te=Pe)},setFunc:function(Pe,Ve,ve){(J!==Pe||pe!==Ve||he!==ve)&&(n.stencilFunc(Pe,Ve,ve),J=Pe,pe=Ve,he=ve)},setOp:function(Pe,Ve,ve){(me!==Pe||Ce!==Ve||ze!==ve)&&(n.stencilOp(Pe,Ve,ve),me=Pe,Ce=Ve,ze=ve)},setLocked:function(Pe){D=Pe},setClear:function(Pe){ce!==Pe&&(n.clearStencil(Pe),ce=Pe)},reset:function(){D=!1,te=null,J=null,pe=null,he=null,me=null,Ce=null,ze=null,ce=null}}}const r=new t,o=new i,l=new s;let c={};const d=new WeakMap;let u={},m={},h={},p=new WeakMap,_=[],y=null,g=!1,f=null,S=null,C=null,M=null,E=null,T=null,x=null,w=new Ye(0,0,0),F=0,A=!1,L=null,U=null,V=null,N=null,O=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,se=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=se>=1):k.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=se>=2);let ne=null,ie={};const Me=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),j=new mt().fromArray(Me),ue=new mt().fromArray(Ne);function W(D,te,J,pe){const he=new Uint8Array(4),me=n.createTexture();n.bindTexture(D,me),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<J;Ce++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(te+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return me}const K={};K[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ae(n.DEPTH_TEST),o.setFunc(cs),_t(!1),at(Bo),ae(n.CULL_FACE),it(Ui);function ae(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function ye(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function We(D,te){return h[D]!==te?(n.bindFramebuffer(D,te),h[D]=te,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=te),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ae(D,te){let J=_,pe=!1;if(D){J=p.get(te),J===void 0&&(J=[],p.set(te,J));const he=D.textures;if(J.length!==he.length||J[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ce=he.length;me<Ce;me++)J[me]=n.COLOR_ATTACHMENT0+me;J.length=he.length,pe=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,pe=!0);pe&&n.drawBuffers(J)}function Be(D){return y!==D?(n.useProgram(D),y=D,!0):!1}const Fe={[Pi]:n.FUNC_ADD,[Ou]:n.FUNC_SUBTRACT,[Bu]:n.FUNC_REVERSE_SUBTRACT};Fe[ku]=n.MIN,Fe[zu]=n.MAX;const Ie={[Gu]:n.ZERO,[Vu]:n.ONE,[Hu]:n.SRC_COLOR,[rc]:n.SRC_ALPHA,[$u]:n.SRC_ALPHA_SATURATE,[qu]:n.DST_COLOR,[Wu]:n.DST_ALPHA,[ju]:n.ONE_MINUS_SRC_COLOR,[ac]:n.ONE_MINUS_SRC_ALPHA,[Yu]:n.ONE_MINUS_DST_COLOR,[Xu]:n.ONE_MINUS_DST_ALPHA,[Ku]:n.CONSTANT_COLOR,[Zu]:n.ONE_MINUS_CONSTANT_COLOR,[Ju]:n.CONSTANT_ALPHA,[Qu]:n.ONE_MINUS_CONSTANT_ALPHA};function it(D,te,J,pe,he,me,Ce,ze,ce,Pe){if(D===Ui){g===!0&&(ye(n.BLEND),g=!1);return}if(g===!1&&(ae(n.BLEND),g=!0),D!==Fu){if(D!==f||Pe!==A){if((S!==Pi||E!==Pi)&&(n.blendEquation(n.FUNC_ADD),S=Pi,E=Pi),Pe)switch(D){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case la:n.blendFunc(n.ONE,n.ONE);break;case ko:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",D);break}else switch(D){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case la:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ko:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zo:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",D);break}C=null,M=null,T=null,x=null,w.set(0,0,0),F=0,f=D,A=Pe}return}he=he||te,me=me||J,Ce=Ce||pe,(te!==S||he!==E)&&(n.blendEquationSeparate(Fe[te],Fe[he]),S=te,E=he),(J!==C||pe!==M||me!==T||Ce!==x)&&(n.blendFuncSeparate(Ie[J],Ie[pe],Ie[me],Ie[Ce]),C=J,M=pe,T=me,x=Ce),(ze.equals(w)===!1||ce!==F)&&(n.blendColor(ze.r,ze.g,ze.b,ce),w.copy(ze),F=ce),f=D,A=!1}function ut(D,te){D.side===On?ye(n.CULL_FACE):ae(n.CULL_FACE);let J=D.side===Xt;te&&(J=!J),_t(J),D.blending===as&&D.transparent===!1?it(Ui):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const pe=D.stencilWrite;l.setTest(pe),pe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),st(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(D){L!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),L=D)}function at(D){D!==Lu?(ae(n.CULL_FACE),D!==U&&(D===Bo?n.cullFace(n.BACK):D===Iu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),U=D}function Bt(D){D!==V&&(H&&n.lineWidth(D),V=D)}function st(D,te,J){D?(ae(n.POLYGON_OFFSET_FILL),(N!==te||O!==J)&&(N=te,O=J,o.getReversed()&&(te=-te,J=-J),n.polygonOffset(te,J))):ye(n.POLYGON_OFFSET_FILL)}function kt(D){D?ae(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function zt(D){D===void 0&&(D=n.TEXTURE0+Z-1),ne!==D&&(n.activeTexture(D),ne=D)}function Gt(D,te,J){J===void 0&&(ne===null?J=n.TEXTURE0+Z-1:J=ne);let pe=ie[J];pe===void 0&&(pe={type:void 0,texture:void 0},ie[J]=pe),(pe.type!==D||pe.texture!==te)&&(ne!==J&&(n.activeTexture(J),ne=J),n.bindTexture(D,te||K[D]),pe.type=D,pe.texture=te)}function I(){const D=ie[ne];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Vt(){try{n.compressedTexImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ot(){try{n.compressedTexImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function rt(){try{n.texSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function xe(){try{n.texSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function gt(){try{n.compressedTexSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function Le(){try{n.texStorage2D(...arguments)}catch(D){et("WebGLState:",D)}}function R(){try{n.texStorage3D(...arguments)}catch(D){et("WebGLState:",D)}}function v(){try{n.texImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function B(){try{n.texImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function le(D){return m[D]!==void 0?m[D]:n.getParameter(D)}function q(D,te){m[D]!==te&&(n.pixelStorei(D,te),m[D]=te)}function re(D){j.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function fe(D){ue.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function Q(D,te){let J=d.get(te);J===void 0&&(J=new WeakMap,d.set(te,J));let pe=J.get(D);pe===void 0&&(pe=n.getUniformBlockIndex(te,D.name),n.uniformBlockBinding(te,pe,pe),J.set(D,pe))}function ee(D,te,J){const he=d.get(te).get(D);c[he]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,J),c[he]=J)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},m={},ne=null,ie={},h={},c={},p=new WeakMap,_=[],y=null,g=!1,f=null,S=null,C=null,M=null,E=null,T=null,x=null,w=new Ye(0,0,0),F=0,A=!1,L=null,U=null,V=null,N=null,O=null,j.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:ae,disable:ye,bindFramebuffer:We,drawBuffers:Ae,useProgram:Be,setBlending:it,setMaterial:ut,setFlipSided:_t,setCullFace:at,setLineWidth:Bt,setPolygonOffset:st,setScissorTest:kt,activeTexture:zt,bindTexture:Gt,unbindTexture:I,compressedTexImage2D:Vt,compressedTexImage3D:ot,texImage2D:v,texImage3D:B,pixelStorei:q,getParameter:le,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Le,texStorage3D:R,texSubImage2D:rt,texSubImage3D:xe,compressedTexSubImage2D:gt,compressedTexSubImage3D:De,scissor:re,viewport:fe,reset:de}}function j0(n,e,t,i,s,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ze,u=new WeakMap,m=new Set;let h;const p=new WeakMap,_=new Set,y=new FinalizationRegistry(R=>_.delete(R));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,v){return g?new OffscreenCanvas(R,v):fs("canvas")}function S(R,v,B){let le=1;const q=Le(R);if((q.width>B||q.height>B)&&(le=B/Math.max(q.width,q.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(le*q.width),fe=Math.floor(le*q.height);h===void 0&&(h=f(re,fe));const Q=v?f(re,fe):h;return Q.width=re,Q.height=fe,Q.getContext("2d").drawImage(R,0,0,re,fe),Ue("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+fe+")."),Q}else return"data"in R&&Ue("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function C(R){return R.generateMipmaps}function M(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,v,B,le,q,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;le&&(fe=e.get("EXT_texture_norm16"),fe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===n.RED&&(B===n.FLOAT&&(Q=n.R32F),B===n.HALF_FLOAT&&(Q=n.R16F),B===n.UNSIGNED_BYTE&&(Q=n.R8),B===n.UNSIGNED_SHORT&&fe&&(Q=fe.R16_EXT),B===n.SHORT&&fe&&(Q=fe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.R8UI),B===n.UNSIGNED_SHORT&&(Q=n.R16UI),B===n.UNSIGNED_INT&&(Q=n.R32UI),B===n.BYTE&&(Q=n.R8I),B===n.SHORT&&(Q=n.R16I),B===n.INT&&(Q=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Q=n.RG32F),B===n.HALF_FLOAT&&(Q=n.RG16F),B===n.UNSIGNED_BYTE&&(Q=n.RG8),B===n.UNSIGNED_SHORT&&fe&&(Q=fe.RG16_EXT),B===n.SHORT&&fe&&(Q=fe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RG8UI),B===n.UNSIGNED_SHORT&&(Q=n.RG16UI),B===n.UNSIGNED_INT&&(Q=n.RG32UI),B===n.BYTE&&(Q=n.RG8I),B===n.SHORT&&(Q=n.RG16I),B===n.INT&&(Q=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),B===n.UNSIGNED_INT&&(Q=n.RGB32UI),B===n.BYTE&&(Q=n.RGB8I),B===n.SHORT&&(Q=n.RGB16I),B===n.INT&&(Q=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),B===n.UNSIGNED_INT&&(Q=n.RGBA32UI),B===n.BYTE&&(Q=n.RGBA8I),B===n.SHORT&&(Q=n.RGBA16I),B===n.INT&&(Q=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&fe&&(Q=fe.RGB16_EXT),B===n.SHORT&&fe&&(Q=fe.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),v===n.RGBA){const ee=re?ar:$e.getTransfer(q);B===n.FLOAT&&(Q=n.RGBA32F),B===n.HALF_FLOAT&&(Q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Q=ee===nt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&fe&&(Q=fe.RGBA16_EXT),B===n.SHORT&&fe&&(Q=fe.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(R,v){let B;return R?v===null||v===En||v===ki?B=n.DEPTH24_STENCIL8:v===Sn?B=n.DEPTH32F_STENCIL8:v===us&&(B=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===ki?B=n.DEPTH_COMPONENT24:v===Sn?B=n.DEPTH_COMPONENT32F:v===us&&(B=n.DEPTH_COMPONENT16),B}function w(R,v){return C(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ct&&R.minFilter!==Jt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function F(R){const v=new WeakRef(R);i.get(R).__ref=v,_.add(v),y.register(R,v,v)}function A(R){const v=i.get(R).__ref;v!==void 0&&(_.delete(v),y.unregister(v))}function L(R){V(R.target)}function U(R){N(R.target)}function V(R){R.removeEventListener("dispose",L),A(R),Z(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&m.delete(R)}function N(R){R.removeEventListener("dispose",U),A(R),se(R)}function O(){for(const R of _){const v=R.deref();v!==void 0&&(v.isRenderTarget===!0?N(v):V(v))}_.clear(),m.clear()}function Z(R){const v=i.get(R);if(v.__webglInit===void 0)return;const B=R.source,le=p.get(B);if(le){const q=le[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&H(R),Object.keys(le).length===0&&p.delete(B)}i.remove(R)}function H(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const B=R.source,le=p.get(B);delete le[v.__cacheKey],o.memory.textures--}function se(R){const v=i.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();const B=R.depthTexture;if(B&&B.renderTarget===R&&V(B),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let re=0;re<v.__webglFramebuffer[q].length;re++)n.deleteFramebuffer(v.__webglFramebuffer[q][re]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const le=R.textures;for(let q=0,re=le.length;q<re;q++){const fe=i.get(le[q]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(le[q])}i.remove(R)}let k=0;function ne(){k=0}function ie(){return k}function Me(R){k=R}function Ne(){const R=k;return R>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function j(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function ue(R,v){const B=i.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const le=R.image;if(le===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(B,R,v);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function W(R,v){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ut(B,R,v);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function K(R,v){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ut(B,R,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function ae(R,v){const B=i.get(R);if(R.version>0&&B.__version!==R.version){_t(B,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const ye={[nr]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[ga]:n.MIRRORED_REPEAT},We={[Ct]:n.NEAREST,[nh]:n.NEAREST_MIPMAP_NEAREST,[Ms]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Ar]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},Ae={[ah]:n.NEVER,[Ec]:n.ALWAYS,[oh]:n.LESS,[Mc]:n.LEQUAL,[lh]:n.EQUAL,[yc]:n.GEQUAL,[ch]:n.GREATER,[dh]:n.NOTEQUAL};function Be(R,v){if(v.type===Sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Jt||v.magFilter===Ar||v.magFilter===Ms||v.magFilter===Jn||v.minFilter===Jt||v.minFilter===Ar||v.minFilter===Ms||v.minFilter===Jn)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ye[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ye[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ye[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,We[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==Ms&&v.minFilter!==Jn||v.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Fe(R,v){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",L),F(v));const le=v.source;let q=p.get(le);q===void 0&&(q={},p.set(le,q));const re=j(v);if(re!==R.__cacheKey){q[re]===void 0&&(q[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),q[re].usedTimes++;const fe=q[R.__cacheKey];fe!==void 0&&(q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&H(v)),R.__cacheKey=re,R.__webglTexture=q[re].texture}return B}function Ie(R,v,B){return Math.floor(Math.floor(R/B)/v)}function it(R,v,B,le){const re=R.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,le,v.data);else{re.sort((D,te)=>D.start-te.start);let fe=0;for(let D=1;D<re.length;D++){const te=re[fe],J=re[D],pe=te.start+te.count,he=Ie(J.start,v.width,4),me=Ie(te.start,v.width,4);J.start<=pe+1&&he===me&&Ie(J.start+J.count-1,v.width,4)===he?te.count=Math.max(te.count,J.start+J.count-te.start):(++fe,re[fe]=J)}re.length=fe+1;const Q=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let D=0,te=re.length;D<te;D++){const J=re[D],pe=Math.floor(J.start/4),he=Math.ceil(J.count/4),me=pe%v.width,Ce=Math.floor(pe/v.width),ze=he,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(n.TEXTURE_2D,0,me,Ce,ze,ce,B,le,v.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function ut(R,v,B){let le=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(le=n.TEXTURE_3D);const q=Fe(R,v),re=v.source;t.bindTexture(le,R.__webglTexture,n.TEXTURE0+B);const fe=i.get(re);if(re.version!==fe.__version||q===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ce=$e.getPrimaries($e.workingColorSpace),Pe=v.colorSpace===Zn?null:$e.getPrimaries(v.colorSpace),Ve=v.colorSpace===Zn||ce===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=S(v.image,!1,s.maxTextureSize);ee=De(v,ee);const de=r.convert(v.format,v.colorSpace),D=r.convert(v.type);let te=T(v.internalFormat,de,D,v.normalized,v.colorSpace,v.isVideoTexture);Be(le,v);let J;const pe=v.mipmaps,he=v.isVideoTexture!==!0,me=fe.__version===void 0||q===!0,Ce=re.dataReady,ze=w(v,ee);if(v.isDepthTexture)te=x(v.format===Qn,v.type),me&&(he?t.texStorage2D(n.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,de,D,null));else if(v.isDataTexture)if(pe.length>0){he&&me&&t.texStorage2D(n.TEXTURE_2D,ze,te,pe[0].width,pe[0].height);for(let ce=0,Pe=pe.length;ce<Pe;ce++)J=pe[ce],he?Ce&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,J.width,J.height,de,D,J.data):t.texImage2D(n.TEXTURE_2D,ce,te,J.width,J.height,0,de,D,J.data);v.generateMipmaps=!1}else he?(me&&t.texStorage2D(n.TEXTURE_2D,ze,te,ee.width,ee.height),Ce&&it(v,ee,de,D)):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,de,D,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){he&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,te,pe[0].width,pe[0].height,ee.depth);for(let ce=0,Pe=pe.length;ce<Pe;ce++)if(J=pe[ce],v.format!==bn)if(de!==null)if(he){if(Ce)if(v.layerUpdates.size>0){const Ve=pl(J.width,J.height,v.format,v.type);for(const ve of v.layerUpdates){const tt=J.data.subarray(ve*Ve/J.data.BYTES_PER_ELEMENT,(ve+1)*Ve/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,ve,J.width,J.height,1,de,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,ee.depth,de,J.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,te,J.width,J.height,ee.depth,0,J.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,ee.depth,de,D,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,te,J.width,J.height,ee.depth,0,de,D,J.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{he&&me&&t.texStorage2D(n.TEXTURE_2D,ze,te,pe[0].width,pe[0].height);for(let ce=0,Pe=pe.length;ce<Pe;ce++)J=pe[ce],v.format!==bn?de!==null?he?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,J.width,J.height,de,J.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,te,J.width,J.height,0,J.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ce&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,J.width,J.height,de,D,J.data):t.texImage2D(n.TEXTURE_2D,ce,te,J.width,J.height,0,de,D,J.data)}else if(v.isDataArrayTexture)if(he){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,te,ee.width,ee.height,ee.depth),Ce)if(v.layerUpdates.size>0){const ce=pl(ee.width,ee.height,v.format,v.type);for(const Pe of v.layerUpdates){const Ve=ee.data.subarray(Pe*ce/ee.data.BYTES_PER_ELEMENT,(Pe+1)*ce/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ee.width,ee.height,1,de,D,Ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,D,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,de,D,ee.data);else if(v.isData3DTexture)he?(me&&t.texStorage3D(n.TEXTURE_3D,ze,te,ee.width,ee.height,ee.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,D,ee.data)):t.texImage3D(n.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,de,D,ee.data);else if(v.isFramebufferTexture){if(me)if(he)t.texStorage2D(n.TEXTURE_2D,ze,te,ee.width,ee.height);else{let ce=ee.width,Pe=ee.height;for(let Ve=0;Ve<ze;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,te,ce,Pe,0,de,D,null),ce>>=1,Pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ee.parentNode!==ce){ce.appendChild(ee),m.add(v),ce.onpaint=Pe=>{const Ve=Pe.changedElements;for(const ve of m)Ve.includes(ve.image)&&(ve.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{const Ve=n.RGBA,ve=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ve,ve,tt,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(he&&me){const ce=Le(pe[0]);t.texStorage2D(n.TEXTURE_2D,ze,te,ce.width,ce.height)}for(let ce=0,Pe=pe.length;ce<Pe;ce++)J=pe[ce],he?Ce&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,de,D,J):t.texImage2D(n.TEXTURE_2D,ce,te,de,D,J);v.generateMipmaps=!1}else if(he){if(me){const ce=Le(ee);t.texStorage2D(n.TEXTURE_2D,ze,te,ce.width,ce.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,D,ee)}else t.texImage2D(n.TEXTURE_2D,0,te,de,D,ee);C(v)&&v.mipmapsAutoUpdate===!0&&M(le),fe.__version=re.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _t(R,v,B){if(v.image.length!==6)return;const le=Fe(R,v),q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const re=i.get(q);if(q.version!==re.__version||le===!0){t.activeTexture(n.TEXTURE0+B);const fe=$e.getPrimaries($e.workingColorSpace),Q=v.colorSpace===Zn?null:$e.getPrimaries(v.colorSpace),ee=v.colorSpace===Zn||fe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const de=v.isCompressedTexture||v.image[0].isCompressedTexture,D=v.image[0]&&v.image[0].isDataTexture,te=[];for(let ve=0;ve<6;ve++)!de&&!D?te[ve]=S(v.image[ve],!0,s.maxCubemapSize):te[ve]=D?v.image[ve].image:v.image[ve],te[ve]=De(v,te[ve]);const J=te[0],pe=r.convert(v.format,v.colorSpace),he=r.convert(v.type);let me=T(v.internalFormat,pe,he,v.normalized,v.colorSpace);const Ce=v.isVideoTexture!==!0,ze=re.__version===void 0||le===!0,ce=q.dataReady;let Pe=w(v,J);Be(n.TEXTURE_CUBE_MAP,v);let Ve;if(v.isDepthTexture){if(me=x(v.format===Qn,v.type),ze)if(Ce)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,me,J.width,J.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,me,J.width,J.height,0,pe,he,null)}else if(de){Ce&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,me,J.width,J.height);for(let ve=0;ve<6;ve++){Ve=te[ve].mipmaps;for(let tt=0;tt<Ve.length;tt++){const Et=Ve[tt];v.format!==bn?pe!==null?Ce?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,0,0,Et.width,Et.height,pe,Et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,me,Et.width,Et.height,0,Et.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,0,0,Et.width,Et.height,pe,he,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt,me,Et.width,Et.height,0,pe,he,Et.data)}}}else{if(Ve=v.mipmaps,Ce&&ze){Ve.length>0&&Pe++;const ve=Le(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,me,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(D){Ce?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,te[ve].width,te[ve].height,pe,he,te[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,me,te[ve].width,te[ve].height,0,pe,he,te[ve].data);for(let tt=0;tt<Ve.length;tt++){const zn=Ve[tt].image[ve].image;Ce?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,0,0,zn.width,zn.height,pe,he,zn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,me,zn.width,zn.height,0,pe,he,zn.data)}}else{Ce?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,pe,he,te[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,me,pe,he,te[ve]);for(let tt=0;tt<Ve.length;tt++){const Et=Ve[tt];Ce?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,0,0,pe,he,Et.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,tt+1,me,pe,he,Et.image[ve])}}}C(v)&&v.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),re.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function at(R,v,B,le,q,re){const fe=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),ee=T(B.internalFormat,fe,Q,B.normalized,B.colorSpace),de=i.get(v),D=i.get(B);if(D.__renderTarget=v,!de.__hasExternalTextures){const te=Math.max(1,v.width>>re),J=Math.max(1,v.height>>re);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,re,ee,te,J,v.depth,0,fe,Q,null):t.texImage2D(q,re,ee,te,J,0,fe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,q,D.__webglTexture,0,rt(v)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,q,D.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(R,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const le=v.depthTexture,q=le&&le.isDepthTexture?le.type:null,re=x(v.stencilBuffer,q),fe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(v),re,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(v),re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,R)}else{const le=v.textures;for(let q=0;q<le.length;q++){const re=le[q],fe=r.convert(re.format,re.colorSpace),Q=r.convert(re.type),ee=T(re.internalFormat,fe,Q,re.normalized,re.colorSpace);xe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(v),ee,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(v),ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(R,v,B){const le=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(v.depthTexture);q.__renderTarget=v;const re=le?v.depthTexture.image[0]:v.depthTexture.image;(!q.__webglTexture||re.width!==v.width||re.height!==v.height)&&(re.width=v.width,re.height=v.height,v.depthTexture.needsUpdate=!0),le?ae(v.depthTexture,0):ue(v.depthTexture,0);const fe=q.__webglTexture,Q=rt(v),ee=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,de=v.depthTexture.format===Qn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ei)xe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ee,fe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,de,ee,fe,0);else if(v.depthTexture.format===Qn)xe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ee,fe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,de,ee,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(R){const v=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const le=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),le){const q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,le.removeEventListener("dispose",q)};le.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=le}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let le=0;le<6;le++)st(v.__webglFramebuffer[le],R,le);else R.texture.mipmaps.length>0?st(v.__webglFramebuffer[0],R,0):st(v.__webglFramebuffer,R,0);else if(B){v.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[le]),v.__webglDepthbuffer[le]===void 0)v.__webglDepthbuffer[le]=n.createRenderbuffer(),Bt(v.__webglDepthbuffer[le],R,!1);else{const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,re)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Bt(v.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(R,v,B){const le=i.get(R);v!==void 0&&at(le.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&kt(R)}function Gt(R){const v=R.texture,B=i.get(R),le=i.get(v);R.addEventListener("dispose",U),F(R);const q=R.textures,re=R.isWebGLCubeRenderTarget===!0,fe=q.length>1;if(fe||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=v.version,o.memory.textures++),re){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let ee=0;ee<v.mipmaps.length;ee++)B.__webglFramebuffer[Q][ee]=n.createFramebuffer()}else B.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)B.__webglFramebuffer[Q]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Q=0,ee=q.length;Q<ee;Q++){const de=i.get(q[Q]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<q.length;Q++){const ee=q[Q];B.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);const de=r.convert(ee.format,ee.colorSpace),D=r.convert(ee.type),te=T(ee.internalFormat,de,D,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),J=rt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),Be(n.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)at(B.__webglFramebuffer[Q][ee],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else at(B.__webglFramebuffer[Q],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);C(v)?M(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Q=0,ee=q.length;Q<ee;Q++){const de=q[Q],D=i.get(de);let te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,D.__webglTexture),Be(te,de),at(B.__webglFramebuffer,R,de,n.COLOR_ATTACHMENT0+Q,te,0),C(de)&&M(te)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,le.__webglTexture),Be(Q,v),v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)at(B.__webglFramebuffer[ee],R,v,n.COLOR_ATTACHMENT0,Q,ee);else at(B.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,Q,0);C(v)?M(Q):v.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&kt(R)}function I(R){const v=R.textures;for(let B=0,le=v.length;B<le;B++){const q=v[B];if(C(q)&&q.mipmapsAutoUpdate===!0){const re=E(R),fe=i.get(q).__webglTexture;t.bindTexture(re,fe),M(re),t.unbindTexture()}}}const Vt=[];function ot(R){if(R.samples>0){if(xe(R)===!1){const v=R.textures,B=R.width,le=R.height;let q=n.COLOR_BUFFER_BIT;const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(R),Q=v.length>1;if(Q)for(let de=0;de<v.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<v.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const D=i.get(v[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,B,le,0,0,B,le,q,n.NEAREST),c===!0&&(Vt.length=0,Vt.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Vt.push(re),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let de=0;de<v.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const D=i.get(v[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function rt(R){return Math.min(s.maxSamples,R.samples)}function xe(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function gt(R){const v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function De(R,v){const B=R.colorSpace,le=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==rr&&B!==Zn&&($e.getTransfer(B)===nt?(le!==bn||q!==sn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",B)),v}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=Ne,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=Me,this.setTexture2D=ue,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=ae,this.rebindTextures=zt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=xe,this.dispose=O}function W0(n,e){function t(i,s=Zn){let r;const o=$e.getTransfer(s);if(i===sn)return n.UNSIGNED_BYTE;if(i===so)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ro)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_c)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mc)return n.BYTE;if(i===gc)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===io)return n.INT;if(i===En)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===vc)return n.ALPHA;if(i===Sc)return n.RGB;if(i===bn)return n.RGBA;if(i===ei)return n.DEPTH_COMPONENT;if(i===Qn)return n.DEPTH_STENCIL;if(i===bc)return n.RED;if(i===ao)return n.RED_INTEGER;if(i===fi)return n.RG;if(i===oo)return n.RG_INTEGER;if(i===lo)return n.RGBA_INTEGER;if(i===Ys||i===$s||i===Ks||i===Zs)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xa||i===_a||i===va||i===Sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ba||i===Ma||i===ya||i===Ea||i===wa||i===ir||i===Ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ba||i===Ma)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ya)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ea)return r.COMPRESSED_R11_EAC;if(i===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ir)return r.COMPRESSED_RG11_EAC;if(i===Ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Aa||i===Ra||i===Ca||i===Na||i===Da||i===Pa||i===La||i===Ia||i===Ua||i===Fa||i===Oa||i===Ba||i===ka||i===za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Aa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ra)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ca)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Na)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Da)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===La)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ia)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ba)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ka)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===za)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===Va||i===Ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ga)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ja||i===Wa||i===sr||i===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ki?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
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

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:X0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends pi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,l="local-floor",c=1,d=null,u=null,m=null,h=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",g=new Y0,f={},S=t.getContextAttributes();let C=null,M=null;const E=[],T=[],x=new Ze;let w=null,F=null;const A=new un;A.viewport=new mt;const L=new un;L.viewport=new mt;const U=[A,L],V=new of;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=E[j];return ue===void 0&&(ue=new Fr,E[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=E[j];return ue===void 0&&(ue=new Fr,E[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=E[j];return ue===void 0&&(ue=new Fr,E[j]=ue),ue.getHandSpace()};function Z(j){const ue=T.indexOf(j.inputSource);if(ue===-1)return;const W=E[ue];W!==void 0&&(W.update(j.inputSource,j.frame,d||o),W.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",se);for(let j=0;j<E.length;j++){const ue=T[j];ue!==null&&(T[j]=null,E[j].disconnect(ue))}N=null,O=null,g.reset();for(const j in f)delete f[j];if(e.setRenderTarget(C),p=null,h=null,m=null,s=null,M=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),F!==null){const j=F.camera;j.fov=F.fov,j.zoom=F.zoom,j.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",se),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,K=null,ae=null;S.depth&&(ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=S.stencil?Qn:ei,K=S.stencil?ki:En);const ye={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(ye),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Mn(h.textureWidth,h.textureHeight,{format:bn,type:sn,depthTexture:new zi(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const W={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Mn(p.framebufferWidth,p.framebufferHeight,{format:bn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await s.requestReferenceSpace(l),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(j){for(let ue=0;ue<j.removed.length;ue++){const W=j.removed[ue],K=T.indexOf(W);K>=0&&(T[K]=null,E[K].disconnect(W))}for(let ue=0;ue<j.added.length;ue++){const W=j.added[ue];let K=T.indexOf(W);if(K===-1){for(let ye=0;ye<E.length;ye++)if(ye>=T.length){T.push(W),K=ye;break}else if(T[ye]===null){T[ye]=W,K=ye;break}if(K===-1)break}const ae=E[K];ae&&ae.connect(W)}}function k(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ue=j.near,W=j.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(W=g.depthFar)),V.near=L.near=A.near=ue,V.far=L.far=A.far=W,(N!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,O=V.far),V.layers.mask=j.layers.mask|6,A.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;const K=j.parent,ae=V.cameras;k(V,K);for(let ye=0;ye<ae.length;ye++)k(ae[ye],K);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),F===null&&j.isPerspectiveCamera&&(F={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,V,K)};function ne(j,ue,W){W===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(W.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ya*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(j){return f[j]};let ie=null;function Me(j,ue){if(u=ue.getViewerPose(d||o),_=ue,u!==null){const W=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let K=!1;W.length!==V.cameras.length&&(V.cameras.length=0,K=!0);for(let Ae=0;Ae<W.length;Ae++){const Be=W[Ae];let Fe=null;if(p!==null)Fe=p.getViewport(Be);else{const it=m.getViewSubImage(h,Be);Fe=it.viewport,Ae===0&&(e.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(M))}let Ie=U[Ae];Ie===void 0&&(Ie=new un,Ie.layers.enable(Ae),Ie.viewport=new mt,U[Ae]=Ie),Ie.matrix.fromArray(Be.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Be.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ae===0&&(V.matrix.copy(Ie.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),K===!0&&V.cameras.push(Ie)}const ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=i.getBinding();const Ae=m.getDepthInformation(W[0]);Ae&&Ae.isValid&&Ae.texture&&g.init(Ae,s.renderState)}if(ae&&ae.includes("camera-access")&&y){e.state.unbindTexture(),m=i.getBinding();for(let Ae=0;Ae<W.length;Ae++){const Be=W[Ae].camera;if(Be){let Fe=f[Be];Fe||(Fe=new Fc,f[Be]=Fe);const Ie=m.getCameraImage(Be);Fe.sourceTexture=Ie}}}}for(let W=0;W<E.length;W++){const K=T[W],ae=E[W];K!==null&&ae!==void 0&&ae.update(K,ue,d||o)}ie&&ie(j,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Ne=new Gc;Ne.setAnimationLoop(Me),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}const K0=new ft,Zc=new Oe;Zc.set(-1,0,0,0,1,0,0,0,1);function Z0(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Oc(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,S,C,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),m(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(r(g,f),_(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),y(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&l(g,f)):f.isPointsMaterial?c(g,f,S,C):f.isSpriteMaterial?d(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Xt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Xt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const S=e.get(f),C=S.envMap,M=S.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Zc),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function l(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,S,C){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*S,g.scale.value=C*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function m(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,S){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const S=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J0(n,e,t,i){let s={},r={};function o(S,C){const M=C.program;i.uniformBlockBinding(S,M,s[S.id])}function l(S,C){let M=s[S.id];M===void 0&&(_(S),M=c(S),s[S.id]=M,S.addEventListener("dispose",g));const E=C.program;i.updateUBOMapping(S,E);const T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function c(S){const C=n.createBuffer(),M=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),C}function d(S){const C=s[S.id],M=S.uniforms,E=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let T=0,x=M.length;T<x;T++){const w=M[T];if(Array.isArray(w))for(let F=0,A=w.length;F<A;F++)u(w[F],T,F,E);else u(w,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(S,C,M,E){if(h(S,C,M,E)===!0){const T=S.__offset,x=S.value;if(Array.isArray(x)){let w=0;for(let F=0;F<x.length;F++){const A=x[F],L=y(A,!0);m(A,S.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else m(x,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,S.__data)}}function m(S,C,M){typeof S=="number"||typeof S=="boolean"?C[M]=S:S.isMatrix3?(C[M]=S.elements[0],C[M+1]=S.elements[1],C[M+2]=S.elements[2],C[M+3]=0,C[M+4]=S.elements[3],C[M+5]=S.elements[4],C[M+6]=S.elements[5],C[M+7]=0,C[M+8]=S.elements[6],C[M+9]=S.elements[7],C[M+10]=S.elements[8],C[M+11]=0):ArrayBuffer.isView(S)?C.set(S.subarray(0,C.length-M),M):S.toArray(C,M)}function h(S,C,M,E){const T=S.value,x=C+"_"+M;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);const w=E[x];let F=!1;for(let A=0;A<T.length;A++)p(T[A],w,A)===!0&&(F=!0);return F}return p(T,E,x)}function p(S,C,M){if(C[M]===void 0)return typeof S=="number"||typeof S=="boolean"?C[M]=S:ArrayBuffer.isView(S)?C[M]=S.slice():C[M]=S.clone(),!0;{const E=C[M];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return C[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function _(S){const C=S.uniforms;let M=0;const E=16;for(let x=0,w=C.length;x<w;x++){const F=Array.isArray(C[x])?C[x]:[C[x]];for(let A=0,L=F.length;A<L;A++){const U=F[A],V=Array.isArray(U.value)?U.value:[U.value],N=Array.isArray(C[x])||Array.isArray(U.value);let O=M;for(let H=0,se=V.length;H<se;H++){const k=V[H],ne=y(k,N),ie=M%E,Me=ie%ne.boundary,Ne=ie+Me;M+=Me,Ne!==0&&E-Ne<ne.storage&&(M+=E-Ne),H===0&&(O=M),M+=ne.storage}const Z=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Z((M-O)/Float32Array.BYTES_PER_ELEMENT),U.__offset=O}}const T=M%E;return T>0&&(M+=E-T),S.__size=M,S.__cache={},this}function y(S,C){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",S),C===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(S){const C=S.target;C.removeEventListener("dispose",g),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function f(){for(const S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:l,dispose:f}}const Q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function ex(){return gn===null&&(gn=new Gh(Q0,16,16,fi,wn),gn.name="DFG_LUT",gn.minFilter=Jt,gn.magFilter=Jt,gn.wrapS=vn,gn.wrapT=vn,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class tx{constructor(e={}){const{canvas:t=fh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=sn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const y=p,g=new Set([lo,oo,ao]),f=new Set([sn,En,us,ki,so,ro]),S=new Uint32Array(4),C=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,T=null;const x=[],w=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,U=null,V=null,N=null,O=null;this._outputColorSpace=nn;let Z=0,H=0,se=null,k=-1,ne=null;const ie=new mt,Me=new mt;let Ne=null;const j=new Ye(0);let ue=0,W=t.width,K=t.height,ae=1,ye=null,We=null;const Ae=new mt(0,0,W,K),Be=new mt(0,0,W,K);let Fe=!1;const Ie=new ps,it=new ho;let ut=!1,_t=!1;const at=new ft,Bt=new Y,st=new mt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Gt(){return se===null?ae:1}let I=i;function Vt(b,P){return t.getContext(b,P)}let ot,rt,xe,gt,De,Le,R,v,B,le,q,re,fe,Q,ee,de,D,te,J,pe,he,me,Ce;try{const b={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${to}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",ve,!1),I===null){const P="webgl2";if(I=Vt(P,b),I===null)throw Vt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(b){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),et("WebGLRenderer: "+b.message),b}function ze(){ot=new sg(I),ot.init(),he=new W0(I,ot),rt=new qm(I,ot,e,he),xe=new H0(I,ot),rt.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),V=I.createFramebuffer(),N=I.createFramebuffer(),O=I.createFramebuffer(),gt=new og(I),De=new C0,Le=new j0(I,ot,xe,De,rt,he,gt),R=new ig(A),v=new cf(I),me=new Wm(I,v),B=new rg(I,v,gt,me),le=new cg(I,B,v,me,gt),te=new lg(I,rt,Le),ee=new Ym(De),q=new R0(A,R,ot,rt,me,ee),re=new Z0(A,De),fe=new D0,Q=new O0(ot),D=new jm(A,R,xe,le,_,c),de=new V0(A,le,rt),Ce=new J0(I,gt,rt,xe),J=new Xm(I,ot,gt),pe=new ag(I,ot,gt),gt.programs=q.programs,A.capabilities=rt,A.extensions=ot,A.properties=De,A.renderLists=fe,A.shadowMap=de,A.state=xe,A.info=gt}y!==sn&&(F=new ug(y,t.width,t.height,l,s,r));const ce=new $0(A,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(W,K,!1))},this.getSize=function(b){return b.set(W,K)},this.setSize=function(b,P,$=!0){if(ce.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,K=P,t.width=Math.floor(b*ae),t.height=Math.floor(P*ae),$===!0&&(t.style.width=b+"px",t.style.height=P+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(W*ae,K*ae).floor()},this.setDrawingBufferSize=function(b,P,$){W=b,K=P,ae=$,t.width=Math.floor(b*$),t.height=Math.floor(P*$),this.setViewport(0,0,b,P)},this.setEffects=function(b){if(y===sn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let P=0;P<b.length;P++)if(b[P].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(Ae)},this.setViewport=function(b,P,$,z){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,P,$,z),xe.viewport(ie.copy(Ae).multiplyScalar(Gt()).round())},this.getScissor=function(b){return b.copy(Be)},this.setScissor=function(b,P,$,z){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,P,$,z),xe.scissor(Me.copy(Be).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(b){xe.setScissorTest(Fe=b)},this.setOpaqueSort=function(b){ye=b},this.setTransparentSort=function(b){We=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,P=!0,$=!0){let z=0;if(b){let G=!1;if(se!==null){const _e=se.texture.format;G=g.has(_e)}if(G){const _e=se.texture.type,Ee=f.has(_e),ge=D.getClearColor(),be=D.getClearAlpha(),Re=ge.r,ke=ge.g,Xe=ge.b;Ee?(S[0]=Re,S[1]=ke,S[2]=Xe,S[3]=be,I.clearBufferuiv(I.COLOR,0,S)):(C[0]=Re,C[1]=ke,C[2]=Xe,C[3]=be,I.clearBufferiv(I.COLOR,0,C))}else z|=I.COLOR_BUFFER_BIT}P&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),D.dispose(),fe.dispose(),Q.dispose(),Le.dispose(),De.dispose(),R.dispose(),le.dispose(),B.dispose(),me.dispose(),Ce.dispose(),q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",bo),ce.removeEventListener("sessionend",Mo),ii.stop()};function Pe(b){b.preventDefault(),Ho("WebGLRenderer: Context Lost."),L=!0}function Ve(){Ho("WebGLRenderer: Context Restored."),L=!1;const b=gt.autoReset,P=de.enabled,$=de.autoUpdate,z=de.needsUpdate,G=de.type;ze(),gt.autoReset=b,de.enabled=P,de.autoUpdate=$,de.needsUpdate=z,de.type=G}function ve(b){et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function tt(b){const P=b.target;P.removeEventListener("dispose",tt),Et(P)}function Et(b){zn(b),De.remove(b)}function zn(b){const P=De.get(b).programs;P!==void 0&&(P.forEach(function($){q.releaseProgram($)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,$,z,G,_e){P===null&&(P=kt);const Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=nd(b,P,$,z,G);xe.setMaterial(z,Ee);let be=$.index,Re=1;if(z.wireframe===!0){if(be=B.getWireframeAttribute($),be===void 0)return;Re=2}const ke=$.drawRange,Xe=$.attributes.position;let we=ke.start*Re,qe=(ke.start+ke.count)*Re;_e!==null&&(we=Math.max(we,_e.start*Re),qe=Math.min(qe,(_e.start+_e.count)*Re)),be!==null?(we=Math.max(we,0),qe=Math.min(qe,be.count)):Xe!=null&&(we=Math.max(we,0),qe=Math.min(qe,Xe.count));const vt=qe-we;if(vt<0||vt===1/0)return;me.setup(G,z,ge,$,be);let ct,lt=J;if(be!==null&&(ct=v.get(be),lt=pe,lt.setIndex(ct)),G.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*Gt()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(G.isLine){let Pt=z.linewidth;Pt===void 0&&(Pt=1),xe.setLineWidth(Pt*Gt()),G.isLineSegments?lt.setMode(I.LINES):G.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else G.isPoints?lt.setMode(I.POINTS):G.isSprite&&lt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pt=G._multiDrawStarts,Te=G._multiDrawCounts,Ht=G._multiDrawCount,Qe=be?v.get(be).bytesPerElement:1,si=De.get(z).currentProgram.getUniforms();for(let Lt=0;Lt<Ht;Lt++)si.setValue(I,"_gl_DrawID",Lt),lt.render(Pt[Lt]/Qe,Te[Lt])}else if(G.isInstancedMesh)lt.renderInstances(we,vt,G.count);else if($.isInstancedBufferGeometry){const Pt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Te=Math.min($.instanceCount,Pt);lt.renderInstances(we,vt,Te)}else lt.render(we,vt)};function So(b,P,$,z){U!==null&&b.isNodeMaterial&&U.setObject(z,b),ut===!0&&ee.setState(b,$,!1),b.transparent===!0&&b.side===On&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,Xi(b,P,z),b.side=hi,b.needsUpdate=!0,Xi(b,P,z),b.side=On):Xi(b,P,z)}this.compile=function(b,P,$=null){$===null&&($=b),U!==null&&U.renderStart(b,P,$),T=Q.get($),T.init(P),w.push(T),$.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==$&&b.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),_t=this.localClippingEnabled,ut=ee.init(this.clippingPlanes,_t),ut===!0&&ee.setGlobalState(this.clippingPlanes,P),U!==null&&de.render(T.state.shadowsArray,$,P);const z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const ge=_e[Ee];So(ge,$,P,G),z.add(ge)}else So(_e,$,P,G),z.add(_e)}),T=w.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(b,P,$=null){const z=this.compile(b,P,$);return new Promise(G=>{function _e(){if(z.forEach(function(Ee){const be=De.get(Ee).currentProgram;(be===void 0||be.isReady())&&z.delete(Ee)}),z.size===0){G(b);return}setTimeout(_e,10)}ot.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let gr=null;function ed(b){gr&&gr(b)}function bo(){ii.stop()}function Mo(){ii.start()}const ii=new Gc;ii.setAnimationLoop(ed),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(b){gr=b,ce.setAnimationLoop(b),b===null?ii.stop():ii.start()},ce.addEventListener("sessionstart",bo),ce.addEventListener("sessionend",Mo),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(b,P);const $=ce.enabled===!0&&ce.isPresenting===!0,z=F!==null&&(se===null||$)&&F.begin(A,se);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(P),P=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,P,se),T=Q.get(b,w.length),T.init(P),T.state.textureUnits=Le.getTextureUnits(),w.push(T),at.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?it.setFromArrayCamera(P):Ie.setFromProjectionMatrix(at,fn,P.reversedDepth),_t=this.localClippingEnabled,ut=ee.init(this.clippingPlanes,_t),E=fe.get(b,x.length),E.init(),x.push(E),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&xr(Ee,P,-1/0,A.sortObjects)}xr(b,P,0,A.sortObjects),E.finish(),U!==null&&U.updateLights(T.state.lightsArray),A.sortObjects===!0&&E.sort(ye,We),zt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,zt&&D.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),ut===!0&&ee.beginShadows();const G=T.state.shadowsArray;if(de.render(G,b,P),ut===!0&&ee.endShadows(),(z&&F.hasRenderPass())===!1){const Ee=E.opaque,ge=E.transmissive;if(T.setupLights(),P.isArrayCamera){const be=P.cameras;if(ge.length>0)for(let Re=0,ke=be.length;Re<ke;Re++){const Xe=be[Re];Eo(Ee,ge,b,Xe)}zt&&D.render(b);for(let Re=0,ke=be.length;Re<ke;Re++){const Xe=be[Re];yo(E,b,Xe,Xe.viewport)}}else ge.length>0&&Eo(Ee,ge,b,P),zt&&D.render(b),yo(E,b,P)}se!==null&&H===0&&(Le.updateMultisampleRenderTarget(se),Le.updateRenderTargetMipmap(se)),z&&F.end(A),b.isScene===!0&&b.onAfterRender(A,b,P),me.resetDefaultState(),k=-1,ne=null,w.pop(),w.length>0?(T=w[w.length-1],Le.setTextureUnits(T.state.textureUnits),ut===!0&&ee.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,U!==null&&U.renderEnd()};function xr(b,P,$,z){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Ee=P.isArrayCamera?it:Ie;if(!b.frustumCulled||b.intersectsFrustum(Ee)){z&&st.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const ge=le.update(b),be=b.material;be.visible&&E.push(b,ge,be,$,st.z,null,P)}}else if(b.isMesh||b.isLine||b.isPoints){const Ee=P.isArrayCamera?it:Ie;if(!b.frustumCulled||b.intersectsFrustum(Ee)){const ge=le.update(b),be=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),st.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),st.copy(ge.boundingSphere.center)),st.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(be)){const Re=ge.groups;for(let ke=0,Xe=Re.length;ke<Xe;ke++){const we=Re[ke],qe=be[we.materialIndex];qe&&qe.visible&&E.push(b,ge,qe,$,st.z,we,P)}}else be.visible&&E.push(b,ge,be,$,st.z,null,P)}}}const _e=b.children;for(let Ee=0,ge=_e.length;Ee<ge;Ee++)xr(_e[Ee],P,$,z)}function yo(b,P,$,z){const{opaque:G,transmissive:_e,transparent:Ee}=b;T.setupLightsView($),ut===!0&&ee.setGlobalState(A.clippingPlanes,$),z&&xe.viewport(ie.copy(z)),G.length>0&&vs(G,P,$),_e.length>0&&vs(_e,P,$),Ee.length>0&&vs(Ee,P,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Eo(b,P,$,z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const we=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Mn(1,1,{generateMipmaps:!0,type:we?wn:sn,minFilter:Jn,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const _e=T.state.transmissionRenderTarget[z.id],Ee=z.viewport||ie;_e.setSize(Ee.z*A.transmissionResolutionScale,Ee.w*A.transmissionResolutionScale);const ge=A.getRenderTarget(),be=A.getActiveCubeFace(),Re=A.getActiveMipmapLevel();A.setRenderTarget(_e),A.getClearColor(j),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),zt&&D.render($);const ke=A.toneMapping;A.toneMapping=Bn;const Xe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),ut===!0&&ee.setGlobalState(A.clippingPlanes,z),vs(b,$,z),Le.updateMultisampleRenderTarget(_e),Le.updateRenderTargetMipmap(_e),ot.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let qe=0,vt=P.length;qe<vt;qe++){const ct=P[qe],{object:lt,geometry:Pt,material:Te,group:Ht}=ct;if(Te.side===On&&lt.layers.test(z.layers)){const Qe=Te.side;Te.side=Xt,Te.needsUpdate=!0,wo(lt,$,z,Pt,Te,Ht),Te.side=Qe,Te.needsUpdate=!0,we=!0}}we===!0&&(Le.updateMultisampleRenderTarget(_e),Le.updateRenderTargetMipmap(_e))}A.setRenderTarget(ge,be,Re),A.setClearColor(j,ue),Xe!==void 0&&(z.viewport=Xe),A.toneMapping=ke}function vs(b,P,$){const z=P.isScene===!0?P.overrideMaterial:null;for(let G=0,_e=b.length;G<_e;G++){const Ee=b[G],{object:ge,geometry:be,group:Re}=Ee;let ke=Ee.material;ke.allowOverride===!0&&z!==null&&(ke=z),ge.layers.test($.layers)&&wo(ge,P,$,be,ke,Re)}}function wo(b,P,$,z,G,_e){U!==null&&G.isNodeMaterial&&U.setObject(b,G),b.onBeforeRender(A,P,$,z,G,_e),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(A,P,$,z,b,_e),G.transparent===!0&&G.side===On&&G.forceSinglePass===!1?(G.side=Xt,G.needsUpdate=!0,A.renderBufferDirect($,P,z,G,b,_e),G.side=hi,G.needsUpdate=!0,A.renderBufferDirect($,P,z,G,b,_e),G.side=On):A.renderBufferDirect($,P,z,G,b,_e),b.onAfterRender(A,P,$,z,G,_e)}function To(b){let P=0;for(const $ of b)$.texture!==null&&P++;return P}function Xi(b,P,$){P.isScene!==!0&&(P=kt);const z=De.get(b),G=T.state.lights,_e=T.state.shadowsArray,Ee=G.state.version,ge=q.getParameters(b,G.state,_e,P,$,T.state.lightProbeGridArray),be=q.getProgramCacheKey(ge);let Re=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;const ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=R.get(b.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",tt),Re=new Map,z.programs=Re,z.programVariants=new Map);let Xe=Re.get(be);if(Xe!==void 0){if(z.currentProgram===Xe&&z.lightsStateVersion===Ee)return Ro(b,ge),Xe}else ge.uniforms=q.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,$,ge),b.onBeforeCompile(ge,A),Xe=q.acquireProgram(ge,be),Re.set(be,Xe),z.uniforms=ge.uniforms;const we=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=ee.uniform),Ro(b,ge),z.needsLights=sd(b),z.lightsStateVersion=Ee,z.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.sunLights.value=G.state.sun,we.sunLightShadows.value=G.state.sunShadow,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.sunShadowMatrix.value=G.state.sunShadowMatrix,we.sunShadowCascade.value=G.state.sunShadowCascade,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=To(T.state.lightProbeGridArray),z.currentProgram=Xe,z.uniformsList=null,Xe}function td(b,P,$,z,G){const _e=De.get(b),Ee=_e.currentProgram.id+","+z+","+G;let ge=_e.programVariants.get(Ee);return ge===void 0?(ge=Xi(b,P,$),_e.programVariants.set(Ee,ge)):(_e.currentProgram=ge,_e.uniformsList=null,_e.outputColorSpace=z,_e.toneMapping=G),ge}function Ao(b){if(b.uniformsList===null){const P=b.currentProgram.getUniforms();b.uniformsList=Qs.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Ro(b,P){const $=De.get(b);$.outputColorSpace=P.outputColorSpace,$.batching=P.batching,$.batchingColor=P.batchingColor,$.instancing=P.instancing,$.instancingColor=P.instancingColor,$.instancingMorph=P.instancingMorph,$.skinning=P.skinning,$.morphTargets=P.morphTargets,$.morphNormals=P.morphNormals,$.morphColors=P.morphColors,$.morphTargetsCount=P.morphTargetsCount,$.numClippingPlanes=P.numClippingPlanes,$.numIntersection=P.numClipIntersection,$.vertexAlphas=P.vertexAlphas,$.vertexTangents=P.vertexTangents,$.toneMapping=P.toneMapping}function nd(b,P,$,z,G){P.isScene!==!0&&(P=kt),Le.resetTextureUnits();const _e=P.fog,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,ge=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:$e.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Re=R.get(z.envMap||Ee,be),ke=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!$.morphAttributes.position,qe=!!$.morphAttributes.normal,vt=!!$.morphAttributes.color;let ct=Bn;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ct=A.toneMapping);const lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Pt=lt!==void 0?lt.length:0,Te=De.get(z),Ht=T.state.lights;if(ut===!0&&(_t===!0||b!==ne)){const pt=b===ne&&z.id===k;ee.setState(z,b,pt)}let Qe=!1,si=!1;z.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Ht.state.version||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==Re||z.fog===!0&&Te.fog!==_e||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==ke||Te.vertexTangents!==Xe||Te.morphTargets!==we||Te.morphNormals!==qe||Te.morphColors!==vt||Te.morphTargetsCount!==Pt||Te.numLightProbeGrids!==To(T.state.lightProbeGridArray)?Qe=!0:(Te.outputColorSpace!==ge||Te.toneMapping!==ct)&&(si=!0):(Qe=!0,Te.__version=z.version);let Lt=Te.currentProgram;(Qe===!0||si===!0)&&(Lt=si===!0?td(z,P,G,ge,ct):Xi(z,P,G),U&&z.isNodeMaterial&&U.onUpdateProgram(z,Lt,Te));let Ss=!1,Gn=!1,ri=!1;const Je=Lt.getUniforms(),Rt=Te.uniforms;if(xe.useProgram(Lt.program)&&(Ss=!0,Gn=!0,ri=!0),z.id!==k&&(k=z.id,Gn=!0),Ss||ne!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Je.setValue(I,"projectionMatrix",b.projectionMatrix),Je.setValue(I,"viewMatrix",b.matrixWorldInverse);const wt=Je.map.cameraPosition;wt!==void 0&&wt.setValue(I,Bt.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&Je.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Je.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),ne!==b&&(ne=b,Gn=!0,ri=!0)}if(Te.needsLights&&(Ht.state.sunShadowMap.length>0&&Je.setValue(I,"sunShadowMap",Ht.state.sunShadowMap,Le),Ht.state.directionalShadowMap.length>0&&Je.setValue(I,"directionalShadowMap",Ht.state.directionalShadowMap,Le),Ht.state.spotShadowMap.length>0&&Je.setValue(I,"spotShadowMap",Ht.state.spotShadowMap,Le),Ht.state.pointShadowMap.length>0&&Je.setValue(I,"pointShadowMap",Ht.state.pointShadowMap,Le)),G.isSkinnedMesh){Je.setOptional(I,G,"bindMatrix"),Je.setOptional(I,G,"bindMatrixInverse");const pt=G.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Je.setValue(I,"boneTexture",pt.boneTexture,Le))}G.isBatchedMesh&&(Je.setOptional(I,G,"batchingTexture"),Je.setValue(I,"batchingTexture",G._matricesTexture,Le),Je.setOptional(I,G,"batchingIdTexture"),Je.setValue(I,"batchingIdTexture",G._indirectTexture,Le),Je.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Je.setValue(I,"batchingColorTexture",G._colorsTexture,Le));const on=$.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&te.update(G,$,Lt),(Gn||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,Je.setValue(I,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(Rt.envMapIntensity.value=P.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=ex()),Gn){if(Je.setValue(I,"toneMappingExposure",A.toneMappingExposure),Te.needsLights&&id(Rt,ri),_e&&z.fog===!0&&re.refreshFogUniforms(Rt,_e),re.refreshMaterialUniforms(Rt,z,ae,K,T.state.transmissionRenderTarget[b.id]),Te.needsLights&&Te.numLightProbeGrids>0){const pt=M;let wt=0;for(const An of T.state.lightProbeGridArray)An.texture!==null&&(pt.textures[wt]=An.texture,pt.min[wt]=An.boundingBox.min,pt.max[wt]=An.boundingBox.max,pt.resolution[wt]=An.resolution,wt++);for(const An in pt)pt[An].length=wt;Rt.probesSH.value=pt.textures,Rt.probesMin.value=pt.min,Rt.probesMax.value=pt.max,Rt.probesResolution.value=pt.resolution}Qs.upload(I,Ao(Te),Rt,Le)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Qs.upload(I,Ao(Te),Rt,Le),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Je.setValue(I,"center",G.center),Je.setValue(I,"modelViewMatrix",G.modelViewMatrix),Je.setValue(I,"normalMatrix",G.normalMatrix),Je.setValue(I,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const pt=z.uniformsGroups;for(let wt=0,An=pt.length;wt<An;wt++){const No=pt[wt];Ce.update(No,Lt),Ce.bind(No,Lt)}}return Lt}function id(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.sunLights.needsUpdate=P,b.sunLightShadows.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function sd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(b,P,$){const z=De.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),De.get(b.texture).__webglTexture=P,De.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:$,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,P){const $=De.get(b);$.__webglFramebuffer=P,$.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,$=0){se=b,Z=P,H=$;let z=null,G=!1,_e=!1;if(b){const ge=De.get(b);if(ge.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),ie.copy(b.viewport),Me.copy(b.scissor),Ne=b.scissorTest,xe.viewport(ie),xe.scissor(Me),xe.setScissorTest(Ne),k=-1;return}else if(ge.__webglFramebuffer===void 0)Le.setupRenderTarget(b);else if(ge.__hasExternalTextures)Le.rebindTextures(b,De.get(b.texture).__webglTexture,De.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ke=b.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(b)}}const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);const Re=De.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[P])?z=Re[P][$]:z=Re[P],G=!0):b.samples>0&&Le.useMultisampledRTT(b)===!1?z=De.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?z=Re[$]:z=Re,ie.copy(b.viewport),Me.copy(b.scissor),Ne=b.scissorTest}else ie.copy(Ae).multiplyScalar(ae).floor(),Me.copy(Be).multiplyScalar(ae).floor(),Ne=Fe;if($!==0&&(z=V),xe.bindFramebuffer(I.FRAMEBUFFER,z)&&xe.drawBuffers(b,z),xe.viewport(ie),xe.scissor(Me),xe.setScissorTest(Ne),G){const ge=De.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge.__webglTexture,$)}else if(_e){const ge=P;for(let be=0;be<b.textures.length;be++){const Re=De.get(b.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,Re.__webglTexture,$,ge)}}else if(b!==null&&$!==0){const ge=De.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,$)}k=-1};function Co(b){const P=De.get(b);return(P.__readFormat!==b.format||P.__readType!==b.type)&&(P.__readFormat=b.format,P.__readType=b.type,P.__formatReadable=rt.textureFormatReadable(b.format),P.__typeReadable=rt.textureTypeReadable(b.type)),P}this.readRenderTargetPixels=function(b,P,$,z,G,_e,Ee,ge=0){if(!(b&&b.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=De.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee],Array.isArray(be)&&(be=be[0])),be){xe.bindFramebuffer(I.FRAMEBUFFER,be);try{const Re=b.textures[ge],ke=Re.format,Xe=Re.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);const we=Co(Re);if(we.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-z&&$>=0&&$<=b.height-G&&I.readPixels(P,$,z,G,he.convert(ke),he.convert(Xe),_e)}finally{const Re=se!==null?De.get(se).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,P,$,z,G,_e,Ee,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=De.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee],Array.isArray(be)&&(be=be[0])),be)if(P>=0&&P<=b.width-z&&$>=0&&$<=b.height-G){xe.bindFramebuffer(I.FRAMEBUFFER,be);const Re=b.textures[ge],ke=Re.format,Xe=Re.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);const we=Co(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(P,$,z,G,he.convert(ke),he.convert(Xe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const vt=se!==null?De.get(se).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,vt);const ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ph(I,ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(qe),I.deleteSync(ct),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,P=null,$=0){const z=Math.pow(2,-$),G=Math.floor(b.image.width*z),_e=Math.floor(b.image.height*z),Ee=P!==null?P.x:0,ge=P!==null?P.y:0;Le.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Ee,ge,G,_e),xe.unbindTexture()},this.copyTextureToTexture=function(b,P,$=null,z=null,G=0,_e=0){let Ee,ge,be,Re,ke,Xe,we,qe,vt;const ct=b.isCompressedTexture?b.mipmaps[_e]:b.image;if($!==null)Ee=$.max.x-$.min.x,ge=$.max.y-$.min.y,be=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,ke=$.min.y,Xe=$.isBox3?$.min.z:0;else{const Je=Math.pow(2,-G);Ee=Math.floor(ct.width*Je),ge=Math.floor(ct.height*Je),b.isDataArrayTexture?be=ct.depth:b.isData3DTexture?be=Math.floor(ct.depth*Je):be=1,Re=0,ke=0,Xe=0}z!==null?(we=z.x,qe=z.y,vt=z.z):(we=0,qe=0,vt=0);const lt=he.convert(P.format),Pt=he.convert(P.type);let Te;P.isData3DTexture?(Le.setTexture3D(P,0),Te=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Le.setTexture2DArray(P,0),Te=I.TEXTURE_2D_ARRAY):(Le.setTexture2D(P,0),Te=I.TEXTURE_2D),xe.activeTexture(I.TEXTURE0),xe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),xe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),xe.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const Ht=xe.getParameter(I.UNPACK_ROW_LENGTH),Qe=xe.getParameter(I.UNPACK_IMAGE_HEIGHT),si=xe.getParameter(I.UNPACK_SKIP_PIXELS),Lt=xe.getParameter(I.UNPACK_SKIP_ROWS),Ss=xe.getParameter(I.UNPACK_SKIP_IMAGES);xe.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),xe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),xe.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),xe.pixelStorei(I.UNPACK_SKIP_ROWS,ke),xe.pixelStorei(I.UNPACK_SKIP_IMAGES,Xe);const Gn=b.isDataArrayTexture||b.isData3DTexture,ri=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){const Je=De.get(b),Rt=De.get(P),on=De.get(Je.__renderTarget),pt=De.get(Rt.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,on.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let wt=0;wt<be;wt++)Gn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(b).__webglTexture,G,Xe+wt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(P).__webglTexture,_e,vt+wt)),I.blitFramebuffer(Re,ke,Re+Ee,ke+ge,we,qe,we+Ee,qe+ge,I.DEPTH_BUFFER_BIT,I.NEAREST);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||De.has(b)){const Je=De.get(b),Rt=De.get(P);xe.bindFramebuffer(I.READ_FRAMEBUFFER,N),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let on=0;on<be;on++)Gn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Je.__webglTexture,G,Xe+on):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Je.__webglTexture,G),ri?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,_e,vt+on):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,_e),G!==0?I.blitFramebuffer(Re,ke,Re+Ee,ke+ge,we,qe,we+Ee,qe+ge,I.COLOR_BUFFER_BIT,I.NEAREST):ri?I.copyTexSubImage3D(Te,_e,we,qe,vt+on,Re,ke,Ee,ge):I.copyTexSubImage2D(Te,_e,we,qe,Re,ke,Ee,ge);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ri?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Te,_e,we,qe,vt,Ee,ge,be,lt,Pt,ct.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,_e,we,qe,vt,Ee,ge,be,lt,ct.data):I.texSubImage3D(Te,_e,we,qe,vt,Ee,ge,be,lt,Pt,ct):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,we,qe,Ee,ge,lt,Pt,ct.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,we,qe,ct.width,ct.height,lt,ct.data):I.texSubImage2D(I.TEXTURE_2D,_e,we,qe,Ee,ge,lt,Pt,ct);xe.pixelStorei(I.UNPACK_ROW_LENGTH,Ht),xe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),xe.pixelStorei(I.UNPACK_SKIP_PIXELS,si),xe.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),xe.pixelStorei(I.UNPACK_SKIP_IMAGES,Ss),_e===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&I.generateMipmap(Te),xe.unbindTexture()},this.initRenderTarget=function(b){De.get(b).__webglFramebuffer===void 0&&Le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){Z=0,H=0,se=null,xe.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function Xs(n,e,t){const i=(90-n)*(Math.PI/180),s=(e+180)*(Math.PI/180),r=-(t*Math.sin(i)*Math.cos(s)),o=t*Math.sin(i)*Math.sin(s),l=t*Math.cos(i);return new Y(r,l,o)}function nx(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const e=n.getContext("2d");if(e){const i=e.createLinearGradient(0,0,0,n.height);i.addColorStop(0,"#0d1b2a"),i.addColorStop(.5,"#1b263b"),i.addColorStop(1,"#0d1b2a"),e.fillStyle=i,e.fillRect(0,0,n.width,n.height),e.fillStyle="#2d5a3c",e.beginPath(),e.ellipse(1100,320,380,180,-.1,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(1320,380),e.lineTo(1390,380),e.lineTo(1355,480),e.closePath(),e.fill(),e.beginPath(),e.ellipse(1080,520,200,240,.2,0,Math.PI*2),e.fill(),e.fillStyle="#285235",e.beginPath(),e.ellipse(450,280,220,150,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(550,620,140,220,.2,0,Math.PI*2),e.fill(),e.fillStyle="#594a2b",e.beginPath(),e.ellipse(1650,680,120,90,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.12)";for(let s=0;s<40;s++)e.beginPath(),e.ellipse(Math.random()*n.width,Math.random()*n.height,150+Math.random()*200,30+Math.random()*50,Math.random()*Math.PI,0,Math.PI*2),e.fill()}const t=new jh(n);return t.wrapS=nr,t.wrapT=vn,t}const ix=({markers:n=[],config:e={},onMarkerClick:t,onMarkerHover:i,className:s,focusLocation:r})=>{const o=oe.useRef(null),[l,c]=oe.useState([]),[d,u]=oe.useState(!0),m=oe.useRef(!0);m.current=d;const[h,p]=oe.useState(0),_=oe.useRef(()=>{}),y=oe.useRef(()=>{}),g=oe.useRef(()=>{}),f=oe.useRef(()=>{}),S=oe.useRef(e);S.current=e;const C=oe.useRef(n);return C.current=n,oe.useEffect(()=>{if(!r)return;const{lat:M,lng:E}=r,x=-(E*Math.PI/180)-Math.PI/2,w=M*Math.PI/180*.45;f.current(w,x)},[r]),oe.useEffect(()=>{const M=o.current;if(!M)return;let E=M.clientWidth||600,T=M.clientHeight||500;const x=320,w=160,F=480;let A=x,L=x;const U=new Lh,V=new un(40,E/T,.1,1e3);V.position.set(0,0,x);const N=new tx({antialias:!0,alpha:!0});N.setSize(E,T),N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.toneMapping=no,N.toneMappingExposure=1.2,M.appendChild(N.domElement);const O=new Li;U.add(O);const Z=.28,H=4.2;O.rotation.x=Z,O.rotation.y=H;let se=null,k=null;f.current=(q,re)=>{se=q,k=re,u(!1)};const ne=100,ie=new os(ne,64,64),Me=nx(),Ne=new Kh({map:Me,roughness:.65,metalness:.1,bumpScale:e.bumpScale??.05}),j=new nf;j.crossOrigin="anonymous";const ue=["https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg","https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"],W=(q=0)=>{q>=ue.length||j.load(ue[q],re=>{re.colorSpace=nn,Ne.map=re,Ne.needsUpdate=!0},void 0,()=>W(q+1))};W(0);const K=new yn(ie,Ne);O.add(K);const ae=e.atmosphereColor||"#4da6ff",ye=new os(ne*1.15,64,64),We=new ni({vertexShader:`
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
      `,uniforms:{color:{value:new Ye(ae)},intensity:{value:e.atmosphereIntensity??16}},blending:la,side:Xt,transparent:!0}),Ae=new yn(ye,We);O.add(Ae);const Be=new af(16777215,1.4);U.add(Be);const Fe=new fl(16777215,2.2);Fe.position.set(300,150,250),U.add(Fe);const Ie=new fl(new Ye(ae),1);Ie.position.set(-300,-100,-250),U.add(Ie);const it=new Li;O.add(it),(()=>{for(;it.children.length>0;)it.remove(it.children[0]);C.current.forEach(re=>{const Q=Xs(re.lat,re.lng,ne),ee=Xs(re.lat,re.lng,ne+18),de=new os(1.2,12,12),D=new Pc({color:16724804}),te=new yn(de,D);te.position.copy(Q),it.add(te);const J=new Tn().setFromPoints([Q,ee]),pe=new Lc({color:16777215,transparent:!0,opacity:.6}),he=new Hh(J,pe);it.add(he)})})();let _t=!1,at=!1,Bt={x:0,y:0},st={x:0,y:0};const kt=q=>{q.target.closest(".globe-ctrl-btn")||(_t=!0,se=null,k=null,Bt={x:q.clientX,y:q.clientY},st={x:0,y:0})},zt=q=>{if(!_t)return;const re=q.clientX-Bt.x,fe=q.clientY-Bt.y;st={x:re*.005,y:fe*.005},O.rotation.y+=st.x,O.rotation.x+=st.y,O.rotation.x=Math.max(-1.1,Math.min(1.1,O.rotation.x)),Bt={x:q.clientX,y:q.clientY}},Gt=()=>{_t=!1},I=()=>{at=!0},Vt=()=>{at=!1},ot=q=>{q.preventDefault();const re=q.deltaY*.28;L=Math.max(w,Math.min(F,L+re))};let rt=0;const xe=q=>{if(q.touches.length===2){const re=q.touches[0].clientX-q.touches[1].clientX,fe=q.touches[0].clientY-q.touches[1].clientY;rt=Math.hypot(re,fe)}},gt=q=>{if(q.touches.length===2){q.preventDefault();const re=q.touches[0].clientX-q.touches[1].clientX,fe=q.touches[0].clientY-q.touches[1].clientY,Q=Math.hypot(re,fe),ee=(rt-Q)*.8;L=Math.max(w,Math.min(F,L+ee)),rt=Q}};_.current=()=>{L=Math.max(w,L-45)},y.current=()=>{L=Math.min(F,L+45)},g.current=()=>{L=x,se=Z,k=H,st={x:0,y:0}};const De=N.domElement;De.addEventListener("pointerdown",kt),M.addEventListener("mouseenter",I),M.addEventListener("mouseleave",Vt),window.addEventListener("pointermove",zt),window.addEventListener("pointerup",Gt),M.addEventListener("wheel",ot,{passive:!1}),M.addEventListener("touchstart",xe,{passive:!1}),M.addEventListener("touchmove",gt,{passive:!1});let Le;const R=new Y,v=new Y,B=()=>{if(Le=requestAnimationFrame(B),A+=(L-A)*.12,V.position.z=A,se!==null&&k!==null)O.rotation.x+=(se-O.rotation.x)*.08,O.rotation.y+=(k-O.rotation.y)*.08,Math.abs(se-O.rotation.x)<.001&&Math.abs(k-O.rotation.y)<.001&&(se=null,k=null);else{const de=(S.current.autoRotateSpeed??.15)*.003;m.current&&!at&&!_t&&(O.rotation.y+=de),_t||(st.x*=.94,st.y*=.94,O.rotation.y+=st.x,O.rotation.x+=st.y)}const q=-O.rotation.y*180/Math.PI%360;p(q),N.render(U,V);const re=C.current,fe=M.clientWidth,Q=M.clientHeight,ee=re.map(de=>{const te=Xs(de.lat,de.lng,ne+18),J=Xs(de.lat,de.lng,ne);R.copy(te),O.localToWorld(R);const pe=J.clone();O.localToWorld(pe),v.copy(V.position).sub(pe).normalize();const Ce=pe.clone().normalize().dot(v)>.08;R.project(V);const ze=(R.x+1)*fe/2,ce=(-R.y+1)*Q/2;return{marker:de,x:ze,y:ce,visible:Ce&&R.z<1,depth:R.z}});c(ee)};B();const le=()=>{M&&(E=M.clientWidth,T=M.clientHeight,V.aspect=E/T,V.updateProjectionMatrix(),N.setSize(E,T))};return window.addEventListener("resize",le),()=>{cancelAnimationFrame(Le),window.removeEventListener("resize",le),De.removeEventListener("pointerdown",kt),M.removeEventListener("mouseenter",I),M.removeEventListener("mouseleave",Vt),window.removeEventListener("pointermove",zt),window.removeEventListener("pointerup",Gt),M.removeEventListener("wheel",ot),M.removeEventListener("touchstart",xe),M.removeEventListener("touchmove",gt),M.contains(N.domElement)&&M.removeChild(N.domElement),N.dispose(),ie.dispose(),Ne.dispose(),ye.dispose(),We.dispose()}},[]),a.jsxs("div",{ref:o,className:pn("relative w-full h-[520px] bg-[#030712] overflow-hidden select-none cursor-grab active:cursor-grabbing rounded-xl",s),children:[a.jsxs("div",{className:"absolute bottom-4 left-4 z-30 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 shadow-xl pointer-events-auto",children:[a.jsxs("div",{className:"relative h-9 w-9 flex items-center justify-center rounded-full bg-slate-950 border border-slate-700 shadow-inner",title:"Compass heading — points toward North",children:[a.jsxs("div",{className:"absolute inset-0 flex items-center justify-center transition-transform duration-75",style:{transform:`rotate(${h}deg)`},children:[a.jsx("div",{className:"absolute top-1.5 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[9px] border-b-rose-500"}),a.jsx("div",{className:"absolute bottom-1.5 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[9px] border-t-slate-400"}),a.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-white shadow-xs z-10"})]}),a.jsx("span",{className:"absolute top-0 text-[8px] font-extrabold text-rose-400",children:"N"}),a.jsx("span",{className:"absolute bottom-0 text-[8px] font-bold text-slate-400",children:"S"}),a.jsx("span",{className:"absolute right-0.5 text-[8px] font-bold text-slate-400",children:"E"}),a.jsx("span",{className:"absolute left-0.5 text-[8px] font-bold text-slate-400",children:"W"})]}),a.jsxs("div",{className:"text-[11px] leading-tight",children:[a.jsx("div",{className:"font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1",children:a.jsx("span",{children:"Cardinal Direction"})}),a.jsxs("div",{className:"text-[10px] text-slate-400 font-mono mt-0.5",children:["Heading: ",Math.round((h+360)%360),"°"]})]})]}),a.jsxs("div",{className:"absolute top-4 right-4 z-30 flex flex-col gap-1.5 bg-slate-900/85 backdrop-blur-md p-1.5 rounded-lg border border-slate-800 shadow-xl",children:[a.jsx("button",{type:"button",onClick:()=>u(!d),title:d?"Pause Rotation":"Resume Rotation",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:d?a.jsx(fu,{className:"h-4 w-4 text-cyan-400"}):a.jsx(pu,{className:"h-4 w-4 text-emerald-400"})}),a.jsx("div",{className:"h-px bg-slate-800 my-0.5"}),a.jsx("button",{type:"button",onClick:()=>_.current(),title:"Zoom In (or use scroll wheel)",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:a.jsx(mu,{className:"h-4 w-4"})}),a.jsx("button",{type:"button",onClick:()=>y.current(),title:"Zoom Out (or use scroll wheel)",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:a.jsx(uu,{className:"h-4 w-4"})}),a.jsx("div",{className:"h-px bg-slate-800 my-0.5"}),a.jsx("button",{type:"button",onClick:()=>g.current(),title:"Reset View",className:"globe-ctrl-btn p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:a.jsx(Jl,{className:"h-3.5 w-3.5"})})]}),l.map(({marker:M,x:E,y:T,visible:x},w)=>{if(!x)return null;const F=M.src||`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(M.label||"tech")}`;return a.jsxs("div",{style:{position:"absolute",left:`${E}px`,top:`${T}px`,transform:"translate(-50%, -50%)",pointerEvents:"auto"},onClick:A=>{A.stopPropagation(),t==null||t(M)},onMouseEnter:()=>i==null?void 0:i(M),onMouseLeave:()=>i==null?void 0:i(null),className:"group cursor-pointer transition-transform duration-150 hover:scale-125 z-20",children:[a.jsx("div",{className:"relative flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-slate-800 border-2 border-cyan-400 shadow-[0_0_12px_rgba(77,166,255,0.7)] overflow-hidden",children:a.jsx("img",{src:F,alt:M.label||"marker",className:"h-full w-full object-cover",onError:A=>{A.target.src="https://assets.aceternity.com/avatars/1.webp"}})}),a.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none whitespace-nowrap z-30 animate-in fade-in zoom-in-95 duration-100",children:[a.jsxs("div",{className:"bg-slate-900/95 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-md shadow-xl border border-slate-700 flex flex-col items-center gap-0.5",children:[a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),a.jsx("span",{children:M.label}),M.count!==void 0&&a.jsxs("span",{className:"text-[10px] text-cyan-300",children:["(",M.count,")"]})]}),M.region&&a.jsxs("span",{className:"text-[9px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-800/60 mt-0.5",children:[M.region," Zone"]})]}),a.jsx("div",{className:"w-1.5 h-1.5 bg-slate-900 border-r border-b border-slate-700 rotate-45 -mt-1"})]})]},w)})]})},Ft=["https://assets.aceternity.com/avatars/1.webp","https://assets.aceternity.com/avatars/2.webp","https://assets.aceternity.com/avatars/3.webp","https://assets.aceternity.com/avatars/4.webp","https://assets.aceternity.com/avatars/5.webp","https://assets.aceternity.com/avatars/6.webp","https://assets.aceternity.com/avatars/7.webp","https://assets.aceternity.com/avatars/8.webp","https://assets.aceternity.com/avatars/9.webp","https://assets.aceternity.com/avatars/10.webp","https://assets.aceternity.com/avatars/11.webp","https://assets.aceternity.com/avatars/12.webp","https://assets.aceternity.com/avatars/13.webp"],Fl=[{lat:28.6139,lng:77.209,label:"New Delhi Depot",region:"North",city:"Delhi",src:Ft[4],count:12},{lat:51.5074,lng:-.1278,label:"London Tech Hub",region:"North",city:"London",src:Ft[1],count:2},{lat:22.5726,lng:88.3639,label:"Kolkata Fleet Center",region:"East",city:"Kolkata",src:Ft[5],count:10},{lat:1.3521,lng:103.8198,label:"Singapore Logistics",region:"East",city:"Singapore",src:Ft[11],count:3},{lat:18.5204,lng:73.8567,label:"Pune Commercial Hub",region:"West",city:"Pune",src:Ft[3],count:19},{lat:19.076,lng:72.8777,label:"Mumbai Terminal",region:"West",city:"Mumbai",src:Ft[6],count:8},{lat:25.2048,lng:55.2708,label:"Dubai Export Depot",region:"West",city:"Dubai",src:Ft[9],count:4},{lat:13.0827,lng:80.2707,label:"Chennai Hub",region:"South",city:"Chennai",src:Ft[0],count:38},{lat:12.9716,lng:77.5946,label:"Bengaluru Central",region:"South",city:"Bengaluru",src:Ft[1],count:24},{lat:9.9312,lng:76.2673,label:"Kochi Workshop",region:"South",city:"Kochi",src:Ft[2],count:15}],Ol={North:{lat:28.6139,lng:77.209},East:{lat:22.5726,lng:88.3639},West:{lat:19.5,lng:73},South:{lat:11.5,lng:78.5}},Bl={north:1,east:2,west:3,south:4},sx=({cases:n,users:e,onSelectPlace:t})=>{const[i,s]=oe.useState(null),[r,o]=oe.useState("All"),[l,c]=oe.useState(null),d=oe.useMemo(()=>{const p=[],_=new Set;let y=0;return n.forEach(g=>{const f=g.payload||{};let S=Number(f["GPS Latitude"]),C=Number(f["GPS Longitude"]),M=String(f["Dealer / Location"]||f.City||"Field Inspection").trim();const E=ls(f);if(!S||!C||isNaN(S)||isNaN(C)){const T=String(f.City||"").toLowerCase(),x=Fl.find(w=>w.label.toLowerCase().includes(T));x&&(S=x.lat,C=x.lng)}if(S&&C&&!isNaN(S)&&!isNaN(C)){const T=`${S.toFixed(2)},${C.toFixed(2)}`;_.has(T)||(_.add(T),p.push({lat:S,lng:C,label:M,region:E,src:Ft[y%Ft.length],count:1,status:f["Diagnostic Status"],city:f.City,state:f.State}),y++)}}),e.forEach(g=>{let f=Number(g.gps_latitude||g.gpsLatitude),S=Number(g.gps_longitude||g.gpsLongitude),C=g.dealer_name||g.technician_name||g.city||"Workshop";const M=ls({State:g.state});if(f&&S&&!isNaN(f)&&!isNaN(S)){const E=`${f.toFixed(2)},${S.toFixed(2)}`;_.has(E)||(_.add(E),p.push({lat:f,lng:S,label:C,region:M,src:Ft[y%Ft.length],count:g.diagnostic_count||1,city:g.city,state:g.state}),y++)}}),Fl.forEach(g=>{const f=`${g.lat.toFixed(2)},${g.lng.toFixed(2)}`;_.has(f)||(_.add(f),p.push(g))}),p},[n,e]),u=oe.useMemo(()=>[...r==="All"?d:d.filter(_=>{var y;return((y=_.region)==null?void 0:y.toLowerCase())===r.toLowerCase()})].sort((_,y)=>{var S,C;const g=Bl[((S=_.region)==null?void 0:S.toLowerCase())||""]||99,f=Bl[((C=y.region)==null?void 0:C.toLowerCase())||""]||99;return g!==f?g-f:(y.count||0)-(_.count||0)}),[d,r]),m=p=>{o(p),p!=="All"&&Ol[p]?c(Ol[p]):c({lat:20.5937,lng:78.9629})},h=p=>{switch(p==null?void 0:p.toLowerCase()){case"north":return a.jsx("span",{className:"bg-blue-950/80 text-blue-300 border border-blue-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"North (N)"});case"east":return a.jsx("span",{className:"bg-amber-950/80 text-amber-300 border border-amber-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"East (E)"});case"west":return a.jsx("span",{className:"bg-purple-950/80 text-purple-300 border border-purple-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"West (W)"});case"south":return a.jsx("span",{className:"bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 px-1.5 py-0.5 rounded text-[10px] font-bold",children:"South (S)"});default:return a.jsx("span",{className:"bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-bold",children:p||"Central"})}};return a.jsxs(bt,{className:"mb-6 overflow-hidden border-slate-800 bg-[#070b14] text-white shadow-2xl",children:[a.jsxs(qt,{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800/80 bg-[#0a0f1d] px-6 py-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(aa,{className:"h-5 w-5 text-cyan-400"}),a.jsx(Yt,{className:"text-base text-white font-bold tracking-tight",children:"Field Diagnostic Operations · 3D Earth Globe"})]}),a.jsx($t,{className:"text-xs text-slate-400 mt-1",children:"Real-time 3D visualization of recorded GPS inspections ordered by North, East, West, and South (N-E-W-S)."})]}),a.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800",children:[a.jsxs("span",{className:"text-[10px] text-slate-400 font-bold uppercase px-2 flex items-center gap-1",children:[a.jsx(hu,{className:"h-3 w-3 text-cyan-400"}),"Zones (NEWS):"]}),["All","North","East","West","South"].map(p=>a.jsx("button",{type:"button",onClick:()=>m(p),className:`px-2.5 py-1 rounded text-xs font-bold transition-all ${r===p?"bg-cyan-500 text-slate-950 shadow-xs":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:p==="All"?"All":`${p} (${p[0]})`},p))]})]}),a.jsx(Kt,{className:"p-0",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 items-center",children:[a.jsxs("div",{className:"lg:col-span-8 p-4 flex flex-col items-center justify-center bg-[#030712] relative min-h-[480px]",children:[a.jsx(ix,{markers:d,focusLocation:l,config:{atmosphereColor:"#4da6ff",atmosphereIntensity:20,bumpScale:5,autoRotateSpeed:.15},onMarkerClick:p=>{s(p),t&&(p.city||p.label)&&t(p.city||p.label)},className:"h-[480px] w-full"}),a.jsx("div",{className:"absolute bottom-3 text-center text-[11px] text-slate-500 pointer-events-none select-none",children:"Scroll wheel or pinch to zoom · Drag to spin · Click North, East, West, South (NEWS) buttons above to focus"})]}),a.jsxs("div",{className:"lg:col-span-4 p-5 border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-[#0a0f1d] flex flex-col justify-between h-full space-y-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[a.jsx(tr,{className:"h-3.5 w-3.5 text-cyan-400"}),r==="All"?"All Active Hubs":`${r} Zone Hubs`," (",u.length,")"]}),r!=="All"&&a.jsx("button",{onClick:()=>m("All"),className:"text-[10px] text-cyan-400 hover:underline",children:"View All"})]}),a.jsx("div",{className:"space-y-2 max-h-[320px] overflow-y-auto pr-1",children:u.slice(0,8).map((p,_)=>a.jsxs("div",{onClick:()=>{s(p),c({lat:p.lat,lng:p.lng}),t&&(p.city||p.label)&&t(p.city||p.label)},className:`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${(i==null?void 0:i.label)===p.label?"border-cyan-500 bg-cyan-950/40 text-cyan-200":"border-slate-800/80 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700"}`,children:[a.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 pr-2",children:[a.jsx("div",{className:"h-7 w-7 rounded-full overflow-hidden border border-cyan-400/80 shrink-0",children:a.jsx("img",{src:p.src||Ft[_%Ft.length],alt:p.label,className:"h-full w-full object-cover"})}),a.jsxs("div",{className:"truncate",children:[a.jsx("div",{className:"font-bold text-slate-200 truncate",children:p.label}),a.jsxs("div",{className:"text-[10px] text-slate-500 font-mono",children:[p.lat.toFixed(4),", ",p.lng.toFixed(4)]})]})]}),a.jsxs("div",{className:"text-right shrink-0 flex flex-col items-end gap-1",children:[h(p.region),a.jsxs("span",{className:"font-bold text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 text-[10px]",children:[p.count," ",p.count===1?"case":"cases"]})]})]},_))})]}),i?a.jsxs("div",{className:"rounded-lg bg-cyan-950/40 p-3 border border-cyan-800/70 text-xs",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 font-bold text-cyan-300",children:[a.jsx(tr,{className:"h-3.5 w-3.5 text-cyan-400 shrink-0"}),a.jsx("span",{children:i.label})]}),a.jsxs("a",{href:`https://www.google.com/maps?q=${i.lat},${i.lng}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:underline",children:["Google Maps",a.jsx(Kl,{className:"h-3 w-3"})]})]}),a.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 mt-1",children:[a.jsxs("span",{className:"font-mono",children:["GPS: ",i.lat.toFixed(4),", ",i.lng.toFixed(4)]}),i.region&&a.jsxs("span",{className:"text-cyan-300 font-semibold",children:[i.region," Zone"]})]})]}):a.jsxs("div",{className:"rounded-lg bg-slate-900/60 p-2.5 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[a.jsx("span",{children:"Click any hub or zone to rotate the Earth"}),a.jsx(aa,{className:"h-3.5 w-3.5 text-slate-500"})]})]})]})})]})};function ss({className:n,variant:e="default",...t}){const i={default:"bg-blue-100 text-blue-800 border-blue-200",success:"bg-emerald-100 text-emerald-800 border-emerald-200",destructive:"bg-rose-100 text-rose-800 border-rose-200",warning:"bg-amber-100 text-amber-900 border-amber-200",secondary:"bg-slate-100 text-slate-800 border-slate-200",outline:"text-slate-800 border-slate-300"};return a.jsx("div",{className:pn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors whitespace-nowrap",i[e],n),...t})}const rx=({cases:n,pagination:e,loading:t,onPageChange:i,onFilterChange:s,onViewCase:r,onDeleteCases:o,statusFilterValue:l=""})=>{const[c,d]=oe.useState(!1),[u,m]=oe.useState(new Set),[h,p]=oe.useState(!1),[_,y]=oe.useState(""),g=W=>{const K=W.payload||{},ae=K["FSE Name"]||"Electrician",ye=K["Vehicle Registration No."]||K["Chassis No."]||"vehicle",We=W.case_number||K["Diagnostic Case ID"]||W.id,Ae=`${window.location.origin}/confirm.html?c=${encodeURIComponent(We)}`,Be=`Hi ${ae}, RetarderIQ showed a fault on vehicle ${ye}. Did you rectify the issue? Tap here to confirm in 1 second: ${Ae}`,Fe=String(K["Technician Phone"]||"").replace(/[^0-9]/g,""),Ie=Fe.length===10?`91${Fe}`:Fe,it=Ie?`https://api.whatsapp.com/send?phone=${Ie}&text=${encodeURIComponent(Be)}`:`https://api.whatsapp.com/send?text=${encodeURIComponent(Be)}`;window.open(it,"_blank"),navigator.clipboard&&(navigator.clipboard.writeText(Ae),y(`WhatsApp link copied for ${ye} (${ae})!`),setTimeout(()=>y(""),4500))},[f,S]=oe.useState(""),[C,M]=oe.useState(l),[E,T]=oe.useState(""),[x,w]=oe.useState(""),[F,A]=oe.useState(""),[L,U]=oe.useState(""),[V,N]=oe.useState(""),[O,Z]=oe.useState(""),[H,se]=oe.useState("");Gl.useEffect(()=>{M(l)},[l]);const k=(W={})=>{const K={search:f,status:C,region:E,manufacturer:x,language:F,feedback:L,kmRange:V,dateFrom:O,dateTo:H,...W};s(K)},ne=W=>{W.preventDefault(),k()},ie=()=>{S(""),M(""),T(""),w(""),A(""),U(""),N(""),Z(""),se(""),s({search:"",status:"",region:"",manufacturer:"",language:"",feedback:"",kmRange:"",dateFrom:"",dateTo:""})},Me=W=>{m(W?new Set(n.map(K=>K.id)):new Set)},Ne=W=>{const K=new Set(u);K.has(W)?K.delete(W):K.add(W),m(K)},j=async()=>{if(u.size!==0&&window.confirm(`Are you sure you want to delete ${u.size} diagnostic report${u.size===1?"":"s"}? This cannot be undone.`)){p(!0);try{await o(Array.from(u)),m(new Set)}finally{p(!1)}}},ue=W=>{const K=Oi(W);return K==="FAULT FOUND"?a.jsx(ss,{variant:"destructive",children:"Fault Found"}):K==="WORKING SATISFACTORY"?a.jsx(ss,{variant:"success",children:"Satisfactory"}):K==="CLOSED_BY_ADMIN"||K==="CLOSED BY ADMIN"?a.jsx("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-900 border border-purple-300",children:"🟣 Closed by Admin"}):K==="INCOMPLETE"?a.jsx(ss,{variant:"warning",children:"Incomplete"}):a.jsx(ss,{variant:"secondary",children:K})};return a.jsxs(bt,{className:"mb-6",children:[a.jsxs(qt,{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100",children:[a.jsxs("div",{children:[a.jsx(Yt,{children:"Case Explorer"}),a.jsx($t,{children:"Search and manage vehicle diagnostic reports submitted by field technicians."})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[u.size>0&&a.jsxs(ht,{variant:"danger",size:"sm",disabled:h,onClick:j,className:"text-xs",children:[a.jsx(tc,{className:"h-3.5 w-3.5 mr-1"}),"Delete Selected (",u.size,")"]}),a.jsxs(ht,{variant:"outline",size:"sm",onClick:()=>d(!c),className:"text-xs",children:[a.jsx(ou,{className:"h-3.5 w-3.5 mr-1.5 text-slate-500"}),"Filters",a.jsx(eu,{className:`h-3.5 w-3.5 ml-1 transition-transform ${c?"rotate-180":""}`})]})]})]}),a.jsxs(Kt,{className:"pt-4",children:[_&&a.jsxs("div",{className:"mb-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs px-3.5 py-2.5 rounded-lg flex items-center justify-between animate-in fade-in",children:[a.jsxs("span",{className:"font-semibold flex items-center gap-1.5",children:[a.jsx(Ja,{className:"h-3.5 w-3.5 text-emerald-600"}),_]}),a.jsx("button",{onClick:()=>y(""),className:"text-emerald-700 hover:text-emerald-900 cursor-pointer",children:a.jsx(sc,{className:"h-3.5 w-3.5"})})]}),a.jsxs("form",{onSubmit:ne,className:"flex gap-2 mb-3",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx(Ql,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),a.jsx(Zt,{value:f,onChange:W=>S(W.target.value),placeholder:"Search by Case ID, Chassis No, Registration, Dealer, or Technician...",className:"pl-9 h-9 text-xs"})]}),a.jsx(ht,{type:"submit",size:"sm",className:"h-9 px-4 text-xs font-semibold",children:"Search"}),(f||C||E||x||F||L||V||O||H)&&a.jsxs(ht,{type:"button",variant:"ghost",size:"sm",onClick:ie,className:"h-9 text-xs text-slate-500 hover:text-slate-800",children:[a.jsx(Jl,{className:"h-3.5 w-3.5 mr-1"}),"Reset"]})]}),c&&a.jsxs("div",{className:"mb-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs animate-in fade-in duration-150",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Status"}),a.jsxs(xn,{value:C,onChange:W=>{M(W.target.value),k({status:W.target.value})},className:"h-8 text-xs bg-white",children:[a.jsx("option",{value:"",children:"All statuses"}),a.jsx("option",{value:"FAULT FOUND",children:"FAULT FOUND"}),a.jsx("option",{value:"WORKING SATISFACTORY",children:"WORKING SATISFACTORY"}),a.jsx("option",{value:"CLOSED_BY_ADMIN",children:"🟣 CLOSED BY ADMIN (VERIFIED)"}),a.jsx("option",{value:"INCOMPLETE",children:"INCOMPLETE"}),a.jsx("option",{value:"REFERRED_FOR_REPLACEMENT",children:"REFERRED FOR REPLACEMENT"}),a.jsx("option",{value:"VERIFICATION_PENDING",children:"VERIFICATION PENDING"}),a.jsx("option",{value:"CLOSED",children:"CLOSED"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Region"}),a.jsxs(xn,{value:E,onChange:W=>{T(W.target.value),k({region:W.target.value})},className:"h-8 text-xs bg-white",children:[a.jsx("option",{value:"",children:"All regions"}),a.jsx("option",{value:"North",children:"North (N)"}),a.jsx("option",{value:"East",children:"East (E)"}),a.jsx("option",{value:"West",children:"West (W)"}),a.jsx("option",{value:"South",children:"South (S)"}),a.jsx("option",{value:"Central",children:"Central"}),a.jsx("option",{value:"Other",children:"Other"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Vehicle OEM"}),a.jsxs(xn,{value:x,onChange:W=>{w(W.target.value),k({manufacturer:W.target.value})},className:"h-8 text-xs bg-white",children:[a.jsx("option",{value:"",children:"All manufacturers"}),a.jsx("option",{value:"ASHOK LEYLAND",children:"ASHOK LEYLAND"}),a.jsx("option",{value:"TATA MOTORS",children:"TATA MOTORS"}),a.jsx("option",{value:"VECV",children:"VECV"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Diagnostic Language"}),a.jsxs(xn,{value:F,onChange:W=>{A(W.target.value),k({language:W.target.value})},className:"h-8 text-xs bg-white",children:[a.jsx("option",{value:"",children:"All languages"}),a.jsx("option",{value:"English",children:"English"}),a.jsx("option",{value:"Tamil",children:"Tamil"}),a.jsx("option",{value:"Malayalam",children:"Malayalam"}),a.jsx("option",{value:"Hindi",children:"Hindi"}),a.jsx("option",{value:"Telugu",children:"Telugu"}),a.jsx("option",{value:"Kannada",children:"Kannada"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Feedback Rating"}),a.jsxs(xn,{value:L,onChange:W=>{U(W.target.value),k({feedback:W.target.value})},className:"h-8 text-xs bg-white",children:[a.jsx("option",{value:"",children:"All feedback"}),a.jsx("option",{value:"5",children:"5 / 5 ★"}),a.jsx("option",{value:"4",children:"4 / 5 ★"}),a.jsx("option",{value:"3",children:"3 / 5 ★"}),a.jsx("option",{value:"2",children:"2 / 5 ★"}),a.jsx("option",{value:"1",children:"1 / 5 ★"}),a.jsx("option",{value:"none",children:"Not provided"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"Odometer / KM"}),a.jsxs(xn,{value:V,onChange:W=>{N(W.target.value),k({kmRange:W.target.value})},className:"h-8 text-xs bg-white",children:[a.jsx("option",{value:"",children:"All KM ranges"}),a.jsx("option",{value:"0-50000",children:"0 – 50,000 km"}),a.jsx("option",{value:"50001-100000",children:"50,001 – 100,000 km"}),a.jsx("option",{value:"100001-plus",children:"100,001+ km"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"From Date"}),a.jsx("input",{type:"date",value:O,onChange:W=>{Z(W.target.value),k({dateFrom:W.target.value})},className:"h-8 w-full rounded-md border border-slate-300 bg-white px-2 text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-600 mb-1",children:"To Date"}),a.jsx("input",{type:"date",value:H,onChange:W=>{se(W.target.value),k({dateTo:W.target.value})},className:"h-8 w-full rounded-md border border-slate-300 bg-white px-2 text-xs"})]})]}),a.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:a.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[a.jsx("thead",{className:"bg-slate-50/80 text-slate-700 font-semibold border-b border-slate-200",children:a.jsxs("tr",{children:[a.jsx("th",{className:"p-3 w-10",children:a.jsx("input",{type:"checkbox",checked:n.length>0&&u.size===n.length,onChange:W=>Me(W.target.checked),className:"h-4 w-4 rounded border-slate-300 text-[#0b5daa] focus:ring-[#0b5daa]"})}),a.jsx("th",{className:"p-3",children:"Case ID"}),a.jsx("th",{className:"p-3",children:"Date"}),a.jsx("th",{className:"p-3",children:"Status"}),a.jsx("th",{className:"p-3",children:"Technician"}),a.jsx("th",{className:"p-3",children:"Vehicle"}),a.jsx("th",{className:"p-3",children:"Language"}),a.jsx("th",{className:"p-3",children:"Dealer"}),a.jsx("th",{className:"p-3",children:"Part Recommendation"}),a.jsx("th",{className:"p-3 text-right",children:"Actions"})]})}),a.jsx("tbody",{className:"divide-y divide-slate-100 bg-white",children:t?a.jsx("tr",{children:a.jsx("td",{colSpan:10,className:"p-8 text-center text-slate-400",children:"Loading diagnostic records..."})}):n.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:10,className:"p-8 text-center text-slate-400",children:"No matching diagnostic reports found."})}):n.map(W=>{const K=W.payload||{},ae=u.has(W.id),ye=W.case_number||K["Diagnostic Case ID"]||W.id.substring(0,8),We=K["FSE Name"]||"-",Ae=K["Vehicle Registration No."]||K["Chassis No."]||"-",Be=K["Diagnostic Language Name"]||K["Diagnostic Language"]||"English",Fe=K["Dealer / Location"]||"-",Ie=K["Recommended Part No."]||K["Suspected Product"]||"-",it=K["Replacement Status"]||"NOT_REQUIRED";return a.jsxs("tr",{className:`hover:bg-slate-50/70 transition-colors ${ae?"bg-blue-50/40":""}`,children:[a.jsx("td",{className:"p-3",children:a.jsx("input",{type:"checkbox",checked:ae,onChange:()=>Ne(W.id),className:"h-4 w-4 rounded border-slate-300 text-[#0b5daa] focus:ring-[#0b5daa]"})}),a.jsx("td",{className:"p-3 font-semibold text-slate-900",children:ye}),a.jsx("td",{className:"p-3 text-slate-500 whitespace-nowrap",children:new Date(W.created_at).toLocaleDateString()}),a.jsx("td",{className:"p-3",children:ue(K)}),a.jsx("td",{className:"p-3 text-slate-700 font-medium",children:We}),a.jsxs("td",{className:"p-3 text-slate-700",children:[a.jsx("div",{className:"font-mono font-semibold text-slate-900 text-[11px]",children:Ae}),K["Travels Name"]&&a.jsx("div",{className:"text-[10px] font-semibold text-[#0b5daa] mt-0.5 truncate max-w-[140px]",title:K["Travels Name"],children:K["Travels Name"]})]}),a.jsx("td",{className:"p-3 text-slate-500",children:Be}),a.jsx("td",{className:"p-3 text-slate-600 max-w-[140px] truncate",title:Fe,children:Fe}),a.jsxs("td",{className:"p-3 text-slate-700",children:[a.jsx("div",{className:"font-medium truncate max-w-[160px]",title:Ie,children:Ie}),a.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider",children:it})]}),a.jsx("td",{className:"p-3 text-right",children:a.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[!["CLOSED_BY_ADMIN","CLOSED BY ADMIN","WORKING SATISFACTORY"].includes(Oi(K))&&a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:ut=>{ut.stopPropagation(),g(W)},title:"Send WhatsApp 1-Tap Quick-Close Link",className:"h-7 w-7 inline-flex items-center justify-center rounded-md border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors cursor-pointer shadow-xs",children:a.jsx(Zl,{className:"h-3.5 w-3.5"})}),a.jsx("button",{type:"button",onClick:ut=>{ut.stopPropagation(),r(W.id)},title:"Telephonic Verification & Admin Closure",className:"h-7 w-7 inline-flex items-center justify-center rounded-md border border-purple-300 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors cursor-pointer shadow-xs",children:a.jsx(di,{className:"h-3.5 w-3.5"})})]}),a.jsxs(ht,{variant:"secondary",size:"sm",onClick:()=>r(W.id),className:"h-7 px-2.5 text-[11px] font-semibold",children:[a.jsx(Kl,{className:"h-3 w-3 mr-1 text-[#0b5daa]"}),"View"]})]})})]},W.id)})})]})}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 text-xs text-slate-500",children:[a.jsxs("div",{children:["Showing Page ",a.jsx("span",{className:"font-semibold text-slate-800",children:e.page})," of"," ",a.jsx("span",{className:"font-semibold text-slate-800",children:e.totalPages||1})," (",a.jsx("span",{className:"font-semibold text-slate-800",children:e.total})," total reports)"]}),a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsxs(ht,{variant:"outline",size:"sm",disabled:e.page<=1||t,onClick:()=>i(e.page-1),className:"h-8 px-2.5 text-xs",children:[a.jsx(tu,{className:"h-3.5 w-3.5 mr-1"}),"Previous"]}),a.jsxs(ht,{variant:"outline",size:"sm",disabled:e.page>=(e.totalPages||1)||t,onClick:()=>i(e.page+1),className:"h-8 px-2.5 text-xs",children:["Next",a.jsx(nu,{className:"h-3.5 w-3.5 ml-1"})]})]})]})]})]})};function dr({isOpen:n,onClose:e,title:t,description:i,children:s,maxWidth:r="2xl"}){if(oe.useEffect(()=>{function l(c){c.key==="Escape"&&e()}return n?(document.body.style.overflow="hidden",window.addEventListener("keydown",l)):document.body.style.overflow="",()=>{document.body.style.overflow="",window.removeEventListener("keydown",l)}},[n,e]),!n)return null;const o={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl","5xl":"max-w-5xl"}[r];return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[a.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity",onClick:e}),a.jsxs("div",{className:pn("relative z-50 max-h-[90vh] w-full overflow-hidden rounded-xl bg-white shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150",o),children:[a.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 px-6 py-4",children:[a.jsxs("div",{children:[t&&a.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:t}),i&&a.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:i})]}),a.jsx("button",{onClick:e,className:"rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors",children:a.jsx(sc,{className:"h-5 w-5"})})]}),a.jsx("div",{className:"overflow-y-auto p-6",children:s})]})]})}function xt(n){return String(n??"").replace(/[&<>'"]/g,e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case"'":return"&#39;";case'"':return"&quot;";default:return e}})}function mo(n){return String(n||"-").replace(/<br\s*\/?>/gi," ").replace(/<[^>]*>/g,"").trim()}function Jc(n){if(Array.isArray(n==null?void 0:n["Diagnostic Fault Details"])&&n["Diagnostic Fault Details"].length)return n["Diagnostic Fault Details"];if((n==null?void 0:n["Diagnostic Status"])==="WORKING SATISFACTORY")return[{action:"Retarder is working satisfactorily."}];const e=mo(n==null?void 0:n["Customer Voice / Field Complaints reported"]);return e&&e!=="-"?e.split(/(?=Root Cause:)/i).map(t=>({action:t.trim()})).filter(t=>t.action&&t.action!=="-"):[]}function Qc(n){return Array.isArray(n)?n.map((e,t)=>({key:e.key||`step_${t+1}`,question:mo(e.question||e.key||e.title||`Diagnostic Step ${t+1}`),response:e.response||e.result||"-",evidence:e.evidence})):[]}function ax(n){const e=n.payload||{},t=n.case_number||e["Diagnostic Case ID"]||"Diagnostic Case",i=Oi(e),s=i==="WORKING SATISFACTORY"?"status-ok":i==="FAULT FOUND"?"status-fault":"status-incomplete",r=n.created_at?new Date(n.created_at).toLocaleString():new Date().toLocaleString(),o=e.Region||ls(e),l=Qa(e),c=Jc(e),d=Qc(e["Diagnostic Step History"]),u=e["Step Evidence"]||{},m=Array.isArray(n.part_orders)?n.part_orders:[],h=(S,C)=>`
    <div class="detail-item">
      <small>${xt(S)}</small>
      <strong>${xt(C||"—")}</strong>
    </div>
  `;let p="";c.length?p=c.map(S=>{const C=S.title?`<strong>${xt(S.title)}</strong><br>`:"",M=xt(mo(S.action||S.title||"-")).replace(/(Root Cause:)/gi,'<strong style="color:#b91c1c;">$1</strong>').replace(/(Corrective Action:)/gi,'<strong style="color:#1e3a8a;">$1</strong>'),E=S.partNo||e["Recommended Part No."],T=E&&E!=="-"&&E!=="None"?`<p class="recommendation"><strong>Recommended Part:</strong> ${xt(S.brand?`${S.brand} ${E}`:E)}</p>`:"";return`
          <div class="fault-entry">
            <div class="fault-text">${C}${M}</div>
            ${T}
          </div>
        `}).join(""):p='<div class="fault-text">No fault details recorded.</div>';let _="";const y=Object.entries(u);y.length>0&&(_=`
      <div class="detail-section">
        <h3>Failed-Step Evidence</h3>
        <div class="evidence-grid">
          ${y.map(([S,C])=>`
              <figure class="evidence-card">
                <img src="${xt(C.dataUrl||"")}" alt="Evidence for ${xt(S)}" />
                <figcaption>${xt(S)}</figcaption>
              </figure>
            `).join("")}
        </div>
      </div>
    `);let g="";d.length>0&&(g=d.map((S,C)=>{const M=String(S.response||"-"),E=M.toLowerCase()==="yes",T=M.toLowerCase()==="no",x=E?"resp-yes":T?"resp-no":"";return`
          <tr>
            <td style="text-align:center; font-weight:bold; color:#64748b;">${String(C+1).padStart(2,"0")}</td>
            <td>${xt(S.question)}</td>
            <td class="${x}">${xt(M)}</td>
          </tr>
        `}).join(""));let f="";return m.length>0&&(f=`
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
            ${m.map(S=>{const C=S.payload||{};return`
                  <tr>
                    <td>${xt(new Date(S.createdAt).toLocaleString())}</td>
                    <td><strong>${xt(S.partNo||C.partNo||"-")}</strong></td>
                    <td>${xt(S.portal||"-")}</td>
                    <td>${xt(C.technicianName||"-")}</td>
                    <td>${xt(C.phoneNumber||"-")}</td>
                    <td>${xt(S.whatsappStatus||"Recorded")}</td>
                  </tr>
                `}).join("")}
          </tbody>
        </table>
      </div>
    `),`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${xt(t)} - Retarder IQ Diagnostic Report</title>
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
      <p>Generated on: ${xt(r)}</p>
      <span class="report-case">${xt(t)}</span>
    </div>

    <!-- Technician & Vehicle Information -->
    <div class="report-info-card">
      <div class="report-columns">
        <div>
          <h3>TECHNICIAN DETAILS</h3>
          ${h("Name",e["FSE Name"])}
          ${h("Phone",e["Technician Phone"])}
          ${h("Workshop / Dealer",e["Dealer / Location"])}
          ${h("Location",[e.City,e.State].filter(Boolean).join(", "))}
          ${h("Region",o)}
        </div>
        <div>
          <h3>VEHICLE DETAILS</h3>
          ${h("Registration No.",e["Vehicle Registration No."])}
          ${h("Travels / Fleet Name",e["Travels Name"])}
          ${h("Vehicle Manufacturer",l)}
          ${h("Model",e.Model)}
          ${h("Odometer / Sale Date",e["Odometer Km"]?`${Number(e["Odometer Km"]).toLocaleString()} km`:e["Kms & Date of Sale"])}
          ${h("Chassis No.",e["Chassis No."])}
          ${h("Emission Standard",e["Emission Standard"])}
        </div>
      </div>

      <!-- Diagnostic Summary & Fault Details -->
      <div class="report-summary">
        <div>
          <h3>DIAGNOSTIC SUMMARY</h3>
          <p style="margin: 0 0 10px;">
            <strong style="margin-right: 6px;">Outcome:</strong>
            <span class="outcome-pill ${s}">${xt(i)}</span>
          </p>
          ${h("Session State",e["Session State"])}
          ${h("Current Step",e["Diagnostic Current Step Label"]||e["Diagnostic Current Step"])}
          ${h("Duration",e["Diagnostic Duration"])}
          ${h("Date Attended",e["Complaint Attended on"]||r)}
          ${h("Language Used",e["Diagnostic Language Name"])}
        </div>
        <div>
          <h3>FAULT DETAILS</h3>
          ${p}
        </div>
      </div>
    </div>

    <!-- Additional Diagnostic Details -->
    <div class="detail-section">
      <h3>Additional Diagnostic Details</h3>
      <div class="detail-grid">
        ${h("Complaint Type",e["Complaint Type"])}
        ${h("Suspected Product",e["Suspected Product"])}
        ${h("Emission Standard",e["Emission Standard"])}
        ${h("Under Warranty?",e["Vehicle under warranty period?"])}
        ${h("Repeat Complaint?",e["Repeat complaint? Yes / No"])}
        ${h("Region",o)}
      </div>
    </div>

    <!-- Customer Voice / Field Complaint -->
    ${e["Customer Voice / Field Complaints reported"]?`
      <div class="detail-section">
        <h3>Technician Finding</h3>
        <div class="detail-callout">
          <strong>Customer voice / field complaint:</strong> ${xt(e["Customer Voice / Field Complaints reported"])}
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
            ${g}
          </tbody>
        </table>
      `:'<p style="color: #94a3b8; font-style: italic; margin-top: 6px;">No step-by-step history was recorded for this session.</p>'}
    </div>

    <!-- Part Orders -->
    ${f}

    <!-- Footer -->
    <div class="report-footer">
      Generated by Retarder IQ Field Diagnostic System · Brakes India Private Limited
    </div>
  </div>
</body>
</html>`}function ox(n){var s;const e=ax(n);let t=document.getElementById("riq-report-print-frame");t||(t=document.createElement("iframe"),t.id="riq-report-print-frame",t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",t.style.opacity="0",t.style.pointerEvents="none",document.body.appendChild(t));const i=(s=t.contentWindow)==null?void 0:s.document;if(!i){const r=window.open("","_blank");r&&(r.document.write(e),r.document.close(),r.focus(),setTimeout(()=>{r.print(),r.close()},350));return}i.open(),i.write(e),i.close(),setTimeout(()=>{var r,o;try{(r=t==null?void 0:t.contentWindow)==null||r.focus(),(o=t==null?void 0:t.contentWindow)==null||o.print()}catch(l){console.error("Failed to trigger iframe print, opening window fallback:",l);const c=window.open("","_blank");c&&(c.document.write(e),c.document.close(),c.focus(),c.print())}},250)}const lx=({caseItem:n,isOpen:e,onClose:t,onCaseUpdated:i})=>{const[s,r]=oe.useState(!1),[o,l]=oe.useState(""),[c,d]=oe.useState(""),[u,m]=oe.useState(null),[h,p]=oe.useState(!1),[_,y]=oe.useState("Fault Found & Rectified"),[g,f]=oe.useState(""),[S,C]=oe.useState(""),[M,E]=oe.useState(!1),[T,x]=oe.useState(""),[w,F]=oe.useState("");if(!n)return null;const A=n.payload||{},L=Oi(A),U=o||A.Region||ls(A),V=n.case_number||A["Diagnostic Case ID"]||"Diagnostic Case",N=Qa(A),O=n.created_at?new Date(n.created_at).toLocaleString():new Date().toLocaleString(),Z=Jc(A),H=Qc(A["Diagnostic Step History"]),se=A["Step Evidence"]||{},k=Array.isArray(n.part_orders)?n.part_orders:[],ne=async()=>{if(U){r(!0),d("Saving…");try{await Ot.updateCaseRegion(n.id,U),n.payload.Region=U,d("Saved!"),i(),setTimeout(()=>d(""),2500)}catch(K){console.error("Failed to update region:",K),d(K.message||"Error saving")}finally{r(!1)}}},ie=()=>{ox(n)},Me=()=>{const K=Tu(A),ae=A["FSE Name"]||"Electrician";f(K),y("Fault Found & Rectified"),C(`Verified telephonically with Electrician ${ae}. ${K} checked/replaced, vehicle road-tested satisfactory.`),x(""),p(!0)},Ne=async()=>{if(!g.trim()){x("Please enter the suspected/replaced part.");return}E(!0),x("");try{await Ot.closeCaseByAdmin(n.id,{outcome:_,suspectedPart:g.trim(),remarks:S.trim()}),n.payload["Diagnostic Status"]="CLOSED_BY_ADMIN",n.payload["Lifecycle Status"]="CLOSED",n.payload["Session State"]="CLOSED_BY_ADMIN",n.payload["Admin Resolution"]={outcome:_,suspectedPart:g.trim(),remarks:S.trim(),closedAt:new Date().toISOString(),closedBy:"Admin"},p(!1),i()}catch(K){x(K.message||"Failed to close case.")}finally{E(!1)}},j=()=>{const K=A["FSE Name"]||"Electrician",ae=A["Vehicle Registration No."]||A["Chassis No."]||"vehicle",ye=n.case_number||A["Diagnostic Case ID"]||n.id,We=`${window.location.origin}/confirm.html?c=${encodeURIComponent(ye)}`,Ae=`Hi ${K}, RetarderIQ showed a fault on vehicle ${ae}. Did you rectify the issue? Tap here to confirm in 1 second: ${We}`,Be=String(A["Technician Phone"]||"").replace(/[^0-9]/g,""),Fe=Be.length===10?`91${Be}`:Be,Ie=Fe?`https://api.whatsapp.com/send?phone=${Fe}&text=${encodeURIComponent(Ae)}`:`https://api.whatsapp.com/send?text=${encodeURIComponent(Ae)}`;window.open(Ie,"_blank"),navigator.clipboard&&(navigator.clipboard.writeText(We),F("WhatsApp opened! 1-Tap link copied to clipboard."),setTimeout(()=>F(""),4500))},ue=()=>L==="WORKING SATISFACTORY"?a.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300",children:[a.jsx(Fo,{className:"h-3.5 w-3.5 text-emerald-600"}),L]}):L==="FAULT FOUND"?a.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300",children:[a.jsx(nc,{className:"h-3.5 w-3.5 text-rose-600"}),L]}):L==="CLOSED_BY_ADMIN"||L==="CLOSED BY ADMIN"?a.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-300",children:[a.jsx(di,{className:"h-3.5 w-3.5 text-purple-600"}),"CLOSED BY ADMIN (VERIFIED)"]}):a.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300",children:[a.jsx(iu,{className:"h-3.5 w-3.5 text-amber-600"}),L]}),W=(K,ae)=>a.jsxs("div",{className:"bg-white p-2.5 rounded-lg border border-slate-200",children:[a.jsx("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider",children:K}),a.jsx("div",{className:"text-xs font-semibold text-slate-800 mt-0.5 break-words",children:ae||"—"})]});return a.jsxs(a.Fragment,{children:[a.jsx(dr,{isOpen:e,onClose:t,maxWidth:"4xl",children:a.jsxs("div",{className:"space-y-5 text-slate-800",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700 whitespace-nowrap",children:"Admin Region:"}),a.jsxs("select",{value:U,onChange:K=>l(K.target.value),className:"h-8 text-xs bg-white rounded-lg border border-slate-300 font-semibold text-slate-800 px-2 focus:ring-1 focus:ring-[#0b5daa] focus:outline-none",children:[a.jsx("option",{value:"North",children:"North (N)"}),a.jsx("option",{value:"East",children:"East (E)"}),a.jsx("option",{value:"West",children:"West (W)"}),a.jsx("option",{value:"South",children:"South (S)"}),a.jsx("option",{value:"Central",children:"Central"}),a.jsx("option",{value:"Other",children:"Other"})]}),a.jsx(ht,{variant:"outline",size:"sm",onClick:ne,disabled:s,className:"h-8 text-xs px-2.5 font-semibold text-slate-700 bg-white",children:"Save"}),c&&a.jsx("span",{className:"text-xs font-semibold text-[#0b5daa] ml-1",children:c})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsxs("button",{type:"button",onClick:j,title:"Send WhatsApp 1-Tap Quick-Close Link to Technician",className:"h-8 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3 rounded-lg inline-flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer",children:[a.jsx(Zl,{className:"h-3.5 w-3.5"}),"WhatsApp 1-Tap"]}),a.jsxs("button",{type:"button",onClick:Me,title:"Mark case as resolved via telephonic verification with technician",className:"h-8 text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white px-3 rounded-lg inline-flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer",children:[a.jsx(di,{className:"h-3.5 w-3.5"}),"Mark Resolved by Admin"]}),a.jsxs(ht,{variant:"default",size:"sm",onClick:ie,className:"h-8 text-xs font-bold bg-[#0b5daa] hover:bg-[#084885] text-white shadow-xs",children:[a.jsx(gu,{className:"h-3.5 w-3.5 mr-1.5"}),"Print PDF"]})]})]}),w&&a.jsxs("div",{className:"bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs px-3.5 py-2 rounded-lg flex items-center justify-between animate-in fade-in",children:[a.jsxs("span",{className:"font-semibold flex items-center gap-1.5",children:[a.jsx(Ja,{className:"h-3.5 w-3.5 text-emerald-600"}),w]}),a.jsx("button",{onClick:()=>F(""),className:"text-emerald-700 hover:text-emerald-900 cursor-pointer",children:a.jsx(X,{className:"h-3.5 w-3.5"})})]}),a.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-5",children:[a.jsxs("div",{className:"relative pb-4 border-b-2 border-[#0b5daa] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-extrabold text-[#0b5daa] tracking-tight",children:"RETARDER IQ – Diagnostic Report"}),a.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:["Generated on: ",a.jsx("span",{className:"font-semibold text-slate-700",children:O})]})]}),a.jsx("div",{className:"self-start sm:self-auto bg-blue-50 text-[#0b5daa] border border-blue-200 px-3 py-1 rounded-lg text-xs font-extrabold tracking-wide",children:V})]}),a.jsxs("div",{className:"rounded-xl border-2 border-slate-200 bg-slate-50/70 p-4 space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"TECHNICIAN DETAILS"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[W("Name",A["FSE Name"]),W("Phone",A["Technician Phone"]),W("Workshop / Dealer",A["Dealer / Location"]),W("Location",[A.City,A.State].filter(Boolean).join(", ")),W("Region",U)]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"VEHICLE DETAILS"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[W("Registration No.",A["Vehicle Registration No."]),W("Travels / Fleet Name",A["Travels Name"]),W("Vehicle Manufacturer",N),W("Model",A.Model),W("Odometer / Sale Date",A["Odometer Km"]?`${Number(A["Odometer Km"]).toLocaleString()} km`:A["Kms & Date of Sale"]),W("Chassis No.",A["Chassis No."]),W("Emission Standard",A["Emission Standard"])]})]})]}),a.jsxs("div",{className:"rounded-xl border border-blue-100 bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"DIAGNOSTIC SUMMARY"}),a.jsxs("div",{className:"mb-2",children:[a.jsx("span",{className:"text-xs font-bold text-slate-600 mr-2",children:"Outcome:"}),ue()]}),A["Admin Resolution"]&&a.jsxs("div",{className:"p-3 mb-2 rounded-lg border border-purple-200 bg-purple-50 text-xs text-purple-950 space-y-1.5",children:[a.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-purple-900",children:[a.jsx(di,{className:"h-3.5 w-3.5 text-purple-600"}),a.jsx("span",{children:"Admin Tele-Verification:"}),a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-purple-200 text-purple-800 font-extrabold uppercase",children:A["Admin Resolution"].outcome||"Fault Found & Rectified"})]}),a.jsxs("div",{className:"text-[11px] text-purple-900",children:[a.jsx("strong",{children:"Action Taken:"})," ",A["Admin Resolution"].suspectedPart||"Inspected & rectified"]}),A["Admin Resolution"].remarks&&a.jsxs("div",{className:"text-[11px] text-purple-800 italic bg-white/70 p-1.5 rounded border border-purple-100",children:['"',A["Admin Resolution"].remarks,'"']}),a.jsxs("div",{className:"text-[10px] text-purple-600",children:["Verified by ",A["Admin Resolution"].closedBy||"Admin"," · ",A["Admin Resolution"].closedAt?new Date(A["Admin Resolution"].closedAt).toLocaleString():""]})]}),A["Technician Confirmation"]&&a.jsxs("div",{className:"p-2.5 mb-2 rounded-lg border border-emerald-200 bg-emerald-50 text-xs text-emerald-950 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx(Fo,{className:"h-3.5 w-3.5 text-emerald-600"}),a.jsx("span",{className:"font-bold text-emerald-900",children:"Confirmed via WhatsApp:"}),a.jsx("span",{className:"font-semibold text-emerald-800",children:A["Technician Confirmation"].outcome||"Repaired & Tested OK"})]}),a.jsx("span",{className:"text-[10px] text-emerald-600 font-medium",children:A["Technician Confirmation"].confirmedAt?new Date(A["Technician Confirmation"].confirmedAt).toLocaleDateString():""})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[W("Session State",A["Session State"]),W("Current Step",A["Diagnostic Current Step Label"]||A["Diagnostic Current Step"]),W("Duration",A["Diagnostic Duration"]||(n.created_at&&A["Session Last Seen"]?`${Math.max(1,Math.round((new Date(A["Session Last Seen"]).getTime()-new Date(n.created_at).getTime())/6e4))} mins`:"—")),W("Date Attended",A["Complaint Attended on"]||O),W("Language Used",A["Diagnostic Language Name"])]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-[#0b5daa] uppercase tracking-wider pb-1 border-b border-blue-100",children:"FAULT DETAILS"}),Z.length?Z.map((K,ae)=>a.jsxs("div",{className:"p-3 rounded-lg border-l-4 border-l-rose-500 bg-rose-50/50 border border-rose-200/60 text-xs space-y-1.5",children:[K.title&&a.jsx("div",{className:"font-bold text-slate-900",children:K.title}),a.jsx("div",{className:"text-rose-950 whitespace-pre-line leading-relaxed font-medium",children:K.action}),(K.partNo||A["Recommended Part No."])&&a.jsxs("div",{className:"mt-2 text-xs font-semibold text-amber-900 bg-amber-100/70 p-2 rounded border border-amber-200",children:[a.jsx("strong",{children:"Recommended Part:"})," ",K.brand?`${K.brand} `:"",K.partNo||A["Recommended Part No."]]})]},ae)):a.jsx("div",{className:"p-3 text-xs text-slate-500 italic bg-slate-50 rounded-lg",children:"No fault details recorded."})]})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Additional Diagnostic Details"}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:[W("Complaint Type",A["Complaint Type"]),W("Suspected Product",A["Suspected Product"]),W("Emission Standard",A["Emission Standard"]),W("Under Warranty?",A["Vehicle under warranty period?"]),W("Repeat Complaint?",A["Repeat complaint? Yes / No"]),W("Region",U)]})]}),A["Customer Voice / Field Complaints reported"]&&a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Technician Finding"}),a.jsxs("div",{className:"p-3.5 rounded-lg border border-amber-200 bg-amber-50 text-xs text-amber-950 leading-relaxed",children:[a.jsx("strong",{className:"block text-amber-900 mb-1",children:"Customer voice / field complaint:"}),A["Customer Voice / Field Complaints reported"]]})]}),A["Diagnostic Feedback"]&&(A["Diagnostic Feedback"].clarity||A["Diagnostic Feedback"].rating)&&a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Diagnostic Feedback"}),a.jsxs("div",{className:"p-3.5 rounded-lg border border-amber-200 bg-amber-50/70 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-bold text-amber-900",children:"Diagnostic Clarity:"}),a.jsxs("span",{className:"text-amber-500 font-bold text-sm tracking-widest",children:["★".repeat(Math.max(1,Math.min(5,Number(A["Diagnostic Feedback"].clarity||A["Diagnostic Feedback"].rating)||0))),"☆".repeat(5-Math.max(1,Math.min(5,Number(A["Diagnostic Feedback"].clarity||A["Diagnostic Feedback"].rating)||0)))]}),a.jsxs("span",{className:"text-slate-600 font-semibold",children:["(",A["Diagnostic Feedback"].clarity||A["Diagnostic Feedback"].rating," / 5)"]})]}),A["Diagnostic Feedback"].comments&&a.jsxs("div",{className:"text-slate-600 italic",children:['"',A["Diagnostic Feedback"].comments,'"']})]})]}),Object.keys(se).length>0&&a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Failed-Step Evidence"}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:Object.entries(se).map(([K,ae])=>a.jsxs("div",{onClick:()=>m({src:ae.dataUrl,alt:K}),className:"group cursor-pointer rounded-lg border border-slate-200 overflow-hidden bg-slate-50 hover:shadow-md transition-all",children:[a.jsx("img",{src:ae.dataUrl,alt:`Evidence for ${K}`,className:"w-full h-32 object-cover group-hover:scale-105 transition-transform"}),a.jsx("div",{className:"p-2 text-[11px] font-bold text-slate-700 bg-white truncate",children:K})]},K))})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Step History"}),H.length>0?a.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:a.jsxs("table",{className:"w-full text-xs text-left",children:[a.jsx("thead",{className:"bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2 text-center w-12",children:"#"}),a.jsx("th",{className:"px-3 py-2",children:"Diagnostic Question"}),a.jsx("th",{className:"px-3 py-2 w-24",children:"Response"})]})}),a.jsx("tbody",{className:"divide-y divide-slate-100",children:H.map((K,ae)=>{const ye=String(K.response||"").toLowerCase()==="yes",We=String(K.response||"").toLowerCase()==="no";return a.jsxs("tr",{className:"hover:bg-slate-50/80",children:[a.jsx("td",{className:"px-3 py-2 text-center text-slate-400 font-mono",children:String(ae+1).padStart(2,"0")}),a.jsx("td",{className:"px-3 py-2 text-slate-800 font-medium",children:K.question}),a.jsx("td",{className:`px-3 py-2 font-bold ${ye?"text-emerald-700":We?"text-rose-700":"text-slate-600"}`,children:K.response})]},ae)})})]})}):a.jsx("div",{className:"p-3 text-xs text-slate-400 italic bg-slate-50 rounded-lg",children:"No step-by-step history was recorded for this session."})]}),k.length>0&&a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-xs font-extrabold text-slate-600 uppercase tracking-wider",children:"Part Order Requests"}),a.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:a.jsxs("table",{className:"w-full text-xs text-left",children:[a.jsx("thead",{className:"bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"Date"}),a.jsx("th",{className:"px-3 py-2",children:"Part Number"}),a.jsx("th",{className:"px-3 py-2",children:"Portal"}),a.jsx("th",{className:"px-3 py-2",children:"Technician"}),a.jsx("th",{className:"px-3 py-2",children:"Phone"}),a.jsx("th",{className:"px-3 py-2",children:"Notification"})]})}),a.jsx("tbody",{className:"divide-y divide-slate-100",children:k.map((K,ae)=>{const ye=K.payload||{};return a.jsxs("tr",{className:"hover:bg-slate-50/80",children:[a.jsx("td",{className:"px-3 py-2 text-slate-500",children:new Date(K.createdAt).toLocaleString()}),a.jsx("td",{className:"px-3 py-2 font-bold text-slate-900",children:K.partNo||ye.partNo||"—"}),a.jsx("td",{className:"px-3 py-2 text-slate-600",children:K.portal||"—"}),a.jsx("td",{className:"px-3 py-2 text-slate-800",children:ye.technicianName||"—"}),a.jsx("td",{className:"px-3 py-2 text-slate-600",children:ye.phoneNumber||"—"}),a.jsx("td",{className:"px-3 py-2 font-semibold text-emerald-700",children:K.whatsappStatus||"Recorded"})]},ae)})})]})})]}),a.jsxs("details",{className:"text-xs text-slate-500 rounded-lg border border-slate-200 bg-slate-50 p-2.5",children:[a.jsx("summary",{className:"cursor-pointer font-bold hover:text-slate-800",children:"View Raw Diagnostic Payload JSON"}),a.jsx("pre",{className:"mt-2 max-h-48 overflow-y-auto rounded bg-slate-900 p-3 text-[11px] text-emerald-400 font-mono",children:JSON.stringify(A,null,2)})]})]})]})}),h&&a.jsx(dr,{isOpen:h,onClose:()=>!M&&p(!1),maxWidth:"lg",children:a.jsxs("div",{className:"space-y-4 text-slate-800",children:[a.jsxs("div",{className:"flex items-center gap-3 pb-3 border-b border-purple-100",children:[a.jsx("div",{className:"p-2.5 rounded-xl bg-purple-100 text-purple-700",children:a.jsx(di,{className:"h-5 w-5"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-base font-extrabold text-slate-900",children:"Telephonic Verification & Admin Closure"}),a.jsxs("p",{className:"text-xs text-slate-500",children:["Verify resolution with technician and officially close case ",a.jsx("span",{className:"font-bold text-purple-700",children:V})]})]})]}),a.jsxs("div",{className:"bg-purple-50/70 border border-purple-200/80 rounded-xl p-3 grid grid-cols-2 gap-2 text-xs",children:[a.jsxs("div",{children:[a.jsx("div",{className:"text-[10px] font-bold text-purple-700 uppercase",children:"Electrician / FSE"}),a.jsx("div",{className:"font-bold text-slate-900 mt-0.5",children:A["FSE Name"]||"Technician"}),A["Technician Phone"]?a.jsxs("a",{href:`tel:${A["Technician Phone"]}`,className:"inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 hover:text-purple-800 hover:underline mt-0.5",children:[a.jsx(di,{className:"h-3 w-3"}),A["Technician Phone"]]}):a.jsx("span",{className:"text-slate-400 text-[11px]",children:"No phone listed"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[10px] font-bold text-purple-700 uppercase",children:"Vehicle / Reg No."}),a.jsx("div",{className:"font-bold text-slate-900 font-mono mt-0.5",children:A["Vehicle Registration No."]||A["Chassis No."]||"Vehicle"}),a.jsx("div",{className:"text-[11px] text-slate-600 truncate mt-0.5",children:A["Dealer / Location"]||A.City||"Depot Workshop"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide",children:"Resolution Outcome"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[{id:"Fault Found & Rectified",label:"Fault Found & Rectified",icon:"🔧"},{id:"Working Satisfactory",label:"Working Satisfactory",icon:"✅"},{id:"Customer/Operator Error",label:"Customer/Op Error",icon:"ℹ️"}].map(K=>a.jsxs("button",{type:"button",onClick:()=>{y(K.id),C(`Verified telephonically with Electrician ${A["FSE Name"]||"technician"}. Outcome: ${K.id}. ${g} checked, vehicle road-tested satisfactory.`)},className:`p-2.5 rounded-lg border text-left text-xs font-bold transition-all cursor-pointer ${_===K.id?"border-purple-600 bg-purple-50 text-purple-900 ring-2 ring-purple-600/20":"border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`,children:[a.jsx("div",{className:"text-base mb-0.5",children:K.icon}),a.jsx("div",{children:K.label})]},K.id))})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide",children:["Action Taken / Suspected Part ",a.jsx("span",{className:"text-rose-500",children:"*"})]}),a.jsx("input",{type:"text",value:g,onChange:K=>f(K.target.value),placeholder:"e.g. Wiring Harness / 10A Fuse / Retarder Coil",className:"w-full h-9 px-3 rounded-lg border border-slate-300 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-purple-600 focus:outline-none"}),a.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Auto-suggested from the diagnostic step reached by the electrician. You can edit this."})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide",children:["Admin Telephonic Remarks ",a.jsx("span",{className:"text-rose-500",children:"*"})]}),a.jsx("textarea",{rows:3,value:S,onChange:K=>C(K.target.value),placeholder:"Enter summary of phone call with technician...",className:"w-full p-2.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-purple-600 focus:outline-none leading-relaxed"})]}),T&&a.jsx("div",{className:"p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold",children:T}),a.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-slate-200",children:[a.jsx(ht,{variant:"outline",size:"sm",onClick:()=>p(!1),disabled:M,className:"text-xs",children:"Cancel"}),a.jsx(ht,{variant:"default",size:"sm",onClick:Ne,disabled:M,className:"text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1.5 shadow-sm",children:M?a.jsx(a.Fragment,{children:"Saving Verification..."}):a.jsxs(a.Fragment,{children:[a.jsx(di,{className:"h-3.5 w-3.5"}),"Confirm & Close Case"]})})]})]})}),u&&a.jsx("div",{onClick:()=>m(null),className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs cursor-zoom-out",children:a.jsxs("div",{className:"relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden p-2 shadow-2xl",children:[a.jsx("img",{src:u.src,alt:u.alt,className:"max-h-[80vh] w-auto object-contain rounded-lg"}),a.jsx("div",{className:"p-2 text-center text-xs font-bold text-slate-700",children:u.alt})]})})]})},kl={"ASHOK LEYLAND":["12M BS-IV (Retarder)","Viking BS-IV (Retarder)","Other BS-IV Retarder Bus","12M BS-VI (Retarder)","Viking BS-VI (Retarder)","Other BS-VI Retarder Bus","13.5M BS-VI (Retarder)"],"TATA MOTORS":["TML - 1822","TML - 1622"],VECV:["VECV - 6016","VECV - 6019"]},cx=({users:n,onReloadUsers:e})=>{const[t,i]=oe.useState(""),[s,r]=oe.useState(!1),[o,l]=oe.useState(!1),[c,d]=oe.useState(null),[u,m]=oe.useState({email:"",password:"",role:"technician",technicianName:"",technicianPhone:"",dealerName:"",technicianType:"",vehicleManufacturer:"",vehicleModel:"",city:"",state:""}),[h,p]=oe.useState(null),_=oe.useMemo(()=>{const E=n.length,T=n.filter(w=>w.active).length,x=n.filter(w=>w.role==="technician").length;return{total:E,active:T,techs:x}},[n]),y=oe.useMemo(()=>{const E=t.toLowerCase().trim();return E?n.filter(T=>[T.email,T.technician_name,T.dealer_name,T.city,T.state,T.vehicle_manufacturer].filter(Boolean).join(" ").toLowerCase().includes(E)):n},[n,t]),g=E=>{const{name:T,value:x}=E.target;m(w=>{const F={...w,[T]:x};return T==="vehicleManufacturer"&&(F.vehicleModel=""),F})},f=async E=>{E.preventDefault(),d(null),l(!0);try{await Ot.createUser(u),r(!1),m({email:"",password:"",role:"technician",technicianName:"",technicianPhone:"",dealerName:"",technicianType:"",vehicleManufacturer:"",vehicleModel:"",city:"",state:""}),await e()}catch(T){d(T.message||"Failed to create user")}finally{l(!1)}},S=async E=>{try{await Ot.toggleUserActive(E.id,!E.active),await e()}catch(T){alert(T.message||"Failed to update user status")}},C=async E=>{if(window.confirm(`Permanently delete ${E.email}? Linked diagnostic reports will be preserved without account ownership.`))try{await Ot.deleteUser(E.id),await e()}catch(T){alert(T.message||"Failed to delete user")}},M=async E=>{try{const T=await Ot.getUserDetail(E.id);p(T)}catch(T){alert(T.message||"Failed to fetch user details")}};return a.jsxs(bt,{className:"mb-8",children:[a.jsxs(qt,{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Yt,{children:"Technician Administration"}),a.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500 font-medium",children:[a.jsxs("span",{className:"bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-700",children:[_.total," total"]}),a.jsxs("span",{className:"bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold",children:[_.active," active"]}),a.jsxs("span",{className:"bg-blue-50 text-[#0b5daa] px-2 py-0.5 rounded-full font-bold",children:[_.techs," technicians"]})]})]}),a.jsx($t,{className:"mt-1",children:"Manage named access, profiles, and authorized technician accounts."})]}),a.jsxs(ht,{variant:"primary",size:"sm",onClick:()=>r(!0),className:"text-xs font-semibold",children:[a.jsx(bu,{className:"h-3.5 w-3.5 mr-1.5"}),"Create Account"]})]}),a.jsxs(Kt,{className:"pt-4",children:[a.jsxs("div",{className:"relative mb-4",children:[a.jsx(Ql,{className:"absolute left-3 top-2.5 h-4 w-4 text-slate-400"}),a.jsx(Zt,{value:t,onChange:E=>i(E.target.value),placeholder:"Search accounts by email, technician name, dealer, city, or manufacturer...",className:"pl-9 h-9 text-xs"})]}),a.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200",children:a.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[a.jsx("thead",{className:"bg-slate-50/80 text-slate-700 font-semibold border-b border-slate-200",children:a.jsxs("tr",{children:[a.jsx("th",{className:"p-3",children:"Email"}),a.jsx("th",{className:"p-3",children:"Technician / Dealer"}),a.jsx("th",{className:"p-3",children:"OEM & Model"}),a.jsx("th",{className:"p-3",children:"Location"}),a.jsx("th",{className:"p-3",children:"Role"}),a.jsx("th",{className:"p-3",children:"Status"}),a.jsx("th",{className:"p-3",children:"Created"}),a.jsx("th",{className:"p-3 text-right",children:"Actions"})]})}),a.jsx("tbody",{className:"divide-y divide-slate-100 bg-white",children:y.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,className:"p-6 text-center text-slate-400",children:"No accounts found matching your search."})}):y.map(E=>a.jsxs("tr",{className:"hover:bg-slate-50/60 transition-colors",children:[a.jsx("td",{className:"p-3 font-semibold text-slate-900",children:E.email}),a.jsxs("td",{className:"p-3",children:[a.jsx("div",{className:"font-medium text-slate-800",children:E.technician_name||"—"}),a.jsx("div",{className:"text-[11px] text-slate-500",children:E.dealer_name||"—"})]}),a.jsxs("td",{className:"p-3",children:[a.jsx("div",{className:"font-semibold text-slate-700",children:E.vehicle_manufacturer||"—"}),a.jsx("div",{className:"text-[11px] text-slate-500",children:E.vehicle_model||"—"})]}),a.jsxs("td",{className:"p-3 text-slate-600",children:[a.jsx("div",{children:[E.city,E.state].filter(Boolean).join(", ")||"—"}),(E.gps_latitude||E.gpsLatitude)&&(E.gps_longitude||E.gpsLongitude)&&a.jsxs("a",{href:`https://www.google.com/maps?q=${E.gps_latitude||E.gpsLatitude},${E.gps_longitude||E.gpsLongitude}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[10px] text-[#0b5daa] hover:underline font-mono mt-0.5",title:"View GPS on Google Maps",children:[a.jsx(tr,{className:"h-2.5 w-2.5 shrink-0"}),a.jsxs("span",{children:[Number(E.gps_latitude||E.gpsLatitude).toFixed(4),","," ",Number(E.gps_longitude||E.gpsLongitude).toFixed(4)]})]})]}),a.jsx("td",{className:"p-3",children:a.jsx(ss,{variant:E.role==="admin"?"default":"secondary",children:E.role})}),a.jsx("td",{className:"p-3",children:a.jsxs("button",{onClick:()=>S(E),className:`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold transition-colors ${E.active?"bg-emerald-100 text-emerald-800 hover:bg-emerald-200":"bg-rose-100 text-rose-800 hover:bg-rose-200"}`,title:"Click to toggle account status",children:[a.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${E.active?"bg-emerald-600":"bg-rose-600"}`}),E.active?"Active":"Disabled"]})}),a.jsx("td",{className:"p-3 text-slate-500 whitespace-nowrap",children:new Date(E.created_at).toLocaleDateString()}),a.jsx("td",{className:"p-3 text-right",children:a.jsxs("div",{className:"inline-flex items-center gap-1",children:[a.jsx(ht,{variant:"ghost",size:"icon",onClick:()=>M(E),title:"View Technician Activity",className:"h-7 w-7 text-slate-500 hover:text-[#0b5daa]",children:a.jsx(au,{className:"h-3.5 w-3.5"})}),a.jsx(ht,{variant:"ghost",size:"icon",onClick:()=>C(E),title:"Delete Account",className:"h-7 w-7 text-slate-500 hover:text-rose-600",children:a.jsx(tc,{className:"h-3.5 w-3.5"})})]})})]},E.id))})]})}),a.jsxs(dr,{isOpen:s,onClose:()=>r(!1),title:"Create Technician Account",description:"Provision a named account for a field technician or dealer workshop.",maxWidth:"lg",children:[c&&a.jsx("div",{className:"mb-4 rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700",children:c}),a.jsxs("form",{onSubmit:f,className:"space-y-3.5 text-xs",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsxs("label",{className:"block font-semibold text-slate-700 mb-1",children:["Email ",a.jsx("span",{className:"text-rose-500",children:"*"})]}),a.jsx(Zt,{name:"email",type:"email",required:!0,value:u.email,onChange:g,placeholder:"tech@dealer.com",className:"h-8 text-xs"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block font-semibold text-slate-700 mb-1",children:["Temporary Password ",a.jsx("span",{className:"text-rose-500",children:"*"})]}),a.jsx(Zt,{name:"password",type:"password",required:!0,minLength:10,value:u.password,onChange:g,placeholder:"Min 10 characters",className:"h-8 text-xs"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Technician Name"}),a.jsx(Zt,{name:"technicianName",value:u.technicianName,onChange:g,placeholder:"Full Name",className:"h-8 text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Mobile Number"}),a.jsx(Zt,{name:"technicianPhone",value:u.technicianPhone,onChange:g,placeholder:"+91 98765 43210",className:"h-8 text-xs"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Dealer / Workshop"}),a.jsx(Zt,{name:"dealerName",value:u.dealerName,onChange:g,placeholder:"Authorized Service Center",className:"h-8 text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Technician Type"}),a.jsxs(xn,{name:"technicianType",value:u.technicianType,onChange:g,className:"h-8 text-xs",children:[a.jsx("option",{value:"",children:"Select type"}),a.jsx("option",{value:"Authorized Dealer",children:"Authorized Dealer"}),a.jsx("option",{value:"Fleet Workshop",children:"Fleet Workshop"}),a.jsx("option",{value:"Roadside Assistance",children:"Roadside Assistance"})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Vehicle OEM"}),a.jsxs(xn,{name:"vehicleManufacturer",value:u.vehicleManufacturer,onChange:g,className:"h-8 text-xs",children:[a.jsx("option",{value:"",children:"Select manufacturer"}),a.jsx("option",{value:"ASHOK LEYLAND",children:"ASHOK LEYLAND"}),a.jsx("option",{value:"TATA MOTORS",children:"TATA MOTORS"}),a.jsx("option",{value:"VECV",children:"VECV"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"Assigned Model"}),u.vehicleManufacturer&&kl[u.vehicleManufacturer]?a.jsxs(xn,{name:"vehicleModel",value:u.vehicleModel,onChange:g,className:"h-8 text-xs",children:[a.jsx("option",{value:"",children:"Select model"}),kl[u.vehicleManufacturer].map(E=>a.jsx("option",{value:E,children:E},E))]}):a.jsx(Zt,{name:"vehicleModel",value:u.vehicleModel,onChange:g,placeholder:"Exact model",className:"h-8 text-xs"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"City"}),a.jsx(Zt,{name:"city",value:u.city,onChange:g,placeholder:"Chennai, Pune, etc.",className:"h-8 text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-slate-700 mb-1",children:"State"}),a.jsx(Zt,{name:"state",value:u.state,onChange:g,placeholder:"Tamil Nadu, Maharashtra...",className:"h-8 text-xs"})]})]}),a.jsxs("div",{className:"flex justify-end gap-2 pt-4 border-t border-slate-100",children:[a.jsx(ht,{type:"button",variant:"outline",size:"sm",onClick:()=>r(!1),children:"Cancel"}),a.jsx(ht,{type:"submit",size:"sm",disabled:o,children:o?"Creating...":"Create Account"})]})]})]}),h&&a.jsx(dr,{isOpen:!0,onClose:()=>p(null),title:`Technician Profile: ${h.user.technician_name||h.user.email}`,description:h.user.email,maxWidth:"md",children:a.jsxs("div",{className:"space-y-4 text-xs",children:[a.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Role"}),a.jsx("div",{className:"font-semibold",children:h.user.role})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Dealer"}),a.jsx("div",{className:"font-semibold",children:h.user.dealer_name||"—"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"OEM Assignment"}),a.jsx("div",{className:"font-semibold",children:h.user.vehicle_manufacturer||"—"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Assigned Model"}),a.jsx("div",{className:"font-semibold",children:h.user.vehicle_model||"—"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Phone"}),a.jsx("div",{className:"font-semibold",children:h.user.technician_phone||h.user.phone||"—"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Registered"}),a.jsx("div",{className:"font-semibold",children:new Date(h.user.created_at).toLocaleDateString()})]}),(h.user.gps_latitude||h.user.gpsLatitude)&&a.jsxs("div",{className:"col-span-2 pt-1 border-t border-slate-200",children:[a.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"Recorded GPS Location"}),a.jsxs("div",{className:"flex items-center justify-between mt-0.5",children:[a.jsxs("span",{className:"font-mono text-slate-700",children:[Number(h.user.gps_latitude||h.user.gpsLatitude).toFixed(4),","," ",Number(h.user.gps_longitude||h.user.gpsLongitude).toFixed(4)]}),a.jsxs("a",{href:`https://www.google.com/maps?q=${h.user.gps_latitude||h.user.gpsLatitude},${h.user.gps_longitude||h.user.gpsLongitude}`,target:"_blank",rel:"noopener noreferrer",className:"text-[#0b5daa] hover:underline font-semibold flex items-center gap-1",children:[a.jsx(tr,{className:"h-3 w-3"}),"Open Google Maps →"]})]})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-slate-800 mb-2",children:"Recent Account Activity"}),a.jsx("div",{className:"space-y-1.5 max-h-48 overflow-y-auto",children:h.activity&&h.activity.length>0?h.activity.slice(0,10).map((E,T)=>a.jsxs("div",{className:"flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 text-[11px]",children:[a.jsx("span",{className:"font-medium text-slate-700",children:E.action}),a.jsx("span",{className:"text-slate-400",children:new Date(E.created_at).toLocaleString()})]},T)):a.jsx("p",{className:"text-slate-400 italic",children:"No recent activity recorded."})})]})]})})]})]})},dx=()=>{const[n,e]=oe.useState(!!er()),[t,i]=oe.useState(!1),[s,r]=oe.useState(!1),[o,l]=oe.useState(!1),[c,d]=oe.useState(null),[u,m]=oe.useState([]),[h,p]=oe.useState([]),[_,y]=oe.useState([]),[g,f]=oe.useState({page:1,pageSize:10,total:0,totalPages:1}),[S,C]=oe.useState({}),[M,E]=oe.useState(""),[T,x]=oe.useState(""),[w,F]=oe.useState("day"),[A,L]=oe.useState(null),[U,V]=oe.useState(!1),N=oe.useCallback(async(j=1,ue=S)=>{i(!0);try{const W=await Ot.getCases({page:j,pageSize:g.pageSize,...ue});m(W.cases||[]),f({page:W.page,pageSize:W.pageSize,total:W.total,totalPages:W.totalPages})}catch(W){console.error("Failed to load cases:",W)}finally{i(!1)}},[S,g.pageSize]),O=oe.useCallback(async()=>{try{const[j,ue]=await Promise.all([Ot.getSummary(w,M,T),Ot.getAllCasesForAnalytics()]);d(j.summary),p(ue)}catch(j){console.error("Failed to load analytics:",j)}},[w,M,T]),Z=oe.useCallback(async()=>{try{const j=await Ot.getUsers();y(j.users||[])}catch(j){console.error("Failed to load users:",j)}},[]),H=async()=>{r(!0),await Promise.all([N(g.page),O(),Z()]),r(!1)};oe.useEffect(()=>{if(!n)return;H();const j=Ot.connectEvents(()=>{l(!0),N(g.page),O()});return l(!0),()=>{j(),l(!1)}},[n]);const se=async()=>{await Ot.logout(),e(!1)},k=j=>{C(j),N(1,j)},ne=j=>{N(j)},ie=async j=>{try{const ue=await Ot.getCaseDetail(j);L(ue),V(!0)}catch(ue){console.error("Failed to view case:",ue)}},Me=async j=>{await Ot.deleteCases(j),await H()},Ne=()=>{if(h.length===0){alert("No records available to export.");return}const j=["Diagnostic Case ID","Diagnostic Status","Diagnostic Language Name","Admin Report Language","FSE Name","Technician Phone","Vehicle Manufacturer","Model","Travels Name","Vehicle Registration No.","Chassis No.","Odometer Km","Kms & Date of Sale","Dealer / Location","City","State","Region","Suspected Product","Recommended Part No.","Complaint Attended on","Diagnostic Feedback"],ue=We=>`"${String(We??"").replace(/"/g,'""')}"`,W=[j.join(","),...h.map(We=>{const Ae=We.payload||{};return j.map(Be=>{const Fe=Ae[Be]??(Be==="Diagnostic Case ID"?We.case_number||We.id:"");return ue(Be==="Diagnostic Feedback"&&typeof Fe=="object"&&Fe!==null?Fe.clarity||"":Fe)}).join(",")})],K=new Blob([W.join(`\r
`)],{type:"text/csv;charset=utf-8;"}),ae=URL.createObjectURL(K),ye=document.createElement("a");ye.href=ae,ye.setAttribute("download",`RetarderIQ_Diagnostics_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(ye),ye.click(),document.body.removeChild(ye),URL.revokeObjectURL(ae)};return n?a.jsx("div",{className:"min-h-screen bg-slate-50 text-slate-900 pb-12",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:[a.jsx(Eu,{onRefresh:H,onExportCsv:Ne,onLogout:se,refreshing:s,sseConnected:o,dateFrom:M,setDateFrom:E,dateTo:T,setDateTo:x,granularity:w,setGranularity:F,onApplyDateFilter:O}),a.jsx(Ru,{summary:c,cases:h.length>0?h:u,onFilterIncomplete:()=>{k({...S,status:"INCOMPLETE"})}}),a.jsx(Pu,{cases:h}),a.jsx(sx,{cases:h,users:_,onSelectPlace:j=>{k({...S,search:j})}}),a.jsx(rx,{cases:u,pagination:g,loading:t,onPageChange:ne,onFilterChange:k,onViewCase:ie,onDeleteCases:Me,statusFilterValue:S.status||""}),a.jsx(cx,{users:_,onReloadUsers:Z}),a.jsx(lx,{caseItem:A,isOpen:U,onClose:()=>V(!1),onCaseUpdated:H})]})}):a.jsx(yu,{onLoginSuccess:()=>e(!0)})},zl=document.getElementById("root");zl&&fd.createRoot(zl).render(a.jsx(Gl.StrictMode,{children:a.jsx(dx,{})}));
