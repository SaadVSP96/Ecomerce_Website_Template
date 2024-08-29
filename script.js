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
    {
        prodID: 19,
        prodName: "Cartoon Shirt",
        prodAdress: "img/products/f1.jpg",
        prodBrand: "Adidas",
        prodPrice: 78,
    },
    {
        prodID: 28,
        prodName: "Garden Shirt",
        prodAdress: "img/products/f2.jpg",
        prodBrand: "Balenciaga",
        prodPrice: 578,
    },
    {
        prodID: 37,
        prodName: "Havian Shirt",
        prodAdress: "img/products/f3.jpg",
        prodBrand: "Chanel",
        prodPrice: 111,
    },
    {
        prodID: 46,
        prodName: "F***Boy Shirt",
        prodAdress: "img/products/f4.jpg",
        prodBrand: "Prada",
        prodPrice: 265,
    },
    {
        prodID: 55,
        prodName: "Emo-Boy Shirt",
        prodAdress: "img/products/f5.jpg",
        prodBrand: "GAP",
        prodPrice: 99,
    },
    {
        prodID: 64,
        prodName: "Virginity Screamer Shirt",
        prodAdress: "img/products/f6.jpg",
        prodBrand: "None",
        prodPrice: 8,
    },
    {
        prodID: 73,
        prodName: "Pants",
        prodAdress: "img/products/f7.jpg",
        prodBrand: "The girl u fantasize about but dont approach",
        prodPrice: 875,
    },
    {
        prodID: 82,
        prodName: "Shirt",
        prodAdress: "img/products/f8.jpg",
        prodBrand: "The girl u fantasize about but dont approach",
        prodPrice: 987,
    },
];

// picking up the product container:
const pro_container = document.querySelector("#product1 .pro-container");
// define template literal and inserting objects iteratively:
for (let i = 0; i < productData.length; i++) {
    // Use template literals correctly and pass the event object to the function
    let newProduct = `
    <div class="pro">
        <img onclick="window.location.href='single_product.html?id=${productData[i].prodID}'" src="${productData[i].prodAdress}" alt="" />
        <div class="desc">
            <span>${productData[i].prodBrand}</span>
            <h5>${productData[i].prodName}</h5>
            <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <h4>$${productData[i].prodPrice}</h4>
            <p>Product ID:- ${productData[i].prodID}</p>
            <button onclick="addToCart(event, ${productData[i].prodID}, '${productData[i].prodName}', '${productData[i].prodAdress}', '${productData[i].prodBrand}', ${productData[i].prodPrice})">
            <i class="fa fa-shopping-cart cart"></i>
            </button>
            </div>
            </div>
            `;
    // function addToCart(event, prodID, prodName, prodAdress, prodBrand, prodPrice)
    // Append newProduct safely
    pro_container.innerHTML += newProduct;
}

// Single Product Page:
// Now the product needs to dynamically update itself based on which one we are discussing
// Lets first find a way to localize the fuction execution to single-product page.
// First lets access the window.location.href that we stored above:
const currentURLhref = window.location.href;
const currentURLpathname = window.location.pathname;
// Ok so now we have a way to check the product id, now we need a way to populate the Main
// and small images dynamically such that they correspond around the main image id which
// we are getting from the query parameter.
if (currentURLpathname.includes("single_product.html")) {
    // Now We are going to dynamically update the main image using the source array
    const currentProdId = ((currentURLhref) => {
        // parseInt converts the string to a number
        return parseInt(currentURLhref.split("?id=")[1], 10);
    })(currentURLhref);
    // find the requisite object in the object array:
    const mainProdIndex = productData.findIndex(
        (obj) => obj.prodID === currentProdId
    );
    console.log(mainProdIndex);
    const mainProdImg = document.getElementById("MainImg");
    const mainProdName = document.querySelector(".single-pro-details h4");
    const mainProdPrice = document.querySelector(".single-pro-details h2");
    mainProdImg.src = productData[mainProdIndex].prodAdress;
    mainProdName.innerHTML = productData[mainProdIndex].prodName;
    mainProdPrice.innerHTML = `$ ` + productData[mainProdIndex].prodPrice;
    document
        .querySelector(".single-pro-details button")
        .addEventListener("click", function (event) {
            addToCart(
                event,
                productData[mainProdIndex].prodID,
                productData[mainProdIndex].prodName,
                productData[mainProdIndex].prodAdress,
                productData[mainProdIndex].prodBrand,
                productData[mainProdIndex].prodPrice
            );
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
}
// We have some legacy functionality that we need to localize to the single-product page
// This piece of code basically allows the main image to get updated using small images
if (currentURLpathname.includes("single_product.html")) {
    const mainImg = document.getElementById("MainImg");
    const smallImg = document.getElementsByClassName("small-img");
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

// Cart Functionality:
// Lets Add all Event Listeners
// We need event listeners on the cart icons that activate the addToCart Function
function addToCart(event, prodID, prodName, prodAdress, prodBrand, prodPrice) {
    event.stopPropagation(); // Prevent the parent click event from triggering
    console.log(
        "Adding to cart:",
        prodID,
        prodName,
        prodAdress,
        prodBrand,
        prodPrice
    );
    const prod = { prodID, prodName, prodAdress, prodBrand, prodPrice };
    // define cart array to hold the product objects currently in the local storage
    // of the site
    let cart;
    // localStorage.setItem(prodID, JSON.stringify(prod));
    if (localStorage.key(0) == "products") {
        cart = JSON.parse(localStorage.getItem("products"));
    } else {
        cart = [];
    }
    console.log(cart);
    // now to add the cart array in the local storage and
}

// UPDATE TO BE MADE:::
// function addToCart(productID, productPrice) {
//     // get the current cart, or an empty object if null
//     var cart = JSON.parse(localStorage.getItem("Products")) || {};

//     // update the cart by adding an entry or incrementing an existing one
//     if (cart[productId]) {
//       cart[productId].count++;
//     } else {
//       cart[productId] = {
//         productPrice, // shorthand for `productPrice: productPrice,`
//         count: 1
//       };
//     }

//     // put the result back in localStorage
//     localStorage.setItem("Products", JSON.stringify(cart));
//   }
