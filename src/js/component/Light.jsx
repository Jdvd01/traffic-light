import React, { useState } from "react";

const Light = () => {
	const [color, setColor] = useState("");

	return (
		<div className="semaforo">
			<div
				className={`luz roja ${color === "roja" && "encendida"}`}
				onClick={() => {
					setColor("roja");
				}}></div>
			<div
				className={`luz amarilla ${
					color === "amarilla" && "encendida"
				}`}
				onClick={() => {
					setColor("amarilla");
				}}></div>
			<div
				className={`luz verde ${color === "verde" && "encendida"}`}
				onClick={() => {
					setColor("verde");
				}}></div>
		</div>
	);
};

export default Light;
