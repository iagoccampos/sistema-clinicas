import Express from 'express'
import ClinicController from '../controllers/clinic'
import PatientRouter from './patient'

const router = Express.Router()

router.use('', ClinicController)
router.use('/:clinicId/patient', PatientRouter)

export default router
