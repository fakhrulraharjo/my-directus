import{defineOperationApp as e}from"@directus/extensions-sdk";const t={length:8,count:10,prefix:"{{$trigger.payload.prefix}}",dash:2,column:"{{$trigger.payload.column}}",charset:"alphabetic",item:{example:"example"}};var o=e({id:"generate_uid",name:"Generate UID",icon:"box",description:"Generate uid for voucher or coupon like",overview:({collection:e,payload:t})=>[{label:"$t:collection",text:e},{label:"generate_uid_payload",text:t}],options:[{field:"collection",name:"$t:collection",type:"string",meta:{width:"half",interface:"system-collection"}},{field:"payload",name:"generate_uid_payload",type:"json",meta:{width:"full",interface:"input-code",options:{language:"json",placeholder:JSON.stringify(t),template:JSON.stringify(t)}}}]});export{o as default};
