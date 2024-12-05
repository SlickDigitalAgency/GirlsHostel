import { motion } from 'framer-motion';
import { useState } from 'react';
import { Bed } from 'lucide-react'; // You can keep this if using Bed icon
// Removed unnecessary React import
import { roomsData } from '../data'; // Assuming Amenity is being used in the data

export default function Accommodation() {
  const [selectedRoom, setSelectedRoom] = useState(roomsData[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(255,255,255,0.04),transparent)] opacity-70" />

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Perfect Space
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comfortable and secure accommodation options tailored to your needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-4 mb-8">
              {roomsData.map((room) => (
                <RoomTab
                  key={room.id}
                  room={room}
                  isSelected={selectedRoom.id === room.id}
                  onClick={() => setSelectedRoom(room)}
                />
              ))}
            </div>

            <motion.div
              key={selectedRoom.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={selectedRoom.image}
                alt={selectedRoom.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-3xl font-bold text-white">
                    {selectedRoom.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-gray-300">Starting from</p>
                    <p className="text-2xl font-bold text-rose-400">
                      Rs. {selectedRoom.price}/mo
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 mb-6">{selectedRoom.description}</p>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-navy-800/50 rounded-2xl p-8 border border-white/5">
              <h4 className="text-xl font-semibold text-white mb-6">
                Room Features
              </h4>
              <ul className="grid gap-4">
                {selectedRoom.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Bed className="w-5 h-5 text-rose-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-800/50 rounded-2xl p-8 border border-white/5">
              <h4 className="text-xl font-semibold text-white mb-6">
                Included Amenities
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {selectedRoom.amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <amenity.icon className="w-5 h-5 text-rose-400" />
                    {amenity.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RoomTab({
  room,
  isSelected,
  onClick,
}: {
  room: (typeof roomsData)[0];
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex-1 p-4 rounded-xl text-left transition-all ${
        isSelected
          ? 'bg-rose-500 text-white'
          : 'bg-navy-800/50 text-gray-300 hover:bg-navy-700/50'
      }`}
    >
      <h3 className="font-semibold mb-1">{room.title}</h3>
      <p className="text-sm opacity-80">From Rs. {room.price}/mo</p>
    </motion.button>
  );
}
