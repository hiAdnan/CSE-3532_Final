//PH_TUBE\src\App.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
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
        // Ensure unique categories and add "All"
        const uniqueCategories = [
          { category_id: null, category: "All" },
          ...data.data.filter(
            (category) => category.category !== "All"
          ),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
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
