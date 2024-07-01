import cartProducts from "../Data/CartProduct";
import CardCart from "../components/CartCard";

const Cart = () => {
  return (
    <>
      <div className="px-24 py-8 flex gap-4 bg-slate-200 border rounded-md">
        <div className="bg-white w-[70%] ">
          {cartProducts.map((product, index) => (
            <CardCart key={index} product={product} />
          ))}
          <div className="p-6 flex justify-end shadow-2xl ">
            <button className="text-white bg-green-600 py-3 px-20 ">PLACE ORDER</button>
          </div>
        </div>
        <div className="bg-white w-[30%] px-6 py-4 h-[400px] flex flex-col gap-6">
          <p className="text-gray-400 border-b pb-4">PRICE DETAILS</p>
          <div className="flex justify-between">
          <p className="font-medium">Price (2 items)</p>
          <p className="font-medium">₹749</p>
          </div>
          <div  className="flex justify-between">
          <p className="font-medium">Discount</p>
          <p className="text-green-700 font-semibold">− ₹331</p>
          </div>
          <div  className="flex justify-between">
          <p className="font-medium">Delivery Charges</p>
          <p className="text-green-700 font-semibold">Free</p>
          </div>
          <div  className="flex justify-between text-xl font-semibold py-4" style={{borderBottom:"1px dotted gray",borderTop:"1px dotted gray" }}>
          <p>Total Amount</p>
          <p>₹418</p>
          </div>
          <p className="text-green-500 font-bold">You will save ₹331 on this order</p>
        </div>

      </div>
    </>
  );
};
export default Cart;
