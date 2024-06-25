import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import ProductDetails from "./components/ProductDetails"


const App =()=> {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/product" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
