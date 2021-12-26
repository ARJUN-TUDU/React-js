import React from 'react'
import {Form , Container , Row , Col , Image} from 'react-bootstrap';
const Contact = () => {
    return (
        <Container className = "my-5">
           
           <Row>
               <Col lg={6} sm={12}>
               
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
       
               </Col>

               <Col lg = {6} sm = {12} className = " px-5 my-4">
                   <Image style ={{height:'500px'}} src ={'https://i.pinimg.com/736x/09/83/48/098348cf09ec3e1cfa2adaa3c40dbd58.jpg'} fluid />
               </Col>
           </Row>


        </Container>
    )
}

export default Contact
