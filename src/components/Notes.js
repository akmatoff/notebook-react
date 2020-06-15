import React, {Component} from 'react';
import SingleNote from './SingleNote';
import AddNote from './AddNote';

class Notes extends Component {
    render() {
        return(
            <div> 
                {this.props.notes.map((note) => (
                <SingleNote key={note.id} note={note}></SingleNote>
                ))}
            </div>
        );
    };
}

export default Notes;