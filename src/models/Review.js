const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "review",
        tableName: "reviews",
        timestamps: true,
    }
);

module.exports = Review;