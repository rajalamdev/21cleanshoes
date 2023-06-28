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
    const { scrollY } = useScroll()
    const navRef = useRef()
    const navLinks = [
        {href: "/", name: "Home"},
        {href: "/about", name: "About"},
        {href: "/services", name: "Services"},
        {href: "/gallery", name: "Gallery"},
        {href: "/contact", name: "Contact"},
    ]
  
    useMotionValueEvent(scrollY, "change", (latest) => {
      console.log("Page scroll: ", latest)
    })

  return (
    <header>
        <nav ref={navRef} className="flex fixed w-full justify-between py-2 sm:py-4 items-center px-8 sm:px-24 z-40">
          <motion.div variants={icon} transition={{
            duration: .2
          }} initial="hidden" animate="visible" className="flex gap-2 items-center scale-75 md:scale-100">
            <Image src={"/logo.png"} alt="logo 21cleanshoes" width={70} height={70} />
          </motion.div>
          <div className={`md:flex gap-12 text-md font-medium hidden`}>
            {navLinks.map(link => {
              return <Link key={link.href} className={`${pathname == link.href ? "text-white" : "text-white/60"} drop-shadow-2xl`} href={link.href}>{link.name}</Link>
            })}
          </div>
        </nav>
    </header>
  )
}

export default Navbar