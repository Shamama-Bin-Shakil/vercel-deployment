import React from 'react'
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos List</h3>
      {props.todos.length === 0 ? "No todo Display" :
        props.todos.map((todo) => {
          return <Todo todo={todo} key={props.sno} onDelete={props.onDelete} />
        })}
    </div>
  )
}

export default Todos
