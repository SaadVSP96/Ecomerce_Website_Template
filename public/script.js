// PROJECT CLOSED -> 9/5/2024

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

// define the current page globally:
let curretPage = 1;

// the following array is a deepcopy of the productData array and allows
// us to throw it around mutating it like its the town bike.
let displayProdArray = structuredClone(productData);

// Category Filteration:
const catg_chkbxs = document.querySelectorAll(".pro-categories .chkbx");
// console.log(catg_chkbxs); // will display [] on pages where this is not found in the HTML

// Price Sorting:
const price_sort_chkbxs = document.querySelectorAll(".pro-sorting .chkbx");

// Search Filteration:
const searchBar = document.querySelector("#search-item");

// Pagination:
const prevPageBtn = document.querySelector("#btn-prev");
const nextPageBtn = document.querySelector("#btn-next");
const itemCountSelector = document.querySelector("#itemPerPageSelect");

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
        productPopulate(featuredFilterationPlant());
    }

    // Runs on Shop Page, requires checks
    if (
        currentURLpathname.includes("shop.html") ||
        currentURLpathname == "/shop"
    ) {
        // Category Filteration:
        catg_chkbxs.forEach((chkbx) => {
            chkbx.addEventListener("click", masterFunction);
        });
        // Price Sorting:
        price_sort_chkbxs.forEach((chkbx) => {
            chkbx.addEventListener("click", masterFunction);
        });
        // Search Filteration:
        searchBar.addEventListener("keyup", masterFunction);
        // Pagination
        prevPageBtn.addEventListener("click", prevPage);
        nextPageBtn.addEventListener("click", nextPage);
        itemCountSelector.addEventListener("change", masterFunction);

        // waterfall and sieve approach
        productPopulate(
            priceSortingPlant(
                changePage(
                    curretPage,
                    searchFilterationPlant(
                        categoryFilterationPlant(displayProdArray)
                    )
                )
            )
        );
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

// Category Filter Function:
// This function is responsible for reducing the displayObjects based on the selected
// filters.
function categoryFilterationPlant(someProdArray) {
    // we need the same queryselector as before since we no longer have access
    // to the local array of the buttons, but their states are probably global.
    const activeCategories = [];
    catg_chkbxs.forEach((chkbx) => {
        if (chkbx.checked == true) {
            activeCategories.push(chkbx.value);
        }
    });

    function categoryFilter(product) {
        const isSubset = activeCategories.every((category) =>
            product.categories.includes(category)
        );
        return isSubset;
    }

    const catfilteredProdArray = someProdArray.filter(categoryFilter);
    return catfilteredProdArray;
}

// Price Sorting Filter:
function priceSortingPlant(someProdArray) {
    // sortLowToHighBtn.checked == false;
    sortLowToHighBtn = price_sort_chkbxs[0];
    sortHighToLowBtn = price_sort_chkbxs[1];

    if (
        sortLowToHighBtn.checked == false &&
        sortHighToLowBtn.checked == false
    ) {
        const arr = someProdArray;
        return arr;
    } else if (
        sortLowToHighBtn.checked == true &&
        sortHighToLowBtn.checked == false
    ) {
        const arr = mergeSort(someProdArray, 0, someProdArray.length - 1);
        return arr;
    } else if (
        sortHighToLowBtn.checked == true &&
        sortLowToHighBtn.checked == false
    ) {
        const arr = mergeSort(someProdArray, 0, someProdArray.length - 1);
        // need to reverse entire array, using sliding window approach:
        let L = 0;
        let R = arr.length - 1;
        let buffer = undefined;
        while (L < R) {
            buffer = arr[L];
            arr[L] = arr[R];
            arr[R] = buffer;
            L++;
            R--;
        }
        return arr;
    } else {
        const arr = someProdArray;
        return arr;
    }

    function mergeSort(arr, s, e) {
        if (e - s + 1 <= 1) {
            return arr;
        }
        // the middle index of the given product array
        const m = Math.floor((s + e) / 2);
        // sorting the left half
        mergeSort(arr, s, m);
        // sorting the right half
        mergeSort(arr, m + 1, e);
        // merge the sorted halfs
        merge(arr, s, m, e);
        // return the worked array
        return arr;
    }

    function merge(arr, s, m, e) {
        let L = arr.slice(s, m + 1);
        let R = arr.slice(m + 1, e + 1);

        let i = 0; //index to travel L
        let j = 0; //index to travel R
        let k = s; //index to travel arr

        // merge the two sorted halfs into the original array
        while (i < L.length && j < R.length) {
            if (L[i].prodPrice < R[j].prodPrice) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // handle the half that has elements remaining
        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}

// Search Filter:
function searchFilterationPlant(someProdArray) {
    const searchTerm = searchBar.value.trim().toUpperCase();
    const searchedProdArray = [];
    someProdArray.forEach((prod) => {
        if (prod.prodName.toUpperCase().indexOf(searchTerm) > -1) {
            searchedProdArray.push(prod);
        }
    });
    return searchedProdArray;
}

// Pagination Functionality:
// goal is to reduce the items to the number of items which are to be displayed
// on the page as specified by the user:
function changePage(page, someProdArray) {
    const currPageIndicator = document.querySelector("#current-page");
    currPageIndicator.textContent = curretPage;
    const itemsPerPage = parseInt(itemCountSelector.value);
    const noOfPages = Math.ceil(someProdArray.length / itemsPerPage);
    // Validate the current page:
    if (page < 1) page = 1;
    if (page > noOfPages) page = noOfPages;

    // define a new array into which the object array should be spliced:
    let paginatedProdArray = [];
    for (let i = itemsPerPage * (page - 1); i < page * itemsPerPage; i++) {
        if (someProdArray[i]) {
            paginatedProdArray.push(someProdArray[i]);
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
    return paginatedProdArray;
}

function prevPage() {
    if (curretPage > 1) {
        curretPage--;
        masterFunction();
    }
}

function nextPage() {
    curretPage++;
    masterFunction();
}

// Product Population Functionality - Runs on Home Page and Shop Page
// This is basically an end point function for our waterfall
// Insert Objects dynamically instead of prewriting:
function productPopulate(someProdArray) {
    const pro_container = document.querySelector("#product1 .pro-container");
    pro_container.innerHTML = "";
    // define template literal and inserting objects iteratively:
    for (let i = 0; i < someProdArray.length; i++) {
        // Use template literals correctly and pass the event object to the function
        let newProduct = `
    <div class="pro">
        <img src="${someProdArray[i].prodAdress}" alt="" / onclick="window.location.href='single_product.html?id=${someProdArray[i].prodID}'">
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
            <p>Product ID:- ${someProdArray[i].prodID}</p>
            <button onclick="addToCart(event, ${someProdArray[i].prodID})">
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
            (obj) => obj.prodID === cart[i][0]
        );
        currProd = productData[currProdIndex];
        // Calculate the initial subtotal (prodPrice * quantity)
        const quantity = cart[i][1];
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
    // We are going to store the coupon value in the page function's scope
    let couponValueUser = ""; // default value is no value in it.
    const couponValueActual = "AISLE9";
    const shippingFee = 0;

    // function to remove from cart
    function removeFromCart(removeBtn) {
        // We can capture the parent row element using the closest method:
        const cartEntry = removeBtn.closest("tr");
        currentProdId = parseInt(cartEntry.querySelector(".ID").innerText, 10);
        // Now to remove the product from local storage
        let cart = JSON.parse(localStorage.getItem("products"));
        cart = cart.filter((item) => {
            return item[0] !== currentProdId;
        });
        localStorage.setItem("products", JSON.stringify(cart));
        // remove the single count entry from the cart table
        cartEntry.remove();
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
        // We also need to update this value in the cart so that on reaload the data
        // is not lost. For that we need the current item's id and we use that to
        // locate it in the cart:
        const cartEntryId = parseInt(
            cartEntry.querySelector(".ID").innerText,
            10
        );
        let cart = JSON.parse(localStorage.getItem("products"));
        const cartEntryIndex = cart.findIndex(
            (entry) => entry[0] === cartEntryId
        );
        cart[cartEntryIndex][1] = quantity;
        localStorage.setItem("products", JSON.stringify(cart));
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
        let grandTotal = Total + shippingFee;
        document.querySelector(
            "#cart-add #subtotal .grandTotal"
        ).innerText = `$ ${grandTotal}`;

        // Add event listener to the Apply Button after the Coupon input
        // We are going to store the coupon value in the current function's scope
        const applyCouponBtn = document.querySelector(
            "#cart-add #coupon button"
        );
        applyCouponBtn.addEventListener("click", () => {
            const couponInput = document.querySelector(
                "#cart-add #coupon input"
            );
            couponValueUser = couponInput.value.trim();
            // since coupon has been applied, gotta update the  grand total
            applyCouponDiscount();
        });

        function applyCouponDiscount() {
            if (
                couponValueUser === couponValueActual &&
                grandTotal >= Math.floor(grandTotal * 0.7)
            ) {
                const newTotal = grandTotal - Math.floor(grandTotal * 0.3);
                document.querySelector(
                    "#cart-add #subtotal .grandTotal"
                ).innerText = `$ ${newTotal}`;
            } else {
                document.querySelector("#coupon h4").style.display = "block";
                setTimeout(() => {
                    document.querySelector("#coupon h4").style.display = "none";
                }, 5000);
                document.querySelector(
                    "#cart-add #subtotal .grandTotal"
                ).innerText = `$ ${grandTotal}`;
            }
        }
    }

    // the cartEntryPopulate function has to also populate the grand total on the
    // cart page loadup:
    updateGrandtotal(cartbody);
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
        cart.push([prodID, 1]);
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
            if (arr[j][0] < arr[j + 1][0]) {
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
        if (target > arr[M][0]) L = M + 1;
        else if (target < arr[M][0]) R = M - 1;
        else return M;
    }
    return -1;
}
