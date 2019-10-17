import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../../contexts/todoContext'

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext)

  // console.log(state.todos, 'todos')

  return (
    <div>
      <h3>List Component</h3>
      {state.todos &&
        state.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
    </div>
  )
}

export default TodoList
