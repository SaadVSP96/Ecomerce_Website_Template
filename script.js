// All Product Data:
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

// Master Function to control function executions for specific pages:
document.addEventListener("DOMContentLoaded", masterFunction);
const currentURLhref = window.location.href;
const currentURLpathname = window.location.pathname;
console.log(typeof currentURLhref, currentURLhref);
console.log(typeof currentURLpathname, currentURLpathname);

function masterFunction() {
    // Runs on all pages, no need for checks
    navBar();

    // Runs on Home Page and Shop Page, requires checks
    if (
        currentURLpathname.includes("index.html") ||
        currentURLpathname.includes("shop.html")
    ) {
        productPopulate();
    }

    // Runs only on single-product page, requires checks
    if (currentURLpathname.includes("single_product.html")) {
        singleProductPopulate();
    }

    // Runs only on cart page, requires checks
    if (currentURLpathname.includes("cart.html")) {
        cartEntryPopulate();
    }
}

// Navigation Bar Functionality - Runs on all pages
function navBar() {
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
}

// Product Population Functionality - Runs on Home Page and Shop Page
// Insert Objects dynamically instead of prewriting:
// picking up the product container:
function productPopulate() {
    const pro_container = document.querySelector("#product1 .pro-container");
    // define template literal and inserting objects iteratively:
    for (let i = 0; i < productData.length; i++) {
        // Use template literals correctly and pass the event object to the function
        let newProduct = `
    <div class="pro">
        <img src="${productData[i].prodAdress}" alt="" / onclick="window.location.href='single_product.html?id=${productData[i].prodID}'">
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
            <button onclick="addToCart(event, ${productData[i].prodID})">
            <i class="fa fa-shopping-cart cart"></i>
            </button>
            </div>
            </div>
            `;
        // Append newProduct safely
        pro_container.innerHTML += newProduct;
    }
}

