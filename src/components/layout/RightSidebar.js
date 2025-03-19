import React from 'react';
import { Link } from 'react-router-dom';
import { FireIcon, ChartBarIcon, TrendingUpIcon, LightningBoltIcon, UserGroupIcon } from '@heroicons/react/outline';
import { useAppContext } from '../../context/AppContext';

const RightSidebar = () => {
  const { stats, challenges, leaders, connections } = useAppContext();
  
  return (
    <div className="h-screen scrollbar-hide bg-white border-l border-gray-200 overflow-y-auto pb-20">
      {/* Statistik developer */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Statistik Anda
          </h3>
          <Link to="/stats" className="text-xs text-primary-600 hover:text-primary-800">
            Detail
          </Link>
        </div>
        
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center">
              <ChartBarIcon className="h-5 w-5 text-primary-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Kontribusi</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-gray-900">{stats.totalContributions}</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center">
              <TrendingUpIcon className="h-5 w-5 text-primary-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Reputasi</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-gray-900">{stats.reputationPoints}</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center">
              <FireIcon className="h-5 w-5 text-primary-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Streak</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-gray-900">{stats.streak} hari</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="flex items-center">
              <LightningBoltIcon className="h-5 w-5 text-primary-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Ranking</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-gray-900">{stats.ranking}</p>
          </div>
        </div>
      </div>
      
      {/* Challenges harian */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Challenges Hari Ini
          </h3>
          <Link to="/challenges" className="text-xs text-primary-600 hover:text-primary-800">
            Lihat Semua
          </Link>
        </div>
        
        <div className="mt-2 space-y-3">
          {challenges.map((challenge) => (
            <Link
              key={challenge.id}
              to={`/challenges/${challenge.id}`}
              className="block p-3 rounded-md border border-gray-200 hover:border-primary-300 hover:bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{challenge.title}</p>
                  <div className="mt-1 flex items-center">
                    <span className={`
                      inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                      ${challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                        challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}
                    `}>
                      {challenge.difficulty}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      {challenge.timeEstimate} • {challenge.points} poin
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{challenge.completedBy} selesai</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Leaderboard */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Leaderboard
          </h3>
          <Link to="/leaderboard" className="text-xs text-primary-600 hover:text-primary-800">
            Lihat Semua
          </Link>
        </div>
        
        <div className="mt-2 space-y-3">
          {leaders.slice(0, 3).map((leader, index) => (
            <div key={leader.id} className="flex items-center">
              <div className="flex-shrink-0 w-8 text-center">
                <span className={`
                  inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-medium
                  ${index === 0 ? 'bg-yellow-100 text-yellow-800' : 
                    index === 1 ? 'bg-gray-200 text-gray-800' : 
                    index === 2 ? 'bg-yellow-700 text-yellow-100' : 'bg-gray-100 text-gray-800'}
                `}>
                  {index + 1}
                </span>
              </div>
              <div className="ml-3 flex-1 flex items-center">
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">{leader.name}</p>
                  <p className="text-xs text-gray-500">@{leader.username}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">{leader.points}</span>
                  <span className="ml-1 text-xs text-gray-500">pts</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Koneksi yang disarankan */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Koneksi Disarankan
          </h3>
          <Link to="/connections" className="text-xs text-primary-600 hover:text-primary-800">
            Lihat Semua
          </Link>
        </div>
        
        <div className="mt-2 space-y-3">
          {connections.map((connection) => (
            <div key={connection.id} className="flex items-start">
              <img
                src={connection.avatar}
                alt={connection.name}
                className="h-10 w-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{connection.name}</p>
                <p className="text-xs text-gray-500">{connection.role} di {connection.company}</p>
                <p className="text-xs text-gray-500 mt-1">
                  <UserGroupIcon className="inline h-3 w-3 mr-1 text-gray-400" />
                  {connection.mutualConnections} koneksi bersama
                </p>
              </div>
              <button className="ml-2 btn-primary text-xs py-1 px-3">
                Hubungkan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar; 