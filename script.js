// All Product Data:
let productData = [
    {
        prodID: 19,
        prodName: "Cartoon Shirt",
        prodAdress: "img/products/f1.jpg",
        prodBrand: "Adidas",
        categories: ["men", "shirts", "featured"],
        prodPrice: 78,
    },
    {
        prodID: 28,
        prodName: "Garden Shirt",
        prodAdress: "img/products/f2.jpg",
        prodBrand: "Balenciaga",
        categories: ["men", "shirts"],
        prodPrice: 578,
    },
    {
        prodID: 37,
        prodName: "Havian Shirt",
        prodAdress: "img/products/f3.jpg",
        prodBrand: "Chanel",
        categories: ["men", "shirts", "featured"],
        prodPrice: 111,
    },
    {
        prodID: 46,
        prodName: "F***Boy Shirt",
        prodAdress: "img/products/f4.jpg",
        prodBrand: "Prada",
        categories: ["men", "shirts", "featured"],
        prodPrice: 265,
    },
    {
        prodID: 55,
        prodName: "Emo-Boy Shirt",
        prodAdress: "img/products/f5.jpg",
        prodBrand: "GAP",
        categories: ["men", "shirts", "featured"],
        prodPrice: 99,
    },
    {
        prodID: 64,
        prodName: "Virginity Screamer Shirt",
        prodAdress: "img/products/f6.jpg",
        prodBrand: "None",
        categories: ["men", "shirts"],
        prodPrice: 8,
    },
    {
        prodID: 73,
        prodName: "Pants",
        prodAdress: "img/products/f7.jpg",
        prodBrand: "H3H3",
        categories: ["women", "pants"],
        prodPrice: 875,
    },
    {
        prodID: 82,
        prodName: "Shirt",
        prodAdress: "img/products/f8.jpg",
        prodBrand: "H3H3",
        categories: ["women", "shirts"],
        prodPrice: 987,
    },
    {
        prodID: 109,
        prodName: "Light Blue Dress Shirt",
        prodAdress: "img/products/n1.jpg",
        prodBrand: "H3H3",
        categories: ["men", "shirts"],
        prodPrice: 90,
    },
    {
        prodID: 208,
        prodName: "Light Gray Checkered Dress Shirt",
        prodAdress: "img/products/n2.jpg",
        prodBrand: "H3H3",
        categories: ["men", "shirts"],
        prodPrice: 102,
    },
    {
        prodID: 307,
        prodName: "Off White Dress Shirt",
        prodAdress: "img/products/n3.jpg",
        prodBrand: "H3H3",
        categories: ["men", "shirts", "featured"],
        prodPrice: 76,
    },
    {
        prodID: 406,
        prodName: "Camo Casual Shirt",
        prodAdress: "img/products/n4.jpg",
        prodBrand: "H3H3",
        categories: ["men", "shirts"],
        prodPrice: 55,
    },
    {
        prodID: 505,
        prodName: "Denim Full Sleeves Shirt",
        prodAdress: "img/products/n5.jpg",
        prodBrand: "H3H3",
        categories: ["women", "shirts"],
        prodPrice: 145,
    },
    {
        prodID: 604,
        prodName: "Dress Shorts ??",
        prodAdress: "img/products/n6.jpg",
        prodBrand: "H3H3",
        categories: ["men", "pants"],
        prodPrice: 35,
    },
    {
        prodID: 703,
        prodName: "Wheatish Brown Dress Shirt",
        prodAdress: "img/products/n7.jpg",
        prodBrand: "H3H3",
        categories: ["men", "shirts"],
        prodPrice: 260,
    },
    {
        prodID: 802,
        prodName: "Dark Gray Button Up Shirt",
        prodAdress: "img/products/n8.jpg",
        prodBrand: "H3H3",
        categories: ["men", "shirts"],
        prodPrice: 120,
    },
    {
        prodID: 110,
        prodName: "Green Cargo Pants",
        prodAdress: "img/products/p1.jpg",
        prodBrand: "H3H3",
        categories: ["men", "pants", "featured"],
        prodPrice: 290,
    },
    {
        prodID: 115,
        prodName: "Blue Cargo Pants",
        prodAdress: "img/products/p2.jpg",
        prodBrand: "H3H3",
        categories: ["men", "pants", "featured"],
        prodPrice: 270,
    },
    {
        prodID: 120,
        prodName: "Maroon Chinos",
        prodAdress: "img/products/p3.jpg",
        prodBrand: "H3H3",
        categories: ["men", "pants"],
        prodPrice: 190,
    },
    {
        prodID: 125,
        prodName: "Black Dress Pants",
        prodAdress: "img/products/p4.jpg",
        prodBrand: "H3H3",
        categories: ["men", "pants"],
        prodPrice: 200,
    },
    {
        prodID: 130,
        prodName: "Brown Cargo Pants",
        prodAdress: "img/products/p5.jpg",
        prodBrand: "H3H3",
        categories: ["men", "pants", "featured"],
        prodPrice: 230,
    },
    {
        prodID: 135,
        prodName: "White long Pants",
        prodAdress: "img/products/w1.jpg",
        prodBrand: "H3H3",
        categories: ["women", "pants"],
        prodPrice: 310,
    },
    {
        prodID: 140,
        prodName: "Blue Denim Pants",
        prodAdress: "img/products/w2.jpg",
        prodBrand: "H3H3",
        categories: ["women", "pants"],
        prodPrice: 250,
    },
    {
        prodID: 145,
        prodName: "Brown Casual Pants",
        prodAdress: "img/products/w3.jpg",
        prodBrand: "H3H3",
        categories: ["women", "pants"],
        prodPrice: 180,
    },
    {
        prodID: 150,
        prodName: "Off White Long Pants",
        prodAdress: "img/products/w4.jpg",
        prodBrand: "H3H3",
        categories: ["women", "pants"],
        prodPrice: 310,
    },
    {
        prodID: 155,
        prodName: "Bright Red Pants",
        prodAdress: "img/products/w5.jpg",
        prodBrand: "H3H3",
        categories: ["women", "pants"],
        prodPrice: 210,
    },
];

