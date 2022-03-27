import React,{useState} from 'react'
import { Button, Form, Alert } from 'react-bootstrap';

export default function SignUp(){
    window.sessionStorage.setItem("logedIn", "false")

    const [showErr, setShowError] = useState(false);
    const [showSuc, setShowSuc] = useState(false);

    function refreshPage(value) {
        window.location.reload(value);
      }

    async function register(e){
        e.preventDefault();
        const {formBasicEmail, formBasicPassword} = e.target.elements

        fetch('/register?filter1=' +formBasicEmail.value+ '&filter2=' + formBasicPassword.value, 
            {method : 'GET', headers: new Headers({"Content-Type":"application/json"})})
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .then(data => {
            if (data.code === 1){
                setShowSuc(true);
                setTimeout(() => {  refreshPage(true); }, 1000);
            }
            else{
                setShowError(true);
            }
          });
            

    }
    

    return(
        <Form onSubmit={register} style={{'margin': '0 auto', 'max-width': '320px', 'paddingTop': '150px'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type={"password"} placeholder="Password" ></Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">Register!</Button>
  <Alert show={showErr} variant="danger" onClose={() => setShowError(false)} dismissible>
    <Alert.Heading>Login Error!</Alert.Heading>
    <p>This email is exist!!</p>
  </Alert>
  <Alert show={showSuc} variant="success" onClose={() => setShowSuc(false)} dismissible>
    <Alert.Heading>Login Error!</Alert.Heading>
    <p>Registration is successful!!</p>
  </Alert>
</Form>

        )
}