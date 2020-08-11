import {getWeatherAPI} from "../API/API";

const GET_WEATHER='GET_WEATHER'
const CITY='CITY'
const DELETE_DASHBOARD='DELETE_DASHBOARD'
const ERROR='ERROR'


export const initState={
    dashboards:[],
    city:'',
    error:false
}


export const Reducer = (state=initState,action)=>{
    switch (action.type) {
        case GET_WEATHER:
            return{
                ...state,
                dashboards: [...state.dashboards,action.dashboard]
            }
        case CITY:
            return {
                ...state,
                city:action.city
            }
        case DELETE_DASHBOARD:
            return{
                ...state,
                dashboards:[...action.newDashboards]
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

export const getWeatherAC=(dashboard)=>({type:GET_WEATHER,dashboard})
export const getCityAC=(city)=>({type:CITY,city})
export const deleteDashboardAC=(newDashboards)=>({type:DELETE_DASHBOARD,newDashboards})
export const errorAC=(error)=>({type:ERROR,error})


export const getWeatherThunk = (city)=>async (dispatch)=>{
    try {
        let data = await getWeatherAPI.getWeather(city)
        let promise = dispatch(getWeatherAC(data))
        Promise.all([promise]).then(() => {
            dispatch(getCityAC(''))
        })
    }catch (e) {
        dispatch(getCityAC(''))
        dispatch(errorAC(true))
    }
}