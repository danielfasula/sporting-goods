import CartController from "./Controllers/CartController.js";
import ProductsController from "./Controllers/ProductsController.js";
import ValuesController from "./Controllers/ValuesController.js";

function tab() {
  let triggerTabList = [].slice.call(document.querySelectorAll('#nav-houses-tab, #nav-cars-tab, #nav-home-tab, #nav-jobs-tab'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
}

class App {
  constructor() {
    tab()
  }
  // valuesController = new ValuesController();
  productsController = new ProductsController();

  cartController = new CartController();


}

window["app"] = new App();
