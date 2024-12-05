import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Mail, Phone, Send, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
}

const InputField = ({ 
  icon: Icon, 
  ...props 
}: { 
  icon: any;
  [key: string]: any;
}) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
      <Icon className="w-5 h-5" />
    </div>
    <input
      {...props}
      className="w-full bg-navy-800/50 border border-white/10 rounded-xl py-3 px-12
        text-white placeholder-gray-400 focus:outline-none focus:border-purple-500
        transition-colors duration-300"
    />
  </div>
);

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'single',
    guests: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(244,63,94,0.15),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-rose-200 bg-clip-text text-transparent mb-6"
          >
            Book Your Stay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Reserve your room in just a few simple steps
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl bg-navy-900/50 backdrop-blur-sm border border-white/10"
          >
            <InputField
              icon={Users}
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setFormData(prev => ({ ...prev, name: e.target.value }))}
            />

            <InputField
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setFormData(prev => ({ ...prev, email: e.target.value }))}
            />

            <InputField
              icon={Phone}
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />

            <InputField
              icon={Calendar}
              type="date"
              value={formData.checkIn}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setFormData(prev => ({ ...prev, checkIn: e.target.value }))}
            />

            <InputField
              icon={Calendar}
              type="date"
              value={formData.checkOut}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setFormData(prev => ({ ...prev, checkOut: e.target.value }))}
            />

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                <Clock className="w-5 h-5" />
              </div>
              <select
                value={formData.roomType}
                onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value }))}
                className="w-full bg-navy-800/50 border border-white/10 rounded-xl py-3 px-12
                  text-white appearance-none focus:outline-none focus:border-purple-500
                  transition-colors duration-300"
              >
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="triple">Triple Room</option>
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`md:col-span-2 flex items-center justify-center gap-2 py-4 rounded-xl
                bg-gradient-to-r from-purple-500 to-rose-500 text-white font-semibold
                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-purple-600 hover:to-rose-600'}
                transition-all duration-300`}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Processing...' : 'Book Now'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;