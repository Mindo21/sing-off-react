import React from 'react';
import './App.css';
import AddNewCounter from './AddNewCounter';
import CounterList from './CounterList';
import api from './api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: []
    };
  }

  render(){
    const addNewCounter = async (name) => {
      // check if there already is a counter with that name
      if (!this.state.counters.some(counter => counter.name === name)) {
        // fetch the new counter
        const newCounter = await api.fetchCounter(name);
        // add the counter to the array
        const counters = this.state.counters.concat(newCounter);
        this.setState({ counters });
      }
    }

    return (
      <div className="App">
        <AddNewCounter addNewCounter={addNewCounter}/>
        <CounterList counters={this.state.counters} />
      </div>
    );
  }
}

export default App;