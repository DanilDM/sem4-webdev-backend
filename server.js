const app = require("./src/app");
const sequelize = require("./src/db/sequelize");

const PORT = process.env.PORT || 3000;

sequelize
.authenticate()
.then(() => {
    console.log("Database connection successful");
    return sequelize.sync();
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("Database connection error:", error.message);
    process.exit(1);
});