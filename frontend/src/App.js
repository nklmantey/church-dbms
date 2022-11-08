import React, { useEffect } from 'react'
import Login from './pages/Login/Login'
import { useDispatch } from 'react-redux'

//actions
import { fetchFinanceData } from './utils/actions/finance'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFinanceData());
  }, [dispatch]);

  return (
    <div>
      <Login />
    </div>    
  )
}

export default App