import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <article className="card">
      <Link to={`/character-detail/${props.id}`} className="card__link">
        <img className="card__image" src={props.image} alt={props.name} />
        <h2 className="card__title">{props.name}</h2>
        <p className="card__paragraph">{props.species}</p>
      </Link>
    </article >
  )
}

export default CharacterCard;