import React, { useState } from "react";
import "./App.css";

const App = () => {
	const inputEvent = (event) => {
		setname(event.target.value);
	};
	const inputEvent2 = (event) => {
		setlastname(event.target.value);
	};
	const inputEvent3 = (event) => {
		setage(event.target.value);
	};
	const inputEvent4 = (event) => {
		setcollege(event.target.value);
	};
	const [name, setname] = useState("");
	const [fullname, setfullname] = useState("");
	const [lastname, setlastname] = useState("");
	const [newlastname, setnewlastname] = useState("");
	const [age, setage] = useState("");
	const [newage, setnewage] = useState("");
	const [college, setcollege] = useState("");
	const [newcollege, setnewcollege] = useState("");
	const onSubmit = (event) => {
		event.preventDefault();
		alert("You are submitting ");
		setfullname(name);
		setnewlastname(lastname);
		setnewage(age);
		setnewcollege(college);
	};

	return (
		<div className='main'>
			<h1 classmain='heading'>Tell about Yourself</h1>
			<div className='inputbox'>
				<form onSubmit={onSubmit}>
					<label for='fname'>First Name</label>
					<input
						type='text'
						id='fname'
						// name='firstname'
						placeholder='Your name..'
						onChange={inputEvent}
						value={name}
					/>
					<label for='lname'>Last Name</label>
					<input
						type='text'
						id='lname'
						name='lastname'
						placeholder='Your last name..'
						onChange={inputEvent2}
						value={lastname}
					/>
					<label for='age'>Age</label>
					<input
						type='text'
						id='age'
						name='Age'
						placeholder='Your Age'
						onChange={inputEvent3}
						value={age}
					/>
					<label for='college'>College</label>
					<input
						type='text'
						id='clg'
						name='College'
						placeholder='Your college name'
						onChange={inputEvent4}
						value={college}
					/>

					<input type='submit' value='Submit'></input>
				</form>
			</div>
			<div className='displayForm'>
				<h1 className='name'>
					Hello My name is "
					<span id='spanname'>
						{fullname} {newlastname}
					</span>
					"
				</h1>
				<ul className='list'>
					<li>
						And I am "<span className='spanlist'>{newage}</span>" year old
					</li>
					<li>
						I am a student of"<span className='spanlist'>{newcollege}</span>"
					</li>
				</ul>
			</div>
		</div>
	);
};

export default App;
