import { Router } from 'express'
import {
    getCountries,
    getCountryData,
} from './controllers/CountryController.js'

const routes = Router()

routes.get('/', getCountries)
routes.get('/country/:country', getCountryData)

export default routes
