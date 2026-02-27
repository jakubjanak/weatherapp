import type { WeatherData, ForecastItem } from "../../types/weather"

export default function CityHeadline({ cityName, data }: { cityName: string, data: WeatherData | ForecastItem | null }) {
    const { country, temp}  = data ? {
        country: data.sys.country,
        temp: data.main.temp
    } : { country: "ZEMĚ", temp: 0 }

    return (
        <div className="grid grid-cols-[1fr_auto] gap-5 border-b-2 border-ink pb-5 mb-5 items-start">
            <div>
                <div className="font-bebas text-[80px] leading-[0.9] text-ink">{cityName}</div>
                <div className="font-news italic text-[13px] text-muted mt-2">{country}</div>
            </div>
            <div className="text-right">
                <div className="font-bebas text-[80px] leading-[0.85] text-ink">{Math.round(temp)}</div>
                <span className="font-mono text-[14px] text-red block mt-1">°C</span>
            </div>
        </div>
    )
}