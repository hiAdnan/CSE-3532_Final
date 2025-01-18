/* PH_TUBE\src\components\CategoryBar.jsx */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function CategoryBar({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="flex justify-center gap-4 p-4 bg-gray-50 shadow-sm sticky top-0 z-50">
      {categories.map((category) => (
        <button
          key={category.category_id || "all"} // Ensure a unique key for "All"
          onClick={() => onCategorySelect(category)}
          className={`px-6 py-2 text-sm font-semibold rounded-full ${
            selectedCategory === category
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {category.category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
