import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="row h-100 justify-content-center align-items-center mt-2"> 
                <form className=" col-10 col-sm-8 col-lg-6" style={{border: '1px solid rgba(0,0,0,.125)', borderRadius: '.25rem', background: '#F1F1F1'}}>
                    <div className="d-flex flex-row-reverse">
                        <Link to='/Signup'>
                            <button type="button" className="btn btn-primary mt-3">Sign Up</button>
                        </Link>
                    
                    </div>
                    <h3 className="text-center">Login</h3>
                    <div className="form-group">
                    <label htmlFor="uname">Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control"  placeholder="Enter password"  />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> remember password
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </label>
                    </div>
                    <Link to='/home'>
                        <button type="submit" className="btn btn-primary mb-3" onClick = {this.props.Login}>Submit</button>
                    </Link>
                    
                </form>
                </div>
            </div>
        )
    }
}
