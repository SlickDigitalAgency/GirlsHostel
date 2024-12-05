import { motion } from 'framer-motion';
import { Expand, X } from 'lucide-react';

interface GalleryImageProps {
  image: {
    id: number;
    src: string;
    caption: string;
  };
  onClick: () => void;
  index: number;
}

const GalleryImage = ({ image, onClick, index }: GalleryImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group aspect-square"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-rose-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.02 }}
      />
      
      <img
        src={image.src}
        alt={image.caption}
        className="w-full h-full object-cover rounded-2xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-4 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <Expand className="w-6 h-6 text-white" />
          </motion.button>
          <p className="text-white text-center font-medium">{image.caption}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryImage;