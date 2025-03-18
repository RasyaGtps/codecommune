import React from 'react';
import { Link } from 'react-router-dom';
import { ChatAltIcon, FireIcon, UserGroupIcon } from '@heroicons/react/outline';
import { useAppContext } from '../../context/AppContext';

const TrendingDiscussions = () => {
  const { discussions } = useAppContext();
  
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Diskusi Trending</h2>
        <p className="mt-1 text-sm text-gray-500">
          Diskusi populer yang sedang ramai dibicarakan
        </p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
            <Link to={`/discussions/${discussion.id}`} className="block">
              <div className="flex items-center mb-2">
                {discussion.hot && (
                  <span className="flex items-center text-xs font-medium text-red-600 mr-2">
                    <FireIcon className="h-4 w-4 mr-1" />
                    Hot
                  </span>
                )}
                <span className="text-xs font-medium text-gray-500">
                  {discussion.community}
                </span>
              </div>
              
              <h3 className="text-sm font-medium text-gray-900 hover:text-primary-600 mb-2">
                {discussion.title}
              </h3>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <UserGroupIcon className="h-4 w-4 mr-1" />
                  <span>{discussion.participants} Peserta</span>
                </div>
                
                <div className="flex items-center">
                  <ChatAltIcon className="h-4 w-4 mr-1" />
                  <span>{discussion.replies} Balasan</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        
        {discussions.length === 0 && (
          <div className="px-4 py-5 sm:px-6 text-center">
            <p className="text-gray-500">Belum ada diskusi trending.</p>
          </div>
        )}
      </div>
      
      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
        <Link 
          to="/discussions" 
          className="text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Lihat Semua Diskusi
        </Link>
      </div>
    </div>
  );
};

export default TrendingDiscussions; 