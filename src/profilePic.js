import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export class ProfilePic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="search"> <img src="/img/defaultProfilePic.png" className="profilePic" /> </Link>
            </div>
        );
    }
}
