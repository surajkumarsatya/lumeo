'use client';

import { Menu, Home, MessageSquare, History, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuHover, setIsMenuHover] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const grayBg = `bg-gray-300 px-2 py-1 -mx-2 -my-1`;
  const nongrayBg = ``;

  return (
    <div
      className={` flex flex-col justify-between py-6 px-6 bg-gray-200 gap-3 transition-all duration-500 ease-in-out overflow-hidden ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="grid gap-3 items-center">
        <div className="flex items-center gap-3 pb-10 cursor-pointer">
          <Menu onClick={() => setIsCollapsed(!isCollapsed)} className="flex-shrink-0" size={18} />
        </div>

        <div
          className={`flex items-center gap-3 cursor-pointer rounded-full transition-colors ${activeItem === 'Home' ? grayBg : nongrayBg} ${isMenuHover === 'Home' ? grayBg : nongrayBg}`}
          onClick={() => setActiveItem('Home')}
          onMouseEnter={() => setIsMenuHover('Home')}
          onMouseLeave={() => setIsMenuHover('')}
        >
          <Home className="flex-shrink-0" size={18} />
          <span
            className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
              isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
            }`}
          >
            Home
          </span>
        </div>

        <div
          className={`flex items-center gap-3 cursor-pointer rounded-full transition-colors ${activeItem === 'Message' ? grayBg : nongrayBg} ${isMenuHover === 'Message' ? grayBg : nongrayBg}`}
          onClick={() => setActiveItem('Message')}
          onMouseEnter={() => setIsMenuHover('Message')}
          onMouseLeave={() => setIsMenuHover('')}
        >
          <MessageSquare className="flex-shrink-0" size={18} />
          <span
            className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
              isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
            }`}
          >
            Message
          </span>
        </div>

        <div
          className={`flex items-center gap-3 cursor-pointer rounded-full transition-colors ${activeItem === 'Recent' ? grayBg : nongrayBg} ${isMenuHover === 'Recent' ? grayBg : nongrayBg}`}
          onClick={() => setActiveItem('Recent')}
          onMouseEnter={() => setIsMenuHover('Recent')}
          onMouseLeave={() => setIsMenuHover('')}
        >
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

      <div className="grid gap-10">
        <div
          className={`flex items-center gap-3 cursor-pointer rounded-full transition-colors ${activeItem === 'Setting' ? grayBg : nongrayBg} ${isMenuHover === 'Setting' ? grayBg : nongrayBg}`}
          onClick={() => setActiveItem('Setting')}
          onMouseEnter={() => setIsMenuHover('Setting')}
          onMouseLeave={() => setIsMenuHover('')}
        >
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
