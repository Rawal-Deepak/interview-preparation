import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
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

  const handleRegister = async (event) => {
    event.preventDefault();
    let isValid = true;
    // Form validation
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

    isValid =
      validateField(username, "username", "invalid_username") && isValid;
    isValid =
      validateField(email, "email", "invalid_email", "email") && isValid;
    isValid =
      validateField(password, "password", "invalid_password") && isValid;

    // if all input are valid
    if (isValid) {
      const formData = {
        username: username,
        email: email,
        password: password,
      };
      try {
        await fetch(
          "https://easyhustler-admin-side.vercel.app/api/register-admin-data",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      } catch (error) {
        toast.error("Error : " + error, {
          position: "top-right",
          autoClose: true
        });
      }
      setUsername("");
      setEmail("");
      setPassword("");

      toast.success("Wait for Authentication from administartion!", {
        position: "top-right",
        autoClose: true,
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, (4000));
    }
  };

  return (
    <>
      <div className="Login flex justify-center items-center w-screen h-screen bg-gray-100">
        <ToastContainer />
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
                id="username"
                value={username}
                placeholder="Enter Your Username"
                className="block shadow-sm py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5652B7] focus:outline-none h-10 w-72 px-2 rounded-md"
                onChange={handleInputChange(
                  setUsername,
                  "username",
                  "invalid_username"
                )}
                required
              />
              <label
                htmlFor="username"
                id="invalid_username"
                className="hidden text-red-600 text-sm ml-2"
              >
                Username is required!
              </label>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="pl-2 text">
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
                required
              />
              <label
                htmlFor="email"
                id="invalid_email"
                className="hidden text-red-600 text-sm ml-2"
              >
                Email is required!
              </label>
            </div>

            {/* Password */}
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
                onChange={handleInputChange(
                  setPassword,
                  "password",
                  "invalid_password"
                )}
                required
              />
              <label
                htmlFor="password"
                id="invalid_password"
                className="hidden text-red-600 text-sm ml-2"
              >
                Password is required!
              </label>
            </div>

            <div className="my-2">
              <input
                type="submit"
                name="submit"
                value="Sign up"
                className="w-28 h-10 bg-[#5652B7] shadow-sm text-white rounded-md hover:bg-[#6461BD] hover:transition-all hover:w-[6.5rem] hover:h-[2.3rem] cursor-pointer"
                onClick={handleRegister}
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
