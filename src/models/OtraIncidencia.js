import { Schema, model } from "mongoose";

const otraIncidenciaSchema = new Schema({
    nombre: String,
    apellidos: String,
    categoria: String,
    descripcion: String,
    fecha: Date
}, {
    timestamps: true,
    versionKey: false
});

export default model('OtraIncidencia', otraIncidenciaSchema);