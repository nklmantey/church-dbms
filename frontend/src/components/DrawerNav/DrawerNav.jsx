import React from 'react'
import {
  Button, 
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  HStack,
  VStack,
  DrawerBody,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { IoWalletOutline } from 'react-icons/io5'
import { IoDocumentText } from 'react-icons/io5'
import { TiGroupOutline } from 'react-icons/ti'
import { TiUserAddOutline } from 'react-icons/ti'
import { TbEdit } from 'react-icons/tb'
import { TbBox } from 'react-icons/tb'
import { TbLogout } from 'react-icons/tb'
import './styles.scss'

const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    return (
      <>
        <Button ref={btnRef} colorScheme='messenger' onClick={onOpen} borderRadius='sm'>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='xs'
        >
          <DrawerOverlay/>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <HStack className='logo-container'>
                <img 
                  src={require('../../images/logo.png')}
                  alt='logo'
                />
                <h2>ACES DBMS</h2>
              </HStack>
            </DrawerHeader>
  
            <DrawerBody className='drawer-items'>
              <VStack spacing={5}>
                {/* finance */}
                <Link to="/finance">
                  <Button 
                    className='single-drawer-item' 
                    w='16vw' 
                    variant={'ghost'}
                  > 
                    <HStack spacing={4}>
                      <IoWalletOutline size={25} />
                      <h2>Finance</h2>
                    </HStack>
                  </Button>
                </Link>
                {/* members */}
                <Button 
                  className='single-drawer-item' 
                  w='16vw' 
                  variant={'ghost'}
                > 
                  <HStack spacing={4}>
                    <TiGroupOutline size={25} />
                    <h2>Members</h2>
                  </HStack>
                </Button>
                {/* evangelism */}
                <Link to="/evangelism">
                  <Button 
                    className='single-drawer-item' 
                    w='16vw'
                    variant={'ghost'}
                  > 
                    <HStack spacing={4}>
                      <TiUserAddOutline size={25} />
                      <h2>Evangelism</h2>
                    </HStack>
                  </Button>
                </Link>
                {/* inventory */}
                <Button 
                  className='single-drawer-item' 
                  w='16vw' 
                  variant={'ghost'}
                > 
                  <HStack spacing={4}>
                    <TbBox size={25} />
                    <h2>Inventory</h2>
                  </HStack>
                </Button>
                {/* attendance */}
                <Button 
                  className='single-drawer-item' 
                  w='16vw' 
                  variant={'ghost'}
                > 
                  <HStack spacing={4}>
                    <IoDocumentText size={20} />
                    <h2>Attendance</h2>
                  </HStack>
                </Button>
                {/* schedule */}
                <Button 
                  className='single-drawer-item' 
                   w='16vw' 
                   variant={'ghost'}
                > 
                  <HStack spacing={4}>
                    <TbEdit size={25} />
                    <h2>Schedule</h2>
                  </HStack>
                </Button>
                {/* log out button */}
                <Link to="/login">
                  <Button 
                    className='single-drawer-item' 
                    w='16vw' 
                    variant={'ghost'}
                  > 
                    <HStack spacing={4}>
                      <TbLogout size={25} color='red' />
                      <h2>Log Out</h2>
                    </HStack>
                  </Button>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default DrawerNav