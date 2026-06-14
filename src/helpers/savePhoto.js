const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const photosDir = path.resolve("public", "photos");

const savePhoto = async (file) => {
    const extension = path.extname(file.originalname);
    const newFilename = `${nanoid()}${extension}`;
    const newPath = path.join(photosDir, newFilename);

    await fs.rename(file.path, newPath);
    
    return `/photos/${newFilename}`;
};

module.exports = savePhoto;