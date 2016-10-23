import React from 'react';

import './BetsList.css';

const BetsListItem = ({ bet }) => (
  <li
    className="bets-list-item"
    >
    <span className="bets-list-item-description">{ bet.description }</span>
    <div className="bets-list-item-info">Participantes: { bet.participants }</div>
  </li>
);

const BetsList = ({ bets }) => {
  if (!bets || !bets.length) {
    return 'Nenhum bolão cadastrado';
  }

  return (
    <ul>
      { bets.map(bet => (<BetsListItem bet={ bet } key={ bet.id } />)) }
    </ul>
  );
}

export default BetsList;
