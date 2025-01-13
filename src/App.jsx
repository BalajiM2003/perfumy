
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
        <div style={{
          backgroundImage: "url('/perfumy/assets/bg.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}>
          <Routes>
            <Route path="/perfumy" element={<Home />} />
            <Route path="/perfumy/product" element={<Product />} />
            <Route path="/perfumy/contact" element={<Contact />} />
            <Route path="/perfumy/about" element={<About />} />
            <Route path="/perfumy/product/details" element={<Details />} />
            <Route path='/perfumy/payment' element={<Payment />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
