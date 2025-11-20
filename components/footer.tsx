'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Phone, MapPin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#program' },
    { label: 'Sermons', href: '#sermons' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-primary/5 to-primary text-white">
      {/* Decorative top element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <span className="text-xl font-bold">Grace & Glory</span>
            </div>
            <p className="text-white/70 mb-6">
              Celebrating the birth of our Lord Jesus Christ with joy, community, and the warmth of God's love.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Service Hours</h3>
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <p className="font-semibold text-white">Sunday Worship</p>
                <p>7:00 AM - 10:00 AM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Wednesday Prayer</p>
                <p>6:30 PM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Friday Night Live</p>
                <p>7:00 PM - 9:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">+234 (0) 803 XXX XXXX</p>
                  <p className="text-xs">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">info@graceandglory.ng</p>
                  <p className="text-xs">Email us</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Lagos, Nigeria</p>
                  <p className="text-xs">Our location</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl overflow-hidden border border-white/20 h-64"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.296573172841!2d3.3792!3d6.6271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ee9f42f33de91cd%3A0x146854cc98e6c32!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {currentYear} Grace & Glory Church. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-destructive fill-destructive" />
            </motion.span>
            for God's glory
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
