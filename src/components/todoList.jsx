import React from "react";
import styled from "styled-components"

const Todo = styled.p`
display: inline-block;
font-size: 20px;
background-color: #74DF00;
padding: 10px 25px;
width: 600px
`
const Delete = styled.input`
display: inline-block;
background: #FF0000;
font-size: 20px;
text-color: #FFFFFF;
padding: 12px 25px;
border-color: #FF0000;
font-weight: 700;
margin: 0 0 0 20px;
`


function List(){
    return(
        <ul>
            <li><Todo>1. First todo</Todo><Delete type = "button" value = "Delete"></Delete></li>
        </ul>
    )
}

export default List