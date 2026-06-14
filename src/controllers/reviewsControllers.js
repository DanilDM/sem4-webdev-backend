const ctrlWrapper = require("../helpers/ctrlWrapper");
const reviewsServices = require("../services/reviewsServices");

const getAllReviews = async (req, res) => {
    const reviews = await reviewsServices.listReviews();
    res.status(200).json(reviews);
};

module.exports = {
    getAllReviews: ctrlWrapper(getAllReviews),
};