import { Module } from '@nestjs/common'
import { ClinicModule } from '../clinic/clinic.module'
import { AuthModule } from '../auth/auth.module'
import { UserModule } from '../user/user.module'
import { ClientModule } from '../clinic/clinical/client/client.module'

@Module({
	imports: [
		AuthModule,
		UserModule,
		ClinicModule,
		ClientModule
	]
})
export class ApiModule { }