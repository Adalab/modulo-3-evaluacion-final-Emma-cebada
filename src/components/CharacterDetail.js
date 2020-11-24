import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <article>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <ul>
          <li>Species: {props.species}.</li>
          <li>Planet of origin: {props.origin}.</li>
          <li>Appears in {props.episodes.length} episode(s).</li>
          <li>Status: {props.status}</li>
        </ul>
      </article>
    </div>
  )
}


export default CharacterDetail;