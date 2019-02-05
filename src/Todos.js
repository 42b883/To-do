import React from 'react'

const Todos = ({todos, deleteTodo}) => {
     const todoList = todos.length ? (todos.map(todo => {
         return(
             <div className="collection-item" key={todo.id}>
                <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
             </div>
         )
     })) : null;
     
    
  return (
    <div className="todos collection">
        {todos.length > 0 ? <p className="center green accent-2  msg msg-info z-depth-3">Click the todo to delete</p> :
         <p className="center red accent-4 white-text msg msg-error z-depth-3 scale-transition">Nothing to-do!</p>}
        {todoList}  
    </div>
  )
}
export default Todos
