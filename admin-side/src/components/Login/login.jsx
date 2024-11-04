import { Link } from "react-router-dom";
import error_logo from "./error.svg";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (setter, id, errorID) => {
    return (event) => {
      setter(event.target.value);
      if (event.target.value) {
        const inputField = document.getElementById(id);
        inputField.classList.remove("ring-red-600");
        inputField.classList.remove("focus:ring-red-600");
        inputField.classList.add("ring-gray-300");
        inputField.classList.add("focus:ring-[#5652B7]");

        const errorLabel = document.getElementById(errorID);
        errorLabel.classList.remove("flex");
        errorLabel.classList.add("hidden");
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const validateField = (value, inputId, errorId, type = "text") => {
      const inputField = document.getElementById(inputId);
      const errorLabel = document.getElementById(errorId);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!value) {
        inputField.classList.remove("ring-gray-300", "focus:ring-[#5652B7]");
        inputField.classList.add("ring-red-600", "focus:ring-red-600");

        errorLabel.textContent = `${
          type !== "email" ? "This Field" : "Valid Email"
        } is required!`;
        errorLabel.classList.remove("hidden");
        errorLabel.classList.add("flex");
        return false;
      } else if (type === "email" && !emailRegex.test(value)) {
        inputField.classList.remove("ring-gray-300", "focus:ring-[#5652B7]");
        inputField.classList.add("ring-red-600", "focus:ring-red-600");

        errorLabel.textContent = "Please enter a valid email address!";
        errorLabel.classList.remove("hidden");
        errorLabel.classList.add("flex");
        return false;
      } else {
        inputField.classList.remove("ring-red-600", "focus:ring-red-600");
        inputField.classList.add("ring-gray-300", "focus:ring-[#5652B7]");

        errorLabel.classList.remove("flex");
        errorLabel.classList.add("hidden");
        return true;
      }
    };

    isValid = validateField(email, "email", "invalid_email", "email") && isValid;
    isValid = validateField(password, "password", "invalid_password") && isValid;

   if (isValid) {
    try {
      const response = await axios.post('https://easyhustler-admin-side.vercel.app/api/login-admin-user', {
        email,
        password,
      });
      if (response.data.decrypted === password && response.data.isAuthenticate) {
        toast.success("Login Successfull", {
          position: "top-right",
          autoClose: true
        });
        setTimeout(() => {
          window.location.href = "/users";
        }, (2000));
      }
      else {
        toast.error("You are not authorized user!", {
          position: "top-right",
          autoClose: true
        });
      }
    } catch (err) {
      toast.error("User not found!", {
        position: "top-right",
        autoClose: true,

      })
    }
    setEmail("");
    setPassword("");
   }
  }
  return (
    <>
      <div className="Login flex justify-center items-center w-screen h-screen bg-gray-100">
        <ToastContainer />
        <form>
          <div className="flex flex-col items-center px-14 gap-y-4 py-6 bg-white rounded-md shadow-md text-gray-700">
            <h1 className="text-2xl">Login</h1>
            <div className="space-y-1">
              <label htmlFor="username" className="pl-2 text">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Enter Your Email"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
                onChange={handleInputChange(setEmail, "email", "invalid_email")}
              />
              <label
                htmlFor="alert"
                className="text-red-600 text-sm pl-2 flex-row items-center hidden"
                id="invalid_email"
              >
                <img src={error_logo} alt="error" className="w-4 h-4 mr-1" />
                Incorrect Email
              </label>
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="pl-2 text">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Enter Your Password"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
                onChange={handleInputChange(setPassword, "password", "invalid_password")}
              />
              <label
                htmlFor="alert"
                className="text-red-600 text-sm pl-2 flex-row items-center hidden"
                id="invalid_password"
              >
                <img src={error_logo} alt="error" className="w-4 h-4 mr-1" />
                Incorrect Password
              </label>
            </div>
            <div className="my-1">
              <button
                type="submit"
                className="w-28 h-10 bg-[#5652B7] shadow-sm text-white rounded-md hover:bg-[#6461BD] hover:transition-all hover:w-[6.5rem] hover:h-[2.3rem]"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
            <div>
              <div className="text-sm text-[#5652B7] font-semibold flex justify-center mb-2 cursor-pointer">
                <p>Forgot Credentials?</p>
              </div>
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
