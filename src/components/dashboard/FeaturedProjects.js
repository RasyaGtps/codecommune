import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, CloudDownloadIcon } from '@heroicons/react/outline';
import { useAppContext } from '../../context/AppContext';

const FeaturedProjects = () => {
  const { projects } = useAppContext();
  
  // Fungsi untuk menentukan warna latar belakang berdasarkan bahasa
  const getLanguageColor = (language) => {
    switch (language) {
      case 'JavaScript':
        return 'bg-yellow-100 text-yellow-800';
      case 'TypeScript':
        return 'bg-blue-100 text-blue-800';
      case 'Node.js':
        return 'bg-green-100 text-green-800';
      case 'Python':
        return 'bg-indigo-100 text-indigo-800';
      case 'Java':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Proyek Unggulan</h2>
        <p className="mt-1 text-sm text-gray-500">
          Proyek-proyek terbaik dari komunitas
        </p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {projects.map((project) => (
          <div key={project.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
            <Link to={`/projects/${project.id}`} className="block">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 hover:text-primary-600">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getLanguageColor(project.language)}`}>
                      {project.language}
                    </span>
                    
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="ml-4 flex flex-col items-end text-xs text-gray-500">
                  <div className="flex items-center mb-1">
                    <StarIcon className="h-4 w-4 mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <CloudDownloadIcon className="h-4 w-4 mr-1" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span>By {project.owner}</span>
              </div>
            </Link>
          </div>
        ))}
        
        {projects.length === 0 && (
          <div className="px-4 py-5 sm:px-6 text-center">
            <p className="text-gray-500">Belum ada proyek unggulan.</p>
          </div>
        )}
      </div>
      
      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
        <Link 
          to="/projects" 
          className="text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Jelajahi Semua Proyek
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects; 