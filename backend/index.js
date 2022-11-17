const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const connectDB = require('./config/db.js')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//routes
app.use('/api/finances', require('./routes/financeRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))