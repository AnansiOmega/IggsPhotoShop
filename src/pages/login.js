import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { fetchUserSuccess } from '../Actions/auth'
import { useDispatch } from 'react-redux'

export const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ signup, setSignup ] = useState(false)
    const [ signupErrors, setSignupErrors ] = useState([])
    const [ loginErrors, setLoginErrors ] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()

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
        fetch('https://desolate-plateau-74310.herokuapp.com/auth', reqObj)
        .then(resp => resp.json())
        .then(user => {
            if(user.error){
                setLoginErrors(user.error)
            } else {
                localStorage.setItem('myToken', user.token)
                dispatch(fetchUserSuccess(user))
                history.push('/')
            }
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

        fetch('https://desolate-plateau-74310.herokuapp.com/users', reqObj)
        .then( resp => resp.json())
        .then( data => {
            if(data.errors){
                setSignupErrors(data.errors)
            return
            }
            fetch('https://desolate-plateau-74310.herokuapp.com/auth', reqObj)
            .then(resp => resp.json())
            .then(user => {
                if(user.errors){
                    setSignupErrors(user.errors)
                return
                } else {
                    localStorage.setItem('myToken', user.token)
                    dispatch(fetchUserSuccess(user))
                    history.push('/')
                }
            })
        })
    }

    const renderErrors = () => {
        if(signupErrors){
            return signupErrors.map(error => error.split(' ')[0])
        } else {
            return []
        }
    }

    return(
        <>
        {!signup ? 
        <>
        <h4 style={{color: 'red'}}>{loginErrors}</h4>
        <Form onSubmit={handleLogin} className='login-form'>
            <label name='username'>Username:</label>
            <input onChange={handleChange} type="text" name="username" value={username}></input>
            <label>Password:</label>
            <input onChange={handleChange} type="password" name="password" value={password}></input>
            <Button inverted style={{ marginTop: '10px'}} type='submit'>Login</Button>
            <Button onClick={() => setSignup(true)} inverted style={{ marginTop: '10px'}}>Signup</Button>
        </Form>
        </>
        :
        <Form className='login-form' onSubmit={handleSignup}>
            <label>Username:</label>
            <Form.Input
                error={renderErrors().includes('Username') ? "Username must be valid" : false }
                fluid
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
            />
            <label>Password:</label>
            <Form.Input
                error={renderErrors().includes('Password') ? "Password can't be blank" : false }
                fluid
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
            />
            <label>Email:</label>
             <Form.Input
                error={renderErrors().includes('Email') ? "Email must be valid" : false  }
                fluid
                type='text'
                name='email'
                value={email}
                onChange={handleChange}
            />
            <Button inverted style={{ marginTop: '10px'}} type='submit'>Signup</Button>
            </Form>
        }
        </>
    )
}