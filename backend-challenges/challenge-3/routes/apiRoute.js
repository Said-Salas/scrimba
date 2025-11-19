import express from 'express'
import { getDataByQueryParams } from '../controllers/getDataByQueryParams.js'
import { getDataByPathParams } from '../controllers/getDataByPathParams.js'

export const apiRouter = express.Router()

apiRouter.get('/', getDataByQueryParams)
apiRouter.get('/:field/:term', getDataByPathParams)