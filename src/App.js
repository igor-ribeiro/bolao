import React, { Component } from 'react';

// Components
import BetsList from './components/bets/bets-list/BetsList';
import BetsForm from './components/bets/bets-form/BetsForm';

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

  constructor(props) {
    super(props);

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

        <BetsForm
          description={ newBetDescription }
          handleSubmit={ this.handleNewBetSubmit }
          handleChange={ this.handleNewBetChange }
          />

        <BetsList bets={ bets } />

      </div>
    );
  }
}

export default App;
