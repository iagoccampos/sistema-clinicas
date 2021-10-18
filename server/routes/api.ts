import Express from 'express'
import AuthController from '../controllers/auth'
import ClinicRouter from './clinic'
import { isValidJWT } from '../middleware/auth'

const router = Express.Router()

router.use('/auth', AuthController)
router.use('/clinic', isValidJWT, ClinicRouter)

export default router
