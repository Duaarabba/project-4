import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import Restaurant from './components/restaurant/Restaurant.jsx'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/home/Home.jsx'
export default function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Navbar />
     <Routes>
     <Route path='/' element={<Home/>} />
      <Route path='/restaurant' element={<Restaurant/>} />
      <Route path='/products' element={<Products/>} />
       
     </Routes>
     
    
    </BrowserRouter>
     
    </div>
  )
}
