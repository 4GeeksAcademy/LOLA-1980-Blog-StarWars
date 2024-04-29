import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const StarWarsPrincipal = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarShips] = useState([]);


  const fetchPeople = async () => {
    try {
      const response = await fetch('https://www.swapi.tech/api/people');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPeople(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const fetchPlanets = async () => {
    try {
      const response = await fetch('https://www.swapi.tech/api/planets');
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json();
      setPlanets(data.results);
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };


  const fetchStarShips = async () => {
    try {
      const response = await fetch('https://www.swapi.tech/api/starships');
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json();
      setStarShips(data.results);
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };

  useEffect(() => {
    fetchPeople();
    fetchPlanets();
    fetchStarShips();
  }, []);



  return (
    <div className='container'>

      <div>
        <h1 className='card-name my-5'>Character</h1>
        <div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
          {people.map(person => (
            <div key={person.uid} className="card background-card mb-3 mx-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                className="card-img-top"
                alt="..."
                // Si la imagen no está disponible, se muestra una imagen de reemplazo
                onError={(e) => {
                  e.target.onerror = null; e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  e.target.style.height = '286px';
                }}
              />
              <div className="card-body">
                <h5 className="card-title card-name">{person.name}</h5>
                <div className='d-flex justify-content-between'>
                  <Link to={`/StarWarsDetails/${person.uid}`}>
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                  </Link>
                  <div>
                    <FontAwesomeIcon icon={faHeart} className="fa-regular btn btn-outline-warning fs-5 p-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className='card-name my-5'>Planets</h1>
        <div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
          {planets.map(item => (
            <div key={item.uid} className="card background-card mb-3 mx-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
              <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                className="card-img-top"
                alt="..."
                // Si la imagen no está disponible, se muestra una imagen de reemplazo
                onError={(e) => {
                  e.target.onerror = null; e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  e.target.style.height = '286px';
                }}
              />
              <div className="card-body">
                <h5 className="card-title card-name">{item.name}</h5>
                <div className='d-flex justify-content-between'>
                  <Link to={`/StarWarsDetails/${item.uid}`}>
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                  </Link>
                  <div>
                    <FontAwesomeIcon icon={faHeart} className="fa-regular btn btn-outline-warning fs-5 p-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className='card-name my-5'>StarShips</h1>
        <div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
          {starships.map(item => (
            <div key={item.uid} className="card background-card mb-3 mx-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
              <img src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`}
                className="card-img-top"
                alt="..."
                // Si la imagen no está disponible, se muestra una imagen de reemplazo
                onError={(e) => {
                  e.target.onerror = null; e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  e.target.style.height = '191px';
                }}
              />
              <div className="card-body">
                <h5 className="card-title card-name">{item.name}</h5>
                <div className='d-flex justify-content-between'>
                  <Link to={`/StarWarsDetails/${item.uid}`}>
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                  </Link>
                  <div>
                    <FontAwesomeIcon icon={faHeart} className="fa-regular btn btn-outline-warning fs-5 p-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};


