const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/connection");

const { hashPassword } = require('../utils/auth')

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            set(value) {
                this.setDataValue('password', hashPassword(value));
            },
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    }
);

module.exports = User;