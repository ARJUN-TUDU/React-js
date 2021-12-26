import React from 'react'
import BlogCards from '../components/BlogCards' ; 
import {Row, Col , Container} from 'react-bootstrap';

const BlogSection = () => {
    return (
        <div className= "blogsection">
          <Row>
              <Col lg = {3} sm = {12}>
                  <BlogCards/>
              </Col>
              <Col lg = {3} sm = {12}>
                  <BlogCards/>
              </Col>
              <Col lg = {3} sm = {12}>
                  <BlogCards/>
              </Col>
              <Col lg = {3} sm = {12}>
                  <BlogCards/>
              </Col>
          </Row>
        </div>
    )
}

export default BlogSection
