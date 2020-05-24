import React, { Component } from 'react'
import Nav from './../Nav/Nav.js'
import Home from './../Home/Home.js'
import Sanpham from '../Sanpham/Sanpham.js'
import Input from '../Sanpham/Input/Input.js'
import Signup from './../Signup/Signup.js'
import Login from '../Login/Login.js'
import '../css/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 Link
} from "react-router-dom";


export default class App extends Component {
  constructor(){
    super();
    this.state = {
        name: 'duong', isLogin: false
    }
  }
  Login = () =>{
    this.setState({isLogin: !this.state.isLogin })
    console.log("sss")
  }
 
  render() {

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     datas: [],
    //   };
    // }\
    
    var user = this.state;
    return (
      <Router>
        <div>
          <Nav user = {user} Login = {this.Login} />
        <Switch>
          <Route exact path="/">
            <Login Login = {this.Login} />
          </Route>

          <Route path='/Sanpham'>
              <Sanpham />
          </Route>

          <Route path='/Input'>
              <Input />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          
          <Route path='/Signup'>
            <Signup/>
          </Route>
        </Switch>
        </div>

      </Router>
    );
  }
}
 


