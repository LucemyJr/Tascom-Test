import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./ToDoList.css";
import CloseBtn from '../../assets/CloseBtn.svg'

const ToDoList = ({ tasks, completeTask, deleteTask, editTask }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [editedTaskDescription, setEditedTaskDescription] = useState('');

  const handleCheckboxChange = (taskId) => {
    completeTask(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleEditTask = (taskId) => {
    if (editMode === taskId) {
      // Salvar as alterações
      editTask(taskId, editedTaskName, editedTaskDescription);
      setEditMode(null);
    } else {
      // Entrar no modo de edição
      const taskToEdit = tasks.find((task) => task.id === taskId);
      setEditedTaskName(taskToEdit.name);
      setEditedTaskDescription(taskToEdit.description);
      setEditMode(taskId);
    }
  };

  return (
    <div className="ToDo">
      <div className='to-do-container'>
        <h2 className='to-do-title'>To do</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className='task-container'>
              <div className="checkbox-name-description">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <div className="name-description">
                  {
                    editMode === task.id ? (
                      <input
                        type="text"
                        value={editedTaskName}
                        onChange={(e) => setEditedTaskName(e.target.value)}
                      />
                    ) : (
                      <h1 className={task.completed ? 'task-name completed' : 'task-name'}>
                        {task.name}
                      </h1>
                    )
                  }
                  {
                    editMode === task.id ? (
                      <input
                        type="text"
                        value={editedTaskDescription}
                        onChange={(e) => setEditedTaskDescription(e.target.value)}
                      />
                    ) : (
                      <p className={task.completed ? 'task-description completed' : 'task-description'}>
                        {task.description}
                      </p>
                    )
                  }
                </div>
              </div>
              <div className="edit-date">
                <button onClick={() => handleEditTask(task.id)} className='edit-btn'>
                  <FontAwesomeIcon icon={faPenToSquare} className='edit-icon'/>
                </button>
                <button onClick={() => handleDeleteTask(task.id)} className='close-button'>
                  <img src={CloseBtn} alt="close button" className='close-btn'/>
                </button>
                <p className={task.completed ? 'task-date completed' : 'task-date'}>{task.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
