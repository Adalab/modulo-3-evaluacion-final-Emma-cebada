import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Form.scss';

const Filters = (props) => {
  const handleInputChange = (ev) => {
    props.handleInputChange(ev.target.value);
  }
  const handleInputTypeChange = (ev) => {
    props.handleInputTypeChange(ev.target.value);
  }


  const handleSubmit = ev => {
    ev.preventDefault();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form__label">Find a character by name:</label>
      <input className="form__input" type="text" name="name" id="name" placeholder="Rick Sanchez" value={props.inputText} onChange={handleInputChange} />
      <label hmtlFor="type">Find a character by type:</label>
      <input type="text" name="type" id="type" placeholder="Human" value={props.inputTypeText} onChange={handleInputTypeChange} />
    </form>
  )
}

Filters.propTypes = {
  handleInputChange: PropTypes.func,
  name: PropTypes.string,
}

export default Filters;