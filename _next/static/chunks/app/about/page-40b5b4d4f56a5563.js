(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{4747:function(e,t,r){Promise.resolve().then(r.t.bind(r,6206,23)),Promise.resolve().then(r.bind(r,3547)),Promise.resolve().then(r.bind(r,6184))},8049:function(e,t,r){"use strict";var n=r(4397);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,i,a){if(a!==n){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return r.PropTypes=r,r}},718:function(e,t,r){e.exports=r(8049)()},4397:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3547:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var n=r(7437),s=r(2265),i=r(718),a=r.n(i),o=r(1273);function c(e){let{options:t}=e,[r,i]=(0,s.useState)(!1);return(0,n.jsxs)("div",{className:"dropdown",children:[(0,n.jsxs)("button",{className:"menu-button",onClick:()=>i(!r),children:["Menu ",(0,n.jsx)(o.RiI,{className:"chevron-icon"})]}),r&&(0,n.jsx)("div",{className:"dropdown-panel",children:(0,n.jsx)("ul",{className:"dropdown-list",children:t.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.path,className:"dropdown-link",children:e.label})},t))})})]})}r(3402),c.propTypes={options:a().arrayOf(a().shape({path:a().string.isRequired,label:a().string.isRequired})).isRequired},r(9569);let l=e=>{let{options:t}=e,[r,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{i(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.jsx)("nav",{"data-testid":"nav",className:"navbar-outer",children:r?(0,n.jsx)(c,{options:t}):(0,n.jsx)("div",{className:"navbar-bubble",children:(0,n.jsx)("ul",{"data-testid":"ul",className:"navbar-links",children:t.map((e,t)=>(0,n.jsx)("li",{"data-testid":"li".concat(t),children:(0,n.jsx)("a",{"data-testid":"a".concat(t),className:"link",href:e.path,children:e.label})},t))})})})};l.propTypes={options:a().arrayOf(a().shape({path:a().string.isRequired,label:a().string.isRequired})).isRequired};var u=l},6184:function(e,t,r){"use strict";var n=r(7437),s=r(2265),i=r(718),a=r.n(i);r(3621);let o=e=>{let{darkClassName:t}=e,[r,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{{let e=localStorage.getItem("theme");if("dark"===e)i(!0),document.documentElement.classList.add(t);else if("light"===e)i(!1),document.documentElement.classList.remove(t);else{let e=window.matchMedia("(prefers-color-scheme: dark)");i(e.matches),document.documentElement.classList.toggle(t,e.matches)}}},[t]),(0,n.jsx)("div",{className:"theme-switcher",onClick:()=>{i(e=>{let r=!e;return document.documentElement.classList.toggle(t,r),localStorage.setItem("theme",r?"dark":"light"),r})},children:(0,n.jsx)("div",{className:"theme-switcher-button ".concat(r?"dark-mode":"light-mode"),children:(0,n.jsx)("div",{className:"theme-switcher-ring",children:(0,n.jsx)("div",{className:"theme-switcher-icon",children:r?(0,n.jsx)("span",{className:"moon-icon",children:"\uD83C\uDF1C"}):(0,n.jsx)("img",{src:"/Sun.svg",alt:"Sun Icon",className:"sun-icon"})})})})})};o.propTypes={darkClassName:a().string},o.defaultProps={darkClassName:"dark"},t.default=o},6206:function(){},3402:function(){},9569:function(){},3621:function(){},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(s),a=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,o({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:i,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,a),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[489,240,971,117,744],function(){return e(e.s=4747)}),_N_E=e.O()}]);