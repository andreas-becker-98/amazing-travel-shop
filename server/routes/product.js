const app = require('express').Router();

const { Product, ProductDetails, Category } = require('../models');

app.get('/', async (_, res) => {
    const data = [];
    const products = await Product.findAll({
        include: [
            {
                model: Category
            },
            {
                model: ProductDetails
            }
        ],
    });
    
    products.forEach((prod) => {

        data.push({
            id: prod.id,
            price: {
                "gbp": prod.price_gbp,
                "eur": Number((prod.price_gbp * 1.19).toFixed(2)),
            },
            discount: prod.discount,
            category: { ...prod.Category.dataValues },
            details: prod.ProductDetails.map((prodDetail) => {
                return {
                    lang: prodDetail.lang,
                    name: prodDetail.name,
                    description: prodDetail.description,
                };
            }),
        });
    });

    res.json(data);
});





module.exports = app;