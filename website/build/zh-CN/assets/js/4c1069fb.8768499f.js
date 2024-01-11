"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7809],{24437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(85893),s=t(11151),a=t(42352);const r={id:"ipfs",title:"Image Uploader"},o=void 0,d={id:"bos/components/ipfs",title:"Image Uploader",description:"The IpfsImageUpload is a built-in component that enables users to directly upload an image to the InterPlanetary File System (IPFS).",source:"@site/../docs/bos/components/ipfsimageupload.md",sourceDirName:"bos/components",slug:"/bos/components/ipfs",permalink:"/zh-CN/bos/components/ipfs",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/ipfsimageupload.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1682457647,formattedLastUpdatedAt:"2023\u5e744\u670825\u65e5",frontMatter:{id:"ipfs",title:"Image Uploader"},sidebar:"integrate",previous:{title:"Widget",permalink:"/zh-CN/bos/components/widgets"},next:{title:"Files",permalink:"/zh-CN/bos/components/files"}},l={},c=[{value:"Example",id:"example",level:3}];function p(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"IpfsImageUpload"})," is a built-in component that enables users to directly upload an image to the InterPlanetary File System (IPFS)."]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(a.W,{id:"1",height:"200px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"State.init({\n  img: null,\n});\n\nreturn (\n  <div className='container row'>\n    <div>\n      Image upload: <br />\n      <IpfsImageUpload image={state.img} />\n    </div>\n    <div>\n      Raw State:\n      <pre>{JSON.stringify(state)}</pre>\n    </div>\n    <div className='mt-2'>\n      {state.img.cid && (\n        <img\n          src={`https://ipfs.near.social/ipfs/${state.img.cid}`}\n          alt='uploaded'\n        />\n      )}\n    </div>\n  </div>\n);\n"})})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},42352:(e,n,t)=>{t.d(n,{W:()=>o});var i=t(67294),s=t(16729),a=t(91262),r=t(85893);function o(e){var n=e.children,o=e.id,d=void 0===o?1:o,l=e.height,c=void 0===l?"160px":l;return(0,r.jsx)(a.Z,{fallback:(0,r.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(v){}var a=t(58613),o=a.Widget,l=a.useInitNear,p=t(2302).ZP,m=(0,i.useState)(e),h=m[0],u=m[1],g=l().initNear,f=(0,s.O)().selector;return(0,i.useEffect)((function(){g&&f&&g({networkId:"mainnet",selector:f})}),[g,f]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{class:"monaco",children:(0,r.jsx)(p,{height:c,value:h,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,r.jsxs)("div",{class:"code_iframe",children:[(0,r.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,r.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,r.jsx)("hr",{class:"preview-border"}),(0,r.jsx)("div",{class:"bootstrap-scope",children:(0,r.jsx)("div",{class:"vm-widget",children:(0,r.jsx)(o,{code:h},d)})})]})]})}})}}}]);