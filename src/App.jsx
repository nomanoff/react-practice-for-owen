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
padding-left: 100px
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
    <Gray>
      <h2>To Do App</h2>
        <ListBox>
          <List></List>
        </ListBox>
        <div class="input">
          <Input></Input>
        </div>
    </Gray>
    </body>
  )
}

export default App
