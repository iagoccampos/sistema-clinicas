import User, { INewUser, IUpdateUser } from '../schemas/user'
import { ForbiddenError } from '../util/errors'

const findUserForLogin = async (username: string, password: string) => {
	return User.findOne({ username, password }, { password: 0 }).lean().exec()
}

const createUser = async (newUserValues: INewUser) => {
	const newUser = await User.create(newUserValues)

	return { ...newUser.toObject(), password: null }
}

const getUser = (userId: string) => {
	return User.findById(userId).lean().exec()
}

const getAllUsers = () => {
	return User.find({}, { password: 0 }).lean().exec()
}

const updateUser = async (userId: string, updatedValues: IUpdateUser) => {
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

const deleteUser = async (userId: string) => {
	const user = await User.findById(userId).lean().exec()

	if (user?.username === 'admin') {
		throw new ForbiddenError('Não é possivel excluir o usuário principal.')
	}

	const deletedUser = await User.findByIdAndRemove(userId).lean().exec()

	return deletedUser
}

export default { findUserForLogin, createUser, getUser, getAllUsers, updateUser, deleteUser }
