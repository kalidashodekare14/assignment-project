import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  const handleCoinAdd = (price) => {
    setCount(count + 6000)
    toast.success("Coin Successfuly Added");
  }

  const handleCoinMinus = (price) => {
    setCount(prevCount => Math.max(prevCount - price, 0))
  }

  return (
    <div className='mx-32'>
      <Navbar count={count}></Navbar>
      <Banner addToCart={handleCoinAdd}></Banner>
      <Main removeCount={handleCoinMinus} count={count}></Main>
      <ToastContainer />
    </div>
  )
}

export default App
