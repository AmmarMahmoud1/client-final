import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ isAuth, setGotCookie }) => {
  const navigate = useNavigate();
  const [{ email, password }, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status } = await axios.post(
        // `${import.meta.env.VITE_API_URL}/user/login`,
        `https://searchandoffer.onrender.com/api/user/login`,
        { email, password }
      );
      if (status === 200) setGotCookie();
    } catch (error) {
      // toastError(error.message || "No cookie back");
      console.log(error);
    }
  };

  if (isAuth) return <Navigate to="/" />;
  else
    return (
      <div className="mt-[-1px] w-full h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-400 flex flex-col items-center justify-between pt-4 bg-slate-100 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 md:w-1/3 transition-all"
        >
          <h1 className="mt-2 mb-8 lg:mb-16 text-xl font-semibold dark:text-white">
            Login
          </h1>
          <div className="flex flex-col items-center justify-around h-1/2 w-full">
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all"
            />
          </div>
          <br />
          <div className="flex w-full">
            <button
              onClick={() => navigate("/signup")}
              className="w-1/2 bg-pink-300 hover:bg-pink-600 dark:bg-yellow-500 p-1"
            >
              Sign Up
            </button>
            <button
              type="submit"
              className="w-1/2 bg-sky-300 hover:bg-sky-600 p-1"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    );
};

export default Login;
