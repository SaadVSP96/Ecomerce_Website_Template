// fetchAllProducts is an async function and so to its direct result is
// gonna be a promise. We can await its result to get the actual array but
// to use await in such a way we would need to be in an async function.

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
