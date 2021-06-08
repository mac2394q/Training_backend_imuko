const mongoose = require("mongoose");
const { Schema } = mongoose;

const personaSchema = new Schema(
  {
    codigo:  { type: String, required: true },
    entidad: { type: String, required: true },
    nit: { type: String, required: true },
    regimen_codigo: { type: String, required: true },
    regimen_descripcion: { type: String, required: true }
  }
);

module.exports = mongoose.model("Eps", epsSchema);
