import { Box, Button, Container, LinearProgress, Paper, styled, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'


const LoginContainer = styled(Box)(()=>({
    height:"50vh",
    margin:"auto",
    display:"flex",
    justifyContent:"center"
}))

const FormContainer = styled(Box)(()=>({
    marginTop:"80px",
    padding:"10px"
}))

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password:''
    })

    const {email, password} = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isSuccess, message, isError} = useSelector(state => state.auth)

    const handleChange =(e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))

    }

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    }, [user, isSuccess, message, isError, dispatch, navigate])

    if (isLoading){
      return  <LinearProgress />
    }


  return (
    <React.Fragment>
            <Container maxWidth={'lg'}>
                <LoginContainer>
                    <FormContainer component={Paper}  maxWidth={400}  justifySelf="center">
                        <h2 style={{marginTop:0}}>SIGN IN</h2>

                        <form onSubmit={submitHandler}>

                       <TextField 
                         required
                         variant='outlined'
                         margin='dense' 
                         type='email'
                         id='email'
                         name='email'
                         value={email}
                         fullWidth
                         label="Email"
                         
                         onChange={handleChange}
                         />

                        <TextField 
                         required
                         variant='outlined'
                         margin='dense' 
                         type='password'
                         id='password'
                         name='password'
                         value={password}
                         fullWidth
                         label="Password"
                         
                         onChange={handleChange}
                         />
                        
                        <Button color='primary' variant='contained' type='submit'>Submit</Button>
                        </form>
                        
                    </FormContainer> 
                </LoginContainer>
            </Container>
    </React.Fragment>
  )
}

export default Login