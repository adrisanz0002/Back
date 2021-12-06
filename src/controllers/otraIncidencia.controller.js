import OtraIncidencia from "../models/OtraIncidencia";

export const createOtraIncidencia = async (req, res)=>{
    console.log(req.body);
    
    const{
        nombre,
    apellidos,
    categoria,
    descripcion,
    fecha
    } = req.body

    const newOtraIncidencia = new OtraIncidencia({
        nombre,
    apellidos,
    categoria,
    descripcion,
    fecha
    })
const otraIncidenciaSaved = await newOtraIncidencia.save()

    res.status(201).json(otraIncidenciaSaved)

    res.json('creando incidencia de otro tipo')
}
export const getOtrasIncidencias = async (req, res)=>{
    const otrasIncidencias = await OtraIncidencia.find();
    res.json(otrasIncidencias)
}
export const getOtraIncidenciaById = async (req, res)=>{
   const otraIncidencia = await OtraIncidencia.findById(req.params.otraIncidenciaId)
    res.status(200).json(otraIncidencia)
}
export const updateOtraIncidenciaById = async (req, res)=>{
   const updatedOtraIncidencia = await OtraIncidencia.findByIdAndUpdate(req.params.otraIncidenciaId, req.body,{
       new: true
   })
   res.status(204).json(updatedOtraIncidencia)
}
export const deleteOtraIncidenciaById = async (req, res)=>{
    const {otraIncidenciaId} =req.params;
    await OtraIncidencia.findByIdAndDelete(otraIncidenciaId);
    res.status(204).json();
}