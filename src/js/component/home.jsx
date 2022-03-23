import React from "react";
import Light from "./Light.jsx";
import "../../styles/index.css";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="arriba"></div>
			<Light />
		</div>
	);
};

export default Home;
