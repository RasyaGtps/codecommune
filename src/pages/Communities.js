import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { SearchIcon, UsersIcon, FilterIcon } from '@heroicons/react/outline';

const Communities = () => {
  const { userCommunities, toggleJoinCommunity } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // all, joined, popular
  
  // Filter communities berdasarkan pencarian dan filter
  const filteredCommunities = userCommunities.filter(community => {
    // Filter pencarian
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter kategori
    if (filter === 'joined') {
      return matchesSearch && community.isJoined;
    } else if (filter === 'popular') {
      return matchesSearch && community.members > 500;
    }
    
    return matchesSearch;
  });
  
  return (
    <div className="pb-10 max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Komunitas</h1>
        <p className="text-sm text-gray-500">
          Temukan komunitas developer dan terhubung dengan mereka yang memiliki minat serupa
        </p>
      </div>
      
      {/* Search & Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Cari komunitas"
          />
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`inline-flex items-center px-4 py-2 border ${
              filter === 'all'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter('joined')}
            className={`inline-flex items-center px-4 py-2 border ${
              filter === 'joined'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Telah Bergabung
          </button>
          <button
            onClick={() => setFilter('popular')}
            className={`inline-flex items-center px-4 py-2 border ${
              filter === 'popular'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Populer
          </button>
        </div>
      </div>
      
      {/* Communities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <div key={community.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-32 bg-primary-500 relative">
              <img
                src={community.banner}
                alt={community.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">{community.name}</h3>
                <div className="flex items-center text-xs">
                  <UsersIcon className="h-3 w-3 mr-1" />
                  <span>{community.members.toLocaleString()} anggota</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 h-12 overflow-hidden">{community.description}</p>
              
              <div className="mt-3 mb-4 flex flex-wrap gap-1">
                {community.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <Link
                  to={`/communities/${community.id}`}
                  className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                >
                  Lihat Komunitas
                </Link>
                
                <button
                  onClick={() => toggleJoinCommunity(community.id)}
                  className={`inline-flex items-center px-3 py-1.5 border ${
                    community.isJoined
                      ? 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                      : 'border-transparent text-white bg-primary-600 hover:bg-primary-700'
                  } rounded shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                >
                  {community.isJoined ? 'Keluar' : 'Gabung'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCommunities.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <UsersIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Tidak ada komunitas ditemukan</h3>
          <p className="mt-1 text-sm text-gray-500">
            Coba kurangi filter atau gunakan kata kunci pencarian yang berbeda.
          </p>
        </div>
      )}
      
      {/* Create Community Button (Fixed) */}
      <div className="fixed bottom-6 right-6">
        <button className="inline-flex items-center p-3 rounded-full shadow-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Communities; 