import { Link } from "react-router-dom";
import error_logo from "./error.svg";

function Login() {
  return (
    <>
      <div className="Login flex justify-center items-center w-screen h-screen bg-gray-100">
        <form>
          <div className="flex flex-col items-center px-14 gap-y-6 py-6 bg-white rounded-md shadow-md text-gray-700">
            <h1 className="text-2xl">Login</h1>
            <div className="space-y-1">
              <label htmlFor="username" className="pl-2 text">
                Username/Email:
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter Your Username"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
              />
              <label
                htmlFor="alert"
                className="text-red-600 text-sm pl-2 flex flex-row items-center hidden"
              >
                <img src={error_logo} alt="error" className="w-4 h-4 mr-1" />
                Incorrect Username
              </label>
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="pl-2 text">
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
              />
              <label
                htmlFor="alert"
                className="text-red-600 text-sm pl-2 flex-row items-center hidden"
              >
                <img src={error_logo} alt="error" className="w-4 h-4 mr-1" />
                Incorrect Username
              </label>
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="w-28 h-10 bg-[#5652B7] shadow-sm text-white rounded-md hover:bg-[#6461BD] hover:transition-all hover:w-[6.5rem] hover:h-[2.3rem]"
              >
                Sign in
              </button>
            </div>
            <div>
              <p>
                Don't have account?{" "}
                <Link
                  to="/register"
                  className="text-[#5652B7] cursor-pointer font-semibold"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
