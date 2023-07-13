"use client"
import Image from "next/image";
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

export default function Gallery(){
  const galleries = ["/gallery/gallery-1.jpeg", "/gallery/gallery-2.jpeg", "/gallery/gallery-3.jpeg",
  "/gallery/gallery-4.jpeg", "/gallery/gallery-5.jpeg", "/gallery/gallery-6.jpeg",
  "/gallery/gallery-7.jpeg", "/gallery/gallery-8.jpeg", "/gallery/gallery-9.jpeg",
  "/gallery/gallery-10.jpeg", "/gallery/gallery-11.jpeg", "/gallery/gallery-12.jpeg",
  "/gallery/gallery-13.jpeg", "/gallery/gallery-14.jpeg", "/gallery/gallery-15.jpeg", 
  "/gallery/gallery-16.jpeg", "/gallery/gallery-17.jpeg", "/gallery/gallery-18.jpeg",]

    return (
        <>
            <Navbar />
            <main>
                <section className="bg-white pt-36 pb-12 px-4 md:px-12 lg:px-24">
                    <motion.div variants={widthToRight}
                            initial="hidden"
                            whileInView="visible" className="border-b-[3px] pb-2 mb-12">
                            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">GALLERY</motion.h2>
                    </motion.div>
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="flex-1 text-sm sm:text-base flex justify-end space-x-4">
                        <Link href="/" className="font-medium">Home</Link>
                        <span>/</span>
                        <span className="text-black/60">Gallery</span>
                    </motion.div>
                    <div className="mt-12 columns-2 lg:columns-3 gap-2 sm:gap-4">
                      {galleries.map((gallery, i) => {
                        return (
                          <motion.div key={i} variants={slideUp} initial="hidden" whileInView="visible" className="mb-2 sm:mb-4 break-inside-avoid rounded-lg overflow-hidden mx-auto">
                            <Image loading="lazy" src={gallery} width={300} height={300} alt="gallery" className="w-full aspect-auto"/>
                          </motion.div>
                        )
                      })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}