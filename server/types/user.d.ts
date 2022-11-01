import { Types } from 'mongoose'

declare global {
	namespace Express {
		interface Response {
			user?: {
				_id: Types.ObjectId
				username: string
				password: string
			}
		}
	}
}

export { }
