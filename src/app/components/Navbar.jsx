"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

  const logo = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1
    },
  };

  const nav = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  }

  const navLink = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }
  
  const Navbar = () => {
    const pathname = usePathname();
    const navLinks = [
        {href: "/", name: "Home"},
        {href: "/about", name: "About"},
        {href: "/services", name: "Services"},
        {href: "/gallery", name: "Gallery"},
        {href: "/contact", name: "Contact"},
    ]
    const [openSidebar, setOpenSidebar] = useState(false)

  useEffect(() => {
    const main = document.querySelector("main");
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 100){
        nav.classList.add("active")
      } else {
        nav.classList.remove("active")
      }
    })
  })

  function toggleSidebar(){
    setOpenSidebar(!openSidebar)
  }
  
  return (
    <header>
        <nav className="flex fixed transition-all w-full justify-between py-2 items-center px-6 md:px-12 z-40">
          <motion.div variants={logo} transition={{
            duration: .2
          }} initial="hidden" animate="visible" className="flex gap-2 items-center scale-75 md:scale-100">
            <Image src={"/logo.png"} alt="logo 21cleanshoes" width={70} height={70} className='scale-[.8]' />
          </motion.div>
          <motion.div variants={nav} initial="closed" animate="open" className={`md:flex gap-12 text-md font-medium hidden`}>
            {navLinks.map(link => {
              return (
                <motion.div variants={navLink}>
                  <Link key={link.href} className={`${pathname == link.href ? "active" : ""} hover:opacity-80 drop-shadow-2xl`} href={link.href}>{link.name}</Link>
                </motion.div>
              )
            })}
          </motion.div>
        </nav>
        <motion.button onClick={toggleSidebar} variants={logo} initial="hidden" animate="visible" className='w-12 bg-white fixed right-[24px] top-[16px] h-12 z-50 rounded-full shadow-md md:hidden'>
            <div className='w-full px-3 py-4 h-full flex flex-col justify-between'>
              <div className={`w-full ${openSidebar ? "rotate-45" : ""} transition-all ${openSidebar ? "translate-y-[6px]": ""} h-[2px] bg-black rounded-full`}></div>
              <div className={`w-full ${openSidebar ? "hidden" : ""} h-[2px] bg-black rounded-full`}></div>
              <div className={`w-full ${openSidebar ? "-rotate-45" : ""} transition-all ${openSidebar ? "-translate-y-2": ""} h-[2px] bg-black rounded-full`}></div>
            </div>
        </motion.button>
        <motion.div variants={nav} initial={false} animate={`${openSidebar ? "open" : "closed"}`} className={`navMobile flex flex-col justify-center gap-12 items-center bg-white fixed top-0 left-0 right-0 bottom-0 z-40  transition-transform duration-[200ms] ease-in ${openSidebar ? "translate-y-0": "-translate-y-full"}`}>
            {navLinks.map(link => {
              return (
                <motion.div variants={navLink}>
                  <Link key={link.href} className={`${pathname == link.href ? "active" : ""} text-xl hover:opacity-80 drop-shadow-2xl`} href={link.href}>{link.name}</Link>
                </motion.div>
              )
            })}
        </motion.div>
    </header>
  )
}

export default Navbar