import axios from 'axios'
export const FETCH_WEATHER = 'FETCH_WEATHER'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${REACT_APP_WEATHER_API_KEY}`

export default function fetchWeather(city,country) {

    const url = `${ROOT_URL}&q=${city},${country}`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}