import Ad from "../components/Ad";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import ProductSection from "../components/ProductSection";

const Home = () =>{
    return(
        <>
        <NavBar/>
        <Ad/>
        <Cards/>
        <Categories/>
        <ProductSection/>
        </>
    )
}
export default Home;