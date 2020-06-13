import React, {Component} from 'react';
import SingleNote from './SingleNote';
import PropTypes from 'prop-types';

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

// Prop Types
Notes.propTypes = {
    notes: PropTypes.array.isRequired
}

export default Notes;