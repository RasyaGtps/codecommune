import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  ClockIcon, 
  LocationMarkerIcon, 
  UserGroupIcon,
  VideoCameraIcon,
  SearchIcon,
  FilterIcon,
  ChevronRightIcon,
  TagIcon
} from '@heroicons/react/outline';

const Events = () => {
  const [filter, setFilter] = useState('all'); // all, online, offline
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data dummy untuk events
  const events = [
    {
      id: 1,
      title: 'Workshop React.js',
      description: 'Belajar React.js dari dasar hingga mahir dengan studi kasus nyata',
      date: '5 Juli 2024',
      time: '15:00 WIB',
      type: 'online',
      platform: 'Zoom Meeting',
      organizer: 'CodeCommune',
      participants: 150,
      maxParticipants: 200,
      tags: ['React.js', 'Frontend', 'Web Development'],
      image: 'https://source.unsplash.com/800x600/?coding',
      price: 'Gratis',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Meetup Developer Surabaya',
      description: 'Networking dan sharing session bersama developer di Surabaya',
      date: '15 Juli 2024',
      time: '19:00 WIB',
      type: 'offline',
      location: 'Co-working Space XYZ, Surabaya',
      organizer: 'Surabaya Dev Community',
      participants: 45,
      maxParticipants: 50,
      tags: ['Networking', 'Community', 'Tech Talk'],
      image: 'https://source.unsplash.com/800x600/?meeting',
      price: 'Rp 50.000',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Workshop UI/UX Design',
      description: 'Mendalami prinsip desain UI/UX dan implementasinya',
      date: '20 Juli 2024',
      time: '13:00 WIB',
      type: 'hybrid',
      location: 'Design Hub Jakarta & Zoom',
      organizer: 'DesignersID',
      participants: 80,
      maxParticipants: 100,
      tags: ['UI/UX', 'Design', 'Figma'],
      image: 'https://source.unsplash.com/800x600/?design',
      price: 'Rp 150.000',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Tech Career Fair 2024',
      description: 'Pameran karir teknologi terbesar di Indonesia',
      date: '25 Juli 2024',
      time: '09:00 WIB',
      type: 'offline',
      location: 'Convention Hall Jakarta',
      organizer: 'TechHire Indonesia',
      participants: 300,
      maxParticipants: 500,
      tags: ['Career', 'Job Fair', 'Networking'],
      image: 'https://source.unsplash.com/800x600/?career',
      price: 'Gratis',
      status: 'upcoming'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === 'all' || event.type === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-h-[calc(100vh-140px)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Acara</h1>
        <p className="text-sm text-gray-500">
          Temukan dan ikuti acara menarik dari komunitas
        </p>
      </div>

      {/* Search dan Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari acara..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              filter === 'all'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FilterIcon className="h-5 w-5 mr-2" />
            Semua
          </button>
          <button
            onClick={() => setFilter('online')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              filter === 'online'
                ? 'bg-purple-100 text-purple-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <VideoCameraIcon className="h-5 w-5 mr-2" />
            Online
          </button>
          <button
            onClick={() => setFilter('offline')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              filter === 'offline'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <LocationMarkerIcon className="h-5 w-5 mr-2" />
            Offline
          </button>
        </div>
      </div>

      {/* Daftar Acara */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'online'
                    ? 'bg-purple-100 text-purple-800'
                    : event.type === 'offline'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {event.type === 'online' && <VideoCameraIcon className="h-4 w-4 mr-1" />}
                  {event.type === 'offline' && <LocationMarkerIcon className="h-4 w-4 mr-1" />}
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="h-5 w-5 mr-2 text-gray-400" />
                  {event.date} • {event.time}
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  {event.type === 'online' ? (
                    <VideoCameraIcon className="h-5 w-5 mr-2 text-gray-400" />
                  ) : (
                    <LocationMarkerIcon className="h-5 w-5 mr-2 text-gray-400" />
                  )}
                  {event.type === 'online' ? event.platform : event.location}
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <UserGroupIcon className="h-5 w-5 mr-2 text-gray-400" />
                  {event.participants}/{event.maxParticipants} Peserta
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex flex-wrap gap-1">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{event.price}</span>
                <span className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                  Detail Acara
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events; 