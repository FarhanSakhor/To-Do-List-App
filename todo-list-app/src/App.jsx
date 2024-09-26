import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
  ])
  const [todoValue, setTodoValue]= useState('')

  function addTodos(newTodos)
  {
    const newTodoList= [...todos, newTodos]
    setTodos(newTodoList)
  }

  function deleteTodos(index)
  {
    const newTodoList= todos.filter((todo, todoIndex)=>{
    return todoIndex!== index})
    setTodos(newTodoList)
  }

  function editTodos(index)
  {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    deleteTodos(index)
  }

  return(
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} addTodos={addTodos}/>
      <TodoList editTodos={editTodos} deleteTodos={deleteTodos} todos= {todos}/>
    </>
  )
}

export default App
