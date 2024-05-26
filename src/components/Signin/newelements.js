import styled from "styled-components";
import { Link } from 'react-router-dom';
import img from "./endo.png"

export const Container=styled.div`
  box-sizing: border -box;
  font-family: sans-sefif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #010101;
//   background: seagreen;
  // background: url(${img}) ;
//   background-size: cover;
  background-position: center;
`

export const FormTop=styled.div`


`

export const Icon=styled(Link)`
  margin-left: 10px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 930px){
    margin-left: 16px;
    margin-top: 16px;
  }
`;

export const ExitIcon=styled(Link)`
  margin-left: 750px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 930px){
    margin-left: 200px;
    margin-top: 16px;
  }
`;

export const Form = styled.form`

`;

export const FormWrap=styled.div`
    width: 420px;
    background: #132626;
    border: 2px solid rgba(255, 255,255,.2);
    backdrop-filter: blur(20px);
    
    box-shadow: #132626 0px 20px 30px -10px;
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
`
export const FormH1=styled.h1`
   font-size: 36px;
   text-align: center;
`

export const FormInputBox=styled.div`
   width: 100%;
   height: 50px;
   margin: 30px 0;

`
export const FormInput=styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255,255,255,2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
`
// FormInput::placeholder{
//     color:#fff;
// }


export const FormRemember=styled.div`
  display: flex;
  float: right;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
`

export const FormForgot=styled(Link)`
    accent-color: #fff;
    margin-right: 3px;
    color: #fff;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`

export const FormButton=styled.button`
   width: 100%;
   height: 45px;
  //  background:#fff;
   background: #01bf71;
   border: none;
   ouline: none;
   border-radius: 40px;
   box-shadow: 0 0 10px rgba(0, 0, 0, .1);
   cursor: pointer;
   font-size: 16px;
   color: #333;
   font-weight: 600;
   padding: 16px 0;
`;

export const FormRegister=styled.div`
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
`

export const FormSignUp=styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    &:hover{
        text-decoration: underline;
    }
`

export const FormLast=styled.div`
   text-align: center;
`

export const FormGoBack=styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    &:hover{
        font-size: 16px;
        font-weight: 400;
    }
`