const express = require("express");
const cors = require("cors");
const multer = require("multer");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const bouquetsRouter = require("./routes/bouquetsRouter");
const ordersRouter = require("./routes/ordersRouter");
const reviewsRouter = require("./routes/reviewsRouter");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
app.use("/api/bouquets", bouquetsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/reviews", reviewsRouter);

// errors
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError || err.message === "Invalid file type") {
        return res.status(400).json({ message: err.message });
    }
    next(err);
});
app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;