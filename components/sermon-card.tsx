'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Calendar, Users, Play } from 'lucide-react'
import Image from 'next/image'

interface SermonCardProps {
  title: string
  speaker: string
  date: string
  category: string
  image: string
  index: number
}

export function SermonCard({
  title,
  speaker,
  date,
  category,
  image,
  index,
}: SermonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <Card className="group overflow-hidden border-secondary/20 bg-white hover:border-secondary/50 transition-all duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden h-48 sm:h-56 bg-gradient-to-br from-primary/20 to-secondary/20">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </motion.div>
          </div>

          {/* Category badge */}
          <Badge className="absolute top-3 left-3 bg-primary text-white hover:bg-primary/90">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-destructive transition-colors">
            {title}
          </h3>

          {/* Details */}
          <div className="space-y-2 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{speaker}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
          </div>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full border-secondary text-secondary hover:bg-secondary/10"
            >
              Watch Sermon
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
