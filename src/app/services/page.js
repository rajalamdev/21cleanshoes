"use client"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function Services(){
    return (
        <>
            <Navbar />
            <main>
                <section className="bg-white pt-36 pb-12 px-4 md:px-12 lg:px-24">
                    <motion.div variants={widthToRight}
                            initial="hidden"
                            whileInView="visible" className="border-b-[3px] pb-2 mb-12">
                            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">SERVICES</motion.h2>
                    </motion.div>
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="flex-1 text-sm sm:text-base flex justify-end space-x-4">
                        <Link href="/" className="font-medium">Home</Link>
                        <span>/</span>
                        <span className="text-black/60">Services</span>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    )
}