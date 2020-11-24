import React from 'react';

const Filters = (props) => {
  const handleInputChange = (ev) => {
    props.handleInputChange(ev.target.value);
  }

  const handleSubmit = ev => {
    ev.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Find a character by name:</label>
      <input type="text" name="name" id="name" placeholder="Rick Sanchez" value={props.inputText} onChange={handleInputChange} />
    </form>
  )
}

export default Filters;