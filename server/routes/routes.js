import express from 'express';
import { userSignUp, userLogIn } from '../User-Controler/user_Controler.js';
import { getProducts, getProductById } from '../User-Controler/product-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);


router.get('/products', getProducts);
router.get('/product/:id', getProductById);




export default router;
