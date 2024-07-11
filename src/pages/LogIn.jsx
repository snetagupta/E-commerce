import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import CustomInput from "../components/CustomInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData({ ...logInData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        email: logInData.email,
        password: logInData.password,
      };
      const { data } =await axios.post(
        "http://localhost:3000/api/users/login",
        formData
      );
      toast(data.message, { type: "success" });
      setLogInData({
        email: "",
        password: "",
      });
    } catch (error) {
      toast(error.response.data.message, { type: "error" });
    }
  };
  return (
    <>
      <div className="bg-gray-200 p-20 flex justify-center border">
        <div className="bg-white flex flex-col items-center gap-6 max-w-fit p-12 rounded-md">
          <p className="text-xl font-semibold text-yellow-400">
            HariHar<span className="text-green-600">Store</span>
          </p>
          <p className="text-2xl">Sign in</p>

          <div className="flex flex-col gap-10 mt-8">
            <CustomInput
              type="email"
              placeholder="Email"
              name="email"
              value={logInData.email}
              className="w-[300px] "
              onChange={handleChange}
            />
            <CustomInput
              type="password"
              placeholder="Password"
              name="password"
              value={logInData.password}
              className=" w-[300px] "
              onChange={handleChange}
            />
          </div>
          <button
            className="border bg-green-500 text-white w-[300px] mt-4 py-2 px-2 rounded-md text-xs"
            onClick={handleSubmit}
          >
            CONTINUE
          </button>
          <div className="flex gap-8">
            <button className="text-blue-950">Register here</button>
            <button className="text-blue-950">Forget password?</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default LogIn;
