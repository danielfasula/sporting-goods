import { ProxyState } from "../AppState.js"
import Product from "../Models/Product.js"

class ProductsService {
    constructor() {
        console.log("Product Service be working boi");
    }


    addMoney() {
        console.log("Added cash money");
        ProxyState.money += 1;

    }




}

export const productsService = new ProductsService()