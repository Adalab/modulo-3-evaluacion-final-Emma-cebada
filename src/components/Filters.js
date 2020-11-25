import React from 'react';
import PropTypes from 'prop-types';
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

Filters.propTypes = {
  handleInputChange: PropTypes.func,
  name: PropTypes.string,
}

export default Filters;