//nombre , precio, cantidadInventario, registerDate (DATE)
//
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  registerDate: { type: Date, default: Date.now },
});

const product = mongoose.model("productos", productSchema);

export default product
