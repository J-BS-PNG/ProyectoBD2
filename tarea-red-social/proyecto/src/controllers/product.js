// Import function from Product Model
//import { getProducts, getProductById, insertProduct, updateProductById, deleteProductById } from "../models/productModel.js";
 
const {getProducts, getProductById, insertProduct, updateProductById, deleteProductById} = require("../models/productModel");

// Get All Products
 module.exports = {
     
    showProducts :  (req, res) => {
    getProducts((err, results) => {
        console.log(req);
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}, 
 
// Get Single Product 
 showProductById:  (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},
 
// Create New Product
createProduct:  (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},
 
// Update Product
 updateProduct :  (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},
 
// Delete Product
 deleteProduct: (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}};