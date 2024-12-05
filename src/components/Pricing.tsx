import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { pricingPlansData } from '../data';

const PricingToggle = ({ isMonthly, onToggle }: { isMonthly: boolean; onToggle: () => void }) => (
  <motion.div 
    className="flex items-center justify-center space-x-4 mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <span className={`text-lg ${!isMonthly ? 'text-purple-400' : 'text-gray-400'}`}>Weekly</span>
    <div 
      className="relative w-16 h-8 bg-navy-800 rounded-full cursor-pointer"
      onClick={onToggle}
    >
      <motion.div 
        className="absolute w-6 h-6 bg-purple-500 rounded-full top-1"
        animate={{ left: isMonthly ? '2px' : '34px' }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
    <span className={`text-lg ${isMonthly ? 'text-purple-400' : 'text-gray-400'}`}>Monthly</span>
  </motion.div>
);

const PricingCard = ({
  plan,
  isMonthly,
  isPopular,
  index
}: {
  plan: typeof pricingPlansData[0];
  isMonthly: boolean;
  isPopular: boolean;
  index: number;
}) => {
  const price = isMonthly ? plan.priceMonthly : plan.priceWeekly;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-rose-500/5 rounded-2xl" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/10 via-transparent to-rose-500/10 rounded-2xl" />
      
      {/* Card content */}
      <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-navy-900/50">
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold"
            >
              <Star className="w-4 h-4 fill-current" /> Most Popular
            </motion.div>
          </div>
        )}

        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
          <div className="relative">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
              ${price}
            </span>
            <span className="text-gray-400 ml-2">
              / {isMonthly ? 'month' : 'week'}
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {plan.features?.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-purple-500" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-rose-500 text-white font-semibold relative group overflow-hidden"
        >
          <span className="relative z-10">Choose Plan</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

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
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Select the perfect accommodation plan that suits your needs and budget
          </motion.p>
        </div>

        <PricingToggle isMonthly={isMonthly} onToggle={() => setIsMonthly(!isMonthly)} />

        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlansData.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isMonthly={isMonthly}
                isPopular={index === 1}
                index={index}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;