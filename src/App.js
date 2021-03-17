import React, { useState ,useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Cart } from './pages/cart'
import { About } from './pages/about'
import { NavBar } from './components/navbar'
import image from './images/blackWoodBackground.jpg'
import { currentUser } from './Actions/auth'
import { useDispatch } from 'react-redux'
import { fetchPhotosSuccess } from './Actions/photos'

export const App = () => {
  const dispatch = useDispatch()
  const [pageNum, setPageNum] = useState(1)
  const [scrollHeight, setScrollHeight] = useState('')
  const [fetchHeight, setFetchHeight] = useState(500)
  useEffect(() => {
    document.body.style.backgroundImage = `url(${image})`
    document.addEventListener('scroll', () => setScrollHeight(window.scrollY))
  },[])

  useEffect(() => {
    if(scrollHeight > fetchHeight){
      setPageNum(pageNum + 1)
      setFetchHeight(fetchHeight + 500)
    }
  }, [scrollHeight])

  useEffect(() => {
    fetch(`https://desolate-plateau-74310.herokuapp.com/photos?page=${pageNum}`)
    .then(resp => resp.json())
    .then(photos => {
      console.log(photos)
      dispatch(fetchPhotosSuccess(photos))})
  },[pageNum])


  useEffect(() => {
    const token = localStorage.getItem('myToken')
    if(!token) return
    const reqObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    fetch('https://desolate-plateau-74310.herokuapp.com/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => dispatch(currentUser(user)))
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