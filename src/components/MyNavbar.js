import React from 'react'
import {Navbar , Nav , Container , NavDropdown , Row , Col} from 'react-bootstrap' ; 
import {Link, Route} from 'react-router-dom' ;



const MyNavbar = () => {
    return (
        <div className = "">
             <Navbar bg="dark" expand="lg" className = ' mybg px-3 py-3'>
                <Container >

                    
                    <Navbar.Brand><h1  className = "mytextHeader">

                        <Link to = '/' className = "remdecoration text-warning">Rastafaari</Link>
                        </h1></Navbar.Brand>
                        
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                 
                   <Nav className="me-auto text-white">
                        <Nav.Link ><Link to = "/" className = "remdecoration" >Home</Link></Nav.Link>
                        <Nav.Link  className = "text-white"><Link to = "/Contact" className = "remdecoration" >Contact</Link></Nav.Link>
                       
                    </Nav>
                 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
 