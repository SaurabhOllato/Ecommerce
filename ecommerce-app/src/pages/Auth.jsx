import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-white flex items-center justify-center relative">
    <div className="absolute inset-0 backdrop-blur-md" />
    <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white rounded py-2 hover:bg-pink-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-pink-600 hover:underline font-medium"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
