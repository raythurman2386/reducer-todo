import React from 'react'

const TodoItem = ({ todo, dispatch }) => {
  // console.log(props)
  return (
    <div
      onClick={() =>
        dispatch({
          type: 'COMPLETE_TODO',
          id: todo.id,
          completed: todo.complete,
          text: todo.item
        })
      }
    >
      <p>{todo.item}</p>
    </div>
  )
}

export default TodoItem
