import React from 'react';

import './BetsForm.css';

const BetsForm = ({
  handleChange,
  handleSubmit,
  description,
}) => (
  <form
    onSubmit={ handleSubmit }
    className="bets-form"
    action=""
    >
    <input value={ description } onChange={ handleChange } />
    <button type="submit">Adicionar</button>
  </form>
);

export default BetsForm;
