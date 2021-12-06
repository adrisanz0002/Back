import { Schema, model } from "mongoose";

const propiedadSchema = new Schema({
    categoria: String,
    descripcion: String,
    valor: Number,
    propietario: String,
    identificador: String,
    fechaAdquisicion: Date
}, {
    timestamps: true,
    versionKey: false
});

export default model('Propiedad', propiedadSchema);