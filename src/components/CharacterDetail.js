import React from 'react';
import { Link } from 'react-router-dom';
import dead from '../images/dead.jpg';
import unknown from '../images/unknown.png';
import alive from '../images/alive.png';
import human from '../images/human.png';
import alien from '../images/alien.png';
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
            <li className="cardDetail__list-item" >Species: {props.species}.
            <img className="card__paragraph-image" src={props.species === "Human" ? human : alien} alt={props.species} title={props.species} />
            </li>
            <li className="cardDetail__list-item" >Planet of origin: {props.origin}.</li>
            <li className="cardDetail__list-item" >Appears in {props.episodes.length} episode(s).</li>
            <li className="cardDetail__list-item" >Status: {props.status}
              <img className="cardDetail__list-itemIcon" alt={props.status} title={props.status} src={props.status === "Alive" ? alive : props.status === "Dead" ? dead : unknown} />
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}


export default CharacterDetail;