const express = require("express");
const router = express.Router();
const {uploadNuclides,uploadElements} = require("../controllers/postController");

router.post("/uploadNuclides", uploadNuclides);
router.post("/uploadElements", uploadElements);


module.exports = router;