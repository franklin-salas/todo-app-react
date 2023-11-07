//import logo from './logo.svg';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { useEffect, useState } from 'react';
import LocalStorageRepository from './repository/localStorage';
import { TaskContent } from './components/TaskContent';
function App() {

  const [tasks, setTasks] = useState(LocalStorageRepository.loadTasks());
  
  
  useEffect(() => {
      LocalStorageRepository.saveTasks(tasks);
     
  }, [tasks])
  
  const createTask =(task) =>{

    setTasks([task,...tasks])
  }

const deleteTask = (id) => {
  const updateTasks = tasks.filter((task) => task.id !== id)
  setTasks(updateTasks);
}

  return (
    <Container> 
      <Header/>
      <InputTask createTask={createTask}/>
      <TaskContent tasks={tasks} deleteTask= {deleteTask} />
    </Container>
   
  );
}

export default App;
