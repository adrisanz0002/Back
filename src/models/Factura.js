import { Schema, model } from "mongoose";

const facturaSchema = new Schema({
    nombre: String,
    apellidos: String,
    empresa: String,
    categoria: String,
    importe: Number,
    direccion: String,
    telefono: String,
    imagen: String,
    fecha: Date,
}, {
    timestamps: true,
    versionKey: false
});

export default model('Factura', facturaSchema);