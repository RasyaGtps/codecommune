import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - hidden on mobile */}
        <div className="hidden md:block md:w-64 lg:w-72 flex-shrink-0 overflow-y-auto">
          <LeftSidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
        
        {/* Right Sidebar - hidden on small screens */}
        <div className="hidden lg:block lg:w-72 xl:w-80 flex-shrink-0 overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout; 