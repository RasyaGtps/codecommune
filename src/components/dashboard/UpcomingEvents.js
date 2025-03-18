import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, LocationMarkerIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/outline';
import { useAppContext } from '../../context/AppContext';

const UpcomingEvents = () => {
  const { events } = useAppContext();
  
  // Fungsi untuk menentukan warna berdasarkan tipe event
  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Meetup':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop':
        return 'bg-green-100 text-green-800';
      case 'Conference':
        return 'bg-purple-100 text-purple-800';
      case 'Hackathon':
        return 'bg-red-100 text-red-800';
      case 'Webinar':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Acara Mendatang</h2>
        <p className="mt-1 text-sm text-gray-500">
          Jangan lewatkan acara-acara menarik ini
        </p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {events.map((event) => (
          <div key={event.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
            <Link to={`/events/${event.id}`} className="block">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-medium text-gray-900 hover:text-primary-600">
                    {event.name}
                  </h3>
                  
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center col-span-2">
                      <LocationMarkerIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex items-center col-span-2">
                      <UserGroupIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{event.attendees} peserta</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        
        {events.length === 0 && (
          <div className="px-4 py-5 sm:px-6 text-center">
            <p className="text-gray-500">Belum ada acara mendatang.</p>
          </div>
        )}
      </div>
      
      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
        <Link 
          to="/events" 
          className="text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Lihat Semua Acara
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents; 