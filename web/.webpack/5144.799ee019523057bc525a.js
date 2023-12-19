"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5144],{14571:(N,m,n)=>{n.d(m,{o:()=>x});var l=n(52322),s=n(2784);class x extends s.Component{state={hadError:!1};componentDidCatch(E){this.setState({hadError:!0}),this.props.onError(E)}render(){return this.state.hadError?(0,l.jsx)(l.Fragment,{}):this.props.children}}},55144:(N,m,n)=>{n.r(m),n.d(m,{default:()=>Y});var l=n(52322),s=n(2784),x=n(28316),I=n(75845),E=n(14571),Z=n(75017),L=n(14123),z=n(76635),S=n(38215),F=n(29268),R=n(93812),H=n(88724),O=n(47591),V=n(72970);const W=(0,V.ZL)()((e,t,o)=>({svg:{label:"DirectionalPad-svg",maxHeight:"100%",maxWidth:"100%"},button:{label:"DirectionalPad-button",cursor:"pointer",fill:e.palette.action.hover,stroke:e.palette.divider,strokeWidth:.5,"&:hover":{fill:(0,O.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),stroke:e.palette.primary.main,[`& + .${o.buttonIcon}`]:{fill:e.palette.primary.main}},"&.active":{fill:`${e.palette.primary.main} !important`,stroke:`${e.palette.primary.dark} !important`,"&:hover":{[`& + .${o.buttonIcon}`]:{fill:e.palette.common.white}}},"&.disabled":{cursor:"auto",strokeWidth:0,fill:e.palette.action.disabledBackground,"&:hover":{fill:e.palette.action.disabledBackground,[`& + .${o.buttonIcon}`]:{fill:e.palette.background.default}}}},buttonIcon:{pointerEvents:"none",label:"DirectionalPad-buttonIcon",fill:e.palette.text.primary,"&.disabled":{fill:e.palette.background.default}}}));var r;(function(e){e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e[e.LEFT=2]="LEFT",e[e.RIGHT=3]="RIGHT"})(r||(r={}));function U(e){const{onAction:t,disabled:o=!1}=e,[i,B]=(0,s.useState)(),{classes:c,cx:d}=W(),u=(0,s.useCallback)(b=>{B(b),t?.(b)},[t]),j=(0,s.useCallback)(()=>{i!=null&&(B(void 0),t?.())},[t,i]),v=b=>o?void 0:{onMouseDown:()=>{u(b)},onMouseUp:()=>{j()},onMouseLeave:()=>{j()}};return(0,l.jsx)(R.Z,{justifyContent:"center",alignItems:"center",fullWidth:!0,fullHeight:!0,style:{userSelect:"none"},children:(0,l.jsxs)("svg",{className:c.svg,viewBox:"0 0 256 256",children:[(0,l.jsxs)("g",{opacity:1,children:[(0,l.jsxs)("g",{...v(r.UP),role:"button",children:[(0,l.jsx)("path",{className:d(c.button,{active:i===r.UP,disabled:o}),d:"M162.707,78.945c-20.74,-14.771 -48.795,-14.771 -69.535,-0l-42.723,-42.723c44.594,-37.791 110.372,-37.794 154.981,-0l-42.723,42.723Z"}),(0,l.jsx)("path",{className:d(c.buttonIcon,{disabled:o}),d:"M128,30.364l20,20l-40,-0l20,-20Z"})]}),(0,l.jsxs)("g",{...v(r.DOWN),role:"button",children:[(0,l.jsx)("path",{className:d(c.button,{active:i===r.DOWN,disabled:o}),d:"M93.172,176.764c20.74,14.771 48.795,14.771 69.535,0l42.723,42.723c-44.594,37.791 -110.372,37.794 -154.981,0l42.723,-42.723Z"}),(0,l.jsx)("path",{className:d(c.buttonIcon,{disabled:o}),d:"M128,225.345l-20,-20l40,0l-20,20Z"})]})]}),(0,l.jsxs)("g",{opacity:1,children:[(0,l.jsxs)("g",{...v(r.LEFT),role:"button",children:[(0,l.jsx)("path",{className:d(c.button,{active:i===r.LEFT,disabled:o}),d:"M36.307,205.345c-37.793,-44.609 -37.791,-110.387 -0,-154.981l42.723,42.723c-14.771,20.74 -14.771,48.795 -0,69.535l-42.723,42.723Z"}),(0,l.jsx)("path",{className:d(c.buttonIcon,{disabled:o}),d:"M30.449,127.854l20,-20l0,40l-20,-20Z"})]}),(0,l.jsxs)("g",{...v(r.RIGHT),role:"button",children:[(0,l.jsx)("path",{className:d(c.button,{active:i===r.RIGHT,disabled:o}),d:"M219.572,50.364c37.794,44.609 37.791,110.387 0.001,154.981l-42.724,-42.723c14.771,-20.74 14.771,-48.795 0,-69.535l42.723,-42.723Z"}),(0,l.jsx)("path",{className:d(c.buttonIcon,{disabled:o}),d:"M225.43,127.854l-20,20l0,-40l20,20Z"})]})]})]})})}const w=U,y=[{label:"linear-x",value:"linear-x"},{label:"linear-y",value:"linear-y"},{label:"linear-z",value:"linear-z"},{label:"angular-x",value:"angular-x"},{label:"angular-y",value:"angular-y"},{label:"angular-z",value:"angular-z"}];function A(e,t){return{general:{label:"General",fields:{publishRate:{label:"Publish rate",input:"number",value:e.publishRate},topic:{label:"Topic",input:"autocomplete",value:e.topic,items:t.map(i=>i.name)}},children:{upButton:{label:"Up Button",fields:{field:{label:"Field",input:"select",value:e.upButton.field,options:y},value:{label:"Value",input:"number",value:e.upButton.value}}},downButton:{label:"Down Button",fields:{field:{label:"Field",input:"select",value:e.downButton.field,options:y},value:{label:"Value",input:"number",value:e.downButton.value}}},leftButton:{label:"Left Button",fields:{field:{label:"Field",input:"select",value:e.leftButton.field,options:y},value:{label:"Value",input:"number",value:e.leftButton.value}}},rightButton:{label:"Right Button",fields:{field:{label:"Field",input:"select",value:e.rightButton.field,options:y},value:{label:"Value",input:"number",value:e.rightButton.value}}}}}}}function G(e){const{context:t}=e,{saveState:o}=t,[i,B]=(0,s.useState)(),[c,d]=(0,s.useState)([]),[u,j]=(0,s.useState)(()=>{const a=t.initialState,{topic:p,publishRate:g=1,upButton:{field:M="linear-x",value:P=1}={},downButton:{field:h="linear-x",value:q=-1}={},leftButton:{field:_="angular-z",value:ee=1}={},rightButton:{field:te="angular-z",value:le=-1}={}}=a;return{topic:p,publishRate:g,upButton:{field:M,value:P},downButton:{field:h,value:q},leftButton:{field:_,value:ee},rightButton:{field:te,value:le}}}),v=(0,s.useCallback)(a=>{a.action==="update"&&j(p=>{const g={...p};return(0,z.set)(g,a.payload.path.slice(1),a.payload.value),g})},[]),[b,J]=(0,s.useState)(()=>()=>{}),[Q,X]=(0,s.useState)("light");(0,s.useLayoutEffect)(()=>{t.watch("topics"),t.watch("colorScheme"),t.onRender=(a,p)=>{d(a.topics??[]),J(()=>p),a.colorScheme&&X(a.colorScheme)}},[t]),(0,s.useEffect)(()=>{const a=A(u,c);t.updatePanelSettingsEditor({actionHandler:v,nodes:a}),o(u)},[u,t,o,v,c]);const{topic:f}=u;(0,s.useLayoutEffect)(()=>{if(f)return t.advertise?.(f,"geometry_msgs/Twist",{datatypes:new Map([["geometry_msgs/Vector3",S.ros1["geometry_msgs/Vector3"]],["geometry_msgs/Twist",S.ros1["geometry_msgs/Twist"]]])}),()=>{t.unadvertise?.(f)}},[t,f]),(0,s.useLayoutEffect)(()=>{if(i==null||!f)return;const a={linear:{x:0,y:0,z:0},angular:{x:0,y:0,z:0}};function p(P,h){switch(P){case"linear-x":a.linear.x=h;break;case"linear-y":a.linear.y=h;break;case"linear-z":a.linear.z=h;break;case"angular-x":a.angular.x=h;break;case"angular-y":a.angular.y=h;break;case"angular-z":a.angular.z=h;break}}switch(i){case r.UP:p(u.upButton.field,u.upButton.value);break;case r.DOWN:p(u.downButton.field,u.downButton.value);break;case r.LEFT:p(u.leftButton.field,u.leftButton.value);break;case r.RIGHT:p(u.rightButton.field,u.rightButton.value);break;default:}if(u.publishRate<=0)return;const g=1e3*1/u.publishRate;t.publish?.(f,a);const M=setInterval(()=>{t.publish?.(f,a)},g);return()=>{clearInterval(M)}},[t,u,f,i]),(0,s.useLayoutEffect)(()=>{b()},[b]);const C=t.publish!=null&&u.publishRate>0,k=Boolean(f),D=C&&k;return(0,l.jsx)(H.Z,{isDark:Q==="dark",children:(0,l.jsxs)(R.Z,{fullHeight:!0,justifyContent:"center",alignItems:"center",style:{padding:"min(5%, 8px)",textAlign:"center"},children:[!C&&(0,l.jsx)(F.Z,{children:"Please connect to a datasource that supports publishing in order to use this panel"}),C&&!k&&(0,l.jsx)(F.Z,{children:"Please select a publish topic in the panel settings"}),D&&(0,l.jsx)(w,{onAction:B,disabled:!D})]})})}const $=G;function K(e,t){return x.render((0,l.jsx)(s.StrictMode,{children:(0,l.jsx)(E.o,{onError:e,children:(0,l.jsx)($,{context:t})})}),t.panelElement),()=>{x.unmountComponentAtNode(t.panelElement)}}function T(e){const t=(0,I.iY)(),o=(0,s.useMemo)(()=>K.bind(void 0,t),[t]);return(0,l.jsx)(L._,{config:e.config,saveConfig:e.saveConfig,initPanel:o,highestSupportedConfigVersion:1})}T.panelType="Teleop",T.defaultConfig={};const Y=(0,Z.Z)(T)}}]);

//# sourceMappingURL=5144.799ee019523057bc525a.js.map