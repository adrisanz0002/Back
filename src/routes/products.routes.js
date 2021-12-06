import {Router} from 'express'
import * as productController from '../controllers/products.controlles'

import {authJwt} from "../middlewares"
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isModerator],productController.createProduct);
router.get('/',productController.getProducts);
router.get('/:productId',productController.getProductById);
router.put('/:productId',[authJwt.verifyToken, authJwt.isModerator],productController.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin],productController.deleteProductById);


export default router;