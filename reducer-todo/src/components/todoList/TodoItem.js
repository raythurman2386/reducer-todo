import React from 'react'

import { ListGroupItem } from 'reactstrap'
import moment from 'moment'

const TodoItem = ({ todo, dispatch }) => {
  return (
    <ListGroupItem
      className='todo-item'
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
      <p>{todo.item}</p>
      <p>
        Complete By:{' '}
        {moment()
          .add(1, 'day')
          .calendar()}
      </p>
    </ListGroupItem>
  )
}

export default TodoItem
