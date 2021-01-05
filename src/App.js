import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Cart from './pages/cart'
import About from './pages/about'
import NavBar from './components/navbar'
import image from './images/blackWoodBackground.jpg'
import { currentUser } from './Actions/auth'
import { connect } from 'react-redux'

const App = ({currentUser}) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${image})`
  },[])

  useEffect(() => {
    const token = localStorage.getItem('myToken')
    const reqObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    fetch('http://localhost:3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => currentUser(user))
},[])

  return (
    <div className="App">
      <NavBar />
       <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/about' component={About} />
        </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  currentUser
}

export default connect(null, mapDispatchToProps)(App);
