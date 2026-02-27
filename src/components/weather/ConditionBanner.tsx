import type { WeatherData, ForecastItem } from "../../types/weather"

export default function ConditionBanner({ data }: { data: WeatherData | ForecastItem | null }) {
    const { description, icon } = data ? {
        description: data.weather[0].description,
        icon: data.weather[0].icon
    } : { description: "Není známo", icon: "" }
    return (
        <div className="bg-ink text-paper flex items-center justify-between px-3.5 py-2.5 mb-5">
            <div className="font-bebas text-[22px] tracking-wider">
                {description}
            </div>
            <div>
                <img src={`https://openweathermap.org/payload/api/media/file/${icon}.png`} alt="" className="w-11" />
            </div>
        </div>
    )
}