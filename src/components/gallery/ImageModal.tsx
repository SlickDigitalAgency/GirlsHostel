import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  image: {
    src: string;
    caption: string;
  } | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal = ({ image, onClose, onPrevious, onNext }: ImageModalProps) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-7xl mx-auto px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative">
            <img
              src={image.src}
              alt={image.caption}
              className="max-h-[80vh] rounded-lg object-contain"
            />

            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={onPrevious}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors transform -translate-x-1/2"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={onNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors transform translate-x-1/2"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4"
          >
            <p className="text-white text-lg">{image.caption}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;