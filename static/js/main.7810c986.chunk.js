(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2tZBo",description:"Profile_description__jzG5s",avatar:"Profile_avatar__1CF_X",stats:"Profile_stats__7oMlv",quantity:"Profile_quantity__-fQRp",label:"Profile_label__8Bsvu",name:"Profile_name__2BrxS",tag:"Profile_tag__1QiXR",location:"Profile_location__1eDWy"}},function(e,a,t){e.exports={pricingItem:"PricingItem_pricingItem__BUR5G",icon:"PricingItem_icon__XOwO9",label:"PricingItem_label__pYEYQ",capacity:"PricingItem_capacity__2SzRB",description:"PricingItem_description__2qEjn",price:"PricingItem_price__AU9Wj",button:"PricingItem_button__1YmiO"}},function(e,a,t){e.exports={statsSection:"Stats_statsSection__FbEDi",title:"Stats_title__zsqpg",statList:"Stats_statList__nWyG3",statListItem:"Stats_statListItem__2YKTb",label:"Stats_label__evI6l",percentage:"Stats_percentage__1V6mG"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__3KuDZ",row:"TransactionHistory_row__1ItS9",head:"TransactionHistory_head__1rr64"}},,,,function(e,a,t){e.exports={pricingPlan:"PricingPlan_pricingPlan__3Owk5",item:"PricingPlan_item__1OVXJ"}},,,,,,,function(e){e.exports=[{label:"Bronze",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png",capacity:"2TB",price:39,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{label:"Silver",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png",capacity:"20TB",price:99,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{label:"Gold",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png",capacity:"400TB",price:499,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."}]},function(e){e.exports=[{id:"1e0700a2-5183-4291-85cc-2065a036a683",type:"invoice",amount:"964.82",currency:"LRD"},{id:"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",type:"payment",amount:"686.50",currency:"WST"},{id:"44dca67a-8e5a-4798-bf8e-b15efd4e1abd",type:"invoice",amount:"828.62",currency:"UGX"},{id:"ea8ed3dc-2b68-4a53-905a-53ecb0adef33",type:"withdrawal",amount:"527.80",currency:"ALL"},{id:"ea76146a-0b00-4b80-bc02-a8c822176712",type:"withdrawal",amount:"371.43",currency:"MUR"},{id:"63ca02f9-d637-46b5-9237-f3b24425e029",type:"payment",amount:"862.44",currency:"AUD"},{id:"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",type:"withdrawal",amount:"907.00",currency:"GEL"},{id:"6013bad0-750c-4691-8bc2-d8f2b43969c4",type:"withdrawal",amount:"352.52",currency:"UGX"},{id:"252c7be4-8b06-4fa7-8d42-61fb835b70d5",type:"payment",amount:"388.98",currency:"TOP"},{id:"4eaab41b-b967-40ac-82ed-85fc66f646f1",type:"deposit",amount:"103.10",currency:"BWP"},{id:"9648a350-8469-42d5-8bf3-18090de5fe67",type:"withdrawal",amount:"322.32",currency:"MRO"},{id:"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",type:"invoice",amount:"14.79",currency:"PYG"},{id:"43ef232c-80e9-4d6f-b48a-b22405620de3",type:"payment",amount:"904.86",currency:"CHF"},{id:"5161682e-e620-4019-ab0a-24ceb10fbd20",type:"withdrawal",amount:"307.08",currency:"NOK"},{id:"7b119d71-42e6-4c42-a141-6818b07bb9ff",type:"invoice",amount:"275.07",currency:"AWG"},{id:"a4f65722-65c4-4c28-b1f4-b8ed988bb205",type:"deposit",amount:"213.10",currency:"STD"},{id:"c6e5784b-0ca3-48d6-86e5-b5128af5a523",type:"invoice",amount:"116.11",currency:"CUP CUC"},{id:"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",type:"invoice",amount:"878.67",currency:"HKD"},{id:"a4a98b0e-b22c-438b-9f83-de2df52110c8",type:"invoice",amount:"725.03",currency:"UYU UYI"},{id:"b39bfa7a-0166-4c47-94d6-87d20590f746",type:"payment",amount:"405.45",currency:"MDL"}]},,,function(e,a,t){e.exports=t(29)},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(10),r=t.n(i),l=t(1),s=t.n(l),o=function(e){var a=e.user;return c.a.createElement("div",{className:s.a.profile},c.a.createElement("div",{className:s.a.description},c.a.createElement("img",{alt:"user avatar",className:s.a.avatar,src:a.avatar}),c.a.createElement("p",{className:s.a.name},a.name),c.a.createElement("p",{className:s.a.tag},a.tag),c.a.createElement("p",{className:s.a.location},a.location)),c.a.createElement("ul",{className:s.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:s.a.label},"Followers"),c.a.createElement("span",{className:s.a.quantity},a.stats.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:s.a.label},"Views"),c.a.createElement("span",{className:s.a.quantity},a.stats.views)),c.a.createElement("li",null,c.a.createElement("span",{className:s.a.label},"Likes"),c.a.createElement("span",{className:s.a.quantity},a.stats.likes))))},m=t(3),u=t.n(m),d=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},p=function(e){var a=e.title,t=void 0===a?"":a,n=e.stats,i=void 0===n?[]:n;return c.a.createElement("section",{className:u.a.statsSection},""!==t?c.a.createElement("h2",{className:u.a.title},t):null,c.a.createElement("ul",{className:u.a.statList},i.map(function(e){return c.a.createElement("li",{className:u.a.statListItem,key:e.id,style:{backgroundColor:d()}},c.a.createElement("span",{className:u.a.label},e.label),c.a.createElement("span",{className:u.a.percentage},e.percentage))})))};p.defaultProps={title:""};var b=p,_=t(11);function y(){var e=Object(_.a)(["\n  :before {\n    content: url(",");\n  }\n  height: 174px;\n"]);return y=function(){return e},e}var f=t(12).a.i(y(),function(e){return e.icon}),g=t(2),E=t.n(g),h=function(e){var a=e.label,t=e.icon,n=e.capacity,i=e.price,r=e.description;return c.a.createElement("div",{className:E.a.pricingItem},c.a.createElement(f,{className:E.a.icon,icon:t}),c.a.createElement("h2",{className:E.a.label},a),c.a.createElement("p",{className:E.a.capacity},n," Storage"),c.a.createElement("p",{className:E.a.description},r),c.a.createElement("p",{className:E.a.price},"$",i,"/MO"),c.a.createElement("button",{className:E.a.button,type:"button"},"Get Started"))},v=t(8),w=t.n(v),N=function(e){var a=e.items,t=void 0===a?[]:a;return c.a.createElement("ul",{className:w.a.pricingPlan},t.map(function(e){return c.a.createElement("li",{className:w.a.item,key:e.label},c.a.createElement(h,{label:e.label,icon:e.icon,capacity:e.capacity,price:e.price,description:e.description}))}))},P=t(15),S=t(16),k=t(4),I=t.n(k),U=function(e){var a=e.items,t=void 0===a?[]:a;return c.a.createElement("table",{className:I.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",{className:I.a.head},c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,t.map(function(e){return c.a.createElement("tr",{key:e.id,className:I.a.row},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))})))},G={name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",stats:{followers:5603,views:4827,likes:1308}},L=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}];var q=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o,{user:G}),c.a.createElement(b,{title:"Upload stats",stats:L}),c.a.createElement(N,{items:P}),c.a.createElement(U,{items:S}))};r.a.render(c.a.createElement(q,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7810c986.chunk.js.map