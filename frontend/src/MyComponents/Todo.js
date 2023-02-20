import React from 'react'

const Todo = ({todo, onDelete}) => {
  return (
    <div>
      <p>{todo.sno}</p>
      <h4>{todo.title}</h4>
      <button type='button' className='btn btn-sm btn-danger' onClick={()=> {onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todo
