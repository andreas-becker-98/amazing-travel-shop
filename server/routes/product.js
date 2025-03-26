const app = require('express').Router();

const { Product, ProductDetails, Category } = require('../models');
const { productToPayload } = require('../models/conversions');

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

    if(products)
        data.push(...products.map(productToPayload));

    res.json(data);
});

app.get('/:id', async (req, res) => {
    const id = Number.parseInt(req.params.id);

    if(Number.isNaN(id)) {
        res.sendStatus(400);
        return;
    }

    const product = await Product.findByPk(id, {
        include: [
            {
                model: Category
            },
            {
                model: ProductDetails
            }
        ],
    });

    if(!product) {
        res.sendStatus(404);
        return;
    }
    
    const data = productToPayload(product);

    res.json(data);
});

app.get('/for/:audience', async (req, res) => {
    if(!["m", "f", "u"].includes(req.params.audience)) {
        res.sendStatus(404);
        return;
    }

    const data = [];
    const products = await Product.findAll({
        where: {
            audience: req.params.audience,
        },
        include: [
            {
                model: Category
            },
            {
                model: ProductDetails
            }
        ],
    });

    if(products)
        data.push(...products.map(productToPayload));

    res.json(data);
});





module.exports = app;