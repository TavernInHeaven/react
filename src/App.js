// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import  { useState } from 'react';//imrs

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text:'Doctors Appointment', day:'Apr 3rd at 11:27AM', reminder: true},
    {id: 2, text:'Listen to music', day:'Apr 2rd at 9:27AM', reminder: false},
    {id: 3, text:'Finish job tasks', day:'Sep 3rd at 11:27AM', reminder: true}
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
