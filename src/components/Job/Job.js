import React from "react";

const Job = ({ id, title, company, location, type, company_url }) => {
	return (
		<div className="Card-Holder">
			<div class="card" style={{ margin: "2rem" }}>
				<div class="card-body">
					<h3 class="card-title">{title}</h3>
					<div className="job-details">
						<p>Company:{company}</p>
						<p>Location:{location}</p>
						<p>Type:{type}</p>
					</div>
					<a href={company_url} target="_blank" class="btn btn-primary">
						View Position
					</a>
				</div>
			</div>
		</div>
	);
};

export default Job;
