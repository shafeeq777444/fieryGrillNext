import { Heart, MessageCircle, Bookmark } from "lucide-react";

export const ActionButtons = ({ isLiked, onLikeToggle }) => {
  return (
    <div className="px-4 py-2 flex justify-between">
      <div className="flex space-x-4">
        <button onClick={onLikeToggle}>
          <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-800"}`} />
        </button>
        <button>
          <MessageCircle className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <button>
        <Bookmark className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};