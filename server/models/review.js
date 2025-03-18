const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        score: {
            type: DataTypes.TINYINT,
            validate: {
                min: 0,
                max: 10,
            },
            allowNull: false,
        },
        date_added: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
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

module.exports = Review;