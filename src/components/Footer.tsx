import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTopVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-900 text-white py-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(244,63,94,0.08),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              Girls Hostel
            </h3>
            <p className="text-gray-400">
              Your safe and comfortable home away from home in Rawalpindi.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Rooms', 'Facilities', 'Contact'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +92 123 456 7890</li>
              <li>Email: info@girlshostel.com</li>
              <li>Address: Rawalpindi, Pakistan</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} href="https://facebook.com" color="blue" />
              <SocialIcon icon={Instagram} href="https://instagram.com" color="pink" />
              <SocialIcon icon={Twitter} href="https://twitter.com" color="sky" />
              <SocialIcon icon={Linkedin} href="https://linkedin.com" color="blue" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Girls Hostel. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <motion.a
                href="/privacy"
                whileHover={{ color: '#A855F7' }}
                className="text-gray-400"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                whileHover={{ color: '#A855F7' }}
                className="text-gray-400"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatedScrollTopButton visible={scrollTopVisible} onClick={scrollToTop} />
      </div>
    </footer>
  );
};

const SocialIcon = ({
  icon: Icon,
  href,
  color,
}: {
  icon: React.ElementType;
  href: string;
  color: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
      hover:bg-${color}-500/20 hover:text-${color}-400 transition-colors`}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const AnimatedScrollTopButton = ({
  visible,
  onClick,
}: {
  visible: boolean;
  onClick: () => void;
}) => (
  <AnimatePresence>
    {visible && (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={onClick}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    )}
  </AnimatePresence>
);

export default Footer;