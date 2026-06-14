const Review = require("../models/Review");

const listReviews = () => Review.findAll();

module.exports = { listReviews };