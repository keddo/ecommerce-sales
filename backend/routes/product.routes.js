import express from 'express';
import {getProduct, getProducts, addProduct, updateProduct, removeProduct} from '../controllers/Product.controller.js';
const router = express.Router();

router.get('/:id', getProduct);

router.get('/', getProducts);

router.post('/', addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', removeProduct);

export default router;