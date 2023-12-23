import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokeData, usePokeData] = useState([])

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    axios.get(url)
      .then(response => {
        usePokeData(response.data.results);
        console.log(pokeData[0].url)
      })
      .catch(error => {
        console.error('Error:', error);
  });

  },[])


  return ( 
    <section className='mainPoke'>
      <div className='mainBlock'>
        {pokeData.map((el) => (
          <div className='block'>
            <img src={el.url} alt="image" width='100px'/>
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default App
