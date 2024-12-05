import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

const TimelineSection = ({ events }: TimelineSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative pt-8">
      {/* Vertical timeline line */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-4 top-10 bottom-10 w-[2px] bg-rose-500/20 origin-top"
      />

      <div className="space-y-12 justify-center">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12"
          >
            {/* Timeline point */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.5, delay: index * 0.1 }}
              className="absolute left-[14px] w-2 h-2 rounded-full bg-rose-500 transform -translate-x-1/2"
            >
              <div className="absolute inset-0 rounded-full bg-rose-500 animate-pulse-slow" />
            </motion.div>

            {/* Timeline content */}
            <div className="bg-navy-800/50 rounded-xl p-6 border border-white/5">
              <span className="text-rose-400 font-semibold">{event.year}</span>
              <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                {event.title}
              </h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
