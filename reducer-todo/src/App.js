import React from 'react'
import TodoForm from './components/todoForm/TodoForm'
import TodoItem from './components/todoList/TodoItem'

function App() {
  return (
    <div className='App'>
      <h1>Reducer Todo</h1>
      <TodoForm />
      <TodoItem />
    </div>
  )
}

export default App
