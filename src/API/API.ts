import axios from 'axios'

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
});

export const getWeatherAPI = {
    getWeather(city: string) {
        return instance.get<WeatherResType>(`weather?q=${city}&appid=dcca529665a37812e85088afd3957d4d&units=metric`)
            .then(res => res.data)
    }
}

export type WeatherResType = {
    coord: { lon: number, lat: number },
    weather: [
        {
            id: number
            main: string
            description: string,
            icon: string
        }
    ],
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    },
    wind: {
        speed: number
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number
    sys: {
        "type": number
        id: number
        message: number
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number
    id: number
    name: string
    cod: number
}