import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
 const [tasks, setTasks] = useState([]);
 const navigate = useNavigate();

 useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/task/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setTasks(response.data);

      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
 }, []);

  const handleTaskCompletion = async (taskId, title, energy, repeating, frequency, user) => {
    try {
      const response = await api.put(`/task/${taskId}/`, {
        id: taskId,
        title: title,
        energy_level: energy,
        completed_at: new Date().toISOString(), 
        is_repeating: repeating,
        repeat_frequency: frequency,
        user: user
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setTasks(tasks.map(task => task.id === taskId ? { ...task, completed_at: response.data.completed_at } : task));
   } catch (error) {
      console.error('Failed to update task:', error);
   }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await api.delete(`/task/${taskId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleEditTask = (taskId) => {
    navigate(`/editTask/${taskId}`);
  };

  const sortedTasks = tasks.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return (
    <div className="flex flex-col">
      {sortedTasks.map((task) => (
        <div key={task.id} className="flex items-center mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={task.completed_at !== null}
            readOnly
            onClick={() => handleTaskCompletion(task.id, task.title, task.energy_level, task.is_repeating, task.repeat_frequency, task.user)}
          />
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">{task.title}</div>
            <div className="text-sm text-gray-500">Energy Level: {task.energy_level}</div>
          </div>
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
 );
};

export default TaskList;