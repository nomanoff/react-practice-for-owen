/* eslint-disable react/prop-types */
import styled from "styled-components";
import Background from "../../../components/atoms/Background";
import Input from "../../../components/inputList";
import List from "../../../components/todoList";

const ListBox = styled.div`
  text-align: left;
  height: 700px;
  padding-left: 100px;
  overflow: scroll;
`;

const MainPageTemplate = ({todos}) => {
  return (
    <Background>
      <h2>To Do App</h2>
      <ListBox>
        {todos.map((data, index) => (
          <List
            key={index}
            item={data}
            index={index}
          ></List>
        ))}
      </ListBox>
      <Input/>
    </Background>
  );
};

export default MainPageTemplate;
