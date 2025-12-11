import raedlaine from "readline-sync";
import { stockMarket } from "../db/data.js";
import { changFromPrice, changFromPricedwon } from "../utils/changePrice.js";

export function OperateOnStock(operation, identifier) {
  try {
    if (operation === "buy") {
      console.log("yair");

      const buyStock = stockMarket.stocks.find(
        (object) => object.id === identifier || object.name === identifier
      );
      let amount = raedlaine.questionInt(
        "Enter the amount of shares you would like to buy: \n"
      );
      buyStock.availableStocks += amount;
      buyStock.previousPrices.push(buyStock.currentPrice);
      let up_date = stockMarket.stocks.filter(
        (element) => element.category === buyStock.category
      );
      changFromPrice(up_date, buyStock);
      buyStock.currentPrice += (buyStock.currentPrice * amount) / 100;
      stockMarket.lastUpdated = new Date();
    } else if (operation === "sell") {
      const buyStock = stockMarket.stocks.find(
        (object) => object.id === identifier || object.name === identifier
      );
      let amount = raedlaine.questionInt(
        "Enter the amount of shares you would like to se: \n"
      );
      buyStock.availableStocks -= amount;
      buyStock.previousPrices.push(buyStock.currentPrice);
      let up_date = stockMarket.stocks.filter(
        (element) => element.category === buyStock.category
      );
      changFromPricedwon(up_date, buyStock);
      buyStock.currentPrice -= (buyStock.currentPrice * amount) / 100;
      stockMarket.lastUpdated = new Date();
    }
  } catch {
    console.error("Unknown ID");
  }
}
