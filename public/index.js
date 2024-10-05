// importing product rendering functionality
import { productPopulate } from "./productPopulate.js";

const featuredFilterationPlant = async () => {
    const featuredProdArray = [];
    try {
        const {
            data: { products: productData },
        } = await axios.get("/api/v1/products");
        // console.log(productData);
        let i = 0;
        while (i < productData.length) {
            if (productData[i].categories.includes("featured")) {
                featuredProdArray.push(productData[i]);
            }
            i++;
        }
    } catch (error) {
        console.log("Error fetching product data:", error);
    }
    return featuredProdArray;
};

// Populate featured products
featuredFilterationPlant().then((featuredProducts) => {
    productPopulate(featuredProducts);
});
