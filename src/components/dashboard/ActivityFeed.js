import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChatAltIcon, 
  ThumbUpIcon, 
  ShareIcon, 
  StarIcon, 
  CodeIcon, 
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/outline';
import { useAppContext } from '../../context/AppContext';

const ActivityFeed = () => {
  const { feed, addPost, likePost, user } = useAppContext();
  const [postContent, setPostContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      addPost(postContent);
      setPostContent('');
    }
  };
  
  const renderActivityItem = (activity) => {
    switch (activity.type) {
      case 'post':
        return (
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <img 
                src={activity.user.avatar} 
                alt={activity.user.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <Link to={`/profile/${activity.user.username}`} className="text-sm font-medium text-gray-900 hover:underline">
                  {activity.user.name}
                </Link>
                <p className="text-xs text-gray-500">@{activity.user.username} • {activity.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-800 text-sm mb-3">{activity.content}</p>
            <div className="flex items-center space-x-4 text-gray-500 text-xs">
              <button
                onClick={() => likePost(activity.id)}
                className="flex items-center hover:text-primary-600"
              >
                <ThumbUpIcon className="h-4 w-4 mr-1" />
                <span>{activity.likes} Suka</span>
              </button>
              <button className="flex items-center hover:text-primary-600">
                <ChatAltIcon className="h-4 w-4 mr-1" />
                <span>{activity.comments} Komentar</span>
              </button>
              <button className="flex items-center hover:text-primary-600">
                <ShareIcon className="h-4 w-4 mr-1" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        );
        
      case 'project':
        return (
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <img 
                src={activity.user.avatar} 
                alt={activity.user.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <Link to={`/profile/${activity.user.username}`} className="text-sm font-medium text-gray-900 hover:underline">
                  {activity.user.name}
                </Link>
                <p className="text-xs text-gray-500">@{activity.user.username} • {activity.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-800 text-sm mb-2">{activity.content}</p>
            <div className="bg-gray-50 rounded-md p-3 mb-3 flex items-center">
              <CodeIcon className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <Link to={`/projects/${activity.projectName}`} className="text-sm font-medium text-primary-600 hover:underline">
                  {activity.projectName}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-xs">
              <button className="flex items-center hover:text-primary-600">
                <StarIcon className="h-4 w-4 mr-1" />
                <span>{activity.stars} Stars</span>
              </button>
              <button className="flex items-center hover:text-primary-600">
                <CodeIcon className="h-4 w-4 mr-1" />
                <span>{activity.forks} Forks</span>
              </button>
              <button className="flex items-center hover:text-primary-600">
                <ShareIcon className="h-4 w-4 mr-1" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        );
        
      case 'discussion':
        return (
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <img 
                src={activity.user.avatar} 
                alt={activity.user.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <Link to={`/profile/${activity.user.username}`} className="text-sm font-medium text-gray-900 hover:underline">
                  {activity.user.name}
                </Link>
                <p className="text-xs text-gray-500">@{activity.user.username} • {activity.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-800 text-sm mb-2">{activity.content}</p>
            <div className="bg-gray-50 rounded-md p-3 mb-3 flex items-center">
              <ChatAltIcon className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <Link to={`/discussions?title=${activity.discussionTitle}`} className="text-sm font-medium text-primary-600 hover:underline">
                  {activity.discussionTitle}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-xs">
              <div className="flex items-center">
                <UserGroupIcon className="h-4 w-4 mr-1" />
                <span>{activity.participants} Peserta</span>
              </div>
              <div className="flex items-center">
                <ChatAltIcon className="h-4 w-4 mr-1" />
                <span>{activity.replies} Balasan</span>
              </div>
              <button className="flex items-center hover:text-primary-600">
                <ShareIcon className="h-4 w-4 mr-1" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        );
        
      case 'event':
        return (
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <img 
                src={activity.user.avatar} 
                alt={activity.user.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <Link to={`/profile/${activity.user.username}`} className="text-sm font-medium text-gray-900 hover:underline">
                  {activity.user.name}
                </Link>
                <p className="text-xs text-gray-500">@{activity.user.username} • {activity.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-800 text-sm mb-2">{activity.content}</p>
            <div className="bg-gray-50 rounded-md p-3 mb-3 flex items-center">
              <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <Link to={`/events?name=${activity.eventName}`} className="text-sm font-medium text-primary-600 hover:underline">
                  {activity.eventName}
                </Link>
                <p className="text-xs text-gray-500">
                  {activity.date} • {activity.attendees} peserta
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-xs">
              <button className="flex items-center hover:text-primary-600">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>Tambah ke Kalender</span>
              </button>
              <button className="flex items-center hover:text-primary-600">
                <ShareIcon className="h-4 w-4 mr-1" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Feed</h2>
      
      {/* Post form */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="flex items-start space-x-3">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Bagikan sesuatu dengan komunitas..."
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                rows="3"
              />
              <div className="flex items-center justify-end mt-2">
                <button
                  type="submit"
                  disabled={!postContent.trim()}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
                >
                  Posting
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      {/* Activity items */}
      <div>
        {feed.map((activity) => (
          <div key={activity.id}>
            {renderActivityItem(activity)}
          </div>
        ))}
        
        {feed.length === 0 && (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <p className="text-gray-500">Belum ada aktivitas.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityFeed; 