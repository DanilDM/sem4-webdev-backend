const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const Bouquet = require("../models/Bouquet");

const listBouquets = () => Bouquet.findAll();

const getBouquetById = (id) => Bouquet.findByPk(id);

const addBouquet = (data) => {
    const photoURL = gravatar.url(nanoid(), { protocol: "http", s: "250" }, true);
    return Bouquet.create({ ...data, photoURL: data.photoURL || photoURL });
}

const updateBouquetById = async (id, data) => {
    const bouquet = await Bouquet.findByPk(id);
    if (!bouquet) return null;
    return bouquet.update(data);
};

const removeBouquetById = async (id) => {
    const bouquet = await Bouquet.findByPk(id);
    if (!bouquet) return null;
    await bouquet.destroy();
    return bouquet;
};

module.exports = {
    listBouquets,
    getBouquetById,
    addBouquet,
    updateBouquetById,
    removeBouquetById,
};