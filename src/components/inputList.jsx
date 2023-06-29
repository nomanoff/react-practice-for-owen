import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import InputText from "./atoms/InputText";
import ButtonInput from "./atoms/ButtonInput";
import { createPostsAsync } from "../redux/todoSlice";

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
        dispatch(createPostsAsync({title: inputValue, body: '', userId: 1})); // userId는 임의로 1을 넣었습니다.
    //    dispatch(addTodo(inputValue)); // 추가한
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
