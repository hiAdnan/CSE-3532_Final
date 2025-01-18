/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* PH_TUBE\src\components\VideoList.jsx */
import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import NoContentImage from "../assets/Icon.png"; // Correct import for fallback image

function VideoList({ selectedCategory }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        let fetchedVideos = [];

        if (!selectedCategory || selectedCategory.category === "All") {
          const categoriesResponse = await fetch(
            "https://openapi.programming-hero.com/api/videos/categories"
          );
          const categoriesData = await categoriesResponse.json();

          const fetchAllVideos = categoriesData.data.map(async (category) => {
            const response = await fetch(
              `https://openapi.programming-hero.com/api/videos/category/${category.category_id}`
            );
            const data = await response.json();
            return data.data || [];
          });

          fetchedVideos = (await Promise.all(fetchAllVideos)).flat();
        } else {
          const response = await fetch(
            `https://openapi.programming-hero.com/api/videos/category/${selectedCategory.category_id}`
          );
          const data = await response.json();
          fetchedVideos = data.data || [];
        }

        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("Failed to load videos.");
      }

      setLoading(false);
    };

    fetchVideos();
  }, [selectedCategory]);

  if (loading) {
    return <div className="text-center">Loading videos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (videos.length === 0) {
    return (
      <div className="text-center mt-12">
        <img
          src={NoContentImage}
          alt="No content available"
          className="w-40 mx-auto"
        />
        <p className="text-gray-500 text-lg">Oops! No videos found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoList;
