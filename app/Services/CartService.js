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
        let itemIndex = ProxyState.cart.findIndex(p => p.id == key)
        ProxyState.total -= ProxyState.products[itemIndex].price;
        ProxyState.cart.splice(itemIndex, 1)
        ProxyState.cart = ProxyState.cart

    }
    buyCart() {
        let wallet = ProxyState.money
        let cartTotal = ProxyState.total
        if (wallet >= cartTotal) {
            ProxyState.money = wallet - cartTotal
            ProxyState.total = 0
            ProxyState.cart = []
            alert('Thank you for your Purchase!')
        } else {
            alert('Bring Me More Money, CHUMP!')
        }
        console.log(ProxyState.total);
    }
}

export const cartService = new CartService();