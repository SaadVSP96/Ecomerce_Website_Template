// importing function to import all products
import { fetchAllProducts } from "./fetchProducts.js";
// importing add to cart function from addToCart
import { addToCart } from "./addToCart.js";
// importing product rendering functionality
import { productPopulate } from "./productPopulate.js";

// fetchAllProducts is an async function and so to its direct result is
// gonna be a promise. We can await its result to get the actual array but
// to use await in such a way we would need to be in an async function.

// define product data before the async call
let productData;
// now call the Immediately Invoked Function Expression (IIFE)
// to import and assign the data
(async () => {
    // as a demo: not for real but yeah u can space out the assignment from the await
    productData = fetchAllProducts();
    productData = await productData;
    masterFunction();
})();

// define the current page globally
let curretPage = 1;
// capturing the requisite buttons
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

// QUESTION -> wait, then say an event listener like the following is triggered how
// come that masterfunction has access to productData despite that the call is
// seemingly no loger going through the IIFE?

// ANS -> The Immediately Invoked Function Expression (IIFE) fetches product data asynchronously
//  and assigns it to the productData variable, which is declared in the outer scope. Once
// the IIFE completes, productData retains the fetched data, making it accessible globally.
// Consequently, when event listeners (like those for the search bar or pagination buttons)
// trigger the masterFunction, it can utilize the already populated productData, as it
// exists in the outer scope. Therefore, masterFunction can access productData without
// needing to refetch it or call the IIFE again.

// waterfall and sieve approach with the filtes
function masterFunction() {
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
                searchFilterationPlant(categoryFilterationPlant(productData))
            )
        )
    );
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
    const sortLowToHighBtn = price_sort_chkbxs[0];
    const sortHighToLowBtn = price_sort_chkbxs[1];

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
