"use client"
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialSlider from "../components/TestimonialSlider";
import { sendContactForm } from "../../../lib/sendContact";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const dataTestimonials = [
    {
        name: "Mr. X",
        message: "Good place. Recommended lundry for shoes and bag."
    },
    {
        name: "Mr. X",
        message: "Dikasih job sama bos suruh cuci sepatu karyawan proyek! Lempar kesini aja pasti beres, hahay.."
    },
    {
        name: "Mr. X",
        message: "Sepatu putih abis kena lumpur jadi bersih lagi kayak baru 👍👍"
    },
    {
        name: "Mr. X",
        message: "Sepatu bisa di warna lagi jadi keren seperti baru 😍"
    },
    {
        name: "Mr. X",
        message: "Bersih, wangi, pelayanan ramah, ada layanan antar-jemput. TOP!"
    },
    {
        name: "Mr. X",
        message: "Rekomen sekali.. Sepatu saya jadi lebih bersih dan wangi ketimbang nyuci sendiri, wkwkwk.."
    },
    {
        name: "Mr. X",
        message: "Thank you sepatunya sudah balik bersih lg.. Lain kali mau coba repaint yaa.. 😊😊"
    },
    {
        name: "Mr. X",
        message: "Untuk pengerjaan sih okeh banget ya,utk waktu saya kira pas dengan hasil yg sangat bersih seperti baru lagi."
    },
    {
        name: "Mr. X",
        message: "Proses pengerjaannya cepat. Pelayanannya juga baik dan ramah. Untuk hasil deep cleaning dan whitening shoes nya memuaskan. Love it!"
    },
    {
        name: "Mr. X",
        message: "😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊"
    },
    {
        name: "Mr. X",
        message: "keren seperti baru 😍😍😍😍😍😍😍😍😍😍"
    },
    {
        name: "Mr. X",
        message: "Tempat langganan saya tiap mau nyuci sepatu kalo lagi males, hehe.. Suka"
    },
]

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

  const slideToRight = {
    hidden: {
        opacity: 0,
        x: "-100%"
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeOut",
            duration: .5
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

export default function Testimonials(){
    const [data, setData] = useState({
        name: "",
        email: "",
        hp: "",
        ulasan: "",
        subject: "",
    })

    function formOnChangeHandler(e){
        const id = e.target.id
        setData({...data,
            [id]: e.target.value,
            subject: "Testimonial"
        })
    }

    async function formSubmitHandler(e){
        e.preventDefault();
        
        const sendEmail = await sendContactForm(data)
        const resSendEmail = await sendEmail.json();
        // console.log(resSendEmail);
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="bg-white pt-36 pb-12 px-6 md:px-12 lg:px-24">
                    <motion.div variants={widthToRight}
                            initial="hidden"
                            whileInView="visible" className="border-b-[3px] pb-2 mb-12">
                            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">TESTIMONIAL</motion.h2>
                    </motion.div>
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="flex-1 text-sm sm:text-base flex justify-end space-x-4">
                        <Link href="/" className="font-medium">Home</Link>
                        <span>/</span>
                        <span className="text-black/60">Testimonials</span>
                    </motion.div>
                </section>
                <TestimonialSlider />
                <section className="columns-2 md:columns-2 lg:columns-4 px-6 md:px-12 lg:px-24 py-12 gap-8 h-full">
                    {dataTestimonials.map((testi, i) => {
                        return (
                            <TestimonialCard key={i} testi={testi} />
                        )
                    })}
                </section>
                <ContactForm />
            </main>
            <Footer />
        </>
    )
}