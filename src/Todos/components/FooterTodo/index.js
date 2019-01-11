import React from 'react'
import { connect } from 'react-redux'

import TodoActions from '../../../redux/Todos/actions'
const { sortTodo } = TodoActions

const FooterTodo = props => {
  const { sortTodo } = props
  const handleSortTodo = type => {
    sortTodo(type)
  }
  return (
    <div>
      <button onClick={() => handleSortTodo('1')}>ASC</button>
      <button onClick={() => handleSortTodo('-1')}>DESC</button>
    </div>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  sortTodo: sortType => dispatch(sortTodo(sortType))
})
export default connect(mapStateToProps, mapDispatchToProps)(FooterTodo)