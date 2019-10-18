import React from 'react'
import { useInput } from '../../hooks/useInput'

const TodoForm = () => {
  const { todo, handleChange, handleSubmit, handleClear } = useInput('')

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
