import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, SearchIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const { user, notifications, markNotificationAsRead, markAllNotificationsAsRead } = useAppContext();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const unreadNotifications = notifications.filter(notification => !notification.isRead);
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  const handleMarkAsRead = (notificationId) => {
    markNotificationAsRead(notificationId);
  };
  
  const handleMarkAllAsRead = () => {
    markAllNotificationsAsRead();
  };
  
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary-600 font-bold text-xl">Code<span className="text-gray-900">Commune</span></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className="sr-only">Menu Utama</span>
              {showMobileMenu ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Search input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Cari..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="sr-only">Notifikasi</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                {unreadNotifications.length > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white text-center">
                    {unreadNotifications.length}
                  </span>
                )}
              </button>
              
              {/* Dropdown menu */}
              {showNotifications && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-900">Notifikasi</h3>
                      {unreadNotifications.length > 0 && (
                        <button
                          onClick={handleMarkAllAsRead}
                          className="text-xs text-primary-600 hover:text-primary-800"
                        >
                          Tandai semua dibaca
                        </button>
                      )}
                    </div>
                    
                    <div className="max-h-60 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="px-4 py-3 text-sm text-gray-500">
                          Tidak ada notifikasi
                        </div>
                      ) : (
                        notifications.map(notification => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 hover:bg-gray-50 flex ${
                              !notification.isRead ? 'bg-blue-50' : ''
                            }`}
                            onClick={() => handleMarkAsRead(notification.id)}
                          >
                            <div className="flex-1">
                              <p className="text-sm text-gray-800">{notification.content}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
                            </div>
                            {!notification.isRead && (
                              <div className="flex-shrink-0 ml-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                    
                    <div className="border-t border-gray-200 py-2 px-4">
                      <Link to="/notifications" className="text-xs text-center block text-primary-600 hover:text-primary-800">
                        Lihat semua notifikasi
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* User menu */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div>
                  <Link to="/profile" className="flex items-center space-x-2">
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={user.avatar}
                      alt={user.name}
                    />
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Search input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Cari..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            
            {/* Navigation links */}
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Dashboard
            </Link>
            <Link to="/communities" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Komunitas
            </Link>
            <Link to="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Proyek
            </Link>
            <Link to="/discussions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Diskusi
            </Link>
            <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Acara
            </Link>
          </div>
          
          {/* User info */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={user.avatar}
                  alt={user.name}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{user.name}</div>
                <div className="text-sm font-medium text-gray-500">{user.email}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 