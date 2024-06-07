"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[7643],{66551:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(74848),s=i(28453);const r={title:"Enabling Reusable TMs",tags:["Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)"]},l="Enabling Reusable TMs",o={id:"generation-iv/guides/pt_hgss-reusabletms/pt_hgss-reusabletms",title:"Enabling Reusable TMs",description:"Author(s): Drayano (original), SpagoAsparago (reformatting).",source:"@site/docs/generation-iv/guides/pt_hgss-reusabletms/pt_hgss-reusabletms.md",sourceDirName:"generation-iv/guides/pt_hgss-reusabletms",slug:"/generation-iv/guides/pt_hgss-reusabletms/",permalink:"/docs/generation-iv/guides/pt_hgss-reusabletms/",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-iv/guides/pt_hgss-reusabletms/pt_hgss-reusabletms.md",tags:[{inline:!0,label:"Guide (Platinum)",permalink:"/docs/tags/guide-platinum"},{inline:!0,label:"Guide (HeartGold)",permalink:"/docs/tags/guide-heart-gold"},{inline:!0,label:"Guide (SoulSilver)",permalink:"/docs/tags/guide-soul-silver"}],version:"current",frontMatter:{title:"Enabling Reusable TMs",tags:["Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)"]},sidebar:"generation_iv_sidebar",previous:{title:"Adding New Pok\xe9 Marts",permalink:"/docs/generation-iv/guides/pt_hgss-pokemarts/"},next:{title:"Setting the Weather From a Script",permalink:"/docs/generation-iv/guides/pt_hgss-script_weather/"}},a={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Extracting the files",id:"extracting-the-files",level:2},{value:"Platinum",id:"platinum",level:3},{value:"HGSS",id:"hgss",level:3},{value:"Hex Editing",id:"hex-editing",level:2},{value:"Making TMs infinite",id:"making-tms-infinite",level:3},{value:"Removing the TM item count",id:"removing-the-tm-item-count",level:3},{value:"Reinserting the files",id:"reinserting-the-files",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"enabling-reusable-tms",children:"Enabling Reusable TMs"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Author(s): Drayano (original), SpagoAsparago (reformatting). ",(0,t.jsx)("br",{}),"\r\nResearch: Mikelan98, NextWorld, BagBoy.\r\nMikelan98 has requested that you give credit to him if you implement this in your hack."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is a guide on how to implement reusable TMs in Platinum and HGSS. The US versions of those games are used, so offsets may be not be the same if you're using a different version."}),"\n",(0,t.jsx)(n.p,{children:"The tools required are an hex editor and Tinke 0.9.2, or instead CrystalTile2 if you're using HGSS."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#section",children:"Extracting the files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#subsection-1",children:"Platinum"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#subsection-2",children:"HGSS"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#section-2",children:"Hex Editing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#subsection-1",children:"Making TMs infinte"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#subsection-2",children:"Removing the TM item count"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#section-3",children:"Reinserting the files"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"extracting-the-files",children:"Extracting the files"}),"\n",(0,t.jsx)(n.p,{children:"First you need to extract the relative files in order to perform the hex editing"}),"\n",(0,t.jsx)(n.h3,{id:"platinum",children:"Platinum"}),"\n",(0,t.jsxs)(n.p,{children:["For Platinum the files you need are ",(0,t.jsx)(n.em,{children:"arm9.bin"})," and ",(0,t.jsx)(n.em,{children:"overaly9_84"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Open your ROM in Tinke, search the file, select it and click the extract button."}),"\n",(0,t.jsx)(n.h3,{id:"hgss",children:"HGSS"}),"\n",(0,t.jsxs)(n.p,{children:["For HGSS you need to extract ",(0,t.jsx)(n.em,{children:"arm9.bin"})," and ",(0,t.jsx)(n.em,{children:"overlay_0015.bin"}),", but they are compressed unlike in Platinum hence the need for CystalTile2.\r\nOpen CrystalTile2 and then select File>Open and select your ROM. Then click the NDS icon in the top bar, which should open a window called ",(0,t.jsx)(n.em,{children:"NDS filesystem information"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(19790).A+"",width:"899",height:"569"})}),"\n",(0,t.jsxs)(n.p,{children:["Select the file you want to export, right click and click ",(0,t.jsx)(n.em,{children:"Extract (U)"}),", and save it somewhere.\r\nYou can also use the arm9.bin from your DSPRE project folder, which is already uncompressed."]}),"\n",(0,t.jsx)(n.h2,{id:"hex-editing",children:"Hex Editing"}),"\n",(0,t.jsx)(n.p,{children:"Load the files you extracted in a hex editor, then change the bytes according to the following steps, then save the files."}),"\n",(0,t.jsx)(n.h3,{id:"making-tms-infinite",children:"Making TMs infinite"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For Platinum, at offset ",(0,t.jsx)(n.code,{children:"0x865EB"})," in the arm9.bin change ",(0,t.jsx)(n.code,{children:"D1"})," to ",(0,t.jsx)(n.code,{children:"E0"})]}),"\n",(0,t.jsxs)(n.li,{children:["For HGSS, at ",(0,t.jsx)(n.code,{children:"0x825A7"})," in the arm9.bin change ",(0,t.jsx)(n.code,{children:"D1"})," to ",(0,t.jsx)(n.code,{children:"E0"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"removing-the-tm-item-count",children:"Removing the TM item count"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For Platinum, at ",(0,t.jsx)(n.code,{children:"0x4372"})," in overlay 84 change ",(0,t.jsx)(n.code,{children:"FF F7 83 FF"})," to ",(0,t.jsx)(n.code,{children:"00 00 00 00"})]}),"\n",(0,t.jsxs)(n.li,{children:["For HGSS,  at ",(0,t.jsx)(n.code,{children:"0x6239"})," in overlay 15 change ",(0,t.jsx)(n.code,{children:"D3"})," to ",(0,t.jsx)(n.code,{children:"E0"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reinserting-the-files",children:"Reinserting the files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For Platinum just open your ROM in Tinke again, search the files you previously extracted, select them and click the ",(0,t.jsx)(n.em,{children:"Change File"})," button to replace them with the ones you hex edited. Then save the ROM."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For HGSS, in the NDS filesystem information window, you can select the files you previously extracted, right click and this time click ",(0,t.jsx)(n.em,{children:"Compression"})," and select your own hex edited files. If you're using the arm9 from DSPRE project folder, you only need to click ",(0,t.jsx)(n.em,{children:"Import"})," instead. After you're done you can use ",(0,t.jsx)(n.code,{children:"File>Build ROM..."})," to save your ROM."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19790:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/tms_ct2screen-df0d05f8391a6e1fffae59c92e12487d.PNG"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);