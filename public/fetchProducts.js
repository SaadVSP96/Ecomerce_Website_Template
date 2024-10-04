export const fetchAllProducts = async () => {
    const allProdArray = [];
    try {
        const {
            data: { products: productData },
        } = await axios.get("/api/v1/products");
        allProdArray.push(...productData);
    } catch (error) {
        console.log("Error fetching product data:", error);
    }
    return allProdArray;
};
