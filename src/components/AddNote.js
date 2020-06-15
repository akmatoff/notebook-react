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
        this.props.addNote(this.state.heading, this.state.body);
        this.setState({heading: '', body: ''})
    }

    render() {
        return(
            <form className="add-note" onSubmit={this.submitNote}>
                <input name="heading" placeholder="Type heading" type="text" value={this.state.heading} onChange={this.onChange}></input>
                <input name="body" placeholder="Note..." type="text" value={this.state.body} onChange={this.onChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
        );
    }
}

export default AddNote;