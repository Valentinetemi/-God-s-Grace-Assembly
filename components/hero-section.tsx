'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from './countdown-timer'
import { Snowfall } from './snowfall'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-white to-background">
      {/* Snowfall Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Snowfall />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-block mb-6 px-6 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm uppercase tracking-wide border border-secondary/30">
            ✨ Celebrate Jesus with Us
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
        >
          <span className="block text-primary">Merry Christmas</span>
          <span className="block bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent mt-2"> 
            from God’s Grace Assembly
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
        >
          Join us in celebrating the birth of our Lord Jesus Christ with joy, fellowship, and the warmth of community. Experience blessing and Christmas cheer this season.
        </motion.p>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Countdown to Christmas
          </p>
          <CountdownTimer />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-destructive hover:shadow-lg text-white font-semibold px-8 py-6 text-base glow-red"
              asChild
            >
              <a href="#livestream">Join Our Christmas Service</a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold px-8 py-6 text-base"
              asChild
            >
              <a href="#program">See Our Program</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <a href="#program" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
