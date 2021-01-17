import Express from 'express'
import UserModel from '../models/user'
import JWT, { Secret } from 'jsonwebtoken'
import { ForbiddenError } from '../util/errors'

const router = Express.Router()

router.post('/login', async (req, res, next) => {
	try {
		const user = await UserModel.findUserForLogin(req.body.username, req.body.password)
		if (user) {
			const token = JWT.sign(user, process.env.JWT_SECRET as Secret, {
				expiresIn: 4 * 60 * 60 // 4h
			})

			return res.json({ auth: true, token: token })
		}

		throw new ForbiddenError('Usuário ou senha não conferem.')
	} catch (err) {
		next(err)
	}
})

router.post('/logout', (req, res) => {
	res.json({ auth: false, token: null })
})

export default router
