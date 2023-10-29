(()=>{"use strict";var A={42042:(t,c,s)=>{var h=s(90758);const g={canHandle:a=>a instanceof AbortSignal,deserialize:([a,e])=>{const r=new AbortController;return a?r.abort():e.onmessage=()=>{r.abort()},r.signal},serialize:a=>{const{port1:e,port2:r}=new MessageChannel;return a.addEventListener("abort",()=>{e.postMessage("aborted")}),[[a.aborted,r],[r]]}};var i=s(44668);const w=Object.freeze({sec:0,nsec:0});class b{#t;#e;#s;constructor(e,r){this.#t=e,this.#s=r}async next(){return this.#s?.aborted===!0?void 0:(await this.#t.next()).value}async nextBatch(e){const r=await this.next();if(!r)return;if(r.type==="problem")return[r];const o=[r];let l=w;switch(r.type){case"stamp":l=(0,i.add)(r.stamp,{sec:0,nsec:e*1e6});break;case"message-event":l=(0,i.add)(r.msgEvent.receiveTime,{sec:0,nsec:e*1e6});break}for(;;){const u=await this.next();if(!u)return o;if(o.push(u),u.type==="problem"||u.type==="stamp"&&(0,i.compare)(u.stamp,l)>0||u.type==="message-event"&&(0,i.compare)(u.msgEvent.receiveTime,l)>0)break}return o}async readUntil(e){if(this.#s?.aborted===!0)return;const o=[];if(this.#e?.type==="stamp"&&(0,i.compare)(this.#e.stamp,e)>=0||this.#e?.type==="message-event"&&(0,i.compare)(this.#e.msgEvent.receiveTime,e)>0)return o;for(this.#e&&(o.push(this.#e),this.#e=void 0);;){const l=await this.#t.next();if(this.#s?.aborted===!0)return;if(l.done===!0)break;const u=l.value;if(u.type==="stamp"&&(0,i.compare)(u.stamp,e)>=0){this.#e=u;break}if(u.type==="message-event"&&(0,i.compare)(u.msgEvent.receiveTime,e)>0){this.#e=u;break}o.push(u)}return o}async end(){await this.#t.return?.()}}class x{_source;constructor(e){this._source=e}async initialize(){return await this._source.initialize()}messageIterator(e){return h.sj(this._source.messageIterator(e))}async getBackfillMessages(e,r){return await this._source.getBackfillMessages({...e,abortSignal:r})}getMessageCursor(e,r){const o=this._source.messageIterator(e),l=new b(o,r);return h.sj(l)}}h.Y6.set("abortsignal",g);const I=new Map,p=()=>{};class S{static default=new S("");#t;constructor(e){this.#t=e,this.setLevel("debug"),I.set(e,this)}name(){return this.#t}isLevelOn(e){switch(e){case"debug":return this.debug!==p;case"info":return this.info!==p;case"warn":return this.warn!==p;case"error":return this.error!==p}return!1}getLevel(){return this.debug!==p?"debug":this.info!==p?"info":this.warn!==p?"warn":"error"}setLevel(e){switch(this.debug=p,this.info=p,this.warn=p,this.error=p,e){case"debug":this.debug=console.debug.bind(s.g.console),this.info=console.info.bind(s.g.console),this.warn=console.warn.bind(s.g.console),this.error=console.error.bind(s.g.console);break;case"info":this.info=console.info.bind(s.g.console),this.warn=console.warn.bind(s.g.console),this.error=console.error.bind(s.g.console);break;case"warn":this.warn=console.warn.bind(s.g.console),this.error=console.error.bind(s.g.console);break;case"error":this.error=console.error.bind(s.g.console);break}}debug(...e){}info(...e){}warn(...e){}error(...e){}getLogger(e){const r=e.replace(/^.+\.(asar|webpack)[\\/\\]/,"").replace(/^(\.\.\/)+/,""),o=this.#t.length>0?`${this.#t}.${r}`:r,l=I.get(o);if(l)return l;const u=new S(o);return I.set(o,u),u}channels(){return Array.from(I.values())}}function ee(a){switch(a){case"debug":return"debug";case"info":return"info";case"warn":return"warn";case"error":return"error";default:return"warn"}}const B=S.default;var $=s(38215),d=s(24234),F=s(32909);function H(a,e){return e.subscriptions.get(a)?.name}function W(a){const e=[];for(const r of a.fields){const o=r.type==="char";e.push({name:r.name,type:Z(r.type),isArray:r.arrayLength!=null&&!o,arrayLength:o?void 0:r.arrayLength,upperBound:o?r.arrayLength??1:void 0,isComplex:r.isComplex})}return{name:a.name,definitions:e}}function G(a){switch(a){case d.LogLevel.Emerg:case d.LogLevel.Alert:case d.LogLevel.Crit:return 16;case d.LogLevel.Err:return 8;case d.LogLevel.Warning:return 4;case d.LogLevel.Notice:case d.LogLevel.Info:return 2;case d.LogLevel.Debug:default:return 1}}function Z(a){switch(a){case"int8_t":return"int8";case"uint8_t":return"uint8";case"int16_t":return"int16";case"uint16_t":return"uint16";case"int32_t":return"int32";case"uint32_t":return"uint32";case"int64_t":return"int64";case"uint64_t":return"uint64";case"float":return"float32";case"double":return"float64";case"bool":return"bool";case"char":return"string";default:return a}}var J="../../packages/studio-base/src/players/IterablePlayer/ulog/UlogIterableSource.ts";const K=1024*1024,E="Log",N=B.getLogger(J);class Y{#t;#e;#s;#r;constructor(e){this.#t=e}async initialize(){const e=this.#t.file,r=this.#t.file.size;N.debug(`initialize(${r} bytes)`);const o=performance.now();this.#e=new d.ULog(new F.BlobReader(e),{chunkSize:K}),await this.#e.open();const l=performance.now()-o;N.debug(`opened in ${l.toFixed(2)}ms`);const u=this.#e.dataMessageCounts(),z=this.#e.timeRange()??[0n,0n],m=(0,i.fromMicros)(Number(z[0])),v=(0,i.fromMicros)(Number(z[1])),C=[],T=[],y=new Map,O=new Map,V={},X={},D=this.#e.header;T.push({name:E,schemaName:"rosgraph_msgs/Log"}),y.set(E,{numMessages:this.#e.logCount()??0}),O.set("rosgraph_msgs/Log",$.ros1["rosgraph_msgs/Log"]);for(const L of D.definitions.values())O.set(L.name,W(L));const U=new Set;for(const[L,k]of this.#e.subscriptions.entries()){const R=u.get(L);if(R==null||R===0)continue;const M=H(L,this.#e);if(M&&!U.has(M)){U.add(M),T.push({name:M,schemaName:k.name}),y.set(M,{numMessages:R}),V[M]=k.format;const P=O.get(k.name);P&&(X[M]=[P])}}const _=new Map;for(const[L,k]of D.parameters.entries())_.set(L,k.value);return N.debug("message definitions parsed"),this.#s=m,this.#r=v,{start:m,end:v,topics:T,datatypes:O,profile:"ulog",problems:C,publishersByTopic:new Map,topicStats:y}}async*messageIterator(e){if(this.#e==null)throw new Error("UlogDataProvider is not initialized");const r=e.topics,o=e.start??this.#s,l=e.end??this.#r;if(!o||!l)throw new Error("UlogDataProvider is not initialized");if(r.size===0)return;const u=BigInt(Math.floor((0,i.toMicroSec)(o))),z=BigInt(Math.floor((0,i.toMicroSec)(l)));for await(const m of this.#e.readMessages({startTime:u,endTime:z}))if(m.type===d.MessageType.Data){const v=m.value.timestamp,C=(0,i.fromMicros)(Number(v)),T=this.#e.subscriptions.get(m.msgId),y=T?.name;y&&r.has(y)&&(0,i.isTimeInRangeInclusive)(C,o,l)&&(yield{type:"message-event",msgEvent:{topic:y,receiveTime:C,message:m.value,sizeInBytes:m.data.byteLength,schemaName:T.name}})}else if(m.type===d.MessageType.Log||m.type===d.MessageType.LogTagged){const v=(0,i.fromMicros)(Number(m.timestamp));r.has(E)&&(0,i.isTimeInRangeInclusive)(v,o,l)&&(yield{type:"message-event",msgEvent:{topic:E,receiveTime:v,message:{file:"",function:"",header:{stamp:v},level:G(m.logLevel),line:0,msg:m.message,name:""},schemaName:"rosgraph_msgs/Log",sizeInBytes:m.size}})}}async getBackfillMessages(e){return[]}}function Q(a){if(!a.file)throw new Error("file required");const e=new Y({type:"file",file:a.file}),r=new x(e);return h.sj(r)}h.Jj(Q)}},j={};function n(t){var c=j[t];if(c!==void 0)return c.exports;var s=j[t]={exports:{}};return A[t].call(s.exports,s,s.exports,n),s.exports}n.m=A,n.x=()=>{var t=n.O(void 0,[2223],()=>n(42042));return t=n.O(t),t},(()=>{var t=[];n.O=(c,s,h,f)=>{if(s){f=f||0;for(var g=t.length;g>0&&t[g-1][2]>f;g--)t[g]=t[g-1];t[g]=[s,h,f];return}for(var i=1/0,g=0;g<t.length;g++){for(var[s,h,f]=t[g],w=!0,b=0;b<s.length;b++)(f&!1||i>=f)&&Object.keys(n.O).every(B=>n.O[B](s[b]))?s.splice(b--,1):(w=!1,f<i&&(i=f));if(w){t.splice(g--,1);var x=h();x!==void 0&&(c=x)}}return c}})(),n.d=(t,c)=>{for(var s in c)n.o(c,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:c[s]})},n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce((c,s)=>(n.f[s](t,c),c),[])),n.u=t=>""+t+".a6ec2d129eaa869aa04c.js",n.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),n.o=(t,c)=>Object.prototype.hasOwnProperty.call(t,c),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var c=n.g.document;if(!t&&c&&(c.currentScript&&(t=c.currentScript.src),!t)){var s=c.getElementsByTagName("script");if(s.length)for(var h=s.length-1;h>-1&&!t;)t=s[h--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={2042:1},c=f=>{var[g,i,w]=f;for(var b in i)n.o(i,b)&&(n.m[b]=i[b]);for(w&&w(n);g.length;)t[g.pop()]=1;h(f)};n.f.i=(f,g)=>{t[f]||importScripts(n.p+n.u(f))};var s=self.webpackChunk=self.webpackChunk||[],h=s.push.bind(s);s.push=c})(),(()=>{var t=n.x;n.x=()=>n.e(2223).then(t)})();var q=n.x()})();

//# sourceMappingURL=2042.54397f9120598f10a89b.js.map