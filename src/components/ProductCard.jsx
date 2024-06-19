const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border p-3 w-[200px] h-[320px] rounded-md flex flex-col justify-between ">
        <div className="">
          <img src={product.image} />
          <p className="font-bold">{product.name}</p>
          <p className="font-light text-gray-500">{product.quantity}g</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">₹{product.price}</p>
          <button className="border border-green-700 bg-green-50 text-green-700 px-3 py-1 rounded-md">
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
