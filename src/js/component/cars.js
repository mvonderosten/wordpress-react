import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Cars(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{props.object.post_author}
					<br /> <br />
					{props.object.post_date}
					<br /> <br />
					{props.object.post_title}
					<br /> <br />
					{props.object.post_name}
					<br /> <br />
					{props.object.post_content}
					<br /> <br />
					{props.object.post_type}
					<br /> <br />
				</div>
			</div>
		</div>
	);
}

Cars.propTypes = {
	object: PropTypes.object
};
