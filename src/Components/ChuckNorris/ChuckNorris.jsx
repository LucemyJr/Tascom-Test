import React, { useState, useEffect } from 'react';
import "./ChuckNorris.css"

const ChuckNorris = () => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const fetchChuckNorrisPhrase = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setPhrase(data.value);
      } catch (error) {
        console.error('Error fetching Chuck Norris phrase:', error);
      }
    };

    fetchChuckNorrisPhrase(); // Chamada inicial à API

    const intervalId = setInterval(() => {
      fetchChuckNorrisPhrase(); // Chamada à API a cada 5 segundos
    }, 5000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // A dependência vazia assegura que este efeito só será executado uma vez

  return (
    <div className='chuck-norris-container'>
      <h1 className="chuck-norris-phrase">"{phrase}"</h1>
      <p className="credits">By Chuck Norris.</p>
    </div>
  );
};

export default ChuckNorris;
