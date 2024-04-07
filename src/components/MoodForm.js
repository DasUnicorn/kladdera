import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const MoodForm = () => {
    const [mood, setMood] = useState('');
    const [note, setNote] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');


        let validationErrors = {
            note: "",
            mood:"",
        };

        // Check if note is or out of range
        if (note.length > 500) {
            validationErrors.note = "The Note can't be longer than 500 characters.";
        }

        // Check if mood is valid
        const allowedMoods = ['very_happy', 'happy', 'neutral', 'sad', 'angry', 'exhausted'];
        if (!allowedMoods.includes(mood)) {
            validationErrors.mood = "Please select a valid mood.";
        }

        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === "")) {
            try {
                const response = await api.post('/mood/', {
                mood,
                note,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                 });
                setNotification("Tracking this feeling was successful!");
                // Wait for 3 seconds before navigating
                setTimeout(() => {
                    navigate('/');
                }, 3000);

            } catch (error) {
                setNotification("Could not save the feeling. Please try again.");
            }
        }
    };

 return (
    <div className="flex flex-col">
        <h2 className="text-gold">Track your Mood of the Moment</h2>
        {notification && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{notification}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="text-gold" htmlFor="mood">
                How do you feel?
            </label>
            <select
                id="mood"
                value={mood}
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

export default MoodForm;
