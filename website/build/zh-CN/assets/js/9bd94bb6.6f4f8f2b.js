"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5118],{19689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(85893),a=n(11151),l=n(74866),s=n(85162);const o={},i=void 0,u={id:"primitives/nft/web-app/transfer",title:"transfer",description:"The Wallet object comes from our quickstart template",source:"@site/../docs/7.primitives/nft/web-app/transfer.md",sourceDirName:"7.primitives/nft/web-app",slug:"/primitives/nft/web-app/transfer",permalink:"/zh-CN/primitives/nft/web-app/transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/web-app/transfer.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1709133591,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},c={},d=[];function f(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(l.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsxs)(s.Z,{value:"NFT Primitive",label:"Reference",default:!0,children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "nft.primitives.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_transfer\',\n  args: {\n    token_id: "1",\n    receiver_id: "bob.near"\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 1\n});\n'})}),(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]}),(0,r.jsxs)(s.Z,{value:"Paras",label:"Paras",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "x.paras.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_transfer\',\n  args: {\n    token_id: "490641",\n    receiver_id: "bob.near"\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 1\n});\n'})}),(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]}),(0,r.jsxs)(s.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "thomasettorreiv.mintbase1.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_transfer\',\n  args: {\n    token_id: "490641",\n    receiver_id: "bob.near"\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 1\n});\n'})}),(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Check how to also do this using ",(0,r.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/sdk/transfer",children:(0,r.jsx)(t.code,{children:"Mintbase JS"})})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),a=n(36905),l=n(12466),s=n(16550),o=n(20469),i=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function h(e){var t,n,a,l,s=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,h=f(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:h})})),v=b[0],j=b[1],x=p({queryString:u,groupId:d}),g=x[0],w=x[1],T=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),y=T[0],C=T[1],S=function(){var e=null!=g?g:y;return m({value:e,tabValues:h})?e:null}();return(0,o.Z)((function(){S&&j(S)}),[S]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);j(e),w(e),C(e)}),[w,C,h]),tabValues:h}}var b=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,i=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var l,s=i.indexOf(e.currentTarget)-1;n=null!=(l=i[s])?l:i[i.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,l=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},l,{className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function g(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=l.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=h(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(x,Object.assign({},e,t)),(0,j.jsx)(g,Object.assign({},e,t))]})}function T(e){var t=(0,b.Z)();return(0,j.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);