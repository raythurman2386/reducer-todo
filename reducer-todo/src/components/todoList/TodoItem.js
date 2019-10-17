import React from 'react'

const TodoItem = props => {
  // console.log(props)
  return (
    <div>
      <p>{props.todo.item}</p>
    </div>
  )
}

export default TodoItem
