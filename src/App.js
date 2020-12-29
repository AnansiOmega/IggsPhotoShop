import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Cart from './pages/cart'
import About from './pages/about'
import NavBar from './components/navbar'
import image from './images/blackWoodBackground.jpg'

const App = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${image})`
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

export default App;
