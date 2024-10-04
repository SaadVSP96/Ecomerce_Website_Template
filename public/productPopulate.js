// Product Population Functionality - Runs on Home Page and Shop Page
// This is basically an end point function for our waterfall
// Insert Objects dynamically instead of prewriting:
export function productPopulate(someProdArray) {
    const pro_container = document.querySelector("#product1 .pro-container");
    pro_container.innerHTML = "";
    // define template literal and inserting objects iteratively:
    for (let i = 0; i < someProdArray.length; i++) {
        // Use template literals correctly and pass the event object to the function
        let newProduct = `
    <div class="pro">
        <img src="${someProdArray[i].prodAdress}" alt="" / onclick="window.location.href='single_product.html?id=${someProdArray[i]._id}'">
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
            <button onclick="addToCart(event, ${someProdArray[i]._id})">
            <i class="fa fa-shopping-cart cart"></i>
            </button>
            </div>
            </div>
            `;
        // Append newProduct safely
        pro_container.innerHTML += newProduct;
    }
}
