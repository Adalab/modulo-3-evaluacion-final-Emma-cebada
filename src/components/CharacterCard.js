import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import human from '../images/human.png';
import alien from '../images/alien.png';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <article className="card">
      <Link to={`/character-detail/${props.id}`} className="card__link">
        <img className="card__image" src={props.image} alt={props.name} title={props.name} />
        <h2 className="card__title">{props.name}</h2>
        <p className="card__paragraph">{props.species}</p>
        <img className="card__paragraph-image" src={props.species === "Human" ? human : alien} alt={props.species} title={props.species} />
      </Link>
    </article >
  )
}

CharacterCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
}

export default CharacterCard;