import express from 'express'
import { getDataByQueryParams } from './controllers/getDataByQueryParams.js'
import { getDataByPathParams } from './controllers/getDataByPathParams.js'

const PORT = 8000

const app = express()
const apiRouter = express.Router()

apiRouter.get('/', getDataByQueryParams)
apiRouter.get('/:field/:term', getDataByPathParams)

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
