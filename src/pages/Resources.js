import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DocumentTextIcon,
  BookOpenIcon,
  LightningBoltIcon,
  SearchIcon,
  TagIcon,
  ExternalLinkIcon,
  ThumbUpIcon,
  EyeIcon,
  ClockIcon,
  UserIcon
} from '@heroicons/react/outline';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Semua', icon: DocumentTextIcon },
    { id: 'tutorials', name: 'Tutorial & Panduan', icon: DocumentTextIcon },
    { id: 'articles', name: 'Artikel & Blog', icon: BookOpenIcon },
    { id: 'tools', name: 'Tools & Utilities', icon: LightningBoltIcon }
  ];

  // Data dummy untuk resources
  const resources = [
    {
      id: 1,
      title: 'Panduan Lengkap React.js untuk Pemula',
      description: 'Tutorial komprehensif React.js dari dasar hingga mahir',
      category: 'tutorials',
      author: 'Ahmad Santoso',
      date: '2 hari yang lalu',
      views: 1250,
      likes: 89,
      tags: ['React.js', 'JavaScript', 'Frontend'],
      image: 'https://source.unsplash.com/800x600/?coding',
      url: 'https://example.com/react-tutorial'
    },
    {
      id: 2,
      title: 'Best Practices dalam Clean Code',
      description: 'Tips dan trik menulis kode yang bersih dan mudah dimaintain',
      category: 'articles',
      author: 'Budi Prakoso',
      date: '5 hari yang lalu',
      views: 850,
      likes: 67,
      tags: ['Clean Code', 'Programming', 'Best Practices'],
      image: 'https://source.unsplash.com/800x600/?programming',
      url: 'https://example.com/clean-code'
    },
    {
      id: 3,
      title: 'VS Code Extensions untuk Developer',
      description: 'Kumpulan extension VS Code terbaik untuk produktivitas',
      category: 'tools',
      author: 'Citra Dewi',
      date: '1 minggu yang lalu',
      views: 2100,
      likes: 156,
      tags: ['VS Code', 'Tools', 'Productivity'],
      image: 'https://source.unsplash.com/800x600/?software',
      url: 'https://example.com/vscode-extensions'
    },
    {
      id: 4,
      title: 'Memahami Docker untuk Deployment',
      description: 'Panduan praktis menggunakan Docker dalam deployment aplikasi',
      category: 'tutorials',
      author: 'Denny Setiawan',
      date: '3 hari yang lalu',
      views: 980,
      likes: 73,
      tags: ['Docker', 'DevOps', 'Deployment'],
      image: 'https://source.unsplash.com/800x600/?server',
      url: 'https://example.com/docker-guide'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-h-[calc(100vh-140px)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
        <p className="text-sm text-gray-500">
          Kumpulan sumber daya belajar dan tools untuk developer
        </p>
      </div>

      {/* Search dan Kategori */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari resource..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <Link
            to="/resources/contribute"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Tambah Resource
          </Link>
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg flex items-center whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <category.icon className="h-5 w-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Daftar Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  resource.category === 'tutorials'
                    ? 'bg-primary-100 text-primary-800'
                    : resource.category === 'articles'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {resource.category === 'tutorials' && <DocumentTextIcon className="h-4 w-4 mr-1" />}
                  {resource.category === 'articles' && <BookOpenIcon className="h-4 w-4 mr-1" />}
                  {resource.category === 'tools' && <LightningBoltIcon className="h-4 w-4 mr-1" />}
                  {categories.find(cat => cat.id === resource.category)?.name}
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-sm text-gray-500">
                  <UserIcon className="h-4 w-4 mr-1" />
                  {resource.author}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {resource.date}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    <TagIcon className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    {resource.views}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <ThumbUpIcon className="h-4 w-4 mr-1" />
                    {resource.likes}
                  </span>
                </div>
                <ExternalLinkIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources; 