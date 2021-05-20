import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { loginUser} from '../redux';

function LoginContainer(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
        <Row>
        <Col>
        <h1>Login</h1>
            <Form className="form">
    <p>{props.msg}</p>
  <Form.Group >
    <Form.Label>email</Form.Label>
    <Form.Control type="text" defaultValue={props.email} onChange={e=>setEmail(e.target.value)} />
  
  </Form.Group>
  
  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" defaultValue={props.password} onChange={e=>setPassword(e.target.value)} />
  
  </Form.Group>
  <Button variant="primary" onClick={()=>props.loginUser(email,password)}>Login</Button>
  </Form>
   </Col>
        <Col>
            
   </Col>
   
       </Row>
        </Container>
    )
}

const mapStatetoProps=(state)=>{
    return{
        email:state.user.email,
       password:state.user.password,
       msg:state.user.msg
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       
       loginUser:function(email,password){
        dispatch(loginUser(email,password));
    },
       
    }
   }
   

   export default connect(mapStatetoProps,mapDispatchtoProps)(LoginContainer);
