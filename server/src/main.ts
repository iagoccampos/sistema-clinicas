import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as passport from 'passport'
import { ValidationPipe } from '@nestjs/common'
import * as pause from 'connect-pause'

async function bootstrap () {
	const app = await NestFactory.create(AppModule)

	app.useGlobalPipes(new ValidationPipe({ transform: true }))

	app.use(pause(200))

	app.enableCors({
		methods: 'GET',
		maxAge: 3600
	})

	app.use(require('express-session')({
		secret: 'sistema-clinicas',
		resave: false,
		saveUninitialized: false
	}))

	app.use(passport.initialize())
	app.use(passport.session())

	const port = process.env.PORT || 4200
	console.log(`Server started, port: ${port}`)
	await app.listen(port)
}

bootstrap()
