import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Camera, Users, Bell, Lock, Phone } from 'lucide-react';

interface SecurityFeature {
  icon: typeof Shield;
  label: string;
  description: string;
  color: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    icon: Camera,
    label: '24/7 CCTV Surveillance',
    description: 'Advanced camera systems monitoring all areas with AI-powered threat detection.',
    color: 'security-primary',
  },
  {
    icon: Users,
    label: 'Professional Security',
    description: 'Trained security personnel available 24/7 to ensure your safety and peace of mind.',
    color: 'security-secondary',
  },
  {
    icon: Bell,
    label: 'Emergency Response',
    description: 'Quick response protocols and direct lines to emergency services.',
    color: 'security-accent',
  },
  {
    icon: Lock,
    label: 'Access Control',
    description: 'Biometric and smart card entry systems for authorized access only.',
    color: 'security-primary',
  },
  {
    icon: Shield,
    label: 'Safety Protocols',
    description: 'Comprehensive safety guidelines and regular emergency drills.',
    color: 'security-secondary',
  },
  {
    icon: Phone,
    label: '24/7 Helpline',
    description: 'Round-the-clock support line for immediate assistance and concerns.',
    color: 'security-accent',
  },
];

const FeatureCard = ({ feature, index }: { feature: SecurityFeature; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10 h-full">
        <motion.div
          className={`h-full bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm 
            border border-white/10 rounded-2xl p-6 overflow-hidden
            transition-all duration-300 group-hover:border-${feature.color}`}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="relative z-10">
            <motion.div
              className={`w-16 h-16 mb-4 rounded-xl flex items-center justify-center
                bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10`}
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <feature.icon className={`w-8 h-8 text-${feature.color}`} />
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-2">{feature.label}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {feature.description}
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </motion.div>
      </div>

      <div className={`absolute inset-0 bg-${feature.color}/5 blur-xl 
        group-hover:bg-${feature.color}/10 transition-all duration-300 animate-pulse-slow`} />
    </motion.div>
  );
};

const SafetyandSecuritySection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Primary background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,77,77,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>

      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)] animate-[slide_20s_linear_infinite] transform -skew-y-12" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)] animate-[slide_15s_linear_infinite] transform skew-y-12" />
      </div>

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Your Safety is Our Priority
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Experience peace of mind with our comprehensive security measures and
            dedicated safety protocols.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
};

export default SafetyandSecuritySection;