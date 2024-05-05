import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	const { store, actions } = useContext(Context);//Obtener el estado del contexto
	const { likes, favoritos } = store;//Extraer los likes y favoritos del estado

	const handleRemoveFavorite = item => {
		actions.removeFavorite(item); //Eliminar el nombre del item de la lista de favoritos
	};



	return (
		<nav className="navbar navbar-dark bg-black container fixed-top mb-3">
			<Link to="/">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" style={{ width: "120px", height: "60px" }} />
			</Link>
			<div className="ml-auto">
				<Link to="/StarWarsPrincipal">
					<div className="nav-item dropdown">
						<a className="nav-link text-white dropdown-toggle btn btn-primary" href="#" id="navbarDropdown"
							role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Like <span className="badge bg-secondary">{likes}</span>{/* Mostrar el contador de likes */}
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{favoritos.map((item, index) => (
								<div key={index} className="d-flex justify-content-between align-items-center m-2">
									<li>{item}</li>
									<FontAwesomeIcon icon={faTrash} onClick={() => handleRemoveFavorite(item)} />
								</div>
							))}
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
