import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '../user/user.module'
import { SessionSerializer } from './session.serializer'
import { LocalStrategy } from './local.strategy'
import { AuthController } from './auth.controller'

@Module({
	controllers: [
		AuthController
	],
	imports: [
		UserModule,
		PassportModule.register({ defaultStrategy: 'local' })
	],
	providers: [
		SessionSerializer,
		LocalStrategy
	]
})
export class AuthModule { }