(()=>{var O={80859:(e,r,t)=>{"use strict";var p=t(90758),o=t(41253),a=t(16514),m=t(13791),b=t(17417),v=t(92897),y=t(44668),j=t(20865),P=t(88499);function R(w){const c=w.slice().sort((d,i)=>(0,y.compare)(d.startTime,i.startTime));let l={sec:-1/0,nsec:0},u=0;return c.forEach(({startTime:d,endTime:i})=>{(0,y.isLessThan)(d,l)&&(u+=1),(0,y.isGreaterThan)(i,l)&&(l=i)}),u}var _=t(94789),x=t(3400),E=t.n(x);class z{#t;#e;#s=new Map;#r=new Map;constructor(c){this.#t=c}async initialize(){await E().isLoaded;const c=await _.default.init();let l;if(this.#t.type==="remote"){const f=this.#t.url,n=new j.Z(f),g=new P.Z({fileReader:n,cacheSizeInBytes:1024*1024*200,keepReconnectingCallback:T=>{}});await g.open(),l=g}else l=new m.BlobReader(this.#t.file);this.#e=new a.N(l,{parse:!1,decompress:{bz2:(f,n)=>c.decompress(f,n,{small:!1}),lz4:(f,n)=>E()(f,n)}}),await this.#e.open();const u=[],d=R(this.#e.chunkInfos);if(d>this.#e.chunkInfos.length*.25){const f=`This bag has many overlapping chunks (${d} out of ${this.#e.chunkInfos.length}). This results in more memory use during playback.`,n="Re-sort the messages in your bag by receive time.";u.push({severity:"warn",message:f,tip:n})}const i=new Array(this.#e.connections.size).fill(0);this.#e.chunkInfos.forEach(f=>{f.connections.forEach(({conn:n,count:g})=>{i[n]+=g})});const h=new Map,k=new Map,M=new Map,C=new Map;for(const[f,n]of this.#e.connections){const g=n.type;if(!g)continue;let T=C.get(n.topic);T||(T=new Set,C.set(n.topic,T)),T.add(n.callerid??String(n.conn));const I=k.get(n.topic);I&&I.schemaName!==g&&u.push({severity:"warn",message:`Conflicting datatypes on topic (${n.topic}): ${g}, ${I.schemaName}`,tip:`Studio requires all connections on a topic to have the same datatype. Make sure all your nodes are publishing the same message on ${n.topic}.`}),I||k.set(n.topic,{name:n.topic,schemaName:g});const A=(M.get(n.topic)?.numMessages??0)+(i[n.conn]??0);M.set(n.topic,{numMessages:A});const $=(0,b.parse)(n.messageDefinition),N=new v.MessageReader($);this.#s.set(f,N),this.#r.set(f,g);for(const S of $)S.name?h.set(S.name,S):h.set(g,S)}return{topics:Array.from(k.values()),topicStats:M,start:this.#e.startTime??{sec:0,nsec:0},end:this.#e.endTime??{sec:0,nsec:0},problems:u,profile:"ros1",datatypes:h,publishersByTopic:C}}async*messageIterator(c){yield*this.#n({...c,reverse:!1})}async*#n(c){if(!this.#e)throw new Error("Invariant: uninitialized");const l=c.end,u=this.#e.messageIterator({topics:Array.from(c.topics.keys()),reverse:c.reverse,start:c.start}),d=this.#s;for await(const i of u){const h=i.connectionId,k=d.get(h);if(l&&(0,y.compare)(i.timestamp,l)>0)return;const M=this.#r.get(h);if(!M){yield{type:"problem",connectionId:h,problem:{severity:"error",message:`Cannot missing datatype for connection id ${h}`,tip:"Check that your bag file is well-formed. It should have a connection record for every connection id referenced from a message record."}};return}if(k){const C=i.data.slice(),f=k.readMessage(C);yield{type:"message-event",connectionId:h,msgEvent:{topic:i.topic,receiveTime:i.timestamp,sizeInBytes:i.data.byteLength,message:f,schemaName:M}}}else yield{type:"problem",connectionId:h,problem:{severity:"error",message:`Cannot deserialize message for missing connection id ${h}`,tip:"Check that your bag file is well-formed. It should have a connection record for every connection id referenced from a message record."}}}}async getBackfillMessages({topics:c,time:l}){const u=[];for(const d of c.entries())for await(const i of this.#n({topics:new Map([d]),start:l,reverse:!0})){i.type==="message-event"&&u.push(i.msgEvent);break}return u.sort((d,i)=>(0,y.compare)(d.receiveTime,i.receiveTime)),u}}function L(w){if(w.file){const c=new z({type:"file",file:w.file}),l=new o.a(c);return p.sj(l)}else if(w.url){const c=new z({type:"remote",url:w.url}),l=new o.a(c);return p.sj(l)}throw new Error("file or url required")}p.Jj(L)},63136:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});const o={nextTick:(a,...m)=>{queueMicrotask(()=>{a(...m)})},title:"browser",browser:!0,env:{},argv:[]}},62891:()=>{},16471:()=>{}},B={};function s(e){var r=B[e];if(r!==void 0)return r.exports;var t=B[e]={exports:{}};return O[e].call(t.exports,t,t.exports,s),t.exports}s.m=O,s.x=()=>{var e=s.O(void 0,[5485,7979,8540,7372,2984,8160,4812],()=>s(80859));return e=s.O(e),e},(()=>{var e=[];s.O=(r,t,p,o)=>{if(t){o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[t,p,o];return}for(var m=1/0,a=0;a<e.length;a++){for(var[t,p,o]=e[a],b=!0,v=0;v<t.length;v++)(o&!1||m>=o)&&Object.keys(s.O).every(x=>s.O[x](t[v]))?t.splice(v--,1):(b=!1,o<m&&(m=o));if(b){e.splice(a--,1);var y=p();y!==void 0&&(r=y)}}return r}})(),s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce((r,t)=>(s.f[t](e,r),r),[])),s.u=e=>""+e+"."+{2984:"4584deb5c4e7b7650b12",4812:"8c3e50ef10f71e965dbd",5485:"5593f3f67e26e0601d78",7372:"57aece328a81cb11d24f",7979:"5cc8f1665b0d9ca77f55",8160:"12f1d306edf96ea75010",8540:"dd9a045242f404e72468"}[e]+".js",s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var r=s.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var p=t.length-1;p>-1&&!e;)e=t[p--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={6548:1,4334:1},r=o=>{var[a,m,b]=o;for(var v in m)s.o(m,v)&&(s.m[v]=m[v]);for(b&&b(s);a.length;)e[a.pop()]=1;p(o)};s.f.i=(o,a)=>{e[o]||importScripts(s.p+s.u(o))};var t=self.webpackChunk=self.webpackChunk||[],p=t.push.bind(t);t.push=r})(),(()=>{var e=s.x;s.x=()=>Promise.all([5485,7979,8540,7372,2984,8160,4812].map(s.e,s)).then(e)})();var F=s.x()})();

//# sourceMappingURL=6548.bbc7a2b3e36058d75b7a.js.map