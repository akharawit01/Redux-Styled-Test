import Actions from './actions'
import _ from 'underscore'
const initState = {
  items: []
}
export default function todosReducer(state = initState, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      }
    case Actions.EDIT_TODO:
      console.log(action.payload.itemName)
      return {
        ...state,
        items: state.items.map(todo => {
          if(todo.id === action.payload.id) return { ...todo, itemName: action.payload.itemName }
          return todo
        })
      }
    case Actions.DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.id)
      }
      case Actions.SORT_TODO:
        const handleSort = _.sortBy(state.items, 'itemName')
        return {
          ...state,
          items: action.sortType === '1' ? handleSort : handleSort.reverse()
        }
    default:
      return state
  }
}