import {Router} from 'express'
import * as PropiedadController from '../controllers/propiedad.controller'

import {authJwt} from "../middlewares"
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isModerator],PropiedadController.createPropiedad);
router.get('/',PropiedadController.getPropiedades);
router.get('/:propiedadId',PropiedadController.getPropiedadById);
router.put('/:propiedadId',[authJwt.verifyToken, authJwt.isModerator],PropiedadController.updatePropiedadById);
router.delete('/:propiedadId', [authJwt.verifyToken, authJwt.isAdmin],PropiedadController.deletePropiedadById);


export default router;