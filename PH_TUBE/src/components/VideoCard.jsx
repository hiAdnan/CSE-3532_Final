/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
function VideoCard({ video }) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-all bg-white">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
        <div className="flex items-center text-gray-500 text-sm">
          <img
            src={video.authorImage || "default-author.png"} // Add fallback if author image missing
            alt={video.author}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>{video.author}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{video.views} views</p>
      </div>
    </div>
  );
}

export default VideoCard