import React, { useState, useEffect } from 'react';
import api from '../../api';

const TaskList = () => {
 const [tasks, setTasks] = useState([]);

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

 return (
    <div className="flex flex-col">
      {tasks
        .filter(task => task.completed_at === null) // Filter out completed tasks
        .map((task) => (
          <div key={task.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={task.completed_at !== null}
              readOnly
            />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">{task.title}</div>
              <div className="text-sm text-gray-500">Energy Level: {task.energy_level}</div>
            </div>
          </div>
        ))}
    </div>
 );
};

export default TaskList;
