import { countryDataAPI, countryBaseAPI } from './api.js'

const getCountryInfo = async (country) => {
  const countryInfoResponse = await countryBaseAPI.get(
    `/CountryInfo/${country}`,
  )
  return countryInfoResponse.data
}

const getPopulationInfo = async (countryName) => {
  const populationResponse = await countryDataAPI.get('/population')
  const populationData = populationResponse.data.data
  return populationData.find((item) => item.country === countryName)
}

const getFlagInfo = async (countryName) => {
  const flagResponse = await countryDataAPI.get('/flag/images')
  const flagImageUrl = flagResponse.data.data
  return flagImageUrl.find((item) => item.name === countryName)
}

export { getCountryInfo, getPopulationInfo, getFlagInfo }
