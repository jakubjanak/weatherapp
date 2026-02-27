import { useState, type SetStateAction } from "react"
import { getWeather, getFiveDayForecast } from "../../hooks/useWeather"
import type { Dispatch } from "react"

export default function SearchBar({ setCityName, setData, setFiveDayData }: { setCityName: Dispatch<SetStateAction<string>>, setData: Dispatch<SetStateAction<any>>, setFiveDayData: Dispatch<SetStateAction<any>> }) {
    // je potreba dodelat funkcionalitu pro hledani, UI hotove
    const [value, setValue] = useState("")

    const onChange = (newValue: string) => {
        setValue(newValue)
    }

    const onSubmit = async () => {
        try {
            const weatherData = await getWeather(value)
            const fiveDayData = await getFiveDayForecast(value)
            setCityName(value)
            setData(weatherData)
            setFiveDayData(fiveDayData)
        } catch (error) {
            console.error("Error fetching weather data:", error)
        }
    }

    return (
        <div className="flex border-b-2 border-ink mb-5">
            <input 
                type="text"
                placeholder="Zadejte název města" 
                className="flex-1 bg-transparent border-none outline-none font-mono text-[13px] text-ink py-3 placeholder:text-muted" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button className="bg-ink text-paper font-mono text-[11px] font-bold px-4 tracking-wider cursor-pointer hover:opacity-90 transition-opacity" onClick={onSubmit}>HLEDAT</button>
        </div>
    )
}   