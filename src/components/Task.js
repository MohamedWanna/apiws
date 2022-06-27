import React from 'react';
import './task.css'
import { Link } from "react-router-dom";

const Task = ({todo}) => {
  return (
    <div>
        <p>{todo.userId} :</p><h1 className={todo.completed ? 'done':'notDone'}> {todo.title}_{todo.id} </h1>
        <Link to={`/taskDetails/${todo.id}`}><button>Details</button></Link>
    </div>
  )
}

export default Task