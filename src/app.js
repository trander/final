import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios';
import Request from 'superagent';
import { Logo } from './logo.js';
import { ProfilePic } from './profilePic.js';
import { Search } from './search.js';
import { ListPic } from './listPic.js';

console.log('PROFILE PIC', ProfilePic);

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.list = this.list.bind(this);
        this.editBio = this.editBio.bind(this);
    }

    componentWillMount(){
        var url="https://od-api.oxforddictionaries.com/api/v1";
        Request.get(url).then( (response) => {
            this.setState({
                deu: response.body.voca

            });
        });
    }

    componentDidMount() {
        axios.get('/user').then( (resp) => {
            this.setState({
                id: resp.data.id,
                first: resp.data.first,
                last: resp.data.last,
                image: resp.data.image,
                bio: resp.data.bio,
                list: resp.data.list
            });
        })
    }

    list(list){
        axios.post('/list', {
            list: list
        }).then( (resp) => {
            this.setState({
                list: list
            })
        });
    }

    editBio(bio) {
        axios.post('/editbio', {
            bio: bio
        }).then( (resp) => {
            this.setState({
                bio:bio
            })
        });
    }

    search(voca) {
        axios.post('/search', {
            voca: voca
        }).then( (resp) => {
            this.setState({
                voca:voca
            })
        });
    }

    render() {
        const children = React.cloneElement(this.props.children, {
            id: this.state.id,
            first: this.state.first,
            last: this.state.last,
            image: this.state.image,
            bio: this.state.bio,
            editBio: this.editBio,
            list: this.list
        })

        let elem = (
            <div>
                <div className="header">
                    <Link to="/"><Logo /></Link>
                    <Search />
                    <ListPic />
                    <ProfilePic />
                </div>
                <div className="body">
                <hr/>
                    {this.props.children}
                </div>
            </div>
        );

        return elem;
    }
}
