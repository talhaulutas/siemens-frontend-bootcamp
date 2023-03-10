import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Router from './Router'
import Menu from './components/Menu'


function App() {

  return <BrowserRouter>
  <Menu />
  <Router />
    </BrowserRouter>

  
}

export default App
