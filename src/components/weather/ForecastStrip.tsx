export default function ForecastStrip({ data }: { data: any }) {
    const weekDays: string[] = []
    const today = new Date()

    const dateTimeFormat = new Intl.DateTimeFormat("cs-CZ", {
            weekday: "long",
        })

    if (data && data.list) {
        for (let i = 0; i < data.list.length; i++) {
            const date = dateTimeFormat.format(new Date(data.list[i].dt * 1000))
            if (!weekDays.includes(date) && date !== dateTimeFormat.format(today)) {
                weekDays.push(date)
            }
        }
    }

    return (
        <div>
            {/* Nadpis */}
            <div className="text-[9px] tracking-[0.18em] uppercase text-muted mb-2">5-denní předpověď</div>
            {/* 5-denni predpoved container */}
            <div className="flex gap-0 border-2 border-ink">
                {/* Dnesek */}
                <div className="flex-1 text-center py-3 px-1 border-r-2 border-ink bg-yellow cursor-default transition-colors">
                    <div className="text-[9px] tracking-wider uppercase text-muted mb-1.5">Dnes</div>
                    <div className="text-[18px] mb-1.5">☁️</div>
                    <div className="font-bebas text-[20px] text-ink">{data && Math.round(data.list[0].main.temp)}°</div>
                </div>

                {/* Dalsi dny */}
                {
                    weekDays.map((day, index) => {
                        return (
                            <div key={index} className="flex-1 text-center py-3 px-1 border-r-2 border-ink hover:bg-weather-yellow cursor-default transition-colors">
                                <div className="text-[9px] tracking-wider uppercase text-muted mb-1.5">{day}</div>
                                <div className="text-[18px] mb-1.5">☁️</div>
                                <div className="font-bebas text-[20px] text-ink">0°</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}