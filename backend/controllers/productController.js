const Product = require('../models/product')
exports.newProduct = async (req, res, next) => {
    console.log(req.body);
    const product = await Product.create(req.body);
    const test = await console.log('from async');
    console.log(product);
    console.log(test)
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

exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.param.id, req.body, {
        new: true,
        runValidators: true,
        useFindandModify: false
    })
    res.send(200).json({
        success: true,
        product
    })
}

exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: 'Product deleted'
    })
}