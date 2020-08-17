import React, {useCallback} from "react";
import {WeatherResType} from "../API/API";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../Redux/Redux-store";
import {actions} from "../Redux/Reducer";
import {ButtonBlock, DashboardBlock, Button, Temp, City} from "../Styles/StyleDashBoard";


type PropsType = {
    dashboard: WeatherResType
}

export const Dashboard: React.FC<PropsType> = ({dashboard}) => {
    const city = dashboard.name
    const dashboards = useSelector<AppStateType, Array<WeatherResType>>((state) => state.Reducer.dashboards)
    const dispatch = useDispatch()

    const deleteDashboard = useCallback(() => {
        let newDashboards = dashboards.filter(f => f.name !== city)
        dispatch(actions.deleteDashboardAC(newDashboards))
    }, [dispatch, dashboards, city])


    return <DashboardBlock>
        <ButtonBlock>
            <Button onClick={deleteDashboard}>delete</Button>
        </ButtonBlock>
        <City>{city}</City>
        <Temp>{Math.round(dashboard.main.temp)}℃</Temp>
        <img alt='icon' src={`http://openweathermap.org/img/wn/${dashboard.weather[0].icon}@2x.png`}/>
    </DashboardBlock>
}
