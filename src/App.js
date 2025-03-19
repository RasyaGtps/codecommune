import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Communities from './pages/Communities';
import Projects from './pages/Projects';
import Discussions from './pages/Discussions';
import DiscussionDetail from './pages/DiscussionDetail';
import LearningPath from './pages/LearningPath';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/discussions/:id" element={<DiscussionDetail />} />
            <Route path="/events" element={<div>Halaman Acara</div>} />
            <Route path="/learning" element={<LearningPath />} />
            <Route path="/resources" element={<div>Halaman Resources</div>} />
            <Route path="/jobs" element={<div>Halaman Job Board</div>} />
            <Route path="/profile" element={<div>Halaman Profil</div>} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>Halaman Tidak Ditemukan</div>} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
