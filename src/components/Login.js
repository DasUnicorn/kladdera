import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function SignInForm() {
	const [signInData, setSignInData] = useState({
		email: "",
		password: "",
	});
	const { email, password } = signInData;

	const history = useNavigate();
	const [errors, setErrors] = useState({});

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post("/dj-rest-auth/login/", signInData);
			history.push("/");
		} catch (err) {
			setErrors(err.response?.data);
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
                      			<label for="email" className="block mb-2 text-sm font-medium text-blue-dark">Your email</label>
                      			<input type="email" 
                      			name="email" 
                      			id="email" 
                      			value={email} 
                      			onChange={handleChange}
                      			className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                      			placeholder="name@domain.com" 
                      			required="" />
                  			</div>
                  			{errors.email?.map((message, idx) => (
                  				<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert" key={idx}>
  									<p className="font-bold">Be Warned</p>
  									<p>{message}</p>
								</div>
            				))}
                  			<div>
                      			<label for="password" className="block mb-2 text-sm font-medium text-blue-dark">Password</label>
                      			<input type="password" 
                      			name="password" 
                      			id="password" 
                      			value={password} 
                      			onChange={handleChange} 
                      			placeholder="••••••••" 
                      			className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                      			required="" />
                  			</div>
                  			{errors.password?.map((message, idx) => (
                  				<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert" key={idx}>
  									<p className="font-bold">Be Warned</p>
  									<p>{message}</p>
								</div>
            				))}
                  			<div className="flex items-center justify-between">
                      			<div className="flex items-start">
                          			<div className="flex items-center h-5">
                            			<input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                          			</div>
                          			<div className="ml-3 text-sm">
                            			<label for="remember" className="text-blue-dark">Remember me</label>
                          			</div>
                      			</div>
                      			<a href="#" className="text-sm font-medium text-blue-dark hover:underline">Forgot password?</a>
                  			</div>
                  			<button type="submit" className="w-full text-blue-dark bg-orange hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  			<p className="text-sm font-light text-blue-dark">
                      		Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-dark hover:underline">Sign up</Link>
                  			</p>
                  			{errors.non_field_errors?.map((message, idx) => (
              					<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert" key={idx}>
  									<p className="font-bold">Be Warned</p>
  									<p>{message}</p>
								</div>
            				))}
              			</form>
          			</div>
      			</div>
  			</div>
		</section>
		</>
	)
}

export default SignInForm;