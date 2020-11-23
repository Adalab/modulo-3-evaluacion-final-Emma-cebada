import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import api from '../services/api';
import '../stylesheets/App.css';

const App = () => {
  const [characters, setCharacters] = useState([])
  //api
  useEffect(() => {
    api.getDataFromApi().then(data => {
      setCharacters(data);
    });
  }, []);

  //paint
  return (
    <div className="App">
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
