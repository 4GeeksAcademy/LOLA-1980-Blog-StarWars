import React, { useContext } from 'react';
import { Context } from '../store/appContext'//Importar el contexto
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Card = ({ uid, category, name, imageUrl, imageHeight }) => {

    const { store, actions } = useContext(Context); //Obtener las acciones del contexto

    const handleAddFavorite = () => {
        actions.addFavorite(name); // Agregar el nombre del item a la lista de favoritos
        // actions.incrementLikes(); // Incrementar el contador de likes
    };


    return (
        <div className="card background-card mb-3 mx-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
            <img src={imageUrl}
                className="card-img-top"
                alt="..."
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    e.target.style.height = imageHeight;
                }}
            />
            <div className="card-body">
                <h5 className="card-title card-name">{name}</h5>
                <div className='d-flex justify-content-between'>
                    <Link className="btn btn-outline-primary" to={`/StarWarsDetails/${category}/${uid}`}>
                        Learn more!
                    </Link>
                    <div>
                        <i className={`btn btn-outline-warning fs-5 p-2 ${store.favoritos.find(favorito => favorito == name) ? 'fa-solid' : 'fa-regular'} fa-heart`} onClick={handleAddFavorite}></i>
                        {/* <FontAwesomeIcon icon="fa-regular fa-heart" className="fa-regular btn btn-outline-warning fs-5 p-2" onClick={handleAddFavorite} /> Manejar el clic en el ícono de corazón */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
