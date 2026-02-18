import axios from "axios";

export const getWeather = async (city: string) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric&lang=cz`)
        return response.data
    } catch (error) {
        console.error("Error fetching weather data:", error)
        throw error
    }
}
