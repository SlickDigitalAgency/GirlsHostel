import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';
import { testimonialsData } from '../data';

const CARDS_PER_PAGE = 3;
const AUTO_SLIDE_INTERVAL = 5000;

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl p-6 h-full">
        {/* Card Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-rose-500/5 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-purple-500/20 to-transparent">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[slide_3s_linear_infinite]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <motion.img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/20"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/20 to-rose-500/20 blur-sm"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex-grow">
            <Quote className="absolute -left-2 -top-2 w-8 h-8 text-purple-500/20" />
            <p className="text-gray-300 italic relative z-10 px-6">
              {testimonial.review}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors"
          >
            <Play className="w-4 h-4" />
            Watch Video Testimonial
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonialsData.length / CARDS_PER_PAGE);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(nextPage, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextPage]);

  const currentTestimonials = testimonialsData.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(244,63,94,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-rose-200 bg-clip-text text-transparent mb-6"
          >
            What Our Residents Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Real experiences from our community of students who call our hostel their home
          </motion.p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${currentPage}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-purple-500 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;