// Cart Population Functionality - Runs on the Cart Page
function cartEntryPopulate() {
    // First we need the array in the cart, so get those prodIDs
    let cart = JSON.parse(localStorage.getItem("products"));
    console.log(cart);
    // We must also have access to the container for each table row:
    const cartbody = document.querySelector("#cart tbody");
    for (let i = 0; i < cart.length; i++) {
        // Now that prodIDs are in the cart array, we need to run a for loop over this array, and for each
        // prodID, we need to search it in the product data object array.
        const currProdIndex = productData.findIndex(
            (obj) => obj.prodID === cart[i]
        );
        currProd = productData[currProdIndex];
        // Calculate the initial subtotal (prodPrice * quantity)
        const quantity = 1; // default quantity is 1
        const subtotal = currProd.prodPrice * quantity;
        // now that the currProdIndex is in hand, we can access its properties to populate the items in
        // the manner used in the design.
        let cartEntry = `
            <tr>
                <td class="remove">
                    <button class="remove-Btn">
                        <i class="fa fa-times-circle"></i>
                    </button>
                </td>
                <td class="imgAdress">
                    <img src="${currProd.prodAdress}" alt="" />
                </td>
                <td class="ID">${currProd.prodID}</td>
                <td class="name">${currProd.prodName}</td>
                <td class="price">$${currProd.prodPrice}</td>
                <td>
                    <input type="number" value="${quantity}" min="1" class="quantity-input" onkeydown="return false" />
                </td>
                <td class="subtotal">$${subtotal}</td>
            </tr>
        `;
        // now append the HTMl for cart entry:
        cartbody.innerHTML += cartEntry;
    }

    // Should Handle the cart Total and Coupon Application Parts as well for when the page loads,
    // Updating can be done via event listeners similar to the subtotal updating.

    // Add event listener to the input tag for calling updateSubtotal(this) where this is the input tag itself.
    const quantityInputAreas = document.querySelectorAll(".quantity-input");
    quantityInputAreas.forEach((inputArea) => {
        inputArea.addEventListener("input", function () {
            updateSubtotal(this);
        });
    });

    // Add event listeners to the remove buttons for ac
    const removeBtns = document.querySelectorAll(".remove-Btn");
    removeBtns.forEach((removeBtn) => {
        removeBtn.addEventListener("click", function () {
            removeFromCart(this);
        });
    });

    // Add event listener to the Apply Button after the Coupon input
    // We are going to stor the coupon value in the page function's scope
    let couponValueUser = ""; // default value is no value in it.
    const couponValueActual = "AISLE9";
    const shippingFee = 0;
    const applyCouponBtn = document.querySelector("#cart-add #coupon button");
    applyCouponBtn.addEventListener("click", () => {
        const couponInput = document.querySelector("#cart-add #coupon input");
        couponValueUser = couponInput.value.trim();
        // since coupon has been applied, gotta update the  grand total
        updateGrandtotal(document.querySelector("#cart table tbody"));
    });

    // function to remove from cart
    function removeFromCart(removeBtn) {
        // We can capture the parent row element using the closest method:
        const cartEntry = removeBtn.closest("tr");
        if (parseInt(cartEntry.querySelector("input").value, 10) === 1) {
            currentProdId = parseInt(
                cartEntry.querySelector(".ID").innerText,
                10
            );
            // Now to remove the product from local storage
            let cart = JSON.parse(localStorage.getItem("products"));
            cart = cart.filter((item) => {
                return item !== currentProdId;
            });
            localStorage.setItem("products", JSON.stringify(cart));
            // remove the single count entry from the cart table
            cartEntry.remove();
        } else if (parseInt(cartEntry.querySelector("input").value, 10) > 1) {
            // in case there are more than one of the same item, now its better
            // to just recall add the update subtotal function which is attatched
            // to the event listener in the input text area after updating its value
            // here
            cartEntry.querySelector("input").value -= 1;
            // Trigger the 'input' event programmatically
            const event = new Event("input", {
                bubbles: false, // Makes the event bubble up the DOM
                cancelable: true, // Allows the event to be canceled
            });
            cartEntry.querySelector("input").dispatchEvent(event);
        }
    }

    // function to update the subtotals
    function updateSubtotal(inputArea) {
        // We can capture the parent row element using the closest method:
        const cartEntry = inputArea.closest("tr");
        // to calculate the Entry's new subtotal, we'd need to capture the new value from
        // the user in the input area
        const quantity = parseInt(inputArea.value);
        // we can similarly capture the unit product rate
        const unitPrice = parseInt(
            cartEntry.querySelector(".price").innerText.substring(1),
            10
        );
        const newSubtotal = quantity * unitPrice;
        cartEntry.querySelector(".subtotal").innerText = `$${newSubtotal}`;

        // Might as Well Update the Grand Total from here and suply it with the parent to
        // the table row since we are looking to then collect all of the item's subtotals
        updateGrandtotal(cartEntry.parentElement);
    }

    function updateGrandtotal(tableBody) {
        const allCartEntrySubTotals = [];
        tableBody.querySelectorAll("tr").forEach((tr) => {
            const subtotalElement = tr.querySelector(".subtotal");
            if (subtotalElement) {
                const subtotalValue = parseInt(
                    subtotalElement.textContent.replace("$", "")
                );
                allCartEntrySubTotals.push(subtotalValue);
            }
        });
        console.log(allCartEntrySubTotals);
        let Total = 0;
        allCartEntrySubTotals.forEach((entry) => {
            Total += entry;
        });
        console.log(Total);
        // We must now catch the cart subtotal and total fields and swap out
        // their values
        document.querySelector(
            "#cart-add #subtotal .sumSubTotals"
        ).innerText = `$ ${Total}`;
        // catch the shipping block and write free there if 0 else the value:
        if (shippingFee > 0) {
            document.querySelector(
                "#cart-add #subtotal .shipping"
            ).innerText = `$ ${shippingFee}`;
        }
        // Okay, so we got the shipping fee and the subtotals added
        // Now We need to Acquire input from the Coupon, which we have stored in
        // a larger scoped variable -> couponValueUser. We check that against the
        // code in couponValueActual and apply a 30% discount on the grand total.
        let grandTotal = Total + shippingFee;
        console.log(grandTotal);
        if (couponValueUser === couponValueActual) {
            grandTotal -= Math.floor(grandTotal * 0.3);
            console.log(grandTotal);
            document.querySelector(
                "#cart-add #subtotal .grandTotal"
            ).innerText = `$ ${grandTotal}`;
        } else {
            document.querySelector(
                "#cart-add #subtotal .grandTotal"
            ).innerText = `$ ${grandTotal}`;
        }
    }
}

