// Importing add to cart function from addToCart
import { addToCart } from "./addToCart.js";

export function productPopulate(someProdArray) {
    const pro_container = document.querySelector("#product1 .pro-container");
    pro_container.innerHTML = "";

    for (let i = 0; i < someProdArray.length; i++) {
        // Wrap ${someProdArray[i]._id} in quotes
        let newProduct = `
            <div class="pro">
                <img src="${someProdArray[i].prodAdress}" alt="" onclick="window.location.href='single_product.html?id=${someProdArray[i]._id}'">
                <div class="desc">
                    <span>${someProdArray[i].prodBrand}</span>
                    <h5>${someProdArray[i].prodName}</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>$${someProdArray[i].prodPrice}</h4>
                    <p>Product ID:- ${someProdArray[i]._id}</p>
                    <button onclick="addToCart(event, '${someProdArray[i]._id}')">
                        <i class="fa fa-shopping-cart cart"></i>
                    </button>
                </div>
            </div>
        `;
        // Append newProduct safely
        pro_container.innerHTML += newProduct;
    }
}
