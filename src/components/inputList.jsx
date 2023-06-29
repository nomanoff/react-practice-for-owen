import React from "react";
import { useState } from "react";
/// 아래가 추가한 거임
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice'; 
import InputText from "./atoms/InputText";
import ButtonInput from "./atoms/ButtonInput";

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
        <InputText placeholder="To Do..." value={inputValue} onChange={handleInputChange} onKeyDown={handleOnKeyPress}/>
        <ButtonInput type="button" value="Add" onClick={handleSubmit} />
      </span>
    );
  }

export default Input
