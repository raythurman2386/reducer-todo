import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../../contexts/todoContext'

const TodoList = () => {
  const { todos } = useContext(TodoContext)

  console.log(todos, 'todos')

  return (
    <div>
      <h3>List Component</h3>
      {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoList
