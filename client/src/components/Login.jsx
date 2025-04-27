import { useState } from "react"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

function Login({ setShowPage }) {
  const [showPassword, setShowPassword] = useState(true)
  return (
    <div className="w-full flex flex-col h-full justify-center text-[#2B2D42]">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Login</h1>
        <p className="text-gray-700">
          Hey, enter your detail to login to your account!
        </p>
      </div>
      <form className="flex flex-col items-center px-30 mt-6 gap-3">
        <input type="email" placeholder="Enter email" />
        <div className="w-full flex items-center relative">
          <input
            type={showPassword ? "password" : "text"}
            placeholder="passcode"
          />
          <p
            className="absolute right-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </p>
        </div>
        <button className="w-full mt-4 bg-red-500 px-5 rounded-xl text-lg text-white py-2.5 cursor-pointer hover:shadow-xl">
          Login
        </button>
        <p className="text-md">
          Don't have an account?{" "}
          <a
            className="hover:underline underline-offset-4 cursor-pointer font-semibold"
            onClick={() => setShowPage("signup")}
          >
            SignUp
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
