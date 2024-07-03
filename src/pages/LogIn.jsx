import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  return (
    <>
      <div className="bg-gray-200 p-20 flex justify-center border">
        <div className="bg-white flex flex-col items-center gap-6 max-w-fit p-12 rounded-md">
          <p className="text-xl font-semibold">HariHarStore</p>
          <p className="text-2xl">Sign in</p>
          <div class="relative flex items-center py-2">
            <div class="flex-grow border-t border-black"></div>
            <span class="flex-shrink mx-4 mb-2 text-gray-500">OR</span>
            <div class="flex-grow border-t border-black"></div>
          </div>
          <button className="border bg-blue-50 rounded-md flex items-center gap-2 px-3 py-1 mt-0">
            <FcGoogle />
            Continue with google
          </button>

          <div className="flex flex-col gap-12 mt-8">
            <input
              type="email"
              placeholder="Email"
              className="border bg-blue-50 w-[300px] py-1 px-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="border bg-blue-50 w-[300px] py-1 px-2 rounded-md"
            />
          </div>
          <button className="border bg-blue-50 w-[300px] py-2 px-2 rounded-md text-xs">
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
