"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username === "admin" &&
      password === "admin123"
    ) {
      localStorage.setItem("loggedIn", "true");
      router.replace("/welcome");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl w-96">
        <h1 className="text-3xl font-bold text-white mb-6">
          SOC Dashboard Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-3 rounded text-white"
        >
          Login
        </button>

        <button
          className="mt-4 text-blue-400 text-sm"
          onClick={() =>
            alert("Please contact the SOC Administrator.")
          }
        >
          Forgot Password?
        </button>
      </div>
    </main>
  );
}