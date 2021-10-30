import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import api from './routes/api'
import errorHandler from './util/errorHandler'
import dotenv from 'dotenv'
import dotenvParseVariables from 'dotenv-parse-variables'

let env = dotenv.config()
if (env.error || !env.parsed) throw env.error
env = dotenvParseVariables(env.parsed, { assignToProcessEnv: true, overrideProcessEnv: true })

mongoose.connect('mongodb://localhost:27017/sistema-clinicas')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)
app.use(errorHandler.handle)

const port = +process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server started. Port: ${port}`)
	createDefaultUser()
})

async function createDefaultUser() {
	try {
		const User = require('./schemas/user').default
		const user = await User.findOne({ username: 'admin' })
		if (!user) {
			User.create({
				username: 'admin',
				password: 'master'
			})
		}
	} catch (e) { }
}
