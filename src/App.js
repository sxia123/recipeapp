import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md mt-8 rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
        🍲 Recipe Book
      </h1>

      {user ? (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => signOut(auth)}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
          <RecipeForm user={user} />
          <RecipeList user={user} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
