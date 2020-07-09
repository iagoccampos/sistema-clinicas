import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { PassportLocalModel } from 'mongoose'
import { User, UserSchema } from './user.schema'

@Injectable()
export class UserService {
	constructor (@InjectModel('User') private userModel: PassportLocalModel<User>) { }

	async getUser (username: string) {
		return this.userModel.findOne({ username }).exec()
	}

	async createAdmin (username: string, password: string) {
		return this.userModel.register(new this.userModel({ username, isAdm: true }), password)
	}
}