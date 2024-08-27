import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Routes from './Routes'
import Footer from './component/Footer/Footer'
import './App.css'
import ScrollToTop from './component/ScrollToTop'
import UserContextProvider from './context/UserContextProvider'


const App = () => {
  return (
    <UserContextProvider>
      <ScrollToTop/>
      <Navbar/>
      <Routes/>
      <Footer/>
    </UserContextProvider>
  )
}

export default App
