import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import routesV1 from './routes/apiV1'
import ErrorHandler from './util/errorHandler'

mongoose.connect('mongodb://localhost:27017/sistema-clinicas', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/apiv1', routesV1)
app.use(ErrorHandler.handle)

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
