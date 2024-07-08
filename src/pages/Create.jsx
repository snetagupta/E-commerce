import { useState } from "react";
import CustomInput from "../components/CustomInput";

const Create = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    brand: "",
    stock: "",
    tags: [],
    thumbnail: null,
    images: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({...productData,[name]:value})
   
  };
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(productData)

  }
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-40 px-10 py-10 gap-8">
        <div className="w-[600px]">
          <div className="w-full h-40 border bg-gray-300 border-green-500 rounded-md"></div>
          <div className="flex gap-8 mt-4">
            <div className="w-[30%] h-40 border  bg-gray-300 border-green-500 rounded-md"></div>
            <div className="w-[30%] h-40 border  bg-gray-300 border-green-500 rounded-md"></div>
            <div className="w-[30%] h-40 border  bg-gray-300 border-green-500 rounded-md"></div>
          </div>
        </div>
        <div className="flex gap-20">
          <CustomInput
            label="Product Name"
            placeholder="Product Name"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
          <CustomInput
            label="Product Price"
            placeholder="Product Price"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-20">
          <CustomInput
            label="Description"
            placeholder="Description"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
          <CustomInput
            label="Category"
            placeholder="Category"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-20">
          <CustomInput
            label="Brand"
            placeholder="Brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
          />
          <CustomInput
            label="Stock"
            placeholder="Stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
          />
        </div>
        <div className="border h-20 w-[600px] rounded-md"></div>
        <button className="bg-green-600 text-white py-1 px-10 rounded-md" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
export default Create;
