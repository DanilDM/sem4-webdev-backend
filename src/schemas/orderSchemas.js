const Joi = require("joi");

const orderAddSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    message: Joi.string().allow("").optional(),
    bouquetId: Joi.string().uuid().required(),
});

module.exports = { orderAddSchema };