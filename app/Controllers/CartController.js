import { cartService } from '../Services/CartService.js'
import { ProxyState } from '../AppState.js'


function _draw() {
    let template = ''
    ProxyState.cart.forEach(c => template += c.CartTemplate)
    document.getElementById("cart").innerHTML = template
}



export default class CartController {
    constructor() {
        _draw()
        ProxyState.on("cart", _draw);
    }

    addToCart(key) {
        cartService.addToCart(key)
    }
    removeFromCart(key) {
        cartService.removeFromCart(key)
    }

    buyCart() {
        cartService.buyCart()
    }
}