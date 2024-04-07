import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../api';
import axios from "axios";


const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        password2: "",
    });
    const { email, password, password2 } = signUpData;

    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState("");


    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value,
        });
    };

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
        } else if (password != password2){
            validationErrors.password2 = "Password fields do not match."
        }

        setErrors(validationErrors);

        // If there are no validation errors, proceed with form submission
        if (Object.values(validationErrors).every(error => error === "")) {
            try {
                await api.post("/register/", { email, password });
                setNotification("Sign up successful!");
                // Wait for 3 seconds before navigating
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } catch (err) {
                setNotification("Sign Up failed. Please try again.");
            }
        }
    };

  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center md:justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-gold rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-dark md:text-2xl">
                    Create An Account
                    </h1>
                    {notification && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{notification}</p>}
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-dark">Your email</label>
                            <input type="email" 
                            name="email" 
                            id="email" 
                            value={email} 
                            onChange={handleChange}
                            className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
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
                            className="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                            required="" />
                            {errors.password && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.password}</p>}
                        </div>
                        <div>
                            <label htmlFor="password2" className="block mb-2 text-sm font-medium text-blue-dark">Confirm password</label>
                            <input type="password" 
                            name="password2" 
                            id="password2" 
                            value={password2} 
                            onChange={handleChange}
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                            required="" />
                            {errors.password2 && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.password2}</p>}
                        </div>
                        <button type="submit" className="w-full text-blue-dark bg-orange hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                        <p className="text-sm font-light text-blue-dark">
                        Already have an account? <Link to="/login" className="font-medium text-blue-dark text-bold hover:underline">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default SignUpForm;