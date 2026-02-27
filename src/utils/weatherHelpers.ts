import type { ForecastDay } from '../types/weather';
import type { ForecastItem } from '../types/weather';

export function processForecast(forecastList: ForecastItem[]): ForecastDay[] {
    const dailyForecasts: { [key: string]: ForecastItem } = {};
    const dateTimeFormat = new Intl.DateTimeFormat("cs-CZ", {
        weekday: "long",
    })

    function getDayName(date: number) {
        return dateTimeFormat.format(new Date(date * 1000));
    }

    forecastList.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        const time = item.dt_txt.split(' ')[1];

        // Preferujeme 12:00 nebo 15:00
        if (!dailyForecasts[date] || time === "12:00:00" || time === "15:00:00") {
            dailyForecasts[date] = item;
        }
    });

    return Object.values(dailyForecasts)
        .slice(0, 5) // pouze 5 dní
        .map((item) => ({
            name: getDayName(item.dt),
            temp: item.main.temp,
            description: item.weather[0].description,
            speed: item.wind.speed,
            pressure: item.main.pressure,
            humidity: item.main.humidity,
            icon: item.weather[0].icon,
        }))
}