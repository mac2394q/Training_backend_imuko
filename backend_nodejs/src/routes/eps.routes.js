const express = require("express");
const router = express.Router();

const eps = require("../controller/eps.controller");

router.get("/", eps.getPersona);

router.get("/:id", eps.getPersona);

module.exports = router;
