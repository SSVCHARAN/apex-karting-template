import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Modals
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Pages
import Home from './pages/Home';
import Track from './pages/Track';
import Pricing from './pages/Pricing';
import Leaderboard from './pages/Leaderboard';
import Rules from './pages/Rules';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between'
      }}>
        <div>
          {/* Global Header/Navigation */}
          <Navbar onOpenBooking={openBooking} />

          {/* Main Routing Container */}
          <main style={{ minHeight: '70vh', padding: '12px 0 48px 0' }}>
            <Routes>
              <Route path="/" element={<Home onOpenBooking={openBooking} />} />
              <Route path="/track" element={<Track />} />
              <Route path="/pricing" element={<Pricing onOpenBooking={openBooking} />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Booking Modal */}
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
}

export default App;
