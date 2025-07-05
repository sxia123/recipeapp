import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RecipeForm({ user }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions) return;

    await addDoc(collection(db, "users", user.uid, "recipes"), {
      title,
      ingredients,
      instructions,
      createdAt: Date.now(),
    });

    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleAdd} className="space-y-4 mb-6">
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Add Recipe
      </button>
    </form>
  );
}
