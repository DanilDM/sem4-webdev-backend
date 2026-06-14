const Order = require("../models/Order");

const addOrder = (data) => Order.create(data);

module.exports = { addOrder };