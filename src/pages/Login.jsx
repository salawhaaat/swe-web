import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login with:", email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
      >
        <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
        >
          <span>Login</span>
        </button>
        <p className="text-center text-gray-400 mt-5">
          Don&apos;t have an account?
          <Link to="/signup" className="text-blue-800 hover:text-blue-600">
            {" "}
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
