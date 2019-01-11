import React from 'react'
import { connect } from 'react-redux'

import TodoActions from '../../../redux/Todos/actions'
const { deleteTodo } = TodoActions

const DeleteTodo = props => {
  const { id, deleteTodo } = props
  return (
    <button className="ml-auto" onClick={() => deleteTodo(id)} >Delete</button>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo)