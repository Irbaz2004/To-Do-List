import React, { useState } from 'react';

export default function Lists() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const add = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <div className="Header text-center mb-4">
        <h1 className="fw-bold">iRuz To-Do-List</h1>
      </div>
      <div className="form d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter Your Task"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary" onClick={add}>
          Add
        </button>
      </div>
      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span
              onClick={() => toggleComplete(index)}
              style={{ cursor: 'pointer' }}
            >
              {task.text}
              <i className="fa-solid fa-circle-check"></i>
            </span>
            <span onClick={() => setInputValue(task.text)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
            <span onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
              <i className="fa-solid fa-trash"></i>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
