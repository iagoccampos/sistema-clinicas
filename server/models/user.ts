import User, { INewUser, IUpdateUser } from '../schemas/user'
import { ForbiddenError } from '../util/errors'

class UserModel {
	async findUserForLogin(username: string, password: string) {
		return User.findOne({ username, password }, { password: 0 }).lean().exec()
	}

	async createUser(newUserValues: INewUser) {
		const newUser = await User.create(newUserValues)

		return { ...newUser.toObject(), password: null }
	}

	async getUser(userId: string) {
		return User.findById(userId, { password: 0 }).lean().exec()
	}

	async getAllUsers() {
		return User.find({}, { password: 0 }).lean().exec()
	}

	async updateUser(userId: string, updatedValues: IUpdateUser) {
		const user = await User.findById(userId).lean().exec()

		if (user?.username === 'admin' && updatedValues.username) {
			throw new ForbiddenError('Não é possivel editar o nome de usuário do usuário principal.')
		}

		if (updatedValues.password === '') {
			delete updatedValues.password
		}

		const updatedUser = await User.findByIdAndUpdate(userId, updatedValues, { runValidators: true, new: true }).lean().exec()

		return { ...updatedUser, password: null }
	}

	async deleteUser(userId: string) {
		const user = await User.findById(userId).lean().exec()

		if (user?.username === 'admin') {
			throw new ForbiddenError('Não é possivel excluir o usuário principal.')
		}

		const deletedUser = await User.findByIdAndRemove(userId).lean().exec()

		return deletedUser
	}
}

export default new UserModel()
