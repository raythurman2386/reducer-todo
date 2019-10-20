import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../../contexts/todoContext'

import { ListGroup } from 'reactstrap'

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext)

  return (
    <ListGroup>
      {state.todos.length > 0 ? (
        state.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      ) : (
        <h2>Add a few todos and get to work!</h2>
      )}
    </ListGroup>
  )
}

export default TodoList
