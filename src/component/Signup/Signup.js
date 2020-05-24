import React, { Component } from 'react'


export default class Signup extends Component {
    render() {
        return (
                <>
                <div className="row h-100 justify-content-center align-items-center"> 
                <form className=" col-10 col-sm-8 col-lg-6" style={{border: '1px solid rgba(0,0,0,.125)', borderRadius: '.25rem',background: '#F1F1F1'}}>
                    <div className="d-flex flex-row-reverse">
                        
                    
                    </div>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="form-group">
                    <label htmlFor="uname">Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="uname">Email:</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="pwd">Password(confirm):</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password confirm" name="pswd" required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group form-check">
                    <label className="form-check-label">
                        <div className="valid-feedback">Valid.</div>
                    </label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                </form>
                </div>
            
            </>
        )
    }
}
