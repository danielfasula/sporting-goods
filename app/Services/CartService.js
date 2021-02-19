import { ProxyState } from "../AppState.js";
import { generateId } from '../Utils/GenerateId.js'

class CartService {
    constructor() {
        console.log('Cart Service working');
    }
    addToCart(key) {
        // let cartTotal = ProxyState.total
        let productIndex = ProxyState.products.findIndex(p => p.id == key)
        let product = ProxyState.products[productIndex]
        ProxyState.total += product.price
        ProxyState.cart = [...ProxyState.cart, product]
        console.log(product.id);

        // ProxyState.total += 
    }
    removeFromCart(key) {
        ProxyState.cart.splice(ProxyState.cart.findIndex(p=>p.id == key), 1)
        ProxyState.cart = ProxyState.cart

    }
    buyCart() {
        let wallet = ProxyState.money
        let cartTotal = ProxyState.total
        if (wallet >= cartTotal) {
            ProxyState.money = wallet - cartTotal
            ProxyState.total = 0
            ProxyState.cart = []
        } else {
            alert('Bring Me More Money, CHUMP!')
        }
        console.log(ProxyState.total);
    }
}
//  logic for buy function
// if (wallet > cartTotal) {
//     wallet -= cartTotal
//     ProxyState.money = wallet
// }
export const cartService = new CartService();