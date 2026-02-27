import axios from "axios";
import { processForecast } from "../utils/weatherHelpers";

export const getWeather = async (city: string) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric&lang=cz`)
        return response.data
    } catch (error) {
        console.error("Error fetching weather data:", error)
        throw error
    }
}

export const getFiveDayForecast = async (city: string) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric&lang=cz`)
        const forecast = processForecast(response.data.list);
        return forecast
    } catch (error) {
        console.error("Error fetching five day forecast data:", error)
        throw error
    }
}
