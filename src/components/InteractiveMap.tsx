import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, School, ShoppingBag, Coffee } from 'lucide-react';
import { InteractiveMaplocationsData } from '../data';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapController = () => {
  const map = useMap();
  
  useEffect(() => {
    map.zoomControl.setPosition('topright');
  }, [map]);
  
  return null;
};

const LocationCard = ({ location, isHovered }: { location: any; isHovered: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className={`absolute left-4 right-4 bottom-20 md:left-8 p-6 rounded-xl backdrop-blur-md
      ${isHovered ? 'bg-white/10' : 'bg-navy-900/80'} border border-white/10
      transition-colors duration-300`}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-purple-500/20">
        <MapPin className="w-6 h-6 text-purple-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{location.name}</h3>
        <p className="text-gray-300">{location.details}</p>
        <div className="flex gap-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

const NearbyPlaces = () => (
  <div className="absolute top-4 right-4 space-y-2">
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2 p-3 rounded-lg bg-navy-900/80 backdrop-blur-md border border-white/10"
    >
      <School className="w-5 h-5 text-purple-400" />
      <span className="text-white">Universities Nearby</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-2 p-3 rounded-lg bg-navy-900/80 backdrop-blur-md border border-white/10"
    >
      <ShoppingBag className="w-5 h-5 text-rose-400" />
      <span className="text-white">Shopping Centers</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="flex items-center gap-2 p-3 rounded-lg bg-navy-900/80 backdrop-blur-md border border-white/10"
    >
      <Coffee className="w-5 h-5 text-amber-400" />
      <span className="text-white">Cafes & Restaurants</span>
    </motion.div>
  </div>
);

const InteractiveMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(244,63,94,0.15),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-rose-200 bg-clip-text text-transparent mb-6"
          >
            Explore Our Location
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Discover the perfect location with easy access to universities, shopping centers, and more
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10"
        >
          <MapContainer
            center={InteractiveMaplocationsData[0].coordinates as LatLngExpression}
            zoom={13}
            className="h-full w-full"
          >
            <MapController />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            
            {InteractiveMaplocationsData.map((location) => (
              <Marker
                key={location.id}
                position={location.coordinates as LatLngExpression}
                eventHandlers={{
                  mouseover: () => setHoveredLocation(location.id),
                  mouseout: () => setHoveredLocation(null),
                  click: () => setSelectedLocation(location.id),
                }}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>

          <NearbyPlaces />

          <AnimatePresence>
            {selectedLocation && (
              <LocationCard
                location={InteractiveMaplocationsData.find(l => l.id === selectedLocation)}
                isHovered={hoveredLocation === selectedLocation}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMap;