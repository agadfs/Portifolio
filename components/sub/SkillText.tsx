"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
     
      <motion.div
        variants={slideInFromLeft(4)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        My skills (Level measured by time of usage, and coding speed):
        
      </motion.div>
      
    </div>
  )
}

export default SkillText