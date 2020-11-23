import React from 'react';

const Filters = (props) => {
  const handleInputChange = (ev) => {
    props.handleInputChange(ev.target.value);
  }
  return (
    <form>
      <label htmlFor="name">Find a character by name:</label>
      <input type="text" name="name" id="name" placeholder="Rick" onChange={handleInputChange} />
    </form>
  )
}

export default Filters;