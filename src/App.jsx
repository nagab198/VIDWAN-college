import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import FacultyDirectory from './components/FacultyDirectory';
import Home from './pages/Home';

// ScrollToTop component to handle scroll position
function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <Router>
      <ScrollToTop />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen max-w-[1900px] m-auto bg-background text-foreground"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<FacultyDirectory />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </motion.div>
    </Router>
  );
}

export default App;
