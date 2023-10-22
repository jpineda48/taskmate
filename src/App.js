import Header from './componants/Header';
import ShowTask from './componants/ShowTask';
import AddTask from './componants/AddTask';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tasklist, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
  const[task, setTask] = useState({})

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist])
  return (
    <div className="App">
      <Header/>
      <AddTask 
        tasklist={tasklist} 
        setTaskList={setTaskList}
        task = {task}
        setTask={setTask}
        />
      <ShowTask 
        tasklist={tasklist}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
        />
      
    </div>
  );
}

export default App;
