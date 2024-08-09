import './App.css'
import Boton from './components/Boton'
import Cart from './components/Cart'
import ItemCount from './components/ItemCount/ItemCount'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

 

function App() {

  return (
    
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryName' element={<ItemListContainer/>} />      
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />      
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/*' element={<h1>Sitio no encontrado.</h1>} />       
      </Routes>

    
    </BrowserRouter>
    
  )
}

export default App



