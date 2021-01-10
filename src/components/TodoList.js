import React from 'react'

const TodoItem = props =>
  <li className={props.isCompleted ? "completed" : null}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={props.isCompleted}/>
      <label>
        {props.name}
      </label>
      <button className="destroy" />
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
  </ul>
