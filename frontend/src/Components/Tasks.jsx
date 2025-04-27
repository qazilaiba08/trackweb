import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5001/api/tasks', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.tasks) {
          setTasks(data.tasks);
        }
      })
      .catch((err) => {
        console.error('Error fetching tasks:', err);
        alert('Error fetching tasks. Please try again later.');
      });
  }, []);

  // Navigate to Add Task page
  const handleAddTask = () => {
    navigate('/AddTask');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-blue-100 to-blue-200 px-4">
      <h1 className="text-3xl font-bold text-center text-[#37bdcc] mb-6">Your Tasks</h1>
      <div className="flex flex-col items-center w-full max-w-4xl">
        {tasks.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <p className="text-gray-700">No tasks available. Please add some tasks.</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-md mb-4">
              <h2 className="text-xl font-semibold text-[#37bdcc]">{task.title}</h2>
              <p className="text-gray-600 mt-2">{task.description}</p>
              <p className="text-gray-500 mt-2">Assigned to: {task.assignedTo.name}</p>
              <p className="text-gray-500 mt-1">Status: {task.status}</p>
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <button
          onClick={handleAddTask}
          className="bg-[#43b7db] text-white py-2 px-4 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>
    <section>
        <div className="flex flex-col items-center w-full max-w-4xl mt-6">
            <h2 className="text-2xl font-bold text-[#37bdcc] mb-4">Task List</h2>
            {tasks.map((task) => (
                <div key={task._id} className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-md mb-4">
                <h3 className="text-xl font-semibold text-[#37bdcc]">{task.title}</h3>
                <p className="text-gray-600 mt-2">{task.description}</p>
                <p className="text-gray-500 mt-2">Assigned to: {task.assignedTo.name}</p>
                <p className="text-gray-500 mt-1">Status: {task.status}</p>
                </div>
            ))}
        </div>
    </section>
    </div>
  );
};

export default Tasks;
