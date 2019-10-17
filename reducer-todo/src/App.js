import React, { useReducer } from 'react'
import TodoForm from './components/todoForm/TodoForm'
import TodoList from './components/todoList/TodoList'

import { initialState, reducer } from './reducers/reducer'
import { TodoProvider } from './contexts/todoContext'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(state.todos, 'app')

  return (
    <div className='App'>
      <TodoProvider value={{ state, dispatch }}>
        <h1>Reducer Todo</h1>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  )
}

export default App
