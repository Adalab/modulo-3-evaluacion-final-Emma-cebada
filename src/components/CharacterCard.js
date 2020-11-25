import React from 'react';
import { Link } from 'react-router-dom';
import human from '../images/human.png';
import alien from '../images/alien.png';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <article className="card">
      <Link to={`/character-detail/${props.id}`} className="card__link">
        <img className="card__image" src={props.image} alt={props.name} />
        <h2 className="card__title">{props.name}</h2>
        <p className="card__paragraph">{props.species}</p>
        <img className="card__paragraph-image" src={props.species === "Human" ? human : alien} alt={props.species} title={props.species} />
      </Link>
    </article >
  )
}

export default CharacterCard;