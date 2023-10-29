(()=>{"use strict";var L={21023:(_,E,b)=>{var y=b(63136).Z;function T(h){if(typeof h!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(h))}function R(h,e){for(var r="",t=0,s=-1,c=0,n,a=0;a<=h.length;++a){if(a<h.length)n=h.charCodeAt(a);else{if(n===47)break;n=47}if(n===47){if(!(s===a-1||c===1))if(s!==a-1&&c===2){if(r.length<2||t!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",t=0):(r=r.slice(0,l),t=r.length-1-r.lastIndexOf("/")),s=a,c=0;continue}}else if(r.length===2||r.length===1){r="",t=0,s=a,c=0;continue}}e&&(r.length>0?r+="/..":r="..",t=2)}else r.length>0?r+="/"+h.slice(s+1,a):r=h.slice(s+1,a),t=a-s-1;s=a,c=0}else n===46&&c!==-1?++c:c=-1}return r}function O(h,e){var r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+t:r+h+t:t}var S={resolve:function(){for(var e="",r=!1,t,s=arguments.length-1;s>=-1&&!r;s--){var c;s>=0?c=arguments[s]:(t===void 0&&(t=y.cwd()),c=t),T(c),c.length!==0&&(e=c+"/"+e,r=c.charCodeAt(0)===47)}return e=R(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(T(e),e.length===0)return".";var r=e.charCodeAt(0)===47,t=e.charCodeAt(e.length-1)===47;return e=R(e,!r),e.length===0&&!r&&(e="."),e.length>0&&t&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return T(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var t=arguments[r];T(t),t.length>0&&(e===void 0?e=t:e+="/"+t)}return e===void 0?".":S.normalize(e)},relative:function(e,r){if(T(e),T(r),e===r||(e=S.resolve(e),r=S.resolve(r),e===r))return"";for(var t=1;t<e.length&&e.charCodeAt(t)===47;++t);for(var s=e.length,c=s-t,n=1;n<r.length&&r.charCodeAt(n)===47;++n);for(var a=r.length,l=a-n,w=c<l?c:l,N=-1,d=0;d<=w;++d){if(d===w){if(l>w){if(r.charCodeAt(n+d)===47)return r.slice(n+d+1);if(d===0)return r.slice(n+d)}else c>w&&(e.charCodeAt(t+d)===47?N=d:d===0&&(N=0));break}var P=e.charCodeAt(t+d),U=r.charCodeAt(n+d);if(P!==U)break;P===47&&(N=d)}var A="";for(d=t+N+1;d<=s;++d)(d===s||e.charCodeAt(d)===47)&&(A.length===0?A+="..":A+="/..");return A.length>0?A+r.slice(n+N):(n+=N,r.charCodeAt(n)===47&&++n,r.slice(n))},_makeLong:function(e){return e},dirname:function(e){if(T(e),e.length===0)return".";for(var r=e.charCodeAt(0),t=r===47,s=-1,c=!0,n=e.length-1;n>=1;--n)if(r=e.charCodeAt(n),r===47){if(!c){s=n;break}}else c=!1;return s===-1?t?"/":".":t&&s===1?"//":e.slice(0,s)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');T(e);var t=0,s=-1,c=!0,n;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var w=e.charCodeAt(n);if(w===47){if(!c){t=n+1;break}}else l===-1&&(c=!1,l=n+1),a>=0&&(w===r.charCodeAt(a)?--a===-1&&(s=n):(a=-1,s=l))}return t===s?s=l:s===-1&&(s=e.length),e.slice(t,s)}else{for(n=e.length-1;n>=0;--n)if(e.charCodeAt(n)===47){if(!c){t=n+1;break}}else s===-1&&(c=!1,s=n+1);return s===-1?"":e.slice(t,s)}},extname:function(e){T(e);for(var r=-1,t=0,s=-1,c=!0,n=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(l===47){if(!c){t=a+1;break}continue}s===-1&&(c=!1,s=a+1),l===46?r===-1?r=a:n!==1&&(n=1):r!==-1&&(n=-1)}return r===-1||s===-1||n===0||n===1&&r===s-1&&r===t+1?"":e.slice(r,s)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return O("/",e)},parse:function(e){T(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var t=e.charCodeAt(0),s=t===47,c;s?(r.root="/",c=1):c=0;for(var n=-1,a=0,l=-1,w=!0,N=e.length-1,d=0;N>=c;--N){if(t=e.charCodeAt(N),t===47){if(!w){a=N+1;break}continue}l===-1&&(w=!1,l=N+1),t===46?n===-1?n=N:d!==1&&(d=1):n!==-1&&(d=-1)}return n===-1||l===-1||d===0||d===1&&n===l-1&&n===a+1?l!==-1&&(a===0&&s?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(a,l)):(a===0&&s?(r.name=e.slice(1,n),r.base=e.slice(1,l)):(r.name=e.slice(a,n),r.base=e.slice(a,l)),r.ext=e.slice(n,l)),a>0?r.dir=e.slice(0,a-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};S.posix=S,_.exports=S},63136:(_,E,b)=>{b.d(E,{Z:()=>T});const T={nextTick:(R,...O)=>{queueMicrotask(()=>{R(...O)})},title:"browser",browser:!0,env:{},argv:[]}}},M={};function m(_){var E=M[_];if(E!==void 0)return E.exports;var b=M[_]={exports:{}};return L[_](b,b.exports,m),b.exports}m.n=_=>{var E=_&&_.__esModule?()=>_.default:()=>_;return m.d(E,{a:E}),E},m.d=(_,E)=>{for(var b in E)m.o(E,b)&&!m.o(_,b)&&Object.defineProperty(_,b,{enumerable:!0,get:E[b]})},m.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),m.o=(_,E)=>Object.prototype.hasOwnProperty.call(_,E);var Y={};(()=>{var _=m(21023),E=m.n(_);const b={Hint:1,Info:2,Warning:4,Error:8},y={Typescript:"Typescript",DatatypeExtraction:"DatatypeExtraction",InputTopicsChecker:"InputTopicsChecker",OutputTopicChecker:"OutputTopicChecker",Runtime:"Runtime"},T={RUNTIME:1,DatatypeExtraction:{NO_DEFAULT_EXPORT:1,NON_FUNC_DEFAULT_EXPORT:2,NO_TYPE_RETURN:3,BAD_TYPE_RETURN:4,UNKNOWN_ERROR:5,NO_UNIONS:6,NO_FUNCTIONS:7,NO_CLASSES:8,NO_TYPE_LITERALS:9,NO_TUPLES:10,NO_INTERSECTION_TYPES:11,NO_TYPEOF:12,PREFER_ARRAY_LITERALS:13,STRICT_MARKERS_RETURN_TYPE:14,LIMITED_UNIONS:15,NO_NESTED_ANY:16,NO_MAPPED_TYPES:17,INVALID_PROPERTY:18,INVALID_INDEXED_ACCESS:19},InputTopicsChecker:{NO_TOPIC_AVAIL:1,NO_INPUTS_EXPORT:2,EMPTY_INPUTS_EXPORT:3,BAD_INPUTS_TYPE:4},OutputTopicChecker:{NO_OUTPUTS:1,NOT_UNIQUE:2,EXISTING_TOPIC:3}},R="/studio_script/";function O(){const{palette:{mode:f,text:o}}=useTheme();return{dark:{base00:"transparent",base0B:"#ffa657",base09:"#7ee787",base07:"#79c0ff",base08:"#ff7b72",base0D:"#79c0ff",base03:o.secondary},light:{base00:"transparent",base0B:"#953800",base09:"#116329",base07:"#0550ae",base08:"#cf222e",base0D:"#0550ae",base03:o.secondary}}[f]}const S="Tab";let h;const e=f=>{for(const o of f){if(typeof o=="function")return!0;if(typeof o=="object"&&o!=null){for(const i of Object.values(o))if(e([i]))return!0}}return!1},r=f=>{if(typeof f=="function")return`${f}`;if(typeof f=="object"&&f!=null){const o={...f};for(const[i,v]of Object.entries(f))o[i]=r(v);return o}return f},t=f=>f.map(r).map(o=>typeof o=="object"?JSON.stringify(o):o),s=(f,o)=>{const i=`${E().join(R,f)}.js`;for(const[v,g]of o.entries())if(i.endsWith(v)){const u={},p=k=>s(k,o);return new Function("exports","require",g)(u,p),u}throw new Error(`User node required unknown module: '${f}'`)},c=({nodeCode:f,projectCode:o})=>{const i=[],v=[];self.log=function(...g){if(e(g)){const u=t(g);throw new Error(`Cannot invoke log() with a function argument (registerNode) - log(${u.join(", ")})`)}i.push(...g.map(u=>({source:"registerNode",value:u})))};try{const g={},u=p=>s(p,o);return new Function("exports","require",f)(g,u),h=g.default,{error:void 0,userNodeLogs:i,userNodeDiagnostics:v}}catch(g){const u=g.toString();return{error:u.length>0?u:"Unknown error encountered registering this node.",userNodeLogs:i,userNodeDiagnostics:v}}},n=({message:f,globalVariables:o})=>{const i=[],v=[];self.log=function(...g){if(e(g)){const u=t(g);throw new Error(`Cannot invoke log() with a function argument (processMessage) - log(${u.join(", ")})`)}i.push(...g.map(u=>({source:"processMessage",value:u})))};try{return{message:h(f,o),error:void 0,userNodeLogs:i,userNodeDiagnostics:v}}catch(g){const u=g.toString(),p={source:y.Runtime,severity:b.Error,message:u.length>0?u:"Unknown error encountered running this node.",code:T.RUNTIME};return{message:void 0,error:void 0,userNodeLogs:i,userNodeDiagnostics:[p]}}};var a;const l="$$RESPONSE",w="$$ERROR";function N(){const f={onmessage:void 0,postMessage(i,v){const g=new MessageEvent("message",{data:i});o.onmessage&&o.onmessage(g)},terminate:()=>{}},o={onmessage:void 0,postMessage(i,v){const g=new MessageEvent("message",{data:i});f.onmessage&&f.onmessage(g)},terminate:()=>{}};return{local:f,remote:o}}class d{static transferables="$$TRANSFERABLES";#e;#t=0;#r={};#n=new Map;constructor(o){if(this.#e=o,this.#e.onmessage)throw new Error("channel.onmessage is already set. Can only use one Rpc instance per channel.");this.#e.onmessage=this.#s}#s=o=>{const{id:i,topic:v,data:g}=o.data;if(v===l){this.#r[i]?.(o.data),delete this.#r[i];return}new Promise(u=>{const p=this.#n.get(v);if(!p)throw new Error(`no receiver registered for ${v}`);u(p(g))}).then(u=>{if(!u){this.#e.postMessage({topic:l,id:i});return}const p=u[a.transferables];delete u[a.transferables];const k={topic:l,id:i,data:u};this.#e.postMessage(k,p)}).catch(u=>{const p={topic:l,id:i,data:{[w]:!0,name:u.name,message:u.message,stack:u.stack}};this.#e.postMessage(p)})};terminate(){for(const[o,i]of Object.entries(this.#r))i({topic:l,id:o,data:{[w]:!0,name:"Error",message:"Rpc terminated",stack:new Error().stack}})}async send(o,i,v){const g=this.#t++,u={topic:o,id:g,data:i},p=new Promise((k,j)=>{this.#r[g]=C=>{if(C.data?.[w]!=null){const D=new Error(C.data.message);D.name=C.data.name,D.stack=C.data.stack,j(D)}else k(C.data)}});return this.#e.postMessage(u,v),await p}receive(o,i){if(this.#n.has(o))throw new Error(`Receiver already registered for topic: ${o}`);this.#n.set(o,i)}}a=d;const P=d,U=()=>typeof m.g.postMessage<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,A=()=>typeof SharedWorkerGlobalScope<"u"&&self instanceof SharedWorkerGlobalScope,F=f=>{const o=typeof fetch<"u"&&fetch("data:test").then(()=>!0).catch(()=>!1);return async(...i)=>{if(await o)throw new Error("Content security policy too loose.");return f(...i)}};let I=[];if(m.g.onerror=f=>{I.push(f.error.toString())},m.g.onunhandledrejection=f=>{I.push(String(f.reason instanceof Error?f.reason.message:f.reason))},!A())throw new Error("Not in a SharedWorker.");m.g.onconnect=f=>{const o=f.ports[0],i=new P(o);I.forEach(async v=>{await i.send("error",v)}),I=[],m.g.onerror=v=>{i.send("error",v.error.toString())},m.g.onunhandledrejection=v=>{i.send("error",String(v.reason instanceof Error?v.reason.message:v.reason))},i.receive("registerNode",F(c)),i.receive("processMessage",n),o.start()}})()})();

//# sourceMappingURL=492.4f3e885d9fdf60f10ae8.js.map