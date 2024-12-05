import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AccommodationPage from './pages/AccommodationPage';
import FeaturesandAmenitiesPage from './pages/FeaturesandAmenitiesPage';
import Rooms from './pages/Rooms';

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/features" element={<FeaturesandAmenitiesPage />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
