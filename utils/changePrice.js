import { OperateOnStock } from "../server/upDatePrice.js";
import { stockMarket } from "../db/data.js";




export let changFromPrice = (up_date,buyStock)=>up_date.category.map((element) =>
   {if(element !== buyStock){
        element.currentPrice += element.currentPrice /100
   }});

export let changFromPricedwon = (up_date,buyStock)=>up_date.category.map((element) =>
   {if(element !== buyStock){
        element.currentPrice -= element.currentPrice /100
   }});