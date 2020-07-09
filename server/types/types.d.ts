import { ExpressUser } from '../src/modules/user/user.schema'
export { }

declare global {
	namespace Express {
		interface User extends ExpressUser { }
	}
}
