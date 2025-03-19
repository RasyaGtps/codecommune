import React from 'react';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import TrendingDiscussions from '../components/dashboard/TrendingDiscussions';
import FeaturedProjects from '../components/dashboard/FeaturedProjects';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';

const Dashboard = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Selamat datang di CodeCommune, tempat berkumpul para developer Indonesia
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom kiri: Activity Feed dengan scroll invisible */}
        <div className="lg:col-span-2 max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide pr-2">
          <ActivityFeed />
        </div>
        
        {/* Kolom kanan: Trending Discussions dan lainnya dengan scroll invisible */}
        <div className="max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide pr-2">
          <div className="space-y-6 pb-4">
            <TrendingDiscussions />
            <FeaturedProjects />
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 