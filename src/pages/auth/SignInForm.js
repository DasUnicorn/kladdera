import React, { useContext, useState } from "react";
import axios from "axios"

import { Link, useNavigate } from "react-router-dom";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";


function SignInForm() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = signInData;

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      navigate('/');
    } catch (err) {
    }
  };
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
    <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-blue-dark">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-blue-dark hover:underline">Forgot password?</a>
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