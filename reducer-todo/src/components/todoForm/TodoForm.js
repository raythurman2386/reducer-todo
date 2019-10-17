import React, { useState } from 'react'

const TodoForm = () => {
  const [todo, setTodo] = useState('')

  const handleChange = e => {
    setTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
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
        />
        <button type='submit'>Add Todo</button>
      </form>
      <button>Clear todo</button>
    </div>
  )
}

export default TodoForm
