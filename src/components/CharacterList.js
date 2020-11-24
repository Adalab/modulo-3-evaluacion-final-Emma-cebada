import React from 'react';
import CharacterCard from './CharacterCard';
import Filters from './Filters';

const CharacterList = (props) => {
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
      <Filters handleInputChange={props.handleInputChange} />
      <ul>
        {characterItem}
      </ul>
    </>
  )
}

export default CharacterList;