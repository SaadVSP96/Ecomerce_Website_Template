// importing function to import all products
import { fetchAllProducts } from "./fetchProducts.js";

// fetchAllProducts is an async function and so to its direct result is
// gonna be a promise. We can await its result to get the actual array but
// to use await in such a way we would need to be in an async function.
// define product data before the async call
let productData;
// now call the Immediately Invoked Function Expression (IIFE)
// to import and assign the data
(async () => {
    // as a demo: not for real but yeah u can space out the assignment from the await
    productData = fetchAllProducts(); // right now this is just a promise
    productData = await productData; // waiting for promise to get resolved
    console.log(productData);
    cartEntryPopulate();
})();

// Cart Population Functionality - Runs on the Cart Page
function cartEntryPopulate() {
    // First we need the array in the cart, so get those prodIDs
    let cart = JSON.parse(localStorage.getItem("products"));
    console.log(cart);
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
            (obj) => obj._id === cart[i]
        );
        const currProd = productData[currProdIndex];
        console.log(currProd);
        // Calculate the initial subtotal (prodPrice * quantity)
        const quantity = 1;
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
                <td class="ID">${currProd._id}</td>
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
        const currentProdId = cartEntry.querySelector(".ID").innerText;
        // Now to remove the product from local storage
        let cart = JSON.parse(localStorage.getItem("products"));
        cart = cart.filter((item) => {
            return item !== currentProdId;
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
