export const initialState = {
  todos: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    // Add a new todo without altering initial state
    case 'ADD_TODO': {
      const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false
      }
      return {
        todos: [...state.todos, newTodo]
      }
    }
    // Toggle a todo completed and return a new state object
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
        todos: todos
      }
    }
    // filter through completed todos and remove them
    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => todo.completed !== true)
      return {
        todos: todos
      }
    default:
      return state
  }
}
