import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import ErrorPage from './components/errorpage/ErrorPage'
import { Header } from './components/header/Header'
import { Navbar } from './components/header/Navbar'
import { About } from './components/about/about'
import { Contact } from './components/contact/Contact'
import {Cart} from './cart'
import { SingleProductPage } from './singleproductpage/SingleProductPage'

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
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/singleproduct/:id' element={<SingleProductPage/>}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
