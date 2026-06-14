const multer = require("multer");
const path = require("path");

const tempDir = path.resolve("temp");

const storage = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const limits = {
    fileSize: 5 * 1024 * 1024,
};

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error("Invalid file type"));
    }
    cb(null, true);
};

const upload = multer({
    storage,
    limits,
    fileFilter,
});

module.exports = upload;