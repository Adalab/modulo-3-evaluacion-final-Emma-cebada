import React from 'react';
import CharacterCard from './CharacterCard';
import Filters from './Filters';

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
      <li key={card.id}>
        <CharacterCard
          id={card.id}
          image={card.image}
          name={card.name}
          species={card.species}
        />
      </li>
    )
  })
  return (
    <>
      <Filters inputText={props.inputText} handleInputChange={props.handleInputChange} />
      <ul>
        {characterItem}
      </ul>
    </>
  )
}

export default CharacterList;