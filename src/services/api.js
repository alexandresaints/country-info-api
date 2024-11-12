import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const countryBaseAPI = axios.create({
  baseURL: process.env.COUNTRY_BASE_API,
})

const countryDataAPI = axios.create({
  baseURL: process.env.COUNTRY_DATA_API,
})

export { countryBaseAPI, countryDataAPI }
