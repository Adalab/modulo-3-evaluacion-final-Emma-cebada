import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import api from '../services/api';
import '../stylesheets/App.css';

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

  const renderDetail = props => {
    const routeCharacterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find(character => {
      return routeCharacterId === character.id;
    });
    if (foundCharacter) {
      return <CharacterDetail
        image={foundCharacter.image}
        name={foundCharacter.name}
        species={foundCharacter.species}
        origin={foundCharacter.origin.name}
        episodes={foundCharacter.episode}
        status={foundCharacter.status}
      />
    } else {
      return <p>Character not found.</p>
    }
  };

  //paint
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CharacterList characters={filteredCharacters} handleInputChange={handleInputChange} />
        </Route>
        <Route path="/character-detail/:id" render={renderDetail} />
      </Switch>

    </div>
  );
}

export default App;
