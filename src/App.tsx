import './App.css'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Promotions from './components/Promotions/Promotions'
import Contact from './components/Contact/Contact'
import DetailCart from './components/Cart/DetailCart'
import ProductDetails from './components/ProductDetails/ProductDetails'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Promotions" element={<Promotions />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart/DetailCart" element={<DetailCart />} />
        <Route path='/ProductDetails/:index' element={<ProductDetails />} />
      </Routes>
    </>
  )
}
function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WrappedApp
