'use client'

import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  left: number
  duration: number
  delay: number
  size: number
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const createSnowflake = (id: number): Snowflake => ({
      id,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 2,
      size: 8 + Math.random() * 8,
    })

    // Create initial snowflakes
    const initialSnowflakes = Array.from({ length: 50 }, (_, i) => 
      createSnowflake(i)
    )
    setSnowflakes(initialSnowflakes)

    // Occasionally add new snowflakes
    const interval = setInterval(() => {
      setSnowflakes(prev => {
        const newSnowflake = createSnowflake(Math.random() * 1000)
        return [...prev.filter(s => s.id < 50), newSnowflake]
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: `${snowflake.left}%`,
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
            animation: `snowfall ${snowflake.duration}s linear ${snowflake.delay}s infinite, sway 3s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  )
}
