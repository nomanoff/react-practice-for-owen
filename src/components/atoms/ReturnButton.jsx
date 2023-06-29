import React from "react";
import styled from "styled-components";

const Return = styled.input`
background: #31B404;
font-size: 35px;
text-color: #ffffff;
padding: 15px 20px;
border-color: #31B404;
font-weight: 700;
float: right;
margin-top: 30px;
margin-right: 6%;
border-radius:30px;
`

const ReturnButton = ({returnToMain}) =>{
    const onreturn = () => {
        returnToMain();
    }
    return(
        <Return type="button" value = "return" onClick ={onreturn}>
        </Return>
    );
};

export default ReturnButton