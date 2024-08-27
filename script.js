// ALL JS CODE:

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

// Creating Shop Objects Using JS:

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

const newProduct = document.createElement("div");
newProduct.classList.add("pro");
newProduct.onclick = "window.location.href='single_product.html'";
// define template literal:
newProduct.innerHTML = `
                    <img src=${productData[0]} alt="" />
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
`;
