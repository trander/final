import React from 'react';
import ReactDOM from 'react-dom';

export class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="/img/logo.png" className="logo" />
            </div>
        );
    }
}
