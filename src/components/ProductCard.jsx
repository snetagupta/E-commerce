const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border p-3 w-[200px] h-[320px] rounded-md flex flex-col justify-between relative">
        {product.discount && (
          <div>
            <p className="bg-blue-500 text-white px-1 py-[1px] absolute top-0 left-3 text-[10px] font-semibold">
              <p>{product.discount} </p>
              <p>OFF</p>
            </p>
          </div>
        )}
        <div className="">
          <img src={product.image} />
          <p className="font-bold text-[15px]">
            {product.length <= 25
              ? `${product.name}`
              : `${product.name.slice(0, 25)}...`}
          </p>
        </div>
        <div>
          <p className="font-light text-gray-500 text-[14px] mb-2">
            {product.quantity}g
          </p>
          <div className="flex items-center justify-between ">
            <p className="font-semibold">₹{product.price}</p>
            <button className="border border-green-700 bg-green-50 text-green-700 px-3 py-1 rounded-md uppercase text-[15px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
