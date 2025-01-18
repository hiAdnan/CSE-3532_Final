/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function CategoryBar({ categories, onCategorySelect }) {
  return (
    <div className="flex overflow-x-scroll gap-4 p-4 bg-gray-100">
      <button
        onClick={() => onCategorySelect(null)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.category_id}
          onClick={() => onCategorySelect(category)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          {category.category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar; 
