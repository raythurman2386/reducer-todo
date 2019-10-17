export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Holy freaking crap',
      completed: false,
      id: 3892987345
    },
    {
      item: 'would you look at that',
      completed: false,
      id: 3892987467
    },
    {
      item: 'It is somewhat working',
      completed: false,
      id: 3892987678
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        item: action.text,
        id: Date.now(),
        completed: false
      }
      return {
        todos: [...state.todos, newTodo]
      }
    }
    case 'COMPLETE_TODO': {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      const todo = Object.assign({}, state.todos[index])
      todo.completed = !action.payload.completed
      const todos = Object.assign([], state.todos)
      todos.splice(index, 1, todo)
      return {
        todos: todos
      }
    }
    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => todo.completed !== true)
      return {
        todos: todos
      }
    default:
      return state
  }
}
