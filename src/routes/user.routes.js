import {Router} from 'express'
const router = Router()
import * as userController from '../controllers/users.controller'
import{authJwt, verifySignUp} from '../middlewares'

router.post('/', 
    [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted],
userController.createUser)
export default router;