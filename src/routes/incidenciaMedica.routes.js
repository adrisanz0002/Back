import {Router} from 'express'
import * as IncidenciaMedicaController from '../controllers/incidenciaMedica.Controller'

import {authJwt} from "../middlewares"
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isModerator],IncidenciaMedicaController.createIncidencia);
router.get('/',IncidenciaMedicaController.getIncidencias);
router.get('/:incidenciaMedicaId',IncidenciaMedicaController.getIncidenciaById);
router.put('/:incidenciaMedicaId',[authJwt.verifyToken, authJwt.isModerator],IncidenciaMedicaController.updateIncidenciaById);
router.delete('/:incidenciaMedicaId', [authJwt.verifyToken, authJwt.isAdmin],IncidenciaMedicaController.deleteIncidenciaById);


export default router;