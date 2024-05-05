import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchDataDetails from "../component/FetchDataDetails";
import CardDetail from "../component/CardDetail";

export const StarWarsDetails = () => {
    const { id, category } = useParams();
    console.log(id, category);

    // Función para generar la URL según la categoría
    //const generateUrl = (category) => `https://www.swapi.tech/api/${category}/${id}`;

    // Realizar llamadas de fetch según la categoría
    //const planetDetail = category === "planets" ? FetchDataDetails(generateUrl("planets")) : null;
    //const personDetail = category === "people" ? FetchDataDetails(generateUrl("people")) : null;
    //const starshipDetail = category === "starships" ? FetchDataDetails(generateUrl("starships")) : null;


    // Función para generar la URL según la categoría
    const generateUrl = (category) => `https://www.swapi.tech/api/${category}/${id}`;

    // Realizar llamadas de fetch según la categoría
    const detailData = FetchDataDetails(generateUrl(category));

    // Función para obtener los detalles según la categoría
    const getDetailComponent = () => {
        if (!detailData) return null;

        switch (category) {
            case "planets":
                return <CardDetail detail={detailData.properties} id={id} category={category} />;
            case "people":
                return <CardDetail detail={detailData.properties} id={id} category={category} />;
            case "starships":
                return <CardDetail detail={detailData.properties} id={id} category={category} />;
            default:
                return null;
        }
    };

    // Función para capitalizar la primera letra de una palabra
    const capitalizaFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    // Capitalizar la primera letra de category
    const capitalizedCategory = capitalizaFirstLetter(category);

    return (
        <div className="mt-5 pt-5">
            <h1 className="card-name ms-5">{capitalizedCategory} Details</h1>
            {/* Renderizar los detalles según la categoría */}
            {getDetailComponent()}
        </div>
    );

};






















/*return (
    <div>
        <h1>Star Wars Details</h1>

        Detalles del planeta 
        {planetDetail && (
            <div>
                <h2>Planet Details</h2>
                <CardDetail detail={planetDetail.properties} />
            </div>
        )}

        {/* Detalles de la persona 
        {personDetail && (
            <div>
                <h2>Person Details</h2>
                <CardDetail detail={personDetail.properties} />
            </div>
        )}

        {/* Detalles de la nave espacial
        {starshipDetail && (
            <div>
                <h2>Starship Details</h2>
                <CardDetail detail={starshipDetail.properties} />
            </div>
        )}
    </div>
);*/















/* const [peopleDetails, setPeopleDetails] = useState(null);
 const [planetDetails, setPlanetDetails] = useState(null);
 const [starShipsDetails, setStarShipsDetails] = useState(null);


 const fetchPeopleDetails = async () => {
     try {
         const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         const data = await response.json();
         if (data.result) {
             setPeopleDetails(data.result);
         } else {
             throw new Error('Person not found');
         }

     } catch (error) {
         console.error('Error fetching people:', error);
     }
 };



 const fetchPlanetsDetails = async () => {
     try {
         const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         const data = await response.json();
         if (data.result) {
             setPlanetDetails(data.result);
         } else {
             throw new Error('Planet not found');
         }

     } catch (error) {
         console.error('Error fetching planets:', error);
     }
 };


 const fetchStarShipsDetails = async () => {
     try {
         const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         const data = await response.json();
         if (data.result) {
             setStarShipsDetails(data.result);
         } else {
             throw new Error('StarShip not found');
         }

     } catch (error) {
         console.error('Error fetching starships:', error);
     }
 };

 useEffect(() => {
     fetchPlanetsDetails();
 }, [id]);

 useEffect(() => {
     fetchStarShipsDetails();
 }, [id]);

 useEffect(() => {
     fetchPeopleDetails();
 }, [id]);

 return (
     <div>
         <div>
             <h1>Star Wars Details</h1>
             {peopleDetails && (
                 <div className="card-name container d-flex justify-content-around align-items-center">
                     <img src={`https://starwars-visualguide.com/assets/img/characters/${peopleDetails.uid}.jpg`} alt="" />
                     <div>
                         <h2>Name: {peopleDetails.properties.name}</h2>
                         <ul className="list-group">
                             <li>Height: {peopleDetails.properties.height} </li>
                             <li>Mass: {peopleDetails.properties.mass} </li>
                             <li>Hair color: {peopleDetails.properties.hair_color} </li>
                             <li>Skin color: {peopleDetails.properties.skin_color} </li>
                             <li>Eyes color: {peopleDetails.properties.eye_color} </li>
                             <li>Birth year: {peopleDetails.properties.birth_year}</li>
                             <li>Gender: {peopleDetails.properties.gender}</li>
                         </ul>
                     </div>
                 </div>
             )}
         </div>


         <div>
             <h1>Star Wars Details</h1>
             {planetDetails && (
                 <div className="card-name container d-flex justify-content-around align-items-center">
                     <img src={`https://starwars-visualguide.com/assets/img/planets/${planetDetails.uid}.jpg`} alt="" />
                     <div>
                         <h2>Name: {planetDetails.properties.name}</h2>
                         <ul className="list-group">
                             <li>Rotation period: {planetDetails.properties.rotation_period} </li>
                             <li>Orbital period: {planetDetails.properties.orbital_period} </li>
                             <li>Gravity: {planetDetails.properties.gravity} </li>
                             <li>Population: {planetDetails.properties.population} </li>
                             <li>Diameter: {planetDetails.properties.diameter} </li>
                             <li>Climate: {planetDetails.properties.climate}</li>
                             <li>Terrain: {planetDetails.properties.terrain}</li>
                         </ul>
                     </div>
                 </div>
             )}
         </div>


         <div>
             <h1>Star Wars Details</h1>
             {starShipsDetails && (
                 <div className="card-name container d-flex justify-content-around align-items-center">
                     <img src={`https://starwars-visualguide.com/assets/img/starships/${starShipsDetails.uid}.jpg`} alt="" />
                     <div>
                         <h2>Name: {starShipsDetails.properties.name}</h2>
                         <ul className="list-group">
                             <li>Model: {starShipsDetails.properties.model} </li>
                             <li>Starship class: {starShipsDetails.properties.starship_class} </li>
                             <li>Manufacturer: {starShipsDetails.properties.manufacturer} </li>
                             <li>Cost in credits: {starShipsDetails.properties.cost_in_credits} </li>
                             <li>Lenght: {starShipsDetails.properties.length} </li>
                             <li>Crew: {starShipsDetails.properties.crew} </li>
                             <li>Cargo capacity: {starShipsDetails.properties.cargo_capacity}</li>
                             <li>Consumables: {starShipsDetails.properties.consumables}</li>
                             <li>Passengers: {starShipsDetails.properties.passengers}</li>
                             <li>Max atmosphering speed: {starShipsDetails.properties.max_atmosphering_speed}</li>
                             <li>Hyperdrive rating: {starShipsDetails.properties.hyperdrive_rating}</li>
                         </ul>
                     </div>
                 </div>
             )}
         </div>

     </div>
 );
};*/


