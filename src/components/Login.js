import React from 'react'
import axios from 'axios'


class Login extends React.Component{
    state = {
        data: {},
        email: ''
    }


    handleChange = (e) => {
        const data = this.state.data
        data[e.target.name] = e.target.value
        this.setState({ data })
    }

    setEmail = (e) => {
        this.setState({ email: e.target.value})
    }

    submitLogin = (e) => {
        axios.post('/login', this.state.data)
        .then(res => {
            // do something with response
        })
        .catch(err => {
            // do something with the error
        })
    }

    handleSubmit = (e, route) => {
        e.preventDefault()
        console.log(route)
        // axios.post(route, this.state.data)
        // .then(res => {
        //     // do something with response
        // })
        // .catch(err => {
        //     // do something with the error
        // })
    }


    render(){
        return (
            <div className="Login">
                <form onChange={this.handleChange} onSubmit={(e) => this.handleSubmit(e, '/login')}>
                    <h3>Login</h3>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="formGroup">
                        <input className="formButton" type="submit" value="Log in" />
                    </div>
                </form>
                <hr />
                <form onChange={this.setEmail} onSubmit={(e) => this.handleSubmit(e, '/forgot')}>
                    <h3>Forgot password?</h3>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="formGroup">
                        <input className="formButton" type="submit" value="Request password reset"/>
                    </div>
                </form>
                <p>Don't have an account? <a href="/register">Register here</a>.</p>
            </div>
        )
    }
}


export default Login