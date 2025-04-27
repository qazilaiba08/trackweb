import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5001/api/users') 
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));

    
    if (id) {
      fetch(`http://localhost:5001/api/tasks/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
          setAssignedTo(data.assignedTo);
          setIsEditing(true);
        })
        .catch((err) => console.error('Error fetching task:', err));
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !assignedTo) {
      alert('Please fill in all fields');
      return;
    }

    const taskData = {
      title,
      description,
      assignedTo,
      status: 'To Do', 
    };

    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing
      ? `http://localhost:5001/api/tasks/${id}` // Edit existing task
      : 'http://localhost:5001/api/tasks'; // Create new task

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate('/tasks'); 
        } else {
          alert('Error: ' + data.message);
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('An error occurred while saving the task.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#37bdcc] mb-6">
          {isEditing ? 'Edit Task' : 'Add a New Task'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Task Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Task Title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Task Description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Assign To</label>
            <select
              required
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#43b7db] text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
          >
            {isEditing ? 'Update Task' : 'Add Task'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
