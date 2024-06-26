"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[9221],{30096:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=n(74848),s=n(28453);const t={},c='NCGR ("RGCN") - Nitro Character Graphic Runtime',a={id:"universal/resources/nitro/graphics_2d/file_ncgr",title:'NCGR ("RGCN") - Nitro Character Graphic Runtime',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/file_ncgr.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/file_ncgr",permalink:"/docs/universal/resources/nitro/graphics_2d/file_ncgr",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/resources/nitro/graphics_2d/file_ncgr.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'NCER ("RECN") - Nitro Cell Runtime',permalink:"/docs/universal/resources/nitro/graphics_2d/file_ncer"},next:{title:'NCLR ("RLCN") - Nitro Color Runtime',permalink:"/docs/universal/resources/nitro/graphics_2d/file_nclr"}},o={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"File Container",id:"file-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Sections",id:"sections",level:3}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"ncgr-rgcn---nitro-character-graphic-runtime",children:'NCGR ("RGCN") - Nitro Character Graphic Runtime'}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["Author(s): ",(0,i.jsx)(r.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,i.jsx)("br",{}),"\r\nResearch: (see sections)"]}),"\n"]}),"\n",(0,i.jsx)(r.mermaid,{value:"flowchart BT;\r\n    NCGR(N. Character Graphic R.)--\x3eG2D(Graphics 2D);\r\n    CHAR(Character)--\x3eNCGR;\r\n    CPOS(Caracter Position?)-.->NCGR;"}),"\n",(0,i.jsxs)(r.p,{children:["The character graphic runtime holds the image data, usually in form of tiles. The image can be displayed directly or used as tile buffer for further processing as ",(0,i.jsx)(r.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_nscr",children:"screen map"})," or ",(0,i.jsx)(r.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncer",children:"cells"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#file-container",children:"File Container"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#sections",children:"Sections"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(r.h3,{id:"file-container",children:"File Container"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"struct ContainerFileNCGR\r\n{\r\n    /* 0x00   */ struct NitroFileHeader fileHeader;\r\n    /* 0x10   */ struct ContainerSectionCHAR sectionDataCHAR;\r\n    /* append */ struct ContainerSectionCPOS sectionDataCPOS; // optional\r\n}; // entry size = fileHeader.lengthFile\n"})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field Name"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Data Type"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fileHeader"}),(0,i.jsxs)(r.td,{children:["Header of this file. ",(0,i.jsx)(r.code,{children:'fileHeader.signature = "RGCN"'}),"."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/universal/resources/nitro/#nitro-file-header",children:"NitroFileHeader"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"sectionDataCHAR"}),(0,i.jsx)(r.td,{children:"Image data."}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_char#section-container",children:"ContainerSectionCHAR"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"sectionDataCPOS"}),(0,i.jsxs)(r.td,{children:["Dimension related. Does only exist if ",(0,i.jsx)(r.code,{children:"fileHeader.numberSections == 2"}),"."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_cpos#section-container",children:"ContainerSectionCPOS"})})]})]})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(r.h3,{id:"sections",children:"Sections"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_char",children:"Character"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_cpos",children:"Character Position?"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>a});var i=n(96540);const s={},t=i.createContext(s);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);