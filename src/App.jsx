import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from "styled-components"
import Gray from "./components/Background"
import Input from './components/inputList'
import List from './components/todoList'

const ListBox = styled.div`
text-align: left;
height: 700px;
padding-left: 100px;
overflow: scroll;
`

function App() {

  const[toDo, settoDO] = useState([]);

  const HandleInput = (data) => {
    settoDO([...toDo,data.inputValue]);
  }
  
  const HandleDelete = (num) => {
    settoDO(toDo.filter((_, i) => i !== num));
  }

  return (
    <body>
    <Gray>
      <h2>To Do App</h2>
        <ListBox>
          {toDo.map((data,index) => (
            <List key = {index} item ={data} index = {index} onDelete = {HandleDelete}></List>
          ))}
        </ListBox>
        <div class="input">
          <Input onDataSubmit={HandleInput}></Input>
        </div>
    </Gray>
    </body>
  )
}

export default App
