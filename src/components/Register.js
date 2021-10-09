import React from 'react'




class Register extends React.Component{
    state = {
        data: {}
    }

    handleChange = (e) => {
        const data = this.state.data
        data[e.target.name] = e.target.value
        this.setState({ data })
    }

    render(){
        return (
            <div className="Register">
                <form onChange={this.handleChange}>
                    <h3>Register</h3>
                    <div className="formGroup">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" />
                    </div>
                    <div className="formGroup">
                        <input className="formButton" type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}


export default Register