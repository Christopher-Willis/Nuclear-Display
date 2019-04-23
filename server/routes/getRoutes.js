const express = require("express");
const router = express.Router();
const {listIsotope, isotopes,listElement,elements} = require("../controllers/getController");

router.get("/isotope/:proton/:mass/:metastable", listIsotope);
router.get("/isotopes", isotopes);
router.get("/element/:number/", listElement);
router.get("/elements", elements);

module.exports = router;