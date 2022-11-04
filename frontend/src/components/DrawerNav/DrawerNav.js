import React, { useState } from 'react'
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
  DrawerFooter,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { IoWalletOutline } from 'react-icons/io5'
import { IoDocumentText } from 'react-icons/io5'
import { IoStatsChart } from 'react-icons/io5'
import { TiGroupOutline } from 'react-icons/ti'
import { TiUserAddOutline } from 'react-icons/ti'
import { TbEdit } from 'react-icons/tb'
import { TbBox } from 'react-icons/tb'
import { TbLogout } from 'react-icons/tb'
import './styles.scss'

const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    const [financeSelected, setFinanceSelected] = useState(false)
    const [membersSelected, setMembersSelected] = useState(false)
    const [evangelismSelected, setEvangelismSelected] = useState(false)
    const [inventorySeleted, setInventorySeleted] = useState(false)
    const [attendanceSelected, setAttendanceSelected] = useState(false)
    const [scheduleSelected, setScheduleSelected] = useState(false)


    //individual state handlers
    const handleFinance = () => {
      setFinanceSelected(!financeSelected)
    }
    const handleMembers = () => {
      setMembersSelected(!membersSelected)
    }
    const handleEvang = () => {
      setEvangelismSelected(!evangelismSelected)
    }
    const handleInv = () => {
      setInventorySeleted(!inventorySeleted)
    }
    const handleAtt = () => {
      setAttendanceSelected(!attendanceSelected)
    }
    const handleSch = () => {
      setScheduleSelected(!scheduleSelected)
    }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='messenger' onClick={onOpen} borderRadius='full'>
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
                <Button className='single-drawer-item' bgColor={financeSelected ? 'red.300' : null} onClick={handleFinance} w='16vw' variant={'ghost'}> 
                  <HStack spacing={4}>
                    <IoWalletOutline style={{ color: financeSelected ? 'white' : null }} size={25} />
                    <h2 style={{ color: financeSelected ? 'white' : null }}>Finance</h2>
                  </HStack>
                </Button>
                {/* members */}
                <Button className='single-drawer-item' bgColor={membersSelected ? 'red.300' : null} onClick={handleMembers} w='16vw' variant={'ghost'}> 
                  <HStack spacing={4}>
                    <TiGroupOutline style={{ color: membersSelected ? 'white' : null }} size={25} />
                    <h2 style={{ color: membersSelected ? 'white' : null }}>Members</h2>
                  </HStack>
                </Button>
                {/* evangelism */}
                <Button className='single-drawer-item' bgColor={evangelismSelected ? 'red.300' : null} onClick={handleEvang} w='16vw' variant={'ghost'}> 
                  <HStack spacing={4}>
                    <TiUserAddOutline style={{ color: evangelismSelected ? 'white' : null }} size={25} />
                    <h2 style={{ color: evangelismSelected ? 'white' : null }}>Evangelism</h2>
                  </HStack>
                </Button>
                {/* inventory */}
                <Button className='single-drawer-item' bgColor={inventorySeleted ? 'red.300' : null} onClick={handleInv} w='16vw' variant={'ghost'}> 
                  <HStack spacing={4}>
                    <TbBox style={{ color: inventorySeleted ? 'white' : null }} size={25} />
                    <h2 style={{ color: inventorySeleted ? 'white' : null }}>Inventory</h2>
                  </HStack>
                </Button>
                {/* attendance */}
                <Button className='single-drawer-item' bgColor={attendanceSelected ? 'red.300' : null} onClick={handleAtt} w='16vw' variant={'ghost'}> 
                  <HStack spacing={4}>
                    <IoDocumentText style={{ color: attendanceSelected ? 'white' : null }} size={20} />
                    <h2 style={{ color: attendanceSelected ? 'white' : null }}>Attendance</h2>
                  </HStack>
                </Button>
                {/* schedule */}
                <Button className='single-drawer-item' bgColor={scheduleSelected ? 'red.300' : null} onClick={handleSch} w='16vw' variant={'ghost'}> 
                  <HStack spacing={4}>
                    <TbEdit style={{ color: scheduleSelected ? 'white' : null }} size={25} />
                    <h2 style={{ color: scheduleSelected ? 'white' : null }}>Schedule</h2>
                  </HStack>
                </Button>
                {/* log out button */}
                <Link to="/login">
                  <Button className='single-drawer-item' w='16vw' variant={'ghost'}> 
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