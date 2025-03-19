import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  UsersIcon, 
  CodeIcon, 
  ChatAltIcon, 
  CalendarIcon, 
  AcademicCapIcon, 
  BookOpenIcon, 
  BriefcaseIcon,
  PlusCircleIcon
} from '@heroicons/react/outline';
import { useAppContext } from '../../context/AppContext';

const LeftSidebar = () => {
  const { user, userCommunities, paths } = useAppContext();
  
  const navigationItems = [
    { name: 'Dashboard', path: '/', icon: HomeIcon },
    { name: 'Komunitas', path: '/communities', icon: UsersIcon },
    { name: 'Proyek', path: '/projects', icon: CodeIcon },
    { name: 'Diskusi', path: '/discussions', icon: ChatAltIcon },
    { name: 'Acara', path: '/events', icon: CalendarIcon },
    { name: 'Learning Path', path: '/learning', icon: AcademicCapIcon },
    { name: 'Resources', path: '/resources', icon: BookOpenIcon },
    { name: 'Job Board', path: '/jobs', icon: BriefcaseIcon },
  ];
  
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-white border-r border-gray-200 pb-20">
      {/* Profil mini */}
      <div className="p-4 border-b border-gray-200">
        <Link to="/profile" className="block">
          <div className="flex items-center">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">@{user.username}</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs text-gray-600">{user.role} di {user.company}</p>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <span className="mr-2">{user.followers} Pengikut</span>
              <span>{user.following} Mengikuti</span>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Menu cepat */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Menu
        </h3>
        <nav className="mt-2 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary-500" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Daftar komunitas */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Komunitas Saya
          </h3>
          <Link 
            to="/communities/discover" 
            className="text-xs text-primary-600 hover:text-primary-800"
          >
            Jelajahi
          </Link>
        </div>
        
        <div className="mt-2 space-y-2">
          {userCommunities
            .filter(community => community.isJoined)
            .map(community => (
              <Link
                key={community.id}
                to={`/communities/${community.id}`}
                className="flex items-center group p-2 rounded-md hover:bg-gray-50"
              >
                <img
                  src={community.avatar}
                  alt={community.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-primary-600">
                    {community.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {community.members.toLocaleString()} anggota
                  </p>
                </div>
              </Link>
            ))}
            
          <Link
            to="/communities/create"
            className="flex items-center p-2 rounded-md text-primary-600 hover:bg-primary-50"
          >
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            <span className="text-sm">Buat komunitas baru</span>
          </Link>
        </div>
      </div>
      
      {/* Learning path */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Learning Path
          </h3>
          <Link 
            to="/learning" 
            className="text-xs text-primary-600 hover:text-primary-800"
          >
            Lihat Semua
          </Link>
        </div>
        
        <div className="mt-2 space-y-3">
          {paths.slice(0, 2).map(path => (
            <Link
              key={path.id}
              to={`/learning/${path.id}`}
              className="block p-3 rounded-md border border-gray-200 hover:border-primary-300 hover:bg-gray-50"
            >
              <p className="text-sm font-medium text-gray-800">{path.title}</p>
              <div className="mt-2 relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-primary-600">
                      {path.progress}% Selesai
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary-600">
                      {path.completedModules}/{path.modules} Modul
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-primary-200">
                  <div
                    style={{ width: `${path.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600"
                  ></div>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {path.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar; 