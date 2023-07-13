"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { sendContactForm } from '../../../lib/sendContact';
import { usePathname } from 'next/navigation';

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

const ContactForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        hp: "",
        ulasan: "",
        subject: "",
    })

    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const pathName = usePathname();

    function formOnChangeHandler(e){
        const id = e.target.id
        setData({...data,
            [id]: e.target.value,
            subject: pathName == "/testimonials" ? "Testimoni" : "Pesan"
        })
    }

    async function formSubmitHandler(e){
        setLoading(true)
        e.preventDefault();
        
        const sendEmail = await sendContactForm(data)
        const resSendEmail = await sendEmail.json();
        if (resSendEmail){
            setLoading(false)
            setSuccess(true)
            setData({
                name: "",
                email: "",
                hp: "",
                ulasan: "",
                subject: "",
            })

            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }
        // console.log(resSendEmail);
    }

    return (
        <section className="px-4 md:px-12 lg:px-24 pb-12">
            <motion.div variants={widthToRight}
                initial="hidden"
                whileInView="visible" className="border-b-[3px] pb-2 mb-12">
                <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-lg md:text-2xl after:mt-2 font-bold after:block w-max after:h-[3px] after:left-0 after:right-0 after:absolute relative after:bg-black ">{pathName == "/testimonials" ? "Kirim Ulasan" : "Kirim Pesan"}</motion.h2>
            </motion.div>
            <form onSubmit={formSubmitHandler}>
                <div className="flex gap-8 flex-wrap text-sm sm:text-base">
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <motion.label variants={slideToRight} initial="hidden" whileInView="visible" viewport={{once: true}} for="name" className="w-full">
                            <div>Nama</div>
                            <input value={data.name} type="text" className="mt-2 w-full outline-none py-4 px-4 ring-1 focus:ring-2 ring-[#333] rounded-xl" id="name" required onChange={formOnChangeHandler} placeholder="Masukan nama anda..."></input>
                        </motion.label>
                        <motion.label variants={slideToRight} initial="hidden" whileInView="visible" viewport={{once: true}} for="email" className="w-full">
                            <div>Email</div>
                            <input value={data.email} type="email" className="mt-2 w-full outline-none py-4 px-4 ring-1 focus:ring-2 ring-[#333] rounded-xl" id="email" required onChange={formOnChangeHandler} placeholder="example@gmail.com"></input>
                        </motion.label>
                        <motion.label variants={slideToRight} initial="hidden" whileInView="visible" viewport={{once: true}} for="hp" className="w-full">
                            <div>No. HP</div>
                            <input value={data.hp} type="number" maxLength={12} className="mt-2 w-full outline-none py-4 px-4 ring-1 focus:ring-2 ring-[#333] rounded-xl" id="hp" required onChange={formOnChangeHandler} placeholder="089xxxxxxxxx"></input>
                        </motion.label>
                    </div>
                    <motion.div variants={slideToRight} initial="hidden" whileInView="visible" viewport={{once: true}} className="flex-1">
                        <label for="ulasan" className="w-full">
                            <div>Ulasan</div>
                            <textarea value={data.ulasan} type="text" maxLength={500} className="mt-2 w-full min-h-[160px] max-h-[265px] outline-none py-4 px-4 ring-1 focus:ring-2 ring-[#333] rounded-xl" id="ulasan" required onChange={formOnChangeHandler}></textarea>
                        </label>
                    </motion.div>
                </div>
                {success && <p className='text-green-700 mt-6'>Berhasil mengirim pesan!</p>}
                <motion.button disabled={loading} variants={fadeInPopUp} initial="hidden" whileInView="visible" className={`mt-6 text-sm sm:text-base py-4 px-8 bg-[#333] text-white rounded-xl ${loading ? "cursor-not-allowed" : ""}`} type='submit'>
                    {loading ? (
                        <div className='flex gap-2'>
                            <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <p className='animate-pulse'>Loading . . .</p>
                        </div>
                    ) : (
                        "Submit"
                    )}
                </motion.button>
            </form>
        </section>
    )
}

export default ContactForm