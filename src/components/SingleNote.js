import React, { Component } from 'react'
import './SingleNote.css';

export class SingleNote extends Component {
    render() {
        return (
            <div className="card">
                <h1 className="heading">{this.props.note.heading}</h1>
                <div className="body">{this.props.note.body}</div>
            </div>
        )
    }
}

export default SingleNote;
