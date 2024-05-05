import React, { useEffect } from 'react';

const FetchData = ({ url, setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };
    
    fetchData();
  }, [url, setData]);

  return null; // Este componente no renderiza nada directamente
};

export default FetchData;

