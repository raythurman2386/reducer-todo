export const initialState = {
  todos: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false,
      }
      return {
        todos: [...state.todos, newTodo],
      }
    }
    case 'COMPLETE_TODO': {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      // Spread operator can be used in place of Object.assign
      const todo = { ...state.todos[index] }
      // const todo = Object.assign({}, state.todos[index])
      todo.completed = !action.payload.completed
      const todos = [...state.todos]
      // const todos = Object.assign([], state.todos)
      todos.splice(index, 1, todo)
      return {
        todos: todos,
      }
    }
    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => todo.completed !== true)
      return {
        todos: todos,
      }
    default:
      return state
  }
}
