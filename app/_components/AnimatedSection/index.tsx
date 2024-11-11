'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">なぜ私たちを選ぶのか</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: '創造性', description: '常に新しいアイデアを生み出します' },
          { title: '専門性', description: '経験豊富な専門家がサポートします' },
          { title: '結果重視', description: '目に見える成果を追求します' }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">{feature.title}</h3>
            <p className="text-purple-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}