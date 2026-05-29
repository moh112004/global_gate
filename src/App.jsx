import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProgramsPage from './pages/ProgramsPage';
import DestinationsPage from './pages/DestinationsPage';
import TeamPage from './pages/TeamPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/services"     element={<ServicesPage />} />
        <Route path="/programs"     element={<ProgramsPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/team"         element={<TeamPage />} />
        <Route path="/partners"     element={<PartnersPage />} />
        <Route path="/contact"      element={<ContactPage />} />
      </Routes>
    </>
  );
}
