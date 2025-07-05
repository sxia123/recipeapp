import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export default function RecipeList({ user }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "users", user.uid, "recipes"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      setRecipes(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [user]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Your Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes yet!</p>
      ) : (
        recipes.map((r) => (
          <div key={r.id} className="border p-4 bg-gray-50 rounded shadow-sm">
            <h3 className="text-xl font-bold text-indigo-700 mb-1">
              {r.title}
            </h3>
            <p>
              <strong>🧂 Ingredients:</strong> {r.ingredients}
            </p>
            <p>
              <strong>📋 Instructions:</strong> {r.instructions}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
