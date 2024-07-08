import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import CustomInput from "../components/CustomInput";

const LogIn = () => {
  const[logInData,setLogInData] = useState({
    email:"",
    password:"",
  })
  const handleChange=(e) =>{
    const{name,value} = e.target;
    setLogInData({...logInData,[name]:value})
  }
  const handleSubmit =(e)=>{
   e.preventDefault();
   console.log(logInData)
  }
  return (
    <>
      <div className="bg-gray-200 p-20 flex justify-center border">
        <div className="bg-white flex flex-col items-center gap-6 max-w-fit p-12 rounded-md">
          <p className="text-xl font-semibold text-yellow-400">HariHar<span className="text-green-600">Store</span></p>
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
          <button className="border bg-green-500 text-white w-[300px] py-2 px-2 rounded-md text-xs" onClick={handleSubmit} >
            CONTINUE
          </button>
          <div className="flex gap-8">
            <button className="text-blue-950">Register here</button>
            <button className="text-blue-950">Forget password?</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogIn;
