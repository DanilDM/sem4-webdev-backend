const express = require("express");
const ctrl = require("../controllers/ordersControllers");
const validateBody = require("../middlewares/validateBody");
const { orderAddSchema } = require("../schemas/orderSchemas");

const ordersRouter = express.Router();

ordersRouter.post("/", validateBody(orderAddSchema), ctrl.createOrder);

module.exports = ordersRouter;