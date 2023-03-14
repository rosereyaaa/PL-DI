const Product = require("../models/product");
const APIFeatures = require("../utils/apiFeatures.js");
const ErrorHandler = require("../utils/errorHandler");

//create new product

exports.newProduct = async (req, res, next) => {
    console.log(req.user);

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,

        product,
    });
};

exports.getProducts = async (req, res, next) => {
    const resPerPage = 4;
    const productsCount = await Product.countDocuments();

    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter();

    // let products = await apiFeatures.query;

    apiFeatures.pagination(resPerPage);
    products = await apiFeatures.query;
    let filteredProductsCount = products.length;

    res.status(200).json({
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
        products,
    });

    // return next(new ErrorHandler("my error", 400));
};

exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    console.log(product);

    // if(!product) {

    // 		return res.status(404).json({

    // 			success: false,

    // 			message: 'Product not found'

    // 		});

    // }

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,

        product,
    });
};

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,

            message: "Product not found",
        });
    }

    product = await Product.findByIdAndUpdate(req.param.id, req.body, {
        new: true,

        runValidators: true,

        useFindandModify: false,
    });

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,

        product,
    });
};

exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,

            message: "Product not found",
        });
    }

    await product.remove();

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,

        product,
    });
};

exports.createProductReview = async (req, res, next) => {

    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        r => r.user.toString() === req.user._id.toString()
    )

    if (isReviewed) {

        product.reviews.forEach(review => {
            if (review.user.toString() === req.user._id.toString()) {
                review.comment = comment;
                review.rating = rating;
            }
        })

    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length
    }

    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })

}