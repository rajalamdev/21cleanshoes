"use client"
import React from 'react'
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const slideUp = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
}

const TestimonialCard = ({testi}) => {
    return (
        <motion.div variants={slideUp} initial="hidden" whileInView="visible" className="bg-[#F6F6F6] break-inside-avoid max-w-full h-auto py-12 px-8 rounded-lg mb-20 relative after:border-x-[14px] after:border-x-transparent after:border-t-[16px] after:border-t-[#F6F6F6] after:absolute after:-bottom-4 after:left-8">
            <Image src={"/quote-gray.png"} width={30} height={30} className='-mt-4 mb-4' />
            <p className=' text-[#555]'>{testi.message}</p>
            <p className='absolute text-[#333] -bottom-12 left-8 text-sm'>{testi.name}</p>
        </motion.div>
    )
}

export default TestimonialCard