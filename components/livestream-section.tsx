'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Play, Radio } from 'lucide-react'

export function LiveStreamSection() {
  return (
    <section id="livestream" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/5 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide border border-primary/30">
            Watch Now
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Join Our Live Stream
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Can't make it to church? Stream our Christmas services live. Worship with us from anywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30">
              {/* Iframe placeholder for YouTube/Vimeo */}
              <div className="aspect-video bg-black/80 flex items-center justify-center relative group">
                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 transition-colors cursor-pointer"
                >
                  <div className="w-20 h-20 bg-destructive rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                </motion.div>

                {/* Placeholder text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <Radio className="w-12 h-12 text-destructive mb-4 animate-pulse" />
                  <p className="text-white font-bold text-lg">LIVE</p>
                  <p className="text-white/60 text-sm mt-2">Christmas Day Service - Dec 25, 7:00 AM</p>
                </div>

                {/* Embed code would go here */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                  title="Grace & Glory Christmas Service"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Live badge */}
              <div className="absolute top-4 right-4 z-10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Service Times */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="font-bold text-primary mb-4 text-lg">Service Times</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase">Christmas Eve</p>
                  <p className="text-primary font-bold">11:30 PM</p>
                </div>
                <div className="border-t border-primary/10 pt-3">
                  <p className="text-sm font-semibold text-muted-foreground uppercase">Christmas Day</p>
                  <p className="text-primary font-bold">7:00 AM</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                'Watch in HD quality',
                'Real-time chat & comments',
                'Share with family & friends',
                'Access replay within 24 hours',
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="w-full bg-gradient-to-r from-primary to-destructive hover:shadow-lg glow-red">
                Watch Live Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
