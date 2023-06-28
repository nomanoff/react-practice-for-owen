import React,{ useRef, useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'; // 이 부분 추가

const Todo = styled.div`
  display: inline-block;
  font-size: 20px;
  background-color: #A5DF00;
  padding: 10px 25px;
  width: 600px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  margin: 15px 0;
`;
const Delete = styled.input`
  display: inline-block;
  background: #FA5858;
  font-size: 20px;
  text-color: #ffffff;
  padding: 12px 25px;
  border-color: #ff0000;
  font-weight: 700;
  margin: 0 0 0 20px;
  vertical-align: middle;
`;

const Readmore = styled.input`
  display: inline-block;
  background: #FA5858;
  font-size: 20px;
  text-color: #ffffff;
  padding: 12px 25px;
  border-color: #ff0000;
  font-weight: 700;
  margin: 0 0 0 20px;
  vertical-align: middle;
`;

function List({ item, index, onDelete }) {
  const todoRef = useRef(); // 이 부분 추가
  const [isOverflow, setIsOverflow] = useState(false); // 이 부분 추가
  const navigate = useNavigate(); // 이 부분 추가
  
  useEffect(() => {
    const current = todoRef.current;
    if (current.scrollWidth > current.offsetWidth) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [item]);

  const onRemove = () => {
    onDelete(index);
  };
  
  const toDetail = () =>{
    navigate(`/detail/${item}`);
  }

  return (
    <div>
      <Todo ref={todoRef}>
        {index + 1}. {item}
      </Todo>
      {isOverflow && <Readmore type="button" value="Read More" onClick={toDetail}></Readmore>}
      <Delete type="button" value="Delete" onClick={onRemove}></Delete>
    </div>
  );
}

export default List;