// Master Function to control function executions for specific pages:
const currentURLhref = window.location.href;
const currentURLpathname = window.location.pathname;
// To capture the checkboxes for filtering the products on the shop page
const chkbxs = document.querySelectorAll(".chkbx");
chkbxs.forEach((chkbx) => {
    chkbx.addEventListener("click", filterationPlant);
    chkbx.addEventListener("click", () => changePage(curretPage));
});
// define the current page globally:
let curretPage = 1;
// the following array is a deepcopy of the productData array and allows
// us to through it around mutating it like its the town bike.
let displayProdArray = structuredClone(productData);
// For Calling the Master function Each time a Page is loaded
document.addEventListener("DOMContentLoaded", masterFunction);

function masterFunction() {
    // Runs on all pages, no need for checks
    navBar();

    // Runs on Home Page requires checks
    if (
        currentURLpathname.includes("index.html") ||
        currentURLpathname == "/"
    ) {
        // console.log(featuredFilterationPlant());
        productPopulate(featuredFilterationPlant());
    }

    // Runs on Shop Page, requires checks
    if (
        currentURLpathname.includes("shop.html") ||
        currentURLpathname == "/shop"
    ) {
        changePage(curretPage);
    }

    // Runs only on single-product page, requires checks
    if (
        currentURLpathname.includes("single_product.html") ||
        currentURLpathname == "/single_product"
    ) {
        singleProductPopulate();
    }

    // Runs only on cart page, requires checks
    if (
        currentURLpathname.includes("cart.html") ||
        currentURLpathname == "/cart"
    ) {
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

// Featured Filteration Function
// This function is supposed to make a new array directly from the main productData array
// which contains the featured products and supply it to the product populate function for
// populating featured products on the main page.
function featuredFilterationPlant() {
    const featuredProdArray = [];
    let i = 0;
    while (i < productData.length) {
        if (productData[i].categories.includes("featured")) {
            featuredProdArray.push(productData[i]);
        }
        i++;
    }
    return featuredProdArray;
}

// Filteration Function
// This function is responsible for reducing the displayObjects based on the selected
// filters.
function filterationPlant() {
    // right now that we have access to the town bike, we need access to the
    // the status of the category button values. We can store those values in
    // an array:
    // we need the same queryselector as before since we no longer have access
    // to the local array of the buttons, but their states are probably global.
    const activeCategories = [];
    chkbxs.forEach((chkbx) => {
        if (chkbx.checked == true) {
            activeCategories.push(chkbx.value);
        }
    });
    let from = 0;
    let to = 0;
    while (from < productData.length) {
        const isSubset = activeCategories.every((category) =>
            productData[from].categories.includes(category)
        );
        if (isSubset) {
            displayProdArray[to] = productData[from];
            to++;
        }
        from++;
    }
    displayProdArray.length = to;
}

// Pagination Functionality:
// this function will take the global display prod array, and chop it
// up further before it gets to the product populate function. The
// goal is to reduce the items to the number of items which are to be displayed
// as specified by the user:
function changePage(page) {
    // To capture the itemsPerPage input form:
    const itemCountSelector = document.querySelector("#itemPerPageSelect");
    itemCountSelector.addEventListener("change", () => changePage(curretPage));
    // To capture the buttons for pagination
    const prevPageBtn = document.querySelector("#btn-prev");
    prevPageBtn.addEventListener("click", prevPage);
    const nextPageBtn = document.querySelector("#btn-next");
    nextPageBtn.addEventListener("click", nextPage);
    const currPageIndicator = document.querySelector("#current-page");
    currPageIndicator.textContent = curretPage;
    // this function also is called when the user clicks and changes the
    // items per page input:
    // filterationPlant();
    const itemsPerPage = parseInt(itemCountSelector.value);
    const noOfPages = Math.ceil(displayProdArray.length / itemsPerPage);
    // Validate the current page:
    if (page < 1) page = 1;
    if (page > noOfPages) page = noOfPages;

    // define a new array into which the object array should be spliced:
    let paginatedProdArray = [];
    for (let i = itemsPerPage * (page - 1); i < page * itemsPerPage; i++) {
        if (displayProdArray[i]) {
            paginatedProdArray.push(displayProdArray[i]);
        }
    }
    if (page == 1) {
        prevPageBtn.style.display = "none";
    } else {
        prevPageBtn.style.display = "inline-block";
    }

    if (page == noOfPages) {
        nextPageBtn.style.display = "none";
    } else {
        nextPageBtn.style.display = "inline-block";
    }
    currPageIndicator.textContent = page;
    productPopulate(paginatedProdArray);
}

function prevPage() {
    if (curretPage > 1) {
        curretPage--;
        changePage(curretPage);
    }
}

function nextPage() {
    curretPage++;
    changePage(curretPage);
}

// Product Population Functionality - Runs on Home Page and Shop Page
// Insert Objects dynamically instead of prewriting:
function productPopulate(prodArray) {
    const pro_container = document.querySelector("#product1 .pro-container");
    pro_container.innerHTML = "";
    // define template literal and inserting objects iteratively:
    for (let i = 0; i < prodArray.length; i++) {
        // Use template literals correctly and pass the event object to the function
        let newProduct = `
    <div class="pro">
        <img src="${prodArray[i].prodAdress}" alt="" / onclick="window.location.href='single_product.html?id=${prodArray[i].prodID}'">
        <div class="desc">
            <span>${prodArray[i].prodBrand}</span>
            <h5>${prodArray[i].prodName}</h5>
            <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <h4>$${prodArray[i].prodPrice}</h4>
            <p>Product ID:- ${prodArray[i].prodID}</p>
            <button onclick="addToCart(event, ${prodArray[i].prodID})">
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
    // We must also have access to the container for each table row:
    const cartbody = document.querySelector("#cart tbody");
    // in case cart is empty:
    if (!cart) {
        return;
    }
    // when cart is not empty:
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
                    <input type="number" value="${quantity}" min="1" class="quantity-input"/>
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
        ["input", "keydown"].forEach((evnt) => {
            inputArea.addEventListener(evnt, function () {
                updateSubtotal(this);
            });
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
        updateGrandtotal(cartbody);
    }

    // function to update the subtotals
    function updateSubtotal(inputArea) {
        if (parseInt(inputArea.value) < 0 || isNaN(inputArea.value)) {
            inputArea.value = 1;
        } else if (inputArea.value == "") {
            inputArea.value = 0;
        }

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
        let Total = 0;
        allCartEntrySubTotals.forEach((entry) => {
            Total += entry;
        });
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
        if (couponValueUser === couponValueActual) {
            grandTotal -= Math.floor(grandTotal * 0.3);
            document.querySelector(
                "#cart-add #subtotal .grandTotal"
            ).innerText = `$ ${grandTotal}`;
        } else {
            document.querySelector(
                "#cart-add #subtotal .grandTotal"
            ).innerText = `$ ${grandTotal}`;
        }
    }

    // the cartEntryPopulate function has to also populate the grand total on the
    // cart page loadup:
    updateGrandtotal(cartbody);

    // This part handles dumpping old data:
    // Initialize state
    let isPageVisible = true;
    // Listen for visibility change events
    document.addEventListener("visibilitychange", () => {
        isPageVisible = document.visibilityState === "visible";
    });

    // Handle the beforeunload event
    window.addEventListener("beforeunload", (event) => {
        if (isPageVisible) {
            // Clear localStorage only if the page is visible
            localStorage.clear();
        }
    });
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
