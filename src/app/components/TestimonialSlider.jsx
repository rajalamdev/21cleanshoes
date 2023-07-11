"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, wrap } from "framer-motion";
import { testimonials } from '../../../utils/data';

const fadeInPopUp = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    }
}

const fadeIn = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

const swipe = {
    hidden: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    visible: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

const TestimonialSlider = () => {
    const [[pageTesti, directionTesti], setPageTesti] = useState([0, 0]);
    const testiIndex = wrap(0, testimonials.length, pageTesti);
    const testiPaginateHandler = (newDirection) => {
        setPageTesti([pageTesti + newDirection, newDirection])
    }

    return (
        <section className="relative bg-[url('/testi-bg.png')] h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
          <motion.button onClick={() => testiPaginateHandler(-1)} variants={fadeInPopUp} whileHover={{translateX: -2}} initial="hidden" whileInView="visible" className="absolute left-2 sm:left-8">
            <Image src={"/testimonials/arrow.png"} width={60} height={60} alt="testi left arrow button" className="scale-[.8] sm:scale-100 cursor-pointer" />
          </motion.button>
          <AnimatePresence mode="wait" custom={directionTesti} >
            <motion.div className="flex items-center flex-col" key={pageTesti} variants={swipe} custom={directionTesti} initial="hidden" animate="visible" exit="exit" transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: {duration: 0.2}
              }}>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="relative">
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                  <Image alt="quote icon" src={"/quote.png"} width={30} height={30} className="absolute sm:-left-16 -left-8 -top-8" />
                </motion.div>
                <motion.p variants={fadeIn} initial="hidden" whileInView="visible" className="text-white text-base text-center sm:text-xl w-60 sm:w-[560px]">{testimonials[testiIndex].headline}</motion.p>
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                  <Image alt="quote icon" src={"/quote.png"} width={30} height={30} className="rotate-180 absolute sm:-right-16 -right-8" />
                </motion.div>
              </motion.div>
              <motion.div initial={{opacity: 0, width: 0}} whileInView={{opacity: 1, width: 96}} className="mt-8 h-[2px] w-24 bg-white"></motion.div>
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible"> 
                  <motion.p variants={fadeIn} initial="hidden" whileInView="visible" className="text-white mt-8">{testimonials[testiIndex].name}</motion.p>
                </motion.div>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                  <Image src={testimonials[testiIndex].image} alt="Testimonial person image" width={80} height={80} className="rounded-full mt-8 scale-90 sm:scale-100" />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <motion.button onClick={() => testiPaginateHandler(1)} variants={fadeInPopUp} whileHover={{translateX: 2}} initial="hidden" whileInView="visible" className="absolute right-2 sm:right-10">
            <Image src={"/testimonials/arrow.png"} width={60} height={60} alt="testi right arrow button" className="scale-[.8] sm:scale-100 rotate-180 cursor-pointer" />
          </motion.button>
        </section>
    )
}

export default TestimonialSlider