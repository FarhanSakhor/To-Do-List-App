import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  let todos= ['eat',
    'sleep',
    'conquer',
    'repeat'
]
  return(
    <>
      <TodoInput/>
      <TodoList todos= {todos}/>
    </>
  )
}

export default App
