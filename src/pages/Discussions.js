import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChatAltIcon, FireIcon, UserGroupIcon, SearchIcon, PlusIcon } from '@heroicons/react/outline';
import { useAppContext } from '../context/AppContext';

const Discussions = () => {
  const { discussions } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'react', name: 'React' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'backend', name: 'Backend' },
    { id: 'career', name: 'Karir' },
  ];
  
  // Filter diskusi berdasarkan pencarian dan kategori
  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || discussion.community.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Diskusi</h1>
        <p className="text-sm text-gray-500">
          Bergabunglah dalam diskusi teknis dengan komunitas developer Indonesia
        </p>
      </div>
      
      {/* Search dan filter */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari diskusi..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          
          <div className="hidden sm:flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-primary-100 text-primary-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <Link
            to="/discussions/create"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Buat Diskusi
          </Link>
        </div>
        
        <div className="sm:hidden mt-3 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium ${
                selectedCategory === category.id
                  ? 'bg-primary-100 text-primary-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Daftar diskusi */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredDiscussions.length > 0 ? (
            filteredDiscussions.map(discussion => (
              <div key={discussion.id} className="px-6 py-5 hover:bg-gray-50">
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
                  
                  <h3 className="text-lg font-medium text-gray-900 hover:text-primary-600 mb-2">
                    {discussion.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <UserGroupIcon className="h-5 w-5 mr-1" />
                      <span>{discussion.participants} Peserta</span>
                    </div>
                    
                    <div className="flex items-center">
                      <ChatAltIcon className="h-5 w-5 mr-1" />
                      <span>{discussion.replies} Balasan</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-500">
                {searchTerm
                  ? `Tidak ada diskusi dengan kata kunci "${searchTerm}"`
                  : 'Belum ada diskusi untuk ditampilkan.'}
              </p>
              <Link
                to="/discussions/create"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Buat Diskusi Baru
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discussions; 