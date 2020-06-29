import React, {Component} from 'react';
import SingleNote from './SingleNote';

class Notes extends Component {

    render() {
        const notesStyle = {
            display: 'flex',
            flexDirection: 'column-reverse'
        }
        return(
            <div style={notesStyle} className="container"> 
                {this.props.notes.map((note) => (
                <SingleNote key={note.id} note={note}></SingleNote>
                ))}
            </div>
        );
    };
}

export default Notes;