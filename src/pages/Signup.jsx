import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Form data:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
      >
        <p className="mb-5 text-3xl uppercase text-gray-600">Sign Up</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
