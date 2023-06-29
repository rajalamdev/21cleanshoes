import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='snap-start relative'>
        <div className='bg-[#272D2E] flex justify-between flex-wrap gap-8 py-12 md:px-12 lg:px-24 px-6'>
            <div className='flex gap-8'>
                <Image src={"/footer/phone-icon.png"} width={40} height={40} className='self-start' />
                <div>
                  <h6 className='text-[#80888A] text-base mb-2'>Whatsapp Kami</h6>
                  <a href="#" className='text-white hover:underline text-xl'>0896 12345 2292</a>
                </div>
            </div>
            <div className='flex gap-8'>
                <Image src={"/footer/location-icon.png"} width={40} height={40} className='self-start scale-[.75]' />
                <div>
                  <h6 className='text-[#80888A] text-base mb-2'>Workshop</h6>
                  <a href="#" className='text-white hover:underline text-xl'>Jl. diponegoro xxxx xxx xxx</a>
                </div>
            </div>
            <div className='flex gap-8'>
                <Image src={"/footer/email-icon.png"} width={40} height={40} className='self-start' />
                <div>
                  <h6 className='text-[#80888A] text-base mb-2'>Whatsapp Kami</h6>
                  <a href="#" className='text-white hover:underline text-xl'>0896 12345 2292</a>
                </div>
            </div>

        </div>
        <div className='bg-[#343C3E] py-12 md:px-12 lg:px-24 px-6'>
          <div className='flex justify-self sm:justify-center flex-wrap sm:gap-8 gap-20'>
            <div className='space-y-4 sm:flex-1'>
              <h5 className='mb-8 text-white font-medium'>NAVIGASI</h5>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} width={15} height={15} />
                <Link href="/" className='text-white hover:underline'>Home</Link>
              </div>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} width={15} height={15} />
                <Link href="/about" className='text-white hover:underline'>About</Link>
              </div>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} width={15} height={15} />
                <Link href="/services" className='text-white hover:underline'>Services</Link>
              </div>
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} width={15} height={15} />
                <Link href="/gallery" className='text-white hover:underline'>Gallery</Link>
              </div> 
              <div className='flex gap-2'>
                <Image src={"/footer/arrow-icon.svg"} width={15} height={15} />
                <Link href="/contact" className='text-white hover:underline'>Contact</Link>
              </div>
            </div>
            <div className='space-y-8 sm:flex-1'>
              <h5 className='text-white font-medium'>ABOUT US</h5>
              <p className='text-[#B6BDBF]'>21CLEANSHOES merupakan usaha yang bergerak dibidang jasa laundry cuci sepatu berkualitas yang berasal dari Kota Sukabumi.</p>
              <div className='pt-4'>
                <Link href={"/about"} className='bg-[#40484A] text-white text-sm px-12 py-4 rounded-full'>Learn More</Link>
              </div>
            </div>
            <div className='sm:flex-1'>
              <p className='text-[#B6BDBF] mb-8'>Follow kita di Instagram untuk mendapatkan update tentang promo-promo menarik</p>
              <a href="">
                <Image src={"/footer/ig-follow-button.png"} width={150} height={150} />
              </a>
            </div>
          </div>
          <div className='flex justify-center py-12 gap-8'>
            <Image src={"/footer/fb-icon.svg"} width={50} height={50} />
            <Image src={"/footer/ig-icon.svg"} width={50} height={50} />
            <Image src={"/footer/wa-icon.svg"} width={50} height={50} />
          </div>
          <div className='text-[#B6BDBF]'>
            <p className='text-center'>{"Copyright ©2023 21CLEANSHOES"}</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer