import React from 'react';
import ReactDOM from 'react-dom';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchButton = this.searchButton.bind(this);
    }

    handleChange(event) {
        console.log('handleChange: '+event.target.value);
        let search = this.state.search;
        this.setState({
            search:search
        })
    }

    searchButton() {

    }


    render() {
        let elem = (
            <div>
                <input onChange={this.handleChange} type="text" placeholer="search"></input>
                <button onClick={this.searchButton}>Go</button>
            </div>
        );

        return elem;
    }

    // handleChange(e) {
    //     var obj = {};
    //     obj[e.target.voca] = e.target.value;
    //     this.setState(obj);
    // }
    //
    // search(e) {
    //     console.log("Search!! " + this.state.value);
    //     e.preventDefault();
    // }
    //

    // let elem = (
    //     <div className="searchBox">
    //         <input onChange={this.handleChange} type="text" id="searchedV" placeholder="Search" className="voca" value={this.state.voca}/>
    //         <button onClick={this.search} className="src_btn"> Go </button>
    //     </div>
    // );



}
