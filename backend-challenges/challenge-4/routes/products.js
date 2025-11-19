import express from 'express'
import { getProducts, getGenres} from '../controllers/productsControllers.js'

export const productRouter = express.Router()

productRouter.get('/products', getProducts)
productRouter.get('/products/genres', getGenres)

