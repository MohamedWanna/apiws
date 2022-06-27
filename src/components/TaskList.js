import React, { useEffect, useState } from 'react'
import Task from './Task';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const TaskList = () => {

const [loading,setLoading] = useState(true);
const [todos,setTodos] =useState(null);

useEffect(() => {
        //fetch('https://jsonplaceholder.typicode.com/todos')
        //.then((res) => res.json())
        //.then((data) =>{setTodos(data); setLoading(false)})
        //.catch(err => setError (err))
        
        //*second method*//
   //axios.get('https://jsonplaceholder.typicode.com/todos')
  //.then(function (response) {
    // handle success
    //setTodos(response.data);
    //setLoading(false)
  //})
  //.catch(function (error) {
    // handle error
    //console.log(error);
  //})
  //.then(function () {
    // always executed
  //});
  const fetchData= async () => {
    try {
        const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
        setTodos(response.data);
        setLoading(false)

    } catch (error) {
        console.log(error)
        
    }
  }
    fetchData();
    },[]);
return (
<div>
    <ul>
        
        {loading ? (<Spinner animation="border" variant="primary" />) : 
        (todos && todos.map((todo) =><Task key={todo.id} todo={todo}/>)
        )}
    </ul>
</div>
    
  )
}

export default TaskList