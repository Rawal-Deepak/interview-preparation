export default function Login() {
  return (
    <>
      <div className="Login flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col items-center px-6 gap-y-6">
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            value=""
            placeholder="Enter Your Username"
            className="block border-0 shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 h-8 w-64 px-2 rounded-md"
          />
          <input
            type="password"
            name="password"
            value=""
            placeholder="Enter Your Password"
          />
          <button type="submit" name="button">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
