import React, {useEffect, useState} from 'react';
import './Styles/WeatherDashboard.scss'
import {connect} from "react-redux";
import {errorAC, getCityAC, getWeatherThunk} from "./Redux/Reducer";
import WeatherDashboard from "./Components/WeatherDashboard";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const App = ({dashboards, getWeatherThunk, getCityAC, city,error,errorAC}) => {
    useEffect(() => {
        if (city)
            getWeatherThunk(city)
    }, [getWeatherThunk, city])


    let [valueInput, setValueInput] = useState('')
    const addCity = () => getCityAC(valueInput)
    const clearInput = () => setValueInput('')

    let dashboard = dashboards.map(m =>
        <CSSTransition classNames="option" key={m.name}  timeout={1000}>
            <WeatherDashboard
                              icon={m.weather[0].icon}
                              city={m.name}
                              mainWeather={m.main}/>
        </CSSTransition>)

if(error){
    setTimeout(()=>errorAC(false),3000)
}
    return (
        <div className="App">
            <div className="App__form">
            <input value={valueInput}
                   onChange={(e) => {
                       setValueInput(e.currentTarget.value.replace(/^[а-яА-Я]+$/, ''))
                   }}
                   placeholder="search"/>

            <button onClick={addCity}>add</button>

            <button onClick={clearInput}>Clear</button>
            </div>
            <div className="App__error">{error &&<span>city not found</span>}</div>
            {dashboards.length === 0 && (
                <div className="App__isEmpty">Dashboard is empty</div>
            )}

                <div >
                    <TransitionGroup className="dashboards">
                    {dashboard}
                    </TransitionGroup>
                </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dashboards: state.Reducer.dashboards,
        city: state.Reducer.city,
        error: state.Reducer.error
    }
}

export default connect(mapStateToProps, {getWeatherThunk, getCityAC,errorAC})(App)


