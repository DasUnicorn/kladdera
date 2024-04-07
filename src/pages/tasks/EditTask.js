import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const EditTask = () => {
 const { taskId } = useParams();
 const [task, setTask] = useState({});
 const [title, setTitle] = useState('');
 const [energy, setEnergy] = useState(0);
 const [repeating, setRepeating] = useState(false);
 const [frequency, setFrequency] = useState('');
 const [user, setUser] = useState('');
 const navigate = useNavigate();


 useEffect(() => {
  const fetchTask = async () => {
      try {
        const response = await api.get(`/task/${taskId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setTask(response.data);
        setTitle(response.data.title);
        setEnergy(response.data.energy_level);
        setRepeating(response.data.is_repeating);
        setFrequency(response.data.repeat_frequency);
        setUser(response.data.user);
      } catch (error) {
        console.error('Failed to fetch task:', error);
      }
    };

    fetchTask();
  }, [taskId]);

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.put(`/task/${taskId}/`, {
        title,
        energy_level: energy,
        is_repeating: repeating,
        repeat_frequency: frequency,
        user,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate(`/editTasks`);
    } catch (error) {
      console.error('Failed to update task:', error);
    }
 };

 return (
    <form onSubmit={handleSubmit} className="h-screen py-2 px-5 flex flex-col">
      <label>
        Title:
        <input
          type="text"
          className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Energy Level:
        <input
          type="number"
          className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />
      </label>
      <label>
        Repeating:
        <input
          type="checkbox"
          className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          checked={repeating}
          onChange={(e) => setRepeating(e.target.checked)}
        />
      </label>
      <label>
        Frequency:
        <select 
        className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="">Select frequency</option>
          <option value="D">Daily</option>
          <option value="W">Weekly</option>
          <option value="M">Monthly</option>
          <option value="Y">Yearly</option>
        </select>
      </label>
      <button 
      className="m-2 text-blue-dark bg-gold hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      type="submit">Save</button>
    </form>
 );
};

export default EditTask;
