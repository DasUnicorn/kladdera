import React from 'react';
import { Link } from "react-router-dom";

export default function Signup() {
	return (
		<>
		<section class="bg-gray-50 dark:bg-gray-900">
  			<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      			<div class="w-full bg-gold rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
           				<h1 class="text-xl font-bold leading-tight tracking-tight text-blue-dark md:text-2xl">
                		Create An Account
              			</h1>
              			<form class="space-y-4 md:space-y-6" action="#">
                			<div>
                    			<label for="email" class="block mb-2 text-sm font-medium text-blue-dark">Your email</label>
                      			<input type="email" name="email" id="email" class="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@domain.com" required="" />
                  			</div>
                  			<div>
                      			<label for="password" class="block mb-2 text-sm font-medium text-blue-dark">Password</label>
                      			<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-blue-dark text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  			</div>
                  			<div>
                      			<label for="confirm-password" class="block mb-2 text-sm font-medium text-blue-dark">Confirm password</label>
                      			<input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  			</div>
                  			<button type="submit" class="w-full text-blue-dark bg-orange hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                  			<p class="text-sm font-light text-blue-dark">
                    		Already have an account? <Link to="/login" class="font-medium text-blue-dark text-bold hover:underline">Login here</Link>
                  			</p>
              			</form>
          			</div>
      			</div>
  			</div>
		</section>
		</>
	)
}