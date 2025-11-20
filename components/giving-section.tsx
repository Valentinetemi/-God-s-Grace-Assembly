'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Gift, Heart, Zap } from 'lucide-react'
import { useState } from 'react'

export function GivingSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000)
  const [customAmount, setCustomAmount] = useState('')

  const quickAmounts = [
    { value: 1000, label: '₦1k' },
    { value: 5000, label: '₦5k' },
    { value: 10000, label: '₦10k' },
    { value: 25000, label: '₦25k' },
  ]

  const handlePaystackPayment = () => {
    const amount = customAmount ? parseInt(customAmount) * 100 : selectedAmount! * 100
    // Paystack integration would go here
    console.log('Processing Paystack payment:', amount)
  }

  const handleFlutterwavePayment = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount
    // Flutterwave integration would go here
    console.log('Processing Flutterwave payment:', amount)
  }

  return (
    <section id="giving" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm uppercase tracking-wide border border-secondary/30">
            Give With Purpose
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Online Giving
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your generosity supports our ministry, helps the needy, and advances God's kingdom. Give securely through Paystack or Flutterwave.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Why Give */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: 'Support Ministry',
                  desc: 'Help us reach more souls and strengthen our community outreach.',
                },
                {
                  icon: Gift,
                  title: 'Help The Needy',
                  desc: 'Your gift provides food, shelter, and hope to those in need during Christmas.',
                },
                {
                  icon: Zap,
                  title: 'Advance Kingdom',
                  desc: 'Partner with us in spreading the Gospel and building God\'s kingdom.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center">
                      <item.icon className="text-secondary w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Giving Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-secondary/30 bg-gradient-to-br from-white to-secondary/5">
              <h3 className="text-2xl font-bold text-primary mb-6">Select Amount</h3>

              {/* Quick amounts */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {quickAmounts.map((amount) => (
                  <motion.button
                    key={amount.value}
                    onClick={() => {
                      setSelectedAmount(amount.value)
                      setCustomAmount('')
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                      selectedAmount === amount.value && !customAmount
                        ? 'bg-gradient-to-r from-primary to-destructive text-white shadow-lg'
                        : 'bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20'
                    }`}
                  >
                    {amount.label}
                  </motion.button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-3">
                  Or enter custom amount (₦)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary/20 focus:border-secondary focus:outline-none bg-white text-primary placeholder-muted-foreground"
                />
              </div>

              {/* Display selected amount */}
              <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Amount to Give:</p>
                <p className="text-3xl font-bold text-primary">
                  ₦{(customAmount ? parseInt(customAmount) : selectedAmount || 0).toLocaleString()}
                </p>
              </div>

              {/* Payment methods */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-muted-foreground uppercase mb-4">Choose Payment Method</p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handlePaystackPayment}
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-destructive hover:shadow-lg text-white font-bold"
                  >
                    Give via Paystack
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleFlutterwavePayment}
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold"
                  >
                    Give via Flutterwave
                  </Button>
                </motion.div>
              </div>

              {/* Security note */}
              <p className="text-xs text-muted-foreground text-center mt-6">
                🔒 Your transaction is secure and encrypted. All donations are tax-deductible.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
