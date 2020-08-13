import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {errorAC, getCityAC, getWeatherThunk} from "./Redux/Reducer";
import {WeatherDashboard} from "./Components/WeatherDashboard";
import styled from "styled-components"


const BodyApp = styled.div`
text-align: center;
margin: auto;`;

const AppForm = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
     & input {
      height: 30px;
      font-size: 25px;
      padding-left: 5px;
      width: 250px;
    }
    
    & button {
      margin-left: 10px;
      font-size: 19px;
      padding: 5px 10px;

      &:hover {
        cursor: pointer;
      }`;

const AppError = styled.div`
    height: 40px;
    color: red;
    font-size: 25px;
`
const IsEmpty = styled.div`
    font-size: 25px;
    margin: 10px;
`
const Dashboards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const App = () => {

    const dispatch = useDispatch()
    const {dashboards, city, error} = useSelector(state => {
        return {
            dashboards: state.Reducer.dashboards,
            city: state.Reducer.city,
            error: state.Reducer.error
        }
    })

    useEffect(() => {
        if (city)
            dispatch(getWeatherThunk(city))
    }, [dispatch, city])


    let [valueInput, setValueInput] = useState('')

    const addCity = useCallback(() => {
        dispatch(getCityAC(valueInput))
    }, [dispatch, valueInput])


    const clearInput = useCallback(
        () => {
            setValueInput('')
        }, [setValueInput])

    let dashboard = dashboards.map(m =>
        <WeatherDashboard
            key={m.name}
            icon={m.weather[0].icon}
            city={m.name}
            mainWeather={m.main}/>
    )

    if (error) {
        setTimeout(() => dispatch(errorAC(false)), 3000)
    }
    return (
        <BodyApp>
            <AppForm>
                <input value={valueInput}
                       onChange={(e) => {
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
                {dashboard}
            </Dashboards>

        </BodyApp>
    );
}




