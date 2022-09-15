"use strict";(self.webpackChunkcabinx_design=self.webpackChunkcabinx_design||[]).push([[7918],{4477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>c});var a=n(7294),l=n(902);const r=a.createContext(null);function c(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},8068:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Le});var a=n(7294),l=n(833),r=n(902);const c=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(c.Provider,{value:l},t)}function o(){const e=(0,a.useContext)(c);if(null===e)throw new r.i6("DocProvider");return e}function s(){var e;const{metadata:t,frontMatter:n,assets:r}=o();return a.createElement(l.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=r.image)?e:n.image})}var d=n(6010),m=n(7524),u=n(7462),p=n(5999),h=n(9960);function v(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return a.createElement(h.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function E(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(v,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(v,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=o();return a.createElement(E,{previous:e.previous,next:e.next})}var f=n(2263),g=n(143),Z=n(5281),N=n(373),C=n(4477);const _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function T(e){const t=_[e.versionMetadata.banner];return a.createElement(t,e)}function k(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.Z,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,f.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,N.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:o}=(0,g.Jo)(r),s=null!=i?i:(m=o).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,Z.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(T,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(k,{versionLabel:o.label,to:s.path,onClick:()=>c(o.name)})))}function w(e){let{className:t}=e;const n=(0,C.E)();return n.banner?a.createElement(y,{className:t,versionMetadata:n}):null}function L(e){let{className:t}=e;const n=(0,C.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,Z.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function M(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:Z.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(M,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const A="iconEdit_Z9Sw";function I(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(A,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function z(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:Z.k.common.editThisPage},a.createElement(I,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const B="tag_zVej",V="tagRegular_sFm0",H="tagWithCount_h2kH";function D(e){let{permalink:t,label:n,count:l}=e;return a.createElement(h.Z,{href:t,className:(0,d.Z)(B,l?H:V)},n,l&&a.createElement("span",null,l))}const P="tags_jXut",R="tag_QGVx";function F(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(P,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:R},a.createElement(D,{label:t,permalink:n}))}))))}const S="lastUpdated_vwxv";function O(e){return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(F,e)))}function G(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",S)},(n||l)&&a.createElement(U,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function j(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:c}=e,i=c.length>0,s=!!(t||n||r);return i||s?a.createElement("footer",{className:(0,d.Z)(Z.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(O,{tags:c}),s&&a.createElement(G,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var J=n(6043),W=n(3743);const Q="tocCollapsibleButton_TO0P",q="tocCollapsibleButtonExpanded_MG3E";function Y(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",Q,!t&&q,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const X="tocCollapsible_ETCw",K="tocCollapsibleContent_vkbj",$="tocCollapsibleExpanded_sAul";function ee(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:c,toggleCollapsed:i}=(0,J.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(X,!c&&$,n)},a.createElement(Y,{collapsed:c,onClick:i}),a.createElement(J.z,{lazy:!0,className:K,collapsed:c},a.createElement(W.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const te="tocMobile_ITEo";function ne(){const{toc:e,frontMatter:t}=o();return a.createElement(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(Z.k.docs.docTocMobile,te)})}var ae=n(9407);function le(){const{toc:e,frontMatter:t}=o();return a.createElement(ae.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:Z.k.docs.docTocDesktop})}var re=n(2503),ce=n(5042);function ie(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=o();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(re.Z,{as:"h1"},n)),a.createElement(ce.Z,null,t))}var oe=n(3438),se=n(8596),de=n(4996);function me(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ue={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function pe(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(h.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function he(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ve(){const e=(0,de.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",ue.breadcrumbsItemLink),href:e},a.createElement(me,{className:ue.breadcrumbHomeIcon})))}function Ee(){const e=(0,oe.s1)(),t=(0,se.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(Z.k.docs.docBreadcrumbs,ue.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ve,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(he,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(pe,{href:t.href,isLast:l},t.label))})))):null}const be="docItemContainer_Djhp",fe="docItemCol_VOVn";function ge(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=o(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(ne,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(le,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&fe)},a.createElement(w,null),a.createElement("div",{className:be},a.createElement("article",null,a.createElement(Ee,null),a.createElement(L,null),n.mobile,a.createElement(ie,null,t),a.createElement(j,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}const Ze="RDfCWwcfStbttuoZN0xR",Ne="kMpwPXCkxRMEiaeSz_1R",Ce="woJ4Ts_wI0gWQ6DvIq4k",_e="iGc8aBFuZmgtOwJAToUJ",Te="irZnYckUyIctSIGFgOeY",ke="CkvEZY5F1kce135cljyz",ye=JSON.parse('[{"label":"\u7528\u6cd5","code":"use"},{"label":"\u6837\u5f0f","code":"style"},{"label":"\u53ef\u8bbf\u95ee\u6027","code":"props"}]');n.p;function we(e){const{tabCode:t,title:n,description:l}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:(0,d.Z)("row",Ze)},a.createElement("div",{className:(0,d.Z)(Ne)},n),a.createElement("div",{className:(0,d.Z)(Ce)},l)),a.createElement("div",{className:(0,d.Z)(_e)},ye.map((e=>a.createElement("div",{key:e.code,className:(0,d.Z)(Te,e.code===t?ke:"")},a.createElement(h.Z,{to:"./"+e.code},e.label))))))}function Le(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content,{metadata:r,frontMatter:c}=n,{title:o,description:d,tabCode:m}=c;return n.frontMatter.hide_title=!0,a.createElement(i,{content:e.content},m&&a.createElement(we,{tabCode:m,title:o,description:d}),a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(ge,null,a.createElement(n,null))))}},7713:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(7462),l=n(7294),r=n(5742);var c=n(452);var i=n(9960);var o=n(4673);var s=n(2503);function d(e){return l.createElement(s.Z,e)}var m=n(7390),u=n(1470),p=n(6010),h=n(5281),v=n(5999);const E="admonition_WoCw",b="admonitionHeading_TMsN",f="admonitionIcon_Ibzs",g="admonitionContent_vXIg",Z="wWalCpy1GP00nEGPoQrf",N="WL7lcYFRnbgipNTSDDgl",C="gflGbD76s68vKQNM1MgQ";function _(e){const{url:t,height:n=300}=e;return l.createElement("div",{className:(0,p.Z)(Z)},l.createElement("iframe",{className:(0,p.Z)(N),src:t,loading:"lazy",onLoad:function(){},importance:"low",height:n+"px",width:"100%"}),l.createElement("div",{className:(0,p.Z)(C),onClick:()=>{!function(e){window.open(e)}(t)}},"\u67e5\u770b"))}const T={note:{infimaClassName:"secondary",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:l.createElement(v.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:l.createElement(v.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:l.createElement(v.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:l.createElement(v.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 16 16"},l.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:l.createElement(v.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")},cabinx:{}},k={secondary:"note",important:"info",success:"tip",warning:"danger"};function y(e){var t;const{mdxAdmonitionTitle:n,rest:a}=function(e){const t=l.Children.toArray(e),n=t.find((e=>{var t;return l.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:a}}var w=n(5488),L=n(5162),x=n(4996);const M="card_hPMa";const U=function(e){const t=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),a="undefined"===e.header?null:l.createElement("header",{className:"Card-header"},e.header),r=e.hoverIcon||e.icon,c=l.createElement(l.Fragment,null,e.img&&l.createElement("img",{src:(0,x.Z)(e.img),className:"Card-image"}),l.createElement("div",{className:"Card-container"},(e.icon||r)&&l.createElement("div",{className:"Card-icon-row"},e.icon&&l.createElement("img",{src:(0,x.Z)(e.icon),className:"Card-icon Card-icon-default"}),r&&l.createElement("img",{src:(0,x.Z)(r),className:"Card-icon Card-icon-hover"})),e.ionicon&&l.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&l.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,n)=>l.createElement("img",{src:(0,x.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&a,l.createElement("div",{className:"Card-content"},e.children))),o=(0,p.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?l.createElement("docs-card",{class:o},l.createElement("div",{className:(0,p.Z)(M,"docs-card")},c)):n?l.createElement("docs-card",{class:o},l.createElement("a",{className:(0,p.Z)(M,"docs-card"),href:e.href,target:"_blank"},c)):l.createElement("docs-card",{class:o},l.createElement(i.Z,{to:e.href,className:(0,p.Z)(M,"docs-card")},c))};const A=function(e){return l.createElement("docs-cards",{class:e.className},e.children)},I={head:function(e){const t=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(r.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return l.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?l.createElement("code",e):l.createElement(c.Z,e)},a:function(e){return l.createElement(i.Z,e)},pre:function(e){var t;return l.createElement(c.Z,(0,l.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=l.Children.toArray(e.children),n=t.find((e=>{var t;return l.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(o.Z,(0,a.Z)({},e,{summary:n}),r)},ul:m.Z,img:u.Z,h1:e=>l.createElement(d,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(d,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(d,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(d,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(d,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(d,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:r}=y(e);if("cabinx"===n){var c,i,o,s;const[e,n]=a?null==(c=a.toLowerCase())?void 0:c.split("x"):[200,"auto"],r="https://teststatic.dmall.com/kayak-project/entry_html/html/cabin_wiki/cross.html"+(null==t||null==(i=t.props)||null==(o=i.children[0])||null==(s=o.props)?void 0:s.children);return l.createElement(_,{height:e,width:n,url:r})}const d=function(e){var t;const n=null!=(t=k[e])?t:e;return T[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),T.info)}(n),m=null!=a?a:d.label,{iconComponent:u}=d,v=null!=r?r:l.createElement(u,null);return l.createElement("div",{className:(0,p.Z)(h.k.common.admonition,h.k.common.admonitionType(e.type),"alert","alert--"+d.infimaClassName,E)},l.createElement("div",{className:b},l.createElement("span",{className:f},v),m),l.createElement("div",{className:g},t))},DocsCard:U,DocsCards:A,Tabs:w.Z,TabItem:L.Z,table:e=>{let{children:t,...n}=e;const r=t[0].props.children.props.children,c=!Array.isArray(r)||r.every((e=>{let{props:t}=e;return t.children}));return l.createElement("div",{className:"table-wrapper"},l.createElement("table",(0,a.Z)({},n,{children:c?t:t.slice(1)})))}}}}]);