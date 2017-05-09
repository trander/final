import React from 'react';
import axios from 'axios';

export class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <div>
            <p>
                <img src="/img/logo.png" />
            </p>
            Welcoooooooooooooooooooooooooooome
            {this.props.children}
        </div>
        );
    }
}

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onInput = this.onInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        axios.post('/register', {
            first : this.state.first,
            last : this.state.last,
            email : this.state.email,
            password : this.state.password
        }).then ( (resp) => {
            if (resp.data.success) {
                location.replace('/');
            } else {
                this.setState({
                    error : true
                })
            }
        });
    }

    onInput(e) {
        var obj = {};
        obj[e.target.id] = e.target.value;
        this.setState(obj);
    }

    render() {
        return(
            <div className = "register">
                <input onChange={this.onInput} id="first" /> <br/>
                <input onChange={this.onInput} id="last"/> <br/>
                <input onChange={this.onInput} id="email"/> <br/>
                <input onChange={this.onInput} id="password" type="password"/> <br/>
                {this.state.error && <div> There was an error! </div>}
                <button onClick={this.submitForm}> register </button>
            </div>
        )
    }
}

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onInput = this.onInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        axios.post('/login', {
            email : this.state.email,
            password : this.state.password
        }).then ( (resp) => {
            if (resp.data.success) {
                location.replace('/');
            } else {
                this.setState({
                    error : true
                })
            }
        });
    }

    onInput(e) {
        var obj = {};
        obj[e.target.id] = e.target.value;
        this.setState(obj);
    }

    render() {
        return(
            <div className = "login">
                <input onChange={this.onInput} id="email"/> <br/>
                <input onChange={this.onInput} id="password"/> <br/>
                {this.state.error && <div> There was an error! </div>}
                <button onClick={this.submitForm}> login </button>
            </div>
        )
    }
}
