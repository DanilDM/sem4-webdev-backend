const express = require("express");
const ctrl = require("../controllers/bouquetsControllers");
const validateBody = require("../middlewares/validateBody");
const upload = require("../middlewares/upload");
const {
    bouquetAddSchema,
    bouquetUpdateSchema,
    updateFavoriteSchema,
} = require("../schemas/bouquetSchemas");

const bouquetsRouter = express.Router();

bouquetsRouter.get("/", ctrl.getAllBouquets);
bouquetsRouter.get("/:id", ctrl.getOneBouquet);
bouquetsRouter.post("/", validateBody(bouquetAddSchema), ctrl.createBouquet);
bouquetsRouter.put("/:id", validateBody(bouquetUpdateSchema), ctrl.updateBouquet);
bouquetsRouter.delete("/:id", ctrl.deleteBouquet);
bouquetsRouter.patch(
    "/:id/favorite",
    validateBody(updateFavoriteSchema),
    ctrl.updateFavorite
);
bouquetsRouter.patch(
    "/:id/photo", 
    upload.single("photo"), 
    ctrl.updatePhoto
);

module.exports = bouquetsRouter;