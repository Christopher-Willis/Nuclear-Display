const express = require("express");
const router = express.Router();
const {listIsotope, listAllIsotopes} = require("../controllers/getController");

router.get("/isotope/:proton/:mass", listIsotope);
router.get("/isotope", listIsotope);


module.exports = router;