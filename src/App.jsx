import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import HomeAppliances from './components/home-appliances/HomeAppliances'
import Audio from './components/audio/Audio'
import Laptops from './components/laptops/Laptops'
import Smartphone from './components/smartphones/Smartphone'
import ErrorPage from './components/errorpage/ErrorPage'
import { Header } from './components/header/Header'
import { Navbar } from './components/header/navbar'
import { About } from './components/about/about'
import { Products } from './components/products/products'
import { Contact } from './components/contact/Contact'
import {Cart} from './cart'

function App() {

  return (
    <Router>
      <div className='home-header'>
        <Header />
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/homeappliances' element={<HomeAppliances />} />
        <Route path='/audio' element={<Audio />} />
        <Route path='/laptops' element={<Laptops />} />
        <Route path='/smartphones' element={<Smartphone />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
