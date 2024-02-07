import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importe apenas a função v4 e renomeie-a para uuidv4
import "./CreateTask.css"

const CreateTask = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || description.trim() === '') {
      alert('Preencha este campo.'); 
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()} at ${currentDate.toLocaleString('US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;

    const newTask = {
      id: uuidv4(), // Gere um ID único usando uuidv4
      name,
      description,
      date: formattedDate,
    };

    addTask(newTask);

    setName('');
    setDescription('');
  };

  return (
    <div className='create-task-container'>
      <h2 className='create-task-tittle'>Add new to do</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className='name-input'>Task Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome da Tarefa' required className='create-input'/>
        </div>    
        <div className="input-container">
          <label className='name-input'>Task Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Descrição da Tarefa' required className='create-input'/>
          <button type="submit" className='btn-create'>Create Todo</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;