import { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryimagesData } from '../data';
import GalleryImage from './gallery/GalleryImage';
import ImageModal from './gallery/ImageModal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev === null ? null : (prev + 1) % GalleryimagesData.length
    );
  };

  const handlePrevious = () => {
    setSelectedImage((prev) =>
      prev === null
        ? null
        : (prev - 1 + GalleryimagesData.length) % GalleryimagesData.length
    );
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
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-rose-200 bg-clip-text text-transparent mb-6"
          >
            Our Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Take a visual tour through our beautiful hostel spaces and community life
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GalleryimagesData.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(index)}
              index={index}
            />
          ))}
        </motion.div>

        <ImageModal
          image={selectedImage !== null ? GalleryimagesData[selectedImage] : null}
          onClose={() => setSelectedImage(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </section>
  );
};

export default Gallery;