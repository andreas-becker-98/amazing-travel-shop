const app = require('express').Router();

const { Order, OrderItem, Product } = require('../models');
const { productToPayload } = require('../models/conversions');
const { authMiddleware } = require('../utils/auth');

const orderToPayload = (order) => {
    return {
        reference: order.reference,
        placed_on: order.placed_on,
        processed_on: order.processed_on,
        delivered_on: order.delivered_on,
        address: order.delivery_address,
        items: order.OrderItem.map((item) => {
            return {
                quantity: item.quantity,
                individual_price: item.individual_price,
                subtotal: (item.individual_price * item.quantity),
                product:  productToPayload(item.Product),
            };
        })
    };
};

app.get('/', authMiddleware, async (req, res) => {
    const data = [];

    const orders = await Order.findAll({
        where: {
            user_id: req.user.id,
        },
        include: [
            {
                model: OrderItem
            },
            {
                model: Product
            },
        ]
    });

    if(orders) {
        data.push(...orders.map(orderToPayload));
    }

    res.json(data);
});

app.get('/:id', authMiddleware, async (req, res) => {
    const id = Number.parseInt(req.params.id);

    if(Number.isNaN(id)) {
        res.sendStatus(400);
        return;
    }

    const order = await Order.findByPk(id, {
        where: {
            user_id: req.user.id,
        },
        include: [
            {
                model: OrderItem
            },
            {
                model: Product
            },
        ],
    });

    if(!order) {
        res.sendStatus(404);
        return;
    }
    
    const data = orderToPayload(order);

    res.json(data);
});

app.post('/create/', authMiddleware, async (req, res) => {
    //req.user.id
    const cart = req.body;
    
    
    const order = await Order.create({

    });
    const orderItems = ...Order;

    const data = [];

    const orders = await Order.findAll({
        where: {
            user_id: ,
        },
        include: [
            {
                model: OrderItem
            },
            {
                model: Product
            },
        ]
    });

    if(orders) {
        data.push(...orders.map(orderToPayload));
    }

    res.json(data);
});

module.exports = app;