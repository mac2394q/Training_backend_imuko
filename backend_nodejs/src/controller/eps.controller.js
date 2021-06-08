const Eps = require("../models/eps");

const epsController = {};

epsController.getEps = async (req, res, next) => {
  const epss = await Eps.find();
  res.json(epss);
};

epsController.getEpsList = async (req, res, next) => {
  const { id } = req.params;
  const eps = await Eps.findById(id);
  res.json(eps);
};



module.exports = epsController;
