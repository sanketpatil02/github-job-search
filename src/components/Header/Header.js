import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="header-container">
			<div className="header-left">
				<p>Github Job Search</p>
			</div>
			<div className="header-right">
				<a
					href="https://github.com/nikhiljugale007"
					target="_blank"
					class="btn btn-primary"
				>
					See Source Code
				</a>
			</div>
		</div>
	);
};

export default Header;
