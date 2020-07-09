import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common'
import { Request } from 'express'
import { LocalAuthGuard } from './local-auth.guard'
import { UserService } from '../user/user.service'

@Controller()
export class AuthController {

	constructor (private userService: UserService) { }

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login (@Req() req: Request) {
		const user = req.user
		return user ? { _id: user._id, username: user.username, isAdmin: user.isAdm, disabled: user.disabled } : null
	}

	@Get('is-logged-in')
	async isLoggedIn (@Req() req: Request) {
		const user = req.user
		return req.user ? { _id: user._id, username: user.username, isAdmin: user.isAdm, disabled: user.disabled } : null
	}

	@Get('logout')
	logout (@Req() req: Request) {
		req.logout()
		return
	}

	@Get('create')
	createDefault () {
		return this.userService.createAdmin('iago', '123')
	}
}
