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

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== password2) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }
    try {
      await api.post("/register/", { email, password });
      navigate('/login/');
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gold rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-dark md:text-2xl">
                    Create An Account
                    </h1>
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