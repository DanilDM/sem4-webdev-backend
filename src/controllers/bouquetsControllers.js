const HttpError = require("../helpers/HttpError");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const savePhoto = require("../helpers/savePhoto");
const bouquetsServices = require("../services/bouquetsServices");

const getAllBouquets = async (req, res) => {
    const bouquets = await bouquetsServices.listBouquets();
    res.status(200).json(bouquets);
};

const getOneBouquet = async (req, res) => {
    const { id } = req.params;
    const bouquet = await bouquetsServices.getBouquetById(id);
    if (!bouquet) {
        throw new HttpError(404, "Not found");
    }
    res.status(200).json(bouquet);
};

const createBouquet = async (req, res) => {
    const newBouquet = await bouquetsServices.addBouquet(req.body);
    res.status(201).json(newBouquet);
};

const updateBouquet = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        throw new HttpError(400, "Body must have at least one field");
    }
    const { id } = req.params;
    const updatedBouquet = await bouquetsServices.updateBouquetById(id, req.body);
    if (!updatedBouquet) {
        throw new HttpError(404, "Not found");
    }
    res.status(200).json(updatedBouquet);
};

const deleteBouquet = async (req, res) => {
    const { id } = req.params;
    const removedBouquet = await bouquetsServices.removeBouquetById(id);
    if (!removedBouquet) {
        throw new HttpError(404, "Not found");
    }
    res.status(200).json(removedBouquet);
};

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const updatedBouquet = await bouquetsServices.updateBouquetById(id, req.body);
    if (!updatedBouquet) {
        throw new HttpError(404, "Not found");
    }
    res.status(200).json(updatedBouquet);
};

const updatePhoto = async (req, res) => {
    const { id } = req.params;

    if (!req.file) {
        throw new HttpError(400, "Photo file is required");
    }

    const photoPath = await savePhoto(req.file);
    const photoURL = `${req.protocol}://${req.get("host")}${photoPath}`;

    const updatedBouquet = await bouquetsServices.updateBouquetById(id, { photoURL });

    if (!updatedBouquet) {
        throw new HttpError(404, "Not found");
    }

    res.status(200).json(updatedBouquet);
};

module.exports = {
    getAllBouquets: ctrlWrapper(getAllBouquets),
    getOneBouquet: ctrlWrapper(getOneBouquet),
    createBouquet: ctrlWrapper(createBouquet),
    updateBouquet: ctrlWrapper(updateBouquet),
    deleteBouquet: ctrlWrapper(deleteBouquet),
    updateFavorite: ctrlWrapper(updateFavorite),
    updatePhoto: ctrlWrapper(updatePhoto),
};