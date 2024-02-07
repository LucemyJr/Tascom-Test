import React from 'react';
import "./FinishedTasks.css"

const FinishedTasks = ({ completedTasks }) => {
  return (
    <div className='finished-tasks'>
      <h2 className='finished-tittle'>Finished tasks quantity</h2>
      <p className='finished-number'>{completedTasks}</p>
    </div>
  );
}

export default FinishedTasks;
