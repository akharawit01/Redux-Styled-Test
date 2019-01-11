import React from 'react'

const EditTodo = props => {
  const { handleEdit } = props
  return <button className="ml-auto" onClick={() => handleEdit()}>Edit</button>
}
export default EditTodo