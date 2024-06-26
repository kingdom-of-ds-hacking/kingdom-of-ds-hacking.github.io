"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[1297],{4945:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var i=n(74848),a=n(28453);const l={},r='CHAR ("RHAC") - Character',t={id:"universal/resources/nitro/graphics_2d/section_char",title:'CHAR ("RHAC") - Character',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/section_char.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/section_char",permalink:"/docs/universal/resources/nitro/graphics_2d/section_char",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_char.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'CEBK ("KBEC") - Cell Bank',permalink:"/docs/universal/resources/nitro/graphics_2d/section_cebk"},next:{title:'CPOS ("SOPC") - (Character Position?)',permalink:"/docs/universal/resources/nitro/graphics_2d/section_cpos"}},c={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"CHAR Container",id:"char-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Pixel Data",id:"pixel-data",level:3},{value:"Color",id:"color",level:4},{value:"Layout",id:"layout",level:4},{value:"Dimensions",id:"dimensions",level:3},{value:"Mapping Type",id:"mapping-type",level:3},{value:"Flags",id:"flags",level:3},{value:"Files",id:"files",level:3},{value:"TODO",id:"todo",level:2}];function d(s){const e={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",math:"math",mermaid:"mermaid",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",msub:"msub",mtable:"mtable",mtd:"mtd",mtr:"mtr",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"char-rhac---character",children:'CHAR ("RHAC") - Character'}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Author(s): ",(0,i.jsx)(e.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,i.jsx)("br",{}),"\r\nResearch: ",(0,i.jsx)(e.a,{href:"https://problemkaputt.de",children:"NOCASH"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/Gonhex",children:"Gonhex"})]}),"\n"]}),"\n",(0,i.jsx)(e.mermaid,{value:"flowchart BT;\r\n    NCGR(N. Character Graphic R.)--\x3eG2D(Graphics 2D);\r\n    CHAR(Character)--\x3eNCGR;"}),"\n",(0,i.jsxs)(e.p,{children:["The character section stores the sprite-image in form of indices to colors within a palette. The array layout is usually a tile map where each tile has a size of ",(0,i.jsx)(e.code,{children:"8 * 8 pixels"}),", but can also be a line buffer which maps the image directly to the target."]}),"\n",(0,i.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#char-rhac---character",children:'CHAR ("RHAC") - Character'}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#char-container",children:"CHAR Container"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#pixel-data",children:"Pixel Data"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#color",children:"Color"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#layout",children:"Layout"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#dimensions",children:"Dimensions"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#mapping-type",children:"Mapping Type"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#flags",children:"Flags"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#todo",children:"TODO"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(e.h3,{id:"section-container",children:"Section Container"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"struct ContainerSectionCHAR\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerCHAR sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Field Name"}),(0,i.jsx)(e.th,{children:"Description"}),(0,i.jsx)(e.th,{children:"Data Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sectionHeader"}),(0,i.jsxs)(e.td,{children:["Header of this section. ",(0,i.jsx)(e.code,{children:'sectionHeader.signature = "RAHC"'}),"."]}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"/docs/universal/resources/nitro/#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sectionData"}),(0,i.jsx)(e.td,{children:"Content of this section."}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"#char-container",children:"ContainerCHAR"})})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"char-container",children:"CHAR Container"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"struct ContainerCHAR\r\n{\r\n    // header\r\n    /* 0x00 */ int16_t heightInTiles;\r\n    /* 0x02 */ int16_t widthInTiles;\r\n    /* 0x04 */ uint32_t pixelFormat;\r\n    /* 0x08 */ uint16_t mappingType0;\r\n    /* 0x0A */ uint16_t mappingType1;\r\n    /* 0x0C */ uint32_t flags;\r\n    /* 0x10 */ uint32_t lengthDataImage;\r\n    /* 0x14 */ uint32_t offsetDataImage;\r\n    \r\n    // data\r\n    /* offsetDataImage */ uint8_t dataImage[lengthDataImage];\r\n}; // entry size = offsetDataImage + lengthDataImage\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Field Name"}),(0,i.jsx)(e.th,{children:"Description"}),(0,i.jsx)(e.th,{children:"Data Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"heightInTiles"}),(0,i.jsxs)(e.td,{children:["Height of the sprite or ",(0,i.jsx)(e.code,{children:"-1"}),", see ",(0,i.jsx)(e.a,{href:"#dimensions",children:"Dimensions"}),"."]}),(0,i.jsx)(e.td,{children:"int16_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"widthInTiles"}),(0,i.jsxs)(e.td,{children:["Width of the sprite or ",(0,i.jsx)(e.code,{children:"-1"}),", see ",(0,i.jsx)(e.a,{href:"#dimensions",children:"Dimensions"}),"."]}),(0,i.jsx)(e.td,{children:"int16_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"pixelFormat"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:"== 3"}),": 4 bits per pixel. ",(0,i.jsx)(e.code,{children:"== 4"}),": 8 bits per pixel."]}),(0,i.jsx)(e.td,{children:"uint32_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"mappingType0"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:"== 0"}),": 2D mapping, else: 1D mapping(?)."]}),(0,i.jsx)(e.td,{children:"uint16_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"mappingType1"}),(0,i.jsxs)(e.td,{children:["Sometimes used in combination with ",(0,i.jsx)(e.code,{children:"mappingType0"}),"(?)."]}),(0,i.jsx)(e.td,{children:"uint16_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"flags"}),(0,i.jsxs)(e.td,{children:["Binary flags for different purposes. See ",(0,i.jsx)(e.a,{href:"#flags",children:"Flags"}),"."]}),(0,i.jsx)(e.td,{children:"uint32_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"lengthDataImage"}),(0,i.jsx)(e.td,{children:"Length of the image data section in bytes."}),(0,i.jsx)(e.td,{children:"uint32_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"offsetDataImage"}),(0,i.jsxs)(e.td,{children:["Offset to the image data section relative to ",(0,i.jsx)(e.code,{children:"ContainerCHAR"}),"."]}),(0,i.jsx)(e.td,{children:"uint32_t"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"dataImage"}),(0,i.jsxs)(e.td,{children:["Array holding all color indices to create an image, see ",(0,i.jsx)(e.a,{href:"#pixel-data",children:"Pixel Data"}),"."]}),(0,i.jsx)(e.td,{children:"uint8_t[]"})]})]})]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(e.h3,{id:"pixel-data",children:"Pixel Data"}),"\n",(0,i.jsx)(e.h4,{id:"color",children:"Color"}),"\n",(0,i.jsxs)(e.p,{children:["The character graphic stores indices to colors on a ",(0,i.jsx)(e.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pltt",children:"palette"}),". This palette provides either 16 or 256 colors. The density of indices depends on the palette size. For a value of ",(0,i.jsx)(e.code,{children:"0...15"})," only 4 bits (1 nibble) are needed. This allows to squeeze two indices into one byte, reducing the overall size by half."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"pixelFormat == 3"}),": use 16 colors"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"pixelFormat == 4"}),": use 256 colors"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"layout",children:"Layout"}),"\n",(0,i.jsxs)(e.p,{children:["The 2D engine uses a tile based system. The pixel layout in the file represents this and can be imagined as a box with a width of 8 pixels and an infinite length. The data is written line by line into this box. Each tile can now be accessed at ",(0,i.jsx)(e.code,{children:"y * 8"}),". Now we have 1D mapped tiles. For 2D mapping these tiles are also layed out row by row."]}),"\n",(0,i.jsx)(e.p,{children:'If the image is to be used by the 3D engine, the "infinite length box" from before becomes a bitmap which has the dimensions of the image. There are no tiles in this case.'}),"\n",(0,i.jsx)(e.h3,{id:"dimensions",children:"Dimensions"}),"\n",(0,i.jsxs)(e.p,{children:["The first two entries of ",(0,i.jsx)(e.a,{href:"#char-container",children:"ContainerCHAR"})," define the size of the sprite in tiles. To get the pixel values, multiply them with the side length of a tile (which is 8)."]}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mtable,{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em",children:[(0,i.jsxs)(e.mtr,{children:[(0,i.jsx)(e.mtd,{className:"mtr-glue"}),(0,i.jsx)(e.mtd,{children:(0,i.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"l"})]})]})]})})}),(0,i.jsx)(e.mtd,{children:(0,i.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mrow,{}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"})]})]}),(0,i.jsx)(e.mo,{children:"\u22c5"}),(0,i.jsx)(e.mn,{children:"8"})]})})}),(0,i.jsx)(e.mtd,{className:"mtr-glue"}),(0,i.jsx)(e.mtd,{className:"mml-eqn-num"})]}),(0,i.jsxs)(e.mtr,{children:[(0,i.jsx)(e.mtd,{className:"mtr-glue"}),(0,i.jsx)(e.mtd,{children:(0,i.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"w"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"l"})]})]})]})})}),(0,i.jsx)(e.mtd,{children:(0,i.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mrow,{}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"w"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"})]})]}),(0,i.jsx)(e.mo,{children:"\u22c5"}),(0,i.jsx)(e.mn,{children:"8"})]})})}),(0,i.jsx)(e.mtd,{className:"mtr-glue"}),(0,i.jsx)(e.mtd,{className:"mml-eqn-num"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{align}\n    height_{pixel} &= height_{tiles}\\cdot 8\\\\\n    width_{pixel} &= width_{tiles}\\cdot 8\n\\end{align}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,i.jsxs)(e.span,{className:"mtable",children:[(0,i.jsx)(e.span,{className:"col-align-r",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.75em"},children:[(0,i.jsxs)(e.span,{style:{top:"-3.91em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})]}),(0,i.jsxs)(e.span,{style:{top:"-2.41em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.25em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"col-align-l",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.75em"},children:[(0,i.jsxs)(e.span,{style:{top:"-3.91em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"es"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mord",children:"8"})]})]}),(0,i.jsxs)(e.span,{style:{top:"-2.41em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"es"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mord",children:"8"})]})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.25em"},children:(0,i.jsx)(e.span,{})})})]})})]})]}),(0,i.jsx)(e.span,{className:"tag",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.75em"},children:[(0,i.jsxs)(e.span,{style:{top:"-3.75em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.84em"}}),(0,i.jsx)(e.span,{className:"eqn-num"})]}),(0,i.jsxs)(e.span,{style:{top:"-2.25em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.84em"}}),(0,i.jsx)(e.span,{className:"eqn-num"})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.25em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})}),"\n",(0,i.jsxs)(e.p,{children:["Sometimes the width and height values are both set to ",(0,i.jsx)(e.code,{children:"-1"}),". In this case the image itself has no size and the ",(0,i.jsx)(e.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_cpos",children:"CPOS section"})," is not part of the file. To display the sprite anyway, a width of four tiles often makes the image recognizable. The real image is constructed by the ",(0,i.jsx)(e.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncer",children:"cell runtime"}),", which picks the needed tiles and positions them."]}),"\n",(0,i.jsx)(e.h3,{id:"mapping-type",children:"Mapping Type"}),"\n",(0,i.jsxs)(e.p,{children:["These values are ",(0,i.jsx)(e.code,{children:"0"}),", if the image uses 2D mapping (positive values in ",(0,i.jsx)(e.code,{children:"heightInTiles"})," an ",(0,i.jsx)(e.code,{children:"widhtInTiles"}),"). Both dimension values ",(0,i.jsx)(e.code,{children:"== -1"})," indicate 1D mapping. In this case ",(0,i.jsx)(e.code,{children:"mappingType0"})," usually has a value like ",(0,i.jsx)(e.code,{children:"0x10"}),". In the most cases, the ",(0,i.jsx)(e.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncer",children:"cell runtime"})," indexes 1D mapped tiles."]}),"\n",(0,i.jsx)(e.h3,{id:"flags",children:"Flags"}),"\n",(0,i.jsx)(e.p,{children:"Apply properties to the sprite."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"(flags & 0x00000001) > 0"}),": Use a line buffer instead of tiles."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"(flags & 0x00000100) > 0"}),": Unknown. Maybe related to ",(0,i.jsx)(e.a,{href:"#mapping-type",children:"Mapping Type"}),"?"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"files",children:"Files"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncgr",children:"Nitro Character Graphic Runtime"})}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"todo",children:"TODO"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'Research and document "mappingType"'}),"\n"]})]})}function m(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(d,{...s})}):d(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>t});var i=n(96540);const a={},l=i.createContext(a);function r(s){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:r(s.components),i.createElement(l.Provider,{value:e},s.children)}}}]);