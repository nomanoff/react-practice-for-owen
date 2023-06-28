import React from "react";
import styled from "styled-components";

const Return = styled.input`
background: #FA5858;
font-size: 20px;
text-color: #ffffff;
padding: 12px 25px;
border-color: #ff0000;
font-weight: 700;
float: right;
margin-top: 30px;
margin-right: 10%;
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