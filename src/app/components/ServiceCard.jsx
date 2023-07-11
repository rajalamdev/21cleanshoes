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

const ServicesCard = ({service}) => {
    return (
        <motion.div key={service.headline} variants={slideUp} initial="hidden" whileInView="visible" className="bg-white py-12 flex flex-col items-center h-full rounded-xl">
            <div>
                <Image src={service.image} width={250} height={300} alt="services image" />
            </div>
            <div className="-mt-12 space-y-4 px-12">
                <h3 className="text-center font-semibold md:text-lg border-b-2 border-b-black pb-2 w-max mx-auto">{service.headline}</h3>
                <p className="text-center text-[#333]">{service.desc}</p>
            </div>
        </motion.div>
    )
}

export default ServicesCard