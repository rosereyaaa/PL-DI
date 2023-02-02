const Product = require('../models/product')
exports.newProduct = async (req, res, next) => {
    console.log(req.body);
    const product = await Product.create(req.body);
    console.log(product);
    res.status(201).json({
        success: true,
        product
    })
}

exports.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}