import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { contactDetailsData } from '../data';

const CalltoAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(244,63,94,0.15),transparent_50%)]" />
      </div>

      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)] animate-[slide_20s_linear_infinite] transform -skew-y-12" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)] animate-[slide_15s_linear_infinite] transform skew-y-12" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-rose-200 bg-clip-text text-transparent mb-6"
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            Experience the perfect blend of comfort, security, and community in our hostel
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <ContactCard
              icon={Phone}
              title="Call Us"
              content={contactDetailsData.phone}
              delay={0}
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              content={contactDetailsData.email}
              delay={0.1}
            />
            <ContactCard
              icon={MapPin}
              title="Visit Us"
              content={contactDetailsData.address}
              delay={0.2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-xl text-white font-semibold text-lg group-hover:from-purple-600 group-hover:to-rose-600 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Stay Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-rose-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon: Icon,
  title,
  content,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
    className="relative group"
  >
    <div className="relative p-6 bg-navy-800/50 backdrop-blur-sm rounded-xl border border-white/10">
      <div className="flex flex-col items-center gap-3">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-rose-500/20">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

export default CalltoAction;