import { stockMarket } from "../db/data.js";

export function searchByAbovePrice(stockMarket, price) {
  let listAbovePrice = stockMarket.stocks.filter(
    (object) => object.currentPrice > price
  );
  return listAbovePrice;
}

export function searchByBelowPrice(stockMarket, price) {
  let listBelowPrice = stockMarket.stocks.filter(
    (object) => object.currentPrice < price
  );
  return listBelowPrice;
}

export function searchByName(stockMarket, nameStock) {
  try {
    let listSameName = stockMarket.stocks.filter(
      (object) => object.name === nameStock
    );
    return listSameName;
  } catch (error) {
    console.error("No matches found.");
    return [];
  }
}

export function searchById(stockMarket, idStock) {
  try {
    let listSameId = stockMarket.stocks.filter(
      (object) => object.id === idStock
    );
    return listSameId;
  } catch (error) {
    console.error("No matches found.");
    return [];
  }
}

export function filterStocksByPrice(givenPrice, price) {
  try {
    if (givenPrice.stocks.filter((object) => object.currentPrice > price)) {
      return searchByAbovePrice(givenPrice, price);
    } else {
      return searchByBelowPrice(givenPrice, price);
    }
  } catch {
    console.error(`this price is not found`);
    return [];
  }
}
