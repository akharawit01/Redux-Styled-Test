import React from 'react'
import { Field, reduxForm } from 'redux-form'
let TodoForm = props => {
  const { handleSubmit, clearForm } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="itemName" component="input" type="text" placeholder="Item Name" />
      </div>
      <button type="submit">Submit</button>
      <button type="reset" onClick={() => clearForm()}>Clear</button>
    </form>
  )
}

TodoForm = reduxForm({
  form: 'todoForm',
  enableReinitialize: true
})(TodoForm)

export default TodoForm
