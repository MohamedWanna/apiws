import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Task from './Task';

const Details = () => {
    const [task,setTask] = useState(null)
    const [loading,setLoading] = useState(true);
    const params= useParams()
    console.log(params)
    useEffect(()=>{const getOneTodo=async()=>{try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.idTask}`)
        setTask(response.data)
        setLoading(false)
    } catch (error) {
        
    }}
getOneTodo()},[])
  return (
    <div>    
        {loading ? (<Spinner animation="border" variant="primary" />) : 
        (   
        <div>
            <h1>Title:</h1><p>{task.title}</p>
            <p>User ID : {task.userId}</p>
            <p>{task.completed ? "Done" : "Not Done"}</p>
        </div>
            
        )}
        
</div>
  )
}

export default Details