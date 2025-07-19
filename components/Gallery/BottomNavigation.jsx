import { Home, Search, Plus, Calendar, User } from "lucide-react";

export const BottomNavigation = () => {
  return (
    <div className="px-4 py-2 flex justify-between">
      <button>
        <Home className="w-6 h-6 text-gray-800" />
      </button>
      <button>
        <Search className="w-6 h-6 text-gray-800" />
      </button>
      <button>
        <Plus className="w-6 h-6 text-gray-800" />
      </button>
      <button>
        <Calendar className="w-6 h-6 text-gray-800" />
      </button>
      <button>
        <User className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};
