'use client';

import { Menu, Home, MessageSquare, History, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`flex flex-col justify-between py-6 px-6 border bg-gray-200 gap-3 transition-all duration-500 ease-in-out overflow-hidden ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="grid gap-3">
        <div className="flex items-center gap-3 pb-10 cursor-pointer">
          <Menu onClick={() => setIsCollapsed(!isCollapsed)} className="flex-shrink-0" size={18} />
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-300 rounded-full transition-colors">
          <Home className="flex-shrink-0" size={18} />
          <span
            className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
              isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
            }`}
          >
            Home
          </span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-300  rounded-lg transition-colors">
          <MessageSquare className="flex-shrink-0" size={18} />
          <span
            className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
              isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
            }`}
          >
            Message
          </span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-300  rounded-lg transition-colors">
          <History className="flex-shrink-0" size={18} />
          <span
            className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
              isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
            }`}
          >
            Recent
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-10 cursor-pointer hover:bg-gray-300  rounded-lg transition-colors">
          <Settings className="flex-shrink-0" size={18} />
          <span
            className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
              isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
            }`}
          >
            Setting
          </span>
        </div>
        <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center text-white font-semibold">
          N
        </div>
      </div>
    </div>
  );
}
