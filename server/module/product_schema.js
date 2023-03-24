import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String

});

const product = mongoose.model('product', ProductsSchema);
export default product;
