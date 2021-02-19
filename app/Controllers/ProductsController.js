import { ProxyState } from "../AppState.js"
import { productsService } from "../Services/ProductsService.js"

function _draw() {
    let template = ''
    ProxyState.products.forEach(p => template += p.Template)
    document.getElementById('products').innerHTML = template
    document.getElementById('money').textContent = ProxyState.money.toString()
}

export default class ProductsController {
    constructor() {
        _draw()
        ProxyState.on("money", _draw)
    }

    addMoney() {
        productsService.addMoney()
    }
}