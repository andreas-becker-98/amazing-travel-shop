const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/connection");

class ProductDetails extends Model {}

ProductDetails.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lang: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ProductDetails',
    }
);

module.exports = ProductDetails;