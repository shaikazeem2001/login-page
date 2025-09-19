import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting login form:", formData);

    try {
      const res = await axios.post("http://localhost:3000/api/login", formData);
      console.log("Login response:", res.data);

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful! 🎉");
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Something went wrong during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border border-gray-600 bg-gray-700 text-white px-4 py-2 rounded-lg"
            type="email"
            name="email"
            placeholder="Enter your email..."
            onChange={handleChange}
            required
          />
          <input
            className="border border-gray-600 bg-gray-700 text-white px-4 py-2 rounded-lg"
            type="password"
            name="password"
            placeholder="Enter your password..."
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-gray-400 text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
