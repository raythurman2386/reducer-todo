import React from 'react'
import { useInput } from '../../hooks/useInput'

// Reactstrap
import { Button, Input, InputGroup } from 'reactstrap'

const TodoForm = () => {
  const { todo, handleChange, handleSubmit, handleClear } = useInput('')

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <InputGroup className='form-container'>
        <Input
          type='text'
          name='todo'
          value={todo}
          onChange={e => handleChange(e)}
          placeholder='Add Todo'
          required
        />
        <Button color='success' type='submit'>
          Add Todo
        </Button>
        <Button color='danger' onClick={handleClear}>
          Clear todo
        </Button>
      </InputGroup>
    </form>
  )
}

export default TodoForm
