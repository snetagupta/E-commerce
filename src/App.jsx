import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import ProductDetails from "./components/ProductDetails"
import LogIn from "./pages/LogIn"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


const App =()=> {


  return (
    <>

    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/product" element={<ProductDetails/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
