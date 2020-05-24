import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        const {user} = this.props;
        return (
            <>
            {
                user.isLogin===true && 
            <div className='container sticky-top'>
                <nav className="navbar navbar-inverse navbar-expand-md bg-dark navbar-dark ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-itema ml-5">
                            <Link className="nav-link" to='/home'>Trang chủ</Link>
                        </li>
                        <li className="nav-itema ml-5">
                            <Link className="nav-link" to='/Sanpham'>Sản phẩm</Link>
                        </li>
                        <li className="nav-itema ml-5">
                            <a className="nav-link" >Liên hệ</a>
                        </li>    
                        </ul>
                        <ul className="nav navbar-nav navbar-right ">
                            <li><Link to='/Signup'><span className="glyphicon glyphicon-user" /> Sign Up</Link></li>
                            <li onClick = {this.props.Login}><Link to='/'><span className="glyphicon glyphicon-log-in"  /> Logout</Link></li>
                        </ul>

                    </div>  
                </nav>
            </div>  
            }
            </>
        )
    }
}
