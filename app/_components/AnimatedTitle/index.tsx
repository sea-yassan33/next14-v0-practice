'use client'

import { motion } from 'framer-motion'

export default function AnimatedTitle() {
  return (
    <>
      <motion.h1 
        className="text-5xl font-bold text-purple-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ポップでクリエイティブな<br />ソリューションを提供
      </motion.h1>
      <motion.p 
        className="text-xl text-purple-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        私たちは、あなたのビジネスを次のレベルへ導きます
      </motion.p>
    </>
  )
}