(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},88653,e=>{"use strict";e.i(47167);var t=e.i(43476),r=e.i(71645),i=e.i(31178),o=e.i(47414),n=e.i(74008),s=e.i(21476),a=e.i(72846),l=r,c=e.i(37806);function d(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class u extends l.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=(0,a.isHTMLElement)(e)&&e.offsetWidth||0,i=(0,a.isHTMLElement)(e)&&e.offsetHeight||0,o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft,o.right=r-o.width-o.left,o.bottom=i-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:i,anchorX:o,anchorY:n,root:s}){let a=(0,l.useId)(),f=(0,l.useRef)(null),m=(0,l.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=(0,l.useContext)(c.MotionConfigContext),h=function(...e){return r.useCallback(function(...e){return t=>{let r=!1,i=e.map(e=>{let i=d(e,t);return r||"function"!=typeof i||(r=!0),i});if(r)return()=>{for(let t=0;t<i.length;t++){let r=i[t];"function"==typeof r?r():d(e[t],null)}}}}(...e),e)}(f,e.props?.ref??e?.ref);return(0,l.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:l,right:c,bottom:d}=m.current;if(i||!f.current||!e||!t)return;let u="left"===o?`left: ${l}`:`right: ${c}`,h="bottom"===n?`bottom: ${d}`:`top: ${r}`;f.current.dataset.motionPopId=a;let g=document.createElement("style");p&&(g.nonce=p);let y=s??document.head;return y.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${u}px !important;
            ${h}px !important;
          }
        `),()=>{y.contains(g)&&y.removeChild(g)}},[i]),(0,t.jsx)(u,{isPresent:i,childRef:f,sizeRef:m,children:l.cloneElement(e,{ref:h})})}let m=({children:e,initial:i,isPresent:n,onExitComplete:a,custom:l,presenceAffectsLayout:c,mode:d,anchorX:u,anchorY:m,root:h})=>{let g=(0,o.useConstant)(p),y=(0,r.useId)(),v=!0,x=(0,r.useMemo)(()=>(v=!1,{id:y,initial:i,isPresent:n,custom:l,onExitComplete:e=>{for(let t of(g.set(e,!0),g.values()))if(!t)return;a&&a()},register:e=>(g.set(e,!1),()=>g.delete(e))}),[n,g,a]);return c&&v&&(x={...x}),(0,r.useMemo)(()=>{g.forEach((e,t)=>g.set(t,!1))},[n]),r.useEffect(()=>{n||g.size||!a||a()},[n]),"popLayout"===d&&(e=(0,t.jsx)(f,{isPresent:n,anchorX:u,anchorY:m,root:h,children:e})),(0,t.jsx)(s.PresenceContext.Provider,{value:x,children:e})};function p(){return new Map}var h=e.i(64978);let g=e=>e.key||"";function y(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}let v=({children:e,custom:s,initial:a=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:d="sync",propagate:u=!1,anchorX:f="left",anchorY:p="top",root:v})=>{let[x,b]=(0,h.usePresence)(u),w=(0,r.useMemo)(()=>y(e),[e]),k=u&&!x?[]:w.map(g),j=(0,r.useRef)(!0),E=(0,r.useRef)(w),C=(0,o.useConstant)(()=>new Map),N=(0,r.useRef)(new Set),[T,L]=(0,r.useState)(w),[S,P]=(0,r.useState)(w);(0,n.useIsomorphicLayoutEffect)(()=>{j.current=!1,E.current=w;for(let e=0;e<S.length;e++){let t=g(S[e]);k.includes(t)?(C.delete(t),N.current.delete(t)):!0!==C.get(t)&&C.set(t,!1)}},[S,k.length,k.join("-")]);let M=[];if(w!==T){let e=[...w];for(let t=0;t<S.length;t++){let r=S[t],i=g(r);k.includes(i)||(e.splice(t,0,r),M.push(r))}return"wait"===d&&M.length&&(e=M),P(y(e)),L(w),null}let{forceRender:$}=(0,r.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:S.map(e=>{let r=g(e),i=(!u||!!x)&&(w===S||k.includes(r));return(0,t.jsx)(m,{isPresent:i,initial:(!j.current||!!a)&&void 0,custom:s,presenceAffectsLayout:c,mode:d,root:v,onExitComplete:i?void 0:()=>{if(N.current.has(r)||(N.current.add(r),!C.has(r)))return;C.set(r,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&($?.(),P(E.current),u&&b?.(),l&&l())},anchorX:f,anchorY:p,children:e},r)})})};e.s(["AnimatePresence",()=>v],88653)},37727,e=>{"use strict";let t=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>t],37727)},10542,e=>{"use strict";let t,r;var i=e.i(86427),o=e.i(65566),n=e.i(71645),s=e.i(60830),a=e.i(87022);function l(e,t){let r,i=()=>{let{currentTime:i}=t,o=(null===i?0:i.value)/100;r!==o&&e(o),r=o};return a.frame.preUpdate(i,!0),()=>(0,a.cancelFrame)(i)}var c=e.i(30551),d=e.i(89026),u=e.i(49652);let f=new WeakMap,m=(e,t,r)=>(i,o)=>o&&o[0]?o[0][e+"Size"]:(0,d.isSVGElement)(i)&&"getBBox"in i?i.getBBox()[t]:i[r],p=m("inline","width","offsetWidth"),h=m("block","height","offsetHeight");function g({target:e,borderBoxSize:t}){f.get(e)?.forEach(r=>{r(e,{get width(){return p(e,t)},get height(){return h(e,t)}})})}function y(e){e.forEach(g)}let v=new Set;var x=e.i(83920),b=e.i(25791);let w=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),k={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function j(e,t,r,i){let o=r[t],{length:n,position:s}=k[t],a=o.current,l=r.time;o.current=e[`scroll${s}`],o.scrollLength=e[`scroll${n}`]-e[`client${n}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,x.progress)(0,o.scrollLength,o.current);let c=i-l;o.velocity=c>50?0:(0,b.velocityPerSecond)(o.current-a,c)}e.i(47167);var E=e.i(44230),C=e.i(15923),N=e.i(76959),T=e.i(72846);let L={start:0,center:.5,end:1};function S(e,t,r=0){let i=0;if(e in L&&(e=L[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?i=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?i=t/100*document.documentElement.clientWidth:e.endsWith("vh")?i=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(i=t*e),r+i}let P=[0,0],M=[[0,0],[1,1]],$={x:0,y:0},O=new WeakMap,z=new WeakMap,A=new WeakMap,F=new WeakMap,W=new WeakMap,I=e=>e===document.scrollingElement?window:e;function H(e,{container:i=document.scrollingElement,trackContentSize:o=!1,...n}={}){if(!i)return s.noop;let l=A.get(i);l||(l=new Set,A.set(i,l));let c=function(e,t,r,i={}){return{measure:t=>{!function(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)r.x.targetOffset+=i.offsetLeft,r.y.targetOffset+=i.offsetTop,i=i.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}(e,i.target,r),j(e,"x",r,t),j(e,"y",r,t),r.time=t,(i.offset||i.target)&&function(e,t,r){let{offset:i=M}=r,{target:o=e,axis:n="y"}=r,s="y"===n?"height":"width",a=o!==e?function(e,t){let r={x:0,y:0},i=e;for(;i&&i!==t;)if((0,T.isHTMLElement)(i))r.x+=i.offsetLeft,r.y+=i.offsetTop,i=i.offsetParent;else if("svg"===i.tagName){let e=i.getBoundingClientRect(),t=(i=i.parentElement).getBoundingClientRect();r.x+=e.left-t.left,r.y+=e.top-t.top}else if(i instanceof SVGGraphicsElement){let{x:e,y:t}=i.getBBox();r.x+=e,r.y+=t;let o=null,n=i.parentNode;for(;!o;)"svg"===n.tagName&&(o=n),n=i.parentNode;i=o}else break;return r}(o,e):$,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[n].offset.length=0;let d=!t[n].interpolate,u=i.length;for(let e=0;e<u;e++){let r=function(e,t,r,i){let o=Array.isArray(e)?e:P,n=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,L[e]?e:"0"]),(n=S(o[0],r,i))-S(o[1],t)}(i[e],c[s],l[s],a[n]);d||r===t[n].interpolatorOffsets[e]||(d=!0),t[n].offset[e]=r}d&&(t[n].interpolate=(0,E.interpolate)(t[n].offset,(0,C.defaultOffset)(i),{clamp:!1}),t[n].interpolatorOffsets=[...t[n].offset]),t[n].progress=(0,N.clamp)(0,1,t[n].interpolate(t[n].current))}(e,r,i)},notify:()=>t(r)}}(i,e,{time:0,x:w(),y:w()},n);if(l.add(c),!O.has(i)){let e,o=()=>{for(let e of l)e.measure(a.frameData.timestamp);a.frame.preUpdate(n)},n=()=>{for(let e of l)e.notify()},s=()=>a.frame.read(o);O.set(i,s);let c=I(i);window.addEventListener("resize",s,{passive:!0}),i!==document.documentElement&&z.set(i,"function"==typeof i?(v.add(i),r||(r=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};v.forEach(t=>t(e))},window.addEventListener("resize",r)),()=>{v.delete(i),v.size||"function"!=typeof r||(window.removeEventListener("resize",r),r=void 0)}):(!t&&"u">typeof ResizeObserver&&(t=new ResizeObserver(y)),(e=(0,u.resolveElements)(i)).forEach(e=>{let r=f.get(e);r||(r=new Set,f.set(e,r)),r.add(s),t?.observe(e)}),()=>{e.forEach(e=>{let r=f.get(e);r?.delete(s),r?.size||t?.unobserve(e)})})),c.addEventListener("scroll",s,{passive:!0}),s()}if(o&&!W.has(i)){let e=O.get(i),t={width:i.scrollWidth,height:i.scrollHeight};F.set(i,t);let r=a.frame.read(()=>{let r=i.scrollWidth,o=i.scrollHeight;(t.width!==r||t.height!==o)&&(e(),t.width=r,t.height=o)},!0);W.set(i,r)}let d=O.get(i);return a.frame.read(d,!1,!0),()=>{(0,a.cancelFrame)(d);let e=A.get(i);if(!e||(e.delete(c),e.size))return;let t=O.get(i);O.delete(i),t&&(I(i).removeEventListener("scroll",t),z.get(i)?.(),window.removeEventListener("resize",t));let r=W.get(i);r&&((0,a.cancelFrame)(r),W.delete(i)),F.delete(i)}}let _=new Map;function B({source:e,container:t,...r}){var i;let o,n,{axis:s}=r;e&&(t=e);let a=_.get(t)??new Map;_.set(t,a);let l=r.target??"self",d=a.get(l)??{},u=s+(r.offset??[]).join(",");return d[u]||(d[u]=!r.target&&(0,c.supportsScrollTimeline)()?new ScrollTimeline({source:t,axis:s}):(i={container:t,...r},o={value:0},n=H(e=>{o.value=100*e[i.axis].progress},i),{currentTime:o,cancel:n})),d[u]}var R=e.i(47414),D=e.i(74008);let U=()=>({scrollX:(0,i.motionValue)(0),scrollY:(0,i.motionValue)(0),scrollXProgress:(0,i.motionValue)(0),scrollYProgress:(0,i.motionValue)(0)}),V=e=>!!e&&!e.current;function X({container:e,target:t,...r}={}){let i=(0,R.useConstant)(U),a=(0,n.useRef)(null),c=(0,n.useRef)(!1),d=(0,n.useCallback)(()=>(a.current=function(e,{axis:t="y",container:r=document.scrollingElement,...i}={}){var o,n;let a;if(!r)return s.noop;let c={axis:t,container:r,...i};return"function"==typeof e?(o=e,n=c,2===o.length?H(e=>{o(e[n.axis].progress,e)},n):l(o,B(n))):(a=B(c),e.attachTimeline({timeline:c.target?void 0:a,observe:e=>(e.pause(),l(t=>{e.time=e.iterationDuration*t},a))}))}((e,{x:t,y:r})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(r.current),i.scrollYProgress.set(r.progress)},{...r,container:e?.current||void 0,target:t?.current||void 0}),()=>{a.current?.()}),[e,t,JSON.stringify(r.offset)]);return(0,D.useIsomorphicLayoutEffect)(()=>{if(c.current=!1,!(V(e)||V(t)))return d();c.current=!0},[d]),(0,n.useEffect)(()=>c.current?((0,o.invariant)(!V(e),"Container ref is defined but not hydrated","use-scroll-ref"),(0,o.invariant)(!V(t),"Target ref is defined but not hydrated","use-scroll-ref"),d()):void 0,[d]),i}e.s(["useScroll",()=>X],10542)},5766,e=>{"use strict";let t,r;var i,o=e.i(71645);let n={data:""},s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",i="",o="";for(let n in e){let s=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+s+";":i+="f"==n[1]?c(s,n):n+"{"+c(s,"k"==n[1]?"":t)+"}":"object"==typeof s?i+=c(s,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=s&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(n,s):n+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+i},d={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e};function f(e){let t,r,i=this||{},o=e.call?e(i.p):e;return((e,t,r,i,o)=>{var n;let f=u(e),m=d[f]||(d[f]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(f));if(!d[m]){let t=f!==e?e:(e=>{let t,r,i=[{}];for(;t=s.exec(e.replace(a,""));)t[4]?i.shift():t[3]?(r=t[3].replace(l," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);d[m]=c(o?{["@keyframes "+m]:t}:t,r?"":"."+m)}let p=r&&d.g?d.g:null;return r&&(d.g=d[m]),n=d[m],p?t.data=t.data.replace(p,n):-1===t.data.indexOf(n)&&(t.data=i?n+t.data:t.data+n),m})(o.unshift?o.raw?(t=[].slice.call(arguments,1),r=i.p,o.reduce((e,i,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+i+(null==n?"":n)},"")):o.reduce((e,t)=>Object.assign(e,t&&t.call?t(i.p):t),{}):o,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n})(i.target),i.g,i.o,i.k)}f.bind({g:1});let m,p,h,g=f.bind({k:1});function y(e,t){let r=this||{};return function(){let i=arguments;function o(n,s){let a=Object.assign({},n),l=a.className||o.className;r.p=Object.assign({theme:p&&p()},a),r.o=/ *go\d+/.test(l),a.className=f.apply(r,i)+(l?" "+l:""),t&&(a.ref=s);let c=e;return e[0]&&(c=a.as||e,delete a.as),h&&c[0]&&h(a),m(c,a)}return t?t(o):o}}var v=(e,t)=>"function"==typeof e?e(t):e,x=(t=0,()=>(++t).toString()),b=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},w="default",k=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:i}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===i.id),toast:i});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},j=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},C={},N=(e,t=w)=>{C[t]=k(C[t]||E,e),j.forEach(([e,r])=>{e===t&&r(C[t])})},T=e=>Object.keys(C).forEach(t=>N(e,t)),L=(e=w)=>t=>{N(t,e)},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=e=>(t,r)=>{let i,o=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||x()}))(t,e,r);return L(o.toasterId||(i=o.id,Object.keys(C).find(e=>C[e].toasts.some(e=>e.id===i))))({type:2,toast:o}),o.id},M=(e,t)=>P("blank")(e,t);M.error=P("error"),M.success=P("success"),M.loading=P("loading"),M.custom=P("custom"),M.dismiss=(e,t)=>{let r={type:3,toastId:e};t?L(t)(r):T(r)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let r={type:4,toastId:e};t?L(t)(r):T(r)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,r)=>{let i=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?v(t.success,e):void 0;return o?M.success(o,{id:i,...r,...null==r?void 0:r.success}):M.dismiss(i),e}).catch(e=>{let o=t.error?v(t.error,e):void 0;o?M.error(o,{id:i,...r,...null==r?void 0:r.error}):M.dismiss(i)}),e};var $=1e3,O=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,A=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,H=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,_=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=y("div")`
  position: absolute;
`,D=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?o.createElement(V,null,t):t:"blank"===r?null:o.createElement(D,null,o.createElement(I,{...i}),"loading"!==r&&o.createElement(R,null,"error"===r?o.createElement(F,{...i}):o.createElement(B,{...i})))},Y=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,G=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=o.memo(({toast:e,position:t,style:r,children:i})=>{let n=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[i,o]=b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(X,{toast:e}),a=o.createElement(G,{...e.ariaProps},v(e.message,e));return o.createElement(Y,{className:e.className,style:{...n,...r,...e.style}},"function"==typeof i?i({icon:s,message:a}):o.createElement(o.Fragment,null,s,a))});i=o.createElement,c.p=void 0,m=i,p=void 0,h=void 0;var q=({id:e,className:t,style:r,onHeightUpdate:i,children:n})=>{let s=o.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return o.createElement("div",{ref:s,className:t,style:r},n)},J=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Z=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:n,toasterId:s,containerStyle:a,containerClassName:l})=>{let{toasts:c,handlers:d}=((e,t="default")=>{let{toasts:r,pausedAt:i}=((e={},t=w)=>{let[r,i]=(0,o.useState)(C[t]||E),n=(0,o.useRef)(C[t]);(0,o.useEffect)(()=>(n.current!==C[t]&&i(C[t]),j.push([t,i]),()=>{let e=j.findIndex(([e])=>e===t);e>-1&&j.splice(e,1)}),[t]);let s=r.toasts.map(t=>{var r,i,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(i=e[t.type])?void 0:i.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...r,toasts:s}})(e,t),n=(0,o.useRef)(new Map).current,s=(0,o.useCallback)((e,t=$)=>{if(n.has(e))return;let r=setTimeout(()=>{n.delete(e),a({type:4,toastId:e})},t);n.set(e,r)},[]);(0,o.useEffect)(()=>{if(i)return;let e=Date.now(),o=r.map(r=>{if(r.duration===1/0)return;let i=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(i<0){r.visible&&M.dismiss(r.id);return}return setTimeout(()=>M.dismiss(r.id,t),i)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[r,i,t]);let a=(0,o.useCallback)(L(t),[t]),l=(0,o.useCallback)(()=>{a({type:5,time:Date.now()})},[a]),c=(0,o.useCallback)((e,t)=>{a({type:1,toast:{id:e,height:t}})},[a]),d=(0,o.useCallback)(()=>{i&&a({type:6,time:Date.now()})},[i,a]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:i=!1,gutter:o=8,defaultPosition:n}=t||{},s=r.filter(t=>(t.position||n)===(e.position||n)&&t.height),a=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<a&&e.visible).length;return s.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)s(e.id,e.removeDelay);else{let t=n.get(e.id);t&&(clearTimeout(t),n.delete(e.id))}})},[r,s]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}})(r,s);return o.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let s,a,l=r.position||t,c=d.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}),u=(s=l.includes("top"),a=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...a});return o.createElement(q,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?J:"",style:u},"custom"===r.type?v(r.message,r):n?n(r):o.createElement(K,{toast:r,position:l}))}))};e.s(["ToastBar",()=>K,"Toaster",()=>Z,"default",()=>M,"toast",()=>M],5766)},63178,e=>{"use strict";var t=e.i(71645),r=(e,t,r,i,o,n,s,a)=>{let l=document.documentElement,c=["light","dark"];function d(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,i=r&&n?o.map(e=>n[e]||e):o;r?(l.classList.remove(...i),l.classList.add(n&&n[t]?n[t]:t)):l.setAttribute(e,t)}),r=t,a&&c.includes(r)&&(l.style.colorScheme=r)}if(i)d(i);else try{let e=localStorage.getItem(t)||r,i=s&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(i)}catch(e){}},i=["light","dark"],o="(prefers-color-scheme: dark)",n="u"<typeof window,s=t.createContext(void 0),a={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=t.useContext(s))?e:a},c=e=>t.useContext(s)?t.createElement(t.Fragment,null,e.children):t.createElement(u,{...e}),d=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:l="theme",themes:c=d,defaultTheme:u=n?"system":"light",attribute:g="data-theme",value:y,children:v,nonce:x,scriptProps:b})=>{let[w,k]=t.useState(()=>m(l,u)),[j,E]=t.useState(()=>"system"===w?h():w),C=y?Object.values(y):c,N=t.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=h());let o=y?y[t]:t,s=r?p(x):null,l=document.documentElement,c=e=>{"class"===e?(l.classList.remove(...C),o&&l.classList.add(o)):e.startsWith("data-")&&(o?l.setAttribute(e,o):l.removeAttribute(e))};if(Array.isArray(g)?g.forEach(c):c(g),a){let e=i.includes(u)?u:null,r=i.includes(t)?t:e;l.style.colorScheme=r}null==s||s()},[x]),T=t.useCallback(e=>{let t="function"==typeof e?e(w):e;k(t);try{localStorage.setItem(l,t)}catch(e){}},[w]),L=t.useCallback(t=>{E(h(t)),"system"===w&&n&&!e&&N("system")},[w,e]);t.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),t.useEffect(()=>{let e=e=>{e.key===l&&(e.newValue?k(e.newValue):T(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),t.useEffect(()=>{N(null!=e?e:w)},[e,w]);let S=t.useMemo(()=>({theme:w,setTheme:T,forcedTheme:e,resolvedTheme:"system"===w?j:w,themes:n?[...c,"system"]:c,systemTheme:n?j:void 0}),[w,T,e,j,n,c]);return t.createElement(s.Provider,{value:S},t.createElement(f,{forcedTheme:e,storageKey:l,attribute:g,enableSystem:n,enableColorScheme:a,defaultTheme:u,value:y,themes:c,nonce:x,scriptProps:b}),v)},f=t.memo(({forcedTheme:e,storageKey:i,attribute:o,enableSystem:n,enableColorScheme:s,defaultTheme:a,value:l,themes:c,nonce:d,scriptProps:u})=>{let f=JSON.stringify([o,i,a,e,c,l,n,s]).slice(1,-1);return t.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"u"<typeof window?d:"",dangerouslySetInnerHTML:{__html:`(${r.toString()})(${f})`}})}),m=(e,t)=>{let r;if(!n){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},h=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light");e.s(["ThemeProvider",()=>c,"useTheme",()=>l])},3265,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(46932),o=e.i(88653),n=e.i(28540),s=e.i(22016),a=e.i(75254);let l=(0,a.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);var c=e.i(37727);let d=(0,a.default)("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),u=(0,a.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var f=e.i(63178);function m(){let{theme:e,setTheme:o}=(0,f.useTheme)(),[n,s]=r.useState(!1);if(r.useEffect(()=>{s(!0)},[]),!n)return(0,t.jsx)("div",{className:"w-8 h-8 bg-muted rounded-full"});let a="dark"===e;return(0,t.jsxs)(i.motion.button,{onClick:()=>o(a?"light":"dark"),className:"relative flex items-center justify-center w-8 h-8 rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.2)] dark:hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] transition-colors duration-300",initial:!1,animate:{backgroundColor:a?"#0f172a":"#ffffff",borderColor:a?"#334155":"#e2e8f0"},whileHover:{scale:1.1},whileTap:{scale:.9},transition:{duration:.2},"aria-label":"Toggle theme",children:[(0,t.jsx)(i.motion.div,{className:"absolute text-amber-500",animate:{y:32*!!a,opacity:+!a,rotate:90*!!a},transition:{duration:.5,type:"spring",stiffness:100},children:(0,t.jsx)(u,{className:"w-4 h-4 fill-current"})}),(0,t.jsx)(i.motion.div,{className:"absolute text-blue-400",initial:{y:-32,opacity:0,rotate:-90},animate:{y:a?0:-32,opacity:+!!a,rotate:a?0:-90},transition:{duration:.5,type:"spring",stiffness:100},children:(0,t.jsx)(d,{className:"w-4 h-4 fill-current"})})]})}var p=e.i(59544);function h({children:e,className:r="",colors:i=["#5227FF","#FF9FFC","#B19EEF"],animationSpeed:o=8,showBorder:n=!1}){let s=[...i];s.length>0&&(s[0],s[s.length-1]);let a={backgroundImage:`linear-gradient(to right, ${s.join(", ")})`,animationDuration:`${o}s`};return(0,t.jsxs)("div",{className:`animated-gradient-text ${n?"with-border":""} ${r}`,children:[n&&(0,t.jsx)("div",{className:"gradient-overlay",style:a}),(0,t.jsx)("div",{className:"text-content",style:a,children:e})]})}var g=e.i(97126);let y=[{name:"About",href:"/#about"},{name:"Work",href:"/projects"},{name:"Graphics",href:"/#graphics"},{name:"Process",href:"/#process"},{name:"Experience",href:"/#experience"},{name:"Contact",href:"/#contact"}];e.s(["Navbar",0,()=>{let[e,a]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm":"bg-transparent py-6"}`,children:[(0,t.jsxs)(n.Container,{className:"flex items-center justify-between",children:[(0,t.jsx)(s.default,{href:"/",className:"font-bold hover:opacity-80 transition-opacity",children:(0,t.jsx)(h,{colors:["#5227FF","#FF9FFC","#B19EEF","#5227FF"],animationSpeed:6,showBorder:!1,className:"text-xl md:text-2xl",children:"PORTFOLIO"})}),(0,t.jsxs)("nav",{className:"hidden md:flex items-center gap-8",children:[y.map(e=>(0,t.jsxs)(s.default,{href:e.href,className:"relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group",children:[e.name,(0,t.jsx)("span",{className:"absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full"})]},e.name)),(0,t.jsx)(m,{}),(0,t.jsx)(p.Button,{href:(0,g.getAssetPath)("/CV_UI-UX-Designer.pdf"),target:"_blank",rel:"noopener noreferrer",variant:"primary",className:"text-sm font-medium px-6 py-2 h-auto",isMagnetic:!1,isAnimated:!1,children:"Resume"})]}),(0,t.jsxs)("div",{className:"flex md:hidden items-center gap-4 z-50",children:[(0,t.jsx)(m,{}),(0,t.jsx)("button",{className:"text-foreground",onClick:()=>u(!d),children:d?(0,t.jsx)(c.X,{className:"w-6 h-6"}):(0,t.jsx)(l,{className:"w-6 h-6"})})]})]}),(0,t.jsx)(o.AnimatePresence,{children:d&&(0,t.jsx)(i.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"100vh"},exit:{opacity:0,height:0},className:"fixed inset-0 top-0 left-0 bg-background bg-gradient-to-br from-background via-background to-primary/20 z-40 md:hidden flex flex-col justify-center items-center",children:(0,t.jsxs)(i.motion.nav,{initial:"closed",animate:"open",exit:"closed",variants:{open:{transition:{staggerChildren:.1,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},className:"flex flex-col items-center space-y-8",children:[y.map(e=>(0,t.jsx)(i.motion.div,{variants:{open:{opacity:1,y:0},closed:{opacity:0,y:20}},children:(0,t.jsx)(s.default,{href:e.href,className:"text-3xl font-bold text-foreground hover:text-primary transition-colors",onClick:()=>u(!1),children:e.name})},e.name)),(0,t.jsx)(i.motion.div,{variants:{open:{opacity:1,y:0},closed:{opacity:0,y:20}},children:(0,t.jsx)(p.Button,{href:(0,g.getAssetPath)("/CV_UI-UX-Designer.pdf"),target:"_blank",rel:"noopener noreferrer",variant:"primary",className:"px-8 py-3 text-lg",isMagnetic:!1,isAnimated:!1,children:"Resume"})})]})})})]})}],3265)},27423,e=>{"use strict";var t=e.i(43476),r=e.i(63178);function i({children:e,...i}){return(0,t.jsx)(r.ThemeProvider,{...i,children:e})}e.s(["ThemeProvider",()=>i])},59062,e=>{"use strict";var t=e.i(43476),r=e.i(46932),i=e.i(91994),o=e.i(10542);function n(){let{scrollYProgress:e}=(0,o.useScroll)(),n=(0,i.useSpring)(e,{stiffness:100,damping:30,restDelta:.001});return(0,t.jsx)(r.motion.div,{id:"scroll-indicator",style:{scaleX:n,position:"fixed",bottom:0,left:0,right:0,height:4,originX:0,backgroundColor:"var(--primary)",zIndex:100}})}e.s(["ScrollProgress",()=>n])},48126,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(46932),o=e.i(88653);let n=(0,e.i(75254).default)("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);e.s(["ScrollToTop",0,()=>{let[e,s]=(0,r.useState)(!1),[a,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{window.scrollY>2*window.innerHeight?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)(o.AnimatePresence,{children:e&&(0,t.jsx)(i.motion.div,{initial:{opacity:0,scale:.5,y:50},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.5,y:50},transition:{type:"spring",stiffness:300,damping:20},className:"fixed bottom-8 right-8 z-50 pointer-events-auto",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:(0,t.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,t.jsx)(i.motion.div,{animate:{scale:[1,1.15,1],opacity:[.3,.1,.3]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},className:"absolute inset-0 -m-3 rounded-full bg-primary/20 blur-md pointer-events-none"}),(0,t.jsxs)(i.motion.button,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},whileHover:{scale:1.1},whileTap:{scale:.95},className:"group relative flex items-center justify-center p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(var(--primary),0.3)] transition-shadow duration-300",children:[(0,t.jsx)("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-100 group-hover:opacity-90 transition-opacity duration-300"}),(0,t.jsx)("div",{className:"absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/30 opacity-50"}),(0,t.jsx)("div",{className:"absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors"}),(0,t.jsx)(i.motion.div,{animate:a?{y:-3}:{y:0},transition:{type:"spring",stiffness:400,damping:10},className:"relative z-10 text-white drop-shadow-sm",children:(0,t.jsx)(n,{className:"w-6 h-6 stroke-[2.5px]"})})]}),(0,t.jsx)(i.motion.span,{initial:{opacity:0,x:-10},animate:{opacity:+!!a,x:a?-10:-5},className:"absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-border text-xs font-medium text-foreground whitespace-nowrap shadow-sm pointer-events-none",children:"Back to Top"})]})})})}],48126)},78434,e=>{"use strict";var t=e.i(43476),r=e.i(5766),i=e.i(46932);e.s(["ToasterProvider",0,()=>(0,t.jsx)(r.Toaster,{position:"top-right",containerStyle:{top:80,right:20,zIndex:99999},toastOptions:{duration:4e3,style:{background:"var(--secondary)",color:"var(--foreground)",border:"1px solid var(--border)",padding:"8px 12px 8px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:500,boxShadow:"0 10px 30px -10px rgba(0,0,0,0.3)",overflow:"hidden"},success:{iconTheme:{primary:"#10b981",secondary:"var(--secondary)"}}},children:e=>(0,t.jsx)(r.ToastBar,{toast:e,style:{...e.style,padding:0,overflow:"hidden",position:"relative"},children:({icon:o,message:n})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 pl-4 pr-2 py-2 w-full",children:[o,(0,t.jsx)("div",{className:"flex-1 pr-2",children:n}),(0,t.jsx)("button",{onClick:t=>{t.stopPropagation(),r.toast.dismiss(e.id)},className:"w-6 h-6 shrink-0 flex items-center justify-center rounded-full hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"})})})]}),(0,t.jsx)(i.motion.div,{initial:{width:"100%"},animate:{width:"0%"},transition:{duration:(e.duration||4e3)/1e3,ease:"linear"},className:`absolute bottom-0 left-0 h-[3px] opacity-100 ${"success"===e.type?"bg-[#10b981]":"bg-primary"}`})]})})})])}]);