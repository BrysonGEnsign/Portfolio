(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{3972:function(e,s,t){Promise.resolve().then(t.t.bind(t,2972,23)),Promise.resolve().then(t.t.bind(t,6206,23)),Promise.resolve().then(t.bind(t,3547)),Promise.resolve().then(t.bind(t,6184))},3547:function(e,s,t){"use strict";t.d(s,{default:function(){return u}});var n=t(7437),a=t(2265),i=t(718),l=t.n(i),r=t(1273);t(3402);var c=t(7648);function d(e){let{options:s}=e,[t,i]=(0,a.useState)(!1);return(0,n.jsxs)("div",{className:"dropdown",children:[(0,n.jsxs)("button",{className:"menu-button",onClick:()=>i(!t),children:["Menu ",(0,n.jsx)(r.RiI,{className:"chevron-icon"})]}),t&&(0,n.jsx)("div",{className:"dropdown-panel",children:(0,n.jsx)("ul",{className:"dropdown-list",children:s.map((e,s)=>(0,n.jsx)("li",{"data-testid":"li".concat(s),children:(0,n.jsx)(c.default,{className:"link",href:e.path,children:e.label})},s))})})]})}d.propTypes={options:l().arrayOf(l().shape({path:l().string.isRequired,label:l().string.isRequired})).isRequired},t(9569);let o=e=>{let{options:s}=e,[t,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{i(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.jsx)("nav",{"data-testid":"nav",className:"navbar-outer",children:t?(0,n.jsx)(d,{options:s}):(0,n.jsx)("div",{className:"navbar-bubble",children:(0,n.jsx)("ul",{"data-testid":"ul",className:"navbar-links",children:s.map((e,s)=>(0,n.jsx)("li",{"data-testid":"li".concat(s),children:(0,n.jsx)(c.default,{className:"link",href:e.path,children:e.label})},s))})})})};o.propTypes={options:l().arrayOf(l().shape({path:l().string.isRequired,label:l().string.isRequired})).isRequired};var u=o},6184:function(e,s,t){"use strict";var n=t(7437),a=t(2265),i=t(718),l=t.n(i);t(3621);let r=e=>{let{darkClassName:s}=e,[t,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{{let e=localStorage.getItem("theme");if("dark"===e)i(!0),document.documentElement.classList.add(s);else if("light"===e)i(!1),document.documentElement.classList.remove(s);else{let e=window.matchMedia("(prefers-color-scheme: dark)");i(e.matches),document.documentElement.classList.toggle(s,e.matches)}}},[s]),(0,n.jsx)("div",{className:"theme-switcher",onClick:()=>{i(e=>{let t=!e;return document.documentElement.classList.toggle(s,t),localStorage.setItem("theme",t?"dark":"light"),t})},children:(0,n.jsx)("div",{className:"theme-switcher-button ".concat(t?"dark-mode":"light-mode"),children:(0,n.jsx)("div",{className:"theme-switcher-ring",children:(0,n.jsx)("div",{className:"theme-switcher-icon",children:t?(0,n.jsx)("span",{className:"moon-icon",children:"\uD83C\uDF1C"}):(0,n.jsx)("img",{src:"/Sun.svg",alt:"Sun Icon",className:"sun-icon"})})})})})};r.propTypes={darkClassName:l().string},r.defaultProps={darkClassName:"dark"},s.default=r},6206:function(){},3402:function(){},9569:function(){},3621:function(){}},function(e){e.O(0,[489,240,703,971,117,744],function(){return e(e.s=3972)}),_N_E=e.O()}]);