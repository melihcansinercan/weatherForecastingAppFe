import React, { Component } from 'react'
import Menu from '../component/Menu'
import { Navigate } from 'react-router-dom';



export default class Dashboard extends Component{
    
    render(){
        console.log(window.sessionStorage.getItem("logedIn"))
        if(window.sessionStorage.getItem("logedIn") === undefined || window.sessionStorage.getItem("logedIn") !== "true"){
            return <Navigate to='/'></Navigate>
        }

        return(
            <Menu></Menu>
        )
    }
}