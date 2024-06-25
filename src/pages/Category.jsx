import { RiArrowDropDownLine } from "react-icons/ri";
import vegetables from "../Data/Vegeatble";
import ProductCard from "../components/ProductCard";
import products from "../Data/Product";

const Category = () => {
  return (
    <>
      <div className="px-20 py-4">
        <div className="shadow-md ">
          <div className="flex items-center justify-between text-gray-400 ">
            <p>Vegetables & Fruits</p>
            <p>Dairy & Breakfast</p>
            <p>Munchies</p>
            <p>Cold Drinks & Juices</p>
            <p>Instant & Frozen Foods</p>
            <p>Tea,Coffe & Health Drinks</p>
            <p>Bakery & Biscuits</p>
            <div className="flex items-end justify-between">
              <p>More</p>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            {vegetables.map((vegetable, index) => (
              <div
                className="flex items-center gap-3 border-t border-l border-r px-4 w-[300px]"
                key={index}
              >
                <img
                  className="w-[50px] h-[50px] object-contain mt-2"
                  src={vegetable.image}
                />
                <p>{vegetable.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full  px-2">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Buy Fresh Vegetables Online</p>
              <div className="flex items-center justify-between gap-4">
                <p>Sort By</p>
                <select className="border">
                  <option value="volvo">Relevance</option>
                  <option value="saab">Price(Low to High)</option>
                  <option value="opel">Price(High to Low)</option>
                  <option value="audi">Discount(High to Low)</option>
                  <option>Name(A To Z)</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-14 flex-wrap mt-4 border p-2">
              {products.map((product,index) =><div key={index} className="">
              <ProductCard product={product}/>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
