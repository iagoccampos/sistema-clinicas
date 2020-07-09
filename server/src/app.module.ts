import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { RouterModule } from 'nest-router/router.module'
import { ApiModule } from './modules/api/api.module'
import { AuthModule } from './modules/auth/auth.module'
import { ClinicModule } from './modules/clinic/clinic.module'
import { NgModule } from './modules/ng/ng.module'
import { ClientModule } from './modules/clinic/clinical/client/client.module'

const routes = [
	{
		path: 'api', children: [
			{ path: 'auth', module: AuthModule },
			{
				path: 'clinic', module: ClinicModule, children: [
					{
						path: ':clinicId', children: [
							{
								path: 'clinical', children: [
									{ path: 'client', module: ClientModule }
								]
							}
						]
					}
				]
			}
		]
	},
	{
		path: '*', module: NgModule
	}
]

@Module({
	imports: [
		RouterModule.forRoutes(routes),
		MongooseModule.forRoot('mongodb://localhost:27017/sistema-clinicas', { useNewUrlParser: true, useUnifiedTopology: true }),
		ApiModule,
		NgModule
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
