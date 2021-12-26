import React from 'react'
import {Container , Col , Row} from 'react-bootstrap' ; 
import TourCards from '../components/TourCards';

const ToursSection = () => {
    return (
        
           <Container>
                <Row>
              
              <Col sm={12}  lg={3} >
                  <TourCards/>     
              </Col>
              <Col xs={12}  lg={3} >
                  <TourCards/>     
              </Col>
              <Col xs={12}  lg={3} >
                  <TourCards/>     
              </Col>
              <Col xs={12}  lg={3} >
                  <TourCards/>     
              </Col>

        </Row>
           </Container>
        
    )
}

export default ToursSection
