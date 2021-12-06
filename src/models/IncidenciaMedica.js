import { Schema, model } from "mongoose";

const incidenciaMedicaSchema = new Schema({
    paciente: String,
    sanitario: String,
    especialidad: String,
    descripcion: String,
    hospital: String,
    fecha: Date
}, {
    timestamps: true,
    versionKey: false
});

export default model('IncidenciaMedica', incidenciaMedicaSchema);