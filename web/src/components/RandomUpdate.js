import React, { useEffect, useState } from 'react';

function RandomUpdate({ onUpdate, maxLength = 12 }) {
  const [randArray, setRandArray] = useState([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      // Generate 6 unique random numbers within the array bounds
      const numbers = [];
      while (numbers.length < 6) {
        const num = Math.floor(Math.random() * maxLength);
        if (!numbers.includes(num)) {
          numbers.push(num);
        }
      }
      return numbers;
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
  }, [maxLength]);

  return null;
}

export default RandomUpdate;