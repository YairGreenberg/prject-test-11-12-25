import raedlaine from "readline-sync";
import { searchByName,searchById,searchByBelowPrice,
    searchByAbovePrice, } from "./utils/searchStock.js";
import { stockMarket } from "./db/data.js";
import { OperateOnStock } from "./server/upDatePrice.js";





function manu()
{
    console.log(`What action would you like to take?\n
                    1.Search for a stock by name or id;
                    2.Show all stocks above or below a given price;
                    3.Buy or sell a stock
                    4.Exit;`);
    
}
let bool = true;
while(bool){
    manu();
    let inputSelect = raedlaine.questionInt("please enter a choice number?");
    switch(inputSelect){
        case 1:
            let choiceNameOrId = raedlaine.question("Choose whether to search by ID or name?\n")
            if(choiceNameOrId.toLowerCase() === "name"){
                let inputName = raedlaine.question("enter Name:\n")
                let  object = searchByName(stockMarket,inputName)
                console.log(object);
            }else if(choiceNameOrId.toLowerCase() === "id"){
                let inputId = raedlaine.question("enter ID:\n")
                let object = searchById(stockMarket,inputId)
                console.log(object);
            }else{
                console.log("try again");
                continue;                
            }
            break;
        case 2:
            let aboveOrBelow = raedlaine.question("Which stocks would you like to see Above or Below a certain price?\n")
            if(aboveOrBelow.toLowerCase()=== "above"){
                let inputPrice = raedlaine.questionInt("enter price:\n")
                let list = searchByAbovePrice(stockMarket, inputPrice)
                console.log(list);                
            }else if(aboveOrBelow.toLowerCase()==="below"){
                let inputPrice = raedlaine.questionInt("enter price:\n")
                let list = searchByBelowPrice(stockMarket,inputPrice)
                console.log(list);                
            }else{
                console.log("No matches found.");
            }
            break;
        case 3:
            let buyOrSell = raedlaine.question("What would you like to buy or sell?\n")
            let identifier = raedlaine.question("If any ID or name?\n")
            if(identifier.toLowerCase()=== "id"){
                let inputId = raedlaine.question("enter ID:\n")
                OperateOnStock(buyOrSell, inputId) 
            }else if(identifier.toLowerCase()==="name"){
                let inputId = raedlaine.question("enter name:\n")
                OperateOnStock(buyOrSell, inputId) 
            }
            break;
        case 4:
            bool=false
            break;




    }
}