'use client'

import { motion } from 'framer-motion'
import { SermonCard } from './sermon-card'

const sermons = [
  {
    title: 'The Incarnation: God With Us',
    speaker: 'Pastor Emmanuel Adeyemi',
    date: 'December 21, 2024',
    category: 'Christmas',
    image: '/nativity-and-christmas-theme.jpg',
  },
  {
    title: 'Born for a Purpose',
    speaker: 'Pastor Sarah Okonkwo',
    date: 'December 18, 2024',
    category: 'Purpose',
    image: '/jesus-birth-nativity.jpg',
  },
  {
    title: 'Joy to the World',
    speaker: 'Bishop Kunle Toyin',
    date: 'December 14, 2024',
    category: 'Christmas',
    image: '/christmas-joy-celebration.jpg',
  },
  {
    title: 'The Savior\'s Love',
    speaker: 'Pastor Tunde Oladimeji',
    date: 'December 7, 2024',
    category: 'Love',
    image: '/jesus-love-redemption.jpg',
  },
  {
    title: 'Miracles of the Season',
    speaker: 'Pastor Grace Adekunle',
    date: 'November 30, 2024',
    category: 'Miracles',
    image: '/miracles-faith-inspiration.jpg',
  },
  {
    title: 'Hope in Dark Times',
    speaker: 'Pastor Michael Adeoye',
    date: 'November 23, 2024',
    category: 'Hope',
    image: '/hope-light-darkness.jpg',
  },
]

export function SermonSection() {
  return (
    <section id="sermons" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm uppercase tracking-wide border border-secondary/30">
            Audio & Video
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Sermon Archive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Listen to inspiring messages from our pastoral team. All sermons are available online for your spiritual growth and encouragement.
          </p>
        </motion.div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sermons.map((sermon, index) => (
            <SermonCard key={index} {...sermon} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-secondary to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            View Full Archive
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
