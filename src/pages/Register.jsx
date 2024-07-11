import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      };

      const { data } =await axios.post(
        "http://localhost:3000/api/users/register",
        formData
      );
      toast(data.message, { type: "success" });
      setRegisterData({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
    } catch (error) {
      toast(error.response.data.message, { type: "error" });
    }
  };

  return (
    <>
      <div className="bg-gray-200 flex justify-center h-screen p-14">
        <div className="bg-white p-12 h-fit flex flex-col gap-8 rounded-md">
          <p className="text-center font-bold text-3xl">Create Account</p>
          <div className="w-[350px]">
            <CustomInput
              placeholder="Name"
              className="w-full"
              name="name"
              value={registerData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <CustomInput
              type="email"
              placeholder="Email"
              className="w-full"
              name="email"
              value={registerData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <CustomInput
              type="password"
              placeholder="Password"
              className="w-full "
              name="password"
              value={registerData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <CustomInput
              placeholder="Repeat Password"
              className="w-full"
              name="repeatPassword"
              value={registerData.repeatPassword}
              onChange={handleChange}
            />
          </div>
          <button
            className="text-center border bg-green-600 text-white rounded-md py-1 "
            onClick={handleRegister}
          >
            Register
          </button>
          <div className="flex justify-center mt-2">
            <p className="">Have already an account?</p>
            <Link to="/login" className="font-bold">
              Login here
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Register;
