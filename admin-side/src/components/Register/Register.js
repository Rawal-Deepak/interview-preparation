import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="Login flex justify-center items-center w-screen h-screen bg-gray-100">
        <form>
          <div className="flex flex-col items-center px-14 gap-y-6 py-6 bg-white rounded-md shadow-md text-gray-700">
            <h1 className="text-2xl">Register</h1>

            {/* Username */}
            <div className="space-y-1">
              <label htmlFor="username" className="pl-2 text">
                Username:
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter Your Username"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="pl-2 text">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
                required
              />
            </div>

            {/* Password */}
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
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label htmlFor="confirm_password" className="pl-2 text">
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Enter Your Confirmation Password"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
              />
            </div>

            <div className="my-2">
              <input
                type="submit"
                name="submit"
                value="Sign up"
                className="w-28 h-10 bg-[#5652B7] shadow-sm text-white rounded-md hover:bg-[#6461BD] hover:transition-all hover:w-[6.5rem] hover:h-[2.3rem] cursor-pointer"
              />
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#5652B7] cursor-pointer font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
