import Factura from "../models/Factura";

export const createFactura = async (req, res)=>{
    console.log(req.body);
    
    const{nombre,
        apellidos,
        empresa,
        categoria,
        importe,
        direccion,
        telefono,
        imagen,
    fecha } = req.body

    const newFactura = new Factura({nombre,
        apellidos,
        empresa,
        categoria,
        importe,
        direccion,
        telefono,
        imagen,
    fecha})

    const facturaSaved = await newFactura.save()

    res.status(201).json(facturaSaved)

    res.json('creando factura')
}
export const getFacturas = async (req, res)=>{
    const facturas = await Factura.find();
    res.json(facturas)
}
export const getFacturaById = async (req, res)=>{
   const factura = await Factura.findById(req.params.facturaId)
    res.status(200).json(factura)
}
export const updateFacturaById = async (req, res)=>{
   const updatedFactura = await Factura.findByIdAndUpdate(req.params.facturaId, req.body,{
       new: true
   })
   res.status(204).json(updatedFactura)
}
export const deleteFacturaById = async (req, res)=>{
    const {facturaId} =req.params;
    await Factura.findByIdAndDelete(facturaId);
    res.status(204).json();
}