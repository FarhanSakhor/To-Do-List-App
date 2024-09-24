import React from 'react'

export default function TodoList() {

    let todos= ['eat',
        'sleep',
        'conquer',
        'repeat'
    ]
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex)=>{
            return(
                <li className='todoItem' key={todoIndex}>
                    {todo}
                </li>
            )
        })}
    </ul>
  )
}
