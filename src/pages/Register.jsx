import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="bg-gray-200 flex justify-center h-screen p-14">
        <div className="bg-white p-12 h-fit flex flex-col gap-8 rounded-md">
          <p className="text-center font-bold text-3xl">Create Account</p>
          <div className="w-[350px]">
            <input type="text" placeholder="Name" className="w-full border p-1" />
          </div>
          <div>
            <input type="email" placeholder="Email"  className="w-full border p-1"/>
          </div>
          <div>
            <input type="password" placeholder="Password" className="w-full border p-1" />
          </div>
          <div>
            <input type="text" placeholder="Repeat Password" className="w-full border p-1" />
          </div>
          <button className="text-center border bg-green-600 text-white rounded-md py-1 ">Register</button>
          <div className="flex justify-center mt-8">
            <p className="">Have already an account?</p>
            <Link to="/login" className="font-bold">Login here</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
