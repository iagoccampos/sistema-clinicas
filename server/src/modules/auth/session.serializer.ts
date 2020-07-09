import { PassportSerializer } from '@nestjs/passport'
import { User } from '../user/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { PassportLocalModel } from 'mongoose'

export class SessionSerializer extends PassportSerializer {
	constructor (@InjectModel('User') private userModel: PassportLocalModel<User>) {
		super()
	}

	serializeUser (user: any, done: (err: Error, user: any) => void) {
		(this.userModel.serializeUser())(user, done)
	}

	deserializeUser (payload: any, done: (err: Error, payload: string) => void) {
		(this.userModel.deserializeUser())(payload, done)
	}
}