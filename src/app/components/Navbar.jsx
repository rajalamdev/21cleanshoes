"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

const icon = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1
    },
  };

  
  const Navbar = () => {
    const pathname = usePathname();
    const navLinks = [
        {href: "/", name: "Home"},
        {href: "/about", name: "About"},
        {href: "/services", name: "Services"},
        {href: "/gallery", name: "Gallery"},
        {href: "/contact", name: "Contact"},
    ]


  useEffect(() => {
    const main = document.querySelector("main");
    const nav = document.querySelector("nav");
    main.addEventListener("scroll", () => {
      const scrollTop = main.scrollTop;

      if (scrollTop >= 100){
        nav.classList.add("active")
      } else {
        nav.classList.remove("active")
      }
    })
  })
  
  return (
    <header>
        <nav className="flex fixed transition-all w-full justify-between py-2 items-center px-6 md:px-12 sm:px-24 z-40">
          <motion.div variants={icon} transition={{
            duration: .2
          }} initial="hidden" animate="visible" className="flex gap-2 items-center scale-75 md:scale-100">
            <Image src={"/logo.png"} alt="logo 21cleanshoes" width={70} height={70} className='scale-[.8]' />
          </motion.div>
          <div className={`md:flex gap-12 text-md font-medium hidden`}>
            {navLinks.map(link => {
              return <Link key={link.href} className={`${pathname == link.href ? "active" : ""} hover:opacity-80 drop-shadow-2xl`} href={link.href}>{link.name}</Link>
            })}
          </div>
        </nav>
    </header>
  )
}

export default Navbar