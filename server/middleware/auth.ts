import { Request, Response, NextFunction } from 'express'
import JWT, { Secret } from 'jsonwebtoken'
import UserModel from '../models/user'

const isValidJWT = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers['x-access-token'] as string
	if (!token) {
		return res.status(401).json({ auth: false, message: 'Nenhum token fornecido.' })
	}

	JWT.verify(token, process.env.JWT_SECRET as Secret, async (err, decoded) => {
		if (err) {
			if (err.message === 'jwt expired') {
				return res.status(401).json({ auth: false, message: 'Token expirado.' })
			}

			return res.status(401).json({ auth: false, message: err.message })
		}

		const castDecoded = decoded as { _id: string }

		if (decoded && castDecoded._id) {
			const user = await UserModel.getUser(castDecoded._id)

			if (!user) {
				return res.status(401).json({ auth: false, message: 'Usuário não existe.' })
			}

			res.user = user

			return next()
		}

		return res.status(500).json({ auth: false, message: 'Falha em autenticar o token.' })
	})
}

export { isValidJWT }
