
import React from 'react'
import Home from './pagess/Home'; 
import Contact from './pagess/Contact';
import {Switch , Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ; 
import MyNavbar from './components/MyNavbar';
import { Container } from 'react-bootstrap';
import ToursSection from './sections/ToursSection';
import BlogCards from './components/BlogCards';
import BlogSection from './sections/BlogSection';

const App = () => {
  return (
    
    <body>
      
        <header>
          <MyNavbar/>
        </header>
    
        <Switch>
              
              <Route  exact path = "/" component={Home}/>
              <Route exact path = "/Contact" component = {Contact}/>
              
        </Switch>

        <Redirect to = "/" />
        <BlogSection/>
    </body>
   
  )
}

export default App

  