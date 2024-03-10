import React from 'react';

function Info() {
	return (
		<div className="mx-11 pt-4">
			<h1 className="py-5 text-gold">About Us</h1>
			<div className="flex justify-center bg-orange rounded w-1/2">
				<p className="py-6 text-blue-dark">No person can reach their full potential every day.</p>
			</div>
			<section className="">
				<h2 className="py-5 text-gold">How Kladderadatsch Works</h2>
				<p>For us, tasks involve effort and are individual to each person.
				You can set your own energy levels or use predefined values. 
				Depending on your energy level, we will suggest other tasks and set
				an individual daily goal.
				</p>
			</section>
			<section>
				<h2 className="py-5 text-gold">We do not care which task you choose.</h2>
				<p>Instead of a list of tasks that quickly becomes overwhelming,
				we show you a realistic selection of options.
				If none of the tasks appeal to you, you can shuffle through several options.
				</p>
			</section>
			<section>
				<h2 className="py-5 text-gold">We track your Tasks and Energy-Level</h2>
				<p>Adjust your energy level whenever you want.
				We visualize your changes over time to give you a good overview of your
				own energy balance.
				</p>
			</section>
			<button>Sign Up</button>
		</div>
	)
}

export default Info;