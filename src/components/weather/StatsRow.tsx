import type { WeatherData, ForecastItem } from "../../types/weather"

export default function StatsRow({ data }: { data: WeatherData | ForecastItem | null }) {
    const { humidity, speed, pressure } = data ? {
        humidity: data.main.humidity,
        speed: data.wind.speed,
        pressure: data.main.pressure
    } : { humidity: 0, speed: 0, pressure: 0 }

    return (
        <div className="grid grid-cols-3 border-2 border-ink mb-5">
            <div className="p-3.5 border-r-2 border-ink">
                <div className="text-[9px] tracking-widest uppercase text-muted mb-1">Vlhkost</div>
                <div className="font-bebas text-[32px] leading-none text-ink">
                    {humidity}
                    <span className="text-[10px] text-red">%</span>
                </div>
            </div>
            <div className="p-3.5 border-r-2 border-ink">
                <div className="text-[9px] tracking-widest uppercase text-muted mb-1">Rychlost větru</div>
                <div className="font-bebas text-[32px] leading-none text-ink">
                    {speed}
                    <span className="text-[10px] text-red">m/s</span>
                </div>
            </div>
            <div className="p-3.5 border-r-2 border-ink">
                <div className="text-[9px] tracking-widest uppercase text-muted mb-1">Tlak</div>
                <div className="font-bebas text-[32px] leading-none text-ink">
                    {pressure}
                    <span className="text-[10px] text-red">hPa</span>
                </div>
            </div>
        </div>
    )
}