import React from 'react'
import TodoItem from '../TodoItem'

const TodoList = props => {
  const { items, setItemNameDefault } = props

  if (items && items.length) {
    return (
      <ul>
        {items && items.map((item, index) => (
          <TodoItem key={index} item={item} setItemNameDefault={setItemNameDefault} />
        ))}
      </ul>
    )
  }

  return (
    <div className="empty-data">Empty data</div>
  )
  
}

export default TodoList