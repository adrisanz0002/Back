import IncidenciaMedica from "../models/IncidenciaMedica";

export const createIncidencia = async (req, res)=>{
    console.log(req.body);
    
    const{
        paciente,
    sanitario,
    especialidad,
    descripcion,
    hospital,
    fecha
    } = req.body

    const newIncidenciaMedica = new IncidenciaMedica({
        paciente,
    sanitario,
    especialidad,
    descripcion,
    hospital,
    fecha
    })

    const incidenciaMedicaSaved = await newIncidenciaMedica.save()

    res.status(201).json(incidenciaMedicaSaved)

    res.json('creando incidencia medica')
}
export const getIncidencias = async (req, res)=>{
    const incidenciasMedicas = await IncidenciaMedica.find();
    res.json(incidenciasMedicas)
}
export const getIncidenciaById = async (req, res)=>{
   const incidenciaMedica = await IncidenciaMedica.findById(req.params.incidenciaMedicaId)
    res.status(200).json(incidenciaMedica)
}
export const updateIncidenciaById = async (req, res)=>{
   const updatedIncidenciaMedica = await IncidenciaMedica.findByIdAndUpdate(req.params.incidenciaMedicaId, req.body,{
       new: true
   })
   res.status(204).json(updatedIncidenciaMedica)
}
export const deleteIncidenciaById = async (req, res)=>{
    const {incidenciaMedicaId} =req.params;
    await IncidenciaMedica.findByIdAndDelete(incidenciaMedicaId);
    res.status(204).json();
}