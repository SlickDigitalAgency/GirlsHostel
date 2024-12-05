import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Users, MapPin } from 'lucide-react';
import TimelineSection from './about/TimelineSection';
import ImageCarousel from './about/ImageCarousel';
import { timelineEventsData, carouselImagesData } from '../data';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div style={{ opacity, y }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Since 2015, we've been providing a safe and nurturing environment
            for female students pursuing their dreams in Rawalpindi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 rounded-2xl bg-rose-500/5" />
              <div className="relative space-y-6">
                <ValueProposition
                  icon={BookOpen}
                  title="Academic Excellence"
                  description="Dedicated study areas and a quiet environment to help you excel in your studies."
                />
                <ValueProposition
                  icon={Users}
                  title="Vibrant Community"
                  description="Join a community of ambitious young women pursuing their educational goals."
                />
                <ValueProposition
                  icon={MapPin}
                  title="Strategic Location"
                  description="Conveniently located near major universities and public transport routes."
                />
              </div>
            </div>

            <TimelineSection events={timelineEventsData} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ImageCarousel images={carouselImagesData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueProposition({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ x: 5 }} className="flex gap-4 group">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
          <Icon className="w-6 h-6 text-rose-300" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-rose-50 mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
