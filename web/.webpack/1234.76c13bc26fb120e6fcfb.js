"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1234],{11234:(le,R,t)=>{t.r(R),t.d(R,{default:()=>Je,openSiblingStateTransitionsPanel:()=>Ye,transitionableRosTypes:()=>ze});var h=t(52322),j=t(52498),z=t(38677),I=t(68434),b=t(4e4),V=t(84006),W=t(7279),o=t(2784),re=t(62515),de=t(1547),ue=t(72970),U=t(8220),X=t(75845),g=t(44668),F=t(75785),K=t(36922),J=t(4750);function ce(e,n=1/0){const s=(0,X.O4)(e),u=(0,o.useMemo)(()=>(0,U.Z)(s,d=>(0,J.V)(d)),[s]),r=F.V7({topics:u,historySize:n}),p=(0,K.wm)(s);return(0,o.useMemo)(()=>p(r),[p,r])}var L=t(85026),me=t(75017),he=t(82044),pe=t(76479),O=t(93812),fe=t(24243),xe=t(98043),ve=t(26775),ge=t(77075),ye=t(9839),Me=t.n(ye),Se=t(68071),Te=t(27999),be=t(25302);function Ae(e,n){return(e%n+n)%n}const Q=[be.B,...Se.A2];function Pe(){const e=new Map;return n=>{const s=e.get(n);return s??(e.set(n,e.size),e.size-1)}}function k(e){const{path:n,pathIndex:s,startTime:u,y:r,blocks:p}=e,d={borderWidth:10,data:[],label:s.toString(),pointBackgroundColor:"rgba(0, 0, 0, 0.4)",pointBorderColor:"transparent",pointHoverRadius:3,pointRadius:1.25,pointStyle:"circle",showLine:!0};let f;const c=Pe();let y;for(const x of p)if(x)for(const E of x){const A=(0,Te.w0)(E.messageEvent,n.timestampMethod);if(!A)continue;const m=E.queriedData[0];if(E.queriedData.length!==1||!m)continue;const{constantName:M,value:l}=m,S=c(l);if(f&&(0,g.toSec)((0,g.subtract)(f,A))===0&&S===y||(f=A,Number.isNaN(l)&&typeof l!="string")||typeof l!="number"&&typeof l!="bigint"&&typeof l!="boolean"&&typeof l!="string")continue;const N=typeof l=="string"?Me()(l):Math.round(Number(l)),B=Q[Ae(N,Object.values(Q).length)]??"grey",D=(0,g.toSec)((0,g.subtract)(A,u)),G=M!=null?`${M} (${String(l)})`:String(l),P={x:D,y:r,label:S!==y?G:"",labelColor:B,value:l,constantName:M};d.data.push(P),y=S}return[d]}var C=t(67067),w=t(4977),Ee=t(65741),q=t(25513),Ne=t(5817),_=t.n(Ne),Re=t(68588),Ie=t(62421),Ve=t(39367);function ee(e){if(e!=="")return e??void 0}function te(e,n){return ee(e.label)??ee(e.value)??`Series ${n+1}`}const Ce=_()((e,n)=>({actions:[{type:"action",id:"delete-series",label:"Delete series",display:"inline",icon:"Clear"}],label:te(e,n),fields:{value:{label:"Message path",input:"messagepath",value:e.value,validTypes:Ie.plotableRosTypes},label:{input:"string",label:"Label",value:e.label},timestampMethod:{input:"select",label:"Timestamp",value:e.timestampMethod,options:[{label:"Receive Time",value:"receiveTime"},{label:"Header Stamp",value:"headerStamp"}]}}})),Be=_()(e=>({label:"Series",children:Object.fromEntries(e.map((s,u)=>[`${u}`,Ce(s,u)])),actions:[{type:"action",id:"add-series",label:"Add series",display:"inline",icon:"Addchart"}]}));function De(e,n){const s=w.Z(e.xAxisMinValue)&&w.Z(e.xAxisMaxValue)&&e.xAxisMinValue>=e.xAxisMaxValue?n("maxXError"):void 0;return{general:{label:"General",fields:{isSynced:{label:"Sync with other plots",input:"boolean",value:e.isSynced}}},xAxis:{label:n("xAxis"),fields:{xAxisMinValue:{label:n("min"),input:"number",value:e.xAxisMinValue!=null?Number(e.xAxisMinValue):void 0,placeholder:"auto"},xAxisMaxValue:{label:n("max"),input:"number",error:s,value:e.xAxisMaxValue!=null?Number(e.xAxisMaxValue):void 0,placeholder:"auto"},xAxisRange:{label:n("secondsRange"),input:"number",placeholder:"auto",value:e.xAxisRange}}},paths:Be(e.paths)}}function Ze(e,n,s){const u=(0,Ve.W0)(),{t:r}=(0,Re.$G)("stateTransitions"),p=(0,o.useCallback)(d=>{if(d.action==="update"){const{input:f,path:c,value:y}=d.payload;f==="boolean"&&Ee.Z(c,["general","isSynced"])?n({isSynced:y}):c[0]==="xAxis"?n((0,C.Uy)(x=>{q.Z(x,c.slice(1),y),c[1]==="xAxisRange"?(x.xAxisMinValue=void 0,x.xAxisMaxValue=void 0):(c[1]==="xAxisMinValue"||c[1]==="xAxisMaxValue")&&(x.xAxisRange=void 0)})):n((0,C.Uy)(x=>{q.Z(x,c,y)}))}if(d.action==="perform-node-action"){if(d.payload.id==="add-series")n((0,C.Uy)(f=>{f.paths.push({timestampMethod:"receiveTime",value:"",enabled:!0})}));else if(d.payload.id==="delete-series"){const f=d.payload.path[1];n((0,C.Uy)(c=>{c.paths.splice(Number(f),1)}))}}},[n]);(0,o.useEffect)(()=>{u({actionHandler:p,focusedPath:s,nodes:De(e,r)})},[p,e,s,r,u])}var je=t(2784);const ze=["bool","int8","uint8","int16","uint16","int32","uint32","int64","uint64","string","json"],We=ge.R.MONOSPACE,Fe=10,Le="bold",Oe={},Ge=(0,ue.ZL)()(e=>({chartWrapper:{position:"relative",marginTop:e.spacing(.5)},chartOverlay:{top:0,left:0,right:0,pointerEvents:"none"},row:{paddingInline:e.spacing(.5),pointerEvents:"none"},button:{minWidth:"auto",textAlign:"left",pointerEvents:"auto",fontWeight:"normal",padding:e.spacing(0,1),maxWidth:"100%","&:hover":{backgroundColor:(0,de.Z)(e.palette.background.paper).setAlpha(.67).toString(),backgroundImage:`linear-gradient(to right, ${e.palette.action.focus}, ${e.palette.action.focus})`},".MuiButton-endIcon":{opacity:.8,fontSize:14,marginLeft:e.spacing(.5),svg:{fontSize:"1em",height:"1em",width:"1em"}},":not(:hover) .MuiButton-endIcon":{display:"none"}}})),He={datalabels:{display:"auto",anchor:"center",align:-45,offset:0,clip:!0,font:{family:We,size:Fe,weight:Le}},zoom:{zoom:{enabled:!0,mode:"x",sensitivity:3,speed:.1},pan:{mode:"x",enabled:!0,speed:20,threshold:10}}};function Ye(e,n){e({panelType:"StateTransitions",updateIfExists:!0,siblingConfigCreator:s=>({...s,paths:b.Z(s.paths.concat([{value:n,timestampMethod:"receiveTime"}]))})})}function $e(e){return e.playerState.activeData?.currentTime}function Ue(e){return e.playerState.activeData?.endTime}const Xe=je.memo(function(n){const{config:s,saveConfig:u}=n,{paths:r}=s,{classes:p}=Ge(),d=(0,o.useMemo)(()=>r.map(({value:a})=>a),[r]),{openPanelSettings:f}=(0,ve.W)(),{id:c,setMessagePathDropConfig:y}=(0,he.R)(),{setSelectedPanelIds:x}=(0,xe.iy)(),[E,A]=(0,o.useState)(void 0);(0,o.useEffect)(()=>{y({getDropStatus(a){return a.isLeaf?{canDrop:!0,effect:"add"}:{canDrop:!1}},handleDrop(a){u(i=>({...i,paths:[...i.paths.length===1&&i.paths[0]?.value===""?[]:i.paths,{value:a.path,enabled:!0,timestampMethod:"receiveTime"}]}))}})},[u,y]);const{startTime:m}=F.Ui(),M=(0,L.An)($e),l=(0,o.useMemo)(()=>M&&m?(0,g.toSec)((0,g.subtract)(M,m)):void 0,[M,m]),S=(0,L.An)(Ue),N=(0,o.useMemo)(()=>S&&m?(0,g.toSec)((0,g.subtract)(S,m)):void 0,[S,m]),B=ce(d),D=(0,K.wm)(d),G=(0,o.useMemo)(()=>(0,U.Z)(r,a=>{const i=(0,J.V)(a.value,"full");return a.timestampMethod==="headerStamp"&&i?.fields!=null&&i.fields.push("header"),i}),[r]),H=F.PR(G),P=(0,o.useMemo)(()=>H.map(D),[H,D]),{height:ne,heightPerTopic:Qe}=(0,o.useMemo)(()=>{const a=r.length*64;return{height:Math.max(80,a+30),heightPerTopic:a/r.length}},[r.length]),se=(0,o.useMemo)(()=>{const a=V.Z(B,(i,v)=>!P.some(T=>T[v]));return W.Z(a)?Oe:a},[P,B]),{datasets:ke,minY:ae}=(0,o.useMemo)(()=>{if(!m)return{datasets:[],minY:void 0};let a,i=[];return r.forEach((v,T)=>{const Z=(T+1)*6*-1;a=Math.min(a??Z,Z-3);const st=P.map($=>$[v.value]),at=k({blocks:st,path:v,pathIndex:T,startTime:m,y:Z});i=i.concat(at);const oe=se[v.value];if(oe){const $=k({blocks:[oe],path:v,pathIndex:T,startTime:m,y:Z});i=i.concat($)}}),{datasets:i,minY:a}},[P,se,r,m]),we=(0,o.useMemo)(()=>({ticks:{display:!1},grid:{display:!1},type:"linear",min:ae,max:-3}),[ae]),qe=(0,o.useMemo)(()=>({type:"linear",border:{display:!1}}),[]),_e=(0,o.useMemo)(()=>(s.xAxisMinValue!=null||s.xAxisMaxValue!=null)&&N!=null?{x:{min:s.xAxisMinValue??0,max:s.xAxisMaxValue??N},y:{min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}}:s.xAxisRange!=null&&l!=null?{x:{min:l-s.xAxisRange,max:l},y:{min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}}:void 0,[s.xAxisMaxValue,s.xAxisMinValue,s.xAxisRange,l,N]),{width:et,ref:Y}=(0,re.NB)({handleHeight:!1,refreshRate:0,refreshMode:"debounce"});(0,o.useEffect)(()=>{const a=Y.current,i=v=>{v.preventDefault()};return a?.addEventListener("wheel",i),()=>{a?.removeEventListener("wheel",i)}},[Y]);const ie=(0,L.m7)(),tt=(0,o.useCallback)(({x:a})=>{const{seekPlayback:i,playerState:{activeData:{startTime:v}={}}}=ie();if(!i||a==null||v==null)return;const T=(0,g.add)(v,(0,g.fromSec)(a));i(T)},[ie]),nt=(0,X.O4)({datasets:ke});return Ze(s,u,E),(0,h.jsxs)(O.Z,{flexGrow:1,overflow:"hidden",style:{zIndex:0},children:[(0,h.jsx)(pe.Z,{}),(0,h.jsx)(O.Z,{fullWidth:!0,flex:"auto",overflowX:"hidden",overflowY:"auto",children:(0,h.jsxs)("div",{className:p.chartWrapper,style:{height:ne},ref:Y,children:[(0,h.jsx)(fe.Z,{zoom:!0,isSynced:s.isSynced,showXAxisLabels:!0,width:et??0,height:ne,data:nt,dataBounds:_e,type:"scatter",xAxes:qe,xAxisIsPlaybackTime:!0,yAxes:we,plugins:He,onClick:tt,currentTime:l}),(0,h.jsx)(O.Z,{className:p.chartOverlay,position:"absolute",paddingTop:.5,children:r.map((a,i)=>(0,h.jsx)("div",{className:p.row,style:{height:Qe},children:(0,h.jsx)(z.Z,{size:"small",color:"inherit","data-testid":"edit-topic-button",className:p.button,endIcon:(0,h.jsx)(j.An,{}),onClick:()=>{x([c]),f(),A(["paths",String(i)])},children:(0,h.jsx)(I.Z,{variant:"inherit",noWrap:!0,children:te(a,i)})})},i))})]})})]})}),Ke={paths:[{value:"",timestampMethod:"receiveTime"}],isSynced:!0},Je=(0,me.Z)(Object.assign(Xe,{panelType:"StateTransitions",defaultConfig:Ke}))},4750:(le,R,t)=>{t.d(R,{V:()=>j});var h=t(1012);function j(z,I){const b=(0,h.ZP)(z);if(!b)return;const V=b.messagePath.find(W=>W.type==="name");return V?{topic:b.topicName,preloadType:I??"partial",fields:[V.name]}:{topic:b.topicName,preloadType:I??"partial"}}}}]);

//# sourceMappingURL=1234.76c13bc26fb120e6fcfb.js.map