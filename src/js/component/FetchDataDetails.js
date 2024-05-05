import { useState, useEffect } from 'react';

const FetchDataDetails = (url, category) => {
    const [details, setDetails] = useState(null);

    const fetchDetails = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.result) {
                // Añadir la categoría a los detalles para identificarlos
                setDetails({ ...data.result, category });
            } else {
                throw new Error('Detail not found');
            }
        } catch (error) {
            console.error('Error fetching details:', error);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, [url]);

    return details;
};

export default FetchDataDetails;


