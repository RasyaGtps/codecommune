import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email ${email} telah didaftarkan untuk newsletter!`);
    setEmail('');
  };
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo dan deskripsi */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-primary-600 font-bold text-xl">Code<span className="text-gray-900">Commune</span></span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Platform komunitas untuk para developer Indonesia berkumpul, berbagi pengetahuan, berkolaborasi, dan membangun jaringan profesional.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Jelajahi
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/communities" className="text-sm text-gray-600 hover:text-primary-600">
                  Komunitas
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-600 hover:text-primary-600">
                  Proyek
                </Link>
              </li>
              <li>
                <Link to="/discussions" className="text-sm text-gray-600 hover:text-primary-600">
                  Diskusi
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-600 hover:text-primary-600">
                  Acara
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-sm text-gray-600 hover:text-primary-600">
                  Job Board
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/learning" className="text-sm text-gray-600 hover:text-primary-600">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm text-gray-600 hover:text-primary-600">
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-sm text-gray-600 hover:text-primary-600">
                  Panduan
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter signup */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Berlangganan Newsletter
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Dapatkan update terbaru dari CodeCommune.
            </p>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  required
                  className="min-w-0 flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Langganan
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom text and social links */}
        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CodeCommune. Seluruh hak cipta dilindungi.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Ketentuan Layanan
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Kebijakan Privasi
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-900">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 