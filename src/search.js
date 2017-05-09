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

    search(){
        console.log("this is clicked!!!!!")
        // axios.post('/search', {
        //     searched: this.state.searched;
        // }).then( (resp) => {
        //
        //
        //
        // })
    }

    render() {
        let elem = (
            <div className="searchBox">
                <input onChange={this.onInput} id="search" />
                <button onClick={this.search}> search </button>
            </div>
        );

        return elem;
    }
}
