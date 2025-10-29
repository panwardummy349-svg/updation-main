'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'




export default function BackgroundSlideshow({images,children}) {
  const [index, setIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 5000) // change every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (

    <div className="relative w-full h-screen overflow-hidden opacity-60">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>
      {/* Optional content overlay */}
      <div className="absolute inset-0 z-7 flex items-center left-1/4 bg-opacity-100">
        {children}
      </div>
    </div>)
  
}
