export const PostDetails = ({ likes, date }) => {
    return (
      <>
        <div className="px-4 py-2 font-medium text-sm">
          {likes.toLocaleString()} Likes
        </div>
        
        <div className="px-4 pb-1 flex items-center flex-wrap">
          <span className="font-medium text-sm text-gray-800">Fiery Grills</span>
          <span className="ml-2 text-sm text-blue-600">#{`picofthe${date}`}</span>
          <span className="ml-2 text-sm text-blue-600">#socialmediapost</span>
          <span className="ml-2 text-sm text-blue-600">#digitrickz</span>
        </div>
        
        <div className="px-4 py-1 text-gray-500 text-sm">
          View all comments
        </div>
      </>
    );
  };