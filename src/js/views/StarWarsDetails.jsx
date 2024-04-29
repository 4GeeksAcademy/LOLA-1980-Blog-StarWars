import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const StarWarsDetails = () => {

    const { id } = useParams(); // Obtener el id del contacto de la URL

    const [planetDetails, setPlanetDetails] = useState(null);

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

    useEffect(() => {
        fetchPlanetsDetails();
    }, [id]);

    return (
        <div>
            <h1>Star Wars Details</h1>
            {planetDetails && (
                <div>
                    <h2>Name: {planetDetails.properties.name}</h2>
                    <p>Climate: {planetDetails.properties.climate}</p>
                    <p>Terrain: {planetDetails.properties.terrain}</p>
                    {/* Agrega más detalles según lo necesites */}
                </div>
            )}
        </div>
    );
};


