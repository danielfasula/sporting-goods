import { ProxyState } from '../AppState.js'
import { generateId } from '../Utils/GenerateId.js'

export default class Product {
    constructor({ name, description, price, imgUrl, id = generateId() }) {
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
        this.id = id
    }

    get Template() {
        return /*html*/`
        <div class="card bg-light col-2 m-2">
            <img src="${this.imgUrl}" class="card-image-top">
                <div class="card-body">
                    <h4 class="card-title">${this.name}</h4>
                    <h6>$${this.price}</h6>
                    <p>${this.description}</p>
                <button class="btn btn-success" onclick="app.cartController.addToCart('${this.id}')">Add To Cart</button>
                </div>
        </div>
        `
    }
    get CartTemplate() {
        return /*html*/ `
        <div class="card bg-light col-2 m-2">
            <img src="${this.imgUrl}" class="card-image-top">
                <div class="card-body">                
                    <h4 class="card-title">${this.name}</h4>
                    <h6>$${this.price}</h6>
                    <p>${this.description}</p>
                <button class="btn btn-danger" onclick="app.cartController.removeFromCart('${this.id}')">Remove from Cart</button>
                </div>
        </div> `




    }

}