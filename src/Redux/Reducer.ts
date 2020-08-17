import {getWeatherAPI, WeatherResType} from "../API/API"
import {InferActionsTypes, BaseThunkType} from "./Redux-store";

const GET_WEATHER = 'GET_WEATHER'
const GET_CITY = 'GET_CITY'
const DELETE_DASHBOARD = 'DELETE_DASHBOARD'
const ERROR = 'ERROR'

export let initState = {
    dashboards: [] as Array<WeatherResType>,
    city: '',
    error: false
}


export const Reducer = (state = initState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                dashboards: [...state.dashboards, action.dashboard]
            }
        case GET_CITY:
            return {
                ...state,
                city: action.city
            }
        case DELETE_DASHBOARD:
            return {
                ...state,
                dashboards: [...action.newDashboards]
            }
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}


export const actions = {
    getWeatherAC: (dashboard: WeatherResType) => ({type: GET_WEATHER, dashboard} as const),
    getCityAC: (city: string) => ({type: GET_CITY, city} as const),
    deleteDashboardAC: (newDashboards: Array<WeatherResType>) => ({type: DELETE_DASHBOARD, newDashboards} as const),
    errorAC: (error: boolean) => ({type: ERROR, error} as const)
}


export const getWeatherThunk = (city: string): ThunkType => async (dispatch) => {
    try {
        let data = await getWeatherAPI.getWeather(city)
        let promise = dispatch(actions.getWeatherAC(data))
        Promise.all([promise]).then(() => {
            dispatch(actions.getCityAC(''))

        })
    } catch (e) {
        dispatch(actions.getCityAC(''))
        dispatch(actions.errorAC(true))
    }
}


type InitialStateType = typeof initState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>