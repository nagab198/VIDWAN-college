import { motion } from 'framer-motion';
import { BookOpenIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  return (
    <header className="relative overflow-hidden gradient-bg-header hero-pattern-subtle shadow-md">
      <div className="absolute inset-0 bg-muted"></div>
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-5">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-between text-white"
        >
          <Link to="/" className="flex items-center group hover:opacity-90 transition-opacity">
            <BookOpenIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 text-muted-foreground" />
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                <span className="college-name-main group-hover:text-accent-custom-red transition-colors">VIDWAN</span>{' '}
                <span className="college-name-secondary">DEGREE COLLEGE</span>
              </h1>
              <p className="text-xs text-muted-foreground sm:text-sm md:text-base font-medium opacity-95">
                BOBBILI
              </p>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground sm:text-md md:text-lg opacity-90 mt-2 sm:mt-0">
            College Code: 20902
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderSection;