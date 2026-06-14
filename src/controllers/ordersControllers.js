const ctrlWrapper = require("../helpers/ctrlWrapper");
const ordersServices = require("../services/ordersServices");

const createOrder = async (req, res) => {
    const newOrder = await ordersServices.addOrder(req.body);
    res.status(201).json(newOrder);
};

module.exports = {
    createOrder: ctrlWrapper(createOrder),
};