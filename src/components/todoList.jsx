import React,{ useRef, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'; // 이 부분 추가
import Delete from "./atoms/Delete";
import Todo from "./atoms/Todo";
import Readmore from "./atoms/Readmore";
import Number from "./atoms/number";
import Cover from "./atoms/Cover";

import { useDispatch,useSelector } from 'react-redux';
import { deleteTodo } from '../redux/todo'

function List({item, index}) {
  const todoRef = useRef(); // 이 부분 추가
  const [isOverflow, setIsOverflow] = useState(false); // 이 부분 추가
  const navigate = useNavigate(); // 이 부분 추가
  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value); // 추가

  useEffect(() => {
    const current = todoRef.current;
    if (current.scrollWidth > current.offsetWidth) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [item]);

  const onRemove = () => {
    dispatch(deleteTodo(index)); // 추가한 거임
  };
  
  const toDetail = () =>{
    navigate(`/detail/${item}`);
  }

  return (
    <Cover>
      <Number>{index+1}</Number>
      <Todo ref={todoRef}>
        {item}
      </Todo>
      {isOverflow && <Readmore type="button" value="Read More" onClick={toDetail}></Readmore>}
      <Delete type="button" value="Delete" onClick={onRemove}></Delete>
    </Cover>
  );
}

export default List;
