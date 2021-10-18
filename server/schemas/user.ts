import { Schema, model, Document } from 'mongoose'
import crypto from 'crypto'

export interface IUser {
	username: string
	password: string
}

export interface INewUser {
	username: string
	password: string
}

export interface IUpdateUser {
	username?: string
	password?: string
}

interface IDocUser extends IUser, Document { }

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		maxlength: [30, 'Tamanho máximo de 30 caracteres para o nome do usuário.']
	},
	password: {
		type: String,
		required: true,
		minlength: [4, 'Tamanho mínimo de 4 caracteres para a senha.'],
		set: (val: string) => {
			if (val.length < 4) {
				return val
			}

			const hash = crypto.createHash('sha512')
			hash.update(val)
			return hash.digest('hex')
		}
	}
}, { timestamps: true })

const User = model<IDocUser>('User', userSchema)
export default User
