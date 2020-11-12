import React, { Component } from 'react'
import request from 'superagent';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState(this.state);
        const user = await request
            .post('https://fierce-brushlands-89020.herokuapp.com/auth/signin')
            .send(this.state);

        this.setState({ loading: false })

        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <h2>Log in</h2>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input onChange={(e) => this.state({ email: e.target.value})} value={this.state.email}/>
                </label>
                <label>
                    Password:
                    <input onChange={(e) => this.setState({ password: e.target.value})} value={this.state.password} type="password"/>
                </label>
                {
                    this.state.loading
                    ? 'LOADING!!!'
                :<button>
                    Login
                </button>
                }
                </form>  
            </div>
        )
    }
}
