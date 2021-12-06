import {Router} from 'express'
const router = Router()

import * as authController from '../controllers/auth.controller'
import {verifySignUp} from "../middlewares";
router.post('/signin', authController.signIn)
router.post('/signup',[verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted]
, authController.signUp)
export default router;