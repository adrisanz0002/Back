import Propiedad from "../models/Propiedad";

export const createPropiedad = async (req, res)=>{
    console.log(req.body);
    
    const{categoria,
        descripcion,
        valor,
        propietario,
        identificador,
        fechaAdquisicion
     } = req.body

    const newPropiedad= new Propiedad({
        categoria,
        descripcion,
        valor,
        propietario,
        identificador,
        fechaAdquisicion
    })

    const propiedadSaved = await newPropiedad.save()

    res.status(201).json(propiedadSaved)

    res.json('creando propiedad')
}
export const getPropiedades = async (req, res)=>{
    const propiedades = await Propiedad.find();
    res.json(propiedades)
}
export const getPropiedadById = async (req, res)=>{
   const propiedad = await Propiedad.findById(req.params.propiedadId)
    res.status(200).json(propiedad)
}
export const updatePropiedadById = async (req, res)=>{
   const updatedPropiedad = await Propiedad.findByIdAndUpdate(req.params.propiedadId, req.body,{
       new: true
   })
   res.status(204).json(updatedPropiedad)
}
export const deletePropiedadById = async (req, res)=>{
    const {propiedadId} =req.params;
    await Propiedad.findByIdAndDelete(propiedadId);
    res.status(204).json();
}