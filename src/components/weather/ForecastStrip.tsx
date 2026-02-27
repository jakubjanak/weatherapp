import type { ForecastDay } from "../../types/weather";

export default function ForecastStrip({ data }: { data: ForecastDay[] }) {
    return (
        <div>
            {/* Nadpis */}
            <div className="text-[9px] tracking-[0.18em] uppercase text-muted mb-2">5-denní předpověď</div>
            {/* 5-denni predpoved container */}
            <div className="flex gap-0 border-2 border-ink">
                {/* Dny */}
                {
                    data.map((day, index) => {
                        return (
                            <div key={index} className={index === 0 ? "flex-1 text-center py-3 px-1 border-r-2 border-ink bg-yellow cursor-default transition-colors" : "flex-1 text-center py-3 px-1 border-r-2 border-ink hover:bg-yellow cursor-default transition-colors"}>
                                <div className="text-[9px] tracking-wider uppercase text-muted mb-1.5">{index === 0 ? "Dnes" : day.name}</div>
                                <div className="text-[18px] mb-1.5">☁️</div>
                                <div className="font-bebas text-[20px] text-ink">{Math.round(day.temp)}°</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}