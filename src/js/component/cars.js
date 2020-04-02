import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Cars(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{props.object.make}
					<br /> <br />
					{props.object.model}
					<br /> <br />
					{props.object.year}
					<br /> <br />
					{props.object.color}
					<br /> <br />
				</div>
			</div>
		</div>
	);
}

Cars.propTypes = {
	object: PropTypes.object
};
