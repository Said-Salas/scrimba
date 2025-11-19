import express from 'express'
import { apiRouter } from './routes/apiRoute.js'

const PORT = 8000

const app = express()

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
