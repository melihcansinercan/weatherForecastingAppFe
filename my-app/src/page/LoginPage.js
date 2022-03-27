import React, { Component } from 'react'
import Login from '../component/Login'
import { Tab, Tabs } from 'react-bootstrap';
import SignUp from '../component/SignUp';

export default class LoginPage extends Component{
    render(){
        return(
            <React.StrictMode>
                <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3" inkBarStyle={{background: 'blue'}}>
                    <Tab eventKey="login" title="Login"> 
                        <Login/>
                    </Tab>
                    <Tab eventKey="register" title="Register" >
                        <SignUp></SignUp>
                    </Tab>
                </Tabs>
            </React.StrictMode>
        )
    }
}