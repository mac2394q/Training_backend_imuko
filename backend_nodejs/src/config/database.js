const mongoose = require("mongoose");

const URI = "mongodb+srv://ftsuser420:ftsFTS1234@cluster0.xs1fd.mongodb.net/rutas_medicas?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) => console.log("Base de datos conectada correctamente."))
  .catch((err) => console.error(err));

module.exports = mongoose;
