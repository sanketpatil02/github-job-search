import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Job from "./components/Job/Job";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { async } from "q";

function App() {
	const [position, setPosition] = useState("Engineering Manage");
	const [location, setLocation] = useState("Mountain View");

	const [jobs, setJobs] = useState([]);

	// useEffect(() => {
	// 	fetch(
	// 		"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=sf"
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// console.log("elements = ", data);
	// 			data.forEach(addJobs);
	// 		});
	// }, []);

	function addJobs(value) {
		// setJobs((previosState) => ({
		// 	jobs: [...previosState.jobs, value],
		// }));
		console.log(value);
		setJobs((jobs) => [...jobs, value]);
	}

	// function fetchData(jobP, jobL) {
	// 	fetch(
	// 		"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=newyork"
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setJobs({ data }));
	// }

	const onSearch = async () => {
		const ipPosition = document.getElementById("input-position").value;
		const ipLocation = document.getElementById("input-location").value;

		console.log(ipPosition);
		console.log(ipLocation);

		setJobs([]);

		if (ipPosition === "") {
			alert("Role field cannot be empty");
			return;
		}

		fetch(
			"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=" +
				String(ipPosition) +
				"&location=" +
				String(ipLocation)
		)
			.then((res) => res.json())
			.then((data) => {
				if (Object.keys(data).length === 0) {
					alert("Sorry , We did not find role matching your requirements");
				}

				console.log("OnSearch Job");
				data.forEach(addJobs);
			});

		console.log("Jobs = ");
		console.log(jobs);
	};
	return (
		<div className="App">
			<Header></Header>
			{/* Input Stated */}
			<div className="input">
				<div className="center-input">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1 ">
							Role
						</span>
						<input
							type="text"
							class="form-control"
							placeholder="Eg: Android Developer, Frontend Developer"
							aria-label="Username"
							aria-describedby="basic-addon1"
							id="input-position"
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							Location
						</span>
						<input
							type="text"
							class="form-control"
							placeholder="Eg: Pune, NewYork"
							aria-label="Username"
							aria-describedby="basic-addon1"
							id="input-location"
						/>
					</div>
					<button type="button" className="btn btn-primary" onClick={onSearch}>
						Search
					</button>
				</div>
			</div>
			{/* Input Ended */}
			<div className="results-heading">
				<h1>Results :</h1>
			</div>
			<div className="card-Holder">
				{jobs.map((job) => (
					<Job {...job} />
				))}
			</div>

			<Footer></Footer>
		</div>
	);
}

export default App;
