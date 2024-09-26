import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
  ])
  const [todoValue, setTodoValue]= useState('')

  function persistData(newList)
  {
    localStorage.setItem('todos', JSON.stringify({
      todos: newList
    }))
  }
  function addTodos(newTodos)
  {
    const newTodoList= [...todos, newTodos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function deleteTodos(index)
  {
    const newTodoList= todos.filter((todo, todoIndex)=>{
    return todoIndex!== index})
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function editTodos(index)
  {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    deleteTodos(index)
  }

  useEffect(()=> {
    if(!localStorage)
    {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos)
    {
      return
    }
    localTodos= JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, []
  )

  return(
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} addTodos={addTodos}/>
      <TodoList editTodos={editTodos} deleteTodos={deleteTodos} todos= {todos}/>
    </>
  )
}

export default App
