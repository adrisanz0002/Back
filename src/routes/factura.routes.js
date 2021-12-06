import {Router} from 'express'
import * as FacturaController from '../controllers/factura.controller'

import {authJwt} from "../middlewares"
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isModerator],FacturaController.createFactura);
router.get('/',FacturaController.getFacturas);
router.get('/:facturaId',FacturaController.getFacturaById);
router.put('/:facturaId',[authJwt.verifyToken, authJwt.isModerator],FacturaController.updateFacturaById);
router.delete('/:facturaId', [authJwt.verifyToken, authJwt.isAdmin],FacturaController.deleteFacturaById);


export default router;