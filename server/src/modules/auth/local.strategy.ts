import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Strategy } from 'passport-local'
import { PassportLocalModel } from 'mongoose'
import { User } from '../user/user.schema'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor (@InjectModel('User') private userModel: PassportLocalModel<User>) {
		super(userModel.authenticate())
	}
}