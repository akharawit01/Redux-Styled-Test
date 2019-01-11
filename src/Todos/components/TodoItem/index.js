import React from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../DeleteTodo'
import EditTodo from '../EditTodo'

const TodoItemPropTypes = {
  item: PropTypes.object
}
const TodoItemDefaultProps = {
  item: {}
}

const TodoItem = props => {
  const { item, setItemNameDefault } = props
  const handleEdit = () => {
    const { id, itemName } = item
    setItemNameDefault(id, itemName)
  }
  return (
    <li>
      <span>{item.itemName}</span> 
      <EditTodo handleEdit={handleEdit} />
      <DeleteTodo id={item.id} />
    </li>
  )
}

TodoItem.propTypes = TodoItemPropTypes
TodoItem.defaultProps = TodoItemDefaultProps

export default TodoItem