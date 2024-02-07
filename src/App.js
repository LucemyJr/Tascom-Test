import React, { useState, useEffect } from 'react';
import CreateTask from './Components/CreateTask/CreateTask';
import ToDoList from './Components/CreateTask/ToDoList';
import FinishedTasks from './Components/CreateTask/FinishedTasks';
import './App.css';
import Header from './Components/Header/Header';
import ChuckNorris from './Components/ChuckNorris/ChuckNorris';
import Credits from './Components/Credits/Credits';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);

  // Função para salvar as tarefas no localStorage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Função para carregar as tarefas do localStorage
  const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  // Carregar tarefas do localStorage quando a aplicação for montada
  useEffect(() => {
    setTasks(loadTasksFromLocalStorage());
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { ...newTask, id: uuidv4(), completed: false }];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (taskId, editedName, editedDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: editedName, description: editedDescription } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Calcula o número de tarefas concluídas
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="App">
      <div className="panels-container">
        <Header />
        <div className="LeftPanel">
          <ToDoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask} />
        </div>
        <div className="RightPanel">
          <CreateTask addTask={addTask} />
          <FinishedTasks completedTasks={completedTasks} />
        </div>
        <div className="chuck-credits">
          <ChuckNorris />
          <Credits/>
        </div>
      </div>
    </div>
  );
}

export default App;
