import React from "react";
import styled from "styled-components";

const Todo = styled.p`
  display: inline-block;
  font-size: 20px;
  background-color: #74df00;
  padding: 10px 25px;
  width: 600px;
  font-weight: 600;
`;
const Delete = styled.input`
  display: inline-block;
  background: #ff0000;
  font-size: 20px;
  text-color: #ffffff;
  padding: 12px 25px;
  border-color: #ff0000;
  font-weight: 700;
  margin: 0 0 0 20px;
`;

function List({ item, index, onDelete }) {
  // props를 data로 받음

  const onRemove = () => {
    console.log(index);
    onDelete(index);
  };

  return (
    <div>
      <Todo>
        {index + 1}. {item}
      </Todo>
      <Delete type="button" value="Delete" onClick={onRemove}></Delete>
    </div>
  );
}

export default List;
