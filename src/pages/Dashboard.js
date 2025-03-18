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
        {/* Kolom kiri: Activity Feed */}
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        
        {/* Kolom kanan: Trending Discussions */}
        <div className="space-y-6">
          <TrendingDiscussions />
          <FeaturedProjects />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 