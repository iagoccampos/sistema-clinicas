import express from 'express'
import PatientModel from '../models/patient'

const router = express.Router({ mergeParams: true })

router.get('', async (req, res, next) => {
	try {
		const patients = await PatientModel.getPatients(req.params.clinicId, req.query as any)
		res.json(patients)
	} catch (err) {
		next(err)
	}
})

router.post('', async (req, res, next) => {
	try {
		const patient = await PatientModel.create(req.params.clinicId, req.body)
		res.json(patient)
	} catch (err) {
		next(err)
	}
})

router.put('/:id', async (req, res, next) => {
	try {
		const patient = await PatientModel.update(req.params.id, req.body)
		res.json(patient)
	} catch (err) {
		next(err)
	}
})

router.delete('/:id', async (req, res, next) => {
	try {
		const patient = await PatientModel.remove(req.params.id)
		res.json(patient)
	} catch (err) {
		next(err)
	}
})

export default router
