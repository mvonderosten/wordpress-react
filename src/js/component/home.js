import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cars } from "../component/cars";

//create your first component
export function Home() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		fetch(
			"https://8080-d4ebd01f-0a78-407d-9fad-09deeeacd5da.ws-us02.gitpod.io/wp-json/sample_api/v1/cars"
		)
			.then(resp => resp.json())
			.then(data => {
				setCars(data);
			});
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Cars</h1>
			<div>
				{cars.map((item, index) => {
					return (
						<div key={item} className="card-whole">
							<Cars object={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
