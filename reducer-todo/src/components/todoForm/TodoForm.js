import React, { useState, useContext } from 'react'
import { TodoContext } from '../../contexts/todoContext'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const { dispatch } = useContext(TodoContext)

  const handleChange = e => {
    setTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
    setTodo('')
  }

  const handleClear = e => {
    e.preventDefault()
    dispatch({
      type: 'DELETE_TODO'
    })
  }

  return (
    <div className='form-container'>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          name='todo'
          value={todo}
          onChange={e => handleChange(e)}
          placeholder='Add Todo'
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      <button onClick={handleClear}>Clear todo</button>
    </div>
  )
}

export default TodoForm
