import React, { Component } from 'react';

import './App.css';

let nextBetId = 1;

const BetSchema = {
  id: null,
  description: '',
  participants: 0,
};

class App extends Component {
  state = {
    bets: [
      { id: 0, description: 'Horário de chegada do Matheus', participants: 1 },
    ],
    newBetDescription: '',
  }

  constructor() {
    super();

    this.handleNewBetChange = this.handleNewBetChange.bind(this);
    this.handleNewBetSubmit = this.handleNewBetSubmit.bind(this);
  }

  handleNewBetChange(event) {
    this.setState({
      newBetDescription: event.target.value,
    });
  }

  handleNewBetSubmit(event) {
    event.preventDefault();

    const { bets, newBetDescription } = this.state;

    bets.push({
      ...BetSchema,
      id: nextBetId,
      description: newBetDescription,
    });

    this.setState({ bets, newBetDescription: '' }, () => nextBetId++);
  }

  render() {
    const { bets, newBetDescription } = this.state;

    return (
      <div className="app">
        <h2>Bolões</h2>

        <form onSubmit={ this.handleNewBetSubmit } action="">
          <input value={ newBetDescription } onChange={ this.handleNewBetChange } />
          <button type="submit">Adicionar</button>
        </form>

        <hr />

        <ul>
          { bets.map(bet => (
            <li key={ bet.id }>
              { bet.description }
              <div>Participantes: { bet.participants }</div>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default App;
