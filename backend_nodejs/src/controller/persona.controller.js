const Persona = require("../domain/model/persona.model");

const personaController = {};

personaController.getPersonas = async (req, res, next) => {
  const personas = await Persona.find();
  res.json(personas);
};

personaController.crearPersona = async (req, res, next) => {
  
  let listado_correo = []; 
  let listado_eps = [];
  
  let ano_actual = new Date();

  let persona = new Persona({
    
    schema_version: 1,
    document_version: 1,
    fecha_creacion: ano_actual,
    fecha_ultima_modificacion: ano_actual,
    codigo_interno : ano_actual.getFullYear()+''+req.body.numero,
    primer_nombre: req.body.primer_nombre_field_forms,
    segundo_nombre: req.body.segundo_nombre_field_forms,
    primer_apellido: req.body.primer_apellido_field_forms,
    segundo_apellido: req.body.segundo_apellido_field_forms,
    identificacion: {
      numero: req.body.numero,
      fecha_expedicion: req.body.fecha_expedicion_field_forms,
      lugar_expedicion: req.body.lugar_expedicion_field_forms,
      tipo: req.body.tipo_field_forms,
    },
    estado_civil: req.body.estado_civil_field_forms,
    sexo: req.body.sexo_field_forms,
    correo_electronico: listado_correo,
    fecha_nacimiento: req.body.fecha_nacimiento_field_forms,
    core_eps: req.body.listado_eps_forms

  });

  await persona.save( persona );

  res.json({ status: "Persona Creada correctamente. " });
};

personaController.getPersona = async (req, res, next) => {
  const { id } = req.params;
  const persona = await Persona.findById(id);
  res.json(persona);
};

personaController.editarPersona = async (req, res, next) => {
  const { id } = req.params;
  await Persona.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Persona Editada correctamente." });
};

personaController.eliminarPersona = async (req, res, next) => {
  await Persona.findByIdAndRemove(req.params.id);
  res.json({ status: "Persona eliminada correctamente." });
};

module.exports = personaController;
