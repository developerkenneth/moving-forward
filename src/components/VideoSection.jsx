import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "live video of us on site",
    src: "src/assets/videos/working.mp4",
  },
  {
    id: 2,
    title: "See Our Machines",
    src: "src/assets/videos/machines.mp4",
  },
];

export default function VideoSection() {
  return (
    <section className=" opacity-0 transition-opacity duration-1000 ease-in-out bg-white text-gray-900 py-12 px-6">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Company in Action
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="bg-gray-100 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <video
                controls
                className="w-full h-100 rounded-lg object-cover"
                src={video.src}
              ></video>
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}