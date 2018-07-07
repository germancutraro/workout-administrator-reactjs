import React, { Component } from 'react';
import Days from './components/Days/Days';

class App extends Component {

  state = {
    days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  }

  render() {
    return (
      <div className="App">
        <Days days={ this.state.days } />
      </div>
    );
  }
}

export default App;
