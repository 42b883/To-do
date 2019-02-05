import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
     todos: [ 
       {id: 1, content: 'Learn react-router'},
      {id: 2, content: 'Learn Redux'}
     ]
    }
  }

  deleteTodo = (id) => {
    console.log(id)
    const todos = this.state.todos.filter(todo=>{
      return(
        todo.id !== id
      )
    })
    this.setState({
      todos //in ES6 todos === todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos 
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h2 className="darken-4 green-text center">Tasks</h2>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
