import React, {Component} from 'react';
import Notes from './components/Notes';
import './App.css';
import AddNote from './components/AddNote';

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

  addNote = (heading, body) => {
    const newNote = {
      id: 3,
      heading: heading,
      body: body
    }
    this.setState({ notes: [...this.state.notes, newNote]})
  }

  render() {
    return (
      <div className="App">
        <AddNote addNote={this.addNote}></AddNote>
        <Notes notes={this.state.notes}/>
      </div>
    );
  }
  
} 

export default App;
