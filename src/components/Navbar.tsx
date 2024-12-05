import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navbarData } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-navy-900/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent"
            >
              Girls Hostel
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navbarData.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredDropdown(item.id)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </motion.div>

                <AnimatePresence>
                  {item.dropdown && hoveredDropdown === item.id && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden bg-navy-800/90 backdrop-blur-lg border border-white/10"
                    >
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-colors"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navbarData.map((item) => (
                <div key={item.id} className="space-y-2">
                  <Link
                    to={item.link}
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.link}
                          className="block text-sm text-gray-400 hover:text-white transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;