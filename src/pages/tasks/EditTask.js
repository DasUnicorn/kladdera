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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Energy Level:
        <input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />
      </label>
      <label>
        Repeating:
        <input
          type="checkbox"
          checked={repeating}
          onChange={(e) => setRepeating(e.target.checked)}
        />
      </label>
      <label>
        Frequency:
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="">Select frequency</option>
          <option value="D">Daily</option>
          <option value="W">Weekly</option>
          <option value="M">Monthly</option>
          <option value="Y">Yearly</option>
        </select>
      </label>
      <label>
        User:
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
 );
};

export default EditTask;
