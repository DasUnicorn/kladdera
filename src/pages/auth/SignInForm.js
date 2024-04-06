import React, { useContext, useState } from "react";
import axios from "axios"
import { setAuthTokens } from 'axios-jwt';

import { Link, useNavigate } from "react-router-dom";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import api from '../../api';


function SignInForm() {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = signInData;

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
        event.preventDefault();

        let validationErrors = {
            email: "",
            password: "",
        };

        // Check if email is empty, or no email
        if (!email.trim()) {
            validationErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = "Email is not valid.";
        }

        // Check if password is empty, or too short
        if (!password.trim()) {
            validationErrors.password = "Password is required.";
        } else if (password.length < 8) {
            validationErrors.password = "Password must be at least 8 characters.";
        }

        setErrors(validationErrors);

        // If there are no validation errors, proceed with form submission
        if (Object.values(validationErrors).every(error => error === "")) {
            try {
                const response = await api.post('/auth/login/', signInData);
                setAuthTokens({
                    accessToken: response.data.access,
                    refreshToken: response.data.refresh,
                });
                navigate('/');
            } catch (err) {
                // Handle error
            }
        }
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        let errorMessage = "";

        // Check if the field is empty
        console.log("value")
        console.log(value)
        if (!value.trim()) {
            errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
        } else {
            // Validate email
            if (name === "email") {
                if (!/\S+@\S+\.\S+/.test(value)) {
                    errorMessage = "Email is not valid.";
                }
            }
            // Validate password
            if (name === "password") {
                if (value.length < 8) {
                    errorMessage = "Password must be at least 8 characters.";
                }
            }
        }

        setSignInData({
            ...signInData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: errorMessage,
        });
    };



  return (
    <>
    <section className="">
        <div className="flex flex-col items-center md:justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-gold rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-dark md:text-2xl">
                      Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-dark">Your email</label>
                            <input type="email" 
                            name="email" 
                            id="email" 
                            value={email} 
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                            placeholder="name@domain.com" 
                            required="" />
                            {errors.email && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-dark">Password</label>
                            <input type="password" 
                            name="password" 
                            id="password" 
                            value={password} 
                            onChange={handleChange} 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                            required="" />
                            {errors.password && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.password}</p>}
                        </div>
                        <button type="submit" className="w-full text-blue-dark bg-orange hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <p className="text-sm font-light text-blue-dark">
                          Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-dark hover:underline">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default SignInForm;