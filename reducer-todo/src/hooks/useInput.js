import { useState, useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'

export const useInput = initialValue => {
  const [todo, setTodo] = useState(initialValue)
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

  const handleClear = () => {
    dispatch({
      type: 'DELETE_TODO'
    })
  }

  return { todo, handleChange, handleSubmit, handleClear }
}
