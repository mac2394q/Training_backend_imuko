const express = require("express");
const router = express.Router();

const persona = require("../controller/persona.controller");

router.get("/", persona.getPersona);

router.post("/", persona.crearPersona);

router.get("/:id", persona.getPersona);

router.put("/:id", persona.editarPersona);

router.delete("/:id", persona.eliminarPersona);

module.exports = router;
