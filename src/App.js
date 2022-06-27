import './App.css';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from "react-router-dom";
import Details from './components/Details';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route exact path='/taskList' element={<TaskList/>}/>
        <Route exact path='/taskDetails/:idTask' element={<Details/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
