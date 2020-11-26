import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import Filters from './Filters';
import alien from '../images/alien-no.png';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  props.characters.sort((a, b) => {
    const characterNameA = a.name.toUpperCase();
    const characterNameB = b.name.toUpperCase();
    if (characterNameA > characterNameB) {
      return 1;
    } if (characterNameA < characterNameB) {
      return -1;
    } else {
      return 0;
    }
  });

  const characterItem = props.characters.map((card) => {
    return (
      <div key={card.id} className="classList__container">
        <li className="classList"
          key={card.id}>
          <CharacterCard
            id={card.id}
            image={card.image}
            name={card.name}
            species={card.species}
          />
        </li>
      </div>
    )
  })
  return (
    <section className="characterList">
      <Filters inputText={props.inputText} handleInputChange={props.handleInputChange}
        inputTypeText={props.inputTypeText}
        handleInputTypeChange={props.handleInputTypeChange}
      />
      {characterItem.length !== 0 ? (
        <ul className="characterList__list">
          {characterItem}
        </ul>
      ) : (
          <div className="character__error">
            <p className="character__error-paragraph">Ops, this character doesn't exist</p>
            <img className="character__error-image"
              src={alien}
              alt="Character not found"
              title="Character Alien animation"
            />
          </div>
        )}
    </section>

  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
}

export default CharacterList;