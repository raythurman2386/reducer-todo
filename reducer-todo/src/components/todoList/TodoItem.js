import React from 'react'

import { ListGroupItem } from 'reactstrap'
import moment from 'moment'

const TodoItem = ({ todo, dispatch }) => {
  return (
    <ListGroupItem
      color={todo.completed ? 'danger' : 'success'}
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0 0',
      }}
      onClick={() =>
        dispatch({
          type: 'COMPLETE_TODO',
          payload: {
            id: todo.id,
            completed: todo.completed,
            text: todo.item,
          },
        })
      }
    >
      <p>{todo.item}</p>
      <p>{'Complete By:'}</p>
      <p>
        {moment()
          .add(2, 'hour')
          .calendar()}
      </p>
    </ListGroupItem>
  )
}

export default TodoItem
