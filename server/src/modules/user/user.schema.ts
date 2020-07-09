import * as mongoose from 'mongoose'
import * as passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	isAdm: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	}
})

UserSchema.plugin(passportLocalMongoose)

export { UserSchema }

export interface UserModel {
	username: string
	password: string
	isAdm: boolean
	disabled: boolean
}

export interface User extends mongoose.PassportLocalDocument, UserModel { }

export interface ExpressUser extends UserModel {
	_id: string
}