import React from 'react';
import '../stylesheets/Form.scss';

const Filters = (props) => {
  const handleInputChange = (ev) => {
    props.handleInputChange(ev.target.value);
  }

  const handleSubmit = ev => {
    ev.preventDefault();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form__label">Find a character by name:</label>
      <input className="form__input" type="text" name="name" id="name" placeholder="Rick Sanchez" value={props.inputText} onChange={handleInputChange} />
    </form>
  )
}

export default Filters;