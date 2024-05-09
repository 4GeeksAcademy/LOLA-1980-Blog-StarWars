import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div>
		<div className="d-flex justify-content-center container text-center mt-5 pt-5">
			<Link className="text-decoration-none me-5" to="/StarWarsPrincipal">
				<span className='card-name text-decoration-none mb-2'>VIDEO</span>
			</Link>
			<Link className="text-decoration-none me-5" to="/">
				<p className='card-name'>FILMS</p>
			</Link>
			<Link className="text-decoration-none me-5" to="/">
				<p className='card-name'>SERIES</p>
			</Link>
			<Link className="text-decoration-none me-5" to="/StarWarsPrincipal">
				<p className='nav-name fw-bold'>DATA BANK</p>
			</Link>
			<Link className="text-decoration-none me-5" to="/">
				<p className='card-name'>DISNEY+</p>
			</Link>
		</div>

		<div className="border-bottom"></div>

		<div className="d-flex justify-content-center mt-3">
			<img src="https://lumiere-a.akamaihd.net/v1/images/1200x510_mt4_nocta_96689d6c_5ec62427.jpeg?region=0%2C0%2C1200%2C510" />
		</div>
	</div>
);
