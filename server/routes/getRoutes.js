const express = require("express");
const router = express.Router();
const {listIsotope, list} = require("../controllers/getController");

router.get("/isotope/:proton/:mass/:metastable", listIsotope);
router.get("/isotope", list);


module.exports = router;