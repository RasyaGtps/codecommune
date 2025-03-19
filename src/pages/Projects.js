import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { 
  SearchIcon, 
  CodeIcon, 
  StarIcon, 
  EyeIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/solid';

const Projects = () => {
  const { projects } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // all, recent, popular, featured
  const [category, setCategory] = useState('all'); // all, web, mobile, data, ai, game
  
  // Filter projects berdasarkan pencarian, filter dan kategori
  const filteredProjects = projects.filter(project => {
    // Filter pencarian
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter kategori
    if (category !== 'all' && !project.tags.includes(category)) {
      return false;
    }
    
    // Filter jenis
    if (filter === 'recent') {
      return matchesSearch && project.isRecent;
    } else if (filter === 'popular') {
      return matchesSearch && project.stars > 50;
    } else if (filter === 'featured') {
      return matchesSearch && project.isFeatured;
    }
    
    return matchesSearch;
  });
  
  // Function untuk render star rating
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < count) {
        stars.push(<StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />);
      } else {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };
  
  return (
    <div className="pb-10 max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Proyek</h1>
        <p className="text-sm text-gray-500">
          Jelajahi proyek open source dan kolaboratif dari komunitas
        </p>
      </div>
      
      {/* Search */}
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          placeholder="Cari proyek berdasarkan nama, deskripsi atau tag"
        />
      </div>
      
      {/* Filter & Categories */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              filter === 'all'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              filter === 'featured'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Unggulan
          </button>
          <button
            onClick={() => setFilter('popular')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              filter === 'popular'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Populer
          </button>
          <button
            onClick={() => setFilter('recent')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              filter === 'recent'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Terbaru
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory('all')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              category === 'all'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Semua Kategori
          </button>
          <button
            onClick={() => setCategory('web')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              category === 'web'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Web
          </button>
          <button
            onClick={() => setCategory('mobile')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              category === 'mobile'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Mobile
          </button>
          <button
            onClick={() => setCategory('data')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              category === 'data'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            Data
          </button>
          <button
            onClick={() => setCategory('ai')}
            className={`inline-flex items-center px-3 py-1.5 border ${
              category === 'ai'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            } rounded-md text-sm font-medium`}
          >
            AI
          </button>
        </div>
      </div>
      
      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary-100 rounded-md flex items-center justify-center">
                    <CodeIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-500">{project.owner}</p>
                  </div>
                </div>
                
                {project.isFeatured && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                    Unggulan
                  </span>
                )}
              </div>
              
              <div className="mt-3">
                <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              
              <div className="mt-4 border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
                      <StarIcon className="h-4 w-4 mr-1" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      <span>{project.watchers}</span>
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      <span>{project.contributors}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{project.lastUpdated}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {renderStars(project.rating)}
                  </div>
                  
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Lihat Proyek
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <CodeIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Tidak ada proyek ditemukan</h3>
          <p className="mt-1 text-sm text-gray-500">
            Coba ubah filter atau gunakan kata kunci pencarian yang berbeda.
          </p>
        </div>
      )}
      
      {/* Create Project Button (Fixed) */}
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

export default Projects; 