import './App.css'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Promotions from './components/Promotions/Promotions'
import Contact from './components/Contact/Contact'
import DetailBag from './components/ProductDetails/DetailBag'
import DetailCard from './components/ProductDetails/DetailCard'
import DetailMagnet from './components/ProductDetails/DetailMagnet'
import DetailSliper from './components/ProductDetails/DetailSliper'
import DetailSneaker from './components/ProductDetails/DetailSneaker'
import DetailStandy from './components/ProductDetails/DetailStandy'
import DetailSticker from './components/ProductDetails/DetailSticker'
import DetailTshirt from './components/ProductDetails/DetailTshirt'
import DetailCart from './components/Cart/DetailCart'

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
        <Route path="/ProductDetails/DetailBag" element={<DetailBag />} />
        <Route path="/ProductDetails/DetailCard" element={<DetailCard />} />
        <Route path="/ProductDetails/DetailMagnet" element={<DetailMagnet />} />
        <Route path="/ProductDetails/DetailSliper" element={<DetailSliper />} />
        <Route path="/ProductDetails/DetailSneaker" element={<DetailSneaker />} />
        <Route path="/ProductDetails/DetailStandy" element={<DetailStandy />} />
        <Route path="/ProductDetails/DetailSticker" element={<DetailSticker />} />
        <Route path="/ProductDetails/DetailTshirt" element={<DetailTshirt />} />
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
