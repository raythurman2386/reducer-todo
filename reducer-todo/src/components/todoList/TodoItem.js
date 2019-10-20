import React from 'react'

import { ListGroupItem } from 'reactstrap'
import moment from 'moment'

const TodoItem = ({ todo, dispatch }) => {
  return (
    <ListGroupItem
      className='todo-item'
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
      <p style={{ textAlign: 'left' }}>{todo.item}</p>
      <p style={{ textAlign: 'center' }}>{'Complete By:'}</p>
      <p style={{ textAlign: 'right' }}>
        {moment()
          .add(2, 'hour')
          .calendar()}
      </p>
    </ListGroupItem>
  )
}

export default TodoItem
