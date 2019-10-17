export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892983412
    },
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987345
    },
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987467
    },
    {
      item: 'Learn about reducers',
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
    case 'DELETE_TODO':
      return state.todos.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}
