import styled from "styled-components";
import {TransitionGroup} from "react-transition-group";


export const BodyApp = styled.div`
text-align: center;
margin: auto;`;

export const AppForm = styled.div`
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

export const AppError = styled.div`
    height: 40px;
    color: red;
    font-size: 25px;
`
export const IsEmpty = styled.div`
    font-size: 25px;
    margin: 10px;
`
export const Dashboards = styled(TransitionGroup)`
    display: flex;
    justify-content: center;
    align-items: center;
`