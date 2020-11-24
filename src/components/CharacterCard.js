import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <article>
      <Link to={`/character-detail/${props.id}`}>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.species}</p>
      </Link>
    </article >
  )
}

export default CharacterCard;