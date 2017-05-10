import React from 'react';
import ReactDOM from 'react-dom';

export class List extends React.Component {
    constructor (props) {
        super(props);
        this.state= {};
    }

    render() {
        return(
            <div>
                "List of daily vocabulary"
            </div>
        );
    }
}
