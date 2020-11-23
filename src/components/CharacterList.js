import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterItem = props.characters.map((card) => {
    return (
      <li key={card.id}>
        <CharacterCard
          image={card.image}
          name={card.name}
          species={card.species}
        />
      </li>
    )
  })
  return (
    <ul>
      {characterItem}
    </ul>
  )
}

export default CharacterList;