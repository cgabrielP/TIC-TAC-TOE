import React from "react";
import PropTypes from "prop-types";

const Square = ({value, onClick}) => {
	const style = value ? `squares ${value}`: `squares`;
	
	return (
		
			<button onClick={onClick}>
					{value}
			</button>
		
	)
}
export default Square