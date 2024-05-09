import React from 'react';

const CardDetail = ({ detail, id, category }) => {

    if (!detail) return null;

    // Filtrar las propiedades según la categoría
    const filteredProperties = Object.entries(detail).filter(([key, value]) => value !== null && value !== "");

    // Construir la URL de la imagen
    const imageUrl = `https://starwars-visualguide.com/assets/img/${category == "people" ? "characters" : category}/${id}.jpg`;
    const propertiesToExclude = ['created', 'edited', 'homeworld', 'name', 'url', 'pilots'];


    return (
        <div className="card-name container d-flex justify-content-around align-items-center mt-5">
            <img src={imageUrl} alt={detail.name} /> {/* Utilizamos la URL de la imagen aquí */}
            <div>
                <h2>Name: {detail.name}</h2>
                <ul className="list-group list-unstyled">
                    {filteredProperties.filter(([key, _]) => !propertiesToExclude.includes(key)).map(([key, value]) => (
                        //console.log(key, value)
                        <li key={key}>{`${key}: ${value}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardDetail;


















/*import React from 'react';

const CardDetail = ({ detail }) => {

    if (!detail) return null;

    //const { uid, properties } = detail;

    return (
        <div className="card-name container d-flex justify-content-around align-items-center">
            <img src={`https://starwars-visualguide.com/assets/img/${detail.category}/${detail.uid}.jpg`} alt="" />
            <div>
                <h2>Name: {detail.name}</h2>
                <ul className="list-group">
                    <li>Rotation period: {detail.rotationPeriod}</li>
                    <li>Orbital period: {detail.orbitalPeriod}</li>
                    <li>Gravity: {detail.gravity}</li>
                    <li>Population: {detail.population}</li>
                    <li>Diameter: {detail.diameter}</li>
                    <li>Climate: {detail.climate}</li>
                    <li>Terrain: {detail.terrain}</li>
                    <li>Height: {detail.height}</li>
                    <li>Mass: {detail.mass}</li>
                    <li>Hair color: {detail.hairColor}</li>
                    <li>Skin color: {detail.skinColor}</li>
                    <li>Eyes color: {detail.eyeColor}</li>
                    <li>Birth year: {detail.birthYear}</li>
                    <li>Gender: {detail.gender}</li>
                    <li>Model: {detail.model}</li>
                    <li>Starship class: {detail.starshipClass}</li>
                    <li>Manufacturer: {detail.manufacturer}</li>
                    <li>Cost in credits: {detail.costInCredits}</li>
                    <li>Length: {detail.length}</li>
                    <li>Crew: {detail.crew}</li>
                    <li>Cargo capacity: {detail.cargoCapacity}</li>
                    <li>Consumables: {detail.consumables}</li>
                    <li>Passengers: {detail.passengers}</li>
                    <li>Max atmosphering speed: {detail.maxAtmospheringSpeed}</li>
                    <li>Hyperdrive rating: {detail.hyperdriveRating}</li>
                </ul>
            </div>
        </div>
    );
};

export default CardDetail;*/
