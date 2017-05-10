import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Logo } from './logo.js';
import { ProfilePic } from './profilePic.js';
import { Search } from './search.js';
import { ListPic } from './listPic.js';

console.log('PROFILE PIC', ProfilePic);

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.editBio = this.editBio.bind(this);
    }

    componentDidMount() {
        axios.get('/user').then( (resp) => {
            this.setState({
                id: resp.data.id,
                first: resp.data.first,
                last: resp.data.last,
                image: resp.data.image,
                bio: resp.data.bio
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



    // search(searched) {
    //     axios.post('/search', {
    //         searched: searched
    //     }).then ( (resp) => {
    //         this.setState({
    //             searched: searched
    //         })
    //     })
    // }

    render() {
        const children = React.cloneElement(this.props.children, {
            id: this.state.id,
            first: this.state.first,
            last: this.state.last,
            image: this.state.image,
            bio: this.state.bio,
            editBio: this.editBio
        })

        let elem = (
            <div>
                <div className="header">
                    <Logo />
                    <Search />
                    <ListPic />
                    <ProfilePic />
                </div>
                <div className="body">
                    {children}
                </div>
            </div>
        );

        return elem;
    }
}
