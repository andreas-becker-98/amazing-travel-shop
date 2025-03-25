const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/connection");

class OrderItem extends Model {}

OrderItem.init(
    {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
            },
        },
        individual_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0.0,
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Review',
    }
);

module.exports = OrderItem;