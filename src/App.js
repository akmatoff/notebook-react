import React, {Component} from 'react';
import Notes from './components/Notes';
import './App.css';

class App extends Component {
  // Store data in the state
  state = {
    notes: [
      {
        id: 1,
        heading: 'Learn React',
        body: 'Don\'t forget to learn React'
      },
      {
        id: 2,
        heading: 'Boilerplate',
        body: 'Boilerplate code is a code snippet that is used a lot with a little or no alteration'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Notes notes={this.state.notes}/>
      </div>
    );
  }
  
} 

export default App;
