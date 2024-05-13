import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Cart } from './components/Cart'

function App() {
  const[card,setCard]=useState([]);
  

  return (
    <>
      <BrowserRouter>
      <Header card={card}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home card={card} setCard={setCard}/>} />
          <Route path="/Cart" element={<Cart card={card} setCard={setCard}/>} />
        </Routes>
        
      </div>
      </BrowserRouter>
      <div className="name">
      <p>Designed by <span> Prabu Kannan</span></p>
    </div>
    </>
  )
}

export default App
