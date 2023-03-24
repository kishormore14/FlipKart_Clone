import { products } from "./constant/data.js"
import product from "./module/product_schema.js"

const DefaultData = async () => {
    try {

        await product.insertMany(products)
        console.log("imported sucess full")
    } catch (error) {
        console.log("error while inserting default data", error.message)
    }

}

export default DefaultData;