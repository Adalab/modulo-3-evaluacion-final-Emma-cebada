import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Loading from './Loading';
import Header from './Header'
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import api from '../services/api';
import rick from '../images/rick-no.png';
import '../stylesheets/App.scss';

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [inputTypeText, setInputTypeText] = useState('');

  //api
  useEffect(() => {
    setIsLoading(true);
    api.getDataFromApi().then(data => {
      setCharacters(data);
      setIsLoading(false);
    });
  }, []);

  //events
  const handleInputChange = inputText => {
    setInputText(inputText);
  };

  const handleInputTypeChange = inputTypeText => {
    setInputTypeText(inputTypeText);
  }

  const filteredCharacters = characters.filter(character => {
    return character.name.toUpperCase().includes(inputText.toUpperCase());
  })
    .filter(character => {
      return character.type.toUpperCase().includes(inputTypeText.toUpperCase());
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
      return (
        <div className="character__error">
          <Link to="/">
            <button className="character__error-button">Go back</button>
          </Link>
          <p className="character__error-paragraphRoute">Character not found.</p>
          <img className="character__error-imageRoute"
            src={rick}
            alt="Character not found"
            title="Character Rick animation"
          />
        </div>)
    }
  };

  //paint
  return (
    <>
      {isLoading === true ? <Loading /> : null}
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <CharacterList
              characters={filteredCharacters}
              inputText={inputText}
              inputTypeText={inputTypeText}
              handleInputChange={handleInputChange}
              handleInputTypeChange={handleInputTypeChange}
            />
          </Route>
          <Route path="/character-detail/:id" render={renderDetail} />
        </Switch>
      </div>
    </>
  );
}

export default App;
