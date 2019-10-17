import React, { useReducer } from 'react'
import TodoItem from './TodoItem'
import { initialState } from '../../reducers/reducer'

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state.todos)
  return (
    <div>
      <h3>List Component</h3>
      {/* {state && state.todos.map(item => <TodoItem todo={item} />)} */}
    </div>
  )
}

export default TodoList
