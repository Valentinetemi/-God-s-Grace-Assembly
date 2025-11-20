'use client'

import { motion } from 'framer-motion'
import { ProgramCard } from './program-card'

const programs = [
  {
    date: 'December 19, 2025',
    time: '6:00 PM - 8:00 PM',
    title: 'Carol Night',
    description: 'Join our voices in beautiful Christmas carols and hymns. A festive evening of worship and celebration with hot refreshments.',
    location: 'Main Sanctuary',
    eventType: 'carol' as const,
  },
  {
    date: 'December 24, 2025',
    time: '11:30 PM - 12:30 AM',
    title: 'Christmas Eve Vigil',
    description: 'Begin Christmas Day with candlelit worship, scripture reading, and communion. A sacred moment to meditate on the Incarnation.',
    location: 'Main Sanctuary',
    eventType: 'service' as const,
  },
  {
    date: 'December 25, 2025',
    time: '7:00 AM - 10:00 AM',
    title: 'Christmas Day Service',
    description: 'The main Christmas celebration with special musical performances, a powerful message, and community breakfast.',
    location: 'Main Sanctuary',
    eventType: 'service' as const,
  },
  {
    date: 'December 26, 2025',
    time: '4:00 PM - 6:00 PM',
    title: 'Youth Concert',
    description: 'Our young people present contemporary Christmas music and inspiring performances of faith. A dynamic celebration of youth ministry.',
    location: 'Fellowship Hall',
    eventType: 'concert' as const,
  },
  {
    date: 'December 27, 2025',
    time: '3:00 PM - 4:30 PM',
    title: 'Children\'s Christmas Party',
    description: 'Games, prizes, caroling, and festive food for all children. Creating precious memories and celebrating Jesus with joy.',
    location: 'Children\'s Ministry Wing',
    eventType: 'kids' as const,
  },
  {
    date: 'December 28, 2025',
    time: '6:00 AM - 7:00 AM',
    title: 'Prayer & Intercession',
    description: 'Start the day in prayer. Intercede for our nation, church, families, and the lost. A sacred time of corporate prayer.',
    location: 'Prayer Chapel',
    eventType: 'prayer' as const,
  },
]

export function ProgramSection() {
  return (
    <section id="program" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-white to-secondary/5">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 opacity-5 pointer-events-none">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <div className="w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide border border-primary/30">
            Our Celebration
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Christmas Programs 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the joy of Christmas through our diverse programs. From carol nights to special services, there's something for everyone.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need more information? Download our Christmas flyer or call the church office.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            {/* Buttons would go here */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
