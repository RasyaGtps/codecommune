import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/communities" element={<div>Halaman Komunitas</div>} />
            <Route path="/projects" element={<div>Halaman Proyek</div>} />
            <Route path="/discussions" element={<div>Halaman Diskusi</div>} />
            <Route path="/events" element={<div>Halaman Acara</div>} />
            <Route path="/learning" element={<div>Halaman Learning Path</div>} />
            <Route path="/resources" element={<div>Halaman Resources</div>} />
            <Route path="/jobs" element={<div>Halaman Job Board</div>} />
            <Route path="/profile" element={<div>Halaman Profil</div>} />
            <Route path="*" element={<div>Halaman Tidak Ditemukan</div>} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
