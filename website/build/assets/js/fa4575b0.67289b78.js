"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7655],{60998:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(85893),i=t(11151);const a={id:"gas",title:"Gas"},r=void 0,o={id:"concepts/basics/transactions/gas",title:"Gas",description:"On every transaction you send to the network NEAR charges you a fee (aka gas fee). This fee is used to indirectly pay the people that keep the network infrastructure, and to incentivize developers of smart contracts.",source:"@site/../docs/1.concepts/basics/transactions/gas.md",sourceDirName:"1.concepts/basics/transactions",slug:"/concepts/basics/transactions/gas",permalink:"/concepts/basics/transactions/gas",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/transactions/gas.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{id:"gas",title:"Gas"},sidebar:"concepts",previous:{title:"Overview",permalink:"/concepts/basics/transactions/overview"},next:{title:"Gas - Advanced",permalink:"/concepts/basics/transactions/gas-advanced"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"1. Gas as a Developer Incentive",id:"1-gas-as-a-developer-incentive",level:3},{value:"2. Free Transactions",id:"2-free-transactions",level:3},{value:"Gas Units &amp; Gas Price",id:"gas-units--gas-price",level:2},{value:"Gas Units",id:"gas-units",level:3},{value:"Gas Price",id:"gas-price",level:3},{value:"Translating Gas to Computational Resources",id:"thinking-in-gas",level:2},{value:"The cost of common actions",id:"the-cost-of-common-actions",level:2},{value:"How do I buy gas?",id:"how-do-i-buy-gas",level:2},{value:"Attach extra gas; get refunded!",id:"attach-extra-gas-get-refunded",level:2},{value:"What about Prepaid Gas?",id:"what-about-prepaid-gas",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["On every transaction you send to the network NEAR charges you a fee (aka ",(0,n.jsx)(s.strong,{children:"gas fee"}),"). This fee is used to indirectly pay the ",(0,n.jsx)(s.a,{href:"/concepts/basics/validators",children:"people"})," that keep the network infrastructure, and to incentivize developers of smart contracts."]}),"\n",(0,n.jsx)(s.p,{children:"Gas is a fascinating topic that touches everyone in the NEAR ecosystem, here is a brief summary:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["A small fee is charged on every transaction to indirectly ",(0,n.jsx)(s.strong,{children:"pay the validators"})," by burning a part of the total token supply."]}),"\n",(0,n.jsxs)(s.li,{children:["This fee ",(0,n.jsx)(s.strong,{children:"prevents spamming"})," the network with useless transactions."]}),"\n",(0,n.jsxs)(s.li,{children:["Read-only methods do not ",(0,n.jsx)(s.strong,{children:"result in fees for the user"}),", instead, the validator absorbs the cost."]}),"\n",(0,n.jsxs)(s.li,{children:["In transaction involving a contract, ",(0,n.jsx)(s.strong,{children:"30% of the fee"})," goes to the contract as a ",(0,n.jsx)(s.strong,{children:"developer incentive"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Fees are measured in ",(0,n.jsx)(s.strong,{children:"gas units"})," but paid in $NEAR."]}),"\n",(0,n.jsxs)(s.li,{children:["Gas units are deterministic: the ",(0,n.jsx)(s.strong,{children:"same transaction"})," costs the ",(0,n.jsx)(s.strong,{children:"same gas units"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Gas units are transformed to $NEAR by multiplying for a ",(0,n.jsx)(s.strong,{children:"gas price"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.strong,{children:"gas price variates"})," smoothly from block to block."]}),"\n",(0,n.jsxs)(s.li,{children:["Gas can be thought as a ",(0,n.jsx)(s.strong,{children:"wall time"}),": ",(0,n.jsx)(s.code,{children:"1 Tgas"})," ~ ",(0,n.jsx)(s.code,{children:"1 ms"})," of compute time."]}),"\n",(0,n.jsxs)(s.li,{children:["You can attach a ",(0,n.jsxs)(s.strong,{children:["maximum of ",(0,n.jsx)(s.code,{children:"300Tgas"})]})," to a transaction."]}),"\n",(0,n.jsxs)(s.li,{children:["Attaching extra gas does ",(0,n.jsx)(s.strong,{children:"NOT"})," make the transaction faster, unused gas is ",(0,n.jsx)(s.strong,{children:"simply returned"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Contract developers can ",(0,n.jsx)(s.strong,{children:"prepay gas"})," for their users."]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(s.p,{children:["When you send a transaction to the NEAR network different ",(0,n.jsx)(s.a,{href:"/concepts/basics/validators",children:"validators"})," process it using their own infrastructure."]}),"\n",(0,n.jsx)(s.p,{children:"Maintaining the infrastructure up and running is important to keep the network healthy, but represents a significant cost for the validator."}),"\n",(0,n.jsxs)(s.p,{children:["As many other networks, NEAR ",(0,n.jsx)(s.strong,{children:"pays the validators"})," for their job. Also like many other networks, users have to pay a small ",(0,n.jsx)(s.strong,{children:"fee"})," (aka ",(0,n.jsx)(s.strong,{children:"gas fee"}),") on every transaction. But instead of giving the gas fee to the validators, validators receive their reward independent from the gas fees. This topic is discussed in more details in the ",(0,n.jsx)(s.a,{href:"/concepts/basics/validators",children:"validators"})," section."]}),"\n",(0,n.jsx)(s.p,{children:"In addition, NEAR implements two unique features with respect to gas fees:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Sharing fees with developers"}),"\n",(0,n.jsxs)(s.li,{children:["Allowing for ",(0,n.jsx)(s.strong,{children:"free"})," transactions"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"1-gas-as-a-developer-incentive",children:"1. Gas as a Developer Incentive"}),"\n",(0,n.jsx)(s.p,{children:"Something unique to NEAR is that the GAS is not used to pay validators. In transactions where calling a contract would incur a gas fee, the fee is actually divided as follows:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"30% goes to the smart contract."}),"\n",(0,n.jsx)(s.li,{children:"70% is burned."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In this way, NEAR uses the gas to also ",(0,n.jsx)(s.strong,{children:"incentive development of dApps"})," in the ecosystem."]}),"\n",(0,n.jsx)(s.h3,{id:"2-free-transactions",children:"2. Free Transactions"}),"\n",(0,n.jsxs)(s.p,{children:["Another unique feature of NEAR is that it allows to call ",(0,n.jsx)(s.code,{children:"read-only"})," methods in smart contracts for free, without even needing a NEAR account."]}),"\n",(0,n.jsx)(s.p,{children:"In such case, it is the validators who absorb the gas cost."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"gas-units--gas-price",children:"Gas Units & Gas Price"}),"\n",(0,n.jsx)(s.p,{children:"On every transaction NEAR users get charged a small $NEAR fee, which has to be paid upfront. However, transaction fees are not computed directly in $NEAR."}),"\n",(0,n.jsx)(s.h3,{id:"gas-units",children:"Gas Units"}),"\n",(0,n.jsxs)(s.p,{children:["Internally, the computation is done using ",(0,n.jsx)(s.strong,{children:"gas units"})," which are ",(0,n.jsx)(s.strong,{children:"deterministic"}),", meaning that a given operation will always cost the ",(0,n.jsx)(s.strong,{children:"same amount of gas"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"gas-price",children:"Gas Price"}),"\n",(0,n.jsxs)(s.p,{children:["To determine the actual $NEAR fee the gas of all operations done by the transaction are added up are multiplied by a ",(0,n.jsx)(s.strong,{children:"gas price"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The gas price is not fixed: it is ",(0,n.jsx)(s.strong,{children:"recalculated each block"})," depending on network demand. If the previous block is more than half full the price goes up, otherwise it goes down."]}),"\n",(0,n.jsx)(s.p,{children:"The price cannot change by more than 1% each block and bottoms out at a price that's configured by the network (currently 100 million yocto NEAR)."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"thinking-in-gas",children:"Translating Gas to Computational Resources"}),"\n",(0,n.jsx)(s.p,{children:"Gas units have been carefully calculated to work out to some easy-to-think-in numbers:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"1 TGas"})," (10\xb9\xb2 gas units) \u2248 ",(0,n.jsx)(s.strong,{children:"1 millisecond"}),' of "compute" time.']}),"\n",(0,n.jsxs)(s.li,{children:["This represents ",(0,n.jsx)(s.strong,{children:"0.1 milliNEAR"})," (using the ",(0,n.jsx)(s.a,{href:"#how-is-the-gas-price-computed",children:"minimum gas price"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["This ",(0,n.jsx)(s.code,{children:"1ms"})," is a rough but useful approximation. However, gas units encapsulate not only compute/CPU time but also bandwidth/network time and storage/IO time."]}),"\n",(0,n.jsx)(s.p,{children:"Via a governance mechanism, system parameters might be tweaked, shifting the mapping between TGas and milliseconds in the future."}),"\n",(0,n.jsx)(s.admonition,{title:"1s Block Production",type:"tip",children:(0,n.jsxs)(s.p,{children:["NEAR imposes a ",(0,n.jsx)(s.a,{href:"/api/rpc/setup#protocol-config",children:"maximum amount of gas"})," per block to ensure that a block is generated approx. every second."]})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"the-cost-of-common-actions",children:"The cost of common actions"}),"\n",(0,n.jsxs)(s.p,{children:["To give you a starting point for what to expect for costs on NEAR, the table below lists the cost of some common actions in TGas and milliNEAR (at the ",(0,n.jsx)(s.a,{href:"#how-is-the-gas-price-computed",children:"minimum gas price"}),")."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Operation"}),(0,n.jsx)(s.th,{children:"TGas"}),(0,n.jsx)(s.th,{children:"fee (mN)"}),(0,n.jsx)(s.th,{children:"fee (\u24c3)"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Create Account"}),(0,n.jsx)(s.td,{children:"0.42"}),(0,n.jsx)(s.td,{children:"0.042"}),(0,n.jsx)(s.td,{children:"4.2\u2a0910\u207b\u2075"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Send Funds"}),(0,n.jsx)(s.td,{children:"0.45"}),(0,n.jsx)(s.td,{children:"0.045"}),(0,n.jsx)(s.td,{children:"4.5\u2a0910\u207b\u2075"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Stake"}),(0,n.jsx)(s.td,{children:"0.50"}),(0,n.jsx)(s.td,{children:"0.050"}),(0,n.jsx)(s.td,{children:"5.0\u2a0910\u207b\u2075"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Add Full Access Key"}),(0,n.jsx)(s.td,{children:"0.42"}),(0,n.jsx)(s.td,{children:"0.042"}),(0,n.jsx)(s.td,{children:"4.2\u2a0910\u207b\u2075"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Delete Key"}),(0,n.jsx)(s.td,{children:"0.41"}),(0,n.jsx)(s.td,{children:"0.041"}),(0,n.jsx)(s.td,{children:"4.1\u2a0910\u207b\u2075"})]})]})]}),"\n",(0,n.jsxs)(t,{class:"info",children:[(0,n.jsx)("summary",{children:"Where do these numbers come from?"}),(0,n.jsxs)(s.p,{children:["NEAR is ",(0,n.jsx)(s.a,{href:"https://github.com/near/nearcore/blob/master/core/primitives/res/runtime_configs/parameters.yaml",children:"configured"})," with base costs. An example:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"  transfer_cost: {\n    send_sir:     115123062500,\n    send_not_sir: 115123062500,\n    execution:    115123062500\n  }\n"})}),(0,n.jsx)(s.p,{children:'The "sir" here stands for "sender is receiver". Yes, these are all identical, but that could change in the future.'}),(0,n.jsxs)(s.p,{children:["When you make a request to transfer funds, NEAR immediately deducts the appropriate ",(0,n.jsx)(s.code,{children:"send"})," amount from your account. Then it creates a ",(0,n.jsx)(s.em,{children:"receipt"}),", an internal book-keeping mechanism to facilitate NEAR's asynchronous, sharded design (if you're coming from Ethereum, forget what you know about Ethereum's receipts, as they're completely different). Creating a receipt has its own associated costs:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"  action_receipt_creation_config: {\n    send_sir:     108059500000,\n    send_not_sir: 108059500000,\n    execution:    108059500000\n  }\n"})}),(0,n.jsxs)(s.p,{children:["You can query this value by using the ",(0,n.jsx)(s.a,{href:"/api/rpc/setup#protocol-config",children:(0,n.jsx)(s.code,{children:"protocol_config"})})," RPC endpoint and search for ",(0,n.jsx)(s.code,{children:"action_receipt_creation_config"}),"."]}),(0,n.jsxs)(s.p,{children:["The appropriate ",(0,n.jsx)(s.code,{children:"send"})," amount for creating this receipt is also immediately deducted from your account."]}),(0,n.jsxs)(s.p,{children:['The "transfer" action won\'t be finalized until the next block. At this point, the ',(0,n.jsx)(s.code,{children:"execution"})," amount for each of these actions will be deducted from your account (something subtle: the gas units on this next block could be multiplied by a gas price that's up to 1% different, since gas price is recalculated on each block). Adding it all up to find the total transaction fee:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"    (transfer_cost.send_not_sir  + action_receipt_creation_config.send_not_sir ) * gas_price_at_block_1 +\n    (transfer_cost.execution + action_receipt_creation_config.execution) * gas_price_at_block_2\n"})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"how-do-i-buy-gas",children:"How do I buy gas?"}),"\n",(0,n.jsx)(s.p,{children:"You don't directly buy gas; you attach tokens to transactions."}),"\n",(0,n.jsxs)(s.p,{children:["If you're coming from Ethereum, you may be used to the idea of paying a higher gas price to get your transaction processed faster. In NEAR, ",(0,n.jsx)(s.strong,{children:"gas costs are deterministic"}),", and you ",(0,n.jsx)(s.strong,{children:"can't pay extra"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["For basic operations like transfers the gas needed is easy to calculate ahead of time, so it's ",(0,n.jsx)(s.strong,{children:"automatically attached for you"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Function calls are more complex and need you to attach an explicit amount of gas to the transactions, up to a maximum value of 3\u2a0910\xb9\u2074 gas units (",(0,n.jsx)(s.code,{children:"300 Tgas"}),")."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["This maximum value of prepaid gas is subject to change but you can query this value by using the ",(0,n.jsx)(s.a,{href:"/api/rpc/protocol#protocol-config",children:(0,n.jsx)(s.code,{children:"protocol_config"})})," RPC endpoint and search for ",(0,n.jsx)(s.code,{children:"max_total_prepaid_gas"}),"."]})}),"\n",(0,n.jsxs)(t,{class:"warning",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)("summary",{children:"How many tokens will these units cost?"}),"\nNote that you are greenlighting a maximum number of gas ",(0,n.jsx)(s.em,{children:"units"}),", not a number of NEAR tokens or yoctoNEAR."]}),(0,n.jsxs)(s.p,{children:["These units will be multiplied by the gas price at the block in which they're processed. If the function call makes cross-contract calls, then separate parts of the function will be processed in different blocks, and could use different gas prices. At a minimum, the function will take two blocks to complete, as explained in ",(0,n.jsx)(s.a,{href:"#the-cost-of-common-actions",children:"where those numbers come from"}),"."]}),(0,n.jsxs)(s.p,{children:["Assuming the system rests at minimum gas price of 100 million yoctoNEAR during the total operation, a maximum attached gas of 3\u2a0910\xb9\u2074 would seem to allow a maximum expenditure of 3\u2a0910\xb2\xb2 yN. However, there's also a pessimistic multiplier of about 6.4 to ",(0,n.jsx)(s.a,{href:"https://github.com/near/NEPs/issues/67",children:"prevent shard congestion"}),"."]}),(0,n.jsx)(s.p,{children:"Multiplying all three of these numbers, we find that maximum attached gas units allow about 0.2\u24c3 to be spent on the operation if gas prices stay at their minimum. If gas prices are above the minimum, this charge could be higher."}),(0,n.jsx)(s.p,{children:"What if the gas price is at the minimum during the starting block, but the operation takes several blocks to complete, and subsequent blocks have higher gas prices? Could the charge be more than ~0.2\u24c3? No. The pessimistic multiplier accounts for this possibility."})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"attach-extra-gas-get-refunded",children:"Attach extra gas; get refunded!"}),"\n",(0,n.jsxs)(s.p,{children:["The amount of gas required to call a contract depends on the method's complexity and the contract's state. Many times this is ",(0,n.jsx)(s.strong,{children:"hard to predict"})," ahead of time."]}),"\n",(0,n.jsx)(s.p,{children:"Because of this, if you attach more tokens than needed to cover the gas, you'll get refunded the unused fee!"}),"\n",(0,n.jsxs)(s.p,{children:["This is also true for basic operations. In the ",(0,n.jsx)(s.a,{href:"#the-cost-of-common-actions-the-cost-of-common-actions",children:"cost section"})," we mentioned that $NEAR fees are automatically calculated and attached. Since the gas price could be adjusted while these operations are being applied, a slight amount extra is attached, and any beyond what's necessary gets refunded."]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"what-about-prepaid-gas",children:"What about Prepaid Gas?"}),"\n",(0,n.jsx)(s.p,{children:"The NEAR Team understands that developers want to provide their users with the best possible onboarding experience. To realize this vision, developers can design their applications in a way that first-time users can draw funds for purchasing gas directly from an account maintained by the developer. Once onboarded, users can then transition to paying for their own platform use."}),"\n",(0,n.jsx)(s.p,{children:"In this sense, prepaid gas can be realized using a funded account and related contract(s) for onboarding new users."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"So how can a developer pay the gas fee for their users on NEAR?"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"A user can use the funds directly from the developer's account suitable only for the gas fees on this dApp. Then the developer has to distinguish users based on the signers' keys instead of the account names."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Using function calls, you can allow a new user without an account to use your dApp and your contract on-chain. The back-end creates a new access key for the user on the contract's account and points it towards the contract itself. Now the user can immediately use the web app without going through any wallet."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["NEAR Protocol does not provide any limiting feature on the usage of developer funds. Developers can set allowances on access keys that correspond to specific users -- one ",(0,n.jsx)(s.code,{children:"FunctionCall"})," access key per new user with a specific allowance."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(67294);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);