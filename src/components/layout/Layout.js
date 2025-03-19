import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1">
        {/* Left Sidebar - hidden on mobile */}
        <div className="hidden md:block md:w-64 lg:w-72 flex-shrink-0 sticky top-0 h-screen overflow-y-auto scrollbar-hide">
          <LeftSidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col relative">
          <main className="flex-1 overflow-y-auto focus:outline-none scrollbar-hide pb-16">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
          
          <div className="sticky bottom-0 w-full z-10">
            <Footer />
          </div>
        </div>
        
        {/* Right Sidebar - hidden on small screens */}
        <div className="hidden lg:block lg:w-72 xl:w-80 flex-shrink-0 sticky top-0 h-screen overflow-hidden right-sidebar">
          <div className="h-full overflow-y-auto scrollbar-hide pb-4">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout; 