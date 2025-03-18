const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/connection");

class Order extends Model {}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        placed_on: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        processed_on: {
            type: DataTypes.DATE,
        },
        delivered_on: {
            type: DataTypes.DATE,
        },
        delivery_address: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Order',
    }
);

module.exports = Order;