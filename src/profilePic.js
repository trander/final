import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export class ProfilePic extends React.Component {
    render() {
        return (
            <div>
                <Link to="editbio"> <img src="/img/defaultProfilePic.png" className="profilePic" /> </Link>
            </div>
        );
    }
}
