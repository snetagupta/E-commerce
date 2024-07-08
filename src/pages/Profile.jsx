import { useState } from "react";
import CustomInput from "../components/CustomInput";

const Profile = () => {
  const [data, setData] = useState({
    name: "Avinash Ullu",
    email: "Avinashyede@gmail.com",
    phoneNumber: "8770123451",
    userType: "Admin",
    state: "",
    city: "",
    street: "",
    building: "",
    houseNumber: "",
    pinCode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    
  };
  const handleUpdate =(e) =>{
   e.preventDefault();
   console.log(data)
   setData({
    name: "",
    email: "",
    phoneNumber: "",
    userType: "",
    state: "",
    city: "",
    street: "",
    building: "",
    houseNumber: "",
    pinCode: "",
  })
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 gap-8">
        <div className="flex gap-20">
          <CustomInput
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
            
          />
          <CustomInput
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            readOnly={true}
          />
        </div>
        <div className="flex gap-20">
          <CustomInput
            label="Phone Number"
            type="number"
            placeholder="Phone"
            name="phoneNumber"
            onChange={handleChange}
            value={data.phoneNumber}
          />
          <CustomInput
            label="UserType"
            placeholder="UserType"
            name="userType"
            onChange={handleChange}
            value={data.userType}
            readOnly={true}
          />
        </div>
        <div className="flex gap-20">
          <CustomInput
            label="State"
            placeholder="State"
            name="state"
            onChange={handleChange}
            value={data.state}
          />
          <CustomInput
            label="City"
            placeholder="city"
            name="city"
            onChange={handleChange}
            value={data.city}
          />
        </div>
        <div className="flex gap-20">
          <CustomInput
            label="Street"
            placeholder="Street"
            name="street"
            onChange={handleChange}
            value={data.street}
          />
          <CustomInput
            label="Building"
            placeholder="Building"
            name="building"
            onChange={handleChange}
            value={data.building}
          />
        </div>
        <div className="flex gap-20">
          <CustomInput
            label="House Number"
            placeholder="House Number"
            name="houseNumber"
            onChange={handleChange}
            value={data.houseNumber}
          />
          <CustomInput
            label="PinCode"
            type="number"
            placeholder="PinCode"
            name="pinCode"
            onChange={handleChange}
            value={data.pinCode}
          />
        </div>

        <button className="bg-green-600 text-white py-1 px-10 rounded-md" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </>
  );
};
export default Profile;
