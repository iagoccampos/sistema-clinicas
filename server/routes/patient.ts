import Express from 'express'
import PatientController from '../controllers/patient'

const router = Express.Router({ mergeParams: true })

router.use(PatientController)

export default router
