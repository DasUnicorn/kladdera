import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const EditMood = () => {
    const { moodId } = useParams();
    const [mood, setMood] = useState({});
    const [feeling, setFeeling] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})


 useEffect(() => {
  const fetchMood = async () => {
      try {
        const response = await api.get(`/mood/${moodId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setMood(response.data);
        setFeeling(response.data.mood);
        setDate(response.data.date);
        setNote(response.data.note);
        setUser(response.data.user);
      } catch (error) {
        console.error('Failed to fetch Feeling:', error);
      }
    };

    fetchMood();
  }, [moodId]);

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.put(`/mood/${moodId}/`, {
        date: date,
        mood: mood,
        note: note,
        user,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate(`/editTasks`);
    } catch (error) {
      console.error('Failed to update Feeling:', error);
    }
 };

 console.log(mood)
 console.log(mood.feeling)
 console.log(feeling)

 return (
    <div className="h-screen py-2 px-5">
    <h1 className="text-gold">Edit your Feeling:</h1>
    <form onSubmit={handleSubmit} className="">
        <label className="text-gold" htmlFor="mood">
            How do you feel?
        </label>
        <select
            id="mood"
            value={feeling}
            className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            onChange={(event) => setMood(event.target.value)}>
            <option value="">Select a mood</option>
            <option value="very_happy">Very Happy</option>
            <option value="happy">Happy</option>
            <option value="neutral">Neutral</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="exhausted">Exhausted</option>
        </select>
        {errors.mood && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.mood}</p>}
        <label className="text-gold" htmlFor="note">
            Leave a Note:
        </label>
        <textarea 
            id="note" 
            value={note} 
            className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg mb-4 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            onChange={(event) => setNote(event.target.value)} />
        {errors.note && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.note}</p>}
        <button type="submit" className="w-full text-blue-dark bg-gold hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Submit
        </button>
    </form>
    </div>
 );
};

export default EditMood;
