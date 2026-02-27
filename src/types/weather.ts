export interface ForecastDay {
    name: string;
    temp: number;
    icon: string;
    description: string;
    speed: number;
    pressure: number;
    humidity: number;
}

export interface ForecastItem {
    dt: number;
    dt_txt: string;
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    };
    sys: {
        country: string;
    }
}

export interface WeatherData {
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    sys: {
        country: string;
    }
}