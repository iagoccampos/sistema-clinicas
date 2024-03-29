import express from 'express'
import ClinicModel from '../models/clinic'
import { NotFoundError } from '../util/errors'

const router = express.Router()

router.get('', async (req, res, next) => {
	try {
		const clinics = await ClinicModel.getClinics(req.query)
		res.json(clinics)
	} catch (e) {
		next(e)
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const clinic = await ClinicModel.getClinic(req.params.id)

		if (!clinic) {
			throw new NotFoundError('Clínica não encontrada')
		}

		res.json(clinic)
	} catch (e) {
		next(e)
	}
})

router.post('', async (req, res, next) => {
	try {
		const clinic = await ClinicModel.createClinic(req.body)
		res.json(clinic)
	} catch (e) {
		next(e)
	}
})

router.delete('/:id', async (req, res, next) => {
	try {
		const clinic = await ClinicModel.deleteClinic(req.params.id)
		res.json(clinic)
	} catch (e) {
		next(e)
	}
})

export default router
