import React from 'react';
import ReactDOM from 'react-dom';

var gcloud = require('google-cloud');

const Translate = require('@google-cloud/translate');

var translate = gcloud.translate({
  projectId: 'spicedfinal',
  keyFilename: 'spicedfinal-8363460f7a88.json'
});

const projectId = 'spicedfinal';

const translateClient = Translate({
  projectId: projectId
});

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

    var input = this.obj;

    var options = {
        from: 'de',
        to: 'en'
    };

    translateClient.translate(input, options, function(err transtlations) {
        if(!err) {
            

        }
    });




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
