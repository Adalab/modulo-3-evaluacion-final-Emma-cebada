import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import api from '../services/api';
import '../stylesheets/App.css';
import Filters from './Filters';

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);
  const [inputText, setInputText] = useState('');

  //api
  useEffect(() => {
    api.getDataFromApi().then(data => {
      setCharacters(data);
    });
  }, []);

  //events
  const handleInputChange = inputText => {
    setInputText(inputText);
  };

  const filteredCharacters = characters.filter(character => {
    return character.name.toUpperCase().includes(inputText.toUpperCase());
  });

  //paint
  return (
    <div className="App">
      <Filters handleInputChange={handleInputChange} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
