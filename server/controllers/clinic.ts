import express from 'express'
import Clinic from '../models/clinic'

const router = express.Router()

router.get('', async (req, res, next) => {
	try {
		const clinics = await Clinic.getClinics()
		res.json(clinics)
	} catch (e) {
		next(e)
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const clinic = await Clinic.getClinic(req.params.id)
		res.json(clinic)
	} catch (e) {
		next(e)
	}
})

router.post('', async (req, res, next) => {
	try {
		const clinic = await Clinic.createClinic(req.body)
		res.json(clinic)
	} catch (e) {
		next(e)
	}
})

router.delete('/:id', async (req, res, next) => {
	try {
		const clinic = await Clinic.deleteClinic(req.params.id)
		res.json(clinic)
	} catch (e) {
		next(e)
	}
})

export default router
