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
    default:
      return state
  }
}
