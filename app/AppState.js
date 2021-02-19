import Value from "./Models/Value.js"
import Product from "./Models/Product.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  money = 0

  total = 0

  /** @type {Product[]} */
  products = [new Product({
    name: 'Bucket Hat',
    description: 'Sick LE bucket',
    price: 1,
    imgUrl: 'http://cdn.shopify.com/s/files/1/0086/3279/5198/products/LSDREAM_HATE_WHITE_1200x1200.jpg?v=1600903453'
    
  })]

  
  cart = []






}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
