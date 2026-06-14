const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

class Bouquet extends Model {}

Bouquet.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        photoURL: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: "bouquet",
        tableName: "bouquets",
        timestamps: true,
    }
);

module.exports = Bouquet;