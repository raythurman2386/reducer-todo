import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../../contexts/todoContext'

import { ListGroup } from 'reactstrap'

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext)

  return (
    <ListGroup>
      {state.todos &&
        state.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
    </ListGroup>
  )
}

export default TodoList
