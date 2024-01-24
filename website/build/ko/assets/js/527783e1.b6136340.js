"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5133],{97196:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=r(85893),s=r(11151),a=r(74866),l=r(85162),i=r(77229);const c={id:"count-near",title:"NEAR \uc22b\uc790 \uc138\uae30"},u=void 0,o={id:"tutorials/examples/count-near",title:"NEAR \uc22b\uc790 \uc138\uae30",description:"\uc774 \uc22b\uc790 \uc138\uae30 \uc608\uc81c\ub294 \uc22b\uc790\ub97c \uc800\uc7a5\ud558\uace0 increment, decrement, \uadf8\ub9ac\uace0 reset \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud558\ub294 \uce5c\uadfc\ud55c \ud0c8\uc911\uc559\ud654 \uc571\uc785\ub2c8\ub2e4",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/examples/count-near.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/count-near",permalink:"/ko/tutorials/examples/count-near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/count-near.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"count-near",title:"NEAR \uc22b\uc790 \uc138\uae30"},sidebar:"integrate",previous:{title:"Integrating Components",permalink:"/ko/develop/integrate/frontend-components"},next:{title:"\uae30\ubd80",permalink:"/ko/tutorials/examples/donation"}},d={},h=[{value:"\uc22b\uc790 \uc138\uae30 \uc2dc\uc791",id:"\uc22b\uc790-\uc138\uae30-\uc2dc\uc791",level:2},{value:"\uc22b\uc790 \uc138\uae30 \uc571\uacfc \uc0c1\ud638 \uc791\uc6a9",id:"\uc22b\uc790-\uc138\uae30-\uc571\uacfc-\uc0c1\ud638-\uc791\uc6a9",level:2},{value:"dApp\uc758 \uad6c\uc870",id:"dapp\uc758-\uad6c\uc870",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8",id:"\ucee8\ud2b8\ub799\ud2b8",level:3},{value:"\ud504\ub860\ud2b8\uc5d4\ub4dc",id:"\ud504\ub860\ud2b8\uc5d4\ub4dc",level:3},{value:"\ud14c\uc2a4\ud2b8",id:"\ud14c\uc2a4\ud2b8",level:2},{value:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8",id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8",level:3},{value:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8",id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\uc774 \uc22b\uc790 \uc138\uae30 \uc608\uc81c\ub294 \uc22b\uc790\ub97c \uc800\uc7a5\ud558\uace0 ",(0,t.jsx)(n.code,{children:"increment"}),", ",(0,t.jsx)(n.code,{children:"decrement"}),", \uadf8\ub9ac\uace0 ",(0,t.jsx)(n.code,{children:"reset"})," \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud558\ub294 \uce5c\uadfc\ud55c \ud0c8\uc911\uc559\ud654 \uc571\uc785\ub2c8\ub2e4"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(82193).Z+"",width:"935",height:"248"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uc22b\uc790-\uc138\uae30-\uc2dc\uc791",children:"\uc22b\uc790 \uc138\uae30 \uc2dc\uc791"}),"\n",(0,t.jsx)(n.p,{children:"\uc22b\uc790 \uc138\uae30\ub97c \uc2dc\uc791\ud558\ub294 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\uad8c\uc7a5:"})," Gitpod(\uc6f9 \uae30\ubc18 \ub300\ud654\ud615 \ud658\uacbd)\ub97c \ud1b5\ud574 \uc571 \uc0ac\uc6a9"]}),"\n",(0,t.jsx)(n.li,{children:"\ud504\ub85c\uc81d\ud2b8\ub97c \ub85c\uceec\ub85c \ubcf5\uc81c"}),"\n"]}),"\n",(0,t.jsxs)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Gitpod"}),(0,t.jsx)(n.th,{children:"\ub85c\uceec\ub85c \ubcf5\uc81c"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/js-counter.git",children:(0,t.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,t.jsxs)(n.td,{children:["\ud83c\udf10 ",(0,t.jsx)(n.code,{children:"https://github.com/near-examples/js-counter.git"})]})]})})]})}),(0,t.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Gitpod"}),(0,t.jsx)(n.th,{children:"\ub85c\uceec\ub85c \ubcf5\uc81c"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/rust-counter.git",children:(0,t.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,t.jsxs)(n.td,{children:["\ud83e\udd80 ",(0,t.jsx)(n.code,{children:"https://github.com/near-examples/rust-counter.git"})]})]})})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Gitpod\ub97c \uc120\ud0dd\ud558\uba74 \uc0c8 \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc774 \ucf54\ub4dc\uc640 \ud568\uaed8 \uc790\ub3d9\uc73c\ub85c \uc5f4\ub9bd\ub2c8\ub2e4. \uc7a0\uc2dc \uae30\ub2e4\ub9ac\uba74 \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \ud31d\uc5c5\ub429\ub2c8\ub2e4(\ud31d\uc5c5 \ucc3d\uc774 \ucc28\ub2e8\ub418\uc9c0 \uc54a\uc558\ub294\uc9c0 \ud655\uc778)."}),"\n",(0,t.jsxs)(n.p,{children:["\uc571\uc744 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0, \uc571\uc744 \ubcf5\uc81c\ud55c \ub514\ub809\ud130\ub9ac\ub97c \uc785\ub825\ud558\uace0 ",(0,t.jsx)(n.code,{children:"yarn"}),"\uc744 \ud1b5\ud574 \uc758\uc874\uc131(dependency)\uc744 \uc124\uce58\ud558\uba70, ",(0,t.jsx)(n.code,{children:"yarn start"}),"\ub97c \uc0ac\uc6a9\ud574 \uc2dc\uc791\ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd counter\nyarn\nyarn deploy\nyarn start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub7ec\uba74 \ucee8\ud2b8\ub799\ud2b8\uac00 ",(0,t.jsx)(n.strong,{children:"\ucef4\ud30c\uc77c"}),"\ub418\uc5b4 ",(0,t.jsx)(n.code,{children:"testnet"})," \ub124\ud2b8\uc6cc\ud06c\uc758 ",(0,t.jsx)(n.strong,{children:"\uacc4\uc815"}),"\uc5d0 ",(0,t.jsx)(n.strong,{children:"\ubc30\ud3ec"}),"\ub429\ub2c8\ub2e4. \uc644\ub8cc\ub418\uba74 \ube0c\ub77c\uc6b0\uc800 \ucc3d\uc774 \uc5f4\ub9bd\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uc22b\uc790-\uc138\uae30-\uc571\uacfc-\uc0c1\ud638-\uc791\uc6a9",children:"\uc22b\uc790 \uc138\uae30 \uc571\uacfc \uc0c1\ud638 \uc791\uc6a9"}),"\n",(0,t.jsxs)(n.p,{children:["\uacc4\uc18d\ud574\uc11c NEAR \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uc138\uc694. \uacc4\uc815\uc774 \uc5c6\ub294 \uacbd\uc6b0 \uc989\uc2dc \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778\ud55c \ud6c4 ",(0,t.jsx)(n.code,{children:"+"})," \ubc0f ",(0,t.jsx)(n.code,{children:"-"})," \ubc84\ud2bc\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc22b\uc790\ub97c \ub192\uc774\uac70\ub098 \ub0ae\ucda5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c Gameboy \ubc84\ud2bc\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc7ac\uc124\uc815\ud558\uace0 \uce74\uc6b4\ud130\uac00 \ub208\uc744 \uae5c\ubc15\uc774\uac8c \ub9cc\ub4dc\uc138\uc694!"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"img",src:r(12770).Z+"",width:"935",height:"526"})," ",(0,t.jsx)(n.em,{children:"Counter \uc571\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"dapp\uc758-\uad6c\uc870",children:"dApp\uc758 \uad6c\uc870"}),"\n",(0,t.jsx)(n.p,{children:"\uc774\uc81c dApp\uc774 \ubb34\uc5c7\uc744 \ud558\ub294\uc9c0 \uc774\ud574\ud588\uc73c\ubbc0\ub85c \uadf8 \uad6c\uc870\ub97c \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud504\ub860\ud2b8\uc5d4\ub4dc \ucf54\ub4dc\ub294 ",(0,t.jsx)(n.code,{children:"/frontend"})," \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub294 ",(0,t.jsx)(n.code,{children:"/contract"})," \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\ucee8\ud2b8\ub799\ud2b8",children:"\ucee8\ud2b8\ub799\ud2b8"}),"\n",(0,t.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uc5d0\ub294 ",(0,t.jsx)(n.code,{children:"get_num"}),", ",(0,t.jsx)(n.code,{children:"increment"}),", ",(0,t.jsx)(n.code,{children:"decrement"}),", \uadf8\ub9ac\uace0 ",(0,t.jsx)(n.code,{children:"reset"}),"\uc774\ub77c\ub294 \ub124 \uac00\uc9c0 \uba54\uc11c\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"get_num"})," \uba54\uc11c\ub4dc\ub294 \ud604\uc7ac \uac12\uc744 \ubc18\ud658\ud558\uace0, \ub098\uba38\uc9c0 \uba54\uc11c\ub4dc\ub4e4\uc740 \uac12\uc744 \uc218\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(i.O2,{children:[(0,t.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,t.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/js-counter/blob/master/contract/src/contract.ts",start:"3",end:"29"})}),(0,t.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"5",end:"36"})})]}),"\n",(0,t.jsx)(n.h3,{id:"\ud504\ub860\ud2b8\uc5d4\ub4dc",children:"\ud504\ub860\ud2b8\uc5d4\ub4dc"}),"\n",(0,t.jsxs)(n.p,{children:["\ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \ud558\ub098\uc758 HTML \ud30c\uc77c(",(0,t.jsx)(n.code,{children:"/index.html"}),")\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub418\ub294 \uad6c\uc131 \uc694\uc18c\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc6f9\uc0ac\uc774\ud2b8\uc758 \ub85c\uc9c1\uc740 ",(0,t.jsx)(n.code,{children:"/assets/js/index.js"}),"\uc5d0 \uc874\uc7ac\ud558\uba70 ",(0,t.jsx)(n.code,{children:"/assets/js/near/utils.js"}),"\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\uc640 \ud1b5\uc2e0\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ucf54\ub4dc\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"/assets/js/index.js"}),"\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(i.O2,{children:(0,t.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,t.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/js-counter/blob/master/frontend/index.js",start:"10",end:"21"})})}),"\n",(0,t.jsxs)(n.p,{children:["\uc704 \ucf54\ub4dc\uc5d0\uc11c, \uc571\uc774 \uc2dc\uc791\ub420 \ub54c \uc0ac\uc6a9\uc790\uac00 \uc774\ubbf8 \ub85c\uadf8\uc778\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0 ",(0,t.jsx)(n.code,{children:"signedInFlow()"})," \ub610\ub294 ",(0,t.jsx)(n.code,{children:"signedOutFlow()"}),"\ub97c \uc2e4\ud589\ud568\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ud14c\uc2a4\ud2b8",children:"\ud14c\uc2a4\ud2b8"}),"\n",(0,t.jsxs)(n.p,{children:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \ub2e8\uc704(unit) \ubc0f \ud1b5\ud569(integration)\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uc720\ud615\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30 \uc804\uc5d0, ",(0,t.jsx)(n.code,{children:"yarn test"})," \uba85\ub839\uc744 \ud1b5\ud574 dApp\uc5d0 \uc788\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\uc138\uc694."]}),"\n",(0,t.jsx)(n.h3,{id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8",children:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8"}),"\n",(0,t.jsx)(n.p,{children:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ub0b4 \uac1c\ubcc4 \ud568\uc218\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ud604\uc7ac Rust\uc5d0\uc11c\ub9cc \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(i.O2,{children:(0,t.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"48",end:"69"})})}),"\n",(0,t.jsx)(n.h3,{id:"\ud1b5\ud569-\ud14c\uc2a4\ud2b8",children:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8"}),"\n",(0,t.jsxs)(n.p,{children:["\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \uc77c\ubc18\uc801\uc73c\ub85c Javascript\ub85c \uc791\uc131\ub429\ub2c8\ub2e4. \uadf8\ub4e4\uc740 \uc790\ub3d9\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub294 \ud604\uc2e4\uc801\uc778 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \uc0c1\ud638 \uc791\uc6a9\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"integration-tests/"}),"\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"counter"}),"\uc5d0 \ub300\ud55c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(i.O2,{children:(0,t.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,t.jsx)(i.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/js-counter/blob/master/integration-tests/src/main.ava.ts",start:"37",end:"61"})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,t.jsxs)(n.p,{children:["\ubc30\uc6b8 \uc218 \uc788\ub294 \uc88b\uc740 \ubc29\ubc95\uc740 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"increment"})," \ubc0f ",(0,t.jsx)(n.code,{children:"decrement"}),"\uc5d0 \uc778\uc790\ub97c \ucd94\uac00\ud558\uc5ec, \uc0ac\uc6a9\uc790\uac00 \ubcc0\ud654\uc2dc\ud0ac \uac12\uc758 \uc815\ub3c4\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub3c4\ub85d \uc218\uc815\ud574 \ubcf4\uc138\uc694. \uc774\ub97c \uc704\ud574\uc11c\ub294 ",(0,t.jsx)(n.a,{href:"/ko/develop/contracts/anatomy",children:"\ub0b4\ubd80 \uad6c\uc870"})," \ubc0f ",(0,t.jsx)(n.a,{href:"/ko/develop/contracts/storage",children:"\uc2a4\ud1a0\ub9ac\uc9c0"})," \uc139\uc158\uc758 \uc9c0\uc2dd\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),s=r(36905),a=r(12466),l=r(16550),i=r(20469),c=r(91980),u=r(67392),o=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,a=(0,l.k6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:s});return[(0,c._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(a.location.search);n.set(i,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[i,a])]}function j(e){var n,r,s,a,l=e.defaultValue,c=e.queryString,u=void 0!==c&&c,d=e.groupId,j=h(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:l,tabValues:j})})),v=m[0],b=m[1],g=x({queryString:u,groupId:d}),f=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,o.Nk)(n),s=r[0],a=r[1],[s,(0,t.useCallback)((function(e){n&&a.set(e)}),[n,a])]),k=w[0],E=w[1],I=function(){var e=null!=f?f:k;return p({value:e,tabValues:j})?e:null}();return(0,i.Z)((function(){I&&b(I)}),[I]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),E(e)}),[y,E,j]),tabValues:j}}var m=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function g(e){var n=e.className,r=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,c=[],u=(0,a.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,r=c.indexOf(n),s=i[r].value;s!==t&&(u(n),l(s))},d=function(e){var n,r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var t,s=c.indexOf(e.currentTarget)+1;r=null!=(t=c[s])?t:c[0];break;case"ArrowLeft":var a,l=c.indexOf(e.currentTarget)-1;r=null!=(a=c[l])?a:c[c.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:o},a,{className:(0,s.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function f(e){var n=e.lazy,r=e.children,s=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=a.find((function(e){return e.props.value===s}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function y(e){var n=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(g,Object.assign({},e,n)),(0,b.jsx)(f,Object.assign({},e,n))]})}function w(e){var n=(0,m.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>o,O2:()=>c,SQ:()=>u});r(67294);var t=r(74866),s=r(85162),a=r(95665),l=r.n(a),i=r(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,t=(r.children,r.url),s=r.start,a=r.end,l=r.fname;if(e.type===o)return o({url:t,start:s,end:a,language:n,fname:l});return e}(e,r)})),1==n.length?(0,i.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function o(e){var n=e.url,r=e.start,t=e.end,s=e.language,a=e.fname,c=n+"#";return r&&t&&(c+="L"+r+"-L"+t+"#"),(0,i.jsx)(l(),{language:s,fname:a,children:c})}},82193:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/count-on-near-banner-2df2978ef988be400aafd5e0f99878be.png"},12770:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/count-on-near-4c3bca89fb498ba9e02547eeb320d02a.png"}}]);