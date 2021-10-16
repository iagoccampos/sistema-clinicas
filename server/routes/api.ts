import Express from 'express'
import AuthRouter from './auth'
import ClinicRouter from './clinic'
import { isValidJWT } from '../middleware/auth'

const router = Express.Router()

router.use('/auth', AuthRouter)
router.use('/clinic', isValidJWT, ClinicRouter)

export default router
