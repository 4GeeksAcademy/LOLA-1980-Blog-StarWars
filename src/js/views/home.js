import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="d-flex flex-column text-center mt-5 pt-5">
		<Link to="/StarWarsPrincipal">
			<button className='btn btn-success mb-2'>STAR WARS</button>
		</Link>

		<Link to="/StarWarsDetails">
			<button className='btn btn-success'>STAR WARS DETAILS</button>
		</Link>
	</div>
);
