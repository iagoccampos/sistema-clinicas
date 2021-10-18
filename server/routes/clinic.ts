import Express from 'express'
import ClinicController from '../controllers/clinic'
import ClinicalRouter from './clinical'

const router = Express.Router()

router.use('', ClinicController)
router.use('/:clinicId/clinical', ClinicalRouter)

export default router
