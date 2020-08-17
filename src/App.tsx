import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {actions, getWeatherThunk} from "./Redux/Reducer";
import {AppStateType} from "./Redux/Redux-store";
import {WeatherResType} from "./API/API";
import {CSSTransition} from "react-transition-group"
import {Dashboard} from "./Components/WeatherDashboard";
import {AppError, AppForm, BodyApp, Dashboards, IsEmpty} from './Styles/StyleApp';


type PropsType = {}


export const App: React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    const city = useSelector<AppStateType, string>((state) => state.Reducer.city)
    const dashboards = useSelector<AppStateType, Array<WeatherResType>>(state => state.Reducer.dashboards)
    const error = useSelector<AppStateType, boolean>(state => state.Reducer.error)

    useEffect(() => {
        if (city !== '')
            dispatch(getWeatherThunk(city))
    }, [dispatch, city])


    let [valueInput, setValueInput] = useState('')

    const addCity = useCallback(() => {
        dispatch(actions.getCityAC(valueInput))
    }, [dispatch, valueInput])


    const clearInput = useCallback(
        () => {
            setValueInput('')
        }, [setValueInput])


    let WeatherElements = dashboards.map(m => <CSSTransition classNames="animate" timeout={500} key={m.name}>
        <Dashboard dashboard={m}/>
    </CSSTransition>)

    if (error) {
        setTimeout(() => dispatch(actions.errorAC(false)), 3000)
    }
    return (
        <BodyApp>
            <AppForm>
                <input value={valueInput}
                       onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                           setValueInput(e.currentTarget.value.replace(/^[а-яА-Я]+$/, ''))
                       }}
                       placeholder="search"/>

                <button onClick={addCity}>add</button>

                <button onClick={clearInput}>Clear</button>
            </AppForm>
            <AppError>{error && <span>city not found</span>}</AppError>
            {dashboards.length === 0 && (
                <IsEmpty>Dashboard is empty</IsEmpty>
            )}

            <Dashboards>
                {WeatherElements}
            </Dashboards>
        </BodyApp>
    );
}


