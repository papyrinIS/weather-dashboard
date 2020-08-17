import styled from "styled-components";

export const DashboardBlock = styled.div`
      width: 200px;
      height: 250px;
      background: #61dafb;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      transition:0.5s ease;
      border:1px solid #009afb;
      box-shadow: 5px 5px 5px 2px #007577 ;
      &:hover{
      Button{
      opacity: 1;
      visibility: visible;
      }
      }
`
export const City = styled.div`
font-size: 35px;
        margin: 5px;
`
export const Temp = styled.div`
font-size: 30px;    
`
export const ButtonBlock = styled.div`
        position: relative;
        bottom: 25px;
        left: 60px;
        width: 100px;
        height: 40px;
`
export const Button = styled.button`
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