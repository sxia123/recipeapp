// src/components/Login.js
import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNew, setIsNew] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isNew) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleAuth} className="space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          {isNew ? "Sign Up" : "Login"}
        </button>
        <p
          onClick={() => setIsNew(!isNew)}
          className="text-sm text-center text-blue-600 cursor-pointer"
        >
          {isNew ? "Already have an account? Login" : "New here? Sign up"}
        </p>
      </form>

      <div className="mt-6">
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.4h-2.3v-.1H24v7.3h11.3c-1.1 3.8-4.4 6.6-8.3 6.6a9.4 9.4 0 0 1-9-6.6 9.4 9.4 0 0 1 0-6.6 9.4 9.4 0 0 1 9-6.6c2.6 0 4.9 1.1 6.4 2.9l4.6-4.6a16.7 16.7 0 0 0-11-4.4c-9.4 0-17 7.6-17 17s7.6 17 17 17c9.6 0 16.7-6.7 16.7-16.1 0-1.1-.1-2.2-.3-3.2z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.4l6.3 4.6a10.4 10.4 0 0 1 0 10l-6.3 4.6A23.9 23.9 0 0 1 2 24a23.9 23.9 0 0 1 4.3-9.6z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.4 0 9.9-1.7 13.3-4.5l-6.2-5.5c-1.7 1.1-3.8 1.8-7.1 1.8a13.3 13.3 0 0 1-12.6-8.9l-6.4 4.9A23.8 23.8 0 0 0 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.4H24v7.3h11.3c-1.2 3.8-4.4 6.6-8.3 6.6a9.4 9.4 0 0 1-9-6.6v-.1h-7.3v-.1a23.9 23.9 0 0 1 4.2-9.5l6.3 4.6a10.4 10.4 0 0 0 6.1 1.9c2.7 0 4.9-1.1 6.4-2.9l4.6-4.6a16.7 16.7 0 0 0-11-4.4z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </>
  );
}
