import product from "../module/product_schema.js";


export const getProducts = async (request, response) => {
    try {
        const products = await product.find({});

        response.json(products);
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


export const getProductById = async (request, response) => {
    try {
        console.log("helow")
        const products = await product.findOne({ 'id': request.params.id });
        response.json(products);
    } catch (error) {

    }
}