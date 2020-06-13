import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class SingleNote extends Component {
    render() {
        return (
            <div>
                <p>{this.props.note.heading}</p>
            </div>
        )
    }
}

SingleNote.propTypes = {
    note: PropTypes.object.isRequired
}

export default SingleNote
