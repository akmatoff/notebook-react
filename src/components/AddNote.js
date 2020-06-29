import React, {Component} from 'react';
import './AddNote.css';

class AddNote extends Component {
    state = {
        heading: '',
        body: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    submitNote = (e) => {
        e.preventDefault();
        if (this.state.heading !== '' && this.state.body !== '') {
            this.props.addNote(this.state.heading, this.state.body);
            this.setState({heading: '', body: ''})
        }
        
    }

    render() {
        return(
            <div className="container centered">
            <form className="add-note" onSubmit={this.submitNote}>
                <input name="heading" placeholder="Type heading" type="text" value={this.state.heading} onChange={this.onChange}></input>
                <textarea name="body" placeholder="Note..." type="text" value={this.state.body} onChange={this.onChange}></textarea>
                <div className="flex-container row">
                    <input type="submit" value="Submit"></input>
                    <i className="fas fa-paint-brush colors-button"></i>
                </div>
                <div className="colors-container"></div>
            </form>
            </div>
        );
    }
}

export default AddNote;