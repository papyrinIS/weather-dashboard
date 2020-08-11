import React from "react";
import "../Styles/WeatherDashboard.scss"
import {connect} from "react-redux";
import {deleteDashboardAC} from "../Redux/Reducer";


export const WeatherDashboard = ({dashboards, mainWeather, city, icon, deleteDashboardAC}) => {
    const deleteDashboard = () => {
        let newDashboards = dashboards.filter(f => f.name !== city)
        deleteDashboardAC(newDashboards)
    }
    const [showButton, setShowButton] = React.useState(false)
    return <div onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className='dashboard'>
        <div className="dashboard__button">{showButton && <button onClick={deleteDashboard}>delete</button>}</div>
        <div className="dashboard__city">{city}</div>
        <div className="dashboard__temp">{Math.round(mainWeather.temp)}℃</div>
        <img alt='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        dashboards: state.Reducer.dashboards
    }
}

export default connect(mapStateToProps, {deleteDashboardAC})(WeatherDashboard)