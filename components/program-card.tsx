'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface ProgramCardProps {
  date: string
  time: string
  title: string
  description: string
  location: string
  eventType: 'carol' | 'service' | 'concert' | 'kids' | 'prayer'
  index: number
}

export function ProgramCard({
  date,
  time,
  title,
  description,
  location,
  eventType,
  index,
}: ProgramCardProps) {
  const getTypeColor = (type: string) => {
    const colors = {
      carol: 'bg-secondary/20 text-secondary border-secondary/30',
      service: 'bg-primary/20 text-primary border-primary/30',
      concert: 'bg-accent/20 text-accent border-accent/30',
      kids: 'bg-destructive/20 text-destructive border-destructive/30',
      prayer: 'bg-secondary/20 text-secondary border-secondary/30',
    }
    return colors[type as keyof typeof colors] || colors.service
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      carol: 'Carol Night',
      service: 'Service',
      concert: 'Concert',
      kids: 'Kids Event',
      prayer: 'Prayer Meeting',
    }
    return labels[type as keyof typeof labels] || 'Event'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card className="group relative h-full overflow-hidden border-secondary/30 bg-gradient-to-br from-white to-secondary/5 hover:border-secondary/60 transition-all duration-300">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8 flex flex-col h-full">
          {/* Top Badge */}
          <Badge className={`w-fit mb-4 ${getTypeColor(eventType)}`}>
            {getTypeLabel(eventType)}
          </Badge>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
            {description}
          </p>

          {/* Event Details */}
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-center gap-3 text-secondary">
              <Calendar size={18} className="flex-shrink-0" />
              <span className="font-medium">{date}</span>
            </div>
            <div className="flex items-center gap-3 text-secondary">
              <Clock size={18} className="flex-shrink-0" />
              <span className="font-medium">{time}</span>
            </div>
            <div className="flex items-center gap-3 text-secondary">
              <MapPin size={18} className="flex-shrink-0" />
              <span className="font-medium">{location}</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="w-full bg-gradient-to-r from-primary to-destructive hover:shadow-md"
              size="sm"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
