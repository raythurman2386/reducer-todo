import React, { useReducer } from 'react'
import TodoForm from './components/todoForm/TodoForm'
import TodoItem from './components/todoList/TodoItem'

import { initialState, reducer } from './reducers/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state.todos)

  return (
    <div className='App'>
      <h1>Reducer Todo</h1>
      <TodoForm />
      <TodoItem />
    </div>
  )
}

export default App
