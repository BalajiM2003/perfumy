
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'
import { Contact } from './Pages/Contact'
import { About } from './Pages/About'
import { Details } from './Pages/Details'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer'
import Scroll from './Scroll'
import { Payment } from './Pages/Payment'

function App() {

  return (
    <>
      <BrowserRouter>
        <Scroll />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/details" element={<Details />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
