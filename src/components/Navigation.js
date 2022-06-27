import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Navigation = () => {
  return (
    <div>
        <nav>
            <ul>
               <Link to='/'><Button variant="primary" style={{margin:'2px'}}>Home</Button></Link>
               <Link to='/taskList'><Button variant='primary' style={{margin:'2px'}}>Task List</Button></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation