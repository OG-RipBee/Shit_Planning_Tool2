exports.id=918,exports.ids=[918],exports.modules={1311:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(7779),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4013:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(7020),l=n(8732),u=r._(n(2015)),o=n(6231),f=n(651),a=n(2848),c=n(4718),i=n(1169),s=n(2088),d=n(6152),p=n(1311),b=n(6092),y=n(9871);function v(e,t,n,r){}function g(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let _=u.default.forwardRef(function(e,t){let n,r;let{href:a,as:v,children:_,prefetch:h=null,passHref:j,replace:M,shallow:m,scroll:O,locale:P,onClick:x,onMouseEnter:C,onTouchStart:R,legacyBehavior:E=!1,...k}=e;n=_,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let I=u.default.useContext(s.RouterContext),L=!1!==h,{href:S,as:T}=u.default.useMemo(()=>{if(!I){let e=g(a);return{href:e,as:v?g(v):e}}let[e,t]=(0,o.resolveHref)(I,a,!0);return{href:e,as:v?(0,o.resolveHref)(I,v):t||e}},[I,a,v]),w=u.default.useRef(S),D=u.default.useRef(T);E&&(r=u.default.Children.only(n));let K=E?r&&"object"==typeof r&&r.ref:t,[U,A,H]=(0,d.useIntersection)({rootMargin:"200px"}),q=u.default.useCallback(e=>{(D.current!==T||w.current!==S)&&(H(),D.current=T,w.current=S),U(e)},[T,S,H,U]),z=(0,y.useMergedRef)(q,K);u.default.useEffect(()=>{I},[T,S,A,P,L,null==I?void 0:I.locale,I]);let B={ref:z,onClick(e){E||"function"!=typeof x||x(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&!function(e,t,n,r,l,u,o,a){let{nodeName:c}=e.currentTarget;!("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,f.isLocalURL)(n)))&&(e.preventDefault(),(()=>{let e=null==o||o;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:u,locale:a,scroll:e}):t[l?"replace":"push"](r||n,{scroll:e})})())}(e,I,S,T,M,m,O,P)},onMouseEnter(e){E||"function"!=typeof C||C(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e)},onTouchStart:function(e){E||"function"!=typeof R||R(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e)}};if((0,c.isAbsoluteUrl)(T))B.href=T;else if(!E||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==I?void 0:I.locale;B.href=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales)||(0,b.addBasePath)((0,i.addLocale)(T,e,null==I?void 0:I.defaultLocale))}return E?u.default.cloneElement(r,B):(0,l.jsx)("a",{...k,...B,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6152:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(2015),l=n(4841),u="function"==typeof IntersectionObserver,o=new Map,f=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!u,[i,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(c||i)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:l,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let l=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:l},f.push(n),o.set(n,t),t}(n);return u.set(e,t),l.observe(e),function(){if(u.delete(e),l.unobserve(e),0===u.size){l.disconnect(),o.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!i){let e=(0,l.requestIdleCallback)(()=>s(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,n,t,i,d.current]),[p,i,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9871:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let r=n(2015);function l(e,t){let n=(0,r.useRef)(null),l=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=l.current;t&&(l.current=null,t())}else e&&(n.current=u(e,r)),t&&(l.current=u(t,r))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9918:(e,t,n)=>{e.exports=n(4013)}};