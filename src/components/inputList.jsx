import React from "react";
import styled from "styled-components"
import { useState } from "react";
/// 아래가 추가한 거임
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo'; 

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



function Input() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
  
    const handleSubmit = () => {
        if(inputValue == ''){
            return;
        }
        setInputValue('');
        dispatch(addTodo(inputValue)); // 추가한
    };

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(); //
        }
    };
  
    return (
      <span>
        <InputText placeholder="input to do List" value={inputValue} onChange={handleInputChange} onKeyDown={handleOnKeyPress}/>
        <ButtonInput type="button" value="Add" onClick={handleSubmit} />
      </span>
    );
  }

export default Input
