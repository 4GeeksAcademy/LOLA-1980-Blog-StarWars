import React, { useState } from 'react';
import Card from '../component/Card';
import FetchData from '../component/FetchData';

export const StarWarsPrincipal = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarShips] = useState([]);

  return (
    <div className='container pt-5'>
      <div>
        <h1 className='card-name my-5'>Character</h1>
        <div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
          {people.map(person => (
            <Card key={person.uid} uid={person.uid} name={person.name}
              imageUrl={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              imageHeight="286px"
              category="people" // Aquí pasamos la categoría correspondiente
              id={person.uid} // Aquí pasamos el id correspondiente
            />
          ))}
        </div>
        <FetchData url="https://www.swapi.tech/api/people" setData={setPeople} />
      </div>

      <div>
        <h1 className='card-name my-5'>Planets</h1>
        <div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
          {planets.map(item => (
            <Card key={item.uid} uid={item.uid} name={item.name}
              imageUrl={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              imageHeight="286px"
              category="planets" // Aquí pasamos la categoría correspondiente
              id={item.uid} // Aquí pasamos el id correspondiente
            />
          ))}
        </div>
        <FetchData url="https://www.swapi.tech/api/planets" setData={setPlanets} />
      </div>

      <div>
        <h1 className='card-name my-5'>StarShips</h1>
        <div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
          {starships.map(item => (
            <Card key={item.uid} uid={item.uid} name={item.name}
              imageUrl={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`}
              imageHeight="191px"
              category="starships" // Aquí pasamos la categoría correspondiente
              id={item.uid} // Aquí pasamos el id correspondiente
            />
          ))}
        </div>
        <FetchData url="https://www.swapi.tech/api/starships" setData={setStarShips} />
      </div>

    </div>
  );
};
