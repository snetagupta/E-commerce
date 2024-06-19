import { IoSearch } from "react-icons/io5";
import { TbShoppingCart } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-12 py-4 gap-20 border-b-2">
        <h1 className="text-4xl font-bold text-yellow-400">HariHar<span className="text-green-600">Store</span></h1>

        <div className="text-lg">
          <p className="font-bold">Delivery in 8 minutes</p>
          <p className="flex items-center gap-2">Dabra,India<IoMdArrowDropdown/></p>
        </div>
        <div className="border border-gray-200 bg-gray-100 rounded-md p-2 flex-1 flex item-center gap-2">
          <IoSearch className="text-xl mt-0.5 "/>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-black "
          />
        </div>
        <div className="flex items-center justify-between gap-12 text-xl">
          <button className="">LogIn</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <TbShoppingCart className="text-white" />
            Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
