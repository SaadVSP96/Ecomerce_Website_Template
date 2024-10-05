// Cart Functionality:
// Adding this line to make the function available globally
window.addToCart = addToCart;
// Lets Add all Event Listeners
// We need event listeners on the cart icons that activate the addToCart Function
export function addToCart(event, _id) {
    event.stopPropagation(); // Prevent the parent click event from triggering
    const prod = _id;
    // define cart array to hold the product IDs currently in the local storage
    // of the site
    let cart;
    // localStorage.setItem(_id, JSON.stringify(prod));
    if (localStorage.key(0) === "products") {
        cart = JSON.parse(localStorage.getItem("products"));
    } else {
        cart = [];
    }
    // now checking if _id is in cart, if its not in there, we add it in the cart
    // array. Now In case we extend functinality to increase the number of items from,
    // the single-product page, we will have to convert this ID array to object array
    // of {prodID, prodQty} but that is if and when.
    // If this capability is added, we will then have to add an else to increase the
    // item Qty count. for now, no need for an else.
    if (!cart.includes(_id)) {
        cart.push(_id);
    }
    // okay, now we put the cart array back into the "products" row of local storage
    localStorage.setItem("products", JSON.stringify(cart));
}
