import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        var obj = {};
        obj[e.target.id] = e.target.value;
        this.setState(obj);
    }

    search() {
        axios.post('/search', function(){
            console.log("search function");
        })
    }

    render() {
        let elem = (
            <div className="searchBox">
                <input onChange={this.onInput} id="voca" />
                <button onClick={this.search}> search </button>
            </div>
        );

        return elem;
    }
}
