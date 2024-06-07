"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[8401],{71243:(e,t,s)=>{s.d(t,{A:()=>v});s(96540);var a=s(34164),n=s(17559),i=s(81754),l=s(99169),o=s(28774),r=s(21312),c=s(86025),d=s(74848);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,d.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,d.jsx)(o.A,{className:n,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:n,children:t})}function p(e){let{children:t,active:s,index:n,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function v(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(n.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:a,index:s,addMicrodata:!!n,children:(0,d.jsx)(x,{href:n,isLast:a,children:t.label})},s)}))]})}):null}},86929:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var a=s(21312),n=s(34164),i=s(28774),l=s(74848);function o(e){const{permalink:t,title:s,subLabel:a,isNext:o}=e;return(0,l.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function r(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(o,{...s,subLabel:(0,l.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var a=s(34164),n=s(21312),i=s(17559),l=s(32252),o=s(74848);function r(e){let{className:t}=e;const s=(0,l.r)();return s.badge?(0,o.jsx)("span",{className:(0,a.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},51878:(e,t,s)=>{s.d(t,{A:()=>p});s(96540);var a=s(34164),n=s(44586),i=s(28774),l=s(21312),o=s(44070),r=s(17559),c=s(55597),d=s(32252),m=s(74848);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(i.A,{to:s,onClick:a,children:(0,m.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,n.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,o.HW)(l),p=u??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,m.jsxs)("div",{className:(0,a.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,m.jsx)(x,{className:t,versionMetadata:s}):null}},56133:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var a=s(34164),n=s(28774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(74848);function o(e){let{permalink:t,label:s,count:o,description:r}=e;return(0,l.jsxs)(n.A,{href:t,title:r,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[s,o&&(0,l.jsx)("span",{children:o})]})}},89744:(e,t,s)=>{s.r(t),s.d(t,{default:()=>W});var a=s(96540),n=s(1003),i=s(89532),l=s(74848);const o=a.createContext(null);function r(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(n.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var m=s(34164),u=s(24581),h=s(86929);function b(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var x=s(51878),p=s(4267),v=s(17559),g=s(19175),j=s(61943);const f={lastUpdated:"lastUpdated_VsjB"};function A(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,m.A)(v.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(j.A,{editUrl:t})}),(0,l.jsx)("div",{className:(0,m.A)("col",f.lastUpdated),children:(s||a)&&(0,l.jsx)(g.A,{lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a})})]})}function _(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n,tags:i}=e,o=!!(t||s||n);return o?(0,l.jsx)("footer",{className:(0,m.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:o&&(0,l.jsx)(A,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a})}):null}var N=s(41422),C=s(65195),L=s(21312);const T={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function k(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,m.A)("clean-btn",T.tocCollapsibleButton,!t&&T.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(L.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const M={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function w(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,N.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,m.A)(M.tocCollapsible,!i&&M.tocCollapsibleExpanded,s),children:[(0,l.jsx)(k,{collapsed:i,onClick:o}),(0,l.jsx)(N.N,{lazy:!0,className:M.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(C.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const U={tocMobile:"tocMobile_bxCs"};function B(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(w,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(v.G.docs.docTocMobile,U.tocMobile)})}var y=s(67763);function H(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(y.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var I=s(51107),V=s(11544);function G(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,m.A)(v.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(I.A,{as:"h1",children:s})}),(0,l.jsx)(V.A,{children:t})]})}var E=s(71243),P=s(50996);const R={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};var F=s(56133);const S={tags:"tags_jXut",tag:"tag_QGVx"};function D(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(L.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,m.A)(S.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:S.tag,children:(0,l.jsx)(F.A,{...e})},e.permalink)))})]})}function O(e){return(0,l.jsx)("div",{className:(0,m.A)(v.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(D,{...e})})})}function z(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,u.l)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(B,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(H,{})}}(),{metadata:{unlisted:a}}=c(),n=c(),i=n.metadata.tags.length>0;return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,m.A)("col",!s.hidden&&R.docItemCol),children:[a&&(0,l.jsx)(P.A,{}),(0,l.jsx)(x.A,{}),(0,l.jsxs)("div",{className:R.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(E.A,{}),(0,l.jsx)(p.A,{}),s.mobile,i&&(0,l.jsx)(O,{tags:n.metadata.tags}),(0,l.jsx)(G,{children:t}),(0,l.jsx)(_,{})]}),(0,l.jsx)(b,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function W(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(z,{children:(0,l.jsx)(s,{})})]})})}}}]);