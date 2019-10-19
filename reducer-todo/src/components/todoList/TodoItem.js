import React from 'react'

import { ListGroupItem } from 'reactstrap'

const TodoItem = ({ todo, dispatch }) => {
  // console.log(props)
  return (
    <ListGroupItem
      color={todo.completed ? 'danger' : 'success'}
      onClick={() =>
        dispatch({
          type: 'COMPLETE_TODO',
          payload: {
            id: todo.id,
            completed: todo.completed,
            text: todo.item
          }
        })
      }
    >
      {todo.item}
    </ListGroupItem>
  )
}

export default TodoItem
