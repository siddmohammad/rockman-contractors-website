import React from 'react'
import { motion } from 'framer-motion'

const Gallery = ({ selectedImage, setSelectedImage }) => {
  const images = [
    { id: 1, src: "/gallery/Interior1.jpg", alt: "Interior painting project" },
    { id: 2, src: "/gallery/Exteriorhouse.jpg", alt: "Exterior painting" },
    { id: 3, src: "gallery/InteriorWall2.jpg", alt: "Stair-case transformation" },
    { id: 4, src: "/gallery/InterirorWall3.jpg", alt: "Entertainment room transformation" },
    { id: 5, src: "gallery/FeatureWall1.jpg", alt: "Hallway transformation" },
    { id: 6, src: "gallery/exteriorPainting.jpg", alt: "Weatherproof coating" },
    { id: 7, src: "gallery/KitchenJob.jpg", alt: "Kitchen renovation" },
    { id: 8, src: "gallery/officeExterior.png", alt: "Office building exterior" }
  ]

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-yellow-400">Work</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            See the quality and attention to detail in every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg border border-yellow-500 bg-black"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
