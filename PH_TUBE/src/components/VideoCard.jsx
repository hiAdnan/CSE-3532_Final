//PH_TUBE\src\components\VideoCard.jsx
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai"; // Import the Verified Icon

function VideoCard({ video }) {
  const author = video.authors[0]; // Assuming the first author is always available

  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-all bg-white">
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      {/* Video Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>

        {/* Author Details */}
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <img
            src={author.profile_picture}
            alt={author.profile_name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="mr-2">{author.profile_name}</span>
          {author.verified && (
            <AiFillCheckCircle className="text-blue-500 w-4 h-4" /> // Use the icon here
          )}
        </div>

        {/* Views and Posted Date */}
        <div className="text-sm text-gray-600">
          <p>{video.others.views} views</p>
          <p>{video.others.posted_date} days ago</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
