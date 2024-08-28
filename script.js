// ALL JS CODE:

// All Pages
// Navigation Bar Functionality
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

// Shop Page Functionality
// Insert Objects dynamically instead of prewriting:
let productData = [
    "img/products/f1.jpg",
    "img/products/f2.jpg",
    "img/products/f3.jpg",
    "img/products/f4.jpg",
    "img/products/f5.jpg",
    "img/products/f6.jpg",
    "img/products/f7.jpg",
    "img/products/f8.jpg",
];
// picking up the product container:
const pro_container = document.querySelector("#product1 .pro-container");
// define template literal and inserting objects iteratively:
for (let i = 0; i < productData.length; i++) {
    // <div class="pro">
    let newProduct = `
    <div class="pro" onclick = "window.location.href='single_product.html?id=${i}'">
    <img src=${productData[i]} alt="" />
    <div class="desc">
    <span>adidas</span>
    <h5>Cartoon Astronaut T-Shirts</h5>
    <div class="star">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    </div>
    <h4>$78</h4>
    <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
    </div>
    </div>
    `;
    pro_container.innerHTML += newProduct;
}

// Single Product Page:
// Now the product needs to dynamically update itself based on which one we are discussing
// Lets first find a way to localize the fuction execution to single-product page.
// First lets access the window.location.href that we stored above:
const currentURLhref = window.location.href;
const currentURLpathname = window.location.pathname;
console.log(currentURLhref, " ", typeof currentURLhref);
console.log(currentURLpathname, " ", typeof currentURLpathname);
// Ok so now we have a way to check the product id
// We have some legacy functionality that we need to localize to the single-product page

if (currentURLpathname.includes("single_product.html")) {
    var MainImg = document.getElementById("MainImg");
    var smallImg = document.getElementsByClassName("small-img");
    smallImg[0].onclick = function () {
        MainImg.src = smallImg[0].src;
    };
    smallImg[1].onclick = function () {
        MainImg.src = smallImg[1].src;
    };
    smallImg[2].onclick = function () {
        MainImg.src = smallImg[2].src;
    };
    smallImg[3].onclick = function () {
        MainImg.src = smallImg[3].src;
    };
}
