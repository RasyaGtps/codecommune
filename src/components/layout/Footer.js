import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center text-xs text-gray-500">
          <div className="flex items-center">
            <span className="text-primary-600 font-bold">Code<span className="text-gray-900">Commune</span></span>
            <span className="ml-2">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/terms" className="hover:text-gray-900">Ketentuan</Link>
            <Link to="/privacy" className="hover:text-gray-900">Privasi</Link>
            <Link to="/contact" className="hover:text-gray-900">Kontak</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 