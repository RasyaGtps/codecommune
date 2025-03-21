import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Communities from './pages/Communities';
import Projects from './pages/Projects';
import Discussions from './pages/Discussions';
import DiscussionDetail from './pages/DiscussionDetail';
import LearningPath from './pages/LearningPath';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Jobs from './pages/Jobs';
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
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<div>Detail Acara</div>} />
            <Route path="/learning" element={<LearningPath />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/category/:category" element={<Resources />} />
            <Route path="/resources/contribute" element={<div>Tambah Resource</div>} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<div>Detail Pekerjaan</div>} />
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
