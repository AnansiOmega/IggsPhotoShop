import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { fetchUserSuccess } from '../Actions/auth'
import { connect } from 'react-redux'

const Login = ({fetchUserSuccess}) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ signup, setSignup ] = useState(false)
    const history = useHistory()

    const handleChange = (e) => {
        switch(e.target.name){
            case 'username':
                setUsername(e.target.value)
            break;
            case 'email':
                setEmail(e.target.value)
            break;
            case 'password':
                setPassword(e.target.value)
            break;
            default:
            return
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        let reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }
        fetch('http://localhost:3000/auth', reqObj)
        .then(resp => resp.json())
        .then(user => {
            localStorage.setItem('myToken', user.token)
            fetchUserSuccess(user)
            history.push('/')
        })
    }

    const handleSignup = (e) => {
        e.preventDefault()
        let reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        }

        fetch('http://localhost:3000/users', reqObj)
        .then( resp => resp.json())
        .then( data => {
            fetch('http://localhost:3000/auth', reqObj)
            .then(resp => resp.json())
            .then(user => {
                localStorage.setItem('myToken', user.token)
                fetchUserSuccess(user)
                history.push('/')
            })
        })
    }

    return(
        <>
        {!signup ? 
        <Form onSubmit={handleLogin} className='login-form'>
            <label name='username'>Username:</label>
            <input onChange={handleChange} type="text" name="username" value={username}></input>
            <label>Password:</label>
            <input onChange={handleChange} type="password" name="password" value={password}></input>
            <Button inverted style={{ marginTop: '10px'}} type='submit'>Login</Button>
            <Button onClick={() => setSignup(true)} inverted style={{ marginTop: '10px'}} >Signup</Button>
        </Form>
        :
        <Form onSubmit={handleSignup} className='login-form'>
            <label name='username'>Username:</label>
            <input onChange={handleChange} type="text" name="username" value={username}></input>
            <label name='username'>Email:</label>
            <input onChange={handleChange} type="text" name="email" value={email}></input>
            <label>Password:</label>
            <input onChange={handleChange} type="password" name="password" value={password}></input>
            <Button inverted style={{ marginTop: '10px'}} type='submit'>Signup</Button>
        </Form>
        }
        </>
    )
}

const mapDispatchToProps = {
    fetchUserSuccess
}

export default connect(null, mapDispatchToProps)(Login)