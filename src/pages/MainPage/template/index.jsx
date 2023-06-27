/* eslint-disable react/prop-types */
import styled from "styled-components";
import Background from "../../../components/Background";

import Input from "../../../components/inputList";
import List from "../../../components/todoList";

const ListBox = styled.div`
  text-align: left;
  height: 700px;
  padding-left: 100px;
  overflow: scroll;
`;

const MainPageTemplate = ({ toDo, handleInput, handleDelete }) => {
  return (
    <Background>
      <h2>To Do App</h2>
      <ListBox>
        {toDo.map((data, index) => (
          <List
            key={index}
            item={data}
            index={index}
            onDelete={handleDelete}
          ></List>
        ))}
      </ListBox>
      <div className="input">
        <Input onDataSubmit={handleInput}></Input>
      </div>
    </Background>
  );
};

export default MainPageTemplate;
