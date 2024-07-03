import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const CardCart = ({ product }) => {
  return (
    <>
      <div className="px-6 py-4 flex gap-8 border-b my-2">
        <div className="flex flex-col gap-5 ">
          <div>
            <img className="w-[100px] h-[100px] object-contain" src={product.image} />
          </div>
          <div className="flex items-center gap-2">
            <div className=" border border-gray-400 rounded-full p-1">
              <GrFormSubtract className=" " />
            </div>
            <p className="border  border-gray-400 px-5 ">1</p>
            <div className=" border rounded-full  border-gray-400 p-1">
              <IoIosAdd />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg">{product.name}</p>
            <p className="text-gray-400">{product.quantity}</p>
          </div>

          <p className="text-gray-400">{product.seller}</p>
          <div className="flex gap-2">
            <p className="text-gray-400">{product.actualprice}</p>
            <p className=" text-black font-semibold">{product.price}</p>
            <p className="text-green-600">{product.discount}</p>
          </div>
          <div className="flex gap-4 text-black font-semibold">
            <button>SAVE FOR LATER</button>
            <button>REMOVE</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardCart;
