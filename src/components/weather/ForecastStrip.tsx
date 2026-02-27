import type { ForecastDay } from "../../types/weather";
import { useState, type Dispatch, type SetStateAction } from "react";

export default function ForecastStrip({ data, setChangeDay, setForecastData }: { data: ForecastDay[], setChangeDay: Dispatch<SetStateAction<boolean>>, setForecastData: Dispatch<SetStateAction<any>> }) {
    const [isActive, setIsActive] = useState(0);
    console.log(data)

    function handleClick(index: number) {
        setIsActive(index);

        if (index !== 0) {
            setChangeDay(true);
            const newData = {
                main: {
                    temp: data[index].temp,
                    pressure: data[index].pressure,
                    humidity: data[index].humidity
                },
                wind: {
                    speed: data[index].speed
                },
                weather: [{
                    description: data[index].description,
                    icon: data[index].icon
                }],
                sys: {
                    country: "ZEMĚ"
                }
            }
            console.log(newData)
            setForecastData(newData);
        } else {
            setChangeDay(false);
        }
        
    }

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
                            <div key={index} className={isActive === index ? "flex-1 text-center py-3 px-1 border-r-2 border-ink bg-yellow cursor-default transition-colors" : "flex-1 text-center py-3 px-1 border-r-2 border-ink hover:bg-yellow transition-colors cursor-pointer"} onClick={() => handleClick(index)}>
                                <div className="text-[9px] tracking-wider uppercase text-muted mb-1.5">{index === 0 ? "Dnes" : day.name}</div>
                                <div className="text-[18px] mb-1.5">
                                    <img src={`https://openweathermap.org/payload/api/media/file/${day.icon}.png`} alt="" className="w-8 mx-auto" />
                                </div>
                                <div className="font-bebas text-[20px] text-ink">{Math.round(day.temp)}°</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}