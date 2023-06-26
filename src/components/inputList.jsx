import React from "react";
import styled from "styled-components"

const ButtonInput = styled.input`
background: #31B404;
color: #FFFFFF;
border-color: #01DF01;
margin-left: 10px;
font-size: 20px;
padding: 12px 25px;
value: Add;
`
const InputText = styled.input`
background-color: #D3D3D3;
font-size: 20px;
font-weight: 700;
text-color: #FFFFFF;
padding: 10px 25px;
width: 800px
`


function Input(){
    return(
        <span>
            <InputText type ="text" placeholder="input to do List"></InputText>
            <ButtonInput type = "button" value ="Add"></ButtonInput>
        </span>
    )
}

export default Input