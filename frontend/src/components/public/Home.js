import React from 'react'
import Register from './Register'
import Login from './Login'
import HowItWorks from './HowItWorks';
import About from './About';
import CocktailHome from './CocktailHome'
import './Home.css'



export default class Home extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <div id="home" className="home">
          <About />
          <HowItWorks/>
          <CocktailHome/>
          {!this.props.token && <Register {...this.props}/>}
          <Login {...this.props}/>
        </div>
      </div>
    )
  }
  }
  
