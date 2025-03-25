const User = require('./user');
const Product = require('./product');
const ProductDetails = require('./productDetails');
const Category = require('./category');
const Review = require('./review');
const Order = require('./order');
const OrderItem = require('./orderItem');

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
});
Product.belongsTo(Category);

Product.hasMany(ProductDetails, {
    foreignKey: 'product_id',
    onDelete: 'SET NULL',
});
ProductDetails.belongsTo(Product);

// <User> 1 --- N <Reviews> M ---- 1 <Product>
User.belongsToMany(Product, { through: Review });
Product.belongsToMany(User, { through: Review });


// User to Order relationship
User.hasMany(Order, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Order.belongsTo(User);

// Product to OrderItem relationship
Product.hasMany(OrderItem, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});
OrderItem.belongsTo(Product);

// Order to OrderItem relationship
Order.hasMany(OrderItem, {
    foreignKey: 'order_id',
    onDelete: 'CASCADE'
});
OrderItem.belongsTo(Order);



module.exports = { User, Product, ProductDetails, Category, Review, Order, OrderItem };