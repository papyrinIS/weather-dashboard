import React, {useCallback} from "react";
import { useDispatch, useSelector} from "react-redux";
import { deleteDashboardAC} from "../Redux/Reducer";
import styled from "styled-components"

const Dashboard = styled.div`
      width: 200px;
      height: 250px;
      background: #61dafb;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      transition:5s ease;
      &:hover{
      Button{
      opacity: 1;
      visibility: visible;
      }
      }
`
const City =styled.div`
font-size: 35px;
        margin: 5px;
`
const Temp =styled.div`
font-size: 30px;    
`
const ButtonBlock = styled.div`
        position: relative;
        bottom: 25px;
        left: 60px;
        width: 100px;
        height: 40px;
`
const Button=styled.button`
        font-size: 19px;
        padding: 5px 10px;
        color: red;
        border-radius: 10px;
        border: 2px solid red;
        background: transparent;
        font-weight: bold;
        transition:.5s ease-in;
           &:hover {
          cursor: pointer;
           }
           opacity: 0;
           visibility: hidden;
`


export const WeatherDashboard = ({mainWeather, city, icon}) => {
    const dashboards = useSelector(state=>state.Reducer.dashboards)
    const dispatch =useDispatch()


    const deleteDashboard =useCallback( () => {
        let newDashboards = dashboards.filter(f => f.name !== city)
        dispatch(deleteDashboardAC(newDashboards))
    },[dispatch,dashboards,city])

    return <Dashboard>
        <ButtonBlock>
             <Button onClick={deleteDashboard}>delete</Button>
        </ButtonBlock>
        <City>{city}</City>
        <Temp>{Math.round(mainWeather.temp)}℃</Temp>
        <img alt='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
    </Dashboard>
}



