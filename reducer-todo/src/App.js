import React, { useReducer } from 'react'
import TodoForm from './components/todoForm/TodoForm'
import TodoItem from './components/todoList/TodoItem'

import { initialState, reducer } from './reducers/reducer'
import { TodoProvider } from './contexts/todoContext'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state.todos, 'app')
  return (
    <div className='App'>
      <TodoProvider value={state.todos}>
        <h1>Reducer Todo</h1>
        <TodoForm />
        <TodoItem />
      </TodoProvider>
    </div>
  )
}

export default App
