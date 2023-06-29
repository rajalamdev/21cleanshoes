"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { wrap } from "framer-motion";
import { images } from "../../utils/image-data";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Footer from "./components/Footer";

const fadeIn = {
  enter: (direction) => {
    return {
      opacity: 0
    };
  },
  center: {
    opacity: 1
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? -1000 : 1000,
      opacity: 0
    };
  }
}

const slideUp = {
  from: {
    y: "100%",
    opacity: 0,
  },
  to: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0,
      delay: .1
    }
  }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  
  const [scrollY, setScrollY] = useState(0)

  const imageIndex = wrap(0, images.length, page);

  useEffect(() => {
    setTimeout(() => {
      paginate(1)
    }, 5000)
  }, [page])

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const beforeAfterHeader = ["BEFORE", "AFTER"]
  const beforeAfterText = ["Potret sepatu sebelum dicuci menggunakan jasa 21Cleanshoes", "Potret sepatu setelah dicuci menggunakan jasa 21Cleanshoes"]
  const pathname = usePathname();
  const navLinks = [
      {href: "/", name: "Home"},
      {href: "/about", name: "About"},
      {href: "/services", name: "Services"},
      {href: "/gallery", name: "Gallery"},
      {href: "/contact", name: "Contact"},
  ]

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
            <div className="-right-4 absolute group z-10">
              <Image src={"/next-arrow.svg"} alt="left arrow" className="group-hover:translate-x-1 active:scale-90 transition-all cursor-pointer" onClick={() => paginate(1)} width={60} height={60} />
            </div>
            <div className="-left-4 absolute group z-10">
              <Image src={"/before-arrow.svg"} alt="right arrow" className="group-hover:-translate-x-1 active:scale-90 transition-all cursor-pointer" onClick={() => paginate(-1)} width={60} height={60} />
            </div>
            <motion.div
                className="mx-auto relative px-12 z-0"
                key={page}
                variants={fadeIn}
                custom={direction}
                initial="enter"
                whileInView="center"
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
                <Image src={images[imageIndex]} width={500} height={500} alt="shoes image" />
            </motion.div>
            <div className="absolute flex-wrap flex gap-8 flex-col sm:flex-row max-w-full left-0 right-0 px-6 md:px-12 sm:px-24 bottom-24 md:bottom-24">
              <div className="w-full md:w-1/3">
                <div>
                  <motion.h2 key={page}
                    variants={fadeIn}
                    custom={direction}
                    initial="enter"
                    whileInView="center"
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
                    initial="enter"
                    whileInView="center"
                    viewport={{once: false, amount: 0.25}}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {beforeAfterText[imageIndex]}
                  </motion.p>
                </div>
              </div>
              <div className="w-full md:flex-1 flex sm:justify-start sm:-mb-8 justify-center sm:pl-20 items-end gap-8">
                <motion.button
                  variants={slideUp}
                  initial="from"
                  whileInView="to"
                  whileTap={{ scale: .9 }}
                  className="bg-[#333] text-white w-36 font-medium active:scale-90 transition-all rounded-md px-4 py-[8px]"
                  >
                  Contact
                </motion.button>
                <motion.button
                    variants={slideUp}
                    initial="from"
                    whileInView="to"
                    whileTap={{ scale: .9 }}
                  className="bg-white text-black font-medium active:scale-90 transition-all shadow-custom w-36 rounded-md px-4 py-[8px]">
                  Order Now
                </motion.button>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-12 lg:px-24 py-12 h-max lg:h-screen">
          <div className="border-b-[3px] pb-2">
            <h2 className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">ABOUT 21CLEANSHOES</h2>
          </div>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 relative flex justify-center lg:block">
              <Image src={"/logo.png"} width={150} height={150} />
            </div>
            <div className="space-y-4 flex-[5] text-justify md:text-lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi, placeat fugit id veritatis iure explicabo a asperiores, reiciendis facere incidunt voluptas quae est officia eveniet sequi ut consectetur inventore minima eaque quisquam dolore nulla maxime! Blanditiis dicta tenetur voluptates molestias inventore exercitationem, aliquam obcaecati error commodi soluta totam eum dolore dolorum? Asperiores neque voluptatibus vero dicta porro nostrum id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi ut recusandae laudantium vitae delectus ipsa? Beatae iure quod ipsa quas veniam, maiores eligendi in vitae. Laborum, adipisci fugit at laudantium earum libero consequatur sit, dolorum repellendus accusamus harum itaque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam, voluptate quos fugiat adipisci necessitatibus officiis recusandae aut eligendi molestias ad, natus velit obcaecati sit reiciendis deserunt quis mollitia ipsam quaerat laborum voluptatem! Delectus maxime explicabo temporibus, reiciendis molestiae aliquid mollitia cumque magnam nisi eum quos quibusdam, ipsa provident harum?</p>
              <motion.button
                variants={slideUp}
                initial="from"
                whileInView="to"
                whileTap={{ scale: .9 }}
                className="bg-[#333] text-[#fff] font-medium active:scale-90 transition-all rounded-md px-12 py-[8px]">
                {"Detail ->"}
              </motion.button>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-12 lg:px-24 h-max lg:h-screen py-12 bg-[#F4F5F9] flex flex-col">
          <div className="border-b-[3px] pb-2">
            <h2 className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">OUR SERVICES</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              return (
                <div className="bg-white py-12 flex flex-col items-center h-full rounded-xl">
                    <div>
                      <Image src={service.image} width={250} height={300} />
                    </div>
                    <div className="-mt-12 space-y-4 px-12">
                      <h3 className="text-center font-semibold md:text-lg border-b-2 border-b-black pb-2 w-max mx-auto">{service.headline}</h3>
                      <p className="text-center text-[#333]">{service.desc}</p>
                    </div>
                </div>
              )
            })}
          </div>
          <motion.button
            variants={slideUp}
            initial="from"
            whileInView="to"
            whileTap={{ scale: .9 }}
            className="bg-[#333] mt-8 mx-auto text-[#fff] font-medium active:scale-90 transition-all rounded-md px-12 py-[8px]">
            {"Detail ->"}
          </motion.button>
        </section>
        <section className="px-6 md:px-12 lg:px-24 py-12 flex flex-col">
          <div className="border-b-[3px] pb-2">
            <h2 className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">GALLERY</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map(gallery => {
              return (
                <div className="rounded-lg overflow-hidden mx-auto">
                  <Image src={gallery} width={400} height={400} />
                </div>
              )
            })}
          </div>
          <motion.button
            variants={slideUp}
            initial="from"
            whileInView="to"
            whileTap={{ scale: .9 }}
            className="bg-[#333] mt-8 mx-auto text-[#fff] font-medium active:scale-90 transition-all rounded-md px-12 py-[8px]">
            {"Detail ->"}
          </motion.button>
        </section>
        <section className="relative bg-[url('/testi-bg.png')] h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
            <Image src={"/testimonials/arrow.png"} width={60} height={60} className="absolute scale-[.8] sm:scale-100 -left-2 sm:left-8 cursor-pointer" />
            <div className="relative">
              <Image src={"/quote.png"} width={30} height={30} className="absolute sm:-left-16 -left-8 -top-8" />
              <p className="text-white text-base text-center sm:text-xl w-60 sm:w-[560px]">Treatment pencucian untuk menghilangkan noda dan aman untuk semua bahan.</p>
              <Image src={"/quote.png"} width={30} height={30} className="rotate-180 absolute sm:-right-16 -right-8" />
            </div>
            <div className="mt-8 h-[2px] w-24 bg-white"></div>
            <p className="text-white mt-8">Marsha lenathea lavia</p>
            <Image src={"/testimonials/person-1.png"} width={80} height={80} className="rounded-full mt-8 scale-90 sm:scale-100 " />
            <Image src={"/testimonials/arrow.png"} width={60} height={60} className="absolute scale-[.8] sm:scale-100 -right-2 sm:right-10 rotate-180 cursor-pointer" />
        </section>
        <Footer />
      </main>
    </>
  );
}
