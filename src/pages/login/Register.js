import { Box, Button, Container, LinearProgress, Paper, styled, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../../features/auth/authSlice'


const LoginContainer = styled(Box)(()=>({
    height:"75vh",
    margin:"auto",  
    display:"flex",
    justifyContent:"center"
}))

const FormContainer = styled(Box)(()=>({
    marginTop:"30px",
    padding:"20px"
}))

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password:'',
        password2:''
    })
    const {firstname, lastname, email, password, password2} = formData
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isLoading, isSuccess, message, isError} = useSelector(state => state.auth)

    const handleChange =(e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess){
            navigate('/login')
        }

        dispatch(reset())

    }, [isSuccess, message, isError, dispatch, navigate])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== password2){
            toast.error('Passwords do not march')
        } else {
            const userData = {
                firstname,
                lastname,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    if (isLoading){
       return  <LinearProgress />
    }

  return (
    <React.Fragment>
            <Container maxWidth={'lg'}>
                <LoginContainer>
                    <FormContainer component={Paper}  maxWidth={400} justifySelf="center">
                        <h2 style={{marginTop:0}}>SIGN UP</h2>

                        <form onSubmit={submitHandler}>
                        <TextField 
                         required
                         variant='outlined'
                         margin='dense' 
                         type='text'
                         id='firstname'
                         name='firstname'
                         value={firstname}
                         fullWidth 
                         label="Firstname"
                         
                         onChange={handleChange}
                         />

                       <TextField 
                         required
                         variant='outlined'
                         margin='dense' 
                         type='text'
                         id='lastname'
                         name='lastname'
                         value={lastname}
                         fullWidth
                         label="Lastname"
                         
                         onChange={handleChange}
                         />

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
                         <TextField 
                         required
                         variant='outlined'
                         margin='dense' 
                         type='password'
                         id='password2'
                         name='password2'
                         value={password2}
                         fullWidth
                         label="Confirm Password"
                         
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

export default Register