import React, { useState } from 'react'
import './styles.scss'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import { Button, Input, VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createFinanceData } from '../../utils/actions/finance'

const Finance = () => {
  const dispatch = useDispatch();
  const [financeData, setFinanceData] = useState({
    type: '',
    totalAmount: 0,
    date: ''
  })

  const finance = useSelector((state) => state.finance);
  console.log(finance)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createFinanceData(financeData))
  }

  return(
    <div>
      <DrawerNav />

      <VStack mt='5vh' ml='5vw'>
        <Input 
          type={'text'}
          placeholder={'type'}
          w='20vw'
          border={'1px'}
          borderColor='blue.100'
          value={financeData.type}
          onChange={(e) => setFinanceData({ ...financeData, type: e.target.value })}
        />
        <Input 
          type={'number'}
          placeholder={'amount'}
          w='20vw'
          border={'1px'}
          borderColor='blue.100'
          value={financeData.totalAmount}
          onChange={(e) => setFinanceData({ ...financeData, totalAmount: e.target.value })}
        />
        <Input 
          type={'date'}
          placeholder={'date'}
          w='20vw'
          border={'1px'}
          borderColor='blue.100'
          value={financeData.date}
          onChange={(e) => setFinanceData({ ...financeData, date: e.target.value })}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </VStack>
    </div>
  )
}

export default Finance