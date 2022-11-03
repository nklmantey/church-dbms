import { Button, HStack, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import './styles.scss'
import { TiUserOutline, TiLockClosedOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <HStack className='main-container' spacing={0}>
      <HStack className='logo-container'>
        <img 
          src={require('../../images/logo.png')}
          alt='logo'
        />
        <h2>ACES DBMS</h2>
      </HStack>
      <div className='left-container'>
        <Stack spacing={2}>
          <h1 className='create-admin-account'>Welcome back, log in</h1>
          <div className='username-container'>
            <InputGroup className='username-input' w='80vw'>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <TiUserOutline className='icon' size={25} color='gray' />
                }
              />
              <Input 
                type='text' 
                placeholder='Username'
                border='2px'
                borderColor='gray.300'
                isInvalid={username.length === 0 ? false : username.length > 0 ? false : true} 
                errorBorderColor='red.300'
                size='lg'
                onChange={(e) => setUsername(e.target.value)}
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
                type='password' 
                placeholder='Password'
                isInvalid={password.length === 0 ? false : password.length > 8 ? false : true} 
                errorBorderColor='red.300'
                border='2px'
                borderColor='gray.300'
                size='lg'
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </div>
          </Stack>
          <Stack spacing={2}>
          <div>
            <Link to="/finance">
              <Button 
                className='login-btn' 
                color='white' size='lg' 
                colorScheme='blackAlpha' 
              >
                Log in
              </Button>
            </Link>
          </div>
          <div>
            <Button 
              className='login-google-btn' 
              color='black' 
              size='lg' 
              variant='outline' 
              colorScheme='blackAlpha'
              onClick={() => alert('button clicked')}
            >
              Log in with Google
            </Button>
          </div>
          <div>
            <Link to="/signup">
              <Button 
                  className='go-to-signup-link' 
                  color='blackAlpha.500'  
                  size='sm'
                  mt={'2vh'}
                  variant='link' 
                  colorScheme='blackAlpha'
                >
                  <h2>Already have an account? Go to signup</h2>
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

export default Login