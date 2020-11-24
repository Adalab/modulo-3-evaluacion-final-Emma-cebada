import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/">
        <button className="cardDetail__button">Go back</button>
      </Link>
      <article className="cardDetail__container">
        <img className="cardDetail__image" src={props.image} alt={props.name} />
        <div className="cardDetail__name">
          <h2 className="cardDetail__name-title">{props.name}</h2>
          <ul className="cardDetail__list">
            <li className="cardDetail__list-item" >Species: {props.species}.</li>
            <li className="cardDetail__list-item" >Planet of origin: {props.origin}.</li>
            <li className="cardDetail__list-item" >Appears in {props.episodes.length} episode(s).</li>
            <li className="cardDetail__list-item" >Status: {props.status}</li>
          </ul>
        </div>
      </article>
    </>
  )
}


export default CharacterDetail;