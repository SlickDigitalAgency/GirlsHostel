import { motion } from 'framer-motion';
import { Shield, Home, Phone } from 'lucide-react';
import ParticlesOverlay from './ParticlesOverlay';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-900 to-black">
      <ParticlesOverlay />
      
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80"
          alt="Cozy Common Area"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-black/80" />
      </div>
      
      <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-rose-300"
          >
            Welcome to Your Safe & Cozy Home Away From Home
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Experience comfort, security, and community in the heart of Rawalpindi
          </motion.p>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <Feature icon={Shield} text="24/7 Security" delay={0} />
            <Feature icon={Home} text="Modern Facilities" delay={0.1} />
            <Feature icon={Phone} text="Always Available" delay={0.2} />
          </motion.div>
          
          <motion.button
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            <span className="relative z-10">Book Your Stay Now</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 opacity-20 group-hover:opacity-30 blur-md transition-opacity duration-300" />
          </motion.button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
}

function Feature({ icon: Icon, text, delay }: { icon: any; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg"
    >
      <Icon className="w-5 h-5 text-rose-300" />
      <span className="text-rose-50">{text}</span>
    </motion.div>
  );
}