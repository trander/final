import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export class ListPic extends React.Component {
    render() {
        let elem = (
            <div className="listBox">
                <Link to="list"><img src="/img/list.jpg" className="listPic"/></Link>
            </div>
        );

        return elem;
    }
}
