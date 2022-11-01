import { Button, HStack, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import './styles.scss'
import { TiUserOutline, TiLockClosedOutline } from "react-icons/ti";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <HStack className='main-container' spacing={0}>
      <HStack className='logo-container'>
        <img 
          src={require('../../images/logo.png')}
        />
        <h2>ACES DBMS</h2>
      </HStack>
      <div className='left-container'>
        <Stack spacing={2}>
          <h1 className='create-account'>Create admin account</h1>
          <div className='username-container'>
            <InputGroup className='username-input' w='80vw'>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <TiUserOutline className='icon' size={25} />
                }
              />
              <Input 
                type='text' 
                placeholder='Username'
                border='2px'
                borderColor='grey'
                size='lg'
                onChange={(e) => e.target.value}
              />
            </InputGroup>
          </div>
          <div className='pwd-container'>
            <InputGroup className='pwd-input' w='80vw'>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <TiLockClosedOutline className='icon' size={25} />
                }
              />
              <Input 
                type='password' 
                placeholder='Password'
                border='2px'
                borderColor='grey'
                size='lg'
                onChange={(e) => e.target.value}
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
              onClick={() => alert('button clicked')}
            >
              Create account
            </Button>
          </div>
          <div className='su-btn-container'>
            <Button 
              className='signup-btn' 
              color='black' 
              size='lg' 
              variant='outline' 
              colorScheme='blackAlpha'
              onClick={() => alert('button clicked')}
            >
              Sign up with Google
            </Button>
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