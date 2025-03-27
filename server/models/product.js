const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        price_gbp: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        discount: {
            type: DataTypes.FLOAT,
        },
        picture_url: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING(1),
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Product',
    }
);

module.exports = Product;