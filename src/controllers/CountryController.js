import dotenv from 'dotenv'
import {
    getFlagInfo,
    getPopulationInfo,
    getCountryInfo,
} from '../services/country-query.js'
import { countryBaseAPI } from '../services/api.js'

dotenv.config()

export const getCountries = async (req, res) => {
    try {
        const response = await countryBaseAPI.get('/AvailableCountries')
        const countries = response.data

        const countriesWithFlags = await Promise.all(countries.map(async (country) => {
            const flagInfo = await getFlagInfo(country.name)
            return {
                ...country,
                flag: flagInfo ? flagInfo.flag : ''
            }
        }))

        return res.status(200).json(countriesWithFlags)

    } catch (error) {
        console.error('Error to get countries', error)
        return res.status(500).json({ error: 'Error to get countries' })
    }
}

export const getCountryData = async (req, res) => {
    const { country } = req.params

    try {
        const countryInfo = await getCountryInfo(country)
        const countryName = countryInfo.commonName

        const populationInfo = await getPopulationInfo(countryName)
        const flagFromCountry = await getFlagInfo(countryName)

        const combinedData = {
            countryInfo,
            populationInfo,
            flagFromCountry,
        }

        return res.status(200).json(combinedData)
    } catch (error) {
        console.error('Error to get country data', error)
        return res.status(500).json({ error: 'Error to get country data' })
    }
}
