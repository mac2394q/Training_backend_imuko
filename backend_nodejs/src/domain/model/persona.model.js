const mongoose = require("mongoose");
const {Schema} = mongoose;

const personaSchema = new Schema({
    schema_version: {
        type: Number,
        required: true
    },
    document_version: {
        type: Number,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now,
        required: true
    },
    fecha_ultima_modificacion: {
        type: Date,
        default: Date.now,
        required: true
    },
    codigo_interno: {
        type: String,
        required: true
    },
    primer_nombre: {
        type: String,
        required: true
    },
    segundo_nombre: {
        type: String,
        required: false
    },
    primer_apellido: {
        type: String,
        required: true
    },
    segundo_apellido: {
        type: String,
        required: true
    },
    identificacion: {
        numero: {
            type: Number,
            required: true
        },
        fecha_expedicion: {
            type: Date,
            required: true
        },
        lugar_expedicion: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        }
    },
    estado_civil: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    correo_electronico: [{
        correo: {
            type: String,
            required: true
        }
    }],
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    core_eps: [{
        id_eps: {
            type: String,
            required: true
        },
        entidad: {
            type: String,
            required: true   
        },
        fecha_ingreso: {
            type: Date,
            required: true
        },
        estado_afiliacion: {
            type: String,
            required: true
        }
    }]

});

module.exports = mongoose.model("Persona", personaSchema);