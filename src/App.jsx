import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductAdd from './components/ProductAdd/ProductAdd';

function App() {
  return (
    <>
         <Navbar/>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='*' element ={<p>Not Found</p>}/>
                <Route path="/product-detail/:id" element={<ProductDetail />} ></Route>
                <Route path="/product-add/:id" element={<ProductAdd />} ></Route>

            </Routes>
          </BrowserRouter>
          </>
  );
}

export default App;