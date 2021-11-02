import product from "../models/product.js";

const registerProduct = async (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.stock)
    return res.status(400).send("Datos incompletos");
  const existingProduct = await product.findOne({name: req.body.name}); 
    if(existingProduct)
        return res.status(400).send("Este rol ya existe");
    const productSchema = new product({
        name: req.body.name,
        price: req.body.description,
        stock: req.body.stock
    });
    
    const result = await productSchema.save();
    if(!result) res.sendStatus(500).send("No se pudo agregar en la BD");  
    return res.status(200).send({result});    
};

export default {registerProduct}