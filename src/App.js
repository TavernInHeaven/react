// import logo from './logo.svg';
import { useState } from 'react'; //imrs
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Apr 3rd at 11:27AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Listen to music',
      day: 'Apr 1st at 9:27AM',
      reminder: false,
    },
    {
      id: 3,
      text: 'Finish job tasks',
      day: 'Sep 3rd at 11:26AM',
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { id, ...task }]);
    setShowAddTask(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, reminder: !t.reminder } : t))
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onReminder={toggleReminder} />
    </div>
  );
};

export default App;
