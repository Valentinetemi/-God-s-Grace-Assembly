'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: '/christmas-worship-church.jpg',
    title: 'Christmas Worship',
    category: 'Worship',
  },
  {
    id: 2,
    src: '/church-choir-singing.jpg',
    title: 'Choir Performance',
    category: 'Music',
  },
  {
    id: 3,
    src: '/christmas-decorations-church.jpg',
    title: 'Festive Decorations',
    category: 'Decoration',
  },
  {
    id: 4,
    src: '/church-community-fellowship.jpg',
    title: 'Community Fellowship',
    category: 'Fellowship',
  },
  {
    id: 5,
    src: '/children-christmas-activity.jpg',
    title: 'Children\'s Activity',
    category: 'Kids',
  },
  {
    id: 6,
    src: '/candle-light-vigil-prayer.jpg',
    title: 'Prayer Vigil',
    category: 'Prayer',
  },
  {
    id: 7,
    src: '/church-service-worship.png',
    title: 'Sunday Service',
    category: 'Service',
  },
  {
    id: 8,
    src: '/youth-christmas-concert.jpg',
    title: 'Youth Concert',
    category: 'Concert',
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide border border-primary/30">
            Memories
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Christmas Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Relive the beautiful moments from our past Christmas celebrations and community events.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index % 3 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-white/70 text-sm">{image.category}</p>
              </div>

              {/* Hover icon */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                width={1000}
                height={600}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-xl">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
