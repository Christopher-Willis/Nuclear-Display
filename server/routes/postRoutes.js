const express = require("express");
const router = express.Router();
const {upload,uploadFromFile} = require("../controllers/postController");

router.post("/upload", upload);


module.exports = router;