/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/VideoList.jsx
import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

function VideoList({ selectedCategory }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCategory) {
      setVideos([]);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://openapi.programming-hero.com/api/videos/category/${selectedCategory.category_id}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setError("Failed to load videos.");
        setLoading(false);
      });
  }, [selectedCategory]);

  if (!selectedCategory) {
    return <div className="text-center">Select a category to view videos.</div>;
  }

  if (loading) {
    return <div className="text-center">Loading videos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (videos.length === 0) {
    return (
      <div className="text-center">
        <img
          src="/mnt/data/image.png"
          alt="No content"
          className="w-40 mx-auto"
        />
        <p className="text-gray-500">Oops!! Sorry, There is no content here</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoList;
