import React, { useState } from 'react'

export default function TodoInput(props) {
    const {addTodos, todoValue, setTodoValue}= props
    
  return (
    <header>
        <input value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} placeholder="Enter to-do" />
        <button onClick={()=>{addTodos(todoValue) 
        setTodoValue('')}}>Add</button>
    </header>
  )
}
