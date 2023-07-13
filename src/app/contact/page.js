"use client"
import Image from "next/image";
import Footer from "../components/Footer";
import SimpleMap from "../components/GoogleMap";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const widthToRight = {
    hidden: {
      width: 0
    }, 
    visible: {
      width: "auto",
      transition: {
        ease: "linear",
        duration: .5,
      }
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

export default function Contact(){
    return (
        <>
            <Navbar />
            <main>
                <section className="bg-white pt-36 pb-12 px-4 md:px-12 lg:px-24">
                    <motion.div variants={widthToRight}
                            initial="hidden"
                            whileInView="visible" className="border-b-[3px] pb-2 mb-12">
                            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">CONTACT</motion.h2>
                    </motion.div>
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="flex-1 text-sm sm:text-base flex justify-end space-x-4">
                        <Link href="/" className="font-medium">Home</Link>
                        <span>/</span>
                        <span className="text-black/60">Contact</span>
                    </motion.div>
                </section>
                <section className="bg-white px-4 md:px-12 lg:px-24">
                  <SimpleMap />
                </section>
                <section className="bg-white py-12 px-4 md:px-12 lg:px-24 flex flex-col gap-8 flex-wrap">
                  <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='flex gap-4'>
                    <Image src={"/contact/location-icon-black.png"} alt='location icon' width={40} height={40} className='self-start scale-[.75]' />
                    <div>
                      <h6 className='text-[#80888A] text-base mb-2'>Workshop</h6>
                      <a href="https://goo.gl/maps/yEdcs8GTYHeoG7Cr9" target="_blank" className='text-black hover:underline text-sm'>Jl. Pelabuhan II, Nyomplong, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43131</a>
                      <p className="text-sm text-black/60 mt-2">Sukabumi - Indonesia</p>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className='flex gap-4'>
                    <Image src={"/contact/time-icon-black.png"} alt='location icon' width={40} height={40} className='self-start' />
                    <div>
                      <h6 className='text-[#80888A] text-base mb-2'>Jam Operasional</h6>
                      <a href="https://goo.gl/maps/yEdcs8GTYHeoG7Cr9" target="_blank" className='text-black hover:underline text-sm'>Senin - Jumat : 08.00 - 17.00</a>
                    </div>
                  </motion.div>
                </section>
                <ContactForm />
            </main>
            <Footer />
        </>
    )
}