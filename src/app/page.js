"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { wrap } from "framer-motion";
import { images, testimonials } from "../../utils/data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesCard from "./components/ServiceCard";
import TestimonialSlider from "./components/TestimonialSlider";

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

  const widthMaxToRight = {
    hidden: {
      width: 0
    }, 
    visible: {
      width: "max-content",
      transition: {
        ease: "linear",
        duration: .1,
      }
    }
  }

  const container = {
    hidden: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    visible: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  }

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  
  const imageIndex = wrap(0, images.length, page);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 3000)
    return () => clearInterval(interval)
  }, [page])

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const beforeAfterHeader = ["BEFORE", "AFTER"]
  const beforeAfterText = ["Potret sepatu sebelum dicuci menggunakan jasa 21Cleanshoes", "Potret sepatu setelah dicuci menggunakan jasa 21Cleanshoes"]

  const services = [
    {
      image: "/services/cleaning-services.png",
      headline: "CLEANING",
      desc: "Treatment pencucian untuk menghilangkan noda dan aman untuk semua bahan."
    },
    {
      image: "/services/repaint-services.png",
      headline: "REPAINT",
      desc: "Treatment pewarnaan ulang/penggantian warna untuk mencerahkan kembali warna sepatu anda."
    },
    {
      image: "/services/other-services.png",
      headline: "OTHERS",
      desc: "Konsultasikan masalah sepatu, tas kalian langsung pada tim kami."
    },
  ]

  const galleries = ["/gallery/gallery-1.png", "/gallery/gallery-1.png", "/gallery/gallery-1.png",
  "/gallery/gallery-1.png", "/gallery/gallery-1.png", "/gallery/gallery-1.png"]

  return (
    <>
      <Navbar />
      <main>
        <section className='bg-[url("/bg.png")] h-screen bg-cover bg-center bg-no-repeat'>
          <div className="w-full flex items-center h-full relative overflow-x-hidden">
            <motion.div variants={fadeInPopUp} initial="hidden" whileInView="visible" className="-right-4 absolute group z-10">
              <Image src={"/next-arrow.svg"} alt="left arrow" className="group-hover:translate-x-1 active:scale-90 transition-all cursor-pointer" onClick={() => paginate(1)} width={60} height={60} />
            </motion.div>
            <motion.div variants={fadeInPopUp} initial="hidden" whileInView="visible" className="-left-4 absolute group z-10">
              <Image src={"/before-arrow.svg"} alt="right arrow" className="group-hover:-translate-x-1 active:scale-90 transition-all cursor-pointer" onClick={() => paginate(-1)} width={60} height={60} />
            </motion.div>
            <motion.div
                className="mx-auto relative px-12 z-0"
                key={page}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.25}}
                transition={{
                  opacity: { duration: 1 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                >
                <Image src={images[imageIndex]} priority width={500} height={500} alt="shoes image" />
            </motion.div>
            <div className="absolute flex-wrap flex gap-8 flex-col sm:flex-row max-w-full left-0 right-0 px-6 md:px-12 sm:px-24 bottom-24 md:bottom-24">
              <div className="w-full md:w-1/3">
                <div>
                  <motion.h2 key={page}
                    variants={fadeIn}
                    custom={direction}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.25}}
                    transition={{
                      opacity: { duration: 1 }
                    }} className="font-bold text-xl md:text-3xl pb-2"
                    >
                    {beforeAfterHeader[imageIndex]}
                  </motion.h2>
                </div>
                <div>
                  <motion.p className="text-sm" 
                    key={page}
                    variants={fadeIn}
                    custom={direction}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.25}}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {beforeAfterText[imageIndex]}
                  </motion.p>
                </div>
              </div>
              <div className="w-full md:flex-1 flex sm:justify-start sm:-mb-8 justify-center sm:pl-20 items-end gap-8">
                <motion.a href="#"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  whileTap={{ scale: .9 }}
                  className="bg-[#333] text-white text-center w-36 font-medium active:scale-90 transition-all rounded-md px-4 py-[8px]"
                  >
                  Contact
                </motion.a>
                <motion.a href="https://wa.link/ovmaki"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    whileTap={{ scale: .9 }}
                  className="bg-white text-black font-medium text-center active:scale-90 transition-all shadow-custom w-36 rounded-md px-4 py-[8px]">
                  Order Now
                </motion.a>
              </div>
            </div>
          </div>
        </section>
        <motion.section variants={container} initial="closed" whileInView="open" className="px-6 md:px-12 lg:px-24 py-12 h-max lg:h-screen">
          <motion.div 
            variants={widthToRight}
            initial="hidden"
            whileInView="visible"
            className="border-b-[3px] pb-2">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">ABOUT 21CLEANSHOES</motion.h2>
          </motion.div>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            <motion.div variants={fadeInPopUp} initial="hidden"
            whileInView="visible" className="flex-1 relative flex justify-center lg:block">
              <Image src={"/logo.png"} width={150} height={150} alt="logo 21cleanshoes" />
            </motion.div>
            <div className="space-y-4 flex-[5] text-justify md:text-lg">
              <motion.p variants={fadeIn} initial="hidden" whileInView="visible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi, placeat fugit id veritatis iure explicabo a asperiores, reiciendis facere incidunt voluptas quae est officia eveniet sequi ut consectetur inventore minima eaque quisquam dolore nulla maxime! Blanditiis dicta tenetur voluptates molestias inventore exercitationem, aliquam obcaecati error commodi soluta totam eum dolore dolorum? Asperiores neque voluptatibus vero dicta porro nostrum id.</motion.p>
              <motion.p variants={fadeIn} initial="hidden" whileInView="visible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi ut recusandae laudantium vitae delectus ipsa? Beatae iure quod ipsa quas veniam, maiores eligendi in vitae. Laborum, adipisci fugit at laudantium earum libero consequatur sit, dolorum repellendus accusamus harum itaque.</motion.p>
              <motion.p variants={fadeIn} initial="hidden" whileInView="visible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam, voluptate quos fugiat adipisci necessitatibus officiis recusandae aut eligendi molestias ad, natus velit obcaecati sit reiciendis deserunt quis mollitia ipsam quaerat laborum voluptatem! Delectus maxime explicabo temporibus, reiciendis molestiae aliquid mollitia cumque magnam nisi eum quos quibusdam, ipsa provident harum?</motion.p>
              <motion.button
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                whileTap={{ scale: .9 }}
                className="bg-[#333] text-[#fff] font-medium active:scale-90 transition-all rounded-md px-12 py-[8px]">
                {"Detail ->"}
              </motion.button>
            </div>
          </div>
        </motion.section>
        <section className="px-6 md:px-12 lg:px-24 h-max lg:h-screen py-12 bg-[#F4F5F9] flex flex-col">
          <motion.div variants={widthToRight}
            initial="hidden"
            whileInView="visible" className="border-b-[3px] pb-2">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">OUR SERVICES</motion.h2>
          </motion.div>
          <motion.div variants={container} initial={false} whileInView="visible" className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              return (
                <ServicesCard key={i} service={...service} />
              )
            })}
          </motion.div>
          <motion.button
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            whileTap={{ scale: .9 }}
            className="bg-[#333] mt-8 mx-auto text-[#fff] font-medium active:scale-90 transition-all rounded-md px-12 py-[8px]">
            {"Detail ->"}
          </motion.button>
        </section>
        <section className="px-6 md:px-12 lg:px-24 py-12 flex flex-col">
          <motion.div variants={widthToRight} initial="hidden" whileInView="visible" className="border-b-[3px] pb-2">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">GALLERY</motion.h2>
          </motion.div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery, i) => {
              return (
                <motion.div key={i} variants={slideUp} initial="hidden" whileInView="visible" className="rounded-lg overflow-hidden mx-auto">
                  <Image src={gallery} width={400} height={400} alt="gallery image" />
                </motion.div>
              )
            })}
          </div>
          <motion.button
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            whileTap={{ scale: .9 }}
            className="bg-[#333] mt-8 mx-auto text-[#fff] font-medium active:scale-90 transition-all rounded-md px-12 py-[8px]">
            {"Detail ->"}
          </motion.button>
        </section>
        <TestimonialSlider />
        <Footer />
      </main>
    </>
  );
}
