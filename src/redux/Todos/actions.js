const Actions = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  SORT_TODO: 'SORT_TODO',
  
  addTodo: payload => ({
    type: Actions.ADD_TODO,
    payload
  }),
  deleteTodo: id => ({
    type: Actions.DELETE_TODO,
    id
  }),
  editTodo: payload => ({
    type: Actions.EDIT_TODO,
    payload
  }),
  sortTodo: sortType => ({
    type: Actions.SORT_TODO,
    sortType
  })
}
export default Actions