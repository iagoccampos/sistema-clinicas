import Express from 'express'
import AuthController from '../controllers/auth'
import ClinicController from '../controllers/clinic'
import { isValidJWT } from '../middleware/auth'

const router = Express.Router()

router.use('/auth', AuthController)
router.use('/clinic', isValidJWT, ClinicController)

export default router
