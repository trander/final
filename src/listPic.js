import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export class ListPic extends React.Component {
    render() {
        let elem = (
            <div className="listBox">
                <img src="/img/1.PNG" className="listPic"/>
            </div>
        );

        return elem;
    }
}
