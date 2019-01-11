import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import TodoActions from '../redux/Todos/actions'

import Form from './components/Form'
import TodoList from './components/TodoList'
import FooterTodo from './components/FooterTodo'

const { addTodo, editTodo } = TodoActions

class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemID: null,
      itemNameDefault: null
    }
  }

  generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  }

  setItemNameDefault = (id, text) => {
    this.setState({
      itemID: id,
      itemNameDefault: {
        itemName: text
      }
    })
  }

  submit = values => {
    const { addItem, editItem, clearForm } = this.props
    const { itemID } = this.state

    const todo = {
      id: itemID ? itemID : this.generateKey('todo'),
      ...values
    }

    itemID ? editItem(todo) : addItem(todo)
    clearForm()
    this.setState({
      itemID: null,
      itemNameDefault: null
    })
  }

  render() {
    const { items, clearForm } = this.props
    const { itemNameDefault } = this.state
    return (
      <div className="container">
        <h1>Todos</h1>
        <Form onSubmit={this.submit} clearForm={clearForm} initialValues={itemNameDefault} />
        <TodoList items={items} setItemNameDefault={this.setItemNameDefault}/>
        <FooterTodo />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  items: state.Todos.items
})
const mapDispatchToProps = dispatch => ({
  addItem: data => dispatch(addTodo(data)),
  editItem: (data) => dispatch(editTodo(data)),
  clearForm: () => dispatch(reset('todoForm'))
})
export default connect(mapStateToProps, mapDispatchToProps)(Todos)

