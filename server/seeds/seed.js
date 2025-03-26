const sequelize = require("../config/connection");

const bcrypt = require("bcrypt");

// import models
const { Product, ProductDetails, Category, User } = require("../models");

// import seed data
const categoriesData = require("./categories.json");
const productData = require("./products.json");
const productDetailsData = require("./productsDetails.json");

// Seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoriesData);
  await Product.bulkCreate(productData);
  await ProductDetails.bulkCreate(productDetailsData);

  process.exit(0);
};

// Call seedDatabase function
seedDatabase();