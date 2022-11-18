import React from 'react'
import { Box, Center, Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
    <Center mt={'50vh'}>
      <Spinner
          thickness='10px'
          speed='0.5s'
          emptyColor='gray.200'
          color='green.500'
          size='xl'
      />
    </Center>
  )
}

export default LoadingSpinner