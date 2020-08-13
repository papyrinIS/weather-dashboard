import axios from 'axios'

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?`
});

export const getWeatherAPI = {
    getWeather(city) {
        return instance.get(`&q=${city}&APPID=dcca529665a37812e85088afd3957d4d&units=metric&SameSite=None`).then(res => res.data)
    }
}
