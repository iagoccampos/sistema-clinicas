import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import api from './routes/api'
import errorHandler from './util/errorHandler'

mongoose.connect('mongodb://localhost:27017/sistema-clinicas', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)
app.use(errorHandler.handle)

const port = 3000 || process.env.PORT
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
