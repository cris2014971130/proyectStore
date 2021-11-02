import express from "express";
import product from "../controller/product.js";

const router = express.Router();

router.post('/registerProduct', product.registerProduct);

export default router;