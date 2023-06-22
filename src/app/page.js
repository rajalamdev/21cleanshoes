"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { wrap } from "framer-motion";
import { images } from "../../utils/image-data";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    console.log(page, direction)
  }, [page, direction])

  const navLinks = [
    {href: "/", name: "Home"},
    {href: "/about", name: "About"},
    {href: "/services", name: "Services"},
    {href: "/gallery", name: "Gallery"},
    {href: "/contact", name: "Contact"},
  ]

  const pathname = usePathname();

  return (
    <>
      <header>
        <nav className="flex fixed w-full justify-between py-2 sm:py-4 items-center px-8 sm:px-24 z-40">
          <div className="flex gap-2 items-center scale-75 md:scale-100">
            <Image src={"/logo.png"} width={70} height={70} />
            {/* <h1>21CLEANSHOES</h1> */}
          </div>
          <div className={`md:flex gap-12 text-md font-medium hidden`}>
            {navLinks.map(link => {
              return <Link className={`${pathname == link.href ? "text-white" : "text-white/60"} drop-shadow-2xl`} href={link.href}>{link.name}</Link>
            })}
          </div>
        </nav>
      </header>
      <main>
        <div className='bg-[url("/bg.png")] h-screen bg-cover bg-center bg-no-repeat'>
          <div className="px-24 w-full flex items-center h-full relative overflow-x-hidden">
            <div className="-right-4 absolute">
              <Image src={"/next-arrow.svg"} onClick={() => paginate(1)} width={60} height={60} />
            </div>
            <div className="-left-4 absolute">
              <Image src={"/before-arrow.svg"} onClick={() => paginate(-1)} width={60} height={60} />
            </div>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img width={400} height={400}  className="mx-auto relative"
                  key={page}
                  src={images[imageIndex]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
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
                  />
            </AnimatePresence>
            <div className="absolute flex-wrap flex gap-8 flex-col sm:flex-row max-w-full left-0 right-0 px-8 sm:px-24 bottom-24 md:bottom-24">
              <div className="w-full md:w-1/3">
                <h2 className="font-bold text-xl md:text-3xl pb-2">BEFORE</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam nemo facilis.
                </p>
              </div>
              <div className="w-full md:flex-1 flex sm:justify-start sm:-mb-8 justify-center sm:pl-20 items-end gap-8">
                <button className="bg-black text-white w-36 rounded-md px-4 py-[6px]">
                  Order
                </button>
                <button className="bg-black text-white w-36 rounded-md px-4 py-[6px]">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[800px]"></div>
      </main>
    </>
  );
}
