import { Button, HStack, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import './styles.scss'
import { TiUserOutline, TiLockClosedOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <HStack className='main-container' spacing={0}>
      <HStack className='logo-container'>
        <img 
          src={require('../../images/logo.png')}
          alt='log'
        />
        <h2>ACES DBMS</h2>
      </HStack>
      <div className='left-container'>
        <Stack spacing={2}>
          <h1 className='create-admin-account'>Create admin account</h1>
          <div className='username-container'>
            <InputGroup className='username-input' w='80vw'>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <TiUserOutline className='icon' size={25} color='gray' />
                }
              />
              <Input 
                name='username'
                type='text' 
                placeholder='Username'
                value={username}
                border='2px'
                borderColor='gray.300'
                isInvalid={username.length === 0 ? false : username.length > 0 ? false : true} 
                errorBorderColor='red.300'
                size='lg'
                onChange={onChange}
              />
            </InputGroup>
          </div>
          <div className='pwd-container'>
            <InputGroup className='pwd-input' w='80vw'>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <TiLockClosedOutline className='icon' size={25} color='gray' />
                }
              />
              <Input
                name='password'
                type='password' 
                placeholder='Password'
                value={password}
                isInvalid={password.length === 0 ? false : password.length > 8 ? false : true} 
                errorBorderColor='red.300'
                border='2px'
                borderColor='gray.300'
                size='lg'
                onChange={onChange}
              />
            </InputGroup>
          </div>
          </Stack>
          <Stack spacing={2}>
          <div className='ca-btn-container'>
            <Button 
              className='create-account-btn' 
              color='white' size='lg' 
              colorScheme='blackAlpha'
              type='submit'
              onClick={onSubmit}
            >
              Create account
            </Button>
          </div>
          <div>
            <Link to="/login">
              <Button 
                  className='go-to-login-link' 
                  color='blackAlpha.500'  
                  size='sm'
                  mt={'2vh'}
                  variant='link' 
                  colorScheme='blackAlpha'
                >
                  <h2>Already have an account? Go to login</h2>
              </Button>
            </Link>
          </div>
        </Stack>
      </div>
      <div className='right-container'>
        <img 
          src={require('../../images/img.png')}
          alt='people in church'
          className='img'
        />
      </div>
    </HStack>
  )
}

export default Signup