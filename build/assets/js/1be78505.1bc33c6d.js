"use strict";(self.webpackChunkcabinx_design=self.webpackChunkcabinx_design||[]).push([[9514,4972],{4007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ze});var a=n(7294),l=n(6010),o=n(1944),r=n(5281),i=n(3320),c=n(3438),s=n(4477),d=n(1116),m=n(3869),u=n(5999),b=n(2466),p=n(5936);const h="backToTopButton_sjWU",f="backToTopButtonShow_xfvO";function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(i(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h,e&&f),type:"button",onClick:t})}var v,g=n(6775),k=n(7524),_=n(6668),C=n(1231);function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I.apply(this,arguments)}const y=e=>{let{title:t,titleId:n,...l}=e;return a.createElement("svg",I({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,v||(v=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.147 7.646 3.793 8l.354.354 3.5 3.5.707-.707L5.207 8l3.147-3.146-.707-.708-3.5 3.5Zm3 0L6.793 8l.354.354 3.5 3.5.707-.707L8.207 8l3.147-3.146-.707-.708-3.5 3.5Z",fill:"#3A485C"})))},N="collapseSidebarButton_JQG6";function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(y,null))}var x=n(9689),Z=n(7462),w=n(902);const T=Symbol("EmptyContext"),L=a.createContext(T);function M(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:o},t)}var F=n(6043),A=n(8596),P=n(9960),B=n(2389);function R(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,_.L)(),E=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),v=(0,c._F)(t,o),g=(0,A.Mg)(h,o),{collapsed:k,setCollapsed:C}=(0,F.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:y}=function(){const e=(0,a.useContext)(L);if(e===T)throw new w.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!k),y(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,w.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:v,collapsed:k,updateCollapsed:N}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&f&&C(!0)}),[b,I,s,C,f]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(P.Z,(0,Z.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),h?N(!1):(e.preventDefault(),N())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=E?E:"#":E},d),u),h&&b&&a.createElement(R,{categoryLabel:u,onClick:e=>{e.preventDefault(),N()}})),a.createElement(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(z,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:i+1})))}var O=n(3919),W=n(9471);const j="menuExternalLink_NnFM";const D=function(e,t){return void 0===e&&(e="undefined"),void 0!==e&&function(e,t){void 0===e&&(e=void 0),void 0===t&&(t=void 0);const n=function(e){var t;return void 0===e&&(e=void 0),null==(t=!e||e.endsWith("/")?e:e+"/")?void 0:t.toLowerCase()},a=e=>e.substring(0,e.lastIndexOf("/"));return n(a(e))===n(a(t))}(e,t)};function V(e,t){return"link"===e.type?D(e.href,t):"category"===e.type&&(D(e.href,t)||((e,t)=>e.some((e=>(0,c._F)(e,t))))(e.items,t))}function G(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,type:p}=t,h=o.split("/")[2],f="link"===p&&"components"===h?V(t,o):(0,c._F)(t,o),E=(0,O.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(P.Z,(0,Z.Z)({className:(0,l.Z)("menu__link",!E&&j,{"menu__link--active":f}),"aria-current":f?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.Z,null)))}const U="menuHtmlItem_M9Kj";function q(e){let{item:t,level:n,index:o}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),c&&[U,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:i}})}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(H,(0,Z.Z)({item:t},n));case"html":return a.createElement(q,(0,Z.Z)({item:t},n));default:return a.createElement(G,(0,Z.Z)({item:t},n))}}function Y(e){let{items:t,...n}=e;return a.createElement(M,null,t.map(((e,t)=>{if("link"===e.type){const t=e.docId.split("/");if("components"===t[0]&&["style","props"].indexOf(t[t.length-1])>-1)return null;if("intro"===t[0])return null}return a.createElement(K,(0,Z.Z)({key:t,item:e,index:t},n))})))}const z=(0,a.memo)(Y),J="menu_SIkG",Q="menuWithAnnouncementBar_GW3s";function X(e){let{path:t,sidebar:n,className:o}=e;const i=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",J,i&&Q,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:n,activePath:t,level:1})))}const $="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function ae(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)($,i&&ee,r&&te)},i&&a.createElement(C.Z,{tabIndex:-1,className:ne}),a.createElement(X,{path:t,sidebar:n}),c&&a.createElement(S,{onClick:o}))}const le=a.memo(ae);var oe=n(3102),re=n(2961);const ie=e=>{let{sidebar:t,path:n}=e;const o=(0,re.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ce(e){return a.createElement(oe.Zo,{component:ie,props:e})}const se=a.memo(ce);function de(e){const t=(0,k.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(le,e),l&&a.createElement(se,e))}var me;function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ue.apply(this,arguments)}const be=e=>{let{title:t,titleId:n,...l}=e;return a.createElement("svg",ue({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,me||(me=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.354 8.354 8.707 8l-.353-.354-3.5-3.5-.708.708L7.293 8l-3.147 3.146.708.708 3.5-3.5Zm3 0L11.707 8l-.353-.354-3.5-3.5-.708.708L10.293 8l-3.147 3.146.708.708 3.5-3.5Z",fill:"#3A485C"})))},pe="expandButton_pI3x";function he(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:pe,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(be,null))}const fe="docSidebarContainer_b6E3",Ee="docSidebarContainerHidden_b3ry";function ve(e){var t;let{children:n}=e;const l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function ge(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,g.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,fe,n&&Ee),onTransitionEnd:e=>{e.currentTarget.classList.contains(fe)&&n&&s(!0)}},a.createElement(ve,null,a.createElement(de,{sidebar:t,path:i,onCollapse:d,isHidden:c})),c&&a.createElement(he,{toggleSidebar:d}))}const ke={docMainContainer:"docMainContainer_RiV8",docMainContainerEnhanced:"docMainContainerEnhanced_u7bj",docItemWrapperEnhanced:"docItemWrapperEnhanced_mUgT",container:"container_Jker"};function _e(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(ke.docMainContainer,(t||!o)&&ke.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced)},n))}const Ce="docPage__5DB",Ie="docsWrapper_BCFX";function ye(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ie},a.createElement(E,null),a.createElement("div",{className:Ce},n&&a.createElement(ge,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(_e,{hiddenSidebarContainer:l},t)))}var Ne=n(4972),Se=n(197);function xe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Se.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ze(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(Ne.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(xe,e),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ye,null,i)))))}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294),l=n(5999),o=n(1944),r=n(3869);function i(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>r});var a=n(7294),l=n(902);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);