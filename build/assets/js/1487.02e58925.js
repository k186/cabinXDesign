(self.webpackChunkcabinx_design=self.webpackChunkcabinx_design||[]).push([[1487],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},452:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var r=n(7462),a=n(7294),o=n(2389),l=n(6010),s=n(2949),c=n(6668);function i(){const{prism:e}=(0,c.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var u=n(5281),m=n(7594),d=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){const n=e.map((e=>{const{start:n,end:r}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&f.test(o)){const e=o.match(f).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(g),t)}}(r,a),s=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<s.length;){const e=s[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=`${d},`:u[t]?c[u[t]].start=d:m[t]&&(c[m[t]].range+=`${c[m[t]].start}-${d-1},`),s.splice(d,1)}n=s.join("\n");const p={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const b="codeBlockContainer_Ckt0";function y(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,a]=e;const o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(i());return a.createElement(t,(0,r.Z)({},n,{style:o,className:(0,l.Z)(n.className,b,u.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return a.createElement(y,{as:"pre",tabIndex:0,className:(0,l.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:k.codeBlockLines},t))}var N=n(902);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=L);const r=(0,N.zX)(t),o=(0,N.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var O={Prism:n(7410).Z,theme:w};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var j=/\r\n|\r|\n/,_=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},T=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Z=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=x({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=x({},n,{backgroundColor:null}),a};function S(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const H=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Z(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=x({},S(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?x({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),B(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),B(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=x({},S(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?x({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),B(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,s=[],c=[s];l>-1;){for(;(o=r[l]++)<a[l];){var i=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],i=m):(u=T(u,m.type),m.alias&&(u=T(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(j),p=d.length;s.push({types:u,content:d[0]});for(var f=1;f<p;f++)_(s),c.push(s=[]),s.push({types:u,content:d[f]})}else l++,t.push(u),n.push(i),r.push(0),a.push(i.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return _(s),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),I="codeLine_lJS_",P="codeLineNumber_Tfdd",A="codeLineContent_feaV";function D(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,l.Z)(n,o&&I)}),u=t.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:P}),a.createElement("span",{className:A},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var $=n(5999);const M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function z(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(t),o(!0),s.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,$.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,$.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,$.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,M.copyButton,r&&M.copyButtonCopied),onClick:c},a.createElement("span",{className:M.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:M.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:M.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const R="wordWrapButtonIcon_Bwma",V="wordWrapButtonEnabled_EoeP";function W(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,$.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,r&&V),"aria-label":o,title:o},a.createElement("svg",{className:R,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function q(e){let{children:t,className:n="",metastring:o,title:s,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:d,magicComments:f}}=(0,c.L)(),g=m??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??d,h=i(),b=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),s=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return C(o,s),(0,a.useEffect)((()=>{s()}),[e,s]),(0,a.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),E=function(e){var t;return(null==e||null==(t=e.match(p))?void 0:t.groups.title)??""}(o)||s,{lineClassNames:N,code:L}=v(t,{metastring:o,language:g,magicComments:f}),w=u??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(y,{as:"div",className:(0,l.Z)(n,g&&!n.includes(`language-${g}`)&&`language-${g}`)},E&&a.createElement("div",{className:k.codeBlockTitle},E),a.createElement("div",{className:k.codeBlockContent},a.createElement(H,(0,r.Z)({},O,{theme:h,code:L,language:g??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,l.Z)(t,k.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,l.Z)(k.codeBlockLines,w&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(D,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:N[t],showLineNumbers:w})))))})),a.createElement("div",{className:k.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&a.createElement(W,{className:k.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),a.createElement(z,{className:k.codeButton,code:L}))))}function F(e){let{children:t,...n}=e;const l=(0,o.Z)(),s=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof s?q:E;return a.createElement(c,(0,r.Z)({key:String(l)},n),s)}},4673:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),s=n(6043);const c="details_lb9f",i="isBrowser_bmU9",u="collapsibleContent_i85q";function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;const f=(0,l.Z)(),g=(0,a.useRef)(null),{collapsed:h,setCollapsed:v}=(0,s.u)({initialState:!p.open}),[b,y]=(0,a.useState)(p.open);return a.createElement("details",(0,r.Z)({},p,{ref:g,open:b,"data-collapsed":h,className:(0,o.Z)(c,f&&i,p.className),onMouseDown:e=>{m(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;m(t)&&d(t,g.current)&&(e.preventDefault(),h?(v(!1),y(!0)):v(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(s.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{v(e),y(!e)}},a.createElement("div",{className:u},n)))}const f="details_b_Ee";function g(e){let{...t}=e;return a.createElement(p,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",f,t.className)}))}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7462),a=n(7294),o=n(6010),l=n(5999),s=n(6668);const c="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,s.L)();return"h1"!==t&&n?a.createElement(t,(0,r.Z)({},u,{className:(0,o.Z)("anchor",m?i:c),id:n}),u.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,r.Z)({},u,{id:void 0}))}},1470:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7462),a=n(7294),o=n(6010);const l="img_ev3q";function s(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,o.Z)(t,l))}));var t}},7390:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7462),a=n(7294),o=n(6010);const l="containsTaskList_mC6p";function s(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,o.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&l))}));var t}},5042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),a=n(3905),o=n(7713);function l(e){let{children:t}=e;return r.createElement(a.Zo,{components:o.Z},t)}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7462),a=n(7294),o=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>c(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=i(s,{anchorTopOffset:n.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:r,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const p=a.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:d,...f}=e;const g=(0,o.L)(),h=u??g.tableOfContents.minHeadingLevel,v=d??g.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>s({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return m((0,a.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:v}}),[c,i,h,v])),a.createElement(p,(0,r.Z)({toc:b,className:n,linkClassName:c},f))}},9407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7462),a=n(7294),o=n(6010),l=n(3743);const s="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,o.Z)(s,"thin-scrollbar",t)},a.createElement(l.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),s=n(7392),c=n(7094),i=n(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:p,groupId:f,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,c.U)(),[N,L]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&v.some((t=>t.value===e))&&L(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==N&&(w(t),L(r),null!=f&&E(f,String(r)))},B=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:B,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);