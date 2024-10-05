// importing function to import all products
import { fetchAllProducts } from "./fetchProducts.js";
// importing add to cart function from addToCart
import { addToCart } from "./addToCart.js";

// the url needs to be accessed since it will allow us to read the query parameter
const currentURLhref = window.location.href;

// define product data before the async call
let productData;
// now call the Immediately Invoked Function Expression (IIFE)
// to import and assign the data
(async () => {
    // as a demo: not for real but yeah u can space out the assignment from the await
    productData = fetchAllProducts();
    productData = await productData;
    // the call has to be made inside due to asynchronous nature of JS
    singleProductPopulate();
})();

// Single Product Page:
// The product needs to dynamically update itself based on which one we are discussing
// Ok so now we have a way to check the product id using query param, now we need a way to populate the Main
// and small images dynamically such that they correspond around the main image id which
// we are getting from the query parameter.
function singleProductPopulate() {
    const currentProdId = ((currentURLhref) => {
        return currentURLhref.split("?id=")[1];
    })(currentURLhref);
    const mainProdIndex = productData.findIndex(
        (obj) => obj._id === currentProdId
    );
    const mainProdImg = document.getElementById("MainImg");
    const mainProdName = document.querySelector(".single-pro-details h4");
    const mainProdPrice = document.querySelector(".single-pro-details h2");
    mainProdImg.src = productData[mainProdIndex].prodAdress;
    mainProdName.innerHTML = productData[mainProdIndex].prodName;
    mainProdPrice.innerHTML = `$ ` + productData[mainProdIndex].prodPrice;
    document
        .querySelector(".single-pro-details button")
        .addEventListener("click", function (event) {
            addToCart(event, productData[mainProdIndex]._id);
        });
    // now we need to traverse the addresses in the address array, using a circular array
    // approach, we will do this to update the small images around the main image
    const smallImg = document.querySelectorAll(".small-img");
    let curSmallImg = 0;
    for (let i = mainProdIndex; i < mainProdIndex + 4; i++) {
        if (i < productData.length) {
            smallImg[curSmallImg].src = productData[i].prodAdress;
        } else if (i >= productData.length) {
            smallImg[curSmallImg].src =
                productData[i % productData.length].prodAdress;
        }
        curSmallImg += 1;
    }
    // We have some legacy functionality that we need to localize to the single-product page
    // This piece of code basically allows the main image to get updated using small images
    const mainImg = document.getElementById("MainImg");
    smallImg[0].onclick = function () {
        mainImg.src = smallImg[0].src;
    };
    smallImg[1].onclick = function () {
        mainImg.src = smallImg[1].src;
    };
    smallImg[2].onclick = function () {
        mainImg.src = smallImg[2].src;
    };
    smallImg[3].onclick = function () {
        mainImg.src = smallImg[3].src;
    };
}
