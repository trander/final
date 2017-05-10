import React from 'react';
import ReactDOM from 'react-dom';
import { ProfilePicUpload } from './profilePicUpload.js';
import { Bio } from './userbio.js';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            openModal: true
        });
    }

    closeModal() {
        this.setState({
            closeModal: false
        });
    }

    render() {
        return (
            <div id="user-profile">
                {this.props.first}
                <Bio bio={this.props.bio} editBio={this.props.editBio}/>
            </div>
        );
    }
}
