import React from 'react';
import ReactDOM from 'react-dom';
import { ProfilePic } from './profilePic'

export class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.edit = this.edit.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        })
    }

    handleBioChange(e) {
        this.editBio = e.target.value;
    }

    save() {
        console.log(this.props.editBio, this.editBio);
        this.props.editBio(this.editBio);
    }

    render() {
        let elem;
        if (this.state.editing) {
            elem = (
                <div className="userBio">
                    <textarea onChange={this.handleBioChange}>{this.props.bio}</textarea>
                    <button onClick={this.save}> Save </button>
                </div>
            );
        } else {
            elem = (
                <div className="userBio">
                    <div className="bio">{this.props.bio}</div>
                    <button onClick={this.edit}>Edit</button>
                </div>
            );
        }
        return elem;
    }
}
