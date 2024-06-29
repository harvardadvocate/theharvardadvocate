import React, { useEffect, useState } from 'react';

function RandomUpdate({ onUpdate }) {
  const [randArray, setRandArray] = useState([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      return [
        Math.floor(Math.random() * 50),
        Math.floor(Math.random() * 50 + 50),
        Math.floor(Math.random() * 50 + 100),
        Math.floor(Math.random() * 50 + 150),
        Math.floor(Math.random() * 50 + 200),
        Math.floor(Math.random() * 50 + 250),
      ];
    };

    const initialNumbers = generateRandomNumbers();
    setRandArray(initialNumbers);
    onUpdate(initialNumbers);

    const intervalId = setInterval(() => {
      const newNumbers = generateRandomNumbers();
      setRandArray(newNumbers);
      onUpdate(newNumbers);
    }, 604800000); 

    return () => clearInterval(intervalId);
  }, []);

  return null;
}

export default RandomUpdate;