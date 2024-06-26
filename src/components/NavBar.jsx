import { IoSearch } from "react-icons/io5";
import { TbShoppingCart } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const logedIn = true;
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="flex items-center justify-between px-12 py-4 gap-20 border-b-2">
        <h1 className="text-4xl font-bold text-yellow-400">
          HariHar<span className="text-green-600">Store</span>
        </h1>

        <div className="text-lg">
          <p className="font-bold">Delivery in 8 minutes</p>
          <p className="flex items-center gap-2">
            Dabra,India
            <IoMdArrowDropdown />
          </p>
        </div>
        <div className="border border-gray-200 bg-gray-100 rounded-md p-2 flex-1 flex item-center gap-2">
          <IoSearch className="text-xl mt-0.5 " />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-black "
          />
        </div>
        <div className="flex items-center justify-between gap-12 text-xl">
          {logedIn ? (
            <div className="relative">
              <button
                className="text-green-600 text-[18px]"
                onClick={handleToggle}
              >
                Account
              </button>
              {toggle && (
                <div className="absolute bottom-[-220px] left-[-50px] bg-white px-5 py-3 text-[15px] text-gray-500 flex flex-col gap-3 shadow-lg rounded-md w-[200px]">
                  <span>
                    <p className="font-bold text-black text-lg">My Account</p>
                    <p>1234567890</p>
                  </span>
                  <p>My Orders</p>
                  <p>FAQ's</p>
                  <p>Logout</p>
                </div>
              )}
            </div>
          ) : (
            <button className="text-green-600">Login</button>
          )}
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
