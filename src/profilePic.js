import React from 'react';
import ReactDOM from 'react-dom';

export class ProfilePic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="/img/defaultProfilePic.png" className="profilePic" />
            </div>
        );
    }
}
