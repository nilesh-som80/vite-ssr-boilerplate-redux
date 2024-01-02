import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function App() {

  return (
      <Container>
      <Header/>
      <Outlet/>
      <Footer/>
      </Container>  
  )
}

export default App
