import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
        loading: false
    }

    // addHandleSubmit

        
    render() {
        return (
            <div>
                <form>
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
                    Sign-up!
                </button>
                }
                </form>  
            </div>
        )
    }
}
