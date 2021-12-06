import {Router} from 'express'
import * as OtraIncidenciaController from '../controllers/otraIncidencia.controller'

import {authJwt} from "../middlewares"
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isModerator],OtraIncidenciaController.createOtraIncidencia);
router.get('/',OtraIncidenciaController.getOtrasIncidencias);
router.get('/:otraIncidenciaId',OtraIncidenciaController.getOtraIncidenciaById);
router.put('/:otraIncidenciaId',[authJwt.verifyToken, authJwt.isModerator],OtraIncidenciaController.updateOtraIncidenciaById);
router.delete('/:otraIncidenciaId', [authJwt.verifyToken, authJwt.isAdmin],OtraIncidenciaController.deleteOtraIncidenciaById);


export default router;