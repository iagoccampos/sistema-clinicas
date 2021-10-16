import Express from 'express'
import AuthController from '../controllers/auth'

const router = Express.Router()

router.use('', AuthController)

export default router
