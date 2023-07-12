"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

const Footer = () => {
  return (
    <footer className='snap-start relative'>
        <div className='bg-[#272D2E] flex justify-between flex-wrap gap-8 py-12 md:px-12 lg:px-24 px-6'>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='flex gap-8'>
                <Image src={"/footer/phone-icon.png"} alt='phone icon' width={40} height={40} className='self-start' />
                <div>
                  <h6 className='text-[#80888A] text-sm sm:text-base mb-2'>Whatsapp Kami</h6>
                  <a href="https://wa.link/ovmaki" target='_blank' className='text-white hover:underline text-base sm:text-xl'>081563882792</a>
                </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='flex gap-8'>
                <Image src={"/footer/location-icon.png"} alt='location icon' width={40} height={40} className='self-start scale-[.75]' />
                <div>
                  <h6 className='text-[#80888A] text-sm sm:text-base mb-2'>Workshop</h6>
                  <a href="https://goo.gl/maps/yEdcs8GTYHeoG7Cr9" target='_blank' className='text-white hover:underline text-base sm:text-xl'>Jl. Pelabuhan II, Nyomplong, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43131</a>
                </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='flex gap-8'>
                <Image src={"/footer/email-icon.png"} alt='email icon' width={40} height={40} className='self-start' />
                <div>
                  <h6 className='text-[#80888A] text-sm sm:text-base mb-2'>Email Kami</h6>
                  <a href="#" className='text-white hover:underline text-base sm:text-xl'>21cleanshoe@gmail.com</a>
                </div>
            </motion.div>

        </div >
        <div className='bg-[#343C3E] py-12 md:px-12 lg:px-24 px-6'>
          <div className='flex justify-self sm:justify-center flex-wrap sm:gap-8 gap-20'>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='space-y-4 sm:flex-1'>
              <h5 className='mb-8 text-white font-medium'>NAVIGASI</h5>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} alt='list arrow' width={15} height={15} />
                <Link href="/" className='text-white hover:underline'>Home</Link>
              </div>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} alt='list arrow' width={15} height={15} />
                <Link href="/about" className='text-white hover:underline'>About</Link>
              </div>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} alt='list arrow' width={15} height={15} />
                <Link href="/services" className='text-white hover:underline'>Services</Link>
              </div>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} alt='list arrow' width={15} height={15} />
                <Link href="/gallery" className='text-white hover:underline'>Gallery</Link>
              </div> 
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} alt='list arrow' width={15} height={15} />
                <Link href="/contact" className='text-white hover:underline'>Contact</Link>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='space-y-8 sm:flex-1'>
              <h5 className='text-white font-medium'>ABOUT US</h5>
              <p className='text-[#B6BDBF]'>21CLEANSHOES merupakan usaha yang bergerak dibidang jasa laundry cuci sepatu berkualitas yang berasal dari Kota Sukabumi.</p>
              <div className='pt-4'>
                <Link href={"/about"} className='bg-[#40484A] text-white text-sm px-12 py-4 rounded-full'>Learn More</Link>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='sm:flex-1'>
              <p className='text-[#B6BDBF] mb-8'>Follow kita di Instagram untuk mendapatkan update tentang promo-promo menarik</p>
              <a href="https://www.instagram.com/21cleanshoes/" target='_blank'>
                <Image src={"/footer/ig-follow-button.png"} alt='instagram follow button' width={150} height={150} />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='flex justify-center py-12 gap-8'>
            <a href="https://es-la.facebook.com/21cleanshoes/photos/" target='_blank'>
              <Image src={"/footer/fb-icon.svg"} alt='facebook follow button' width={50} height={50} />
            </a>
            <a href="https://www.instagram.com/21cleanshoes/" target='_blank'>
              <Image src={"/footer/ig-icon.svg"} alt='instagram follow button' width={50} height={50} />
            </a>
            <a href="https://wa.link/ovmaki" target='_blank'>
              <Image src={"/footer/wa-icon.svg"} alt='whatsapp contact button' width={50} height={50} target='_blank' />
            </a>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='text-[#B6BDBF]'>
            <p className='text-center'>{"Copyright ©2023 21CLEANSHOES"}</p>
          </motion.div>
        </div>
    </footer>
  )
}

export default Footer