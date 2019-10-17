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
    case 'ADD_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: false, id: Date.now() }
        } else {
          return todo
        }
      })
    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !state.completed }
        } else {
          return todo
        }
      })
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}