// Single Product Page:
// The product needs to dynamically update itself based on which one we are discussing
// Ok so now we have a way to check the product id using query param, now we need a way to populate the Main
// and small images dynamically such that they correspond around the main image id which
// we are getting from the query parameter.
function singleProductPopulate() {
    // Now We are going to dynamically update the main image using the source array
    const currentProdId = ((currentURLhref) => {
        // parseInt converts the string to a number
        return parseInt(currentURLhref.split("?id=")[1], 10);
    })(currentURLhref);
    // find the requisite object in the object array:
    const mainProdIndex = productData.findIndex(
        (obj) => obj.prodID === currentProdId
    );
    // console.log(mainProdIndex);
    const mainProdImg = document.getElementById("MainImg");
    const mainProdName = document.querySelector(".single-pro-details h4");
    const mainProdPrice = document.querySelector(".single-pro-details h2");
    mainProdImg.src = productData[mainProdIndex].prodAdress;
    mainProdName.innerHTML = productData[mainProdIndex].prodName;
    mainProdPrice.innerHTML = `$ ` + productData[mainProdIndex].prodPrice;
    document
        .querySelector(".single-pro-details button")
        .addEventListener("click", function (event) {
            addToCart(event, productData[mainProdIndex].prodID);
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

// Cart Functionality:
// Lets Add all Event Listeners
// We need event listeners on the cart icons that activate the addToCart Function
function addToCart(event, prodID) {
    event.stopPropagation(); // Prevent the parent click event from triggering
    const prod = prodID;
    console.log("adding product with ID -> ", prod);
    // define cart array to hold the product IDs currently in the local storage
    // of the site
    let cart;
    // localStorage.setItem(prodID, JSON.stringify(prod));
    if (localStorage.key(0) == "products") {
        cart = JSON.parse(localStorage.getItem("products"));
    } else {
        cart = [];
    }
    // now we have the cart array with us, empty or otherwise.
    // next, we have been provided with a prodID, and we should check if this ID
    // is already within the array.
    // sorting the array using our custom insertion sort:
    insertionSort(cart);
    // now checking if prodID is in cart, if its not in there, we add it in the cart
    // array. Now In case we extend functinality to increase the number of items from,
    // the single-product page, we will have to convert this ID array to object array
    // of {prodID, prodQty} but that is if and when.
    // If this capability is added, we will then have to add an else to increase the
    // item Qty count. for now, no need for an else.
    if (binarySearch(cart, prodID) === -1) {
        cart.push(prodID);
    }
    console.log(cart);
    // okay, now we put the cart array back into the "products" row of local storage
    localStorage.setItem("products", JSON.stringify(cart));
}

// Helping Functions:
// A helping function for sorting the cart array using Insertion Sort Method:
// and yes, I wrote it, not ChatGPT, and if ur wondering where the label break came
// from, that came from reading the MDN documentation.
function insertionSort(arr) {
    let j;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        j = i - 1;
        innerWhile: while (j >= 0) {
            if (arr[j] < arr[j + 1]) {
                break innerWhile;
            }
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            j -= 1;
        }
    }
    return arr;
}

// A helping function to find a prodID from the cart array using the Binary
// Search Algorithm. Why? Because I can.
function binarySearch(arr, target) {
    let L = 0;
    let R = arr.length - 1;
    let M;
    while (L <= R) {
        M = Math.floor((L + R) / 2);
        if (target > arr[M]) L = M + 1;
        else if (target < arr[M]) R = M - 1;
        else return M;
    }
    return -1;
}
