/* eslint-disable no-unused-vars */
// src/App.jsx
import React, { useState, useEffect } from "react";
import CategoryBar from "./components/CategoryBar";
import VideoList from "./components/VideoList";
import "./index.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories([{ category_id: null, category: "All" }, ...data.data]);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">PH Tube</h1>
        <button className="bg-white text-red-500 px-4 py-2 rounded">Blog</button>
      </header>
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={(category) => setSelectedCategory(category)}
      />
      <VideoList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;