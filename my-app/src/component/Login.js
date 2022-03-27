import React,{useState} from 'react'
import { Button, Form, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";



export default function Login(){
    window.sessionStorage.setItem("logedIn", "false")

    const [show, setShow] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const navigate = useNavigate();

    const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
    };

    async function handleSubmit(e){
        e.preventDefault();
        const {formBasicEmail, formBasicPassword} = e.target.elements

        const body = {email : formBasicEmail.value, password :formBasicPassword.value}

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
      };

        console.log(requestOptions)
        fetch('/login', requestOptions)
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .then(data => {
          if (data.code === 1){
            window.sessionStorage.setItem("userName",data.displayName)
            window.sessionStorage.setItem("logedIn", "true")
            navigate('dashboard');
          }
          else{
            setShow(true);
          }
        })
            

    }

    return(
        <Form onSubmit={handleSubmit} style={{'margin': '0 auto', 'max-width': '320px', 'paddingTop': '150px'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type={passwordShown ? "text" : "password"} placeholder="Password" ></Form.Control>
    <span><BsFillEyeFill onClick={togglePassword}></BsFillEyeFill></span>
  </Form.Group>
  <Button variant="primary" type="submit">Login!</Button>
  <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
    <Alert.Heading>Login Error!</Alert.Heading>
    <p>Wrong email or password!</p>
  </Alert>
</Form>

        )
}